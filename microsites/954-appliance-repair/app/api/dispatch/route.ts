import { NextResponse } from "next/server"
import { Resend } from "resend"
import { site } from "@/lib/site"

// Residential lead payload. Mirrors components/lead-form.tsx fields, plus a
// honeypot and loose attribution fields.
type Payload = {
  name?: unknown
  phone?: unknown
  email?: unknown
  city?: unknown
  service?: unknown
  issue?: unknown
  website_url?: unknown // honeypot
  utm_source?: unknown
  utm_medium?: unknown
  utm_campaign?: unknown
  landing?: unknown
}

const LIMITS = {
  name: 120,
  phone: 30,
  email: 200,
  city: 120,
  service: 120,
  issue: 2000,
} as const

// Control characters we strip from all input: C0 range (except the CR/LF we
// handle separately) plus DEL. Prevents header/body injection into the email.
const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g

function asString(v: unknown, max: number, multiline = false):
  | { ok: true; v: string }
  | { ok: false } {
  if (v == null) return { ok: true, v: "" }
  if (typeof v !== "string") return { ok: false }
  // Strip control chars; collapse newlines on single-line fields so input can't
  // forge extra header/body lines in the email.
  let s = v.replace(CONTROL_CHARS, "")
  s = multiline ? s.replace(/\r\n?/g, "\n") : s.replace(/[\r\n]+/g, " ")
  const trimmed = s.trim()
  if (trimmed.length > max) return { ok: false }
  return { ok: true, v: trimmed }
}

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
}

function esc(v: unknown) {
  return String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}

function pick(raw: Record<string, unknown>, key: string): string {
  const v = raw[key]
  if (typeof v !== "string") return ""
  return v.replace(/[\u0000-\u001F\u007F]/g, " ").trim().slice(0, 200)
}

// --- tiny in-memory rate limiter (per-IP, best-effort) ----------------------
const HITS = new Map<string, number[]>()
function rateLimited(ip: string, limit = 5, windowMs = 10 * 60 * 1000): boolean {
  const now = Date.now()
  const arr = (HITS.get(ip) ?? []).filter((t) => now - t < windowMs)
  arr.push(now)
  HITS.set(ip, arr)
  if (HITS.size > 5000) {
    // opportunistic sweep so the map can't grow unbounded
    for (const [k, v] of HITS) {
      if (v.every((t) => now - t >= windowMs)) HITS.delete(k)
    }
  }
  return arr.length > limit
}

function clientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for")
  if (xff) return xff.split(",")[0].trim()
  return req.headers.get("x-real-ip") ?? "unknown"
}

export async function POST(req: Request) {
  let raw: Payload
  try {
    raw = (await req.json()) as Payload
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  // Honeypot — pretend success so bots stop retrying, but never email.
  if (typeof raw.website_url === "string" && raw.website_url.trim() !== "") {
    return NextResponse.json({ ok: true, transport: "noop" })
  }

  if (rateLimited(clientIp(req))) {
    return NextResponse.json(
      { error: `Too many requests — please call ${site.phone}.` },
      { status: 429 },
    )
  }

  const out: Record<string, string> = {}
  for (const key of Object.keys(LIMITS) as (keyof typeof LIMITS)[]) {
    const res = asString(raw[key], LIMITS[key], key === "issue")
    if (!res.ok) return NextResponse.json({ error: `Invalid field: ${key}` }, { status: 400 })
    out[key] = res.v
  }
  if (!out.name) return NextResponse.json({ error: "Please enter your name." }, { status: 400 })
  if (!out.phone || out.phone.length < 7) {
    return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 })
  }
  if (out.email && !isEmail(out.email)) {
    return NextResponse.json({ error: "That email doesn't look right." }, { status: 400 })
  }

  const rawObj = raw as Record<string, unknown>
  const utmSource = pick(rawObj, "utm_source") || site.utmSource
  const utmMedium = pick(rawObj, "utm_medium")
  const utmCampaign = pick(rawObj, "utm_campaign")
  const landing = pick(rawObj, "landing")
  const source =
    `${utmSource}${utmMedium ? " / " + utmMedium : ""}${utmCampaign ? " (" + utmCampaign + ")" : ""}` +
    (landing ? ` → ${landing}` : "")

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("[954 dispatch] RESEND_API_KEY not set — refusing submission")
    console.error("[954 dispatch] LOST LEAD (recover manually):", JSON.stringify(out))
    return NextResponse.json(
      { error: `We couldn't send that. Please call ${site.phone}.` },
      { status: 500 },
    )
  }

  const from = process.env.DISPATCH_FROM_EMAIL ?? "leads@954appliancerepair.com"
  const to = process.env.DISPATCH_TO_EMAIL ?? site.email

  // Subject prefix identifies the source micro-site at a glance in the shared inbox.
  const subject = `${site.leadSubjectPrefix} — ${out.name} · ${out.city || "Broward"} · ${out.service || "Appliance"}`

  const text = `New lead — 954 Appliance Repair

Name: ${out.name}
Phone: ${out.phone}
Email: ${out.email || "—"}
City: ${out.city || "—"}
Appliance/Service: ${out.service || "—"}
Source: ${source}

Issue:
${out.issue || "—"}
`

  const html = `<table style="font-family:'Segoe UI',system-ui,sans-serif;font-size:14px;color:#1b1c1e;border-collapse:collapse">
  <tr><td colspan="2" style="padding:0 0 12px;font-size:16px;font-weight:700">New lead — 954 Appliance Repair</td></tr>
  ${[
    ["Name", out.name],
    ["Phone", out.phone],
    ["Email", out.email || "—"],
    ["City", out.city || "—"],
    ["Appliance", out.service || "—"],
    ["Source", source],
  ]
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#71757c;white-space:nowrap">${esc(k)}</td><td style="padding:4px 0">${esc(v)}</td></tr>`,
    )
    .join("")}
  <tr><td colspan="2" style="padding:12px 0 4px;color:#71757c">Issue</td></tr>
  <tr><td colspan="2" style="white-space:pre-wrap">${esc(out.issue || "—")}</td></tr>
</table>`

  try {
    const resend = new Resend(apiKey)
    const payload: Parameters<typeof resend.emails.send>[0] = { from, to, subject, text, html }
    if (out.email) payload.replyTo = out.email
    const result = await resend.emails.send(payload)
    if (result.error) {
      console.error("[954 dispatch] resend error:", result.error)
      console.error("[954 dispatch] LOST LEAD (recover manually):\n" + text)
      return NextResponse.json({ error: "Email transport failed" }, { status: 502 })
    }
    return NextResponse.json({ ok: true, id: result.data?.id })
  } catch (err) {
    console.error("[954 dispatch] resend exception:", err)
    console.error("[954 dispatch] LOST LEAD (recover manually):\n" + text)
    return NextResponse.json({ error: "Email transport failed" }, { status: 502 })
  }
}

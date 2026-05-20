import { NextResponse } from "next/server"
import { Resend } from "resend"
import { site } from "@/lib/site"
import { clientIpFrom, rateLimit, sweepIfNeeded } from "@/lib/rate-limit"

// Validated dispatch payload. Mirrors the form fields in
// `components/dispatch-form.tsx`. Plus a honeypot field.
type Payload = {
  company?: unknown
  contact?: unknown
  phone?: unknown
  email?: unknown
  address?: unknown
  city?: unknown
  service?: unknown
  brand?: unknown
  model?: unknown
  urgency?: unknown
  issue?: unknown
  preferredTime?: unknown
  website_url?: unknown // honeypot — bots fill this; humans never see it
}

type Validated = {
  company: string
  contact: string
  phone: string
  email: string
  address: string
  city: string
  service: string
  brand: string
  model: string
  urgency: string
  issue: string
  preferredTime: string
}

// Length caps. `issue` is the only free-text field that can grow long.
const LIMITS = {
  company: 200,
  contact: 120,
  phone: 30,
  email: 200,
  address: 300,
  city: 120,
  service: 120,
  brand: 80,
  model: 120,
  urgency: 40,
  issue: 2000,
  preferredTime: 120,
} as const

function asString(v: unknown, max: number): { ok: true; v: string } | { ok: false } {
  if (v == null) return { ok: true, v: "" }
  if (typeof v !== "string") return { ok: false }
  const trimmed = v.trim()
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

function validate(data: Payload):
  | { ok: true; value: Validated }
  | { ok: false; error: string } {
  const out: Record<string, string> = {}
  for (const key of Object.keys(LIMITS) as (keyof typeof LIMITS)[]) {
    const res = asString(data[key], LIMITS[key])
    if (!res.ok) return { ok: false, error: `Invalid field: ${key}` }
    out[key] = res.v
  }
  if (!out.contact) return { ok: false, error: "Missing field: contact" }
  if (!out.phone || out.phone.length < 7) {
    return { ok: false, error: "Missing field: phone" }
  }
  if (!out.address) return { ok: false, error: "Missing field: address" }
  if (out.email && !isEmail(out.email)) {
    return { ok: false, error: "Invalid email" }
  }
  return { ok: true, value: out as unknown as Validated }
}

export async function POST(req: Request) {
  let raw: Payload
  try {
    raw = (await req.json()) as Payload
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  // Honeypot: real users never see/fill `website_url`. If a bot did, pretend
  // success so it stops retrying — but never send the email.
  if (typeof raw.website_url === "string" && raw.website_url.trim() !== "") {
    return NextResponse.json({ ok: true, transport: "noop" })
  }

  // Rate-limit per IP: 5 submissions / 10 minutes. Cheap, in-memory.
  sweepIfNeeded()
  const ip = clientIpFrom(req)
  const limit = rateLimit(`dispatch:${ip}`, {
    limit: 5,
    windowMs: 10 * 60 * 1000,
  })
  if (!limit.ok) {
    return NextResponse.json(
      { error: "Too many requests. Call dispatch directly." },
      {
        status: 429,
        headers: { "Retry-After": String(limit.retryAfterSeconds) },
      },
    )
  }

  const parsed = validate(raw)
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 })
  }
  const data = parsed.value

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    // S12: loud-fail. No silent "logged" success — operations would never
    // see lost leads. Caller gets a clear server-config error with the phone
    // number to fall back to.
    console.error(
      "[dispatch] RESEND_API_KEY is not set — refusing to accept submissions",
    )
    return NextResponse.json(
      {
        error: `Server configuration error. Please call dispatch at ${site.phone}.`,
      },
      { status: 500 },
    )
  }

  const from = process.env.DISPATCH_FROM_EMAIL ?? `dispatch@${site.domain}`
  const to = process.env.DISPATCH_TO_EMAIL ?? site.email

  const subject = `Dispatch — ${data.company || "—"} · ${data.city || "—"} · ${data.urgency ? data.urgency.toUpperCase() : "—"}`

  const text = `New commercial dispatch request

Company: ${data.company || "—"}
Contact: ${data.contact}
Phone: ${data.phone}
Email: ${data.email || "—"}
Address: ${data.address}
City: ${data.city || "—"}
Service: ${data.service || "—"}
Brand: ${data.brand || "—"}
Model: ${data.model || "—"}
Urgency: ${data.urgency || "—"}
Preferred window: ${data.preferredTime || "—"}

Issue:
${data.issue || "—"}
`

  const html = `<table style="font-family:Inter,system-ui,sans-serif;font-size:14px;color:#0f172a;border-collapse:collapse">
  <tr><td colspan="2" style="padding:0 0 12px;font-size:16px;font-weight:600">New commercial dispatch request</td></tr>
  ${[
    ["Company", data.company || "—"],
    ["Contact", data.contact],
    ["Phone", data.phone],
    ["Email", data.email || "—"],
    ["Address", data.address],
    ["City", data.city || "—"],
    ["Service", data.service || "—"],
    ["Brand", data.brand || "—"],
    ["Model", data.model || "—"],
    ["Urgency", data.urgency || "—"],
    ["Preferred", data.preferredTime || "—"],
  ]
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#64748b;white-space:nowrap">${esc(k)}</td><td style="padding:4px 0">${esc(v)}</td></tr>`,
    )
    .join("")}
  <tr><td colspan="2" style="padding:12px 0 4px;color:#64748b">Issue</td></tr>
  <tr><td colspan="2" style="white-space:pre-wrap">${esc(data.issue || "—")}</td></tr>
</table>`

  try {
    const resend = new Resend(apiKey)
    // Only attach replyTo when the user provided a valid email. Passing
    // undefined upsets the Resend SDK in some versions.
    const payload: Parameters<typeof resend.emails.send>[0] = {
      from,
      to,
      subject,
      text,
      html,
    }
    if (data.email) {
      payload.replyTo = data.email
    }
    const result = await resend.emails.send(payload)
    if (result.error) {
      console.error("[dispatch] resend error:", result.error)
      return NextResponse.json(
        { error: "Email transport failed", detail: result.error.message },
        { status: 502 },
      )
    }
    return NextResponse.json({ ok: true, id: result.data?.id })
  } catch (err) {
    console.error("[dispatch] resend exception:", err)
    return NextResponse.json(
      { error: "Email transport failed" },
      { status: 502 },
    )
  }
}

import { NextResponse } from "next/server"
import { Resend } from "resend"
import { randomUUID } from "node:crypto"
import { site } from "@/lib/site"
import { clientIpFrom, rateLimit, sweepIfNeeded } from "@/lib/rate-limit"

// Job-application payload. Mirrors the form fields in
// `components/careers-apply-form.tsx`. Plus anti-bot fields:
//   website_url — honeypot (hidden input; humans never fill it)
//   form_ts     — time-trap (Date.now() stamped client-side on mount; a
//                 submission arriving faster than a human can read the form
//                 is dropped with a fake success, same as the honeypot)
type Payload = {
  name?: unknown
  phone?: unknown
  city?: unknown
  experience?: unknown
  email?: unknown
  website_url?: unknown
  form_ts?: unknown
}

const LIMITS = {
  name: 120,
  phone: 30,
  city: 120,
  experience: 2000,
  email: 200,
} as const

// Anything submitted under 4 seconds after render is not a person reading a
// job posting. Matches the honeypot response shape: fake success, no email.
const MIN_FILL_MS = 4000

function asString(
  v: unknown,
  max: number,
  multiline = false,
): { ok: true; v: string } | { ok: false } {
  if (v == null) return { ok: true, v: "" }
  if (typeof v !== "string") return { ok: false }
  // Same injection hardening as /api/dispatch: strip control characters;
  // single-line fields collapse CR/LF so input can't forge extra lines in the
  // email subject or body.
  let s = v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
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

export async function POST(req: Request) {
  const applicationId = randomUUID()
  let raw: Payload
  try {
    raw = (await req.json()) as Payload
  } catch {
    return NextResponse.json(
      { ok: false, delivered: false, application_id: applicationId, error: "Invalid JSON" },
      { status: 400 },
    )
  }

  // Honeypot: pretend success so bots stop retrying — never send the email.
  if (typeof raw.website_url === "string" && raw.website_url.trim() !== "") {
    return NextResponse.json({
      ok: true,
      delivered: false,
      application_id: applicationId,
      transport: "noop",
    })
  }

  // Time-trap: form_ts is stamped client-side when the form mounts. Missing,
  // malformed, future-dated, or too-fast submissions get the same silent noop.
  const ts = Number(raw.form_ts)
  const elapsed = Date.now() - ts
  if (!Number.isFinite(ts) || elapsed < MIN_FILL_MS) {
    return NextResponse.json({
      ok: true,
      delivered: false,
      application_id: applicationId,
      transport: "noop",
    })
  }

  sweepIfNeeded()
  const ip = clientIpFrom(req)
  const limit = rateLimit(`careers:${ip}`, {
    limit: 5,
    windowMs: 10 * 60 * 1000,
  })
  if (!limit.ok) {
    return NextResponse.json(
      {
        ok: false,
        delivered: false,
        application_id: applicationId,
        error: "Too many requests. Please call us instead.",
      },
      {
        status: 429,
        headers: { "Retry-After": String(limit.retryAfterSeconds) },
      },
    )
  }

  const out: Record<string, string> = {}
  for (const key of Object.keys(LIMITS) as (keyof typeof LIMITS)[]) {
    const res = asString(raw[key], LIMITS[key], key === "experience")
    if (!res.ok) {
      return NextResponse.json(
        {
          ok: false,
          delivered: false,
          application_id: applicationId,
          error: `Invalid field: ${key}`,
        },
        { status: 400 },
      )
    }
    out[key] = res.v
  }
  if (!out.name) {
    return NextResponse.json(
      { ok: false, delivered: false, application_id: applicationId, error: "Missing field: name" },
      { status: 400 },
    )
  }
  if (!out.phone || out.phone.length < 7) {
    return NextResponse.json(
      { ok: false, delivered: false, application_id: applicationId, error: "Missing field: phone" },
      { status: 400 },
    )
  }
  if (out.email && !isEmail(out.email)) {
    return NextResponse.json(
      { ok: false, delivered: false, application_id: applicationId, error: "Invalid email" },
      { status: 400 },
    )
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error(
      "[careers] RESEND_API_KEY is not set — refusing to accept applications",
    )
    console.error(
      "[careers] LOST APPLICATION (recover manually):",
      JSON.stringify(out),
    )
    return NextResponse.json(
      {
        ok: false,
        delivered: false,
        application_id: applicationId,
        error: `Server configuration error. Please call ${site.phone}.`,
      },
      { status: 500 },
    )
  }

  const from = process.env.DISPATCH_FROM_EMAIL ?? `dispatch@${site.domain}`
  // Applications go to the shared Berne inbox. Subject leads with
  // "ТРУДОУСТРОЙСТВО" so Eugene can filter job applications in Gmail the same
  // way "ЗАКАЗ" filters leads.
  const to = process.env.CAREERS_TO_EMAIL ?? site.email
  const subject = `ТРУДОУСТРОЙСТВО — ${out.name} · ${out.city || "—"}`

  const text = `New job application (berne-commercial.com/careers)

Application ID: ${applicationId}

Name: ${out.name}
Phone: ${out.phone}
City: ${out.city || "—"}
Email: ${out.email || "—"}

Experience:
${out.experience || "—"}
`

  const html = `<table style="font-family:Inter,system-ui,sans-serif;font-size:14px;color:#0f172a;border-collapse:collapse">
  <tr><td colspan="2" style="padding:0 0 12px;font-size:16px;font-weight:600">New job application — berne-commercial.com/careers</td></tr>
  ${[
    ["Application ID", applicationId],
    ["Name", out.name],
    ["Phone", out.phone],
    ["City", out.city || "—"],
    ["Email", out.email || "—"],
  ]
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#64748b;white-space:nowrap">${esc(k)}</td><td style="padding:4px 0">${esc(v)}</td></tr>`,
    )
    .join("")}
  <tr><td colspan="2" style="padding:12px 0 4px;color:#64748b">Experience</td></tr>
  <tr><td colspan="2" style="white-space:pre-wrap">${esc(out.experience || "—")}</td></tr>
</table>`

  try {
    const resend = new Resend(apiKey)
    const payload: Parameters<typeof resend.emails.send>[0] = {
      from,
      to,
      subject,
      text,
      html,
    }
    if (out.email) {
      payload.replyTo = out.email
    }
    const result = await resend.emails.send(payload)
    if (result.error) {
      console.error("[careers] resend error:", result.error)
      console.error("[careers] LOST APPLICATION (recover manually):\n" + text)
      return NextResponse.json(
        {
          ok: false,
          delivered: false,
          application_id: applicationId,
          error: "Email transport failed",
          detail: result.error.message,
        },
        { status: 502 },
      )
    }
    return NextResponse.json({
      ok: true,
      delivered: true,
      application_id: applicationId,
      transport: "resend",
      id: result.data?.id,
    })
  } catch (err) {
    console.error("[careers] resend exception:", err)
    console.error("[careers] LOST APPLICATION (recover manually):\n" + text)
    return NextResponse.json(
      {
        ok: false,
        delivered: false,
        application_id: applicationId,
        error: "Email transport failed",
      },
      { status: 502 },
    )
  }
}

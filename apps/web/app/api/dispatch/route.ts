import { NextResponse } from "next/server"
import { Resend } from "resend"
import { site } from "@/lib/site"

type Payload = {
  company?: string
  contact?: string
  phone?: string
  email?: string
  address?: string
  city?: string
  service?: string
  brand?: string
  model?: string
  urgency?: string
  issue?: string
  preferredTime?: string
}

const required: (keyof Payload)[] = ["contact", "phone", "address"]

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
  let data: Payload
  try {
    data = (await req.json()) as Payload
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  for (const k of required) {
    if (!data[k] || String(data[k]).trim() === "") {
      return NextResponse.json(
        { error: `Missing field: ${k}` },
        { status: 400 },
      )
    }
  }

  if (data.email && !isEmail(String(data.email))) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.DISPATCH_FROM_EMAIL ?? `dispatch@${site.domain}`
  const to = process.env.DISPATCH_TO_EMAIL ?? site.email

  const subject = `Dispatch — ${data.company} · ${data.city} · ${data.urgency?.toUpperCase()}`

  const text = `New commercial dispatch request

Company: ${data.company}
Contact: ${data.contact}
Phone: ${data.phone}
Email: ${data.email}
Address: ${data.address}
City: ${data.city}
Service: ${data.service}
Brand: ${data.brand ?? "—"}
Model: ${data.model ?? "—"}
Urgency: ${data.urgency}
Preferred window: ${data.preferredTime ?? "—"}

Issue:
${data.issue}
`

  const html = `<table style="font-family:Inter,system-ui,sans-serif;font-size:14px;color:#0f172a;border-collapse:collapse">
  <tr><td colspan="2" style="padding:0 0 12px;font-size:16px;font-weight:600">New commercial dispatch request</td></tr>
  ${[
    ["Company", data.company],
    ["Contact", data.contact],
    ["Phone", data.phone],
    ["Email", data.email],
    ["Address", data.address],
    ["City", data.city],
    ["Service", data.service],
    ["Brand", data.brand ?? "—"],
    ["Model", data.model ?? "—"],
    ["Urgency", data.urgency],
    ["Preferred", data.preferredTime ?? "—"],
  ]
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#64748b;white-space:nowrap">${esc(k)}</td><td style="padding:4px 0">${esc(v)}</td></tr>`,
    )
    .join("")}
  <tr><td colspan="2" style="padding:12px 0 4px;color:#64748b">Issue</td></tr>
  <tr><td colspan="2" style="white-space:pre-wrap">${esc(data.issue)}</td></tr>
</table>`

  if (!apiKey) {
    console.warn("[dispatch] RESEND_API_KEY not set — logging only")
    console.log("[dispatch] to:", to, "\n", text)
    return NextResponse.json({ ok: true, transport: "logged" })
  }

  try {
    const resend = new Resend(apiKey)
    const result = await resend.emails.send({
      from,
      to,
      replyTo: String(data.email),
      subject,
      text,
      html,
    })
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

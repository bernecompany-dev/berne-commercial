import { NextResponse } from "next/server"
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

const required: (keyof Payload)[] = [
  "company",
  "contact",
  "phone",
  "email",
  "address",
  "city",
  "service",
  "urgency",
  "issue",
]

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
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

  if (!isEmail(String(data.email))) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 })
  }

  const body = `New commercial dispatch request

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

  // TODO: replace with Resend / SMTP transport once credentials are set.
  // Example (Resend):
  //   await resend.emails.send({
  //     from: "dispatch@bernecommercial.com",
  //     to: site.email,
  //     subject: `Dispatch — ${data.company} (${data.city})`,
  //     text: body,
  //   })
  // For now: log on the server.
  console.log("[dispatch] →", site.email, "\n" + body)

  return NextResponse.json({ ok: true })
}

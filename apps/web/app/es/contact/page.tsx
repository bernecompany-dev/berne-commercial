import type { Metadata } from "next"
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react"
import { PageHero, PageShell } from "@/components/page-shell"
import { Card } from "@workspace/ui/components/card"
import { DispatchForm } from "@/components/dispatch-form"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contacto — Despacho comercial",
  description:
    "Comuníquese con Berne Commercial Repair para servicio de equipo comercial en el Sur de Florida.",
  alternates: {
    canonical: "/es/contact",
    languages: {
      en: "/contact",
      es: "/es/contact",
      "x-default": "/contact",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_US",
    url: `${site.url}/es/contact`,
    siteName: site.name,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
}

// Berne family dispatch lines. The primary number lives in site.ts; the two
// below give Broward and Palm Beach callers a local-area-code line into the
// same shared dispatch board.
const ALT_PHONES_ES = [
  { label: "Despacho Broward", display: "(954) 569-8550", href: "tel:+19545698550" },
  { label: "Despacho Palm Beach", display: "(561) 858-9919", href: "tel:+15618589919" },
] as const

export default function ContactPageES() {
  return (
    <PageShell locale="es">
      <PageHero
        eyebrow="Contacto"
        title="Hablar con despacho comercial"
        description="Servicio comercial de emergencia el mismo día en todo el Sur de Florida."
      />
      <section className="bg-background py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="space-y-4 lg:col-span-2">
            <Card className="gap-4 p-6">
              <Item icon={Phone} label="Despacho principal" value={site.phone} href={site.phoneHref} />
              {ALT_PHONES_ES.map((p) => (
                <Item key={p.href} icon={Phone} label={p.label} value={p.display} href={p.href} />
              ))}
              <Item icon={Mail} label="Email" value={site.email} href={`mailto:${site.email}`} />
              <Item
                icon={MapPin}
                label="Cobertura"
                value={`${site.address.locality}, ${site.address.region} · Miami-Dade, Broward, Palm Beach`}
              />
              <Item icon={ShieldCheck} label="Estado" value="Con licencia y asegurado" />
            </Card>
          </div>
          <div className="lg:col-span-3">
            <DispatchForm locale="es" />
          </div>
        </div>
      </section>
    </PageShell>
  )
}

function Item({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  href?: string
}) {
  const content = (
    <div className="flex items-start gap-3">
      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
        <Icon className="size-4" />
      </span>
      <div>
        <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </div>
  )
  return href ? (
    <a href={href} className="block hover:opacity-80">
      {content}
    </a>
  ) : (
    content
  )
}

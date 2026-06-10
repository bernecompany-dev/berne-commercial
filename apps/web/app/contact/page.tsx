import type { Metadata } from "next"
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react"
import { PageHero, PageShell } from "@/components/page-shell"
import { Card } from "@workspace/ui/components/card"
import { DispatchForm } from "@/components/dispatch-form"
import { metaFor } from "@/lib/seo"
import { site } from "@/lib/site"

export const metadata: Metadata = metaFor({
  title: "Contact — Commercial Dispatch",
  description:
    "Contact Berne Commercial Repair for commercial equipment service in South Florida. 24/7 dispatch across Miami-Dade, Broward and Palm Beach.",
  path: "/contact",
})

// Berne family dispatch lines per canonical-facts.md. The primary number
// (754) 345-4515 lives in site.ts; the additional two below route into the
// same shared dispatch board (Service Fusion) and exist so callers from
// Broward / Palm Beach reach a local-area-code number when they need to.
const ALT_PHONES = [
  { label: "Broward dispatch", display: "(954) 569-8550", href: "tel:+19545698550" },
  { label: "Palm Beach dispatch", display: "(561) 858-9919", href: "tel:+15618589919" },
] as const

export default function ContactPage() {
  return (
    <PageShell hideDispatchCta>
      <PageHero
        eyebrow="Contact"
        title="Talk to commercial dispatch"
        description="Same-day emergency commercial service across South Florida — Miami-Dade, Broward, Palm Beach and the Gulf Coast."
      />
      <section className="bg-background py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="space-y-4 lg:col-span-2">
            <Card className="gap-4 p-6">
              <Item icon={Phone} label="Primary dispatch" value={site.phone} href={site.phoneHref} />
              {ALT_PHONES.map((p) => (
                <Item key={p.href} icon={Phone} label={p.label} value={p.display} href={p.href} />
              ))}
              <p className="text-xs text-muted-foreground">
                All three lines reach the same 24/7 dispatch desk — call
                whichever is local to you.
              </p>
              <Item icon={Mail} label="Email" value={site.email} href={`mailto:${site.email}`} />
              <Item
                icon={MapPin}
                label="Coverage"
                value={`${site.address.locality}, ${site.address.region} · Miami-Dade, Broward, Palm Beach`}
              />
              <Item icon={ShieldCheck} label="Status" value={site.licenses} />
            </Card>
          </div>
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-semibold tracking-tight">
              Request a service visit
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              A dispatcher will confirm the service window shortly.
            </p>
            <div className="mt-6">
              <DispatchForm />
            </div>
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
      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="size-4" />
      </span>
      <div>
        <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
        {/* Clickable values must LOOK clickable — primary + hover underline,
            unlike the static Coverage/Status rows. */}
        <div
          className={
            href
              ? "text-sm font-medium text-primary underline-offset-2 group-hover:underline"
              : "text-sm font-medium"
          }
        >
          {value}
        </div>
      </div>
    </div>
  )
  return href ? (
    <a href={href} className="group block">
      {content}
    </a>
  ) : (
    content
  )
}

import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import { PageHero, PageShell } from "@/components/page-shell"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { DispatchForm } from "@/components/dispatch-form"
import { JsonLd } from "@/components/json-ld"
import { metaFor, breadcrumbSchema } from "@/lib/seo"
import { site } from "@/lib/site"

export const metadata: Metadata = metaFor({
  title: "Become a Client — Enterprise Commercial Service",
  description:
    "Onboard your restaurants, production facilities or property-managed buildings to Berne Commercial Repair.",
  path: "/become-a-client",
})

const capabilities: { label: string; href?: string }[] = [
  { label: "Multi-location dispatch and reporting" },
  { label: "COI and vendor onboarding (W-9, insurance)" },
  { label: "Property management and facility management coverage" },
  {
    label: "Refrigeration, restaurant equipment, ice, laundry",
    href: "/services/commercial-appliance-repair",
  },
  { label: "Replacement coordination when repair is not viable" },
  { label: "24/7 emergency commercial dispatch" },
]

export default function BecomeAClientPage() {
  return (
    <PageShell>
      <Breadcrumbs
        items={[{ name: "Home", href: "/" }, { name: "Become a Client" }]}
      />
      <PageHero
        eyebrow="Become a Client"
        title="Enterprise commercial service partnership"
        description="Onboard restaurants, chains, production facilities and property-managed buildings with a dedicated dispatch relationship."
      />
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold tracking-tight">
              Commercial capabilities
            </h2>
            <p className="mt-4 text-muted-foreground">
              Berne Commercial Repair operates as a vendor across South Florida
              — built for chains, restaurants, food production, hotels, retail
              and property managers.
            </p>
            <ul className="mt-6 space-y-3">
              {capabilities.map((capability) => (
                <li key={capability.label} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  {capability.href ? (
                    <Link
                      href={capability.href}
                      className="text-foreground underline-offset-2 hover:text-primary hover:underline"
                    >
                      {capability.label}
                    </Link>
                  ) : (
                    <span>{capability.label}</span>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-xl border border-border bg-muted/40 p-5 text-sm">
              <div className="font-semibold">Send onboarding to</div>
              <a
                href={`mailto:${site.email}`}
                className="text-primary hover:underline"
              >
                {site.email}
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <DispatchForm />
          </div>
        </div>
      </section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Become a Client", url: `${site.url}/become-a-client` },
        ])}
      />
    </PageShell>
  )
}

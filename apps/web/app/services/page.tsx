import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PageHero, PageShell } from "@/components/page-shell"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card } from "@workspace/ui/components/card"
import { JsonLd } from "@/components/json-ld"
import { metaFor, breadcrumbSchema } from "@/lib/seo"
import { site } from "@/lib/site"
import { services, servicesByCategory } from "@/lib/data/services"
import { BRAND_SERVICES } from "@/lib/data/brand-services"

export const metadata: Metadata = metaFor({
  title: "Commercial Repair Services",
  description:
    "Refrigeration, ice machines, restaurant equipment, commercial laundry — full commercial repair coverage across South Florida.",
  path: "/services",
})

export default function ServicesPage() {
  const groups = servicesByCategory()
  return (
    <PageShell>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services" }]} />
      <PageHero
        eyebrow="Services"
        title="Commercial repair services"
        description="Refrigeration, restaurant equipment, ice machines, commercial laundry and back-of-house systems."
      />
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl space-y-14 px-4 sm:px-6 lg:px-8">
          {/* Cost-guide data-asset callout — links the resource from the
              services hub (internal-equity distribution, 2026-06-29). */}
          <Link
            href="/resources/commercial-kitchen-repair-cost-guide"
            className="group block"
          >
            <Card className="gap-2 border-primary/30 bg-primary/5 p-6 transition-all hover:border-primary/50 hover:shadow-md">
              <div className="flex items-start justify-between gap-3">
                <span className="text-base font-semibold text-foreground group-hover:text-primary">
                  South Florida Commercial Kitchen Repair Cost Guide
                </span>
                <ArrowUpRight className="size-5 shrink-0 text-primary" />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                What repairs actually cost by equipment type — walk-in, ice,
                fryer, combi, dishwasher, range and more — plus typical
                lifespans and an interactive repair-vs-replace calculator.
              </p>
            </Card>
          </Link>

          {groups.map((g) => (
            <div key={g.category}>
              <h2 className="text-2xl font-semibold tracking-tight">
                {g.label}
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="group">
                    <Card className="h-full gap-3 p-5 transition-all hover:border-primary/40 hover:shadow-md">
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-sm font-semibold">{s.title}</span>
                        <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                      </div>
                      <p className="text-xs leading-relaxed text-muted-foreground">{s.summary}</p>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Brand-specific service pages (Content_Plan 2026-06-10) — static
              routes from lib/data/brand-services.ts, not services.ts. */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Brand-Specific Repair
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {BRAND_SERVICES.map((b) => (
                <Link
                  key={b.slug}
                  href={`/services/${b.slug}`}
                  className="group"
                >
                  <Card className="h-full gap-3 p-5 transition-all hover:border-primary/40 hover:shadow-md">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-sm font-semibold">{b.title}</span>
                      <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                    </div>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {b.heroDescription.split(" — ")[0]} — fault codes,
                      failure patterns and honest repair costs.
                    </p>
                  </Card>
                </Link>
              ))}
              <Link
                href="/services/medical-lab-refrigeration-repair"
                className="group"
              >
                <Card className="h-full gap-3 p-5 transition-all hover:border-primary/40 hover:shadow-md">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-sm font-semibold">
                      Medical &amp; Lab Refrigeration Service
                    </span>
                    <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Vaccine fridges, blood bank and reagent storage, lab
                    freezers and ULT units — with audit-ready documentation.
                  </p>
                </Card>
              </Link>
            </div>
          </div>

          {/* Specialty commercial hubs (2026-06-29) — static EN-only routes
              outside services.ts (cigar lounge, bar, spa, hotel, wellness). */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Specialty Commercial Repair
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {specialtyHubs.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group"
                >
                  <Card className="h-full gap-3 p-5 transition-all hover:border-primary/40 hover:shadow-md">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-sm font-semibold">{s.title}</span>
                      <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                    </div>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {s.summary}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Commercial Repair Services",
          url: `${site.url}/services`,
          isPartOf: { "@id": `${site.url}/#website` },
          hasPart: services.map((s) => ({
            "@type": "Service",
            name: s.title,
            url: `${site.url}/services/${s.slug}`,
          })),
        }}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Services", url: `${site.url}/services` },
        ])}
      />
    </PageShell>
  )
}

const specialtyHubs: { slug: string; title: string; summary: string }[] = [
  {
    slug: "commercial-humidor-repair",
    title: "Commercial Humidor Repair",
    summary:
      "Walk-in and cabinet humidors for cigar lounges and retail — humidity, cooling, seals.",
  },
  {
    slug: "commercial-wine-cooler-repair",
    title: "Commercial Wine Cooler Repair",
    summary:
      "Restaurant and retail wine refrigeration and cellars — dual-zone temp, humidity, compressors.",
  },
  {
    slug: "beer-cooler-repair",
    title: "Beer Cooler & Kegerator Repair",
    summary:
      "Direct-draw beer coolers and kegerators for bars — temperature, foam, dispensing.",
  },
  {
    slug: "pizza-oven-repair",
    title: "Commercial Pizza Oven Repair",
    summary:
      "Deck, conveyor and brick pizza ovens — burners, belts, controls and even bake.",
  },
  {
    slug: "holding-cabinet-repair",
    title: "Holding & Warming Cabinet Repair",
    summary:
      "Heated holding and warming cabinets — elements, humidity and hot-hold compliance.",
  },
  {
    slug: "commercial-sauna-repair",
    title: "Commercial Sauna Repair",
    summary:
      "Spa, gym and hotel saunas and steam rooms — heaters, controls and generators.",
  },
  {
    slug: "commercial-cold-plunge-repair",
    title: "Commercial Cold Plunge Repair",
    summary:
      "Cold plunge and ice-bath chillers for gyms and spas — refrigeration, pumps, sanitation.",
  },
  {
    slug: "commercial-pool-heater-repair",
    title: "Commercial Pool Heater Repair",
    summary:
      "Hotel and HOA pool and spa heaters — gas heaters, heat pumps, exchangers and controls.",
  },
]

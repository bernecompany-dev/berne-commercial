import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Card } from "@workspace/ui/components/card"
import { services } from "@/lib/data/services"
import { localizedService } from "@/lib/data/services-es"
import { SectionHeading } from "./section-heading"
import { t } from "@/lib/i18n/dict"
import type { Locale } from "@/lib/i18n/config"

const featured = [
  "commercial-refrigeration-repair",
  "walk-in-cooler-repair",
  "walk-in-freezer-repair",
  "ice-machine-repair",
  "fryer-repair",
  "commercial-oven-repair",
  "commercial-hood-repair",
  "espresso-machine-repair",
  "soda-machine-repair",
  "ice-cream-machine-repair",
  "commercial-laundry-repair",
  "vending-machine-repair",
]

// Specialty commercial hubs (2026-06-29) — static EN-only routes that live
// outside services.ts (no /{city}/ combos). Surfaced as their own home block
// so cigar-lounge, bar, spa, hotel and wellness intents have an entry point.
const specialtyCommercial: { slug: string; shortTitle: string; summary: string }[] = [
  {
    slug: "commercial-humidor-repair",
    shortTitle: "Humidor Repair",
    summary:
      "Walk-in & cabinet humidors for cigar lounges — humidity control, cooling, seals.",
  },
  {
    slug: "commercial-wine-cooler-repair",
    shortTitle: "Wine Cooler Repair",
    summary:
      "Commercial wine refrigeration & cellars — dual-zone temp, humidity, compressors.",
  },
  {
    slug: "beer-cooler-repair",
    shortTitle: "Beer Cooler & Kegerator",
    summary:
      "Direct-draw beer coolers & kegerators for bars — temperature, foam, dispensing.",
  },
  {
    slug: "pizza-oven-repair",
    shortTitle: "Pizza Oven Repair",
    summary:
      "Deck, conveyor & brick pizza ovens — burners, belts, controls, even bake.",
  },
  {
    slug: "holding-cabinet-repair",
    shortTitle: "Holding Cabinet Repair",
    summary:
      "Heated holding & warming cabinets — elements, humidity, hot-hold compliance.",
  },
  {
    slug: "commercial-sauna-repair",
    shortTitle: "Commercial Sauna Repair",
    summary:
      "Spa, gym & hotel saunas and steam rooms — heaters, controls, generators.",
  },
  {
    slug: "commercial-cold-plunge-repair",
    shortTitle: "Cold Plunge Repair",
    summary:
      "Cold plunge & ice-bath chillers for gyms & spas — refrigeration, pumps, sanitation.",
  },
  {
    slug: "commercial-pool-heater-repair",
    shortTitle: "Pool Heater Repair",
    summary:
      "Hotel & HOA pool and spa heaters — gas heaters, heat pumps, exchangers, controls.",
  },
]

export function ServicesGrid({ locale = "en" }: { locale?: Locale }) {
  const tr = t(locale)
  const p = locale === "es" ? "/es" : ""
  // Localize card copy — the ES home previously rendered the English
  // shortTitle/summary straight from services.ts (audit 2026-06-10 P1.4).
  const items = (
    featured
      .map((slug) => services.find((s) => s.slug === slug))
      .filter(Boolean) as typeof services
  ).map((s) => localizedService(s, locale))

  return (
    <section className="border-b border-border/60 bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow={tr.sections.servicesEyebrow}
            title={tr.sections.servicesTitle}
            description={tr.sections.servicesDescription}
          />
          <Link
            href={`${p}/services`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            {tr.sections.allServices} <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {items.map((s) => (
            <Link
              key={s.slug}
              href={`${p}/services/${s.slug}`}
              className="group"
            >
              <Card className="h-full gap-3 p-5 transition-all hover:border-primary/40 hover:shadow-md">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-sm font-semibold text-foreground">
                    {s.shortTitle}
                  </span>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {s.summary}
                </p>
              </Card>
            </Link>
          ))}
        </div>

        {/* Specialty commercial hubs — EN-only static pages (cigar lounge, bar,
            spa, hotel, wellness). Rendered only on the English home. */}
        {locale === "en" ? (
          <div className="mt-14">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Specialty commercial repair
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {specialtyCommercial.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="group">
                  <Card className="h-full gap-3 p-5 transition-all hover:border-primary/40 hover:shadow-md">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-sm font-semibold text-foreground">
                        {s.shortTitle}
                      </span>
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
        ) : null}
      </div>
    </section>
  )
}

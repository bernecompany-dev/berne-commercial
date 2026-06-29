import type { Metadata } from "next"
import Link from "next/link"
import { PageHero, PageShell } from "@/components/page-shell"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { JsonLd } from "@/components/json-ld"
import { cities, citiesByCounty } from "@/lib/data/cities"
import { metaFor, breadcrumbSchema } from "@/lib/seo"
import { site } from "@/lib/site"

export const metadata: Metadata = metaFor({
  // CTR pass 2026-06-09 — 51 chars with the " · Berne" template suffix.
  title: "South Florida Service Areas — 24/7 Dispatch",
  description:
    "Commercial repair coverage across Miami-Dade, Broward and Palm Beach — 24/7 dispatch, COI-ready, 18 W-2 technicians, 4.79★ from 871 reviews.",
  path: "/service-areas",
})

export default function ServiceAreasPage() {
  const counties = citiesByCounty()
  return (
    <PageShell>
      <Breadcrumbs
        items={[{ name: "Home", href: "/" }, { name: "Service Areas" }]}
      />
      <PageHero
        eyebrow="Service Areas"
        title="South Florida commercial coverage"
        description="Miami-Dade, Broward and Palm Beach — same-day emergency dispatch for commercial accounts."
      />
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          {counties.map((c) => (
            <div key={c.county}>
              <h2 className="text-xl font-semibold tracking-tight">
                {c.label} County
              </h2>
              <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 lg:grid-cols-4">
                {c.items.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/${city.slug}`}
                    className="text-sm text-foreground hover:text-primary"
                  >
                    {city.name} →
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "South Florida Service Areas",
          url: `${site.url}/service-areas`,
          isPartOf: { "@id": `${site.url}/#website` },
          about: { "@id": `${site.url}/#localbusiness` },
          hasPart: cities.map((c) => ({
            "@type": "Place",
            name: c.name,
            url: `${site.url}/${c.slug}`,
          })),
        }}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Service Areas", url: `${site.url}/service-areas` },
        ])}
      />
    </PageShell>
  )
}

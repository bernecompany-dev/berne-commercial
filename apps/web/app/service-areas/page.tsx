import type { Metadata } from "next"
import Link from "next/link"
import { PageHero, PageShell } from "@/components/page-shell"
import { citiesByCounty } from "@/lib/data/cities"
import { metaFor } from "@/lib/seo"

export const metadata: Metadata = metaFor({
  title: "Service Areas — South Florida",
  description:
    "Commercial repair coverage across Miami-Dade, Broward and Palm Beach.",
  path: "/service-areas",
})

export default function ServiceAreasPage() {
  const counties = citiesByCounty()
  return (
    <PageShell>
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
    </PageShell>
  )
}

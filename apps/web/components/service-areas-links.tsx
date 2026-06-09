import Link from "next/link"
import { LinkButton } from "./link-button"
import { citiesByCounty } from "@/lib/data/cities"

/**
 * Compact, crawlable list of every city hub, grouped by county.
 *
 * Internal linking for discovery: the footer only surfaces 8 cities per
 * county, so most /{city} hubs had no homepage link. This block puts all of
 * them one hop from the homepage — a plain text list, no design changes.
 * Server component, static markup, zero client JS.
 */
export function ServiceAreasLinks() {
  return (
    <section className="border-b border-border/60 bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-base font-semibold tracking-tight">
          Commercial repair service areas
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Same-day commercial dispatch across Miami-Dade, Broward and Palm
          Beach counties.
        </p>
        {citiesByCounty().map((county) => (
          <div key={county.county} className="mt-6">
            <h3 className="text-sm font-semibold text-muted-foreground">
              {county.label} County
            </h3>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs">
              {county.items.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${city.slug}`}
                  className="text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
        <div className="mt-8">
          <LinkButton href="/service-areas" variant="outline" size="sm">
            View all service areas
          </LinkButton>
        </div>
      </div>
    </section>
  )
}

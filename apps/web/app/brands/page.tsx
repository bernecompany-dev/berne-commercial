import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { PageHero, PageShell } from "@/components/page-shell"
import { Card } from "@workspace/ui/components/card"
import { JsonLd } from "@/components/json-ld"
import { brands } from "@/lib/data/brands"
import { brandProfiles } from "@/lib/data/brand-profiles"
import { breadcrumbSchema, metaFor } from "@/lib/seo"
import { site } from "@/lib/site"

export const metadata: Metadata = metaFor({
  title: "Commercial Brands We Service in South Florida",
  description:
    "Hobart, Vulcan, True, Manitowoc, Hoshizaki, Rational, Garland, Traulsen and more — commercial-equipment repair across Miami-Dade, Broward and Palm Beach.",
  path: "/brands",
})

export default function BrandsPage() {
  // Brands with full detail pages (priority order)
  const featured = brandProfiles
  const featuredSlugsLower = new Set(featured.map((b) => b.name.toLowerCase()))

  // "Also serviced" — names from the flat list that don't have a detail page yet
  const alsoServiced = brands.filter(
    (b) => !featuredSlugsLower.has(b.name.toLowerCase()),
  )

  return (
    <PageShell>
      <PageHero
        eyebrow="Brands"
        title="Commercial brands we service"
        description="Factory-trained South Florida technicians for the brands that run commercial kitchens, ice machines, refrigeration and back-of-house operations. Eleven years, eighteen technicians, EPA-608 across the field team."
      />

      {/* Featured brands with detail pages */}
      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Brands with dedicated repair coverage
            </h2>
            <p className="mt-2 max-w-3xl text-muted-foreground">
              Brand-specific repair pages with model series, common failure
              modes, parts policy and Berne-team experience. Tap any card for
              detail and same-day dispatch.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((b) => (
              <Link
                key={b.slug}
                href={`/brands/${b.slug}`}
                className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <div className="text-lg font-semibold tracking-tight">
                  {b.name}
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {b.teaser}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-primary">
                  View {b.name} repair coverage
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip / context */}
      <section className="border-b border-border/60 bg-accent/30 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            <Card className="gap-2 p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                Coverage
              </div>
              <div className="text-base font-semibold">
                Miami-Dade · Broward · Palm Beach
              </div>
              <p className="text-sm text-muted-foreground">
                Same-day commercial dispatch across South Florida.
              </p>
            </Card>
            <Card className="gap-2 p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                Field team
              </div>
              <div className="text-base font-semibold">
                18 technicians · 11 years
              </div>
              <p className="text-sm text-muted-foreground">
                EPA-608 universal, licensed &amp; insured, COI/W-9 on file.
              </p>
            </Card>
            <Card className="gap-2 p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                Reviews
              </div>
              <div className="text-base font-semibold">
                4.79 / 871 reviews
              </div>
              <p className="text-sm text-muted-foreground">
                Eleven years of South Florida commercial accounts.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Also serviced */}
      {alsoServiced.length ? (
        <section className="bg-background py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold tracking-tight">
              Also serviced
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
              Additional commercial brands our field team services on regular
              dispatch. Call dispatch at{" "}
              <a
                href={site.phoneHref}
                className="font-medium text-primary hover:underline"
              >
                {site.phone}
              </a>{" "}
              to confirm parts coverage for a specific model.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {alsoServiced.map((b) => (
                <span
                  key={b.name}
                  className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground"
                >
                  {b.name}
                </span>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Brands", url: `${site.url}/brands` },
        ])}
      />
    </PageShell>
  )
}

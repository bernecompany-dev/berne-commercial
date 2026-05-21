import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Scale } from "lucide-react"

import { PageHero, PageShell } from "@/components/page-shell"
import { Badge } from "@workspace/ui/components/badge"
import { LinkButton, AnchorButton } from "@/components/link-button"
import { JsonLd } from "@/components/json-ld"
import { BRAND_COMPARISONS } from "@/lib/data/brand-comparisons"
import { breadcrumbSchema, metaFor } from "@/lib/seo"
import { site } from "@/lib/site"

export const metadata: Metadata = metaFor({
  title: "Commercial Equipment Brand Comparisons",
  description:
    "Hobart vs Vulcan, Manitowoc vs Hoshizaki, True vs Traulsen, Rational vs combi alternatives — commercial equipment comparisons written by South Florida service technicians.",
  path: "/compare",
})

export default function CompareIndexPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Brand Comparisons"
        title="Commercial brand comparisons"
        description="Long-form, balanced commercial-equipment comparisons written by a working South Florida service shop. We service every brand we compare — no referral fees, no incentives, just real field tickets."
      >
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="outline"
            className="border-primary/30 bg-primary/5 text-primary"
          >
            <Scale className="mr-1 size-3.5" /> Honest comparisons
          </Badge>
          <Badge variant="outline">
            Commercial service call: {site.serviceCall}
          </Badge>
          <Badge variant="outline">11 years · 18 technicians</Badge>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton href="/request-dispatch">
            Request commercial dispatch <ArrowRight className="size-4" />
          </LinkButton>
          <AnchorButton href={site.phoneHref} variant="outline">
            Call {site.phone}
          </AnchorButton>
        </div>
      </PageHero>

      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight">
              {BRAND_COMPARISONS.length} commercial brand comparisons available
            </h2>
            <p className="mt-2 text-muted-foreground">
              Each comparison covers brand-by-brand strengths, real failure
              modes from field tickets, operator buyer profiles, cost of
              ownership, and our balanced verdict.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BRAND_COMPARISONS.map((c) => (
              <Link
                key={c.slug}
                href={`/compare/${c.slug}`}
                className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="text-lg font-semibold tracking-tight">
                  {c.h1.replace(/ — .*/, "")}
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {c.teaser}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-primary">
                  Read the full comparison
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Compare", url: `${site.url}/compare` },
        ])}
      />
    </PageShell>
  )
}

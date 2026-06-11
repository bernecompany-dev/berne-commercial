import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import {
  Utensils,
  Hotel,
  WashingMachine,
  Hospital,
  ShoppingCart,
  School,
  Dumbbell,
  Beer,
  Trophy,
  Building,
  type LucideIcon,
} from "lucide-react"
import { PageHero, PageShell } from "@/components/page-shell"
import { Card } from "@workspace/ui/components/card"
import { LinkButton } from "@/components/link-button"
import { JsonLd } from "@/components/json-ld"
import { metaFor } from "@/lib/seo"
import { site } from "@/lib/site"
import { INDUSTRY_PROFILES } from "@/lib/data/industry-profiles"
import { industries as legacyIndustries } from "@/lib/data/industries"

export const metadata: Metadata = metaFor({
  title: "Industries We Serve — Commercial Equipment Repair",
  description:
    "Restaurants, hotels, laundromats, healthcare, grocery, gyms, breweries, country clubs, multi-family — South Florida commercial repair across 10 verticals.",
  path: "/industries",
})

const ICON_BY_SLUG: Record<string, LucideIcon> = {
  restaurants: Utensils,
  hotels: Hotel,
  laundromats: WashingMachine,
  healthcare: Hospital,
  grocery: ShoppingCart,
  schools: School,
  gyms: Dumbbell,
  breweries: Beer,
  "country-clubs": Trophy,
  "multi-family": Building,
}

const PROFILE_SLUGS = new Set(INDUSTRY_PROFILES.map((p) => p.slug))

export default function IndustriesPage() {
  const additional = legacyIndustries.filter((i) => !PROFILE_SLUGS.has(i.slug))

  return (
    <PageShell>
      <PageHero
        eyebrow="Industries"
        title="Built for commercial operations"
        description="Berne Commercial Repair serves 10 core verticals across South Florida — refrigeration, restaurant equipment, commercial laundry, ice and beyond. Enterprise-friendly dispatch, EPA-certified refrigerant work, NDA-friendly crews."
      >
        <div className="flex flex-wrap gap-3">
          <LinkButton href="/request-dispatch">
            Request Service <ArrowRight className="size-4" />
          </LinkButton>
          <LinkButton href="/services" variant="outline">
            Browse all services
          </LinkButton>
        </div>
      </PageHero>

      <section className="border-b border-border/60 bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Verticals we cover in depth
          </h2>
          <p className="mt-2 max-w-3xl text-muted-foreground">
            Each vertical below has a dedicated service page with equipment
            categories, common failure modes, and an industry FAQ — written
            from real field experience, not marketing.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRY_PROFILES.map((p) => {
              const Icon = ICON_BY_SLUG[p.slug] ?? Building
              return (
                <Link
                  key={p.slug}
                  href={`/industries/${p.slug}`}
                  className="group block"
                >
                  <Card className="h-full gap-3 p-6 transition group-hover:border-primary/40">
                    <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <div className="text-base font-semibold group-hover:text-primary">
                      {p.industryTitle}
                    </div>
                    <p className="text-sm text-muted-foreground">{p.hero}</p>
                    <div className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary">
                      Explore {p.industryTitle.toLowerCase()} repair
                      <ArrowRight className="size-3" />
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {additional.length ? (
        <section className="border-b border-border/60 bg-accent/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Additional verticals we serve
            </h2>
            <p className="mt-2 max-w-3xl text-muted-foreground">
              We also support these adjacent verticals on commercial accounts —
              same dispatch, same crews. Reach out for a scope conversation.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {additional.map(({ slug, name, blurb, icon: Icon }) => (
                <Card key={slug} className="gap-3 p-5">
                  <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <div className="text-sm font-semibold">{name}</div>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {blurb}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-background py-16">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Need a vertical we didn&apos;t list?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            If your operation runs commercial refrigeration, restaurant
            equipment, commercial laundry, ice or hood systems — we probably
            cover it. Call dispatch for a scope conversation.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <LinkButton href="/request-dispatch">Request Service</LinkButton>
            <LinkButton href="/contact" variant="outline">
              Contact us
            </LinkButton>
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Industries We Serve",
          url: `${site.url}/industries`,
          isPartOf: { "@id": `${site.url}/#website` },
          hasPart: INDUSTRY_PROFILES.map((p) => ({
            "@type": "Service",
            name: `${p.industryTitle} Equipment Repair`,
            url: `${site.url}/industries/${p.slug}`,
          })),
        }}
      />
    </PageShell>
  )
}

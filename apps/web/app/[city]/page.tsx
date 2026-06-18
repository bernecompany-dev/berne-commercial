import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react"
import { PageHero, PageShell } from "@/components/page-shell"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AnchorButton, LinkButton } from "@/components/link-button"
import { Card } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { DispatchForm } from "@/components/dispatch-form"
import { FAQSection } from "@/components/faq-section"
import { ServiceMapEmbed } from "@/components/service-map-embed"
import { cityCenter } from "@/lib/city-centers"
import { TrustedBy } from "@/components/trusted-by"
import { JsonLd } from "@/components/json-ld"
import { metaFor, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo"
import { site } from "@/lib/site"
import { cities, getCity, nearbyCities, COUNTIES } from "@/lib/data/cities"
import { services, primaryServices } from "@/lib/data/services"
import { cityIntro, citySecondaryParagraph } from "@/lib/copy"
import { getCityProfile, cityProfileFallback } from "@/lib/data/city-profiles"
import { getCityEnrichment } from "@/lib/data/city-content"

type Params = { params: Promise<{ city: string }> }

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { city: slug } = await params
  const c = getCity(slug)
  if (!c)
    return metaFor({
      title: "City",
      description: "",
      path: `/${slug}`,
      noindex: true,
    })
  const p = getCityProfile(c.slug) ?? cityProfileFallback(c.name, c.county)
  // CTR pass 2026-06-09: corridor keeps each of the 70 city descriptions
  // unique; hooks (24/7, COI, W-2 headcount, rating, $89) drive the click.
  // Long corridors (Fort Lauderdale, Coconut Creek, Davie) pushed the full
  // template past Google's ~160-char cutoff — degrade to a compact form
  // that drops the headcount hook instead of getting truncated mid-rating.
  const full = `24/7 commercial repair dispatch across ${p.corridor} in ${c.name}. COI-ready, 18 W-2 techs, 4.79★. ${site.serviceCall} service call.`
  const compact = `24/7 commercial repair dispatch across ${p.corridor} in ${c.name}. COI-ready, 4.79★. ${site.serviceCall} service call.`
  return metaFor({
    title: `Commercial Equipment Repair in ${c.name}, FL`,
    description: full.length <= 160 ? full : compact,
    path: `/${c.slug}`,
  })
}

/**
 * City-specific specialty pages that live OUTSIDE the services.ts matrix
 * (static routes, no phantom combos) — rendered as extra pills in the
 * link-farm section. Currently only Fort Lauderdale's medical/lab page
 * (Content_Plan 2026-06-10 #27).
 */
const SPECIALTY_LINKS: Record<string, { label: string; href: string }[]> = {
  "fort-lauderdale": [
    {
      label: "Medical & Lab Refrigeration in Fort Lauderdale",
      href: "/fort-lauderdale/medical-lab-refrigeration-repair",
    },
  ],
  // Combi money cluster (2026-06-15): "commercial oven repair" / "...near me"
  // currently land on these three city pages (GSC pos 3-9). Surface a link up
  // to the canonical combi-repair hub so the ranking equity flows to the page
  // built for that intent, anchored on the head term.
  "boynton-beach": [
    {
      label: "Commercial Combi Oven Repair",
      href: "/services/combi-oven-repair",
    },
  ],
  "west-palm-beach": [
    {
      label: "Commercial Combi Oven Repair",
      href: "/services/combi-oven-repair",
    },
  ],
  "boca-raton": [
    {
      label: "Commercial Combi Oven Repair",
      href: "/services/combi-oven-repair",
    },
  ],
}

const faqsFor = (cityName: string) => [
  {
    q: `Do you offer same-day commercial repair in ${cityName}?`,
    a: `Yes. Our dispatch covers ${cityName} with same-day emergency commercial service. Refrigeration outages are prioritized.`,
  },
  {
    q: `What is the commercial service call in ${cityName}?`,
    a: `Our commercial service call is ${site.serviceCall} — free if you approve the repair; you only pay the fee if you decide not to proceed.`,
  },
  {
    q: `What commercial equipment do you repair in ${cityName}?`,
    a: `Walk-in coolers and freezers, reach-ins, ice machines, fryers, ovens, ranges, prep tables, steamers, commercial laundry, garbage disposals and trash compactors.`,
  },
]

export default async function CityPage({ params }: Params) {
  const { city: slug } = await params
  const c = getCity(slug)
  if (!c) notFound()
  const nearby = nearbyCities(c.slug, 8)
  const enrichment = getCityEnrichment(c.slug)
  const faqs = [...faqsFor(c.name), ...(enrichment?.faqs ?? [])]

  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Service areas", href: "/service-areas" },
          { name: c.name },
        ]}
      />
      <PageHero
        eyebrow={`${COUNTIES[c.county]} County`}
        title={`Commercial Equipment Repair in ${c.name}, FL`}
        description={cityIntro(c)}
      >
        {/* One badge with NEW information — "Same-day" and "Licensed" already
            sit in the TrustStrip a viewport-line above, and the city is in
            the H1. Repetition reads as noise, not reassurance. */}
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="border-primary/30 bg-primary/5 text-primary">
            {site.serviceCall} service call — free with approved repair
          </Badge>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton href={`/request-dispatch?city=${c.slug}`}>
            Request Service <ArrowRight className="size-4" />
          </LinkButton>
          <AnchorButton href={site.phoneHref} variant="outline">
            Call {site.phone}
          </AnchorButton>
        </div>
      </PageHero>

      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Commercial services in {c.name}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((s) => (
              <Link key={s.slug} href={`/${c.slug}/${s.slug}`} className="group">
                <Card className="h-full gap-3 p-5 transition-all hover:border-primary/40 hover:shadow-md">
                  <div className="flex items-start justify-between gap-2">
                    {/* Card heading is the service only — the city is already
                        established once by the "Commercial services in {city}"
                        H2 above. Repeating "{service} in {city}" on all ~31
                        cards made the city hub rank for the narrow "{service}
                        {city}" query and cannibalize its own combo page
                        (R5 P0: /boynton-beach p46 vs the combo p38). The combo
                        owns that intent; the hub owns "{city} commercial repair". */}
                    <span className="text-sm font-semibold">{s.shortTitle}</span>
                    <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground">{s.summary}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Deep local build-out for proven-demand cities (wave-2 2026-06-10):
          named corridors, local failure patterns, contextual combo links.
          Cities without an enrichment entry keep the lightweight template. */}
      {enrichment ? (
        <section className="border-b border-border/60 bg-background py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="max-w-4xl text-2xl font-semibold tracking-tight">
              {enrichment.heading}
            </h2>
            <div className="mt-6 max-w-4xl space-y-4 text-base leading-relaxed text-muted-foreground">
              {enrichment.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <h3 className="mt-12 text-lg font-semibold tracking-tight">
              Where we work in {c.name}
            </h3>
            <ul className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {enrichment.districts.map((d) => (
                <li
                  key={d.name}
                  className="rounded-xl border border-border bg-card p-5"
                >
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                    <div>
                      <div className="text-sm font-semibold">{d.name}</div>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {d.detail}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <h3 className="mt-12 text-lg font-semibold tracking-tight">
              What fails here — local patterns from our tickets
            </h3>
            <ul className="mt-5 grid gap-4 md:grid-cols-3">
              {enrichment.patterns.map((p) => (
                <li
                  key={p.title}
                  className="rounded-xl border border-border bg-card p-5"
                >
                  <div className="text-sm font-semibold">{p.title}</div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {p.detail}
                  </p>
                </li>
              ))}
            </ul>

            {enrichment.links?.length ? (
              <div className="mt-8 flex flex-wrap gap-2">
                {enrichment.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/10"
                  >
                    {l.label} →
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      <section className="border-b border-border/60 bg-accent/30 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Request service in {c.name}
          </h2>
          <div className="mt-8">
            <DispatchForm defaults={{ city: c.name }} />
          </div>
        </div>
      </section>

      {/* FAQ renders for EVERY city — the answers (price, same-day coverage,
          equipment list) are exactly what a city-page visitor is asking, and
          the visible content now always matches the FAQ JSON-LD below. */}
      <FAQSection
        faqs={faqs}
        title={`${c.name} commercial repair FAQ`}
        description="From our dispatch desk and route technicians."
      />

      {/* Real completed-job map (lazy: maplibre loads only on scroll-in),
          centered on the city so the local "swarm" of work is visible. */}
      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col items-start gap-1">
            <div className="text-xs font-medium uppercase tracking-wider text-primary">
              Proof of work
            </div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Appliance repairs we&apos;ve completed near {c.name}
            </h2>
            <p className="text-sm text-muted-foreground">
              Each pin is a completed commercial repair, offset to the
              neighborhood level for customer privacy.{" "}
              <Link href="/service-map" className="font-medium text-primary hover:underline">
                See the full South Florida service map →
              </Link>
            </p>
          </div>
          <ServiceMapEmbed center={cityCenter(c.slug)} zoom={11} />
        </div>
      </section>

      <TrustedBy />

      {nearby.length ? (
        <section className="border-b border-border/60 bg-background py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Link-farm headings use the muted overline recipe (footer/sidebar
                convention) — pill colors keep one sitewide meaning: gray =
                geography, primary tint = services. */}
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Nearby service areas
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {nearby.map((n) => (
                <Link
                  key={n.slug}
                  href={`/${n.slug}`}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground hover:bg-accent hover:text-foreground"
                >
                  {n.name}
                </Link>
              ))}
            </div>
            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Primary services
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {primaryServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${c.slug}/${s.slug}`}
                  className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/10"
                >
                  {s.shortTitle} in {c.name}
                </Link>
              ))}
              {(SPECIALTY_LINKS[c.slug] ?? []).map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/10"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <JsonLd
        data={serviceSchema({
          name: `Commercial Equipment Repair in ${c.name}, FL`,
          description: `Commercial refrigeration, restaurant equipment, ice machine and commercial laundry repair in ${c.name}.`,
          url: `${site.url}/${c.slug}`,
          city: c.name,
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Service Areas", url: `${site.url}/service-areas` },
          { name: c.name, url: `${site.url}/${c.slug}` },
        ])}
      />
    </PageShell>
  )
}

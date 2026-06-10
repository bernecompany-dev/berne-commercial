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
import { CityMap } from "@/components/city-map"
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
  return metaFor({
    title: `Commercial Equipment Repair in ${c.name}, FL`,
    // CTR pass 2026-06-09: corridor keeps each of the 70 city descriptions
    // unique; hooks (24/7, COI, W-2 headcount, rating, $89) drive the click.
    // Base is 94 chars — fits <155 for every corridor up to ~60 chars (the
    // old equipment-list version ran 200+ for Miami and got truncated).
    description: `24/7 commercial repair dispatch across ${p.corridor} in ${c.name}. COI-ready, 18 W-2 techs, 4.79★. ${site.serviceCall} service call.`,
    path: `/${c.slug}`,
  })
}

const faqsFor = (cityName: string) => [
  {
    q: `Do you offer same-day commercial repair in ${cityName}?`,
    a: `Yes. Our dispatch covers ${cityName} with same-day emergency commercial service. Refrigeration outages are prioritized.`,
  },
  {
    q: `What is the commercial service call in ${cityName}?`,
    a: `Our commercial service call is ${site.serviceCall} and may be applied toward an approved repair.`,
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
            {site.serviceCall} service call — applied toward approved repair
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
                    <span className="text-sm font-semibold">
                      {s.shortTitle} in {c.name}
                    </span>
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

      <CityMap city={c.name} />

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

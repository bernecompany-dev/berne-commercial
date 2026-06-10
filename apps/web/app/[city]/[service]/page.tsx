import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { PageHero, PageShell } from "@/components/page-shell"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AnchorButton, LinkButton } from "@/components/link-button"
import { Card } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { DispatchForm } from "@/components/dispatch-form"
import { ServiceBullets } from "@/components/service-bullets"
import { CityMap } from "@/components/city-map"
import { FAQSection } from "@/components/faq-section"
import { TrustedBy } from "@/components/trusted-by"
import { JsonLd } from "@/components/json-ld"
import { metaFor, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo"
import { site } from "@/lib/site"
import { cities, getCity, nearbyCities, COUNTIES } from "@/lib/data/cities"
import {
  getService,
  services,
  primaryServices,
  type Service,
} from "@/lib/data/services"
import { cityServiceIntro, cityServiceContext } from "@/lib/copy"
import {
  getCityProfile,
  cityProfileFallback,
  type CityProfile,
} from "@/lib/data/city-profiles"

type Params = { params: Promise<{ city: string; service: string }> }

export function generateStaticParams() {
  const allowed = new Set(primaryServices.map((s) => s.slug))
  const all: { city: string; service: string }[] = []
  for (const c of cities) {
    for (const s of services) {
      if (allowed.has(s.slug)) all.push({ city: c.slug, service: s.slug })
    }
  }
  return all
}

export const dynamicParams = true

/**
 * Unique-data layer: per-combo SERP titles where GSC shows a query synonym
 * the sitewide template can't carry without blowing the 60-char budget
 * ("ice maker repair boynton beach", 26 imp at pos 41 — audit 2026-06-10).
 */
const COMBO_TITLE_OVERRIDES: Record<string, string> = {
  "boynton-beach/ice-machine-repair":
    "Ice Maker & Ice Machine Repair in Boynton Beach — Same-Day",
}

// Visible-H1 counterpart of the title override — the hero (and Service
// schema name) must carry the same "ice maker" synonym the <title> targets
// (W3-P2.2).
const COMBO_H1_OVERRIDES: Record<string, string> = {
  "boynton-beach/ice-machine-repair":
    "Ice Maker & Ice Machine Repair in Boynton Beach, FL",
}

// Per-combo descriptions where the compact template drops a synonym the
// title/H1 lead with ("fountain" — W3-P2.3). 150ch.
const COMBO_DESC_OVERRIDES: Record<string, string> = {
  "hialeah-gardens/soda-machine-repair":
    "Fountain & soda machine repair across the NW 122nd Street area in Hialeah Gardens — Pepsi & Coke dispensers, carbonators, BIB lines. $89 service call.",
}

// Layout appends " · Berne" (8 chars) — keep the base <=52 so the rendered
// <title> stays inside Google's ~60-char SERP cutoff.
const TITLE_BUDGET = 52

function comboTitle(s: Service, cityName: string): string {
  if (s.comboTitle) return s.comboTitle.replace("{city}", cityName)
  // Degrade gracefully when the full template overflows the budget:
  // drop ", FL" first, then fall back to the shortTitle form.
  const shortest = `${s.shortTitle} Repair in ${cityName}`
  const candidates = [
    `${s.title} in ${cityName}, FL`,
    `${s.title} in ${cityName}`,
    shortest,
  ]
  return candidates.find((t) => t.length <= TITLE_BUDGET) ?? shortest
}

// Meta-description budget — Google truncates around 155-160 chars; the old
// template ran up to 224 on long corridors (audit 2026-06-10).
function comboDescription(s: Service, p: CityProfile, cityName: string): string {
  const full = `${s.shortTitle} dispatch across ${p.corridor} in ${cityName}. ${s.summary} Service call: ${site.serviceCall}.`
  if (full.length <= 158) return full
  const compact = `${s.shortTitle} dispatch across ${p.corridor} in ${cityName} — same-day, licensed & insured. ${site.serviceCall} call.`
  if (compact.length <= 158) return compact
  return `${compact.slice(0, 157).replace(/\s+\S*$/, "")}…`
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params
  const c = getCity(citySlug)
  const s = getService(serviceSlug)
  if (!c || !s)
    return metaFor({
      title: "Page",
      description: "",
      path: `/${citySlug}/${serviceSlug}`,
      noindex: true,
    })
  const p = getCityProfile(c.slug) ?? cityProfileFallback(c.name, c.county)
  return metaFor({
    title: COMBO_TITLE_OVERRIDES[`${c.slug}/${s.slug}`] ?? comboTitle(s, c.name),
    description:
      COMBO_DESC_OVERRIDES[`${c.slug}/${s.slug}`] ??
      comboDescription(s, p, c.name),
    path: `/${c.slug}/${s.slug}`,
  })
}

const cityFaqs = (city: string, service: string, sc: string) => [
  {
    q: `Do you offer ${service.toLowerCase()} in ${city}?`,
    a: `Yes — we provide ${service.toLowerCase()} across ${city} with same-day commercial dispatch for restaurants, production facilities, retail and property-managed buildings.`,
  },
  {
    q: `What is the commercial service call cost in ${city}?`,
    a: `Our commercial service call is ${sc} and may be applied toward an approved repair.`,
  },
  {
    q: `Are your ${city} technicians licensed and insured?`,
    a: `Yes. Berne Commercial Repair is licensed and insured for commercial service across South Florida, including ${city}.`,
  },
]

export default async function CityServicePage({ params }: Params) {
  const { city: citySlug, service: serviceSlug } = await params
  const c = getCity(citySlug)
  const s = getService(serviceSlug)
  if (!c || !s) notFound()

  const nearby = nearbyCities(c.slug, 8)
  const cFaqs = cityFaqs(c.name, s.shortTitle, site.serviceCall)
  const combinedFaqs = [...cFaqs, ...s.faqs]
  const h1 =
    COMBO_H1_OVERRIDES[`${c.slug}/${s.slug}`] ?? `${s.title} in ${c.name}, FL`

  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Service areas", href: "/service-areas" },
          { name: c.name, href: `/${c.slug}` },
          { name: s.shortTitle },
        ]}
      />
      {/* Eyebrow carries the one fact the H1 lacks (the county); the service
          and city already appear in the H1 and breadcrumb. Badges restate
          nothing from the TrustStrip above. */}
      <PageHero
        eyebrow={`${COUNTIES[c.county]} County`}
        title={h1}
        description={cityServiceIntro(c, s)}
      >
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="border-primary/30 bg-primary/5 text-primary">
            Commercial service call: {site.serviceCall} — applied toward approved repair
          </Badge>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton href={`/request-dispatch?city=${c.slug}&service=${s.slug}`}>
            Request Service <ArrowRight className="size-4" />
          </LinkButton>
          <AnchorButton href={site.phoneHref} variant="outline">
            Call {site.phone}
          </AnchorButton>
        </div>
      </PageHero>

      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold tracking-tight">
                {s.shortTitle} dispatch in {c.name}
              </h2>
              <p className="mt-4 text-muted-foreground">
                {cityServiceContext(c, s)}
              </p>
            </div>
            <Card className="h-fit gap-3 p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                {c.name} coverage
              </div>
              <p className="text-sm text-muted-foreground">
                {COUNTIES[c.county]} County dispatch — same-day emergency
                commercial service for {c.name} accounts.
              </p>
              <LinkButton
                href={`/request-dispatch?city=${c.slug}&service=${s.slug}`}
                className="mt-3"
              >
                Request Service
              </LinkButton>
            </Card>
          </div>

          {s.bullets.length ? (
            <div className="mt-12">
              <h3 className="mb-6 text-lg font-semibold tracking-tight">
                What we fix
              </h3>
              <ServiceBullets items={s.bullets} />
            </div>
          ) : null}
        </div>
      </section>

      <section className="border-b border-border/60 bg-accent/30 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Request {s.shortTitle.toLowerCase()} service in {c.name}
          </h2>
          <div className="mt-8">
            <DispatchForm defaults={{ city: c.name, service: s.slug }} />
          </div>
        </div>
      </section>

      <CityMap city={c.name} />

      <FAQSection
        faqs={combinedFaqs}
        title={`${s.shortTitle} in ${c.name} — FAQ`}
      />

      <TrustedBy />

      <section className="bg-background py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Pill colors keep one sitewide meaning (matches the city page):
              primary tint = service links, gray = geography links. */}
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Other services in {c.name}
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {primaryServices
              .filter((p) => p.slug !== s.slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/${c.slug}/${p.slug}`}
                  className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/10"
                >
                  {p.shortTitle}
                </Link>
              ))}
          </div>
          {nearby.length ? (
            <>
              <h2 className="mt-8 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {s.shortTitle} in nearby cities
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {nearby.map((n) => (
                  <Link
                    key={n.slug}
                    href={`/${n.slug}/${s.slug}`}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground hover:bg-accent hover:text-foreground"
                  >
                    {s.shortTitle} in {n.name}
                  </Link>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </section>

      <JsonLd
        data={serviceSchema({
          name: h1,
          description: s.summary,
          url: `${site.url}/${c.slug}/${s.slug}`,
          city: c.name,
        })}
      />
      <JsonLd data={faqSchema(combinedFaqs)} />
      {/* Must mirror the visible <Breadcrumbs> trail exactly — Google
          penalises drift (see breadcrumbs.tsx). */}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Service Areas", url: `${site.url}/service-areas` },
          { name: c.name, url: `${site.url}/${c.slug}` },
          { name: s.shortTitle, url: `${site.url}/${c.slug}/${s.slug}` },
        ])}
      />
    </PageShell>
  )
}

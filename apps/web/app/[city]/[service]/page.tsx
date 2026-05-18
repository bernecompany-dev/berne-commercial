import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, MapPin } from "lucide-react"
import { PageHero, PageShell } from "@/components/page-shell"
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
import { getService, services, primaryServices } from "@/lib/data/services"
import { cityServiceIntro, cityServiceContext } from "@/lib/copy"
import { getCityProfile, cityProfileFallback } from "@/lib/data/city-profiles"

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
  const title = `${s.title} in ${c.name}, FL`
  const p = getCityProfile(c.slug) ?? cityProfileFallback(c.name, c.county)
  return metaFor({
    title,
    description: `${s.shortTitle} dispatch across ${p.corridor} in ${c.name}. ${s.summary} Service call: ${site.serviceCall}.`,
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

  return (
    <PageShell>
      <PageHero
        eyebrow={`${COUNTIES[c.county]} County · ${s.shortTitle}`}
        title={`${s.title} in ${c.name}, FL`}
        description={cityServiceIntro(c, s)}
      >
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="border-primary/30 bg-primary/5 text-primary">
            Commercial service call: {site.serviceCall}
          </Badge>
          <Badge variant="outline">Same-day dispatch</Badge>
          <Badge variant="outline" className="gap-1.5">
            <MapPin className="size-3" /> {c.name}
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
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Request {s.shortTitle.toLowerCase()} dispatch in {c.name}
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
          <h2 className="text-base font-semibold tracking-tight">
            Other services in {c.name}
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {primaryServices
              .filter((p) => p.slug !== s.slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/${c.slug}/${p.slug}`}
                  className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground hover:text-foreground"
                >
                  {p.shortTitle}
                </Link>
              ))}
          </div>
          {nearby.length ? (
            <>
              <h2 className="mt-8 text-base font-semibold tracking-tight">
                {s.shortTitle} in nearby cities
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {nearby.map((n) => (
                  <Link
                    key={n.slug}
                    href={`/${n.slug}/${s.slug}`}
                    className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
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
          name: `${s.title} in ${c.name}, FL`,
          description: s.summary,
          url: `${site.url}/${c.slug}/${s.slug}`,
          city: c.name,
        })}
      />
      <JsonLd data={faqSchema(combinedFaqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: c.name, url: `${site.url}/${c.slug}` },
          { name: s.shortTitle, url: `${site.url}/${c.slug}/${s.slug}` },
        ])}
      />
    </PageShell>
  )
}

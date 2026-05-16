import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react"
import { PageHero, PageShell } from "@/components/page-shell"
import { AnchorButton, LinkButton } from "@/components/link-button"
import { Card } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { DispatchForm } from "@/components/dispatch-form"
import { TrustedBy } from "@/components/trusted-by"
import { JsonLd } from "@/components/json-ld"
import { metaFor, serviceSchema, faqSchema } from "@/lib/seo"
import { site } from "@/lib/site"
import { cities, getCity, nearbyCities, COUNTIES } from "@/lib/data/cities"
import { services, primaryServices } from "@/lib/data/services"

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
  return metaFor({
    title: `Commercial Equipment Repair in ${c.name}, FL`,
    description: `Same-day commercial refrigeration, restaurant equipment, ice machine and commercial laundry repair in ${c.name}. Service call: ${site.serviceCall}.`,
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
  const faqs = faqsFor(c.name)

  return (
    <PageShell>
      <PageHero
        eyebrow={`${COUNTIES[c.county]} County`}
        title={`Commercial Equipment Repair in ${c.name}, FL`}
        description={`Berne Commercial Repair serves ${c.name} with same-day commercial refrigeration, restaurant equipment, ice machine and commercial laundry dispatch. Service call: ${site.serviceCall}.`}
      >
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="border-primary/30 bg-primary/5 text-primary">
            Same-day dispatch
          </Badge>
          <Badge variant="outline">Licensed & insured</Badge>
          <Badge variant="outline" className="gap-1.5">
            <MapPin className="size-3" /> {c.name}
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
                <Card className="h-full gap-2 p-5 transition-all hover:border-primary/40 hover:shadow-md">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-sm font-semibold">
                      {s.shortTitle} in {c.name}
                    </span>
                    <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">{s.summary}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-accent/30 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Request dispatch in {c.name}
          </h2>
          <div className="mt-8">
            <DispatchForm defaults={{ city: c.name }} />
          </div>
        </div>
      </section>

      <TrustedBy />

      {nearby.length ? (
        <section className="border-b border-border/60 bg-background py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-base font-semibold tracking-tight">
              Nearby service areas
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {nearby.map((n) => (
                <Link
                  key={n.slug}
                  href={`/${n.slug}`}
                  className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground hover:text-foreground"
                >
                  {n.name}
                </Link>
              ))}
            </div>
            <h3 className="mt-8 text-base font-semibold tracking-tight">
              Primary services
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {primaryServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${c.slug}/${s.slug}`}
                  className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
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
    </PageShell>
  )
}

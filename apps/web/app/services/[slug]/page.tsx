import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { PageHero, PageShell } from "@/components/page-shell"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { AnchorButton, LinkButton } from "@/components/link-button"
import { DispatchForm } from "@/components/dispatch-form"
import { ServiceBullets } from "@/components/service-bullets"
import { FAQSection } from "@/components/faq-section"
import { JsonLd } from "@/components/json-ld"
import { faqSchema, metaFor, serviceSchema, breadcrumbSchema } from "@/lib/seo"
import { site } from "@/lib/site"
import { getService, services } from "@/lib/data/services"
import { citiesByCounty } from "@/lib/data/cities"

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const s = getService(slug)
  if (!s) return metaFor({ title: "Service", description: "", path: `/services/${slug}`, noindex: true })
  return metaFor({
    title: s.metaTitle ?? `${s.title} in South Florida`,
    description: s.metaDescription ?? s.summary,
    path: `/services/${slug}`,
  })
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params
  const s = getService(slug)
  if (!s) notFound()

  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: s.shortTitle },
        ]}
      />
      <PageHero
        eyebrow="Service"
        title={`${s.title} in South Florida`}
        description={s.summary}
      >
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="border-primary/30 bg-primary/5 text-primary">
            Commercial service call: {site.serviceCall}
          </Badge>
          <Badge variant="outline">Same-day emergency dispatch</Badge>
          <Badge variant="outline">Licensed & insured</Badge>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton href="/request-dispatch">
            Request Dispatch <ArrowRight className="size-4" />
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
              <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
              <p className="mt-4 text-muted-foreground">{s.longDescription}</p>
            </div>
            <Card className="h-fit gap-3 p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                South Florida coverage
              </div>
              <p className="text-sm text-muted-foreground">
                Miami-Dade, Broward and Palm Beach — same-day emergency
                dispatch for commercial accounts.
              </p>
              <LinkButton
                href={`/request-dispatch?service=${s.slug}`}
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
            Request {s.shortTitle.toLowerCase()} dispatch
          </h2>
          <p className="mt-2 text-muted-foreground">
            A dispatcher will confirm the service window shortly.
          </p>
          <div className="mt-8">
            <DispatchForm defaults={{ service: s.slug }} />
          </div>
        </div>
      </section>

      {s.faqs.length ? (
        <>
          <FAQSection faqs={s.faqs} title={`${s.shortTitle} FAQ`} />
          <JsonLd data={faqSchema(s.faqs)} />
        </>
      ) : null}

      {/*
        Internal linking for discovery — every city combo page for this
        service, grouped by county. Mirrors the combo-page "nearby cities"
        pill pattern; gives Google a crawl path from each service hub to all
        of its /{city}/{service} pages (strongest discovery path on the
        sister berne-repair site).
      */}
      <section className="bg-background py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-base font-semibold tracking-tight">
            {s.title} by city
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Same-day {s.shortTitle.toLowerCase()} dispatch across Miami-Dade,
            Broward and Palm Beach counties.
          </p>
          {citiesByCounty().map((county) => (
            <div key={county.county} className="mt-6">
              <h3 className="text-sm font-semibold text-muted-foreground">
                {county.label} County
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {county.items.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/${city.slug}/${s.slug}`}
                    className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground hover:text-foreground"
                  >
                    {s.shortTitle} in {city.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <JsonLd
        data={serviceSchema({
          name: s.title,
          description: s.summary,
          url: `${site.url}/services/${s.slug}`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Services", url: `${site.url}/services` },
          { name: s.shortTitle, url: `${site.url}/services/${s.slug}` },
        ])}
      />
    </PageShell>
  )
}

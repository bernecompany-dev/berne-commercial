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
import { getComparisonsForService } from "@/lib/data/brand-comparisons"
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
  const relatedComparisons = getComparisonsForService(s.slug)

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
        {/* One badge with NEW information — "Same-day" and "Licensed" sit in
            the TrustStrip directly above this hero. */}
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="border-primary/30 bg-primary/5 text-primary">
            Commercial service call: {site.serviceCall} — applied toward approved repair
          </Badge>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton href={`/request-dispatch?service=${s.slug}`}>
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
              {/* The same form is rendered on this page (#dispatch) — anchor
                  to it instead of a pointless round-trip navigation. */}
              <LinkButton href="#dispatch" className="mt-3">
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

      {/* Symptom → cause → cost table (top hubs). Diagnostic depth is what
          the page-1 competitors for "commercial refrigeration repair" have
          and templated hubs lack; costs derive from brand-comparisons
          failure-mode tickets. */}
      {s.symptomTable?.length ? (
        <section className="border-b border-border/60 bg-background py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              {s.shortTitle} symptoms, likely causes &amp; typical repair costs
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
              Real numbers from our South Florida service tickets — parts plus
              labor, before any contract pricing. The {site.serviceCall}{" "}
              commercial service call covers the diagnosis and is applied
              toward an approved repair.
            </p>
            <p
              className="mt-4 text-xs text-muted-foreground md:hidden"
              aria-hidden
            >
              Swipe to see costs and dispatch times →
            </p>
            {/* tabIndex + role: the horizontally-scrolling cost columns must
                be reachable by keyboard, not just touch. */}
            <div
              tabIndex={0}
              role="region"
              aria-label={`${s.shortTitle} symptoms and typical repair costs`}
              className="mt-2 overflow-x-auto rounded-xl border border-border focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 md:mt-6"
            >
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border bg-accent/40 text-left">
                    <th scope="col" className="px-4 py-3 font-semibold">
                      What you&apos;re seeing
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Most likely cause
                    </th>
                    <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">
                      Typical cost
                    </th>
                    <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">
                      Dispatch
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {s.symptomTable.map((row) => (
                    <tr
                      key={row.symptom}
                      className="border-b border-border/60 last:border-b-0"
                    >
                      <td className="px-4 py-3 font-medium text-foreground">
                        {row.symptom}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {row.cause}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-foreground">
                        {row.cost}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-muted-foreground">
                        {row.response}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Same-day dispatch is typical across Miami-Dade, Broward and Palm
              Beach; refrigeration loss is prioritized as an emergency. Call{" "}
              {site.phone} for a window.
            </p>
          </div>
        </section>
      ) : null}

      <section
        id="dispatch"
        className="border-b border-border/60 bg-accent/30 py-16"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Request {s.shortTitle.toLowerCase()} service
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

      {/* Cross-link to matching /compare guides — the site's strongest
          organic earners, otherwise orphaned with zero internal links. */}
      {relatedComparisons.length ? (
        <section className="border-b border-border/60 bg-accent/30 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Equipment guides for {s.shortTitle.toLowerCase()}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Deciding which brand to buy or keep? Our techs compare the
              platforms we service every week.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {relatedComparisons.map((c) => (
                <Link
                  key={c.slug}
                  href={`/compare/${c.slug}`}
                  className="group flex flex-col gap-1.5 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
                >
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary">
                    {c.h1}
                  </span>
                  <span className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                    {c.teaser}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
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
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {s.title} by city
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Same-day {s.shortTitle.toLowerCase()} dispatch across Miami-Dade,
            Broward and Palm Beach counties.
          </p>
          {citiesByCounty().map((county) => (
            <div key={county.county} className="mt-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {county.label} County
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {county.items.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/${city.slug}/${s.slug}`}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground hover:bg-accent hover:text-foreground"
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

import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { PageHero, PageShell } from "@/components/page-shell"
import { Card } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { AnchorButton, LinkButton } from "@/components/link-button"
import { DispatchForm } from "@/components/dispatch-form"
import { ServiceBullets } from "@/components/service-bullets"
import { FAQSection } from "@/components/faq-section"
import { JsonLd } from "@/components/json-ld"
import { faqSchema, metaFor, serviceSchema } from "@/lib/seo"
import { site } from "@/lib/site"
import { getService, services } from "@/lib/data/services"

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const s = getService(slug)
  if (!s) return metaFor({ title: "Service", description: "", path: `/services/${slug}`, noindex: true })
  return metaFor({
    title: `${s.title} in South Florida`,
    description: s.summary,
    path: `/services/${slug}`,
  })
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params
  const s = getService(slug)
  if (!s) notFound()

  return (
    <PageShell>
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

      <JsonLd
        data={serviceSchema({
          name: s.title,
          description: s.summary,
          url: `${site.url}/services/${s.slug}`,
        })}
      />
    </PageShell>
  )
}

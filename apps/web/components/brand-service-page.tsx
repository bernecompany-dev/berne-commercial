import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, AlertTriangle, Timer, Wrench } from "lucide-react"

import { PageHero, PageShell } from "@/components/page-shell"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { AnchorButton, LinkButton } from "@/components/link-button"
import { DispatchForm } from "@/components/dispatch-form"
import { FAQSection } from "@/components/faq-section"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, faqSchema, metaFor, serviceSchema } from "@/lib/seo"
import { site } from "@/lib/site"
import type { BrandService } from "@/lib/data/brand-services"
import { getBrandService } from "@/lib/data/brand-services"

/**
 * Shared template for the brand-specific service pages (Content_Plan
 * 2026-06-10): /services/manitowoc-ice-machine-repair and friends.
 *
 * Same machinery decision as /services/medical-lab-refrigeration-repair —
 * static routes, NOT services.ts entries (a services.ts entry would spawn
 * 70 phantom /{city}/<slug> combos). Each route file is a thin wrapper:
 *
 *   export const metadata = brandServiceMetadata("<slug>")
 *   export default function Page() { return <BrandServicePage slug="<slug>" /> }
 *
 * EN-only — metaFor esAlternate=false (no /es counterpart exists).
 */

export function brandServiceMetadata(slug: string): Metadata {
  const b = getBrandService(slug)
  if (!b) throw new Error(`Unknown brand service: ${slug}`)
  return metaFor({
    title: b.metaTitle,
    description: b.metaDescription,
    path: `/services/${b.slug}`,
    esAlternate: false,
  })
}

export function BrandServicePage({ slug }: { slug: string }) {
  const b = getBrandService(slug)
  if (!b) throw new Error(`Unknown brand service: ${slug}`)
  const path = `/services/${b.slug}`

  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: `${b.shortTitle} Repair` },
        ]}
      />
      <PageHero
        eyebrow={`${b.brand} Service`}
        title={`${b.title} in South Florida`}
        description={b.heroDescription}
      >
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="outline"
            className="border-primary/30 bg-primary/5 text-primary"
          >
            Commercial service call: {site.serviceCall} — applied toward
            approved repair
          </Badge>
          <Badge variant="outline">Independent service — no dealer queue</Badge>
          <Badge variant="outline">EPA Section 608 certified</Badge>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton href={`/request-dispatch?topic=${b.requestTopic}`}>
            Request {b.brand} Service <ArrowRight className="size-4" />
          </LinkButton>
          <AnchorButton href={site.phoneHref} variant="outline">
            Call {site.phone}
          </AnchorButton>
        </div>
      </PageHero>

      {/* Intro + response card */}
      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold tracking-tight">
                {b.brand} service, the way we actually run it
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                {b.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <Card className="h-fit gap-3 p-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                <Timer className="size-4" /> Dispatch expectations
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">
                    Down equipment:
                  </span>{" "}
                  same-day across Miami-Dade, Broward and Palm Beach — seven
                  days a week.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    First-visit closure:
                  </span>{" "}
                  common {b.brand} parts ride on the truck.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Track record:
                  </span>{" "}
                  18 W-2 technicians, 29,000+ services since 2015, 4.79★ from
                  871 reviews.
                </li>
              </ul>
              <LinkButton
                href={`/request-dispatch?topic=${b.requestTopic}`}
                className="mt-3"
              >
                Request Service
              </LinkButton>
            </Card>
          </div>
        </div>
      </section>

      {/* Codes / fault table */}
      <section className="border-b border-border/60 bg-accent/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
            <AlertTriangle className="size-6 text-primary" />
            {b.codesHeading}
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
            {b.codesIntro}
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {b.codes.map((c) => (
              <div
                key={c.code}
                className="rounded-xl border border-border bg-card p-5"
              >
                <div className="text-sm font-semibold text-primary">
                  {c.code}
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground/90">
                  {c.meaning}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.action}
                </p>
              </div>
            ))}
          </div>
          {b.codesNote ? (
            <p className="mt-4 max-w-3xl text-xs text-muted-foreground">
              {b.codesNote}
            </p>
          ) : null}
        </div>
      </section>

      {/* Symptom → cause → cost table (hub pattern) */}
      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            {b.brand} symptoms, likely causes &amp; typical repair costs
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
            Real numbers from our South Florida service tickets — parts plus
            labor, before any contract pricing. The {site.serviceCall}{" "}
            commercial service call covers the diagnosis and is applied toward
            an approved repair.
          </p>
          <p className="mt-4 text-xs text-muted-foreground md:hidden" aria-hidden>
            Swipe to see costs and dispatch times →
          </p>
          <div
            tabIndex={0}
            role="region"
            aria-label={`${b.brand} symptoms and typical repair costs`}
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
                  <th
                    scope="col"
                    className="whitespace-nowrap px-4 py-3 font-semibold"
                  >
                    Typical cost
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-4 py-3 font-semibold"
                  >
                    Dispatch
                  </th>
                </tr>
              </thead>
              <tbody>
                {b.symptomTable.map((row) => (
                  <tr
                    key={row.symptom}
                    className="border-b border-border/60 last:border-b-0 even:bg-accent/20"
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
        </div>
      </section>

      {/* Equipment grid */}
      <section className="border-b border-border/60 bg-accent/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            {b.brand} equipment we service
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {b.equipment.map((e) => (
              <Card key={e.name} className="gap-2 p-5">
                <div className="flex items-start gap-2">
                  <Wrench className="mt-0.5 size-4 shrink-0 text-primary" />
                  <div>
                    <div className="text-sm font-semibold">{e.name}</div>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {e.detail}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dispatch form */}
      <section
        id="dispatch"
        className="border-b border-border/60 bg-background py-16"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Request {b.brand} service
          </h2>
          <p className="mt-2 text-muted-foreground">
            A dispatcher will confirm the service window shortly. Refrigeration
            and no-ice emergencies are prioritized.
          </p>
          <div className="mt-8">
            <DispatchForm />
          </div>
        </div>
      </section>

      <FAQSection
        faqs={b.faqs}
        title={`${b.brand} repair FAQ`}
        description="From dispatch and the field team."
      />

      {/* Related pages + independence disclaimer */}
      <section className="bg-accent/30 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Related guides &amp; services
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {b.related.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/10"
              >
                {l.label} →
              </Link>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-muted-foreground">
            {b.brand} and related model names are trademarks of their
            respective owners and are used here for identification only. Berne
            Commercial Repair is an independent service company — not
            affiliated with, endorsed by, or an authorized service agent of{" "}
            {b.brand}. Factory-warranty repairs should be directed to the
            manufacturer&apos;s own network.
          </p>
        </div>
      </section>

      <JsonLd
        data={serviceSchema({
          name: `${b.title}`,
          description: b.metaDescription,
          url: `${site.url}${path}`,
        })}
      />
      <JsonLd data={faqSchema(b.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Services", url: `${site.url}/services` },
          { name: `${b.shortTitle} Repair`, url: `${site.url}${path}` },
        ])}
      />
    </PageShell>
  )
}

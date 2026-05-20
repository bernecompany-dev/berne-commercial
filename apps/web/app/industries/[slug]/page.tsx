import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, ShieldCheck, FileCheck2, Award } from "lucide-react"
import { PageHero, PageShell } from "@/components/page-shell"
import { Card } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { AnchorButton, LinkButton } from "@/components/link-button"
import { DispatchForm } from "@/components/dispatch-form"
import { FAQSection } from "@/components/faq-section"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, faqSchema, metaFor, serviceSchema } from "@/lib/seo"
import { site } from "@/lib/site"
import {
  INDUSTRY_PROFILES,
  getIndustryProfile,
} from "@/lib/data/industry-profiles"
import { getBrandsForIndustry } from "@/lib/data/brand-profiles"
import { getService } from "@/lib/data/services"

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return INDUSTRY_PROFILES.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const p = getIndustryProfile(slug)
  if (!p) {
    return metaFor({
      title: "Industry",
      description: "",
      path: `/industries/${slug}`,
      noindex: true,
    })
  }
  return metaFor({
    title: p.metaTitle,
    description: p.metaDescription,
    path: `/industries/${slug}`,
  })
}

// industryServiceSchema was retired 2026-05-20 — it emitted a second
// LocalBusiness node with @id=#localbusiness AND a duplicate aggregateRating,
// which collided with the canonical node from app/layout.tsx and triggered
// "Review has multiple aggregate ratings" in GSC URL-Inspection. We now
// reuse the shared serviceSchema() helper from lib/seo, which emits a Service
// whose provider is a bare @id reference back to the canonical node.

export default async function IndustryDetailPage({ params }: Params) {
  const { slug } = await params
  const profile = getIndustryProfile(slug)
  if (!profile) notFound()

  const related = profile.relatedServices
    .map((s) => getService(s))
    .filter((s): s is NonNullable<ReturnType<typeof getService>> => Boolean(s))

  // Brands relevant to this industry — inverted from brand.industrySlugs in
  // lib/data/brand-profiles.ts so we don't maintain a parallel mapping.
  const industryBrands = getBrandsForIndustry(profile.slug).slice(0, 5)

  return (
    <PageShell>
      <PageHero
        eyebrow="Industries"
        title={profile.h1}
        description={profile.hero}
      >
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="outline"
            className="border-primary/30 bg-primary/5 text-primary"
          >
            Commercial service call: {site.serviceCall}
          </Badge>
          <Badge variant="outline">Same-day dispatch</Badge>
          <Badge variant="outline">Licensed, insured, EPA-certified</Badge>
          <Badge variant="outline">4.79★ on 871 reviews</Badge>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton href={`/request-dispatch?industry=${profile.slug}`}>
            Request Dispatch <ArrowRight className="size-4" />
          </LinkButton>
          <AnchorButton href={site.phoneHref} variant="outline">
            Call {site.phone}
          </AnchorButton>
        </div>
      </PageHero>

      {/* Why Berne for this industry */}
      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold tracking-tight">
                Why {profile.industry} owners call Berne
              </h2>
              <p className="mt-4 text-muted-foreground">{profile.whyUs}</p>
              <p className="mt-4 text-muted-foreground">
                Eleven years operating across South Florida, 18 technicians on
                the road, 29,000+ services completed, and a 4.79-star average
                on 871 reviews. We&apos;re licensed and insured (DBA Berne
                Appliance Repair), EPA-certified for refrigerant work, and
                NDA-friendly for the verticals that need it.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <a
                  href="/credentials/coi.pdf"
                  className="inline-flex items-center gap-2 rounded-lg border border-border/70 bg-card/60 px-3 py-2 text-sm hover:bg-accent"
                >
                  <ShieldCheck className="size-4 text-primary" />
                  Certificate of Insurance (COI)
                </a>
                <a
                  href="/credentials/epa-certificate.pdf"
                  className="inline-flex items-center gap-2 rounded-lg border border-border/70 bg-card/60 px-3 py-2 text-sm hover:bg-accent"
                >
                  <Award className="size-4 text-primary" />
                  EPA Section 608 Certificate
                </a>
                <a
                  href="/credentials/dba-berne-appliance-repair.pdf"
                  className="inline-flex items-center gap-2 rounded-lg border border-border/70 bg-card/60 px-3 py-2 text-sm hover:bg-accent"
                >
                  <FileCheck2 className="size-4 text-primary" />
                  DBA Registration
                </a>
              </div>
            </div>
            <Card className="h-fit gap-3 p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                South Florida coverage
              </div>
              <p className="text-sm text-muted-foreground">
                Miami-Dade, Broward and Palm Beach — same-day emergency
                dispatch for commercial accounts.
              </p>
              <ul className="mt-2 space-y-1 text-sm">
                <li>· Miami-Dade County</li>
                <li>· Broward County</li>
                <li>· Palm Beach County</li>
              </ul>
              <LinkButton
                href={`/request-dispatch?industry=${profile.slug}`}
                className="mt-3"
              >
                Request Service
              </LinkButton>
            </Card>
          </div>
        </div>
      </section>

      {/* Equipment we service */}
      <section className="border-b border-border/60 bg-accent/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Equipment we service in {profile.industry}
          </h2>
          <p className="mt-2 max-w-3xl text-muted-foreground">
            Concrete brands and configurations our technicians actually open
            and repair — not a marketing list.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {profile.equipment.map((cat) => (
              <Card key={cat.name} className="gap-2 p-5">
                <div className="text-sm font-semibold">{cat.name}</div>
                <div className="text-xs text-muted-foreground">
                  {cat.brands.join(" · ")}
                </div>
                {cat.notes ? (
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {cat.notes}
                  </p>
                ) : null}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common issues */}
      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Common {profile.industryTitle.toLowerCase()} repair issues we
            handle
          </h2>
          <ul className="mt-6 space-y-3">
            {profile.commonIssues.map((issue, i) => (
              <li
                key={i}
                className="flex gap-3 rounded-lg border border-border/60 bg-card/60 p-4 text-sm text-muted-foreground"
              >
                <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  {i + 1}
                </span>
                <span>{issue}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Service area */}
      <section className="border-b border-border/60 bg-accent/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Service area
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            We dispatch across all three South Florida counties for{" "}
            {profile.industry}: Miami-Dade, Broward and Palm Beach. Most
            emergencies receive same-day response from Miami Beach to Boca
            Raton.
          </p>
          <div className="mt-4">
            <Link
              href="/service-areas"
              className="text-sm font-medium text-primary hover:underline"
            >
              See full service area →
            </Link>
          </div>
        </div>
      </section>

      {/* Why same-day */}
      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Why same-day matters for {profile.industry}
          </h2>
          <p className="mt-4 text-muted-foreground">{profile.sameDay}</p>
        </div>
      </section>

      {/* Brands we service in this industry — cross-links to /brands/[slug]
          so industry hubs feed PageRank into brand pages and vice versa.
          Inverted from brand.industrySlugs (single source of truth). */}
      {industryBrands.length ? (
        <section className="border-b border-border/60 bg-background py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Brands we service in {profile.industry}
            </h2>
            <p className="mt-2 max-w-3xl text-muted-foreground">
              Equipment platforms our technicians actively service across
              South Florida {profile.industry.toLowerCase()} accounts.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {industryBrands.map((br) => (
                <Link
                  key={br.slug}
                  href={`/brands/${br.slug}`}
                  className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
                >
                  <div className="text-base font-semibold group-hover:text-primary">
                    {br.name}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {br.teaser}
                  </p>
                  <div className="mt-3 text-xs font-medium uppercase tracking-wider text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    View {br.name} coverage →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Related services */}
      {related.length ? (
        <section className="border-b border-border/60 bg-accent/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Related services
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group rounded-lg border border-border/60 bg-card p-4 transition hover:border-primary/40"
                >
                  <div className="text-sm font-semibold group-hover:text-primary">
                    {s.shortTitle}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {s.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* CTA / Form */}
      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Request service for your {profile.industryTitle.toLowerCase()}{" "}
            operation
          </h2>
          <p className="mt-2 text-muted-foreground">
            A dispatcher will confirm the service window shortly.
          </p>
          <div className="mt-8">
            <DispatchForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      {profile.faqs.length ? (
        <>
          <FAQSection
            faqs={profile.faqs}
            title={`${profile.industryTitle} repair FAQ`}
          />
          <JsonLd data={faqSchema(profile.faqs)} />
        </>
      ) : null}

      <JsonLd
        data={serviceSchema({
          name: `${profile.industryTitle} Equipment Repair`,
          description: profile.metaDescription,
          url: `${site.url}/industries/${profile.slug}`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Industries", url: `${site.url}/industries` },
          {
            name: profile.industryTitle,
            url: `${site.url}/industries/${profile.slug}`,
          },
        ])}
      />
    </PageShell>
  )
}

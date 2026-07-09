import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowRight,
  Wrench,
  ShieldCheck,
  Clock,
  Award,
  Utensils,
  Hotel,
  ShoppingCart,
  Hospital,
  School,
  Flag,
  Beer,
  Dumbbell,
  Building,
  Shirt,
  type LucideIcon,
} from "lucide-react"

import { PageHero, PageShell } from "@/components/page-shell"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { AnchorButton, LinkButton } from "@/components/link-button"
import { DispatchForm } from "@/components/dispatch-form"
import { FAQSection } from "@/components/faq-section"
import { JsonLd } from "@/components/json-ld"
import { BrandSpecialistsSection } from "@/components/brand-specialists-section"

import {
  brandProfiles,
  brandProfileSlugs,
  getBrandProfile,
} from "@/lib/data/brand-profiles"
import { getComparisonsForBrand } from "@/lib/data/brand-comparisons"
import { getBrandServiceForBrandProfile } from "@/lib/data/brand-services"
import { INDUSTRY_PROFILES } from "@/lib/data/industry-profiles"
import {
  breadcrumbSchema,
  faqSchema,
  metaFor,
  serviceSchema,
} from "@/lib/seo"
import { site } from "@/lib/site"

const INDUSTRY_ICONS: Record<string, LucideIcon> = {
  restaurants: Utensils,
  hotels: Hotel,
  grocery: ShoppingCart,
  healthcare: Hospital,
  schools: School,
  "country-clubs": Flag,
  breweries: Beer,
  gyms: Dumbbell,
  "multi-family": Building,
  laundromats: Shirt,
}

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return brandProfileSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const b = getBrandProfile(slug)
  if (!b) {
    return metaFor({
      title: "Brand",
      description: "",
      path: `/brands/${slug}`,
      noindex: true,
    })
  }
  return metaFor({
    title: b.metaTitle,
    description: b.metaDescription,
    path: `/brands/${b.slug}`,
  })
}

export default async function BrandDetailPage({ params }: Params) {
  const { slug } = await params
  const b = getBrandProfile(slug)
  if (!b) notFound()

  type IndustryProfileT = (typeof INDUSTRY_PROFILES)[number]
  const industryLinks: IndustryProfileT[] = b.industrySlugs
    .map((s) => INDUSTRY_PROFILES.find((i) => i.slug === s))
    .filter((x): x is IndustryProfileT => Boolean(x))

  // Rank related brands by industry-overlap with the current brand so
  // restaurants-heavy brands surface other restaurants brands, not random
  // entries. Fallback: alphabetical order of the remaining brands.
  const currentIndSet = new Set(b.industrySlugs)
  const relatedBrands = brandProfiles
    .filter((p) => p.slug !== b.slug)
    .map((p) => ({
      p,
      overlap: p.industrySlugs.filter((s) => currentIndSet.has(s)).length,
    }))
    .sort((a, c) => c.overlap - a.overlap || a.p.name.localeCompare(c.p.name))
    .map((x) => x.p)
    .slice(0, 4)

  const comparisons = getComparisonsForBrand(b.slug)
  const dedicatedService = getBrandServiceForBrandProfile(b.slug)

  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Brands", href: "/brands" },
          { name: b.name },
        ]}
      />
      <PageHero
        eyebrow={`${b.name} Repair`}
        title={`${b.name} Commercial Repair — South Florida`}
        description={b.teaser}
      >
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="outline"
            className="border-primary/30 bg-primary/5 text-primary"
          >
            Commercial service call: {site.serviceCall}
          </Badge>
          <Badge variant="outline">Same-day emergency dispatch</Badge>
          <Badge variant="outline">Licensed &amp; insured · EPA-608</Badge>
          <Badge variant="outline">11 years · 18 technicians</Badge>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton href={`/request-dispatch?brand=${b.slug}`}>
            Request {b.name} Service <ArrowRight className="size-4" />
          </LinkButton>
          <AnchorButton href={site.phoneHref} variant="outline">
            Call {site.phone}
          </AnchorButton>
        </div>
      </PageHero>

      {/* About + side card */}
      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold tracking-tight">
                About {b.name}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {b.about}
              </p>
            </div>
            <Card className="h-fit gap-3 p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                South Florida coverage
              </div>
              <p className="text-sm text-muted-foreground">
                Miami-Dade, Broward and Palm Beach — same-day emergency
                dispatch for {b.name} commercial accounts.
              </p>
              <ul className="mt-2 grid gap-2 text-sm text-foreground/85">
                <li className="flex items-center gap-2">
                  <Clock className="size-4 text-primary" /> Same-day dispatch
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-primary" /> COI &amp; W-9
                  on file
                </li>
                <li className="flex items-center gap-2">
                  <Award className="size-4 text-primary" /> 4.79 / 1,373 reviews
                </li>
              </ul>
              <LinkButton
                href={`/request-dispatch?brand=${b.slug}`}
                className="mt-3"
              >
                Request Service
              </LinkButton>
              {/* Dedicated brand-repair page (fault codes, costs) — the
                  deep-dive counterpart to this brand overview. */}
              {dedicatedService ? (
                <Link
                  href={`/services/${dedicatedService.slug}`}
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  {dedicatedService.title}: fault codes &amp; costs
                  <ArrowRight className="size-3.5" />
                </Link>
              ) : null}
            </Card>
          </div>
        </div>
      </section>

      {/* Equipment we service */}
      <section className="border-b border-border/60 bg-accent/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            {b.name} equipment we service
          </h2>
          <p className="mt-2 max-w-3xl text-muted-foreground">
            Model series and platforms we cover across South Florida commercial
            accounts.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {b.equipment.map((e) => (
              <Card key={e.series} className="gap-2 p-5">
                <div className="flex items-center gap-2">
                  <span className="inline-flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Wrench className="size-4" />
                  </span>
                  <div className="text-sm font-semibold leading-tight">
                    {e.series}
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {e.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Failure modes */}
      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Common {b.name} failure modes we repair
          </h2>
          <p className="mt-2 max-w-3xl text-muted-foreground">
            What our technicians see on {b.name} equipment in South Florida —
            documented from real service tickets, not a brochure.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {b.failureModes.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-border bg-card p-5"
              >
                <div className="text-base font-semibold tracking-tight">
                  {f.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Berne */}
      <section className="border-b border-border/60 bg-accent/30 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Why Berne services {b.name} equipment
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {b.whyBerne}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <LinkButton href="/credentials" variant="outline">
              View credentials
            </LinkButton>
            <LinkButton href={`/request-dispatch?brand=${b.slug}`}>
              Request {b.name} Service <ArrowRight className="size-4" />
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Specialists for this brand */}
      <BrandSpecialistsSection brandSlug={b.slug} brandName={b.name} />

      {/* Industries cross-link */}
      {industryLinks.length ? (
        <section className="border-b border-border/60 bg-background py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Industries where {b.name} is found
            </h2>
            <p className="mt-2 max-w-3xl text-muted-foreground">
              {b.name} equipment is standard in the operations we cover most
              heavily across South Florida.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {industryLinks.map((ind) => {
                const Icon = INDUSTRY_ICONS[ind.slug] ?? Building
                return (
                  <Link
                    key={ind.slug}
                    href={`/industries/${ind.slug}`}
                    className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
                  >
                    <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <div className="mt-3 text-base font-semibold">
                      {ind.industryTitle}
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {ind.hero}
                    </p>
                    <div className="mt-3 text-xs font-medium uppercase tracking-wider text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      View {ind.industry} coverage →
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      ) : null}

      {/* Service area */}
      <section className="border-b border-border/60 bg-accent/30 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Service area
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {b.serviceArea}
          </p>
          <div className="mt-4">
            <LinkButton href="/service-areas" variant="outline">
              See all South Florida service areas
            </LinkButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={b.faqs}
        title={`${b.name} repair FAQ`}
        description="Quick answers from our dispatch and field team."
      />

      {/* CTA dispatch */}
      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Request {b.name} dispatch
          </h2>
          <p className="mt-2 text-muted-foreground">
            A dispatcher will confirm the service window shortly.
          </p>
          <div className="mt-8">
            <DispatchForm />
          </div>
        </div>
      </section>

      {/* Brand comparisons (long-form "X vs Y" decision content) */}
      {comparisons.length ? (
        <section className="border-b border-border/60 bg-background py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-xs font-medium uppercase tracking-wider text-primary">
                Compare {b.name}
              </div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                {b.name} vs the alternatives — honest comparisons.
              </h2>
              <p className="mt-3 text-muted-foreground">
                Long-form decision content for operators weighing {b.name}{" "}
                against the brands it competes with. Built from real field
                tickets, not catalog copy.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {comparisons.map((c) => (
                <Link
                  key={c.slug}
                  href={`/compare/${c.slug}`}
                  className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
                >
                  <div className="text-base font-semibold">
                    {c.h1.replace(/ — .*/, "")}
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {c.teaser.length > 160
                      ? `${c.teaser.slice(0, 157)}...`
                      : c.teaser}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-primary">
                    Read the comparison
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Related brands */}
      {relatedBrands.length ? (
        <section className="bg-accent/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold tracking-tight">
              Other commercial brands we service
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {relatedBrands.map((rb) => (
                <Link
                  key={rb.slug}
                  href={`/brands/${rb.slug}`}
                  className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
                >
                  <div className="text-base font-semibold">{rb.name}</div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {rb.teaser}
                  </p>
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <LinkButton href="/brands" variant="outline">
                See all commercial brands we service
              </LinkButton>
            </div>
          </div>
        </section>
      ) : null}

      {/* Schemas */}
      <JsonLd
        data={serviceSchema({
          name: `Commercial ${b.name} Equipment Repair`,
          description: b.metaDescription,
          url: `${site.url}/brands/${b.slug}`,
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Brand",
          name: b.name,
          alternateName: b.manufacturer,
          ...(b.hq
            ? {
                address: {
                  "@type": "PostalAddress",
                  addressLocality: b.hq,
                },
              }
            : {}),
          url: `${site.url}/brands/${b.slug}`,
        }}
      />
      <JsonLd data={faqSchema(b.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Brands", url: `${site.url}/brands` },
          { name: b.name, url: `${site.url}/brands/${b.slug}` },
        ])}
      />
    </PageShell>
  )
}

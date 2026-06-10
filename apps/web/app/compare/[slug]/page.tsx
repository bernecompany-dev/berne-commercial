import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowRight,
  CheckCircle2,
  Scale,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react"

import { PageHero, PageShell } from "@/components/page-shell"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Badge } from "@workspace/ui/components/badge"
import { AnchorButton, LinkButton } from "@/components/link-button"
import { DispatchForm } from "@/components/dispatch-form"
import { FAQSection } from "@/components/faq-section"
import { JsonLd } from "@/components/json-ld"

import {
  BRAND_COMPARISONS,
  BRAND_COMPARISON_SLUGS,
  getBrandComparison,
} from "@/lib/data/brand-comparisons"
import { getBrandServicesForComparison } from "@/lib/data/brand-services"
import { breadcrumbSchema, faqSchema, metaFor } from "@/lib/seo"
import { site } from "@/lib/site"

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return BRAND_COMPARISON_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: Params): Promise<Metadata> {
  const { slug } = await params
  const c = getBrandComparison(slug)
  if (!c) {
    return metaFor({
      title: "Comparison",
      description: "",
      path: `/compare/${slug}`,
      noindex: true,
    })
  }
  return metaFor({
    title: c.metaTitle,
    description: c.metaDescription,
    path: `/compare/${c.slug}`,
    // EN-only section — /es/compare/* does not exist.
    esAlternate: false,
  })
}

export default async function CompareDetailPage({ params }: Params) {
  const { slug } = await params
  const c = getBrandComparison(slug)
  if (!c) notFound()

  // Preferred cross-links first (lets the combi umbrella act as a hub for
  // its pairwise children), fall back to registry order for the rest.
  const preferred = (c.related ?? [])
    .map((slug) => BRAND_COMPARISONS.find((o) => o.slug === slug))
    .filter((o): o is (typeof BRAND_COMPARISONS)[number] => Boolean(o))
  const others = [
    ...preferred,
    ...BRAND_COMPARISONS.filter(
      (o) => o.slug !== c.slug && !preferred.some((p) => p.slug === o.slug),
    ),
  ]
    .filter((o) => o.slug !== c.slug)
    .slice(0, 4)
  const brandRepairPages = getBrandServicesForComparison(c.slug)
  const pageUrl = `${site.url}/compare/${c.slug}`
  const heroTitle = c.h1.replace(/ — .*/, "")
  const updatedLabel = new Date(
    `${c.dateModified ?? c.datePublished}T12:00:00Z`,
  ).toLocaleDateString("en-US", { month: "long", year: "numeric" })

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: c.h1.slice(0, 110),
    alternativeHeadline: c.metaTitle,
    description: c.metaDescription,
    image: `${site.url}/opengraph-image`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    inLanguage: "en-US",
    datePublished: c.datePublished,
    dateModified: c.dateModified ?? c.datePublished,
    author: {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/opengraph-image`,
      },
    },
    // Decision guides ("repair or replace") compare options, not brands —
    // emitting Brand nodes named "Repairing the existing walk-in" would be
    // schema garbage, so they are suppressed.
    ...(c.isDecisionGuide
      ? {}
      : {
          about: c.brands.map((b) => ({
            "@type": "Brand",
            name: b.name,
            ...(b.hq
              ? {
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: b.hq,
                  },
                }
              : {}),
            ...(b.brandSlug
              ? { url: `${site.url}/brands/${b.brandSlug}` }
              : {}),
          })),
        }),
  }

  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Compare", href: "/compare" },
          { name: heroTitle },
        ]}
      />
      <PageHero
        eyebrow={c.isDecisionGuide ? "Decision Guide" : "Brand Comparison"}
        title={c.h1}
        description={c.teaser}
      >
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="outline"
            className="border-primary/30 bg-primary/5 text-primary"
          >
            <Scale className="mr-1 size-3.5" /> Honest comparison
          </Badge>
          <Badge variant="outline">
            Commercial service call: {site.serviceCall}
          </Badge>
          <Badge variant="outline">
            {c.isDecisionGuide
              ? "Built from real service tickets"
              : "We service both brands"}
          </Badge>
          <Badge variant="outline">11 years · 18 technicians</Badge>
          <Badge variant="outline">Updated {updatedLabel}</Badge>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton href={`/request-dispatch?topic=${c.slug}`}>
            Request commercial dispatch <ArrowRight className="size-4" />
          </LinkButton>
          <AnchorButton href={site.phoneHref} variant="outline">
            Call {site.phone}
          </AnchorButton>
        </div>
      </PageHero>

      {/* TL;DR */}
      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <div className="text-xs font-medium uppercase tracking-wider text-primary">
                TL;DR
              </div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                The short version.
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Read these five lines if you don&apos;t have time for the full
                comparison below.
              </p>
            </div>
            <ul className="grid gap-3 lg:col-span-2">
              {c.tldr.map((line, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="size-4" aria-hidden />
                  </span>
                  <span className="text-sm leading-relaxed text-foreground/90">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="border-b border-border/60 bg-accent/30 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-medium uppercase tracking-wider text-primary">
            The comparison
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            Why this comparison, written by a service shop.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            {c.intro.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Per-brand deep dives */}
      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-medium uppercase tracking-wider text-primary">
            {c.isDecisionGuide ? "Option-by-option" : "Brand-by-brand"}
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            {c.isDecisionGuide
              ? "Each path — and what we see in the field."
              : "About each brand — and what we see in the field."}
          </h2>

          <div className="mt-10 grid gap-10">
            {c.brands.map((b) => (
              <article
                key={b.name}
                className="rounded-2xl border border-border bg-card p-6 sm:p-9"
              >
                <header className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {b.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {b.hq ? (
                      <span className="rounded-full border border-border bg-background px-3 py-1 text-muted-foreground">
                        HQ · {b.hq}
                      </span>
                    ) : null}
                    {b.brandSlug ? (
                      <Link
                        href={`/brands/${b.brandSlug}`}
                        className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 font-medium text-primary hover:bg-primary/10"
                      >
                        Full {b.name} repair page →
                      </Link>
                    ) : null}
                  </div>
                </header>

                <p className="text-base leading-relaxed text-muted-foreground">
                  {b.about}
                </p>

                <div className="mt-8 grid gap-6 lg:grid-cols-2">
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
                      <Sparkles className="size-4" /> Where {b.name} wins
                    </h4>
                    <ul className="mt-4 grid gap-3">
                      {b.strengths.map((s) => (
                        <li
                          key={s.title}
                          className="rounded-xl border border-border bg-background p-4"
                        >
                          <div className="text-sm font-semibold">
                            {s.title}
                          </div>
                          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                            {s.detail}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      <Wrench className="size-4" />{" "}
                      {c.isDecisionGuide
                        ? "Where this path goes wrong"
                        : "Common failure modes"}
                    </h4>
                    <ul className="mt-4 grid gap-3">
                      {b.failureModes.map((f) => (
                        <li
                          key={f.title}
                          className="rounded-xl border border-border bg-background p-4"
                        >
                          <div className="text-sm font-semibold">
                            {f.title}
                          </div>
                          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                            {f.detail}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-border bg-background p-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Parts &amp; service economics
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {b.ownership}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer profiles */}
      <section className="border-b border-border/60 bg-accent/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-medium uppercase tracking-wider text-primary">
              Which operator picks which
            </div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              Operator profiles — and our honest recommendation.
            </h2>
            <p className="mt-3 text-muted-foreground">
              No platform is universally better. The right pick depends on your
              account type, ownership horizon, and operating style.
            </p>
          </div>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {c.buyerProfiles.map((p) => (
              <li
                key={p.headline}
                className="rounded-xl border border-border bg-card p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Users className="size-4" aria-hidden />
                  </span>
                  <div>
                    <div className="text-base font-semibold">{p.headline}</div>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {p.recommendation}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Cost of ownership */}
      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-medium uppercase tracking-wider text-primary">
            Cost of ownership
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            What it costs to actually own each one.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {c.ownershipNotes}
          </p>
        </div>
      </section>

      {/* Berne's perspective */}
      <section className="border-b border-border/60 bg-accent/30 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-medium uppercase tracking-wider text-primary">
            Berne&apos;s perspective
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            We service both. Here&apos;s what we think.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {c.bernePerspective}
          </p>
        </div>
      </section>

      <FAQSection
        faqs={c.faqs}
        eyebrow="FAQ"
        title={`${heroTitle} — questions we get`}
        description="From dispatch and the field team."
      />

      {/* CTA dispatch */}
      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-medium uppercase tracking-wider text-primary">
            Same-day commercial dispatch
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            Whichever brand you run — we service it.
          </h2>
          <p className="mt-2 text-muted-foreground">
            A dispatcher will confirm the service window shortly.
          </p>
          <div className="mt-8">
            <DispatchForm />
          </div>
        </div>
      </section>

      {/* Brand repair pages — readers comparing brands often own one that's
          broken right now (Content_Plan 2026-06-10). */}
      {brandRepairPages.length ? (
        <section className="border-b border-border/60 bg-background py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Already own one of these? Repair pages
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fault codes, common failure patterns and real South Florida
              repair costs, brand by brand.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {brandRepairPages.map((bs) => (
                <Link
                  key={bs.slug}
                  href={`/services/${bs.slug}`}
                  className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/10"
                >
                  {bs.title} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Other comparisons */}
      {others.length ? (
        <section className="bg-accent/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold tracking-tight">
              More commercial brand comparisons
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {others.map((other) => (
                <Link
                  key={other.slug}
                  href={`/compare/${other.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
                >
                  <div className="text-base font-semibold">
                    {other.h1.replace(/ — .*/, "")}
                  </div>
                  <p className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {other.teaser.length > 140
                      ? `${other.teaser.slice(0, 137)}...`
                      : other.teaser}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-primary">
                    Read the comparison
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <LinkButton href="/compare" variant="outline">
                See all comparisons
              </LinkButton>
            </div>
          </div>
        </section>
      ) : null}

      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema(c.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Compare", url: `${site.url}/compare` },
          { name: heroTitle, url: pageUrl },
        ])}
      />
    </PageShell>
  )
}

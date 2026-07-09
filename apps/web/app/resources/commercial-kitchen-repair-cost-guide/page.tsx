import type { Metadata } from "next"
import Link from "next/link"
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Quote,
  Scale,
  Wrench,
} from "lucide-react"

import { PageHero, PageShell } from "@/components/page-shell"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { AnchorButton, LinkButton } from "@/components/link-button"
import { FAQSection } from "@/components/faq-section"
import { JsonLd } from "@/components/json-ld"
import { RepairReplaceCalculator } from "@/components/repair-replace-calculator"
import { faqSchema, metaFor, breadcrumbSchema } from "@/lib/seo"
import { site } from "@/lib/site"
import { REPAIRS_COMPLETED_DISPLAY } from "@/lib/data/company"
import {
  COST_GROUPS,
  CITABLE_STATS,
  COST_GUIDE_FAQS,
} from "@/lib/data/repair-cost-guide"

/**
 * South Florida Commercial Kitchen Equipment Repair Cost Guide — a linkable
 * data-asset (cost tables + interactive repair-vs-replace calculator) built to
 * attract editorial + LLM citations and distribute internal link equity to the
 * service hubs. All figures aggregate published site content; see the data
 * layer (lib/data/repair-cost-guide.ts) for sourcing notes.
 *
 * Static EN-only route under /resources (no /es twin, no /{city} combo spawn):
 * metaFor esAlternate=false, hand-listed in app/sitemap.ts. Schema graph:
 * Article + Dataset (cost tables) + FAQPage + BreadcrumbList — no AggregateRating
 * (that lives on the global LocalBusiness node only).
 */

const PATH = "/resources/commercial-kitchen-repair-cost-guide"
const PUBLISHED = "2026-06-29"
const MODIFIED = "2026-06-29"

export const metadata: Metadata = metaFor({
  title: "Commercial Kitchen Repair Cost Guide — South FL",
  description:
    "What commercial kitchen equipment repair really costs in South Florida — walk-in, ice, fryer, combi, dishwasher, range — plus a repair-vs-replace calculator.",
  path: PATH,
  esAlternate: false,
})

export default function RepairCostGuidePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${site.url}${PATH}#article`,
    headline:
      "South Florida Commercial Kitchen Equipment Repair Cost Guide (2026)",
    description:
      "Typical repair cost ranges by equipment type, equipment lifespans, and a repair-vs-replace framework for commercial kitchens across Miami-Dade, Broward and Palm Beach.",
    image: `${site.url}/opengraph-image`,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    inLanguage: "en-US",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}${PATH}` },
    author: { "@id": `${site.url}/#organization` },
    publisher: {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: { "@type": "ImageObject", url: `${site.url}/opengraph-image` },
    },
    about: { "@id": `${site.url}/#localbusiness` },
  }

  // Dataset schema for the cost tables — makes the asset machine-citable and
  // surfaces it in dataset/answer experiences. One variableMeasured per
  // equipment category with its published cost-range span.
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "@id": `${site.url}${PATH}#dataset`,
    name: "South Florida Commercial Kitchen Equipment Repair Cost Ranges",
    description:
      "Typical repair cost ranges (parts + labor) and service lifespans for commercial kitchen equipment in South Florida, aggregated from Berne Commercial Repair service tickets. Includes symptom, likely cause, cost range and dispatch expectation per equipment category.",
    url: `${site.url}${PATH}`,
    keywords: [
      "commercial kitchen equipment repair cost",
      "repair vs replace",
      "equipment lifespan",
      "South Florida",
      "restaurant equipment",
    ],
    creator: { "@id": `${site.url}/#organization` },
    publisher: { "@id": `${site.url}/#organization` },
    isAccessibleForFree: true,
    license: "https://creativecommons.org/licenses/by/4.0/",
    spatialCoverage: {
      "@type": "Place",
      name: "South Florida (Miami-Dade, Broward, Palm Beach counties)",
    },
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    variableMeasured: COST_GROUPS.map((g) => ({
      "@type": "PropertyValue",
      name: `${g.label} — typical repair cost`,
      description: `Typical lifespan ${g.lifespan}. Repair symptoms and cost ranges: ${g.rows
        .map((r) => `${r.symptom} (${r.cost})`)
        .join("; ")}.`,
    })),
  }

  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Repair Cost Guide" },
        ]}
      />
      <PageHero
        eyebrow="Resource · Cost Guide"
        title="South Florida Commercial Kitchen Equipment Repair Cost Guide"
        description="What repairs actually cost across Miami-Dade, Broward and Palm Beach — by equipment type, with typical lifespans and a repair-vs-replace calculator. Every range is aggregated from our own service tickets, not catalog guesses."
      >
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="outline"
            className="border-primary/30 bg-primary/5 text-primary"
          >
            {REPAIRS_COMPLETED_DISPLAY} services since 2015
          </Badge>
          <Badge variant="outline">12 equipment categories</Badge>
          <Badge variant="outline">EPA 608 · Licensed &amp; Insured</Badge>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton href="#calculator">
            Try the repair-or-replace calculator{" "}
            <ArrowRight className="size-4" />
          </LinkButton>
          <AnchorButton href={site.phoneHref} variant="outline">
            Call {site.phone}
          </AnchorButton>
        </div>
      </PageHero>

      {/* Citable stat blocks — self-contained sentences for AI Overviews. */}
      <section className="border-b border-border/60 bg-background py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
            <Quote className="size-6 text-primary" />
            The numbers, in one place
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
            Key facts an owner, editor or AI assistant can quote directly —
            each figure traces to our published South Florida service data.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {CITABLE_STATS.map((s) => (
              <Card key={s.stat} className="gap-2 p-5">
                <p className="text-sm font-medium leading-relaxed text-foreground">
                  {s.stat}
                </p>
                <p className="text-xs text-muted-foreground">{s.source}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive calculator */}
      <section
        id="calculator"
        className="scroll-mt-24 border-b border-border/60 bg-accent/30 py-16"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
            <Scale className="size-6 text-primary" />
            Repair or replace? Run your numbers
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Enter the equipment type, its age, and the repair quote you were
            handed. The calculator applies the 50% rule against that
            category&apos;s typical lifespan and gives you a straight answer —
            the same math our techs use on every call.
          </p>
          <div className="mt-8">
            <RepairReplaceCalculator />
          </div>
        </div>
      </section>

      {/* Repair-vs-replace framework */}
      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            The repair-or-replace framework
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Card className="gap-2 p-5">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Scale className="size-5 text-primary" /> The 50% rule
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                If a single repair costs more than about half the price of a
                comparable new unit, replacement starts to make sense —
                especially on an older machine likely to need the next repair
                soon.
              </p>
            </Card>
            <Card className="gap-2 p-5">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <AlertTriangle className="size-5 text-primary" /> Age vs. range
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                A failure on a unit near the end of its lifespan range is a
                different decision than the same failure at the midpoint. Early
                failures are usually worth repairing; end-of-range failures
                often are not.
              </p>
            </Card>
            <Card className="gap-2 p-5">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Wrench className="size-5 text-primary" /> Parts, energy &amp;
                downtime
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Scarce or back-ordered parts, a 12-year-old unit burning extra
                energy, and a machine that keeps failing mid-service all tip the
                math toward replacement. Reliability has a dollar value.
              </p>
            </Card>
          </div>
          <p className="mt-6 max-w-3xl text-sm text-muted-foreground">
            For a worked example, see our deep-dive on{" "}
            <Link
              href="/compare/walk-in-cooler-repair-or-replace"
              className="font-medium text-primary hover:underline"
            >
              whether to repair or replace a walk-in cooler
            </Link>{" "}
            and the field guide on{" "}
            <Link
              href="/blog/how-long-commercial-equipment-lasts"
              className="font-medium text-primary hover:underline"
            >
              how long commercial equipment lasts
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Cost tables by equipment type */}
      <section className="border-b border-border/60 bg-accent/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Repair cost ranges by equipment type
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
            Real ranges from our South Florida service tickets — parts plus
            labor, before any maintenance-contract pricing. The {site.serviceCall}{" "}
            commercial service call covers the diagnosis and is free when you
            approve the repair.
          </p>
          <p className="mt-4 text-xs text-muted-foreground md:hidden" aria-hidden>
            Swipe each table to see costs and dispatch times →
          </p>

          <div className="mt-8 space-y-12">
            {COST_GROUPS.map((g) => (
              <div key={g.key} id={g.key} className="scroll-mt-24">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {g.label}
                  </h3>
                  <span className="text-xs font-medium text-muted-foreground">
                    Typical life: {g.lifespan}
                  </span>
                </div>
                <p className="mt-1.5 max-w-3xl text-sm text-muted-foreground">
                  {g.blurb}
                </p>
                <div
                  tabIndex={0}
                  role="region"
                  aria-label={`${g.label} symptoms and typical repair costs`}
                  className="mt-4 overflow-x-auto rounded-xl border border-border bg-background focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  <table className="w-full min-w-[640px] border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-border bg-accent/40 text-left">
                        <th scope="col" className="px-4 py-3 font-semibold">
                          What you&apos;re seeing
                        </th>
                        <th scope="col" className="px-4 py-3 font-semibold">
                          Most likely cause / part
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
                      {g.rows.map((row) => (
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
                <div className="mt-3">
                  <Link
                    href={g.serviceLink.href}
                    className="inline-flex items-center text-sm font-medium text-primary underline-offset-2 hover:underline"
                  >
                    {g.serviceLink.label} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology / E-E-A-T */}
      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
            <BadgeCheck className="size-6 text-primary" />
            Methodology &amp; who built this
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              Berne Commercial Repair has completed{" "}
              {REPAIRS_COMPLETED_DISPLAY} commercial equipment services across
              Miami-Dade, Broward and Palm Beach since 2015, at a 4.79-star
              average from 1,373 reviews. Our 18 W-2 technicians are EPA Section
              608 certified and licensed and insured. The ranges on this page
              are aggregated from our own South Florida service tickets and
              published equipment guides — parts plus labor, before any
              maintenance-contract pricing.
            </p>
            <p>
              These are typical ranges, not quotes. The actual figure depends on
              brand, part availability, access and the specific failure. Cells
              marked &quot;Assessment&quot; are end-of-life decisions where the
              honest answer is a repair-vs-replace conversation, not a flat
              price. The single approximate value is the installed replacement
              cost used by the calculator to apply the 50% rule; it is a
              representative South Florida installed average, clearly labeled as
              an estimate, and not a fixed price.
            </p>
            <p>
              Three local factors compress every lifespan here: heat (longer,
              hotter compressor cycles), salt air (coastal corrosion of coils,
              fan motors and cabinets), and hard water (scale on ice-machine
              evaporators, combi steam generators, dishwasher booster heaters
              and espresso boilers). Water treatment, condenser cleaning and
              scheduled descaling are the biggest levers for reaching the top of
              each range.
            </p>
            <p>
              See our{" "}
              <Link
                href="/credentials"
                className="font-medium text-primary hover:underline"
              >
                license &amp; insurance documentation
              </Link>
              , the{" "}
              <Link
                href="/services"
                className="font-medium text-primary hover:underline"
              >
                full service list
              </Link>
              , and the{" "}
              <Link
                href="/industries"
                className="font-medium text-primary hover:underline"
              >
                industries we serve
              </Link>
              .
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <LinkButton href="/request-dispatch">
              Request service <ArrowRight className="size-4" />
            </LinkButton>
            <LinkButton href="/become-a-client" variant="outline">
              Become a commercial client
            </LinkButton>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={COST_GUIDE_FAQS}
        title="Commercial kitchen repair cost FAQ"
        description="The questions owners and operators ask us most."
      />

      <JsonLd data={articleSchema} />
      <JsonLd data={datasetSchema} />
      <JsonLd data={faqSchema(COST_GUIDE_FAQS)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Resources", url: `${site.url}${PATH}` },
          {
            name: "Commercial Kitchen Repair Cost Guide",
            url: `${site.url}${PATH}`,
          },
        ])}
      />
    </PageShell>
  )
}

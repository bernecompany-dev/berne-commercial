import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Quote, ArrowUpRight } from "lucide-react"
import { PageHero, PageShell } from "@/components/page-shell"
import { TrustedBy } from "@/components/trusted-by"
import { WhyUs } from "@/components/why-us"
import { TeamGrid } from "@/components/team-grid"
import { CredentialsSection } from "@/components/credentials-section"
import { INDUSTRY_PROFILES } from "@/lib/data/industry-profiles"
import { metaFor, personJsonLd } from "@/lib/seo"
import { site } from "@/lib/site"
import { team } from "@/lib/data/team"
import { JsonLd } from "@/components/json-ld"

export const metadata: Metadata = metaFor({
  title: "About — Commercial Service Organization",
  description:
    "Berne Commercial Repair is a South Florida commercial service organization focused on refrigeration, restaurant equipment and enterprise dispatch.",
  path: "/about",
})

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        title="A commercial service organization for South Florida"
        description={`${site.name} provides enterprise-level commercial repair across Miami-Dade, Broward and Palm Beach — built to support restaurants, production facilities, retail, and property-managed buildings.`}
      />

      <section className="border-b border-border/60 bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <Image
                src={site.founder.photo}
                alt={site.founder.name}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="text-xs font-medium uppercase tracking-wider text-primary">
              Founder
            </div>
            <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              I&apos;m {site.founder.name}, an engineer by training — and I
              built Berne Commercial to run on engineering, not guesswork.
            </h2>
            <div className="mt-6 space-y-4 text-base text-muted-foreground">
              <p className="flex items-start gap-3">
                <Quote className="mt-1 size-5 shrink-0 text-primary" />
                <span>
                  Most service companies in Florida were built to serve
                  homeowners. Restaurants, supermarkets, hotels and production
                  facilities have a completely different reality — every hour
                  a walk-in is down, inventory is at risk, food cost goes up,
                  and operations stall. We built our dispatch, our techs and
                  our paperwork around that reality.
                </span>
              </p>
              <p>
                Every person on the team is an engineer-trained technician.
                That&apos;s why we take on the work other shops walk away from
                — control-board level diagnostics, complex refrigeration
                loops, full walk-in rebuilds, commercial laundry systems with
                custom electrical. We don&apos;t sell easy jobs.
                We solve hard ones.
              </p>
              <p>
                Berne Commercial is backed by{" "}
                <a
                  href="https://bernerepair.com/"
                  rel="noopener"
                  className="text-foreground underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
                >
                  Berne Appliance Repair
                </a>
                {" "}— 11 years in business, 18 technicians, 29,000+ services
                completed across South Florida, and a 4.79★ aggregate rating
                across 871 reviews. Today we run commercial dispatch across
                Miami-Dade, Broward and Palm Beach for restaurants, chains,
                production facilities, hotels, retail and property-managed
                buildings. Residential customers are served by our consumer
                arm{" "}
                <a
                  href="https://bernerepair.com/"
                  rel="noopener"
                  className="text-foreground underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
                >
                  bernerepair.com
                </a>
                {" "}and the premium Sub-Zero / Wolf / Viking / Miele service{" "}
                <a
                  href="https://www.berne-repair.com/"
                  rel="noopener"
                  className="text-foreground underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
                >
                  berne-repair.com
                </a>
                . Licensed, insured, COI-ready, and on call for same-day
                emergency service.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6 text-sm sm:grid-cols-4">
              <div>
                <div className="text-2xl font-semibold tracking-tight">18</div>
                <div className="text-xs text-muted-foreground">
                  Technicians on the road
                </div>
              </div>
              <div>
                <div className="text-2xl font-semibold tracking-tight">11y</div>
                <div className="text-xs text-muted-foreground">
                  Berne family in business
                </div>
              </div>
              <div>
                <div className="text-2xl font-semibold tracking-tight">29k+</div>
                <div className="text-xs text-muted-foreground">
                  Services completed
                </div>
              </div>
              <div>
                <div className="text-2xl font-semibold tracking-tight">4.79★</div>
                <div className="text-xs text-muted-foreground">
                  871 customer reviews
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="text-sm font-semibold">{site.founder.name}</div>
              <div className="text-sm text-muted-foreground">
                {site.founder.title}, {site.name}
              </div>
            </div>
          </div>
        </div>
      </section>

      <TeamGrid />
      <CredentialsSection />

      <section className="border-b border-border/60 bg-accent/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="text-xs font-medium uppercase tracking-wider text-primary">
                Industries
              </div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                Verticals we run dispatch for
              </h2>
              <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
                Ten core verticals, each with a dedicated service page and
                field-tested equipment knowledge.
              </p>
            </div>
            <Link
              href="/industries"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              All industries <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {INDUSTRY_PROFILES.map((p) => (
              <Link
                key={p.slug}
                href={`/industries/${p.slug}`}
                className="inline-flex items-center rounded-full border border-border/60 bg-card px-3 py-1.5 text-xs font-medium text-foreground transition hover:border-primary/40 hover:text-primary"
              >
                {p.industryTitle}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WhyUs />
      <TrustedBy />

      {/* Person JSON-LD for every member of the field team — E-E-A-T. */}
      <JsonLd data={team.map((t) => personJsonLd(t))} />
    </PageShell>
  )
}

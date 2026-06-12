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
  title: "About — Berne Commercial Repair · South Florida Since 2015",
  description:
    "Founded 2015 by Eugene Bernitsky. 18 W-2 technicians, 29,000+ services, 4.79★ from 871 reviews. COI-ready commercial dispatch across South Florida.",
  path: "/about",
})

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        title="A commercial service organization built for South Florida operations"
        description={`Founded 2015. ${site.name} runs commercial dispatch across Miami-Dade, Broward, Palm Beach, and the Gulf Coast for restaurants, hotels, supermarkets, production facilities, and property-managed portfolios — engineered around the operational truth that every hour of downtime is dollars.`}
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
              I&apos;m {site.founder.name}. We built Berne Commercial to run
              on engineering and SLAs, not improvisation.
            </h2>
            <div className="mt-6 space-y-4 text-base text-muted-foreground">
              <p className="flex items-start gap-3">
                <Quote className="mt-1 size-5 shrink-0 text-primary" />
                <span>
                  I started the Berne family of operations in 2015 because
                  South Florida&apos;s commercial kitchens, supermarkets,
                  hotels and production lines were getting the residential
                  treatment from service vendors — no SLA, no COI, no
                  dispatch reliability, and a $400 invoice for a $40
                  diagnostic. Every hour a walk-in is down, inventory is at
                  risk, food cost climbs, and operations stall. We built
                  Berne Commercial&apos;s dispatch, technician roster, parts
                  inventory, and paperwork around that reality — not around
                  the homeowner one.
                </span>
              </p>
              <p>
                Eleven years in, the operation is 18 W-2 technicians on the
                road, 29,000+ services completed across the Berne family,
                and a 4.79★ aggregate rating across 871 verified customer
                reviews. The technicians are engineer-trained — which is
                why we take on the work other shops walk away from:
                control-board diagnostics, complex refrigeration loops,
                full walk-in rebuilds, glycol beer systems, commercial
                laundry with custom electrical, NSF inspector recoveries.
                We do not sell easy jobs. We solve hard ones — under SLA,
                under COI, under NDA when the operator requires it.
              </p>
              <p>
                How we work with operators: a single dispatcher contact for
                multi-unit portfolios, mobile-uploaded invoices and
                photos-on-completion for the AP department, a 90-day
                workmanship warranty on the actual paperwork, and a
                same-day commercial standard for emergency calls inside
                Miami-Dade, Broward, and Palm Beach. Diagnostic on a
                commercial site is a flat {site.serviceCall}, free if
                you proceed with the repair. We carry OEM parts for the verticals
                we run dispatch for — Hobart, Vulcan, True, Manitowoc,
                Hoshizaki, Rational, Garland, Traulsen, Beverage-Air,
                Frymaster on the kitchen side; Speed Queen, Continental,
                Wascomat on commercial laundry.
              </p>
              <p>
                Berne Commercial is one of three coordinated brands inside
                the Berne family. Residential customers are served by our
                consumer arm{" "}
                <a
                  href="https://bernerepair.com/"
                  rel="noopener"
                  className="text-foreground underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
                >
                  bernerepair.com
                </a>
                . High-end residential — Sub-Zero columns, Wolf
                dual-fuel, Miele built-ins for Bal Harbour / Fisher
                Island / Sunny Isles households — is dispatched through{" "}
                <a
                  href="https://www.berne-repair.com/"
                  rel="noopener"
                  className="text-foreground underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
                >
                  berne-repair.com
                </a>
                . The same training standard, the same W-2 employee model,
                and the same accountability flow across all three. Berne
                Commercial dispatches from 1001 N Federal Hwy #230 in
                Hallandale Beach (HQ) and 131 S Federal Hwy #533 in Boca
                Raton. Three commercial lines: (754) 345-4515, (954)
                569-8550, and (561) 858-9919. Licensed, insured, COI-ready.
              </p>
              <p>
                Berne is a member of{" "}
                <a
                  href="https://msaworld.com/"
                  rel="noopener external"
                  target="_blank"
                  className="text-foreground underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
                >
                  MSA World
                </a>
                {" "}(Marcone Servicers Association), the leading industry
                association for appliance service contractors. Our
                technicians complete continuous training on emerging
                refrigeration and commercial-equipment technology through
                MSA World coursework and OEM (Sub-Zero, Wolf, Miele,
                Hobart, Manitowoc, Hoshizaki, Rational) certification
                updates — so the truck arriving at your loading dock is
                equipped to service the equipment you actually run, not a
                five-year-old spec sheet.
              </p>
              <p>
                Where we are going: the commercial footprint widens through
                2026 and 2027 — six to eight technicians added to the fleet
                over the next 18 months, expanded coverage on the Gulf
                Coast (Tampa, Sarasota, Naples), and a dedicated
                multi-location dispatcher for restaurant groups and
                property-management portfolios. The premise is unchanged:
                South Florida hospitality and operations should not have
                to discover the vendor-reliability gap on a Friday night
                with the walk-in at 52°F.
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
              <Link
                href="/team/eugene-bernitsky"
                className="mt-2 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                Read the founder profile →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TeamGrid />
      <section className="border-b border-border/60 bg-background pb-12 pt-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/team"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            Full bios of every technician <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>
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

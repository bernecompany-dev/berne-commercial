import type { Metadata } from "next"
import Image from "next/image"
import { Quote } from "lucide-react"
import { PageHero, PageShell } from "@/components/page-shell"
import { TrustedBy } from "@/components/trusted-by"
import { WhyUs } from "@/components/why-us"
import { TeamGrid } from "@/components/team-grid"
import { CredentialsSection } from "@/components/credentials-section"
import { metaFor } from "@/lib/seo"
import { site } from "@/lib/site"

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
                Berne Commercial is four years old as a company, but the
                trucks carry up to 30 years of hands-on experience. Today we
                run commercial dispatch across Miami-Dade, Broward and Palm
                Beach for restaurants, chains, production facilities, hotels,
                retail and property-managed buildings. Licensed, insured,
                COI-ready, and on call for same-day emergency service.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6 text-sm sm:grid-cols-4">
              <div>
                <div className="text-2xl font-semibold tracking-tight">17+</div>
                <div className="text-xs text-muted-foreground">
                  Technicians on the road
                </div>
              </div>
              <div>
                <div className="text-2xl font-semibold tracking-tight">30y</div>
                <div className="text-xs text-muted-foreground">
                  Senior tech experience
                </div>
              </div>
              <div>
                <div className="text-2xl font-semibold tracking-tight">3</div>
                <div className="text-xs text-muted-foreground">
                  South Florida counties
                </div>
              </div>
              <div>
                <div className="text-2xl font-semibold tracking-tight">24/7</div>
                <div className="text-xs text-muted-foreground">
                  Emergency dispatch
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
      <WhyUs />
      <TrustedBy />
    </PageShell>
  )
}

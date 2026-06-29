import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  AlertTriangle,
  Droplets,
  Flame,
  Timer,
  Wrench,
} from "lucide-react"

import { PageHero, PageShell } from "@/components/page-shell"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { AnchorButton, LinkButton } from "@/components/link-button"
import { DispatchForm } from "@/components/dispatch-form"
import { FAQSection } from "@/components/faq-section"
import { JsonLd } from "@/components/json-ld"
import { faqSchema, metaFor, serviceSchema, breadcrumbSchema } from "@/lib/seo"
import { site } from "@/lib/site"
import { REPAIRS_COMPLETED_DISPLAY } from "@/lib/data/company"
import { getBrandService } from "@/lib/data/brand-services"
import { getBrandComparison } from "@/lib/data/brand-comparisons"
import { citiesByCounty } from "@/lib/data/cities"

/**
 * Combi-oven repair PILLAR HUB — combi-oven money cluster (2026-06-15).
 *
 * GSC 2026-06-15 showed the highest-value ("my oven is broken, send a tech")
 * intent landing on the wrong page: "commercial oven repair" pos 3.0 and
 * "commercial kitchen oven repair" pos 3.0 → /boynton-beach (a city page),
 * "commercial oven repair near me" pos 9.0 → /west-palm-beach. There was no
 * dedicated combi/commercial-oven REPAIR hub to canonicalize that intent.
 * This page is that hub, and it links down to the four combi brand-repair
 * spokes, the combi /compare guides, and the error-code troubleshooting posts.
 *
 * Static route deliberately — NOT a services.ts entry (that would spawn ~70
 * phantom /{city}/combi-oven-repair combos; same decision as medical-lab and
 * the brand-service pages). EN-only: metaFor esAlternate=false. Sitemap entry
 * is added by hand in app/sitemap.ts (mirrors the medical-lab precedent).
 */

const PATH = "/services/combi-oven-repair"

export const metadata: Metadata = metaFor({
  title: "Commercial Combi Oven Repair Miami — 24/7",
  description:
    "Combi & commercial oven repair near you across South Florida — Rational, Convotherm, Unox, Alto-Shaam. Steam, boards, doors fixed same-day. 4.79★. $89 call.",
  path: PATH,
  esAlternate: false,
})

const COMBI_SPOKE_SLUGS = [
  "rational-combi-oven-repair",
  "convotherm-combi-oven-repair",
  "unox-combi-oven-repair",
  "alto-shaam-combi-oven-repair",
]

const COMBI_COMPARE_SLUGS = [
  "rational-vs-combi",
  "rational-vs-unox",
  "rational-vs-convotherm",
  "rational-vs-alto-shaam",
  "unox-vs-convotherm",
  "alto-shaam-vs-convotherm",
]

const ERROR_GUIDES = [
  {
    href: "/blog/rational-icombi-error-codes-guide",
    title: "Rational iCombi error codes — what they mean",
    teaser:
      "Service messages, descale prompts and Service codes on the iCombi Pro and SelfCookingCenter — which an operator can clear and which mean stop-and-call.",
  },
  {
    href: "/blog/combi-oven-not-steaming-troubleshooting",
    title: "Combi oven not steaming? Common problems & fixes",
    teaser:
      "Why a combi loses steam — generator scale, boilerless injection clogs, water-inlet faults, door seals — and what each repair runs in South Florida.",
  },
]

const SYMPTOMS = [
  {
    symptom: "Steam side weak or dead, steam programs not cooking",
    cause:
      "Generator scale (boiler models) or clogged steam-injection nozzles (boilerless)",
    cost: "$200–$1,200",
    response: "Same-day",
  },
  {
    symptom: "Descale / Care / clean prompt that won't clear",
    cause: "Advanced scale + no water treatment, or a clean-system pump fault",
    cost: "$280–$700",
    response: "Same-day",
  },
  {
    symptom: "Auto-clean (CareControl / ConvoClean / DET.Clean) fails",
    cause: "Clean-system pump or supply-tubing fault",
    cost: "$220–$480",
    response: "Same-day",
  },
  {
    symptom: "Steam leaking from the door, cook times creeping up",
    cause: "Door gasket compression set or latch/hinge wear",
    cost: "$160–$340",
    response: "Same-day",
  },
  {
    symptom: "Core probe reading wrong or faulted",
    cause: "Damaged probe or corroded connector",
    cost: "$160–$300",
    response: "Same-day",
  },
  {
    symptom: "Uneven cooking front-to-back",
    cause: "Convection fan motor or reversing-logic fault",
    cost: "$220–$580",
    response: "Same-day",
  },
  {
    symptom: "Water pooling under the unit",
    cause: "Clogged drain, drain valve or drain pump",
    cost: "$150–$420",
    response: "Same-day",
  },
  {
    symptom: "Steam generator dead on a 10+ year boiler combi",
    cause: "End-of-life steam system — repair-vs-replace math",
    cost: "$3,000–$5,000",
    response: "24–48h",
  },
]

const PROBLEMS = [
  {
    icon: Droplets,
    title: "Scale is the #1 combi killer here",
    detail:
      "South Florida's hard water furs steam generators (Rational, boiler Convotherm) and clogs the spray-injection nozzles on boilerless ovens (Unox, Alto-Shaam, boilerless Convotherm). Most 'my combi died' calls are a scale problem caught too late — water treatment plus a descale schedule is the real fix.",
  },
  {
    icon: Wrench,
    title: "Clean systems fail on their own schedule",
    detail:
      "CareControl, ConvoClean and DET.Clean all depend on chemical pumps and supply tubing that air-lock, run dry or clog. The wash cycle quits, the cavity streaks, and inspection risk climbs — usually an economical same-day pump-and-tubing repair.",
  },
  {
    icon: Flame,
    title: "Doors, probes, fans and boards",
    detail:
      "Gaskets take a compression set under nightly auto-clean, core probes get bent, convection fan motors die early in coastal salt air, and touchscreens drift. These are the high-frequency wear parts our trucks carry for first-visit closure.",
  },
]

const FAQS = [
  {
    q: "Do you offer commercial combi oven repair near me, same-day?",
    a: `Yes. Berne Commercial Repair dispatches combi and commercial oven repair same-day across Miami-Dade, Broward and Palm Beach, seven days a week, with a down oven in a hotel, club or production kitchen treated as an emergency. The commercial service call is ${site.serviceCall} — free when you approve the repair, charged only if you decline.`,
  },
  {
    q: "Which combi oven brands do you repair?",
    a: "Rational (iCombi Pro, iCombi Classic, SelfCookingCenter, CombiMaster), Convotherm (maxx, C4, OES/OGS), Unox (CHEFTOP and BAKERTOP MIND.Maps), and Alto-Shaam Combitherm — plus convection, conveyor and deck ovens from Vulcan, Blodgett, Middleby, Garland and Southbend on our commercial oven hub.",
  },
  {
    q: "My combi oven isn't making steam — what's wrong?",
    a: "It depends on the type. Boiler combis (most Rationals, boiler Convotherms) lose steam to generator scale or a failed element. Boilerless combis (Unox, Alto-Shaam, boilerless Convotherm) lose steam to clogged injection nozzles or a restricted water path. Both can also be a water-inlet or sensor fault. We diagnose the steam system on the first visit — see our combi-not-steaming troubleshooting guide.",
  },
  {
    q: "How much does combi oven repair cost in South Florida?",
    a: `Most combi tickets land $160-$700 — door gaskets, clean-system pumps, probes, drain service, and steam-injection or boiler descaling. Steam-side element or generator work runs higher, and a failed steam generator on an aging boiler combi ($3,000-$5,000) becomes a repair-vs-replace conversation. The ${site.serviceCall} service call covers the diagnosis and is free with an approved repair.`,
  },
  {
    q: "Are you an authorized combi oven service agent?",
    a: "No — Berne is an independent commercial service company, not affiliated with Rational, Convotherm, Unox, Alto-Shaam or any combi manufacturer. In-warranty ovens should use the factory network first (it's free for you). Out of warranty, independence works for you: same-day dispatch, no warranty-queue wait, parts on the truck, and honest repair-vs-replace numbers.",
  },
  {
    q: "How often should a combi oven be descaled here?",
    a: "On untreated South Florida water, every 3-6 months — and the oven will demand it via its descale/Care prompt. Ignoring that prompt is how steam generators and injection systems die early. With water treatment sized to your supply, the interval stretches and the oven lasts years longer. Our PM contracts bundle descaling, clean-system, door and probe service with documentation.",
  },
]

export default function CombiOvenRepairHub() {
  const spokes = COMBI_SPOKE_SLUGS.map((s) => getBrandService(s)).filter(
    (b): b is NonNullable<ReturnType<typeof getBrandService>> => Boolean(b),
  )
  const comparisons = COMBI_COMPARE_SLUGS.map((s) => getBrandComparison(s)).filter(
    (c): c is NonNullable<ReturnType<typeof getBrandComparison>> => Boolean(c),
  )

  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Combi Oven Repair" },
        ]}
      />
      <PageHero
        eyebrow="Service"
        title="Commercial Combi Oven Repair in South Florida"
        description="Same-day combi and commercial oven repair across Miami-Dade, Broward and Palm Beach — Rational, Convotherm, Unox and Alto-Shaam. Steam generators, clean systems, doors, probes and boards, fixed by techs who read the service messages. 24/7 emergency dispatch."
      >
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="outline"
            className="border-primary/30 bg-primary/5 text-primary"
          >
            Commercial service call: {site.serviceCall} — free with approved
            repair
          </Badge>
          <Badge variant="outline">Independent service — no dealer queue</Badge>
          <Badge variant="outline">EPA Section 608 certified</Badge>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton href="/request-dispatch?service=combi-oven-repair">
            Request Service <ArrowRight className="size-4" />
          </LinkButton>
          <AnchorButton href={site.phoneHref} variant="outline">
            Call {site.phone}
          </AnchorButton>
        </div>
      </PageHero>

      {/* Overview + response card */}
      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold tracking-tight">
                When a combi goes down, the line stops
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  A combi oven is usually the most flexible — and most
                  expensive — cooking platform in the kitchen, doing the work of
                  three pieces of equipment across steam, convection and
                  combination modes. When it faults mid-service, a banquet, a
                  hotel breakfast or a production run stalls with it. That is why
                  combi calls dispatch same-day in our queue across South
                  Florida, with hotel, club and high-volume production kitchens
                  prioritized as emergencies.
                </p>
                <p>
                  Berne Commercial Repair services every common combi platform —
                  Rational iCombi Pro and SelfCookingCenter, Convotherm maxx and
                  C4, Unox CHEFTOP and BAKERTOP, and Alto-Shaam Combitherm — plus
                  the convection, conveyor and deck ovens covered on our{" "}
                  <Link
                    href="/services/commercial-oven-repair"
                    className="font-medium text-primary hover:underline"
                  >
                    commercial oven repair
                  </Link>{" "}
                  hub. Our 18 W-2 technicians read the service messages and
                  ServiceDiagnosis routines the way the factory manuals intend,
                  so a vague &quot;it stopped working&quot; becomes a targeted,
                  first-visit repair instead of parts roulette.
                </p>
                <p>
                  We are an independent commercial service company — not a
                  dealership and not an authorized agent of any combi brand. For
                  in-warranty ovens, use the manufacturer&apos;s network first;
                  it is free for you. For everything out of warranty, we are
                  typically faster, carry the common wear parts on the truck, and
                  give you honest repair-vs-replace math instead of a sales
                  pitch.
                </p>
              </div>
            </div>
            <Card className="h-fit gap-3 p-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                <Timer className="size-4" /> Dispatch expectations
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">
                    Down oven:
                  </span>{" "}
                  same-day across Miami-Dade, Broward and Palm Beach — seven days
                  a week.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    First-visit closure:
                  </span>{" "}
                  common combi wear parts ride on the truck.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Track record:
                  </span>{" "}
                  18 W-2 technicians, {REPAIRS_COMPLETED_DISPLAY} services since
                  2015, 4.79★ from 871 reviews.
                </li>
              </ul>
              <LinkButton
                href="/request-dispatch?service=combi-oven-repair"
                className="mt-3"
              >
                Request Service
              </LinkButton>
            </Card>
          </div>

          {/* Problem framing */}
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {PROBLEMS.map((p) => (
              <Card key={p.title} className="gap-2 p-5">
                <div className="flex items-start gap-2">
                  <p.icon className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <div className="text-sm font-semibold">{p.title}</div>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {p.detail}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Symptom → cause → cost table */}
      <section className="border-b border-border/60 bg-accent/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
            <AlertTriangle className="size-6 text-primary" />
            Combi oven symptoms, likely causes &amp; typical repair costs
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
            Real numbers from our South Florida service tickets — parts plus
            labor, before any contract pricing. The {site.serviceCall} commercial
            service call covers the diagnosis and is free when you approve the
            repair — the fee applies only if you decline. For costs across every
            equipment type plus a repair-vs-replace calculator, see our{" "}
            <Link
              href="/resources/commercial-kitchen-repair-cost-guide"
              className="font-medium text-primary hover:underline"
            >
              commercial kitchen repair cost guide
            </Link>
            .
          </p>
          <p className="mt-4 text-xs text-muted-foreground md:hidden" aria-hidden>
            Swipe to see costs and dispatch times →
          </p>
          <div
            tabIndex={0}
            role="region"
            aria-label="Combi oven symptoms and typical repair costs"
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
                {SYMPTOMS.map((row) => (
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

      {/* Brand-repair spokes */}
      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Combi oven repair by brand
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
            Know what you run? The brand pages cover that platform&apos;s
            service messages, real failure patterns, and South Florida repair
            costs in detail.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {spokes.map((b) => (
              <Link
                key={b.slug}
                href={`/services/${b.slug}`}
                className="group flex flex-col gap-1.5 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <span className="text-base font-semibold text-foreground group-hover:text-primary">
                  {b.title} →
                </span>
                <span className="text-xs leading-relaxed text-muted-foreground">
                  {b.metaDescription}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Error-code / troubleshooting guides */}
      <section className="border-b border-border/60 bg-accent/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Combi oven troubleshooting &amp; error-code guides
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
            Field guides from our techs — decode the service messages and steam
            faults before you call, and know what the repair should cost when
            you do.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {ERROR_GUIDES.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="group flex flex-col gap-1.5 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <span className="text-base font-semibold text-foreground group-hover:text-primary">
                  {g.title} →
                </span>
                <span className="text-xs leading-relaxed text-muted-foreground">
                  {g.teaser}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison guides */}
      {comparisons.length ? (
        <section className="border-b border-border/60 bg-background py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Choosing or replacing a combi? Compare the platforms
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
              Our techs service these ovens every week — here is how they stack
              up on real field economics, not catalog copy.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {comparisons.map((c) => (
                <Link
                  key={c.slug}
                  href={`/compare/${c.slug}`}
                  className="group flex flex-col gap-1.5 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
                >
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary">
                    {c.h1.replace(/ — .*/, "")}
                  </span>
                  <span className="line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                    {c.teaser}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Dispatch form */}
      <section
        id="dispatch"
        className="border-b border-border/60 bg-accent/30 py-16"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Request combi oven service
          </h2>
          <p className="mt-2 text-muted-foreground">
            A dispatcher will confirm the service window shortly. Down ovens in
            production and banquet kitchens are prioritized.
          </p>
          <div className="mt-8">
            <DispatchForm defaults={{ service: "combi-oven-repair" }} />
          </div>
        </div>
      </section>

      <FAQSection
        faqs={FAQS}
        title="Combi oven repair FAQ"
        description="From dispatch and the field team."
      />
      <JsonLd data={faqSchema(FAQS)} />

      {/* City crawl paths — link to the commercial-oven combo pages that
          actually exist, so this hub passes link equity to the city layer
          where the ranking ("commercial oven repair near me") lands. */}
      <section className="bg-background py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Combi &amp; commercial oven repair by city
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Same-day commercial oven dispatch across Miami-Dade, Broward and Palm
            Beach counties.
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
                    href={`/${city.slug}/commercial-oven-repair`}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground hover:bg-accent hover:text-foreground"
                  >
                    Commercial Ovens in {city.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <JsonLd
        data={serviceSchema({
          name: "Commercial Combi Oven Repair",
          description:
            "Same-day commercial combi oven repair across South Florida — Rational, Convotherm, Unox and Alto-Shaam. Steam generators, clean systems, doors, probes and boards.",
          url: `${site.url}${PATH}`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Services", url: `${site.url}/services` },
          { name: "Combi Oven Repair", url: `${site.url}${PATH}` },
        ])}
      />
    </PageShell>
  )
}

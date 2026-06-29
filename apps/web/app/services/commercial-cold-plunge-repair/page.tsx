import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  AlertTriangle,
  Snowflake,
  Droplets,
  Wrench,
  Timer,
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

/**
 * Commercial cold plunge repair — wellness/recovery money cluster (2026-06-29).
 *
 * Gyms, recovery studios, spas and athletic facilities across South Florida
 * are installing commercial cold plunges faster than the local service market
 * can support them. The failure mode that brings the call is almost always the
 * water chiller (a sealed refrigeration system) struggling to hold 38–50°F in
 * a 90°F equipment room. This is refrigeration work first and pool work second,
 * which is exactly our lane.
 *
 * Static route deliberately — NOT a services.ts entry (that would spawn ~70
 * phantom /{city}/commercial-cold-plunge-repair combos). EN-only: metaFor
 * esAlternate=false. Sitemap entry is added by hand in app/sitemap.ts.
 */

const PATH = "/services/commercial-cold-plunge-repair"

export const metadata: Metadata = metaFor({
  title: "Commercial Cold Plunge Repair Miami & South Florida",
  description:
    "Cold plunge & ice-bath chiller repair for gyms, spas & recovery studios — Plunge, Renu Therapy, BlueCube, Penguin. Holds 38–50°F. 4.79★. $89 call.",
  path: PATH,
  esAlternate: false,
})

const SYMPTOMS = [
  {
    symptom: "Water creeping up to 55–60°F, won't reach set point",
    cause:
      "Low refrigerant charge, dirty condenser, or an undersized chiller fighting a hot equipment room",
    cost: "$240–$1,400",
    response: "Same-day",
  },
  {
    symptom: "Chiller short-cycles or trips its breaker",
    cause:
      "Failing start components, high head pressure from a fouled condenser, or a weak compressor",
    cost: "$280–$1,600",
    response: "Same-day",
  },
  {
    symptom: "Plunge holds temp but flow is weak / surface not skimming",
    cause: "Circulation pump wear, clogged cartridge filter, or air-locked line",
    cost: "$180–$520",
    response: "Same-day",
  },
  {
    symptom: "Water cloudy, biofilm, or sanitizer not holding",
    cause: "UV lamp end-of-life, ozone generator fault, or chemistry out of balance",
    cost: "$160–$480",
    response: "Same-day",
  },
  {
    symptom: "Displayed temp doesn't match a thermometer in the tub",
    cause: "Drifted temp probe or controller needing recalibration",
    cost: "$150–$320",
    response: "Same-day",
  },
  {
    symptom: "Ice forming on the evaporator / chiller icing over",
    cause: "Low flow across the heat exchanger, low charge, or a stuck control",
    cost: "$240–$700",
    response: "Same-day",
  },
  {
    symptom: "Refrigerant leak — green corrosion or oil at fittings",
    cause: "Titanium coil or braze-joint corrosion accelerated by salt air",
    cost: "$300–$1,800",
    response: "24–48h",
  },
  {
    symptom: "GFCI keeps tripping or unit dead at the panel",
    cause: "Moisture intrusion, failed pump seal, or a chafed harness",
    cost: "$160–$520",
    response: "Same-day",
  },
]

const PROBLEMS = [
  {
    icon: Snowflake,
    title: "Holding low temp in a hot Florida room is the hard part",
    detail:
      "A commercial plunge that's busy all day asks its chiller to pull heat continuously while the equipment closet sits at 85–95°F. Push a residential-spec chiller into that duty and it runs flat-out, head pressure climbs, and the water drifts above set point. Most 'it won't get cold' calls are a charge, condenser-airflow or sizing problem — not a dead compressor.",
  },
  {
    icon: Droplets,
    title: "Salt air eats titanium coils and fittings",
    detail:
      "Coastal South Florida air corrodes condenser fins, braze joints and even the titanium heat-exchanger coils that BlueCube, Penguin and Aqua Chill rely on. We leak-check with electronic detectors, repair or replace the coil, pull a deep vacuum, and recharge to weight — not by guesswork — so the fix actually holds.",
  },
  {
    icon: Wrench,
    title: "Flow, filtration and sanitation drive liability",
    detail:
      "A plunge that members share lives and dies on circulation, filtration and sanitizer. Worn pumps, clogged cartridges, dead UV lamps and faulty ozone generators turn a recovery amenity into a health risk. These are economical same-day repairs — and the difference between a clean tub and a shutdown.",
  },
]

const FAQS = [
  {
    q: "Do you repair commercial cold plunges and their chillers near me?",
    a: `Yes. Berne Commercial Repair services commercial cold plunges, ice baths and their water chillers same-day across Miami-Dade, Broward and Palm Beach, seven days a week. A down plunge in a gym, recovery studio or hotel spa is treated as a priority because members are paying for it. The commercial service call is ${site.serviceCall} — free when you approve the repair, charged only if you decline.`,
  },
  {
    q: "Which cold plunge and chiller brands do you work on?",
    a: "Plunge, Renu Therapy, Morozko Forge, BlueCube, Penguin Chillers, Aqua Chill and Active Aqua / generic commercial water chillers. Because the chiller is a standard sealed refrigeration circuit, we service the cooling side even when the tub or controller is a less common brand — and we coordinate with the manufacturer when a proprietary part is involved.",
  },
  {
    q: "My plunge won't get below 55°F — what's wrong?",
    a: "Usually the chiller can't reject heat fast enough. The top causes are a dirty or salt-corroded condenser, low refrigerant charge from a slow leak, restricted water flow across the heat exchanger, or a chiller undersized for the duty and the equipment-room temperature. We check superheat/subcooling, condenser airflow and water flow on the first visit instead of throwing parts at it.",
  },
  {
    q: "How much does commercial cold plunge repair cost in South Florida?",
    a: `Most tickets land $160–$700 — pumps, cartridge filters, UV lamps, ozone generators, temp-probe recalibration and controller faults. Sealed-system work runs higher: a refrigerant leak repair with coil replacement and recharge can reach $1,800. The ${site.serviceCall} service call covers the diagnosis and is free with an approved repair.`,
  },
  {
    q: "Are you an authorized cold plunge service agent?",
    a: "No — Berne is an independent commercial service company, not affiliated with Plunge, Renu Therapy, BlueCube or any cold plunge or chiller manufacturer. In-warranty units should use the factory network first. Out of warranty, independence works for you: same-day dispatch, EPA Section 608 refrigerant handling, common parts on the truck, and honest repair-vs-replace numbers.",
  },
  {
    q: "How do you keep a busy plunge sanitary between service visits?",
    a: "Circulation has to run, the cartridge filter has to be clean, and the sanitizer (UV, ozone or chemistry) has to be in spec. We verify all three on every visit and document them. For high-throughput facilities we offer PM contracts that bundle filter changes, UV-lamp replacement, chiller condenser cleaning, probe calibration and water-chemistry checks on a schedule.",
  },
]

export default function ColdPlungeRepairPage() {
  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Commercial Cold Plunge Repair" },
        ]}
      />
      <PageHero
        eyebrow="Service"
        title="Commercial Cold Plunge Repair in South Florida"
        description="Same-day cold plunge, ice-bath and water-chiller repair across Miami-Dade, Broward and Palm Beach — Plunge, Renu Therapy, BlueCube, Penguin and Aqua Chill. Compressors, titanium heat exchangers, pumps, filtration, UV/ozone and temp controllers, fixed by refrigeration techs. 24/7 emergency dispatch."
      >
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="outline"
            className="border-primary/30 bg-primary/5 text-primary"
          >
            {site.serviceCall} service call — free with approved repair
          </Badge>
          <Badge variant="outline">Independent service — no dealer queue</Badge>
          <Badge variant="outline">EPA Section 608 certified</Badge>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton href="/request-dispatch?service=commercial-cold-plunge-repair">
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
                A cold plunge is a refrigeration system, not a bathtub
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  Strip away the cedar and the stainless and a commercial cold
                  plunge is a water chiller — a compressor, condenser and
                  evaporator (usually a titanium coil in the water) moving heat
                  out so the tub can hold 38–50°F. In a South Florida gym or
                  recovery studio that chiller runs hard all day in a hot
                  equipment room, and that continuous duty is exactly where the
                  failures show up. When it can&apos;t keep the water cold, the
                  amenity members pay for goes offline — so plunge calls dispatch
                  same-day in our queue, with high-traffic studios and hotel spas
                  prioritized.
                </p>
                <p>
                  Berne Commercial Repair services every common platform — Plunge,
                  Renu Therapy, Morozko Forge, and the BlueCube, Penguin, Aqua
                  Chill and Active Aqua chillers behind them — across the sealed
                  refrigeration circuit, the circulation pump, the filtration and
                  sanitation train, and the temperature controller. Because the
                  cold side is the same physics we run every day on{" "}
                  <Link
                    href="/services/commercial-refrigeration-repair"
                    className="font-medium text-primary hover:underline"
                  >
                    commercial refrigeration repair
                  </Link>
                  , our EPA-certified techs read superheat, subcooling and head
                  pressure instead of guessing — so a vague &quot;it stopped
                  getting cold&quot; becomes a targeted, first-visit fix.
                </p>
                <p>
                  We are an independent commercial service company — not a
                  dealership and not an authorized agent of any plunge or chiller
                  brand. For in-warranty units, use the manufacturer&apos;s
                  network first; it is free for you. Out of warranty, we are
                  typically faster, carry the common wear parts, handle refrigerant
                  to EPA Section 608, and give you honest repair-vs-replace math.
                  See the full{" "}
                  <Link
                    href="/services"
                    className="font-medium text-primary hover:underline"
                  >
                    commercial services
                  </Link>{" "}
                  line for the rest of your facility.
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
                    Warm plunge:
                  </span>{" "}
                  same-day across Miami-Dade, Broward and Palm Beach — seven days
                  a week.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    First-visit closure:
                  </span>{" "}
                  pumps, filters, UV lamps and refrigeration tools ride on the
                  truck.
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
                href="/request-dispatch?service=commercial-cold-plunge-repair"
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
            Cold plunge symptoms, likely causes &amp; typical repair costs
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
            Real numbers from our South Florida service tickets — parts plus
            labor, before any contract pricing. The {site.serviceCall} commercial
            service call covers the diagnosis and is free when you approve the
            repair — the fee applies only if you decline.
          </p>
          <p className="mt-4 text-xs text-muted-foreground md:hidden" aria-hidden>
            Swipe to see costs and dispatch times →
          </p>
          <div
            tabIndex={0}
            role="region"
            aria-label="Cold plunge symptoms and typical repair costs"
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

      {/* Related commercial services */}
      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Related commercial services
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
            Wellness and recovery rooms rarely have just one machine. We keep the
            whole hydrothermal suite running.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/services/commercial-refrigeration-repair"
              className="group flex flex-col gap-1.5 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <span className="text-base font-semibold text-foreground group-hover:text-primary">
                Commercial Refrigeration Repair →
              </span>
              <span className="text-xs leading-relaxed text-muted-foreground">
                The same sealed-system expertise behind the plunge chiller —
                compressors, charges and coils across your facility.
              </span>
            </Link>
            <Link
              href="/services/commercial-sauna-repair"
              className="group flex flex-col gap-1.5 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <span className="text-base font-semibold text-foreground group-hover:text-primary">
                Commercial Sauna Repair →
              </span>
              <span className="text-xs leading-relaxed text-muted-foreground">
                The hot half of contrast therapy — heaters, controls and steam
                generators serviced alongside your plunge.
              </span>
            </Link>
            <Link
              href="/services/commercial-pool-heater-repair"
              className="group flex flex-col gap-1.5 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <span className="text-base font-semibold text-foreground group-hover:text-primary">
                Commercial Pool Heater Repair →
              </span>
              <span className="text-xs leading-relaxed text-muted-foreground">
                Gas heaters and heat pumps for the pool and warm spa that share
                the equipment room.
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Field guide */}
      <section className="border-b border-border/60 bg-accent/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Field guide from our techs
          </h2>
          <div className="mt-8">
            <Link
              href="/blog/commercial-cold-plunge-chiller-wellness-spa"
              className="group flex flex-col gap-1.5 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <span className="text-base font-semibold text-foreground group-hover:text-primary">
                Commercial Cold Plunge Chiller Repair for Gyms &amp; Spas →
              </span>
              <span className="text-xs leading-relaxed text-muted-foreground">
                Why a busy plunge drifts warm — charge, condenser airflow,
                titanium-coil corrosion, flow and sanitation — and what each
                repair runs in South Florida.
              </span>
            </Link>
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
            Request cold plunge service
          </h2>
          <p className="mt-2 text-muted-foreground">
            A dispatcher will confirm the service window shortly. Warm plunges at
            high-traffic studios and hotel spas are prioritized.
          </p>
          <div className="mt-8">
            <DispatchForm defaults={{ service: "commercial-cold-plunge-repair" }} />
          </div>
        </div>
      </section>

      <FAQSection
        faqs={FAQS}
        title="Cold plunge repair FAQ"
        description="From dispatch and the field team."
      />
      <JsonLd data={faqSchema(FAQS)} />

      <JsonLd
        data={serviceSchema({
          name: "Commercial Cold Plunge Repair",
          description:
            "Same-day commercial cold plunge, ice-bath and water-chiller repair across South Florida — Plunge, Renu Therapy, BlueCube, Penguin and Aqua Chill. Compressors, titanium heat exchangers, pumps, filtration and temp controllers.",
          url: `${site.url}${PATH}`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Services", url: `${site.url}/services` },
          {
            name: "Commercial Cold Plunge Repair",
            url: `${site.url}${PATH}`,
          },
        ])}
      />
    </PageShell>
  )
}

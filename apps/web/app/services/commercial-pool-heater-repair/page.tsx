import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  AlertTriangle,
  Flame,
  Thermometer,
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
 * Commercial pool heater repair — hospitality/HOA money cluster (2026-06-22).
 *
 * Hotels, HOAs, condos, clubs and aquatic centers across South Florida run
 * high-BTU gas heaters and heat pumps that fail on salt-air corrosion, hard-
 * water scale and 24/7 duty. This is gas-train + sealed-system + water-flow
 * work — squarely commercial, and a clean fit beside our sauna and cold-plunge
 * hydrothermal pages.
 *
 * Static route deliberately — NOT a services.ts entry (that would spawn ~70
 * phantom /{city}/commercial-pool-heater-repair combos). EN-only: metaFor
 * esAlternate=false. Sitemap entry is added by hand in app/sitemap.ts.
 */

const PATH = "/services/commercial-pool-heater-repair"

export const metadata: Metadata = metaFor({
  title: "Commercial Pool Heater Repair Miami",
  description:
    "Pool & spa heater repair for hotels, HOAs & clubs — Pentair, Raypak, Hayward, Jandy gas heaters & heat pumps. Heat exchangers, ignition, TXV. 4.79★. $89 call.",
  path: PATH,
  esAlternate: false,
})

const SYMPTOMS = [
  {
    symptom: "Gas heater won't ignite or locks out on ignition fault",
    cause: "Failed igniter/HSI, dirty flame sensor, or a gas-valve fault",
    cost: "$220–$700",
    response: "Same-day",
  },
  {
    symptom: "Heater fires then shuts off after a minute or two",
    cause: "Pressure switch, flame-sensor signal, or restricted exhaust/venting",
    cost: "$180–$540",
    response: "Same-day",
  },
  {
    symptom: "Pool warms slowly or not at all, gas bills climbing",
    cause: "Scaled or corroded heat exchanger choking heat transfer",
    cost: "$400–$2,400",
    response: "24–48h",
  },
  {
    symptom: "Heat pump runs but adds no heat",
    cause: "Low refrigerant charge, failed reversing valve, or a TXV fault",
    cost: "$300–$1,800",
    response: "Same-day",
  },
  {
    symptom: "Heat pump iced over or stuck in defrost",
    cause: "Defrost-control fault, low charge, or a weak fan motor",
    cost: "$260–$900",
    response: "Same-day",
  },
  {
    symptom: "Heater shows low-flow / pressure-switch error",
    cause: "Pump, filter or plumbing restriction dropping flow below minimum",
    cost: "$160–$520",
    response: "Same-day",
  },
  {
    symptom: "Water temp reads wrong or won't hold set point",
    cause: "Thermistor/thermostat fault or a controller needing service",
    cost: "$150–$420",
    response: "Same-day",
  },
  {
    symptom: "Soot, rollout, or a CO concern on a gas heater",
    cause: "Burner/heat-exchanger fouling or a venting/combustion-air problem",
    cost: "$280–$1,200",
    response: "Same-day",
  },
]

const PROBLEMS = [
  {
    icon: Flame,
    title: "Salt air and scale destroy heat exchangers",
    detail:
      "The heat exchanger is the heart and the wallet of a pool heater. Cupronickel and even titanium exchangers corrode in coastal salt air, while South Florida's hard water lays scale that insulates the tubes and chokes heat transfer. A gas heater that 'works but won't warm the pool' is usually a scaled or corroding exchanger — and the repair-vs-replace math turns on its condition.",
  },
  {
    icon: Wrench,
    title: "Gas trains and heat pumps fail differently",
    detail:
      "On gas heaters (Pentair MasterTemp, Raypak, Hayward H-Series, Jandy, Lochinvar) the usual culprits are igniters, flame sensors, gas valves, pressure switches and thermal regulators. On heat pumps (AquaCal, Raypak, Hayward) it's compressors, titanium exchangers, reversing valves, TXVs, defrost controls and fans. We diagnose to the platform instead of swapping parts blind.",
  },
  {
    icon: Thermometer,
    title: "Flow, controls and code keep it safe",
    detail:
      "Every heater needs minimum water flow before it'll fire — so a pump, filter or valve problem often masquerades as a heater fault. Add thermostats, controllers, venting and combustion-air requirements, ASME stamps on large commercial units, and CO safety, and a 'simple' heater call becomes a real commercial service. That's the work we do every week.",
  },
]

const FAQS = [
  {
    q: "Do you repair commercial pool and spa heaters near me?",
    a: `Yes. Berne Commercial Repair services commercial pool and spa heaters same-day across Miami-Dade, Broward and Palm Beach, seven days a week — gas heaters and electric heat pumps alike. A cold pool at a hotel, HOA or club drives guest complaints fast, so these calls are prioritized. The commercial service call is ${site.serviceCall} — free when you approve the repair, charged only if you decline.`,
  },
  {
    q: "Which pool heater brands do you service?",
    a: "Gas heaters from Pentair (MasterTemp, ETi), Raypak, Hayward (Universal H-Series), Jandy/Zodiac and Lochinvar; and heat pumps from AquaCal, Raypak and Hayward. We work both technologies — the gas train and the sealed refrigeration circuit — which matters at properties running a gas heater on the pool and a heat pump on the spa, or vice versa.",
  },
  {
    q: "My gas heater fires then shuts off — what's wrong?",
    a: "A heater that lights and then drops out is usually a safety circuit doing its job: a weak flame-sensor signal, a tripping pressure switch from low water flow, or restricted venting. Less often it's the gas valve or a control board. We check flow, combustion and the flame-rectification signal in order, so we fix the actual cause instead of clearing a code that comes right back.",
  },
  {
    q: "How much does commercial pool heater repair cost in South Florida?",
    a: `Most tickets land $160–$700 — igniters, flame sensors, pressure switches, thermostats, defrost controls and flow issues. Heat-exchanger replacement on a scaled or corroded gas heater, or sealed-system work on a heat pump, runs higher ($1,800–$2,400+) and becomes a repair-vs-replace conversation. The ${site.serviceCall} service call covers the diagnosis and is free with an approved repair.`,
  },
  {
    q: "Are you an authorized pool heater service agent?",
    a: "No — Berne is an independent commercial service company, not affiliated with Pentair, Raypak, Hayward, Jandy, Lochinvar, AquaCal or any heater manufacturer. In-warranty units should use the factory network first. Out of warranty, independence works for you: same-day dispatch, EPA Section 608 refrigerant handling on heat pumps, common parts on the truck, and honest repair-vs-replace numbers.",
  },
  {
    q: "Why do pool heaters fail so fast in South Florida?",
    a: "Two reasons: coastal salt air corrodes heat exchangers, cabinets and fittings, and hard water scales the exchanger tubes from the inside. Add near-year-round 24/7 duty at hotels and HOAs and components wear faster than the manufacturer's inland assumptions. Our PM contracts bundle exchanger inspection, descaling, combustion and flow checks to stretch heater life and avoid peak-season outages.",
  },
]

export default function PoolHeaterRepairPage() {
  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Commercial Pool Heater Repair" },
        ]}
      />
      <PageHero
        eyebrow="Service"
        title="Commercial Pool Heater Repair in South Florida"
        description="Same-day pool and spa heater repair across Miami-Dade, Broward and Palm Beach — Pentair, Raypak, Hayward, Jandy, Lochinvar and AquaCal, gas heaters and heat pumps. Heat exchangers, ignition, gas valves, reversing valves, TXVs and controllers, fixed right. 24/7 emergency dispatch."
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
          <LinkButton href="/request-dispatch?service=commercial-pool-heater-repair">
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
                A cold pool is a guest complaint, not a maintenance ticket
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  At a hotel, HOA, condo or club, the pool heater is a guest-facing
                  asset. When it quits, the front desk hears about it within the
                  hour, and a heated spa that goes cold in season can cost real
                  bookings. That is why commercial pool and spa heater calls
                  dispatch same-day in our queue across South Florida, with
                  hospitality and aquatic-center failures treated as priorities.
                </p>
                <p>
                  Berne Commercial Repair services both heater technologies. On the
                  gas side we work Pentair MasterTemp and ETi, Raypak, Hayward
                  Universal H-Series, Jandy/Zodiac and Lochinvar — burners,
                  igniters, gas valves, pressure switches, flame sensors, thermal
                  regulators and heat exchangers. On the heat-pump side we work
                  AquaCal, Raypak and Hayward — compressors, titanium exchangers,
                  reversing valves, TXVs, defrost controls and fans. The same
                  sealed-system depth shows up across our{" "}
                  <Link
                    href="/services/commercial-cold-plunge-repair"
                    className="font-medium text-primary hover:underline"
                  >
                    commercial cold plunge repair
                  </Link>{" "}
                  work, so a heat-pump fault gets read on superheat and subcooling,
                  not guesswork.
                </p>
                <p>
                  We are an independent commercial service company — not a
                  dealership and not an authorized agent of any heater brand. For
                  in-warranty units, use the manufacturer&apos;s network first; it
                  is free for you. Out of warranty, we are typically faster, carry
                  the common ignition and control parts, handle refrigerant to EPA
                  Section 608, and give you honest repair-vs-replace numbers on a
                  scaled or corroded exchanger. See the full{" "}
                  <Link
                    href="/services"
                    className="font-medium text-primary hover:underline"
                  >
                    commercial services
                  </Link>{" "}
                  line for the rest of the property.
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
                    Cold pool/spa:
                  </span>{" "}
                  same-day across Miami-Dade, Broward and Palm Beach — seven days
                  a week.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    First-visit closure:
                  </span>{" "}
                  igniters, sensors, pressure switches and gauges ride on the
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
                href="/request-dispatch?service=commercial-pool-heater-repair"
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
            Pool heater symptoms, likely causes &amp; typical repair costs
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
            aria-label="Pool heater symptoms and typical repair costs"
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
            The pool equipment room rarely has just one machine. We keep the whole
            hydrothermal amenity running.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Link
              href="/services/commercial-sauna-repair"
              className="group flex flex-col gap-1.5 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <span className="text-base font-semibold text-foreground group-hover:text-primary">
                Commercial Sauna Repair →
              </span>
              <span className="text-xs leading-relaxed text-muted-foreground">
                Heaters, controls and steam generators for the dry sauna and
                steam room that share your pool deck.
              </span>
            </Link>
            <Link
              href="/services/commercial-cold-plunge-repair"
              className="group flex flex-col gap-1.5 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <span className="text-base font-semibold text-foreground group-hover:text-primary">
                Commercial Cold Plunge Repair →
              </span>
              <span className="text-xs leading-relaxed text-muted-foreground">
                Cold plunge and ice-bath chillers — the cold half of contrast
                therapy — serviced by the same team.
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
              href="/blog/commercial-pool-heater-hotel-hoa-repair"
              className="group flex flex-col gap-1.5 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <span className="text-base font-semibold text-foreground group-hover:text-primary">
                Commercial Pool Heater Repair for Hotels &amp; HOAs →
              </span>
              <span className="text-xs leading-relaxed text-muted-foreground">
                Gas heaters vs heat pumps, scaled and corroded heat exchangers,
                ignition and flow faults — and what each repair runs at a South
                Florida property.
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
            Request pool heater service
          </h2>
          <p className="mt-2 text-muted-foreground">
            A dispatcher will confirm the service window shortly. Cold pools and
            spas at hotels, HOAs and clubs are prioritized.
          </p>
          <div className="mt-8">
            <DispatchForm
              defaults={{ service: "commercial-pool-heater-repair" }}
            />
          </div>
        </div>
      </section>

      <FAQSection
        faqs={FAQS}
        title="Pool heater repair FAQ"
        description="From dispatch and the field team."
      />
      <JsonLd data={faqSchema(FAQS)} />

      <JsonLd
        data={serviceSchema({
          name: "Commercial Pool Heater Repair",
          description:
            "Same-day commercial pool and spa heater repair across South Florida — Pentair, Raypak, Hayward, Jandy, Lochinvar and AquaCal, gas heaters and heat pumps. Heat exchangers, ignition, gas valves, reversing valves and controllers.",
          url: `${site.url}${PATH}`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Services", url: `${site.url}/services` },
          {
            name: "Commercial Pool Heater Repair",
            url: `${site.url}${PATH}`,
          },
        ])}
      />
    </PageShell>
  )
}

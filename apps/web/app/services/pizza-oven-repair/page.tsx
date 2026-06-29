import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  AlertTriangle,
  Flame,
  Gauge,
  Timer,
  Wind,
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
 * Commercial pizza oven repair — deck/stone + conveyor (impinger) cluster.
 *
 * Covers deck/stone ovens (gas + electric), conveyor/impinger ovens, brick/gas
 * and rotating-deck. NOT pizza-prep-table (separate page — cross-linked). The
 * conveyor belt/bearing deep dive lives in an existing field guide and is
 * cross-linked rather than duplicated.
 *
 * Static route, NOT a services.ts entry (avoids ~70 phantom /{city} combos —
 * same precedent as combi-oven-repair and medical-lab). EN-only. Sitemap and
 * services-grid wiring handled by the orchestrator.
 */

const PATH = "/services/pizza-oven-repair"

export const metadata: Metadata = metaFor({
  title: "Commercial Pizza Oven Repair Miami — Deck & Conveyor",
  description:
    "Deck, stone & conveyor pizza oven repair across South Florida — Middleby Marshall, Lincoln Impinger, Bakers Pride, Blodgett, Marsal. Burners, belts, boards fixed. 4.79★. $89 call.",
  path: PATH,
  esAlternate: false,
})

const RELATED_SERVICES = [
  {
    href: "/services/commercial-oven-repair",
    title: "Commercial oven repair",
    teaser:
      "Convection, deck and conveyor ovens from Vulcan, Blodgett, Garland and Middleby — the broader oven hub your pizza line shares burners, boards and blowers with.",
  },
  {
    href: "/services/combi-oven-repair",
    title: "Combi oven repair",
    teaser:
      "Rational, Convotherm, Unox and Alto-Shaam combis — steam generators, clean systems and controllers, for kitchens that bake and steam under one roof.",
  },
  {
    href: "/services/pizza-prep-table-repair",
    title: "Pizza prep table repair",
    teaser:
      "Refrigerated topping rails and prep tables — the cold side of the pizza station, serviced on the same visit as the oven.",
  },
]

const SYMPTOMS = [
  {
    symptom: "Deck won't reach or hold 500–700°F",
    cause:
      "Burner/orifice fouling, low gas pressure, failed element bank or bad thermostat",
    cost: "$180–$900",
    response: "Same-day",
  },
  {
    symptom: "Slow recovery between bakes, soggy or pale crust",
    cause: "Stone heat loss, weak burner, blower-motor fault or door seal leak",
    cost: "$200–$680",
    response: "Same-day",
  },
  {
    symptom: "Pilot/ignition won't light or drops out",
    cause: "Thermocouple, spark module, gas valve or flame-sensor fault",
    cost: "$160–$520",
    response: "Same-day",
  },
  {
    symptom: "Conveyor belt stalls, drags or runs uneven",
    cause: "Drive motor, gearbox, worn bearings or stretched/jammed belt",
    cost: "$220–$1,100",
    response: "Same-day",
  },
  {
    symptom: "Conveyor bakes uneven front-to-back",
    cause: "Blocked air-finger plenums, blower fault or belt-speed drift",
    cost: "$180–$640",
    response: "Same-day",
  },
  {
    symptom: "Oven over/under-shoots set temperature",
    cause: "Failed thermocouple/RTD, controller drift or contactor fault",
    cost: "$180–$560",
    response: "Same-day",
  },
  {
    symptom: "Electric deck dead zones / weak elements",
    cause: "Burned element bank, contactor or open high-limit",
    cost: "$220–$780",
    response: "Same-day",
  },
  {
    symptom: "Gas smell, sooting or yellow flame",
    cause: "Combustion/gas-pressure fault — stop and call",
    cost: "$160–$600",
    response: "Emergency",
  },
]

const PROBLEMS = [
  {
    icon: Flame,
    title: "It's a high-temp, continuous-duty machine",
    detail:
      "A commercial pizza oven runs 500–700°F for 12+ hours a day. Burners foul, orifices clog, thermocouples drift, and gas pressure that's a hair low shows up as long bakes and pale crust. We verify manifold gas pressure and combustion before swapping parts — guessing on a gas appliance is how you waste money and risk safety.",
  },
  {
    icon: Gauge,
    title: "Even bake is a calibration problem",
    detail:
      "When pies come out hot in front and raw in back, the fix is rarely 'a new oven.' On decks it's stone heat loss, a weak burner or a door seal; on conveyors it's blocked air-finger plenums, a tired blower or belt-speed drift. We read thermocouples and RTDs and re-calibrate to spec instead of chasing symptoms.",
  },
  {
    icon: Wind,
    title: "Conveyors live and die on the belt drive",
    detail:
      "Impinger ovens move product through a heated tunnel on a wire belt driven by a motor, gearbox and bearings that run hot and load-cycle all day. Bearings squeal then seize, belts stretch and jam, drive motors fade. These are the high-frequency conveyor wear parts our trucks carry for first-visit closure.",
  },
]

const FAQS = [
  {
    q: "Do you repair commercial pizza ovens near me, same-day?",
    a: `Yes. Berne Commercial Repair dispatches deck, stone and conveyor pizza oven repair same-day across Miami-Dade, Broward and Palm Beach, seven days a week. A dead oven during a dinner rush at a pizzeria or hotel is treated as an emergency. The commercial service call is ${site.serviceCall} — free when you approve the repair, charged only if you decline.`,
  },
  {
    q: "Which pizza oven brands and types do you service?",
    a: "Deck and stone ovens (gas and electric), conveyor/impinger ovens, brick/gas and rotating-deck — from Middleby Marshall, Lincoln Impinger, Bakers Pride, Blodgett, Marsal, Wood Stone, XLT, Moretti Forni and Picard, plus the broader convection and deck range on our commercial oven hub.",
  },
  {
    q: "My pizza oven won't hold temperature — what's wrong?",
    a: "On a gas deck it's usually a fouled burner or orifice, low manifold gas pressure, a failed thermostat or a worn door seal letting heat out. On an electric deck it's a burned element bank or contactor. On a conveyor it can be a blower or air-finger restriction. We verify gas pressure and read the temperature controls on the first visit instead of guessing.",
  },
  {
    q: "Do you fix conveyor (impinger) belt and bearing problems?",
    a: "Yes — drive motors, gearboxes, bearings and the belt itself, plus the air-finger plenums that control bake evenness. A squealing or seizing bearing and a stretched or jammed belt are common high-temp wear failures. The deep field diagnostic on conveyor belts and bearings lives in our field guide linked below.",
  },
  {
    q: "Are you an authorized warranty service agent?",
    a: "No — Berne is an independent commercial service company, not affiliated with Middleby, Lincoln, Bakers Pride, Blodgett or any pizza-oven manufacturer. In-warranty ovens should use the factory network first; it's free for you. Out of warranty, independence works for you: same-day dispatch, no warranty queue, and parts on the truck.",
  },
  {
    q: "How much does commercial pizza oven repair cost in South Florida?",
    a: `Most tickets land $160–$900 — burner, igniter and thermocouple service, thermostat and controller swaps, blower and door-seal work, and conveyor belt, bearing and drive repairs that can run higher. The ${site.serviceCall} commercial service call covers the diagnosis and is free with an approved repair — the fee applies only if you decline.`,
  },
]

export default function PizzaOvenRepairHub() {
  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Commercial Pizza Oven Repair" },
        ]}
      />
      <PageHero
        eyebrow="Service"
        title="Commercial Pizza Oven Repair in South Florida"
        description="Same-day deck, stone and conveyor pizza oven repair across Miami-Dade, Broward and Palm Beach — Middleby Marshall, Lincoln Impinger, Bakers Pride, Blodgett and Marsal. Burners, igniters, belts, bearings, blowers and controllers, fixed by techs who verify gas pressure before they touch a part."
      >
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="outline"
            className="border-primary/30 bg-primary/5 text-primary"
          >
            {site.serviceCall} service call — free with approved repair
          </Badge>
          <Badge variant="outline">Independent service — no dealer queue</Badge>
          <Badge variant="outline">Gas &amp; electric — both covered</Badge>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton href="/request-dispatch?service=pizza-oven-repair">
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
                When the oven's down, you can't sell a pie
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  A pizza oven is the throughput engine of the whole shop. When a
                  deck won't reach 600°F or a conveyor belt stalls mid-rush, the
                  tickets back up and the night is lost. That is why pizza oven
                  calls dispatch same-day in our queue across South Florida, with
                  pizzerias, hotels and high-volume kitchens prioritized as
                  emergencies — a cold oven at 6 p.m. is not a maintenance
                  ticket.
                </p>
                <p>
                  Berne Commercial Repair services every common pizza platform —
                  gas and electric deck and stone ovens, conveyor/impinger ovens,
                  brick/gas and rotating-deck — from Middleby Marshall, Lincoln
                  Impinger, Bakers Pride, Blodgett, Marsal, Wood Stone, XLT,
                  Moretti Forni and Picard, plus the convection and deck range on
                  our{" "}
                  <Link
                    href="/services/commercial-oven-repair"
                    className="font-medium text-primary hover:underline"
                  >
                    commercial oven repair
                  </Link>{" "}
                  hub. Our 18 W-2 technicians verify manifold gas pressure, read
                  thermocouples and RTDs, and calibrate for even bake the way the
                  factory manuals intend — so a vague &quot;it's not baking
                  right&quot; becomes a targeted, first-visit repair.
                </p>
                <p>
                  We are an independent commercial service company — not a
                  dealership and not an authorized agent of any pizza-oven brand.
                  For in-warranty ovens, use the manufacturer&apos;s network
                  first; it is free for you. For everything out of warranty, we
                  are typically faster, carry the common wear parts on the truck,
                  and give you honest repair-vs-replace math instead of a sales
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
                  burners, igniters, belts, bearings and controls ride on the
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
                href="/request-dispatch?service=pizza-oven-repair"
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
            Pizza oven symptoms, likely causes &amp; typical repair costs
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
            aria-label="Pizza oven symptoms and typical repair costs"
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
            The rest of the pizza station and the broader oven line — serviced by
            the same trucks, often on the same visit.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {RELATED_SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex flex-col gap-1.5 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <span className="text-base font-semibold text-foreground group-hover:text-primary">
                  {s.title} →
                </span>
                <span className="text-xs leading-relaxed text-muted-foreground">
                  {s.teaser}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Field guide */}
      <section className="border-b border-border/60 bg-accent/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Field guide from our techs
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
            How a tech works a deck or conveyor oven that won't hold heat or
            bake even — from gas pressure and stone recovery to belts, bearings
            and air fingers.
          </p>
          <div className="mt-8">
            <Link
              href="/blog/commercial-pizza-oven-deck-conveyor-repair"
              className="group flex flex-col gap-1.5 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <span className="text-base font-semibold text-foreground group-hover:text-primary">
                Commercial Pizza Oven Repair: Deck &amp; Conveyor Field Guide →
              </span>
              <span className="text-xs leading-relaxed text-muted-foreground">
                Deck heat-up and recovery, burners and ignition, conveyor belts,
                bearings and air-finger plenums, thermocouples and controllers —
                the real diagnostic sequence and what each repair runs.
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
            Request pizza oven service
          </h2>
          <p className="mt-2 text-muted-foreground">
            A dispatcher will confirm the service window shortly. Down ovens in
            pizzerias and high-volume kitchens are prioritized.
          </p>
          <div className="mt-8">
            <DispatchForm defaults={{ service: "pizza-oven-repair" }} />
          </div>
        </div>
      </section>

      <FAQSection
        faqs={FAQS}
        title="Commercial pizza oven repair FAQ"
        description="From dispatch and the field team."
      />
      <JsonLd data={faqSchema(FAQS)} />

      <JsonLd
        data={serviceSchema({
          name: "Commercial Pizza Oven Repair",
          description:
            "Same-day commercial pizza oven repair across South Florida — deck, stone and conveyor/impinger ovens from Middleby Marshall, Lincoln Impinger, Bakers Pride, Blodgett and Marsal. Burners, igniters, belts, bearings, blowers and controllers.",
          url: `${site.url}${PATH}`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Services", url: `${site.url}/services` },
          { name: "Commercial Pizza Oven Repair", url: `${site.url}${PATH}` },
        ])}
      />
    </PageShell>
  )
}

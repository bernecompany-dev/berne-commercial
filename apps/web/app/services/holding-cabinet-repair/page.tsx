import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  AlertTriangle,
  Droplets,
  Thermometer,
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

/**
 * Holding & warming cabinet repair — static service hub (2026-06-23).
 *
 * Distinct from /services/warming-table-repair (open steam/hot wells): this
 * page covers ENCLOSED heated holding cabinets, Cook-and-Hold ovens and
 * proofer-holding units where the failure mode is hot-hold temperature and
 * humidity, not a water bath. Static route, NOT a services.ts entry (avoids
 * spawning ~70 phantom /{city}/holding-cabinet-repair combos). EN-only:
 * metaFor esAlternate=false. Sitemap entry added by hand in app/sitemap.ts.
 */

const PATH = "/services/holding-cabinet-repair"

export const metadata: Metadata = metaFor({
  title: "Holding & Warming Cabinet Repair Miami",
  description:
    "Heated holding & Cook-and-Hold cabinet repair across South Florida — Alto-Shaam, Winston CVap, Cres Cor, Metro C5, Hatco, FWE. Hot-hold temp & humidity fixed. 4.79★. $89 call.",
  path: PATH,
  esAlternate: false,
})

const RELATED_SERVICES = [
  {
    href: "/services/commercial-oven-repair",
    title: "Commercial Oven Repair",
    teaser:
      "Convection, combi, conveyor and deck ovens — the cook side that feeds your holding cabinets. Same-day across South Florida.",
  },
  {
    href: "/services/warming-table-repair",
    title: "Warming Table & Steam Well Repair",
    teaser:
      "Open hot wells, steam tables and bain-marie service — the line-side hot-hold that sits next to your enclosed cabinets.",
  },
  {
    href: "/services/combi-oven-repair",
    title: "Combi Oven Repair",
    teaser:
      "Rational, Convotherm, Unox and Alto-Shaam combis — steam generators, clean systems, doors, probes and boards.",
  },
]

const SYMPTOMS = [
  {
    symptom: "Cabinet won't reach or hold 140°F+ hot-hold temperature",
    cause:
      "Failed heating element/calrod, open high-limit, or a drifted thermostat/controller",
    cost: "$180–$520",
    response: "Same-day",
  },
  {
    symptom: "Food drying out, edges crusting on a long hold",
    cause:
      "Humidity/vapor system fault — empty or scaled water pan, clogged CVap reservoir, weak wet-bulb control",
    cost: "$160–$480",
    response: "Same-day",
  },
  {
    symptom: "Hot and cold spots shelf-to-shelf",
    cause: "Circulation fan motor or blade fault, or blocked air plenum",
    cost: "$220–$560",
    response: "Same-day",
  },
  {
    symptom: "Display/controller reading wrong or throwing a fault",
    cause:
      "Failed temperature probe, corroded connector, or a digital control board fault",
    cost: "$180–$640",
    response: "Same-day",
  },
  {
    symptom: "Heat pouring out, recovery slow after every door open",
    cause: "Door gasket compression set, sprung latch/hinge, or worn insulation",
    cost: "$140–$340",
    response: "Same-day",
  },
  {
    symptom: "Breaker trips or unit dead on power-up",
    cause: "Shorted element, failed contactor/relay, or a damaged cord/caster strain",
    cost: "$160–$480",
    response: "Same-day",
  },
  {
    symptom: "Cook-and-Hold won't transition out of cook into hold",
    cause: "Mode/transfer relay, timer board, or probe-driven logic fault",
    cost: "$240–$620",
    response: "Same-day",
  },
  {
    symptom: "Calibration drift flagged on a HACCP temperature log",
    cause: "Sensor offset or controller calibration out of spec",
    cost: "$120–$280",
    response: "24–48h",
  },
]

const PROBLEMS = [
  {
    icon: Thermometer,
    title: "Hot-hold below 140°F is a food-safety failure",
    detail:
      "FDA Food Code requires hot food held at 140°F (60°C) or above. A cabinet drifting to 125°F isn't just drying product — it's parking food in the danger zone and putting you on the wrong side of a HACCP log and a health inspection. Elements, high-limits and a drifted controller are the usual culprits, and they're a same-day fix.",
  },
  {
    icon: Droplets,
    title: "Humidity control is what keeps banquet plates from drying",
    detail:
      "Halo Heat, CVap wet/dry-bulb and vapor water-pan systems hold moisture so a tray of chicken survives a two-hour banquet hold. South Florida hard water scales those reservoirs and water lines fast — when humidity drops, edges crust and yields fall. Descaling the vapor system and proving the wet-bulb control is high-frequency work for us.",
  },
  {
    icon: Wrench,
    title: "Doors, fans, probes and boards wear on schedule",
    detail:
      "Gaskets take a compression set under constant heat, latches sag from banquet-volume door cycles, circulation fan motors die early in a hot kitchen, and probes drift. These are the wear parts our trucks carry so a holding cabinet closes on the first visit instead of waiting on a parts order.",
  },
]

const FAQS = [
  {
    q: "Do you repair heated holding and Cook-and-Hold cabinets same-day near me?",
    a: `Yes. Berne Commercial Repair dispatches holding and warming cabinet service same-day across Miami-Dade, Broward and Palm Beach, seven days a week — a down cabinet at a banquet, hotel or hospital kitchen is treated as an emergency. The commercial service call is ${site.serviceCall} — free when you approve the repair, charged only if you decline.`,
  },
  {
    q: "Which holding and warming cabinet brands do you service?",
    a: "Alto-Shaam (Halo Heat cook-and-hold and holding), Winston CVap, Cres Cor, Metro C5, Hatco, FWE (Food Warming Equipment) and Carter-Hoffmann — heated holding cabinets, proofer-holding units, banquet carts and Cook-and-Hold ovens. For open steam tables and hot wells, see our warming table repair page instead.",
  },
  {
    q: "My holding cabinet isn't getting hot enough — what's wrong?",
    a: "Most commonly a failed heating element (calrod), a tripped high-limit safety, or a thermostat/digital controller that has drifted out of calibration. On Cook-and-Hold units it can also be a stuck mode-transfer relay that never hands off from cook to hold. We verify the actual cavity temperature against the controller on the first visit so the fix targets the real fault, not a guess.",
  },
  {
    q: "Why does food dry out even though the cabinet stays hot?",
    a: "That's a humidity problem, not a heat problem. Halo Heat, CVap and vapor water-pan systems hold moisture in the cabinet; when the water pan runs dry, the reservoir scales over, or the wet-bulb control fails, the air goes dry and product crusts. Restoring the humidity system — descale, water-line service, control check — brings yields back without touching the heating side.",
  },
  {
    q: "Are you an authorized Alto-Shaam or Winston service agent?",
    a: "No — Berne is an independent commercial service company, not affiliated with Alto-Shaam, Winston, Cres Cor, Metro, Hatco, FWE, Carter-Hoffmann or any holding-cabinet manufacturer. In-warranty cabinets should use the factory network first; it's free for you. Out of warranty, independence works for you: same-day dispatch, no warranty-queue wait, common wear parts on the truck, and honest repair-vs-replace numbers.",
  },
  {
    q: "Can you calibrate a holding cabinet for HACCP documentation?",
    a: `Yes. We verify cavity temperature against a calibrated reference, correct sensor offset or controller calibration, and leave you documentation for your HACCP and health-inspection records. The ${site.serviceCall} service call covers the diagnosis and calibration check, and is free with an approved repair. Many operators bundle this into a PM contract alongside gasket, door and humidity-system service.`,
  },
]

export default function HoldingCabinetRepairHub() {
  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Holding & Warming Cabinet Repair" },
        ]}
      />
      <PageHero
        eyebrow="Service"
        title="Holding & Warming Cabinet Repair in South Florida"
        description="Same-day heated holding, warming and Cook-and-Hold cabinet repair across Miami-Dade, Broward and Palm Beach — Alto-Shaam Halo Heat, Winston CVap, Cres Cor, Metro C5, Hatco, FWE and Carter-Hoffmann. Hot-hold temperature, humidity, elements, fans, doors and controls, fixed by techs who read the controller. 24/7 emergency dispatch."
      >
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="outline"
            className="border-primary/30 bg-primary/5 text-primary"
          >
            {site.serviceCall} service call — free with approved repair
          </Badge>
          <Badge variant="outline">Independent service — no dealer queue</Badge>
          <Badge variant="outline">HACCP hot-hold calibration</Badge>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton href="/request-dispatch?service=holding-cabinet-repair">
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
                A holding cabinet down is a food-safety problem, fast
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  A heated holding cabinet is the quiet workhorse between the
                  cook line and the plate — it parks finished food at a safe,
                  even, moist 140 to 200°F so a banquet, a hotel breakfast, a
                  hospital tray line or a catering load goes out on time. When it
                  drifts below 140°F, you are not just drying product, you are
                  holding food in the danger zone and failing your HACCP log.
                  That is why holding-cabinet calls dispatch same-day in our
                  queue across South Florida, with banquet, hotel and healthcare
                  kitchens prioritized as emergencies.
                </p>
                <p>
                  Berne Commercial Repair services every common platform —
                  Alto-Shaam Halo Heat holding and Cook-and-Hold, Winston CVap
                  wet/dry-bulb cabinets, Cres Cor banquet carts, Metro C5, Hatco,
                  FWE and Carter-Hoffmann. These are enclosed cabinets, which is a
                  different animal from the open steam tables and hot wells on our{" "}
                  <Link
                    href="/services/warming-table-repair"
                    className="font-medium text-primary hover:underline"
                  >
                    warming table repair
                  </Link>{" "}
                  page — the failure modes are hot-hold temperature, humidity
                  control and door sealing, not a water bath. Our 18 W-2
                  technicians read the digital controllers and verify cavity
                  temperature against a calibrated reference, so a vague &quot;it
                  stopped holding&quot; becomes a targeted, first-visit repair.
                </p>
                <p>
                  We are an independent commercial service company — not a
                  dealership and not an authorized agent of any holding-cabinet
                  brand. For in-warranty units, use the manufacturer&apos;s
                  network first; it is free for you. For everything out of
                  warranty, we are typically faster, carry the common wear parts
                  on the truck, and give you honest repair-vs-replace math
                  instead of a sales pitch. Browse the rest of our{" "}
                  <Link
                    href="/services"
                    className="font-medium text-primary hover:underline"
                  >
                    commercial services
                  </Link>{" "}
                  if the cook side needs attention too.
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
                    Down cabinet:
                  </span>{" "}
                  same-day across Miami-Dade, Broward and Palm Beach — seven days
                  a week.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    First-visit closure:
                  </span>{" "}
                  elements, gaskets, probes and fan motors ride on the truck.
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
                href="/request-dispatch?service=holding-cabinet-repair"
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
            Holding cabinet symptoms, likely causes &amp; typical repair costs
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
            aria-label="Holding cabinet symptoms and typical repair costs"
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
            The cook line and the hot-hold line work together. If the cabinet
            failed because the food came off the cook side wrong, start there.
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
            Know the hot-hold and humidity numbers before you call — and what the
            repair should cost when you do.
          </p>
          <div className="mt-8 grid gap-4">
            <Link
              href="/blog/holding-cabinet-temperature-food-safety"
              className="group flex flex-col gap-1.5 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <span className="text-base font-semibold text-foreground group-hover:text-primary">
                Holding Cabinet Temperature &amp; Food-Safety Repair Guide →
              </span>
              <span className="text-xs leading-relaxed text-muted-foreground">
                The hot-hold and humidity numbers a healthy cabinet must hold,
                why South Florida water scales the vapor system, and what each
                repair runs — element, controller, gasket and probe.
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
            Request holding cabinet service
          </h2>
          <p className="mt-2 text-muted-foreground">
            A dispatcher will confirm the service window shortly. Cabinets down
            in banquet, hotel and healthcare kitchens are prioritized.
          </p>
          <div className="mt-8">
            <DispatchForm defaults={{ service: "holding-cabinet-repair" }} />
          </div>
        </div>
      </section>

      <FAQSection
        faqs={FAQS}
        title="Holding & warming cabinet repair FAQ"
        description="From dispatch and the field team."
      />
      <JsonLd data={faqSchema(FAQS)} />

      <JsonLd
        data={serviceSchema({
          name: "Holding & Warming Cabinet Repair",
          description:
            "Same-day commercial holding, warming and Cook-and-Hold cabinet repair across South Florida — Alto-Shaam, Winston CVap, Cres Cor, Metro C5, Hatco, FWE and Carter-Hoffmann. Hot-hold temperature, humidity, elements, fans, doors and controls.",
          url: `${site.url}${PATH}`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Services", url: `${site.url}/services` },
          {
            name: "Holding & Warming Cabinet Repair",
            url: `${site.url}${PATH}`,
          },
        ])}
      />
    </PageShell>
  )
}

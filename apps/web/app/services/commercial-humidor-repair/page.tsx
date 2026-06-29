import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  AlertTriangle,
  Droplets,
  Snowflake,
  Timer,
  Wrench,
  Gauge,
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
 * Commercial humidor repair — specialty refrigeration / humidity-control hub.
 *
 * Static route (NOT a services.ts entry) so it never spawns phantom
 * /{city}/commercial-humidor-repair combos. EN-only: metaFor esAlternate=false.
 * Sitemap entry is wired by hand in app/sitemap.ts by the orchestrator.
 */

const PATH = "/services/commercial-humidor-repair"

export const metadata: Metadata = metaFor({
  title: "Commercial Humidor Repair Miami",
  description:
    "Walk-in & cabinet humidor repair for cigar lounges and hotels — Vigilant, Aristocrat, Cigar Oasis, Hydra. RH 68-72%, cooling & seals fixed. 4.79★. $89 call.",
  path: PATH,
  esAlternate: false,
})

const RELATED_SERVICES = [
  {
    href: "/services/commercial-refrigeration-repair",
    title: "Commercial refrigeration repair",
    teaser:
      "The cooling side of a cooled humidor is commercial refrigeration — compressors, evaporators, charge and controls across South Florida.",
  },
  {
    href: "/services/reach-in-cooler-repair",
    title: "Reach-in cooler repair",
    teaser:
      "Cabinet humidors share their hardware with reach-in coolers — same fans, gaskets, controllers and thermoelectric or compressor cooling.",
  },
  {
    href: "/services/walk-in-cooler-repair",
    title: "Walk-in cooler repair",
    teaser:
      "A walk-in humidor is a walk-in box with a humidity spec — panels, vapor barrier, door closers and refrigeration we service every week.",
  },
]

const FIELD_GUIDE = {
  href: "/blog/commercial-humidor-humidity-control-cigar-lounge",
  title: "Commercial Humidor Humidity Control: Cigar Lounge Repair",
  teaser:
    "Why a lounge humidor drifts off 70% RH — active humidification faults, cooling overshoot, cedar wicking and calibration drift — and what each fix runs in South Florida.",
}

const SYMPTOMS = [
  {
    symptom: "RH stuck low (below 65%), cigars drying and cracking",
    cause:
      "Active humidifier out of water/clogged (Cigar Oasis, Hydra) or wicking media exhausted",
    cost: "$160–$420",
    response: "Same-day",
  },
  {
    symptom: "RH overshooting (above 75%), condensation and mold risk",
    cause: "Controller miscalibration, humidifier stuck on, or poor air circulation",
    cost: "$180–$480",
    response: "Same-day",
  },
  {
    symptom: "Hygrometer / controller reading drifted from a calibrated meter",
    cause: "Sensor calibration drift or failed RH probe",
    cost: "$150–$340",
    response: "Same-day",
  },
  {
    symptom: "Cooled humidor not holding 68-70°F",
    cause: "Refrigeration fault — low charge, condenser, or thermoelectric module",
    cost: "$240–$900",
    response: "Same-day",
  },
  {
    symptom: "Water pooling on the floor of a walk-in humidor",
    cause: "Over-humidification, blocked drain, or condensation on a cold wall",
    cost: "$180–$520",
    response: "Same-day",
  },
  {
    symptom: "Door won't seal, RH won't hold in one corner",
    cause: "Gasket compression set, hinge sag, or vapor-barrier breach",
    cost: "$160–$420",
    response: "Same-day",
  },
  {
    symptom: "Dead spots — RH uneven shelf to shelf",
    cause: "Circulation fan failure or blocked airflow path",
    cost: "$180–$460",
    response: "Same-day",
  },
  {
    symptom: "Compressor cooling unit dead on an aging cooled humidor",
    cause: "End-of-life sealed system — repair-vs-replace math",
    cost: "$900–$2,600",
    response: "24–48h",
  },
]

const PROBLEMS = [
  {
    icon: Droplets,
    title: "It's a dual-band problem, not a thermostat",
    detail:
      "A humidor has to hold 68-72% RH and 68-70°F at the same time — and the two fight each other. Cool the box and RH climbs; dry it and cigars crack. Most 'my humidor is broken' calls are really a humidification system (Cigar Oasis Magna/Plus, Hydra electronic) out of balance with the cooling, not a single failed part.",
  },
  {
    icon: Snowflake,
    title: "Salt air and South Florida load are brutal",
    detail:
      "Coastal humidity pushes a cooled humidor's refrigeration hard, and salt air corrodes condensers, controllers and thermoelectric modules early. A box that held spec inland struggles here unless the cooling, vapor barrier and door seals are all tight — high-value inventory makes a slow drift expensive fast.",
  },
  {
    icon: Wrench,
    title: "Seals, sensors, fans and cedar",
    detail:
      "Door gaskets take a compression set, RH probes drift out of calibration, circulation fans die in damp service, and Spanish-cedar shelving wicks moisture unevenly when airflow is wrong. These are the high-frequency faults our techs diagnose against a calibrated reference meter on the first visit.",
  },
]

const FAQS = [
  {
    q: "Do you repair commercial humidors for cigar lounges near me, same-day?",
    a: `Yes. Berne Commercial Repair services walk-in and cabinet humidors same-day across Miami-Dade, Broward and Palm Beach, seven days a week. A drifting humidor in a lounge, hotel or tobacconist with high-value inventory is treated as a priority. The commercial service call is ${site.serviceCall} — free when you approve the repair, charged only if you decline.`,
  },
  {
    q: "What humidor systems and brands do you service?",
    a: "Walk-in and cabinet humidors from Vigilant, Aristocrat and Bass Industries, plus custom walk-in builds. On the active-humidification side we service Cigar Oasis (Magna and Plus), Hydra electronic units, and passive systems, and on cooled humidors we work Climma and EuroCave-style cooling, thermoelectric modules and conventional compressor units.",
  },
  {
    q: "What humidity and temperature should a commercial humidor hold?",
    a: "The working window is 68-72% relative humidity and 68-70°F. Tighter than that and cigars dry and crack; looser and you risk condensation, mold and beetle activity. We diagnose against a calibrated reference hygrometer because the unit's own controller is frequently the part that has drifted — see our cigar-lounge humidity-control field guide.",
  },
  {
    q: "My humidor keeps overshooting on humidity — what's wrong?",
    a: "Usually one of three things: the active humidifier is stuck on or oversized for the load, the controller/RH probe has drifted and is reading low so it keeps adding moisture, or airflow is poor so one zone climbs while another stays dry. Overshoot is the dangerous direction — condensation on cold walls breeds mold and ruins inventory, so it gets same-day attention.",
  },
  {
    q: "Are you an authorized humidor service agent?",
    a: "No — Berne is an independent commercial service company, not affiliated with Vigilant, Aristocrat, Cigar Oasis, Hydra or any humidor manufacturer. In-warranty equipment should use the factory network first; it's free for you. Out of warranty, independence works for you: same-day dispatch, no warranty queue, common parts on the truck, and honest repair-vs-replace numbers.",
  },
  {
    q: "How much does commercial humidor repair cost in South Florida?",
    a: `Most humidor tickets land $150-$520 — humidifier service, RH probe and controller calibration, door gaskets, circulation fans and drain work. Refrigeration repairs on a cooled humidor run higher, and a dead sealed system on an aging unit ($900-$2,600) becomes a repair-vs-replace conversation. The ${site.serviceCall} service call covers the diagnosis and is free with an approved repair.`,
  },
]

export default function CommercialHumidorRepairHub() {
  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Commercial Humidor Repair" },
        ]}
      />
      <PageHero
        eyebrow="Service"
        title="Commercial Humidor Repair in South Florida"
        description="Same-day repair for walk-in and cabinet humidors in cigar lounges, hotels, restaurants and tobacconists across Miami-Dade, Broward and Palm Beach. Humidity control, cooling, seals, sensors and fans — held to 68-72% RH and 68-70°F by techs who diagnose against a calibrated meter."
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
          <Badge variant="outline">Dual-band RH + temperature calibration</Badge>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton href="/request-dispatch?service=commercial-humidor-repair">
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
                When the humidor drifts, the inventory is on the clock
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  A commercial humidor is a precision box pretending to be
                  furniture. It has to hold 68-72% relative humidity and 68-70°F
                  at the same time, over a large air volume, against the worst
                  humidity load in the country. When it drifts, you don&apos;t
                  get a warning light — you get cracked wrappers, soft soggy
                  cigars, or condensation and mold, and every one of those is
                  inventory you can&apos;t sell. That is why humidor calls
                  dispatch same-day in our queue, with lounges and tobacconists
                  carrying high-end stock prioritized.
                </p>
                <p>
                  Berne Commercial Repair services every common platform —
                  walk-in and cabinet humidors from Vigilant, Aristocrat and
                  Bass Industries, custom walk-in builds, the active
                  humidification systems that run them (Cigar Oasis Magna and
                  Plus, Hydra electronic, passive setups), and the refrigeration
                  behind cooled humidors. Because the cooling side is really{" "}
                  <Link
                    href="/services/commercial-refrigeration-repair"
                    className="font-medium text-primary hover:underline"
                  >
                    commercial refrigeration
                  </Link>
                  , our EPA-certified techs read the sealed system, the
                  humidification and the controller as one circuit instead of
                  guessing at parts. See everything we cover on the{" "}
                  <Link
                    href="/services"
                    className="font-medium text-primary hover:underline"
                  >
                    full services list
                  </Link>
                  .
                </p>
                <p>
                  We are an independent commercial service company — not a
                  dealership and not an authorized agent of any humidor brand.
                  For in-warranty equipment, use the manufacturer&apos;s network
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
                    Drifting humidor:
                  </span>{" "}
                  same-day across Miami-Dade, Broward and Palm Beach — seven days
                  a week.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    First-visit closure:
                  </span>{" "}
                  humidifier, sensor, gasket and fan parts ride on the truck.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Track record:
                  </span>{" "}
                  {REPAIRS_COMPLETED_DISPLAY} services since 2015, 4.79★ from 871
                  reviews.
                </li>
              </ul>
              <LinkButton
                href="/request-dispatch?service=commercial-humidor-repair"
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
            Humidor symptoms, likely causes &amp; typical repair costs
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
            aria-label="Humidor symptoms and typical repair costs"
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
            A humidor is refrigeration with a humidity spec. These are the
            adjacent systems our techs service on the same trucks.
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
          <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
            <Gauge className="size-6 text-primary" />
            Field guide from our techs
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
            Decode the humidity faults before you call — and know what the repair
            should cost when you do.
          </p>
          <div className="mt-8">
            <Link
              href={FIELD_GUIDE.href}
              className="group flex flex-col gap-1.5 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40 sm:max-w-2xl"
            >
              <span className="text-base font-semibold text-foreground group-hover:text-primary">
                {FIELD_GUIDE.title} →
              </span>
              <span className="text-xs leading-relaxed text-muted-foreground">
                {FIELD_GUIDE.teaser}
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
            Request humidor service
          </h2>
          <p className="mt-2 text-muted-foreground">
            A dispatcher will confirm the service window shortly. Drifting
            humidors carrying high-value inventory are prioritized.
          </p>
          <div className="mt-8">
            <DispatchForm defaults={{ service: "commercial-humidor-repair" }} />
          </div>
        </div>
      </section>

      <FAQSection
        faqs={FAQS}
        title="Commercial humidor repair FAQ"
        description="From dispatch and the field team."
      />
      <JsonLd data={faqSchema(FAQS)} />

      <JsonLd
        data={serviceSchema({
          name: "Commercial Humidor Repair",
          description:
            "Same-day commercial humidor repair across South Florida — walk-in and cabinet humidors for cigar lounges, hotels and tobacconists. Humidity control, cooling, seals, sensors and fans, held to 68-72% RH and 68-70°F.",
          url: `${site.url}${PATH}`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Services", url: `${site.url}/services` },
          { name: "Commercial Humidor Repair", url: `${site.url}${PATH}` },
        ])}
      />
    </PageShell>
  )
}

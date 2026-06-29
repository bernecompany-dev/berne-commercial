import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  AlertTriangle,
  Gauge,
  Snowflake,
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
 * Beer cooler & kegerator repair — bar/pub/brewery beverage cluster.
 *
 * Covers direct-draw beer coolers, back-bar bottle coolers, kegerators and
 * keg walk-ins PLUS the draft-dispensing hardware (faucets, shanks, couplers,
 * CO2/nitro). Glycol long-draw systems are cross-linked to the existing glycol
 * field guide rather than duplicated here — this hub owns the direct-draw and
 * cooler-hardware intent.
 *
 * Static route, NOT a services.ts entry (avoids ~70 phantom /{city} combos —
 * same precedent as combi-oven-repair and medical-lab). EN-only. Sitemap and
 * services-grid wiring handled by the orchestrator.
 */

const PATH = "/services/beer-cooler-repair"

export const metadata: Metadata = metaFor({
  title: "Beer Cooler & Kegerator Repair Miami",
  description:
    "Direct-draw beer cooler, kegerator & back-bar repair across South Florida — True, Beverage-Air, Perlick, Micro Matic, Krowne. Foam & warm pours fixed. 4.79★. $89 call.",
  path: PATH,
  esAlternate: false,
})

const RELATED_SERVICES = [
  {
    href: "/services/commercial-refrigeration-repair",
    title: "Commercial refrigeration repair",
    teaser:
      "Walk-ins, reach-ins, prep tables and remote racks — the refrigeration platform your keg box and back-bar coolers share parts and failure patterns with.",
  },
  {
    href: "/services/soda-machine-repair",
    title: "Soda machine repair",
    teaser:
      "Bar guns, towers and post-mix carbonators run on the same CO2 manifold and cold-plate logic as your draft system — one truck covers both.",
  },
  {
    href: "/services/commercial-wine-cooler-repair",
    title: "Commercial wine cooler repair",
    teaser:
      "Back-bar wine and bottle coolers with tight temperature bands and glass-door gasket-and-heater issues that overlap your beer-cooler service.",
  },
]

const SYMPTOMS = [
  {
    symptom: "Every tap pours foamy across the whole bar",
    cause:
      "Keg box / cold-plate temperature too warm (above 38°F) or CO2 pressure set high",
    cost: "$160–$520",
    response: "Same-day",
  },
  {
    symptom: "Beer pours warm, box never reaches 34–38°F",
    cause: "Dirty condenser, low refrigerant, weak compressor or evap-fan fault",
    cost: "$220–$900",
    response: "Same-day",
  },
  {
    symptom: "One faucet foams, the rest pour clean",
    cause: "Warm spot at that line, worn faucet/shank or a bad coupler seal",
    cost: "$90–$260",
    response: "Same-day",
  },
  {
    symptom: "Back-bar glass door sweating / fogging",
    cause: "Failed door anti-sweat heater or compression-set gasket",
    cost: "$140–$380",
    response: "Same-day",
  },
  {
    symptom: "Compressor runs nonstop, never satisfies",
    cause: "Coastal condenser fouling, refrigerant leak or restricted metering",
    cost: "$240–$950",
    response: "Same-day",
  },
  {
    symptom: "Water pooling under the cooler or keg box",
    cause: "Clogged condensate drain, cracked pan or failed drain heater",
    cost: "$120–$340",
    response: "Same-day",
  },
  {
    symptom: "CO2 empties fast / kegs go flat in 48h",
    cause: "Regulator diaphragm leak, loose gas line or wrong set pressure",
    cost: "$110–$300",
    response: "Same-day",
  },
  {
    symptom: "No-pour, no foam — flat or dead lines",
    cause: "Empty CO2, coupler stuck, gas-line kink or frozen cold plate",
    cost: "$90–$280",
    response: "Same-day",
  },
]

const PROBLEMS = [
  {
    icon: Snowflake,
    title: "Foam is a temperature problem first",
    detail:
      "A keg box that drifts above 38°F releases CO2 in the line as foam before the beer reaches the faucet. Most 'all taps foaming' calls are a cooling fault — fouled condenser, weak compressor or a tired evaporator fan — not the faucet. We pull box and pour temps before anyone touches the tap.",
  },
  {
    icon: Gauge,
    title: "CO2 and nitro pressure drift quietly",
    detail:
      "Ales and lagers want roughly 12–14 psi; nitro and stout faucets run their own blend. A regulator diaphragm that leaks 1–2 psi over a busy month flips clean pours to foamy or flattens kegs in two days. We check set pressure and the gas manifold on the first visit.",
  },
  {
    icon: Wrench,
    title: "Salt air eats the hardware",
    detail:
      "Coastal South Florida fouls condensers fast, corrodes evaporator-fan motors, and sets glass-door gaskets and anti-sweat heaters on a short clock. Faucets, shanks and couplers wear under 24/7 bar duty. These high-frequency parts ride on the truck for first-visit closure.",
  },
]

const FAQS = [
  {
    q: "Do you repair beer coolers and kegerators near me, same-day?",
    a: `Yes. Berne Commercial Repair dispatches beer cooler, kegerator and direct-draw repair same-day across Miami-Dade, Broward and Palm Beach, seven days a week. A dead keg box or a bar full of foaming taps on a Friday night is treated as an emergency. The commercial service call is ${site.serviceCall} — free when you approve the repair, charged only if you decline.`,
  },
  {
    q: "Which beer cooler and draft brands do you service?",
    a: "Direct-draw and back-bar coolers and kegerators from True, Beverage-Air, Perlick, Krowne, Glastender and Kegco, plus draft dispensing hardware from Micro Matic and Perlick — faucets, shanks, couplers, regulators and cold plates. We work on the cooler, the refrigeration and the dispense side, not just the box.",
  },
  {
    q: "Why is every tap at my bar pouring foamy?",
    a: "When the whole bar foams, it's almost always the keg box running too warm (above 38°F) or the CO2 pressure set too high. We check box temperature, pour temperature at the faucet, and regulator pressure in that order — that sequence solves most all-taps-foaming calls before the faucet or coupler is ever suspected.",
  },
  {
    q: "Do you service long-draw glycol beer systems too?",
    a: "We service the chiller hardware, glycol bath, pump, trunk insulation and regulator side on glycol long-draw systems, and we work alongside your line-cleaning vendor. The deeper diagnostic on glycol power packs, mix ratio and trunk-line temperature lives in our glycol-chiller field guide — this page focuses on direct-draw coolers, kegerators and back-bar hardware.",
  },
  {
    q: "Are you an authorized warranty agent for these brands?",
    a: "No — Berne is an independent commercial service company, not affiliated with True, Beverage-Air, Perlick, Micro Matic or any beverage-equipment manufacturer. In-warranty units should use the factory network first; it's free for you. Out of warranty, independence works in your favor: same-day dispatch, no warranty queue, and parts on the truck.",
  },
  {
    q: "How much does beer cooler repair cost in South Florida?",
    a: `Most bar tickets land $90–$520 — faucet and coupler service, gasket and anti-sweat heater swaps, drain clears, CO2 regulator work and temperature recalibration. Compressor, refrigerant and evaporator-fan repairs run higher. The ${site.serviceCall} commercial service call covers the diagnosis and is free with an approved repair — the fee applies only if you decline.`,
  },
]

export default function BeerCoolerRepairHub() {
  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Beer Cooler & Kegerator Repair" },
        ]}
      />
      <PageHero
        eyebrow="Service"
        title="Beer Cooler & Kegerator Repair in South Florida"
        description="Same-day direct-draw beer cooler, kegerator and back-bar repair across Miami-Dade, Broward and Palm Beach — True, Beverage-Air, Perlick, Micro Matic and Krowne. Foam, warm pours, dead keg boxes and CO2 faults fixed by techs who pull box and pour temps before touching the tap."
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
          <LinkButton href="/request-dispatch?service=beer-cooler-repair">
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
                Foam is lost profit, and it starts in the cooler
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  A bar lives and dies on the pour. A keg box that drifts a few
                  degrees warm, a CO2 regulator that crept high, or a tired
                  evaporator fan turns clean pints into foaming glasses, and
                  every foamy pour is beer down the drain. That is why direct-draw
                  beer cooler and kegerator calls dispatch same-day in our queue
                  across South Florida — a bar full of foam on a busy night is an
                  emergency, not a maintenance ticket.
                </p>
                <p>
                  Berne Commercial Repair services the whole draft package: keg
                  boxes and direct-draw coolers, back-bar bottle coolers,
                  kegerators and keg walk-ins, plus the dispensing hardware —
                  faucets, shanks, couplers, cold plates, CO2 and nitro
                  regulators. We hold keg-box temperature at 34–38°F, read pour
                  temperature at the faucet, and verify head pressure before we
                  ever suspect the tap. These coolers share parts and failure
                  patterns with the rest of your refrigeration, so our{" "}
                  <Link
                    href="/services/commercial-refrigeration-repair"
                    className="font-medium text-primary hover:underline"
                  >
                    commercial refrigeration repair
                  </Link>{" "}
                  trucks already carry what most bar calls need.
                </p>
                <p>
                  We are an independent commercial service company — not a
                  dealership and not an authorized agent of any beverage brand.
                  For in-warranty units, use the manufacturer&apos;s network
                  first; it is free for you. For everything out of warranty, we
                  are typically faster, carry the common wear parts on the truck,
                  and give you honest repair-vs-replace math. Long-draw glycol
                  systems are a different animal — we cover those too, and the
                  deep diagnostic lives in our field guide below.
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
                    Foaming or down bar:
                  </span>{" "}
                  same-day across Miami-Dade, Broward and Palm Beach — seven days
                  a week.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    First-visit closure:
                  </span>{" "}
                  faucets, couplers, gaskets, fans and regulators ride on the
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
                href="/request-dispatch?service=beer-cooler-repair"
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
            Beer cooler &amp; kegerator symptoms, likely causes &amp; repair
            costs
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
            Real numbers from our South Florida bar tickets — parts plus labor,
            before any contract pricing. The {site.serviceCall} commercial
            service call covers the diagnosis and is free when you approve the
            repair — the fee applies only if you decline.
          </p>
          <p className="mt-4 text-xs text-muted-foreground md:hidden" aria-hidden>
            Swipe to see costs and dispatch times →
          </p>
          <div
            tabIndex={0}
            role="region"
            aria-label="Beer cooler and kegerator symptoms and typical repair costs"
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
            One truck, one contract — the equipment behind your bar usually
            shares parts and failure patterns with these systems.
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
            How a tech actually diagnoses foamy and warm pours on a direct-draw
            bar — temperature, pressure, hardware — before parts get thrown at
            it.
          </p>
          <div className="mt-8">
            <Link
              href="/blog/beer-cooler-kegerator-direct-draw-bar"
              className="group flex flex-col gap-1.5 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <span className="text-base font-semibold text-foreground group-hover:text-primary">
                Beer Cooler &amp; Kegerator Direct-Draw Repair for Bars →
              </span>
              <span className="text-xs leading-relaxed text-muted-foreground">
                Keg-box temperature, cold plates, CO2 and nitro pressure, foam
                and warm-pour diagnosis, and the faucet/shank/coupler and
                compressor hardware behind a clean pint.
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
            Request beer cooler service
          </h2>
          <p className="mt-2 text-muted-foreground">
            A dispatcher will confirm the service window shortly. Foaming taps
            and down keg boxes are prioritized.
          </p>
          <div className="mt-8">
            <DispatchForm defaults={{ service: "beer-cooler-repair" }} />
          </div>
        </div>
      </section>

      <FAQSection
        faqs={FAQS}
        title="Beer cooler & kegerator repair FAQ"
        description="From dispatch and the field team."
      />
      <JsonLd data={faqSchema(FAQS)} />

      <JsonLd
        data={serviceSchema({
          name: "Beer Cooler & Kegerator Repair",
          description:
            "Same-day commercial beer cooler, kegerator and direct-draw repair across South Florida — True, Beverage-Air, Perlick, Micro Matic and Krowne. Foam and warm pours, CO2/nitro pressure, faucets, couplers, compressors and gaskets.",
          url: `${site.url}${PATH}`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Services", url: `${site.url}/services` },
          { name: "Beer Cooler & Kegerator Repair", url: `${site.url}${PATH}` },
        ])}
      />
    </PageShell>
  )
}

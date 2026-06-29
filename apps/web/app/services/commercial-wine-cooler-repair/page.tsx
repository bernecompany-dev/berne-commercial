import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  AlertTriangle,
  Droplets,
  Snowflake,
  Timer,
  Waves,
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
 * Commercial wine cooler repair — specialty refrigeration / wine-storage hub.
 *
 * Static route (NOT a services.ts entry) so it never spawns phantom
 * /{city}/commercial-wine-cooler-repair combos. EN-only: metaFor
 * esAlternate=false. Sitemap entry is wired by hand in app/sitemap.ts by the
 * orchestrator.
 */

const PATH = "/services/commercial-wine-cooler-repair"

export const metadata: Metadata = metaFor({
  title: "Commercial Wine Cooler Repair Miami & South Florida",
  description:
    "Restaurant & bar wine cooler and cellar repair — Sub-Zero, EuroCave, Perlick, Vinotemp, Wine Guardian. Dual-zone temp, humidity & condensation fixed. 4.79★. $89 call.",
  path: PATH,
  esAlternate: false,
})

const RELATED_SERVICES = [
  {
    href: "/services/commercial-refrigeration-repair",
    title: "Commercial refrigeration repair",
    teaser:
      "A wine cooler is precision refrigeration — compressors, charge, evaporators and controls we service across South Florida every week.",
  },
  {
    href: "/services/reach-in-cooler-repair",
    title: "Reach-in cooler repair",
    teaser:
      "Wine display cabinets share hardware with reach-in coolers — same fans, gaskets, controllers and sealed systems.",
  },
  {
    href: "/services/beer-cooler-repair",
    title: "Beer cooler repair",
    teaser:
      "The bar's other beverage box — keg and bottle coolers behind the same bar, on the same service truck.",
  },
]

const FIELD_GUIDE = {
  href: "/blog/commercial-wine-cooler-temperature-humidity-restaurant",
  title: "Commercial Wine Cooler Temperature & Humidity: Restaurant Repair",
  teaser:
    "Why a restaurant wine cooler drifts off temperature, sweats glass doors, or dries corks — dual-zone control, anti-condensate heaters, vibration and calibration — and what each fix runs.",
}

const SYMPTOMS = [
  {
    symptom: "Not cooling to set point — whites warm, reds warm",
    cause:
      "Low refrigerant charge, condenser fouling, or a failed thermoelectric module",
    cost: "$240–$900",
    response: "Same-day",
  },
  {
    symptom: "Dual zones not separating (one zone tracks the other)",
    cause: "Zone damper, second evaporator/fan, or controller fault",
    cost: "$220–$680",
    response: "Same-day",
  },
  {
    symptom: "Glass door sweating / fogging on the inside",
    cause: "Anti-condensate (door) heater failed or door gasket leaking humid air",
    cost: "$160–$420",
    response: "Same-day",
  },
  {
    symptom: "Humidity too low — corks drying, labels lifting",
    cause: "Over-cooling drying the cabinet, humidity system or controller fault",
    cost: "$180–$480",
    response: "Same-day",
  },
  {
    symptom: "Cabinet temperature reads wrong vs a calibrated meter",
    cause: "Sensor calibration drift or failed temperature probe",
    cost: "$150–$340",
    response: "Same-day",
  },
  {
    symptom: "Excess vibration / noise (sediment risk on aged bottles)",
    cause: "Compressor mount, vibration isolation, or fan bearing wear",
    cost: "$180–$520",
    response: "Same-day",
  },
  {
    symptom: "Interior LED / display lighting out, ballast buzzing",
    cause: "LED driver/ballast or wiring fault",
    cost: "$140–$320",
    response: "Same-day",
  },
  {
    symptom: "Walk-in wine cellar cooling unit dead",
    cause: "End-of-life cellar unit (Wine Guardian, CellarPro) — repair-vs-replace",
    cost: "$900–$3,200",
    response: "24–48h",
  },
]

const PROBLEMS = [
  {
    icon: Snowflake,
    title: "Two zones, one fight",
    detail:
      "A dual-zone cooler holds whites at 45-50°F and reds at 55-65°F in the same cabinet — and when the zone damper, second evaporator or controller drifts, both zones converge and the whole list serves at the wrong temperature. Most 'my wine cooler is broken' calls are a zone-separation or charge issue, not a dead compressor.",
  },
  {
    icon: Droplets,
    title: "Humidity and glass-door sweat",
    detail:
      "Wine wants 50-70% RH so corks stay sealed — but South Florida's load fights that, and glass display doors fog or sweat when the anti-condensate heater fails or a gasket leaks. Over-cool and corks dry; under-control and condensation drips on labels. It's a balance our techs read against a calibrated meter.",
  },
  {
    icon: Waves,
    title: "Vibration, seals and 24/7 display duty",
    detail:
      "Display coolers run nonstop, so compressor mounts, vibration isolation and fan bearings wear — and vibration stirs sediment in aged bottles. Door gaskets take a compression set and LED ballasts fail in damp service. These are the high-frequency wear parts our trucks carry for first-visit closure.",
  },
]

const FAQS = [
  {
    q: "Do you repair commercial wine coolers for restaurants near me, same-day?",
    a: `Yes. Berne Commercial Repair services wine coolers, display cabinets and walk-in wine cellars same-day across Miami-Dade, Broward and Palm Beach, seven days a week. A drifting unit holding high-value inventory in a restaurant, bar or wine shop is treated as a priority. The commercial service call is ${site.serviceCall} — free when you approve the repair, charged only if you decline.`,
  },
  {
    q: "What wine cooler brands and systems do you service?",
    a: "Sub-Zero (commercial), EuroCave, Le Cache, Vinotemp, Perlick, U-Line and True wine cabinets, plus walk-in wine-cellar cooling units from Wine Guardian and CellarPro. We work both compressor-based and thermoelectric units, single- and dual-zone cabinets, and glass-door display models.",
  },
  {
    q: "What temperature and humidity should a commercial wine cooler hold?",
    a: "Whites and sparkling serve around 45-50°F, reds around 55-65°F, and long-term storage sits near 55°F — with 50-70% relative humidity to keep corks sealed. We diagnose against a calibrated reference because the cabinet's own controller is frequently the part that has drifted — see our restaurant wine-cooler temperature-and-humidity field guide.",
  },
  {
    q: "My wine cooler's glass door keeps fogging — what's wrong?",
    a: "Almost always the anti-condensate (door) heater has failed, or a door gasket is leaking humid room air against the cold glass. In South Florida's humidity this shows up fast. It's usually an economical same-day repair — heater element or gasket — and worth fixing quickly because constant condensation rots seals and damages labels.",
  },
  {
    q: "Are you an authorized wine cooler service agent?",
    a: "No — Berne is an independent commercial service company, not affiliated with Sub-Zero, EuroCave, Perlick, Vinotemp, Wine Guardian or any wine-cooler manufacturer. In-warranty equipment should use the factory network first; it's free for you. Out of warranty, independence works for you: same-day dispatch, no warranty queue, common parts on the truck, and honest repair-vs-replace math.",
  },
  {
    q: "How much does commercial wine cooler repair cost in South Florida?",
    a: `Most wine cooler tickets land $150-$680 — door heaters, gaskets, sensor and controller calibration, zone dampers, fans and LED drivers. Sealed-system refrigeration runs higher, and a dead cellar cooling unit on a walk-in ($900-$3,200) becomes a repair-vs-replace conversation. The ${site.serviceCall} service call covers the diagnosis and is free with an approved repair.`,
  },
]

export default function CommercialWineCoolerRepairHub() {
  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Commercial Wine Cooler Repair" },
        ]}
      />
      <PageHero
        eyebrow="Service"
        title="Commercial Wine Cooler Repair in South Florida"
        description="Same-day repair for commercial wine coolers, display cabinets and walk-in wine cellars in restaurants, bars, hotels and wine shops across Miami-Dade, Broward and Palm Beach. Dual-zone temperature, humidity, glass-door condensation and vibration — diagnosed against a calibrated meter."
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
          <Badge variant="outline">Dual-zone temperature calibration</Badge>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton href="/request-dispatch?service=commercial-wine-cooler-repair">
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
                When the wine cooler drifts, the list serves wrong
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  A commercial wine cooler is one of the highest-value
                  refrigeration boxes in the house — not because of the hardware,
                  but because of what&apos;s inside it. When it drifts a few
                  degrees, a sommelier serves whites flabby and reds hot, corks
                  dry on the slow-movers, and a back-bar of high-end bottles
                  quietly degrades. That is why wine-cooler calls dispatch
                  same-day in our queue across South Florida, with restaurants,
                  bars and wine shops carrying real inventory prioritized.
                </p>
                <p>
                  Berne Commercial Repair services every common platform —
                  Sub-Zero commercial, EuroCave, Le Cache, Vinotemp, Perlick,
                  U-Line and True wine cabinets, plus walk-in cellar cooling units
                  from Wine Guardian and CellarPro. Because a wine cooler is
                  precision{" "}
                  <Link
                    href="/services/commercial-refrigeration-repair"
                    className="font-medium text-primary hover:underline"
                  >
                    commercial refrigeration
                  </Link>{" "}
                  with a humidity and vibration spec on top, our EPA-certified
                  techs read the sealed system, the dual-zone control and the
                  controller as one circuit instead of guessing at parts. See
                  everything we cover on the{" "}
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
                  dealership and not an authorized agent of any wine-cooler brand.
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
                    Drifting cooler:
                  </span>{" "}
                  same-day across Miami-Dade, Broward and Palm Beach — seven days
                  a week.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    First-visit closure:
                  </span>{" "}
                  door heaters, gaskets, sensors and fans ride on the truck.
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
                href="/request-dispatch?service=commercial-wine-cooler-repair"
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
            Wine cooler symptoms, likely causes &amp; typical repair costs
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
            aria-label="Wine cooler symptoms and typical repair costs"
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
            A wine cooler is precision refrigeration. These are the adjacent
            beverage and cooling systems our techs service on the same trucks.
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
            Decode the temperature and humidity faults before you call — and know
            what the repair should cost when you do.
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
            Request wine cooler service
          </h2>
          <p className="mt-2 text-muted-foreground">
            A dispatcher will confirm the service window shortly. Drifting coolers
            and cellars holding high-value inventory are prioritized.
          </p>
          <div className="mt-8">
            <DispatchForm
              defaults={{ service: "commercial-wine-cooler-repair" }}
            />
          </div>
        </div>
      </section>

      <FAQSection
        faqs={FAQS}
        title="Commercial wine cooler repair FAQ"
        description="From dispatch and the field team."
      />
      <JsonLd data={faqSchema(FAQS)} />

      <JsonLd
        data={serviceSchema({
          name: "Commercial Wine Cooler Repair",
          description:
            "Same-day commercial wine cooler repair across South Florida — coolers, display cabinets and walk-in wine cellars for restaurants, bars and wine shops. Dual-zone temperature, humidity, condensation and vibration.",
          url: `${site.url}${PATH}`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Services", url: `${site.url}/services` },
          { name: "Commercial Wine Cooler Repair", url: `${site.url}${PATH}` },
        ])}
      />
    </PageShell>
  )
}

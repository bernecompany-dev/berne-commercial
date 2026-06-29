import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  AlertTriangle,
  Flame,
  Droplets,
  Timer,
  Zap,
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
 * Commercial sauna & steam room repair — static service hub (2026-06-28).
 *
 * Commercial-grade electric saunas, infrared rooms and steam rooms in spas,
 * hotels, gyms and country clubs — 3-phase heaters, contactors, controls,
 * high-limits and steam generators. NOT residential. Static route, NOT a
 * services.ts entry (avoids spawning ~70 phantom /{city}/commercial-sauna
 * combos). EN-only: metaFor esAlternate=false. Sitemap entry added by hand in
 * app/sitemap.ts.
 */

const PATH = "/services/commercial-sauna-repair"

export const metadata: Metadata = metaFor({
  title: "Commercial Sauna Repair Miami — Spa & Hotel | South Florida",
  description:
    "Commercial sauna & steam room repair across South Florida — Tylö/Helo, Finnleo, Amerec, Saunacore, Harvia, Mr.Steam. 3-phase heaters, controls, generators fixed. 4.79★. $89 call.",
  path: PATH,
  esAlternate: false,
})

const RELATED_SERVICES = [
  {
    href: "/services/commercial-pool-heater-repair",
    title: "Commercial Pool Heater Repair",
    teaser:
      "Spa and hotel pool/spa heaters — gas and heat-pump — the wellness-deck workhorse that sits alongside your sauna and steam room.",
  },
  {
    href: "/services/commercial-cold-plunge-repair",
    title: "Commercial Cold Plunge Repair",
    teaser:
      "Chillers, circulation and controls for cold plunge tubs — the other half of a contrast-therapy circuit in spas and recovery gyms.",
  },
]

const SYMPTOMS = [
  {
    symptom: "Sauna won't heat or only warms one bank of elements",
    cause:
      "Failed heater element (one or more phases open), or a dropped contactor leg",
    cost: "$280–$900",
    response: "Same-day",
  },
  {
    symptom: "Heater dead, control panel lit but no call for heat",
    cause: "Tripped high-limit/over-temp safety, failed contactor or relay",
    cost: "$220–$680",
    response: "Same-day",
  },
  {
    symptom: "Room overshoots or never reaches set temperature",
    cause: "Drifted thermostat/sensor or a failed digital control board",
    cost: "$240–$760",
    response: "Same-day",
  },
  {
    symptom: "Steam room makes no steam or steam is weak",
    cause:
      "Scaled steam generator, failed heating element, faulty fill solenoid or water-level probes",
    cost: "$300–$1,200",
    response: "Same-day",
  },
  {
    symptom: "Steam generator won't stop filling or floods the drain",
    cause: "Stuck fill solenoid, fouled probe rod, or auto-drain valve fault",
    cost: "$240–$620",
    response: "Same-day",
  },
  {
    symptom: "Breaker or GFCI trips on start, intermittent power loss",
    cause:
      "Element ground fault, moisture-damaged wiring, or a failing contactor",
    cost: "$260–$840",
    response: "Same-day",
  },
  {
    symptom: "Infrared room cold, one or more FAR-IR panels dark",
    cause: "Failed IR emitter panel, driver/relay or panel wiring fault",
    cost: "$280–$900",
    response: "24–48h",
  },
  {
    symptom: "Door won't seal, room slow to reach temperature",
    cause: "Door seal/gasket wear, sprung hinge, or heat-loss at the threshold",
    cost: "$160–$420",
    response: "Same-day",
  },
]

const PROBLEMS = [
  {
    icon: Zap,
    title: "Commercial saunas run on 3-phase, all day",
    detail:
      "A spa or hotel sauna heater is a 6 to 18kW three-phase load running far longer duty cycles than a home unit, so contactors weld, elements open a phase, and high-limits fatigue. We diagnose across all three phases and verify the contactor and high-limit chain — a dropped leg is the single most common reason a commercial heater quits heating.",
  },
  {
    icon: Droplets,
    title: "Steam rooms are a different machine than dry saunas",
    detail:
      "A steam room runs off a separate steam generator — Mr.Steam, Amerec, Tylö — with a heating element, fill solenoid, water-level probes and an auto-drain. South Florida water scales them fast, fouls the probes, and clogs the drain. Descaling, probe service and solenoid work keep the steam coming; a dry sauna heater never touches any of that.",
  },
  {
    icon: Flame,
    title: "Member safety and code are non-negotiable",
    detail:
      "High-limit cutoffs, GFCI protection and proper grounding are what stand between your members and a liability claim. When a heater nuisance-trips or runs hot, the answer is never to jumper a safety — it is to find the element ground fault, the moisture-damaged wiring or the failed control. We repair to code and leave the safeties working.",
  },
]

const FAQS = [
  {
    q: "Do you repair commercial saunas and steam rooms same-day near me?",
    a: `Yes. Berne Commercial Repair dispatches sauna and steam room service across Miami-Dade, Broward and Palm Beach, seven days a week — a down sauna at a hotel, spa or gym is treated as an emergency because it's lost member amenity revenue every hour. The commercial service call is ${site.serviceCall} — free when you approve the repair, charged only if you decline.`,
  },
  {
    q: "Which sauna and steam brands do you service?",
    a: "Tylö/Helo, Finnleo, Amerec, Saunacore, Polar HMI, Harvia and other commercial electric sauna heaters and controls — plus infrared (FAR-IR) rooms and steam generators including Mr.Steam, Amerec and Tylö on the steam side. We work on the heater, contactors, high-limits, thermostats, digital controls, emitters and steam generators; bench/duckboard wood and ventilation too.",
  },
  {
    q: "My sauna heater stopped getting hot — what's wrong?",
    a: "On a three-phase commercial heater the most common causes are a failed heating element (one phase open, so it warms weakly or unevenly), a tripped high-limit/over-temp safety, or a worn contactor that no longer pulls in all legs. We test across all three phases and the full safety chain on the first visit so the repair targets the real fault instead of swapping parts blind.",
  },
  {
    q: "Why is my steam room not making steam?",
    a: "Steam rooms run off a dedicated generator, and in South Florida the number-one cause is scale — a scaled element heats poorly and probes foul so the unit misreads water level. It can also be a stuck fill solenoid, a failed element, or an auto-drain fault. Descaling the generator, servicing the probes and proving the fill/drain cycle restores steam; this is separate work from a dry sauna heater.",
  },
  {
    q: "Are you an authorized Tylö, Helo or Mr.Steam service agent?",
    a: "No — Berne is an independent commercial service company, not affiliated with Tylö, Helo, Finnleo, Amerec, Saunacore, Harvia, Mr.Steam or any sauna/steam manufacturer. In-warranty equipment should use the factory network first; it's free for you. Out of warranty, independence works for you: faster dispatch, common heater and generator parts on the truck, and honest repair-vs-replace numbers.",
  },
  {
    q: "Is sauna and steam electrical work done to code?",
    a: `Yes. Commercial saunas are 3-phase loads and steam rooms are wet, high-current environments, so GFCI protection, proper grounding and a working high-limit cutoff are mandatory — we never jumper a safety to get a unit running. We repair the underlying fault and leave the protection intact for member safety and your liability coverage. The ${site.serviceCall} service call covers the diagnosis and is free with an approved repair.`,
  },
]

export default function CommercialSaunaRepairHub() {
  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Commercial Sauna Repair" },
        ]}
      />
      <PageHero
        eyebrow="Service"
        title="Commercial Sauna & Steam Room Repair in South Florida"
        description="Same-day commercial sauna and steam room repair across Miami-Dade, Broward and Palm Beach for spas, hotels, gyms and country clubs — Tylö/Helo, Finnleo, Amerec, Saunacore, Harvia and Mr.Steam. Three-phase heaters, contactors, high-limits, digital controls, infrared panels and steam generators, repaired to code. 24/7 emergency dispatch."
      >
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="outline"
            className="border-primary/30 bg-primary/5 text-primary"
          >
            {site.serviceCall} service call — free with approved repair
          </Badge>
          <Badge variant="outline">Independent service — no dealer queue</Badge>
          <Badge variant="outline">3-phase &amp; GFCI to code</Badge>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton href="/request-dispatch?service=commercial-sauna-repair">
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
                A cold sauna is amenity revenue walking out the door
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  A sauna or steam room is a headline amenity at a spa, hotel,
                  gym or country club — members and guests notice the day it goes
                  cold, and the front desk hears about it. Commercial units are
                  not scaled-up home saunas: they run 6 to 18kW three-phase
                  heaters on long, hard duty cycles, with high-limit safeties,
                  GFCI protection and digital controls that all have to keep
                  working in a wet, hot room. That is why we dispatch sauna and
                  steam calls fast across South Florida, with member-facing spa
                  and hotel rooms prioritized.
                </p>
                <p>
                  Berne Commercial Repair services every common platform — Tylö
                  and Helo, Finnleo, Amerec, Saunacore, Polar HMI and Harvia
                  electric sauna heaters and controls, FAR-IR infrared rooms, and
                  steam generators from Mr.Steam, Amerec and Tylö on the steam
                  side. A dry sauna and a steam room are genuinely different
                  machines — the steam room adds a generator, fill solenoid,
                  water-level probes and an auto-drain that South Florida water
                  scales and fouls — and our 18 W-2 technicians service both. If
                  the wellness deck also runs a heated pool or spa, our{" "}
                  <Link
                    href="/services/commercial-pool-heater-repair"
                    className="font-medium text-primary hover:underline"
                  >
                    commercial pool heater repair
                  </Link>{" "}
                  team covers that too.
                </p>
                <p>
                  We are an independent commercial service company — not a
                  dealership and not an authorized agent of any sauna or steam
                  brand. For in-warranty equipment, use the manufacturer&apos;s
                  network first; it is free for you. Out of warranty, we are
                  typically faster, carry common heater elements, contactors and
                  generator parts on the truck, and give you honest
                  repair-vs-replace math. See the rest of our{" "}
                  <Link
                    href="/services"
                    className="font-medium text-primary hover:underline"
                  >
                    commercial services
                  </Link>{" "}
                  for the rest of the wellness facility.
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
                    Down sauna:
                  </span>{" "}
                  fast dispatch across Miami-Dade, Broward and Palm Beach — seven
                  days a week.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    First-visit closure:
                  </span>{" "}
                  common heater elements, contactors and probes ride on the
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
                href="/request-dispatch?service=commercial-sauna-repair"
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
            Sauna &amp; steam symptoms, likely causes &amp; typical repair costs
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
            aria-label="Commercial sauna and steam symptoms and typical repair costs"
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
            One truck for the whole wellness deck — sauna, steam, heated pool and
            cold plunge all under one service relationship.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
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
            How a commercial sauna heater and steam generator actually fail — and
            what the repair should cost when you call.
          </p>
          <div className="mt-8 grid gap-4">
            <Link
              href="/blog/commercial-sauna-heater-control-spa-hotel"
              className="group flex flex-col gap-1.5 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <span className="text-base font-semibold text-foreground group-hover:text-primary">
                Commercial Sauna Heater &amp; Controls Repair for Spas &amp;
                Hotels →
              </span>
              <span className="text-xs leading-relaxed text-muted-foreground">
                Three-phase heater diagnosis, contactors and high-limits, digital
                controls, and the steam-generator descale that South Florida
                water makes routine — with real part costs.
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
            Request sauna &amp; steam service
          </h2>
          <p className="mt-2 text-muted-foreground">
            A dispatcher will confirm the service window shortly. Member-facing
            spa, hotel and gym rooms are prioritized.
          </p>
          <div className="mt-8">
            <DispatchForm defaults={{ service: "commercial-sauna-repair" }} />
          </div>
        </div>
      </section>

      <FAQSection
        faqs={FAQS}
        title="Commercial sauna & steam repair FAQ"
        description="From dispatch and the field team."
      />
      <JsonLd data={faqSchema(FAQS)} />

      <JsonLd
        data={serviceSchema({
          name: "Commercial Sauna & Steam Room Repair",
          description:
            "Same-day commercial sauna and steam room repair across South Florida for spas, hotels, gyms and country clubs — Tylö/Helo, Finnleo, Amerec, Saunacore, Harvia and Mr.Steam. Three-phase heaters, contactors, controls, infrared panels and steam generators, repaired to code.",
          url: `${site.url}${PATH}`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Services", url: `${site.url}/services` },
          { name: "Commercial Sauna Repair", url: `${site.url}${PATH}` },
        ])}
      />
    </PageShell>
  )
}

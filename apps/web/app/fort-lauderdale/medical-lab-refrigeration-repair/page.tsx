import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  ClipboardCheck,
  MapPin,
  ShieldCheck,
  Snowflake,
  Stethoscope,
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

/**
 * City-specific medical & lab refrigeration page (Content_Plan 2026-06-10,
 * item #27). GSC shows a live laboratory/hospital-refrigeration cluster
 * with Fort Lauderdale geo-intent (~40 impressions) landing on generic
 * pages; this consolidates it.
 *
 * Static route alongside the [city]/[service] dynamic segment — Next.js
 * predefined routes take precedence for this exact path while every other
 * /fort-lauderdale/* URL falls through to the dynamic matcher. NOT in
 * services.ts (no phantom combos). EN-only: esAlternate=false.
 */

const PATH = "/fort-lauderdale/medical-lab-refrigeration-repair"

export const metadata: Metadata = metaFor({
  title: "Medical & Lab Refrigeration Repair Fort Lauderdale",
  description:
    "Vaccine fridges, lab freezers, blood bank & ULT mechanical service in Fort Lauderdale. EPA 608 techs, audit-ready documentation, same-day. $89 call.",
  path: PATH,
  esAlternate: false,
})

const DISTRICTS = [
  {
    name: "Downtown medical core & Broward Health corridor",
    detail:
      "The hospital district along Andrews Avenue and the surrounding clinics run vaccine refrigerators, blood bank units and patient-floor nugget ice around the clock — mechanical failures here jump our dispatch queue.",
  },
  {
    name: "US-1 north — Holy Cross / Imperial Point area",
    detail:
      "Medical office buildings, imaging centers and outpatient clinics clustered along Federal Highway north of Sunrise — pharmacy fridges, reagent storage and break-area ice under one dispatch.",
  },
  {
    name: "Cypress Creek & Uptown lab corridor",
    detail:
      "Reference labs, biotech suites and research tenants around Cypress Creek Road run lab freezers and ULT units where condenser airflow in dense plant rooms is the #1 excursion trigger we clear.",
  },
  {
    name: "Las Olas & beach-side clinics",
    detail:
      "Dermatology, med-spa and urgent-care storage refrigeration east of the Intracoastal — salt air shortens condenser fan life badly; coastal accounts get corrosion checks on every visit.",
  },
  {
    name: "Senior living & rehab facilities",
    detail:
      "Assisted living and rehab campuses across the city — medication refrigerators with documentation formatted for survey readiness, plus the cafeteria cold side.",
  },
  {
    name: "Veterinary & dental practices",
    detail:
      "Vaccine and pharmaceutical storage in vet and dental offices citywide — same mechanical scope, same audit-ready paperwork, sized for small practices.",
  },
]

const SYMPTOMS = [
  {
    symptom: "Vaccine refrigerator alarming on excursion",
    cause: "Door gasket leak, condenser airflow, or controller drift",
    cost: "$120–$420",
    response: "Emergency",
  },
  {
    symptom: "Lab freezer / ULT running compressors nonstop",
    cause: "Dirty condenser or plant-room ambient too high",
    cost: "$180–$900",
    response: "Same-day",
  },
  {
    symptom: "Unit drifts out of range during clinic hours",
    cause: "Blocked airflow or ambient heat load in the storage room",
    cost: "$120–$320",
    response: "Same-day",
  },
  {
    symptom: "Compressor short-cycling or failing to start",
    cause: "Start relay/capacitor wear — days from full failure",
    cost: "$140–$380",
    response: "Same-day",
  },
  {
    symptom: "Pharmacy nugget ice machine down",
    cause: "Auger drivetrain or water-distribution failure",
    cost: "$300–$600",
    response: "Same-day",
  },
  {
    symptom: "Temperature uneven shelf to shelf",
    cause: "Evaporator fan failure compromising forced-air uniformity",
    cost: "$150–$340",
    response: "Same-day",
  },
]

const FAQS = [
  {
    q: "How fast can you reach a Fort Lauderdale clinic on a refrigeration excursion?",
    a: "Critical medical refrigeration jumps the dispatch queue — same-day citywide, typically within hours during business hours. Our Broward routes run through Fort Lauderdale daily, so a downtown clinic and a Cypress Creek lab get the same response. Run your excursion protocol in parallel: move inventory to backup storage and document the window while we drive.",
  },
  {
    q: "Do you service laboratory freezers and -80°C ULT units in Fort Lauderdale?",
    a: "Yes — mechanical refrigeration service on Thermo Scientific, PHCbi and Stirling Ultracold ULT units and standard -20°C lab freezers: condenser airflow restoration, first-stage cascade diagnostics, gaskets and vacuum-relief service. Validation after repair stays with your biomed provider — we coordinate at that boundary rather than blur it.",
  },
  {
    q: "Is your documentation usable for CDC VFC and Joint Commission audits?",
    a: "Yes. Every ticket records serial number, work performed, parts with manufacturer information, before/after temperature readings and technician sign-off, delivered as PDF for your QA chain. We are a mechanical service company — device validation and calibration certification remain with your biomed group.",
  },
  {
    q: "Which medical refrigeration brands do you repair?",
    a: "Helmer, Thermo Scientific, Migali Scientific, Follett, ABS, So-Low and VWR on the medical side; Follett, Hoshizaki, Manitowoc and Scotsman on pharmacy and patient-floor ice; True, Traulsen and Turbo Air on the cafeteria cold side. EPA Section 608-certified techs across all of it.",
  },
  {
    q: "What does a service call cost in Fort Lauderdale?",
    a: "$89 commercial service call, applied toward the approved repair — the same flat structure as every Berne dispatch. Preventive contracts for clinics typically run $600-$1,100/year for two units including quarterly visits and audit-format documentation.",
  },
  {
    q: "Are your technicians cleared for clinical areas?",
    a: "Healthcare-route techs are background-screened, badge-ready and HIPAA-aware for patient-care areas. COI, W-9, EPA 608 and license documents are downloadable from our credentials page or already on file with the common vendor-management portals.",
  },
]

export default function FortLauderdaleMedicalLabPage() {
  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Service areas", href: "/service-areas" },
          { name: "Fort Lauderdale", href: "/fort-lauderdale" },
          { name: "Medical & Lab Refrigeration" },
        ]}
      />
      <PageHero
        eyebrow="Broward County"
        title="Medical & Lab Refrigeration Repair in Fort Lauderdale, FL"
        description="Vaccine refrigerators, blood bank and reagent storage, laboratory freezers, ULT units and pharmacy ice — mechanical refrigeration service for Fort Lauderdale hospitals, clinics, labs and senior-living facilities, with the documentation healthcare QA actually requires."
      >
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="outline"
            className="border-primary/30 bg-primary/5 text-primary"
          >
            <Stethoscope className="mr-1 size-3.5" /> Healthcare dispatch
          </Badge>
          <Badge variant="outline">
            Commercial service call: {site.serviceCall}
          </Badge>
          <Badge variant="outline">EPA Section 608 certified</Badge>
          <Badge variant="outline">Audit-ready documentation</Badge>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton href="/request-dispatch?topic=medical-refrigeration">
            Request service <ArrowRight className="size-4" />
          </LinkButton>
          <AnchorButton href={site.phoneHref} variant="outline">
            Call {site.phone}
          </AnchorButton>
        </div>
      </PageHero>

      {/* Local context */}
      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold tracking-tight">
                Laboratory &amp; hospital refrigeration in Fort Lauderdale —
                how we work the city
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  Fort Lauderdale concentrates more healthcare refrigeration
                  per square mile than anywhere else in Broward: the downtown
                  hospital district and its satellite clinics, the medical
                  office corridor running up Federal Highway past Imperial
                  Point, the reference labs and biotech tenants around Cypress
                  Creek, and a long tail of urgent care, dental, veterinary
                  and senior-living facilities in between. Every one of them
                  depends on refrigeration that is mechanically ordinary and
                  operationally critical — a vaccine fridge is a compressor,
                  a condenser, a controller and gaskets, holding inventory
                  worth a hundred times the repair bill.
                </p>
                <p>
                  That is the gap we close. Biomedical engineering groups
                  handle validation and regulated device functions but do not
                  replace compressors or find refrigerant leaks; general
                  appliance companies walk away from anything labeled
                  &quot;medical.&quot; Berne services the mechanical
                  refrigeration in between — vaccine and pharmacy
                  refrigerators, blood bank and reagent storage, -20°C lab
                  freezers and -80°C ULT units, patient-floor nugget ice and
                  the cafeteria cold side — with EPA 608-certified,
                  background-screened technicians and service tickets
                  formatted for VFC, Joint Commission and CAP/CLIA audit
                  response.
                </p>
                <p>
                  The Fort Lauderdale-specific pattern from our tickets: heat
                  and salt. Lab equipment packed into closets and dense plant
                  rooms west of downtown trips high-temperature excursions
                  every summer when condenser airflow is blocked; east of the
                  Intracoastal, salt air corrodes condenser fan motors years
                  ahead of schedule. Both are preventable — quarterly
                  preventive visits catch the airflow and corrosion failures
                  before the 2 a.m. alarm call, which is why most of our Fort
                  Lauderdale healthcare accounts run PM contracts rather than
                  emergency-only relationships.
                </p>
                <p>
                  Dispatch runs from our Broward routes seven days a week —
                  the same 18 W-2 technicians, the same {site.serviceCall}{" "}
                  service call applied toward the approved repair, and the
                  same rule on every healthcare ticket: critical refrigeration
                  goes first, and the paperwork is done before the truck
                  leaves the parking lot.
                </p>
              </div>
            </div>
            <Card className="h-fit gap-3 p-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                <Timer className="size-4" /> Response expectations
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">
                    Critical excursions:
                  </span>{" "}
                  emergency queue, same-day — typically within hours in
                  business hours.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Non-critical units:
                  </span>{" "}
                  same-day to next business day.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Documentation:
                  </span>{" "}
                  PDF service report with before/after readings on every
                  ticket.
                </li>
              </ul>
              <LinkButton
                href="/request-dispatch?topic=medical-refrigeration"
                className="mt-3"
              >
                Request service
              </LinkButton>
            </Card>
          </div>
        </div>
      </section>

      {/* Where we work */}
      <section className="border-b border-border/60 bg-accent/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Where we work in Fort Lauderdale
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DISTRICTS.map((d) => (
              <Card key={d.name} className="gap-2 p-5">
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                  <div>
                    <div className="text-sm font-semibold">{d.name}</div>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {d.detail}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Symptom table */}
      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Symptoms, likely causes &amp; typical costs
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
            Real numbers from our Broward healthcare tickets — parts plus
            labor. The {site.serviceCall} service call covers diagnosis and is
            applied toward an approved repair.
          </p>
          <div className="mt-6 overflow-x-auto rounded-xl border border-border">
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

      {/* Compliance + vendor block */}
      <section className="border-b border-border/60 bg-accent/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
                <ClipboardCheck className="size-6 text-primary" />
                Documentation built for audits
              </h2>
              <p className="mt-4 text-muted-foreground">
                In healthcare, an undocumented repair is an audit finding.
                Every Berne healthcare ticket records serial number, work
                performed, parts with manufacturer information, before/after
                temperature readings and technician sign-off — delivered as
                PDF, in formats appropriate for CDC VFC audit response, Joint
                Commission documentation and CAP/CLIA-adjacent QA chains.
              </p>
              <p className="mt-3 text-muted-foreground">
                We stay out of regulated scope honestly: device validation,
                calibration certification and USP 797/800 compounding-pharmacy
                work belong to your biomed and specialty vendors. We
                coordinate at that boundary instead of blurring it.
              </p>
            </div>
            <div>
              <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
                <ShieldCheck className="size-6 text-primary" />
                Vendor-management ready
              </h2>
              <p className="mt-4 text-muted-foreground">
                COI, W-9, EPA Section 608, license and workers&apos;-comp
                documents are downloadable from our{" "}
                <Link
                  href="/credentials"
                  className="font-medium text-primary hover:underline"
                >
                  credentials page
                </Link>{" "}
                and on file with the common procurement portals.
                Healthcare-route technicians are background-screened,
                badge-ready and HIPAA-aware. 18 W-2 technicians, 29,000+
                completed services since 2015, 4.79★ from 871 reviews.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Link
                  href="/services/medical-lab-refrigeration-repair"
                  className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/10"
                >
                  Medical &amp; lab refrigeration — full service page →
                </Link>
                <Link
                  href="/fort-lauderdale"
                  className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/10"
                >
                  All commercial repair in Fort Lauderdale →
                </Link>
                <Link
                  href="/industries/healthcare"
                  className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/10"
                >
                  Healthcare industry coverage →
                </Link>
                <Link
                  href="/fort-lauderdale/commercial-refrigeration-repair"
                  className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/10"
                >
                  Commercial refrigeration repair in Fort Lauderdale →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dispatch form */}
      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Request medical refrigeration service in Fort Lauderdale
          </h2>
          <p className="mt-2 text-muted-foreground">
            A dispatcher will confirm the service window shortly. Critical
            refrigeration is prioritized.
          </p>
          <div className="mt-8">
            <DispatchForm defaults={{ city: "Fort Lauderdale" }} />
          </div>
        </div>
      </section>

      <FAQSection
        faqs={FAQS}
        title="Fort Lauderdale medical & lab refrigeration FAQ"
        description="From healthcare dispatch and the Broward route techs."
      />

      <JsonLd
        data={serviceSchema({
          name: "Medical & Lab Refrigeration Repair in Fort Lauderdale, FL",
          description:
            "Mechanical refrigeration service for vaccine refrigerators, blood bank and reagent storage, laboratory freezers, ULT units and pharmacy ice in Fort Lauderdale — with audit-ready documentation.",
          url: `${site.url}${PATH}`,
          city: "Fort Lauderdale",
        })}
      />
      <JsonLd data={faqSchema(FAQS)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Service Areas", url: `${site.url}/service-areas` },
          { name: "Fort Lauderdale", url: `${site.url}/fort-lauderdale` },
          {
            name: "Medical & Lab Refrigeration",
            url: `${site.url}${PATH}`,
          },
        ])}
      />
    </PageShell>
  )
}

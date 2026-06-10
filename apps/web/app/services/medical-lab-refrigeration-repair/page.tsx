import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  ClipboardCheck,
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
 * Dedicated medical & lab refrigeration service page (wave-2, 2026-06-10).
 *
 * GSC showed a ~50-impression healthcare cluster (hospital refrigeration
 * repair, laboratory refrigeration fort lauderdale, medical facility
 * refrigerator repair, biomedical refrigeration) landing on the generic
 * /industries/healthcare page at pos 24-70. This page consolidates that
 * intent. Static route deliberately — NOT an entry in services.ts, so it
 * does not spawn 140 phantom /{city}/medical-… combo routes (that decision
 * is parked with Eugene). EN-only: metaFor esAlternate=false.
 */

const PATH = "/services/medical-lab-refrigeration-repair"

export const metadata: Metadata = metaFor({
  title: "Medical & Lab Refrigeration Service Miami",
  description:
    "Vaccine fridges, blood bank & reagent storage, lab freezers, ULT mechanical service across South Florida. EPA 608, audit-ready documentation. $89 call.",
  path: PATH,
  esAlternate: false,
})

const EQUIPMENT = [
  {
    name: "Vaccine & pharmacy refrigerators",
    brands: "Helmer, Migali Scientific, Follett, ABS, So-Low",
    detail:
      "Compressor and start components, controllers and probes verified against your data logger, door gaskets, defrost systems — with CDC VFC-aware documentation.",
  },
  {
    name: "Blood bank & reagent storage",
    brands: "Helmer, Thermo Scientific, VWR",
    detail:
      "Mechanical refrigeration service on monitored units; service tickets formatted for the facility QA chain. Validation stays with your biomed group — we coordinate, not pretend.",
  },
  {
    name: "Lab freezers (-20°C) & ULT (-80°C)",
    brands: "Thermo Scientific, PHCbi (Panasonic), Stirling Ultracold",
    detail:
      "First-stage cascade diagnostics, condenser airflow restoration (the #1 ULT failure trigger in warm rooms), gasket and vacuum-relief service.",
  },
  {
    name: "Pharmacy & patient-floor ice",
    brands: "Follett, Hoshizaki, Manitowoc, Scotsman",
    detail:
      "Nugget pharmacy ice and nourishment-station machines — production failures, sanitization cycles with documented chemical batch, infection-control discharge tests on request.",
  },
  {
    name: "Walk-in cold rooms",
    brands: "Bally, Master-Bilt, Kolpak, Polar King",
    detail:
      "Pharmacy and central-kitchen cold rooms — defrost systems, condensing units, door heaters, panel assessments on aging boxes.",
  },
  {
    name: "Cafeteria & foodservice refrigeration",
    brands: "True, Traulsen, Turbo Air, Beverage-Air",
    detail:
      "Patient tray-line and retail cafeteria equipment under the same dispatch — one accountable vendor across the facility's refrigeration.",
  },
]

const SYMPTOMS = [
  {
    symptom: "Vaccine refrigerator alarming on temperature excursion",
    cause: "Door gasket leak, condenser airflow, or controller calibration",
    cost: "$120–$420",
    response: "Emergency",
  },
  {
    symptom: "ULT (-80°C) running compressors continuously",
    cause: "Dirty condenser, room ambient too high, or first-stage leak",
    cost: "$180–$900",
    response: "Same-day",
  },
  {
    symptom: "Unit drifting out of range during clinic hours only",
    cause: "Blocked condenser airflow or ambient heat load in the room",
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
    symptom: "Pharmacy nugget ice machine not producing",
    cause: "Auger drivetrain or water-distribution failure",
    cost: "$300–$600",
    response: "Same-day",
  },
  {
    symptom: "Cabinet temperature uneven shelf to shelf",
    cause: "Evaporator fan failure compromising forced-air uniformity",
    cost: "$150–$340",
    response: "Same-day",
  },
]

const FAQS = [
  {
    q: "Do you service Helmer and Thermo Scientific medical refrigeration?",
    a: "Yes — on the mechanical refrigeration side: compressors, refrigerant circuits (EPA Section 608), controls, gaskets, fans and defrost systems. Anything that crosses into validated medical-device scope is coordinated with your biomed group rather than worked around.",
  },
  {
    q: "Is your documentation usable for CDC VFC or Joint Commission audits?",
    a: "Yes. Service tickets include serial number, work performed, parts with manufacturer info, before/after temperature readings, technician credentials and sign-off, delivered in PDF for your QA chain. We do not provide medical-device validation — that is a regulated activity outside mechanical scope.",
  },
  {
    q: "How fast do you respond to a vaccine refrigerator excursion?",
    a: "Critical refrigeration jumps the dispatch queue — same-day across Miami-Dade, Broward and Palm Beach, typically within hours during business hours. Run your excursion protocol in parallel: move inventory to backup storage and document the excursion window; we repair while you preserve the chain.",
  },
  {
    q: "Are your technicians cleared for clinical areas?",
    a: "Healthcare-route techs are background-screened, badge-ready, and trained in basic HIPAA awareness for patient-care areas. COI, W-9 and license documents are available for your vendor-management system — see our credentials page.",
  },
  {
    q: "Do you repair -80°C ultra-low freezers?",
    a: "We service the mechanical refrigeration on Thermo Scientific, PHCbi and Stirling Ultracold ULT units — condenser airflow, first-stage cascade diagnostics, gaskets and vacuum-relief service. Biomed validation after repair remains with your biomed provider.",
  },
  {
    q: "What does the service call cost?",
    a: "$89 commercial service call, applied toward the approved repair — same as every Berne commercial dispatch. Preventive contracts for clinics typically run $600-$1,100/year for two units including quarterly visits.",
  },
  {
    q: "Can you take over preventive maintenance for a clinic or lab fleet?",
    a: "Yes — quarterly preventive visits (condenser cleaning, gasket inspection, controller verification against your logger, compressor amperage trend) with documentation aligned to your audit format. Multi-site healthcare accounts get consolidated reporting.",
  },
]

export default function MedicalLabRefrigerationPage() {
  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Medical & Lab Refrigeration" },
        ]}
      />
      <PageHero
        eyebrow="Service"
        title="Medical & Lab Refrigeration Service in South Florida"
        description="Vaccine refrigerators, blood bank and reagent storage, lab freezers, ULT units and pharmacy ice — mechanical refrigeration service with the documentation healthcare QA actually requires. Hospitals, clinics, labs and senior-living facilities across Miami-Dade, Broward and Palm Beach."
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

      {/* Why this exists / the vendor gap */}
      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold tracking-tight">
                The vendor gap we close
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  Medical and lab refrigeration sits between two vendor worlds.
                  Biomedical engineering groups handle validation and anything
                  classified as a regulated medical-device function — but they
                  do not replace compressors, find refrigerant leaks, or fix
                  door gaskets. General HVAC and appliance companies do — but
                  they walk away from anything labeled &quot;medical,&quot; and
                  their carbon-copy invoices are useless to your QA chain.
                </p>
                <p>
                  A vaccine refrigerator, a blood bank unit, a reagent fridge
                  or a -80°C freezer is mechanically a refrigeration system
                  built to extraordinary control tolerances. The failures that
                  destroy inventory — compressors, condensers, fans, gaskets,
                  controls — are mechanical failures. Berne services exactly
                  that scope, with EPA 608-certified, background-screened
                  techs and service documentation formatted for VFC, Joint
                  Commission and CAP/CLIA audit response, and coordinates with
                  your biomed group at the validation boundary.
                </p>
                <p>
                  The number-one preventable excursion cause in our ticket
                  history is unglamorous: ambient heat and blocked condenser
                  airflow in storage closets and over-filled freezer rooms.
                  Quarterly preventive visits catch it before the 2 a.m.
                  alarm.
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
                    Critical refrigeration excursions:
                  </span>{" "}
                  emergency queue, same-day — typically within hours in
                  business hours.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Non-critical units & cafeteria equipment:
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

      {/* Equipment grid */}
      <section className="border-b border-border/60 bg-accent/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Equipment we service
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {EQUIPMENT.map((e) => (
              <Card key={e.name} className="gap-2 p-5">
                <div className="flex items-start gap-2">
                  <Snowflake className="mt-0.5 size-4 shrink-0 text-primary" />
                  <div>
                    <div className="text-sm font-semibold">{e.name}</div>
                    <div className="mt-1 text-xs font-medium text-primary/80">
                      {e.brands}
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {e.detail}
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
            Real numbers from our healthcare tickets — parts plus labor. The{" "}
            {site.serviceCall} service call covers diagnosis and is applied
            toward an approved repair.
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

      {/* Compliance block */}
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
                temperature readings, technician credentials and sign-off —
                delivered as PDF for your QA chain, in formats appropriate for
                CDC VFC audit response and Joint Commission documentation.
              </p>
              <p className="mt-3 text-muted-foreground">
                We stay out of regulated scope honestly: device validation,
                calibration certification against standards, and USP 797/800
                compounding-pharmacy work belong to your biomed and specialty
                vendors. We coordinate at that boundary instead of blurring
                it.
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
                and on file with the common procurement portals (Compliance
                Depot, NetVendor, RealPage). Healthcare-route technicians are
                background-screened, badge-ready and HIPAA-aware for
                clinical-area access. 18 W-2 technicians, 11 years, 29,000+
                completed services.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Link
                  href="/fort-lauderdale/medical-lab-refrigeration-repair"
                  className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/10"
                >
                  Medical &amp; lab refrigeration in Fort Lauderdale →
                </Link>
                <Link
                  href="/industries/healthcare"
                  className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/10"
                >
                  Healthcare industry page →
                </Link>
                <Link
                  href="/services/commercial-refrigeration-repair"
                  className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/10"
                >
                  Commercial refrigeration repair →
                </Link>
                <Link
                  href="/blog/healthcare-medical-refrigeration-vaccine-compliance"
                  className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/10"
                >
                  Vaccine fridge compliance guide →
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
            Request medical refrigeration service
          </h2>
          <p className="mt-2 text-muted-foreground">
            A dispatcher will confirm the service window shortly. Critical
            refrigeration is prioritized.
          </p>
          <div className="mt-8">
            <DispatchForm />
          </div>
        </div>
      </section>

      <FAQSection
        faqs={FAQS}
        title="Medical & lab refrigeration FAQ"
        description="From healthcare dispatch and the refrigeration route techs."
      />

      <JsonLd
        data={serviceSchema({
          name: "Medical & Lab Refrigeration Service",
          description:
            "Mechanical refrigeration service for vaccine refrigerators, blood bank and reagent storage, lab freezers, ULT units and pharmacy ice across South Florida — with audit-ready documentation.",
          url: `${site.url}${PATH}`,
        })}
      />
      <JsonLd data={faqSchema(FAQS)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Services", url: `${site.url}/services` },
          {
            name: "Medical & Lab Refrigeration",
            url: `${site.url}${PATH}`,
          },
        ])}
      />
    </PageShell>
  )
}

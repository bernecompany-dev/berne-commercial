import type { Metadata } from "next"
import Link from "next/link"
import { site } from "@/lib/site"
import { metaFor } from "@/lib/seo"

// metaFor keeps the hreflang cluster (en/es/x-default) symmetric with the
// ES counterpart, which also uses metaFor.
export const metadata: Metadata = metaFor({
  title: "Terms of Service",
  description: `Service scope, dispatch, pricing, warranty, payment, NDA and vendor terms for ${site.name} commercial customers.`,
  path: "/terms",
})

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <nav className="mb-6 flex items-center gap-2 text-xs text-muted-foreground" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span aria-hidden>/</span>
        <span className="text-foreground/80">Terms</span>
      </nav>
      <h1 className="text-4xl font-semibold tracking-tight">Terms of Service</h1>
      <p className="mt-3 text-sm text-muted-foreground">Last updated: 2026-05-20</p>

      <div className="mt-10 space-y-6 text-base leading-relaxed">
        <p>
          These terms govern commercial equipment repair service provided by{" "}
          {site.name} ("we," "us," "our") to your business ("Customer"). By
          submitting a dispatch request, accepting a scheduled visit, or
          issuing a purchase order to us, you agree to these terms. Where a
          signed Master Service Agreement is in effect, the MSA controls to
          the extent of any conflict.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">1. Service scope</h2>
        <p>
          We provide on-site commercial equipment diagnostic, repair, and
          maintenance service across Miami-Dade, Broward, Palm Beach, and
          surrounding South Florida counties. Equipment categories include
          commercial refrigeration (walk-ins, prep tables, ice machines, deep
          freeze), restaurant equipment (ranges, ovens, fryers, salamanders,
          steamers, dishwashers), commercial laundry, and back-of-house
          systems for restaurants, hotels, healthcare, multifamily, and
          production facilities.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">2. Dispatch and response</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>Emergency dispatch is offered same-day where capacity allows. Standard windows are typically 2 hours.</li>
          <li>After-hours and weekend dispatch are available with a premium rate; quoted on request.</li>
          <li>We confirm the service window by phone before dispatching a truck.</li>
          <li>Customer must designate an on-site contact authorized to grant access, approve repairs, and sign the work order.</li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">3. Service-call fee and pricing</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>The commercial service-call (diagnostic) fee is <strong>{site.serviceCall}</strong>. It is waived in full if you approve the repair; you pay the fee only if you decline the repair.</li>
          <li>Repair pricing is quoted flat-rate or time-and-materials, disclosed in writing before work begins.</li>
          <li>Parts costs are disclosed upfront. Special-order, OEM-only, or expedited parts may require a deposit.</li>
          <li>The on-site contact authorizes repairs in writing (signed estimate or digital work order) before parts are ordered or labor begins.</li>
          <li>For accounts with a signed MSA, pricing follows the rate schedule in the MSA.</li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">4. Warranty</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li><strong>90-day workmanship warranty</strong> on labor of any completed repair.</li>
          <li>Manufacturer warranty on OEM parts as supplied (typically 1 year).</li>
          <li>Warranty is void if the equipment is modified or serviced by another vendor after our repair, if the failure is unrelated to the original work, or if the equipment was damaged by water, electrical surge, abuse, or pest activity.</li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">5. Customer responsibilities</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>Provide reasonable access to the equipment, electrical disconnect, and any required isolation valves.</li>
          <li>Maintain refrigerant logs and ammonia/CO₂ reporting where applicable; we will document our work but the underlying log obligation remains with the operator.</li>
          <li>Disclose known safety hazards (gas leaks, electrical faults, slip hazards) before our technician arrives.</li>
          <li>Notify us promptly of warranty issues so we can re-dispatch under the warranty period.</li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">6. Vendor onboarding, COI, and confidentiality</h2>
        <p>
          For procurement-onboarded accounts we provide W-9, EPA Section 608
          certification, current Certificate of Insurance naming the Customer
          as additional insured on request, and any required vendor-portal
          registrations. We will sign Customer-provided NDAs and routinely
          observe confidentiality with respect to floor plans, equipment
          inventory, recipes, occupancy data, and any other operational detail
          observed on site, regardless of whether an NDA is in force.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">7. Payment terms</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>Standard payment terms: Net 15 for invoiced accounts; due on completion for one-off visits without an MSA.</li>
          <li>Accepted payment: ACH, check, credit/debit card, Zelle.</li>
          <li>Late balances may accrue 1.5% per month interest after 30 days.</li>
          <li>Returned-payment fee: $50 per occurrence.</li>
          <li>Disputed invoices must be raised in writing within 15 days of invoice date; otherwise the invoice is deemed accepted.</li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">8. Cancellation and no-show</h2>
        <p>
          Customer may cancel or reschedule a non-emergency visit at no charge
          up to 2 hours before the arrival window. Cancellations inside that
          window or no-shows when the technician arrives may incur a trip fee
          equal to the service-call rate, covering dispatch time.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">9. Limitation of liability</h2>
        <p>
          Our maximum liability for any claim arising from a service visit is
          limited to the amount Customer paid for that visit, except as
          required by Florida law. We are not liable for consequential damages
          (food spoilage, business interruption, lost room nights, lost
          revenue) except where caused by our gross negligence. Where a signed
          MSA exists, the liability provisions of the MSA control.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">10. Insurance</h2>
        <p>
          We maintain General Liability and Workers' Compensation coverage at
          industry-standard limits. A current COI is available on request from{" "}
          <a className="text-primary hover:underline" href={`mailto:${site.email}`}>{site.email}</a>.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">11. Dispute resolution</h2>
        <p>
          Florida law governs these terms. Disputes that cannot be resolved
          directly with our dispatch and operations team will be submitted to
          binding arbitration in Broward County, Florida, before any court
          action. Each party bears its own arbitration costs unless the
          arbitrator awards otherwise. Where a signed MSA includes a different
          venue or process, that provision controls.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">12. Updates</h2>
        <p>
          We may update these terms; material changes are posted here with a
          new "Last updated" date. For MSA-governed accounts, change-control
          follows the MSA.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">Contact</h2>
        <p>
          Email{" "}
          <a className="text-primary hover:underline" href={`mailto:${site.email}`}>{site.email}</a>{" "}
          · phone{" "}
          <a className="text-primary hover:underline" href={site.phoneHref}>{site.phone}</a>.
        </p>
        <p className="text-xs text-muted-foreground">
          See also: <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>{" "}
          · <Link href="/cookies" className="hover:text-primary">Cookie Policy</Link>
        </p>
      </div>
    </article>
  )
}

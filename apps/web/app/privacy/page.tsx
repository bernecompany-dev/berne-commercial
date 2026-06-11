import type { Metadata } from "next"
import Link from "next/link"
import { site } from "@/lib/site"
import { metaFor } from "@/lib/seo"

// metaFor keeps the hreflang cluster (en/es/x-default) symmetric with the
// ES counterpart, which also uses metaFor.
export const metadata: Metadata = metaFor({
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects business and contact information from commercial customers and site visitors.`,
  path: "/privacy",
})

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <nav className="mb-6 flex items-center gap-2 text-xs text-muted-foreground" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span aria-hidden>/</span>
        <span className="text-foreground/80">Privacy</span>
      </nav>
      <h1 className="text-4xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="mt-3 text-sm text-muted-foreground">Last updated: 2026-05-20</p>

      <div className="mt-10 space-y-6 text-base leading-relaxed">
        <p>
          {site.name} ("we," "us," "our") operates a commercial equipment
          repair service for restaurants, hotels, property managers, healthcare
          facilities, production kitchens, and other South Florida businesses.
          This policy explains what information we collect when you submit a
          dispatch request through{" "}
          <a className="text-primary hover:underline" href={site.url}>{site.url}</a>,
          send a purchase order, or contact us by phone or email — and how we
          handle it.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">What we collect</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Business contact data</strong> — company name, location
            name, billing address, on-site contact (name, role, phone, email),
            and after-hours emergency contact for dispatch.
          </li>
          <li>
            <strong>Service request data</strong> — equipment type, brand,
            model, serial, error codes, prior service notes, on-site access
            instructions, urgency window, and your free-text issue description.
          </li>
          <li>
            <strong>Vendor / procurement data</strong> — W-9, Certificate of
            Insurance request, vendor onboarding forms, ACH/check banking
            details you supply for payables, and any NDA or master service
            agreement you send for execution.
          </li>
          <li>
            <strong>Technical data</strong> — anonymized IP address, browser
            type, pages visited, and referral source via Google Analytics 4.
          </li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">How we use it</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Dispatch a qualified technician and complete the requested service.</li>
          <li>Send confirmations, ETA updates, post-visit reports, and invoices to the contacts you designate.</li>
          <li>Maintain warranty and service-history records for your equipment so the next visit starts with context.</li>
          <li>Provide vendor-onboarding documentation (COI, W-9, EPA 608 certificates) to your procurement team.</li>
          <li>Improve our service through aggregate (non-identifying) analytics on which industries and equipment types we serve.</li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">Confidentiality and NDAs</h2>
        <p>
          For hospitality, healthcare, and enterprise clients we routinely sign
          mutual NDAs that cover floor plans, equipment inventory, kitchen
          recipes, occupancy data, and any information our technicians observe
          on site. Where an NDA is in force, it overrides this policy to the
          extent of any conflict. Even without a signed NDA, we treat all
          on-site observations as confidential by default — our technicians do
          not photograph customer interiors, equipment, or staff without
          written authorization on a per-visit basis.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">What we do not do</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>We do not sell, rent, or trade business contact information.</li>
          <li>We do not share equipment inventory or service history with competitors, brokers, or marketing lists.</li>
          <li>We do not run third-party advertising trackers on this site.</li>
          <li>We do not send unsolicited marketing email or SMS; communications relate to your requested service or active vendor relationship only.</li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">Third parties we use</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li><strong>Resend</strong> — transactional email delivery for dispatch confirmations and lead notifications.</li>
          <li><strong>Vercel</strong> — site hosting. Request logs retained ~30 days.</li>
          <li><strong>Google Analytics 4</strong> — aggregate site analytics with anonymized IP.</li>
          <li><strong>HousecallPro</strong> — dispatch CRM; stores work-order, equipment, and visit history.</li>
          <li><strong>Stripe / Square</strong> — payment processing for card transactions.</li>
          <li><strong>Google Maps</strong> — embedded maps on service-area pages.</li>
        </ul>
        <p>
          Each vendor is bound by its own terms; we use them strictly for the
          operational purpose listed above and do not authorize them to use
          your data for their own marketing.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">Retention</h2>
        <p>
          Service-history and invoice records are retained for 7 years to
          satisfy Florida statute of limitations and procurement-audit
          requirements. Lead-form submissions that do not become customers are
          purged after 12 months. You may request earlier deletion by emailing{" "}
          <a className="text-primary hover:underline" href={`mailto:${site.email}`}>{site.email}</a>,
          subject to legal and tax record-keeping obligations.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">Your rights</h2>
        <p>
          Florida residents and California residents (CCPA) may request a copy
          of personal data we hold, ask us to correct inaccuracies, or request
          deletion subject to the retention above. Email{" "}
          <a className="text-primary hover:underline" href={`mailto:${site.email}`}>{site.email}</a>{" "}
          with a brief description of your request; we respond within 30 days.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">Security</h2>
        <p>
          We host on Vercel (encrypted in transit and at rest). Vendor
          credentials, banking, and any signed agreements are stored in
          access-controlled systems. We do not store full credit-card numbers
          on our servers — payment is processed directly by Stripe/Square.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">Children</h2>
        <p>
          Our service is B2B; we do not knowingly collect personal data from
          anyone under 16.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">Updates</h2>
        <p>
          We may update this policy. Material changes are posted here with a
          new "Last updated" date. Continued use of the site or our service
          after the date posted constitutes acceptance.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">Contact</h2>
        <p>
          Email{" "}
          <a className="text-primary hover:underline" href={`mailto:${site.email}`}>{site.email}</a>{" "}
          · phone{" "}
          <a className="text-primary hover:underline" href={site.phoneHref}>{site.phone}</a>{" "}
          · address: {site.address.streetAddress}, {site.address.locality},{" "}
          {site.address.region} {site.address.postalCode}.
        </p>
        <p className="text-xs text-muted-foreground">
          See also: <Link href="/terms" className="hover:text-primary">Terms of Service</Link>{" "}
          · <Link href="/cookies" className="hover:text-primary">Cookie Policy</Link>
        </p>
      </div>
    </article>
  )
}

import type { Metadata } from "next"
import Link from "next/link"
import { PageHero, PageShell } from "@/components/page-shell"
import { CredentialsSection } from "@/components/credentials-section"
import { LinkButton } from "@/components/link-button"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, HAS_CREDENTIAL, metaFor } from "@/lib/seo"
import { site } from "@/lib/site"

export const metadata: Metadata = metaFor({
  title: "Credentials, License & Insurance",
  description:
    "Florida technician license, EPA 608, COI, DBA, W-9, Workers' Comp exemption, EIN, resale certificate and MSA World membership — Berne Commercial Repair.",
  path: "/credentials",
})

export default function CredentialsPage() {
  // ProfessionalService node referencing credentials and the canonical
  // LocalBusiness node — surfaces every doc for procurement teams in one place.
  const credentialPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${site.url}/credentials#webpage`,
    url: `${site.url}/credentials`,
    name: "Berne Commercial Repair — Credentials & Insurance",
    about: { "@id": `${site.url}/#localbusiness` },
    mainEntity: {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      hasCredential: HAS_CREDENTIAL,
    },
    isPartOf: { "@id": `${site.url}/#website` },
  }

  return (
    <PageShell>
      <PageHero
        eyebrow="Credentials"
        title="License, insurance and documentation"
        description={`${site.name} is licensed, insured, EPA-certified, and onboarded by Florida property managers and corporate procurement teams. Every credential below is downloadable for vendor compliance.`}
      >
        <div className="flex flex-wrap gap-3">
          <LinkButton href="/become-a-client">
            Become a commercial client
          </LinkButton>
          <LinkButton href="/contact" variant="outline">
            Talk to dispatch
          </LinkButton>
        </div>
      </PageHero>

      <CredentialsSection />

      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Need a different document?
          </h2>
          <p className="mt-3 text-muted-foreground">
            We routinely send COI naming the property or chain as additional
            insured, vendor packets, W-9s on letterhead, and procurement-portal
            uploads (Compliance Depot, NetVendor, RealPage, Yardi). Email{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-primary underline-offset-2 hover:underline"
            >
              {site.email}
            </a>{" "}
            or{" "}
            <Link
              href="/contact"
              className="text-primary underline-offset-2 hover:underline"
            >
              contact dispatch
            </Link>{" "}
            and we will turn it around the same business day.
          </p>
        </div>
      </section>

      <JsonLd data={credentialPageSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Credentials", url: `${site.url}/credentials` },
        ])}
      />
    </PageShell>
  )
}

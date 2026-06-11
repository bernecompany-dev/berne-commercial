import type { Metadata } from "next"
import Link from "next/link"
import {
  Briefcase,
  GraduationCap,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Wrench,
  BadgeDollarSign,
} from "lucide-react"
import { PageHero, PageShell } from "@/components/page-shell"
import { JsonLd } from "@/components/json-ld"
import { metaFor } from "@/lib/seo"
import { site } from "@/lib/site"
import { CAREERS, POSTING_DATE, VALID_THROUGH } from "@/lib/data/careers"

export const metadata: Metadata = metaFor({
  title: "Careers — Berne Commercial Repair",
  description:
    "Join Berne Commercial Repair — South Florida's commercial service organization. Hiring senior refrigeration and cooking equipment techs plus dispatch staff.",
  path: "/careers",
})

/**
 * Google for Jobs JobPosting schema per open role.
 * https://developers.google.com/search/docs/appearance/structured-data/job-posting
 *
 * Required: title, description, datePosted, hiringOrganization, jobLocation,
 * validThrough. Strongly recommended: baseSalary, employmentType.
 */
function jobPostingJsonLd(roleSlug: string) {
  const role = CAREERS.find((r) => r.slug === roleSlug)!
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "@id": `${site.url}/careers#${role.slug}`,
    title: role.title,
    description: `<p>${role.description}</p><h3>Requirements</h3><ul>${role.requirements
      .map((r) => `<li>${r}</li>`)
      .join("")}</ul>`,
    identifier: {
      "@type": "PropertyValue",
      name: site.name,
      value: `berne-commercial-careers-${role.slug}`,
    },
    datePosted: POSTING_DATE,
    validThrough: VALID_THROUGH,
    employmentType: role.employmentType,
    industry: "Commercial Equipment Service",
    occupationalCategory: "49-9099.00 Installation, Maintenance, and Repair Workers, All Other",
    hiringOrganization: {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      sameAs: site.url,
      logo: `${site.url}/opengraph-image`,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.streetAddress,
        addressLocality: site.address.locality,
        addressRegion: site.address.region,
        postalCode: site.address.postalCode,
        addressCountry: site.address.country,
      },
    },
    applicantLocationRequirements: {
      "@type": "Country",
      name: "US",
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: {
        "@type": "QuantitativeValue",
        minValue: role.pay.min,
        maxValue: role.pay.max,
        unitText: role.pay.unitText,
      },
    },
    skills: role.skills,
    qualifications: role.requirements.join("; "),
    directApply: false,
  }
}

export default function CareersPage() {
  const jobPostings = CAREERS.map((r) => jobPostingJsonLd(r.slug))

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Careers", item: `${site.url}/careers` },
    ],
  }

  const collectionPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${site.url}/careers#collection`,
    url: `${site.url}/careers`,
    name: `${site.name} — Careers`,
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": `${site.url}/#organization` },
  }

  const benefits = [
    {
      icon: <ShieldCheck className="size-5 text-primary" aria-hidden />,
      title: "W-2 employment",
      body:
        "Not 1099. Payroll, workers' comp, and FL employer compliance handled in-house.",
    },
    {
      icon: <GraduationCap className="size-5 text-primary" aria-hidden />,
      title: "OEM + CFESA training",
      body:
        "Company pays for CFESA certification, MSA modules, and brand-specific manufacturer schools.",
    },
    {
      icon: <Wrench className="size-5 text-primary" aria-hidden />,
      title: "Enterprise dispatch back-end",
      body:
        "ServiceChannel, Corrigo, FacilitySource, ServiceTitan — we handle the platforms; you handle the work.",
    },
    {
      icon: <Briefcase className="size-5 text-primary" aria-hidden />,
      title: "Vendor-ready paperwork",
      body:
        "COI, W-9, MSA, banking — already in place across major chain accounts. You inherit the relationships.",
    },
    {
      icon: <MapPin className="size-5 text-primary" aria-hidden />,
      title: "Two offices",
      body: "Hallandale Beach HQ + Boca Raton — pick the closer one.",
    },
    {
      icon: <BadgeDollarSign className="size-5 text-primary" aria-hidden />,
      title: "On-call premium",
      body:
        "Guaranteed per-call pay during on-call rotation, not just trip-rate.",
    },
  ]

  return (
    <PageShell>
      <PageHero
        eyebrow="Careers"
        title="Build a career in commercial field service."
        description={`${site.name} is hiring across South Florida. We're an enterprise commercial service organization — refrigeration, restaurant equipment, ice machines, commercial laundry — and we recruit on a different skill curve than residential. Open roles below.`}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Briefcase className="size-3.5" aria-hidden />
            Currently accepting applications
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-foreground/80">
            <ShieldCheck className="size-3.5 text-primary" aria-hidden />
            W-2 · vendor-ready
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-foreground/80">
            <GraduationCap className="size-3.5 text-primary" aria-hidden />
            CFESA + OEM training
          </span>
        </div>
      </PageHero>

      {/* Why */}
      <section className="border-b border-border/60 bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <div className="text-xs font-medium uppercase tracking-wider text-primary">
              Why work at Berne Commercial
            </div>
            <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              The job, without the usual commercial-service nonsense.
            </h2>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <li
                key={b.title}
                className="flex gap-3 rounded-2xl border border-border bg-card p-5"
              >
                <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  {b.icon}
                </span>
                <div>
                  <h3 className="text-base font-semibold tracking-tight">
                    {b.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {b.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Open roles */}
      <section id="open-roles" className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <div className="text-xs font-medium uppercase tracking-wider text-primary">
              Open roles
            </div>
            <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Currently accepting applications.
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Apply by emailing your resume + 3 references to{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-primary hover:underline"
              >
                {site.email}
              </a>{" "}
              with the role title in the subject line, or call{" "}
              <a href={site.phoneHref} className="text-primary hover:underline">
                {site.phone}
              </a>
              .
            </p>
          </div>

          <div className="space-y-6">
            {CAREERS.map((role) => (
              <article
                key={role.slug}
                id={role.slug}
                className="rounded-3xl border border-border bg-card p-6 sm:p-8 scroll-mt-24"
              >
                <header className="mb-4 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                      {role.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {role.workLocation}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                    <BadgeDollarSign className="size-3.5" aria-hidden />
                    {role.pay.label}
                  </span>
                </header>

                <p className="text-base leading-relaxed text-foreground/90">
                  {role.description}
                </p>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Requirements
                    </h4>
                    <ul className="mt-3 space-y-2 text-sm">
                      {role.requirements.map((r) => (
                        <li key={r} className="flex items-start gap-2">
                          <CheckCircle2
                            className="mt-0.5 size-4 shrink-0 text-primary"
                            aria-hidden
                          />
                          <span className="text-foreground/85">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Employment details
                    </h4>
                    <dl className="mt-3 space-y-1.5 text-sm">
                      <div className="flex items-baseline justify-between gap-3 border-b border-border pb-1.5">
                        <dt className="text-muted-foreground">Type</dt>
                        <dd className="font-medium">Full-time, W-2</dd>
                      </div>
                      <div className="flex items-baseline justify-between gap-3 border-b border-border pb-1.5">
                        <dt className="text-muted-foreground">Location</dt>
                        <dd className="font-medium text-right">
                          {role.workLocation}
                        </dd>
                      </div>
                      <div className="flex items-baseline justify-between gap-3 border-b border-border pb-1.5">
                        <dt className="text-muted-foreground">Pay</dt>
                        <dd className="font-medium text-right">{role.pay.label}</dd>
                      </div>
                      <div className="flex items-baseline justify-between gap-3 border-b border-border pb-1.5">
                        <dt className="text-muted-foreground">Posted</dt>
                        <dd className="font-medium">{POSTING_DATE}</dd>
                      </div>
                    </dl>
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      <a
                        href={`mailto:${site.email}?subject=Application: ${encodeURIComponent(role.title)}`}
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                      >
                        <Mail className="size-4" aria-hidden />
                        Email resume
                      </a>
                      <a
                        href={site.phoneHref}
                        className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40"
                      >
                        <Phone className="size-4 text-primary" aria-hidden />
                        Call recruiter
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How we hire */}
      <section id="how-we-hire" className="border-t border-border/60 bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <div className="text-xs font-medium uppercase tracking-wider text-primary">
              How we hire
            </div>
            <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              5 steps. About a week, start to finish.
            </h2>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["1", "Email resume", `Send resume + 3 references to ${site.email}.`],
              ["2", "Phone screen", "15-minute call with the hiring manager."],
              ["3", "In-person interview", "30-45 minutes at Hallandale HQ or Boca."],
              [
                "4",
                "Skills assessment",
                "Technician roles only — a 1-day ride-along on a commercial truck.",
              ],
              [
                "5",
                "Decision within 1 week",
                "Offer, hire date, and W-2 onboarding.",
              ],
            ].map(([n, title, body]) => (
              <li
                key={n}
                className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-5"
              >
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-primary/10 text-base font-semibold text-primary">
                  {n}
                </span>
                <h3 className="text-base font-semibold tracking-tight">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-5 text-sm leading-relaxed">
            <p>
              <strong className="text-foreground">Equal opportunity employer.</strong>{" "}
              Berne Commercial Repair hires based on skill and attitude. We do not
              discriminate by race, color, national origin, religion, sex, age,
              disability, veteran status, or any other protected class.
            </p>
          </div>
          <div className="mt-8 text-sm text-muted-foreground">
            Residential appliance repair career? See{" "}
            <Link
              href="https://www.berne-repair.com/careers"
              className="text-primary hover:underline"
            >
              berne-repair.com/careers
            </Link>{" "}
            or{" "}
            <Link
              href="https://bernerepair.com/careers/"
              className="text-primary hover:underline"
            >
              bernerepair.com/careers
            </Link>
            .
          </div>
        </div>
      </section>

      <JsonLd data={[...jobPostings, collectionPage, breadcrumb]} />
    </PageShell>
  )
}

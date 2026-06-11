import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowRight,
  Briefcase,
  Languages,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { JsonLd } from "@/components/json-ld"
import { metaFor, breadcrumbSchema, personJsonLd } from "@/lib/seo"
import { site } from "@/lib/site"
import { team, type TeamMember } from "@/lib/data/team"
import {
  BACK_OFFICE,
  BACK_OFFICE_BY_SLUG,
  TECH_BIOS,
  type ExtendedBio,
} from "@/lib/data/team-bios"

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return [
    ...team.map((t) => ({ slug: t.slug })),
    ...BACK_OFFICE.map((b) => ({ slug: b.slug })),
  ]
}

function findTechnician(slug: string): TeamMember | undefined {
  return team.find((t) => t.slug === slug)
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const tech = findTechnician(slug)
  const back = BACK_OFFICE_BY_SLUG[slug]

  if (tech) {
    // Meta description budget: ~155ch. The full specialties list pushed the
    // old template to 166-232ch (SERP truncation on every bio) — instead,
    // keep the fixed sentences and include only as many specialties as fit.
    const head = `${tech.name}, ${tech.role} at Berne Commercial Repair. ${tech.yearsExperience} years experience.`
    const tail = " South Florida service."
    let specs = [...tech.specialties]
    let description = `${head} Specialties: ${specs.join(", ")}.${tail}`
    while (description.length > 155 && specs.length > 1) {
      specs = specs.slice(0, -1)
      description = `${head} Specialties: ${specs.join(", ")}.${tail}`
    }
    if (description.length > 155) description = `${head}${tail}`
    // Suffix template adds " · Berne" — keep base concise so the rendered
    // <title> stays inside Google's ~60-char SERP cutoff.
    return metaFor({
      title: `${tech.name} — ${tech.role}`,
      description,
      path: `/team/${slug}`,
      // EN-only section — /es/team/* does not exist.
      esAlternate: false,
    })
  }
  if (back) {
    return metaFor({
      title: `${back.name} — ${back.role}`,
      description: `${back.name}, ${back.role} at Berne Commercial Repair. Part of the dispatch and operations team behind the technician fleet.`,
      path: `/team/${slug}`,
      esAlternate: false,
    })
  }
  return metaFor({
    title: "Team",
    description: "Berne Commercial Repair team member.",
    path: `/team/${slug}`,
    noindex: true,
  })
}

export default async function TeamMemberPage({ params }: Params) {
  const { slug } = await params
  const tech = findTechnician(slug)
  const back = BACK_OFFICE_BY_SLUG[slug]

  if (!tech && !back) notFound()

  const isBackOffice = !!back
  const member = (tech ?? back)!
  const bio: ExtendedBio | undefined = tech
    ? TECH_BIOS[slug]
    : back?.bio

  if (!bio) notFound()

  const name = isBackOffice ? back!.name : tech!.name
  const role = isBackOffice ? back!.role : tech!.role
  const photo = isBackOffice ? back!.photo : tech!.photo
  const years = isBackOffice ? null : tech!.yearsExperience
  const credentials = isBackOffice ? [] : tech!.credentials
  const languages = isBackOffice ? [] : tech!.languages
  const specialties = isBackOffice ? [] : tech!.specialties

  // Person schema — full Person node per page (E-E-A-T win)
  let personSchema: Record<string, unknown>
  if (tech) {
    // Override the @id and url so they're per-page rather than shared with /about
    const base = personJsonLd(tech)
    personSchema = {
      ...base,
      "@id": `${site.url}/team/${slug}#person`,
      url: `${site.url}/team/${slug}`,
      mainEntityOfPage: { "@id": `${site.url}/team/${slug}` },
    }
  } else {
    personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${site.url}/team/${slug}#person`,
      name: name,
      image: `${site.url}${photo}`,
      jobTitle: role,
      worksFor: { "@id": `${site.url}/#organization` },
      url: `${site.url}/team/${slug}`,
    }
  }

  const profilePage = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${site.url}/team/${slug}#profilepage`,
    url: `${site.url}/team/${slug}`,
    name: `${name} — ${role}`,
    mainEntity: { "@id": `${site.url}/team/${slug}#person` },
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": `${site.url}/#organization` },
    breadcrumb: { "@id": `${site.url}/team/${slug}#breadcrumb` },
  }

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: site.url },
    { name: "Team", url: `${site.url}/team` },
    { name, url: `${site.url}/team/${slug}` },
  ])
  // Attach an @id to breadcrumb so ProfilePage can reference it cleanly.
  ;(breadcrumbs as { "@id"?: string })["@id"] = `${site.url}/team/${slug}#breadcrumb`

  return (
    <PageShell>
      <article>
        <section className="border-b border-border/60 bg-gradient-to-b from-background to-accent/30">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex items-center gap-2 text-xs text-muted-foreground"
            >
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
              <span aria-hidden>/</span>
              <Link href="/team" className="hover:text-foreground">
                Team
              </Link>
              <span aria-hidden>/</span>
              <span className="text-foreground/80">{name}</span>
            </nav>

            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-border bg-muted shadow-sm">
                  <Image
                    src={photo}
                    alt={`${name} — ${role}`}
                    fill
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="text-xs font-medium uppercase tracking-wider text-primary">
                  {isBackOffice
                    ? "Operations"
                    : role === "Founder & Operator"
                      ? "Founder"
                      : "Technician"}
                </div>
                <h1 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  {name}
                </h1>
                <div className="mt-2 text-base font-medium text-muted-foreground">
                  {role}
                </div>

                <p className="mt-6 text-base text-muted-foreground sm:text-lg">
                  {bio.lede}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
                  {years ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 font-medium text-primary">
                      <Briefcase className="size-3.5" aria-hidden /> {years} years experience
                    </span>
                  ) : null}
                  {languages.length > 0 ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-foreground/80">
                      <Languages className="size-3.5 text-primary" aria-hidden />
                      {languages.join(" · ")}
                    </span>
                  ) : null}
                  {credentials.map((c) => (
                    <span
                      key={c.name}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-foreground/80"
                    >
                      <ShieldCheck className="size-3.5 text-primary" aria-hidden />
                      {c.name}
                    </span>
                  ))}
                </div>

                {specialties.length > 0 ? (
                  <div className="mt-6">
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Specialties
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {specialties.map((s) => (
                        <span
                          key={s}
                          className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium"
                        >
                          <Sparkles className="size-3 text-primary" aria-hidden />
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={site.phoneHref}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                  >
                    <Phone className="size-4" aria-hidden />
                    Call {site.phone}
                  </a>
                  <Link
                    href="/request-dispatch"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold transition-colors hover:border-primary/40"
                  >
                    Request commercial dispatch
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border/60 bg-background py-16 sm:py-20">
          <div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Background</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {bio.background}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  {isBackOffice ? "What this role covers" : "What I work on"}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {bio.workOn}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Why I work at Berne
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {bio.whyBerne}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Service area</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {bio.serviceArea}
                </p>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-sm font-semibold tracking-tight">
                  Related services & brands
                </h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {bio.related.map((r) => (
                    <li key={r.href}>
                      <Link
                        href={r.href}
                        className="group flex items-start gap-2 text-foreground hover:text-primary"
                      >
                        <Wrench className="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden />
                        <span className="underline-offset-4 group-hover:underline">
                          {r.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
                <h3 className="text-sm font-semibold tracking-tight">
                  Schedule service
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {isBackOffice
                    ? `${name.split(" ")[0]} and the dispatch desk pick up during business hours.`
                    : `Dispatch ${name.split(" ")[0]} or another Berne tech to your site.`}
                </p>
                <a
                  href={site.phoneHref}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  <Phone className="size-4" aria-hidden />
                  {site.phone}
                </a>
                <Link
                  href="/request-dispatch"
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary/40 bg-background px-4 py-2.5 text-sm font-semibold text-foreground hover:border-primary"
                >
                  Request service online
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </article>

      <JsonLd data={[personSchema, profilePage, breadcrumbs]} />
    </PageShell>
  )
}

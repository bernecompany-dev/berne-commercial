import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, Briefcase, ShieldCheck } from "lucide-react"
import { PageShell, PageHero } from "@/components/page-shell"
import { JsonLd } from "@/components/json-ld"
import { metaFor, breadcrumbSchema, personJsonLd } from "@/lib/seo"
import { site } from "@/lib/site"
import { team } from "@/lib/data/team"
import { BACK_OFFICE } from "@/lib/data/team-bios"

export const metadata: Metadata = metaFor({
  // Suffix template adds " · Berne" (8 chars). Base title kept short so the
  // final <title> stays inside Google's ~60-char SERP cutoff.
  title: "Meet the team — 18 South Florida technicians",
  description:
    "Berne Commercial Repair is a fleet of 18 W-2 technicians plus the dispatch and operations team behind them. EPA 608 certified, MSA World members, continuous OEM training.",
  path: "/team",
})

export default function TeamIndexPage() {
  const technicians = team
  const personSchemas = technicians.map((t) => personJsonLd(t))

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${site.url}/team#roster`,
    name: "Berne Commercial Repair — Technician roster",
    itemListOrder: "https://schema.org/ItemListUnordered",
    numberOfItems: technicians.length,
    itemListElement: technicians.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${site.url}/team/${t.slug}`,
      item: {
        "@type": "Person",
        "@id": `${site.url}/team/${t.slug}#person`,
        name: t.name,
        jobTitle: t.role,
        image: `${site.url}${t.photo}`,
      },
    })),
  }

  const collectionPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${site.url}/team#collection`,
    url: `${site.url}/team`,
    name: "Berne Commercial Repair — Team",
    description:
      "Technicians and operations team behind Berne Commercial Repair, the South Florida commercial appliance service organization.",
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": `${site.url}/#organization` },
    mainEntity: { "@id": `${site.url}/team#roster` },
  }

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: site.url },
    { name: "Team", url: `${site.url}/team` },
  ])

  return (
    <PageShell>
      <PageHero
        eyebrow="The team"
        title="18 technicians on the road. A dispatch team behind them."
        description="Every Berne Commercial tech is a W-2 employee. EPA 608 certified where refrigerant is involved, on the MSA World training track, and backed by a real parts-on-truck inventory."
      >
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 font-medium text-primary">
            <Users className="size-3.5" aria-hidden /> 18 technicians
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 font-medium text-foreground/80">
            <ShieldCheck className="size-3.5 text-primary" aria-hidden /> Licensed & insured
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 font-medium text-foreground/80">
            <Briefcase className="size-3.5 text-primary" aria-hidden /> 11 years operating in South Florida
          </span>
        </div>
      </PageHero>

      <section className="border-b border-border/60 bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <div className="text-xs font-medium uppercase tracking-wider text-primary">
              Technicians
            </div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              The people on the trucks
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Click any technician to read their full background, specialties,
              and service area.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {technicians.map((m) => (
              <Link
                key={m.slug}
                href={`/team/${m.slug}`}
                className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-muted">
                  <Image
                    src={m.photo}
                    alt={`${m.name}, ${m.role} at Berne Commercial Repair`}
                    fill
                    sizes="(min-width: 1024px) 30vw, 90vw"
                    className="object-cover transition-transform group-hover:scale-[1.02]"
                  />
                </div>
                <div className="space-y-1">
                  <div className="text-base font-semibold tracking-tight group-hover:text-primary">
                    {m.name}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-primary">
                    {m.role}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {m.yearsExperience} years experience · {m.specialties.slice(0, 3).join(" · ")}
                  </div>
                </div>
                <div className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Read bio <ArrowRight className="size-3.5" aria-hidden />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-accent/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <div className="text-xs font-medium uppercase tracking-wider text-primary">
              Back office
            </div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              The dispatch and operations team
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              The technicians on the trucks are the front line. These five roles
              are the back-end that keeps Berne Commercial dispatchable. Photos
              and names being finalized — descriptions of each role are live now.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BACK_OFFICE.map((m) => (
              <Link
                key={m.slug}
                href={`/team/${m.slug}`}
                className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-muted">
                  <Image
                    src={m.photo}
                    alt={`${m.role} at Berne Commercial Repair`}
                    fill
                    sizes="(min-width: 1024px) 30vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <div className="text-base font-semibold tracking-tight group-hover:text-primary">
                    {m.role}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-primary">
                    Operations team
                  </div>
                </div>
                <div className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Read role <ArrowRight className="size-3.5" aria-hidden />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <JsonLd data={[...personSchemas, itemList, collectionPage, breadcrumbs]} />
    </PageShell>
  )
}

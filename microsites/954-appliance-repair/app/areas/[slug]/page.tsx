import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { CITIES, getCity } from "@/lib/cities"
import { SERVICES } from "@/lib/services"
import { site } from "@/lib/site"
import { metaFor, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo"
import { LeadForm } from "@/components/lead-form"
import { Faq } from "@/components/faq"
import { CtaBand } from "@/components/cta-band"
import { JsonLd } from "@/components/json-ld"

export function generateStaticParams() {
  return CITIES.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const c = getCity(slug)
  if (!c) return {}
  return metaFor({
    title: `Appliance Repair in ${c.name}, FL`,
    description: c.blurb,
    path: `/areas/${c.slug}`,
  })
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const c = getCity(slug)
  if (!c) notFound()

  const path = `/areas/${c.slug}`
  const faqs = [
    {
      q: `Do you offer same-day appliance repair in ${c.name}?`,
      a: `Yes — ${c.name} is inside our core Broward service area, so same-day and next-morning appointments are usually available. Call ${site.phone} and we'll find the earliest slot.`,
    },
    {
      q: `Which appliances do you fix in ${c.name}?`,
      a: `Refrigerators, washers, dryers, dishwashers, ovens and ranges — all major brands. If it's a large kitchen or laundry appliance, we likely service it.`,
    },
    {
      q: `Is there a trip charge to ${c.name}?`,
      a: `You get a firm repair quote before any work begins, and there are no surprise fees after the fact. Just call and describe the problem for an estimate.`,
    },
  ]

  return (
    <>
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link> → <span>{c.name}</span>
        </nav>
      </div>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap split">
          <div className="prose">
            <p className="eyebrow">{site.county}</p>
            <h1>Appliance Repair in {c.name}, FL</h1>
            <p className="lede">{c.intro}</p>
            <p>{c.local}</p>

            <h2>Neighborhoods we cover in {c.name}</h2>
            <ul className="chips">
              {c.areas.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
            <p className="muted" style={{ marginTop: "0.8rem" }}>
              ZIP codes served include {c.zips.join(", ")} and nearby.
            </p>

            <h2>Repairs available in {c.name}</h2>
            <div className="grid grid--2" style={{ marginTop: "1rem" }}>
              {SERVICES.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="card">
                  <h3>{s.appliance} Repair</h3>
                  <p>{s.short}</p>
                </Link>
              ))}
            </div>

            <h2 style={{ marginTop: "2rem" }}>{c.name} service FAQ</h2>
            <Faq items={faqs} />
          </div>

          <aside>
            <div className="sticky">
              <LeadForm />
            </div>
          </aside>
        </div>
      </section>

      <CtaBand
        heading={`Appliance repair in ${c.name}, today.`}
        sub={`Fast, honest service across ${c.name} and all of Broward County.`}
      />

      <JsonLd
        data={serviceSchema({
          name: `Appliance Repair in ${c.name}`,
          description: c.blurb,
          path,
          city: c.name,
        })}
      />
      <JsonLd data={faqSchema(path, faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: c.name, path },
        ])}
      />
    </>
  )
}

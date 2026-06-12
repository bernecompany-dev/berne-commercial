import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { PageHero, PageShell } from "@/components/page-shell"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AnchorButton, LinkButton } from "@/components/link-button"
import { Card } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { DispatchForm } from "@/components/dispatch-form"
import { FAQSection } from "@/components/faq-section"
import { CityMap } from "@/components/city-map"
import { TrustedBy } from "@/components/trusted-by"
import { JsonLd } from "@/components/json-ld"
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo"
import { site } from "@/lib/site"
import { cities, getCity, nearbyCities, COUNTIES } from "@/lib/data/cities"
import { services, primaryServices } from "@/lib/data/services"
import { localizedService } from "@/lib/data/services-es"
import { cityIntro } from "@/lib/copy"
import {
  getCityProfileEs,
  cityProfileFallbackEs,
} from "@/lib/data/city-profiles-es"

type Params = { params: Promise<{ city: string }> }

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { city: slug } = await params
  const c = getCity(slug)
  if (!c)
    return {
      title: "Ciudad",
      robots: { index: false },
    }
  const p = getCityProfileEs(c.slug) ?? cityProfileFallbackEs(c.name, c.county)
  return {
    title: `Reparación de Equipo Comercial en ${c.name}, FL`,
    description: `Despacho comercial el mismo día en ${c.name}: refrigeración, hielo, restaurantes, ventilación, lavandería. Llamada de servicio: ${site.serviceCall}.`,
    alternates: {
      canonical: `/es/${c.slug}`,
      languages: {
        en: `/${c.slug}`,
        es: `/es/${c.slug}`,
        "x-default": `/${c.slug}`,
      },
    },
    openGraph: {
      type: "website",
      locale: "es_US",
      url: `${site.url}/es/${c.slug}`,
      siteName: site.name,
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
  }
}

const faqsForEs = (cityName: string) => [
  {
    q: `¿Ofrecen reparación comercial el mismo día en ${cityName}?`,
    a: `Sí. Nuestro despacho cubre ${cityName} con servicio comercial de emergencia el mismo día. Fallas de refrigeración tienen prioridad.`,
  },
  {
    q: `¿Cuánto cuesta la llamada de servicio comercial en ${cityName}?`,
    a: `Nuestra llamada de servicio comercial es ${site.serviceCall} y es gratuita si aprueba la reparación: solo se paga si decide no continuar.`,
  },
  {
    q: `¿Qué equipo comercial reparan en ${cityName}?`,
    a: `Walk-in coolers y freezers, reach-ins, máquinas de hielo, freidoras, hornos, ranges, prep tables, steamers, lavandería comercial, garbage disposals y trash compactors.`,
  },
]

export default async function CityPageES({ params }: Params) {
  const { city: slug } = await params
  const c = getCity(slug)
  if (!c) notFound()
  const nearby = nearbyCities(c.slug, 8)
  const faqs = faqsForEs(c.name)

  return (
    <PageShell locale="es">
      <Breadcrumbs
        items={[
          { name: "Inicio", href: "/es" },
          { name: "Áreas de servicio", href: "/es/service-areas" },
          { name: c.name },
        ]}
      />
      <PageHero
        eyebrow={`Condado de ${COUNTIES[c.county]}`}
        title={`Reparación de Equipo Comercial en ${c.name}, FL`}
        description={cityIntro(c, "es")}
      >
        {/* One badge with NEW info — same-day/licensed live in the TrustStrip
            above, the city is in the H1 (mirrors the EN template). */}
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="outline"
            className="border-primary/30 bg-primary/5 text-primary"
          >
            Llamada de servicio {site.serviceCall} — gratis con la reparación aprobada
          </Badge>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton href={`/es/request-dispatch?city=${c.slug}`}>
            Solicitar servicio <ArrowRight className="size-4" />
          </LinkButton>
          <AnchorButton href={site.phoneHref} variant="outline">
            Llamar {site.phone}
          </AnchorButton>
        </div>
      </PageHero>

      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Servicios comerciales en {c.name}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((s) => {
              const es = localizedService(s, "es")
              return (
                <Link key={s.slug} href={`/es/${c.slug}/${s.slug}`} className="group">
                  <Card className="h-full gap-2 p-5 transition-all hover:border-primary/40 hover:shadow-md">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-sm font-semibold">
                        {es.shortTitle} en {c.name}
                      </span>
                      <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                    </div>
                    <p className="text-xs text-muted-foreground">{es.summary}</p>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-accent/30 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Solicitar servicio en {c.name}
          </h2>
          <div className="mt-8">
            <DispatchForm locale="es" defaults={{ city: c.name }} />
          </div>
        </div>
      </section>

      {/* Visible FAQ — must exist for the faqSchema JSON-LD below to be
          honest (it was previously emitted with no rendered FAQ at all). */}
      <FAQSection
        faqs={faqs}
        eyebrow="FAQ"
        title={`Preguntas frecuentes — ${c.name}`}
        description="De nuestro despacho y técnicos de ruta."
      />

      <CityMap city={c.name} locale="es" />

      <TrustedBy locale="es" />

      {nearby.length ? (
        <section className="border-b border-border/60 bg-background py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Áreas de servicio cercanas
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {nearby.map((n) => (
                <Link
                  key={n.slug}
                  href={`/es/${n.slug}`}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground hover:bg-accent hover:text-foreground"
                >
                  {n.name}
                </Link>
              ))}
            </div>
            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Servicios principales
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {primaryServices.map((s) => {
                const es = localizedService(s, "es")
                return (
                  <Link
                    key={s.slug}
                    href={`/es/${c.slug}/${s.slug}`}
                    className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/10"
                  >
                    {es.shortTitle} en {c.name}
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      ) : null}

      <JsonLd
        data={serviceSchema({
          name: `Reparación de Equipo Comercial en ${c.name}, FL`,
          description: `Reparación de refrigeración comercial, equipo de restaurante, máquinas de hielo y lavandería comercial en ${c.name}.`,
          url: `${site.url}/es/${c.slug}`,
          city: c.name,
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", url: `${site.url}/es` },
          { name: "Áreas de servicio", url: `${site.url}/es/service-areas` },
          { name: c.name, url: `${site.url}/es/${c.slug}` },
        ])}
      />
    </PageShell>
  )
}

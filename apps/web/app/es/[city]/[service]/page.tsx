import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { PageHero, PageShell } from "@/components/page-shell"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AnchorButton, LinkButton } from "@/components/link-button"
import { Card } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { DispatchForm } from "@/components/dispatch-form"
import { ServiceBullets } from "@/components/service-bullets"
import { CityMap } from "@/components/city-map"
import { FAQSection } from "@/components/faq-section"
import { TrustedBy } from "@/components/trusted-by"
import { JsonLd } from "@/components/json-ld"
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo"
import { site } from "@/lib/site"
import { cities, getCity, nearbyCities, COUNTIES } from "@/lib/data/cities"
import { getService, services, primaryServices } from "@/lib/data/services"
import { localizedService } from "@/lib/data/services-es"
import { cityServiceIntro, cityServiceContext } from "@/lib/copy"
import {
  getCityProfileEs,
  cityProfileFallbackEs,
} from "@/lib/data/city-profiles-es"

type Params = { params: Promise<{ city: string; service: string }> }

export function generateStaticParams() {
  const allowed = new Set(primaryServices.map((s) => s.slug))
  const all: { city: string; service: string }[] = []
  for (const c of cities) {
    for (const s of services) {
      if (allowed.has(s.slug)) all.push({ city: c.slug, service: s.slug })
    }
  }
  return all
}

export const dynamicParams = true

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params
  const c = getCity(citySlug)
  const s = getService(serviceSlug)
  if (!c || !s)
    return {
      title: "Página",
      robots: { index: false },
    }
  const es = localizedService(s, "es")
  const p = getCityProfileEs(c.slug) ?? cityProfileFallbackEs(c.name, c.county)
  const title = `${es.title} en ${c.name}, FL`
  return {
    title,
    description: `Despacho comercial de ${es.shortTitle.toLowerCase()} en ${c.name}, FL. Mismo día. Llamada de servicio: ${site.serviceCall}.`,
    alternates: {
      canonical: `/es/${c.slug}/${s.slug}`,
      languages: {
        en: `/${c.slug}/${s.slug}`,
        es: `/es/${c.slug}/${s.slug}`,
        "x-default": `/${c.slug}/${s.slug}`,
      },
    },
    openGraph: {
      type: "website",
      locale: "es_US",
      url: `${site.url}/es/${c.slug}/${s.slug}`,
      siteName: site.name,
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    // noindex (follow=true) — see app/es/[city]/page.tsx for rationale: ES geo
    // layer earned 1 click/90d while eating ~45% of the sitemap and starving
    // the English money pages of crawl budget. Removed from sitemap.ts too.
    robots: { index: false, follow: true },
  }
}

const cityFaqsEs = (city: string, service: string, sc: string) => [
  {
    q: `¿Ofrecen ${service.toLowerCase()} en ${city}?`,
    a: `Sí — proveemos ${service.toLowerCase()} en ${city} con despacho comercial el mismo día para restaurantes, plantas de producción, retail y edificios administrados.`,
  },
  {
    q: `¿Cuánto cuesta la llamada de servicio comercial en ${city}?`,
    a: `Nuestra llamada de servicio comercial es ${sc} y es gratuita si aprueba la reparación: solo se paga si decide no continuar.`,
  },
  {
    q: `¿Los técnicos en ${city} tienen licencia y seguro?`,
    a: `Sí. Berne Commercial Repair está licenciado y asegurado para servicio comercial en todo el Sur de Florida, incluyendo ${city}.`,
  },
]

export default async function CityServicePageES({ params }: Params) {
  const { city: citySlug, service: serviceSlug } = await params
  const c = getCity(citySlug)
  const s = getService(serviceSlug)
  if (!c || !s) notFound()
  const es = localizedService(s, "es")

  const nearby = nearbyCities(c.slug, 8)
  const cFaqs = cityFaqsEs(c.name, es.shortTitle, site.serviceCall)
  const combinedFaqs = [...cFaqs, ...es.faqs]

  return (
    <PageShell locale="es">
      <Breadcrumbs
        items={[
          { name: "Inicio", href: "/es" },
          { name: "Áreas de servicio", href: "/es/service-areas" },
          { name: c.name, href: `/es/${c.slug}` },
          { name: es.shortTitle },
        ]}
      />
      {/* Mirrors EN combo template: eyebrow = county only (service/city are
          in the H1), one badge with new info. */}
      <PageHero
        eyebrow={`Condado de ${COUNTIES[c.county]}`}
        title={`${es.title} en ${c.name}, FL`}
        description={cityServiceIntro(c, s, "es")}
      >
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="outline"
            className="border-primary/30 bg-primary/5 text-primary"
          >
            Llamada de servicio {site.serviceCall} — gratis con la reparación aprobada
          </Badge>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton href={`/es/request-dispatch?city=${c.slug}&service=${s.slug}`}>
            Solicitar servicio <ArrowRight className="size-4" />
          </LinkButton>
          <AnchorButton href={site.phoneHref} variant="outline">
            Llamar {site.phone}
          </AnchorButton>
        </div>
      </PageHero>

      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold tracking-tight">
                Despacho de {es.shortTitle.toLowerCase()} en {c.name}
              </h2>
              <p className="mt-4 text-muted-foreground">
                {cityServiceContext(c, s, "es")}
              </p>
            </div>
            <Card className="h-fit gap-3 p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                Cobertura en {c.name}
              </div>
              <p className="text-sm text-muted-foreground">
                Despacho del condado de {COUNTIES[c.county]} — servicio
                comercial de emergencia el mismo día para cuentas de {c.name}.
              </p>
              <LinkButton
                href={`/es/request-dispatch?city=${c.slug}&service=${s.slug}`}
                className="mt-3"
              >
                Solicitar servicio
              </LinkButton>
            </Card>
          </div>

          {es.bullets.length ? (
            <div className="mt-12">
              <h3 className="mb-6 text-lg font-semibold tracking-tight">
                Lo que reparamos
              </h3>
              <ServiceBullets items={es.bullets} />
            </div>
          ) : null}
        </div>
      </section>

      <section className="border-b border-border/60 bg-accent/30 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Solicitar {es.shortTitle.toLowerCase()} en {c.name}
          </h2>
          <div className="mt-8">
            <DispatchForm locale="es" defaults={{ city: c.name, service: s.slug }} />
          </div>
        </div>
      </section>

      <CityMap city={c.name} locale="es" />

      <FAQSection
        faqs={combinedFaqs}
        title={`${es.shortTitle} en ${c.name} — Preguntas frecuentes`}
      />

      <TrustedBy locale="es" />

      <section className="bg-background py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Pill semantics mirror EN: primary tint = services, gray = cities. */}
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Otros servicios en {c.name}
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {primaryServices
              .filter((p) => p.slug !== s.slug)
              .map((p) => {
                const pes = localizedService(p, "es")
                return (
                  <Link
                    key={p.slug}
                    href={`/es/${c.slug}/${p.slug}`}
                    className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/10"
                  >
                    {pes.shortTitle}
                  </Link>
                )
              })}
          </div>
          {nearby.length ? (
            <>
              <h2 className="mt-8 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {es.shortTitle} en ciudades cercanas
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {nearby.map((n) => (
                  <Link
                    key={n.slug}
                    href={`/es/${n.slug}/${s.slug}`}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground hover:bg-accent hover:text-foreground"
                  >
                    {es.shortTitle} en {n.name}
                  </Link>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </section>

      <JsonLd
        data={serviceSchema({
          name: `${es.title} en ${c.name}, FL`,
          description: es.summary,
          url: `${site.url}/es/${c.slug}/${s.slug}`,
          city: c.name,
        })}
      />
      <JsonLd data={faqSchema(combinedFaqs)} />
      {/* Must mirror the visible <Breadcrumbs> trail exactly. */}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", url: `${site.url}/es` },
          { name: "Áreas de servicio", url: `${site.url}/es/service-areas` },
          { name: c.name, url: `${site.url}/es/${c.slug}` },
          { name: es.shortTitle, url: `${site.url}/es/${c.slug}/${s.slug}` },
        ])}
      />
    </PageShell>
  )
}

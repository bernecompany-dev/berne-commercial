import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { PageHero, PageShell } from "@/components/page-shell"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { AnchorButton, LinkButton } from "@/components/link-button"
import { DispatchForm } from "@/components/dispatch-form"
import { ServiceBullets } from "@/components/service-bullets"
import { FAQSection } from "@/components/faq-section"
import { JsonLd } from "@/components/json-ld"
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/seo"
import { site } from "@/lib/site"
import { getService, services } from "@/lib/data/services"
import { localizedService } from "@/lib/data/services-es"

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const s = getService(slug)
  if (!s)
    return {
      title: "Servicio",
      robots: { index: false },
    }
  const es = localizedService(s, "es")
  return {
    title: `${es.title} en el Sur de Florida`,
    description: es.summary,
    alternates: {
      canonical: `/es/services/${slug}`,
      languages: {
        en: `/services/${slug}`,
        es: `/es/services/${slug}`,
        "x-default": `/services/${slug}`,
      },
    },
    openGraph: {
      title: `${es.title} en el Sur de Florida`,
      description: es.summary,
      type: "website",
      locale: "es_US",
      url: `${site.url}/es/services/${slug}`,
      siteName: site.name,
    },
  }
}

export default async function ServiceDetailPageES({ params }: Params) {
  const { slug } = await params
  const s = getService(slug)
  if (!s) notFound()
  const es = localizedService(s, "es")

  return (
    <PageShell locale="es">
      <Breadcrumbs
        items={[
          { name: "Inicio", href: "/es" },
          { name: "Servicios", href: "/es/services" },
          { name: es.shortTitle },
        ]}
      />
      <PageHero
        eyebrow="Servicio"
        title={`${es.title} en el Sur de Florida`}
        description={es.summary}
      >
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="outline"
            className="border-primary/30 bg-primary/5 text-primary"
          >
            Llamada de servicio comercial: {site.serviceCall}
          </Badge>
          <Badge variant="outline">Despacho de emergencia el mismo día</Badge>
          <Badge variant="outline">Con licencia y asegurado</Badge>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton href="/es/request-dispatch">
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
              <h2 className="text-2xl font-semibold tracking-tight">Resumen</h2>
              <p className="mt-4 text-muted-foreground">{es.longDescription}</p>
            </div>
            <Card className="h-fit gap-3 p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                Cobertura en el Sur de Florida
              </div>
              <p className="text-sm text-muted-foreground">
                Miami-Dade, Broward y Palm Beach — despacho de emergencia el
                mismo día para cuentas comerciales.
              </p>
              <LinkButton
                href={`/es/request-dispatch?service=${s.slug}`}
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
            Solicitar {es.shortTitle.toLowerCase()}
          </h2>
          <p className="mt-2 text-muted-foreground">
            Un despachador confirmará pronto la ventana de servicio.
          </p>
          <div className="mt-8">
            <DispatchForm locale="es" defaults={{ service: s.slug }} />
          </div>
        </div>
      </section>

      {es.faqs.length ? (
        <>
          <FAQSection faqs={es.faqs} title={`${es.shortTitle} — Preguntas frecuentes`} />
          <JsonLd data={faqSchema(es.faqs)} />
        </>
      ) : null}

      <JsonLd
        data={serviceSchema({
          name: `${es.title} en el Sur de Florida`,
          description: es.summary,
          url: `${site.url}/es/services/${s.slug}`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", url: `${site.url}/es` },
          { name: "Servicios", url: `${site.url}/es/services` },
          { name: es.shortTitle, url: `${site.url}/es/services/${s.slug}` },
        ])}
      />
    </PageShell>
  )
}

import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowRight,
  Wrench,
  ShieldCheck,
  Clock,
  Award,
  Utensils,
  Hotel,
  ShoppingCart,
  Hospital,
  School,
  Flag,
  Beer,
  Dumbbell,
  Building,
  Shirt,
  type LucideIcon,
} from "lucide-react"

import { PageHero, PageShell } from "@/components/page-shell"
import { Card } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { AnchorButton, LinkButton } from "@/components/link-button"
import { DispatchForm } from "@/components/dispatch-form"
import { FAQSection } from "@/components/faq-section"
import { JsonLd } from "@/components/json-ld"

import {
  brandProfiles,
  brandProfileSlugs,
  getBrandProfile,
} from "@/lib/data/brand-profiles"
import { INDUSTRY_PROFILES } from "@/lib/data/industry-profiles"
import {
  breadcrumbSchema,
  faqSchema,
  metaFor,
  serviceSchema,
} from "@/lib/seo"
import { site } from "@/lib/site"

const INDUSTRY_ICONS: Record<string, LucideIcon> = {
  restaurants: Utensils,
  hotels: Hotel,
  grocery: ShoppingCart,
  healthcare: Hospital,
  schools: School,
  "country-clubs": Flag,
  breweries: Beer,
  gyms: Dumbbell,
  "multi-family": Building,
  laundromats: Shirt,
}

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return brandProfileSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const b = getBrandProfile(slug)
  if (!b) {
    return metaFor({
      title: "Marca",
      description: "",
      path: `/es/brands/${slug}`,
      noindex: true,
      locale: "es",
    })
  }
  const es = b.es
  return metaFor({
    title: es?.metaTitle ?? b.metaTitle,
    description: es?.metaDescription ?? b.metaDescription,
    path: `/es/brands/${b.slug}`,
    locale: "es",
  })
}

export default async function BrandDetailPageES({ params }: Params) {
  const { slug } = await params
  const b = getBrandProfile(slug)
  if (!b) notFound()

  // Fall back to EN if no ES content
  const v = b.es ?? {
    metaTitle: b.metaTitle,
    metaDescription: b.metaDescription,
    teaser: b.teaser,
    about: b.about,
    equipment: b.equipment,
    failureModes: b.failureModes,
    whyBerne: b.whyBerne,
    serviceArea: b.serviceArea,
    faqs: b.faqs,
  }

  type IndustryProfileT = (typeof INDUSTRY_PROFILES)[number]
  const industryLinks: IndustryProfileT[] = b.industrySlugs
    .map((s) => INDUSTRY_PROFILES.find((i) => i.slug === s))
    .filter((x): x is IndustryProfileT => Boolean(x))

  const relatedBrands = brandProfiles
    .filter((p) => p.slug !== b.slug)
    .slice(0, 4)

  return (
    <PageShell locale="es">
      <PageHero
        eyebrow={`Reparación ${b.name}`}
        title={`Reparación Comercial ${b.name} — Sur de Florida`}
        description={v.teaser}
      >
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="outline"
            className="border-primary/30 bg-primary/5 text-primary"
          >
            Service call comercial: {site.serviceCall}
          </Badge>
          <Badge variant="outline">Despacho de emergencia el mismo día</Badge>
          <Badge variant="outline">Licenciados y asegurados · EPA-608</Badge>
          <Badge variant="outline">11 años · 18 técnicos</Badge>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton href={`/es/request-dispatch?brand=${b.slug}`}>
            Solicitar Servicio {b.name} <ArrowRight className="size-4" />
          </LinkButton>
          <AnchorButton href={site.phoneHref} variant="outline">
            Llame {site.phone}
          </AnchorButton>
        </div>
      </PageHero>

      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold tracking-tight">
                Acerca de {b.name}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {v.about}
              </p>
            </div>
            <Card className="h-fit gap-3 p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                Cobertura Sur de Florida
              </div>
              <p className="text-sm text-muted-foreground">
                Miami-Dade, Broward y Palm Beach — despacho el mismo día para
                cuentas comerciales {b.name}.
              </p>
              <ul className="mt-2 grid gap-2 text-sm text-foreground/85">
                <li className="flex items-center gap-2">
                  <Clock className="size-4 text-primary" /> Despacho el mismo día
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-primary" /> COI y W-9
                  archivados
                </li>
                <li className="flex items-center gap-2">
                  <Award className="size-4 text-primary" /> 4.79 / 871 reseñas
                </li>
              </ul>
              <LinkButton
                href={`/es/request-dispatch?brand=${b.slug}`}
                className="mt-3"
              >
                Solicitar Servicio
              </LinkButton>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-accent/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Equipo {b.name} que atendemos
          </h2>
          <p className="mt-2 max-w-3xl text-muted-foreground">
            Series de modelos y plataformas que cubrimos en cuentas comerciales del Sur de Florida.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {v.equipment.map((e) => (
              <Card key={e.series} className="gap-2 p-5">
                <div className="flex items-center gap-2">
                  <span className="inline-flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Wrench className="size-4" />
                  </span>
                  <div className="text-sm font-semibold leading-tight">
                    {e.series}
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {e.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Modos de falla {b.name} que reparamos
          </h2>
          <p className="mt-2 max-w-3xl text-muted-foreground">
            Lo que nuestros técnicos ven en equipo {b.name} en el Sur de Florida — documentado de tickets reales.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {v.failureModes.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-border bg-card p-5"
              >
                <div className="text-base font-semibold tracking-tight">
                  {f.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-accent/30 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Por qué Berne atiende {b.name}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {v.whyBerne}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <LinkButton href="/es/credentials" variant="outline">
              Ver credenciales
            </LinkButton>
            <LinkButton href={`/es/request-dispatch?brand=${b.slug}`}>
              Solicitar Servicio {b.name} <ArrowRight className="size-4" />
            </LinkButton>
          </div>
        </div>
      </section>

      {industryLinks.length ? (
        <section className="border-b border-border/60 bg-background py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Industrias donde {b.name} aparece
            </h2>
            <p className="mt-2 max-w-3xl text-muted-foreground">
              El equipo {b.name} es estándar en las operaciones que cubrimos más pesado en el Sur de Florida.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {industryLinks.map((ind) => {
                const Icon = INDUSTRY_ICONS[ind.slug] ?? Building
                const esTitle = ind.es?.industryTitle ?? ind.industryTitle
                const esHero = ind.es?.hero ?? ind.hero
                const esIndustry = ind.es?.industry ?? ind.industry
                return (
                  <Link
                    key={ind.slug}
                    href={`/es/industries/${ind.slug}`}
                    className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
                  >
                    <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <div className="mt-3 text-base font-semibold">
                      {esTitle}
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {esHero}
                    </p>
                    <div className="mt-3 text-xs font-medium uppercase tracking-wider text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      Ver cobertura {esIndustry} →
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-b border-border/60 bg-accent/30 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Área de servicio
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {v.serviceArea}
          </p>
          <div className="mt-4">
            <LinkButton href="/es/service-areas" variant="outline">
              Ver todas las áreas de servicio
            </LinkButton>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={v.faqs}
        title={`Preguntas frecuentes — ${b.name}`}
        description="Respuestas rápidas de nuestro despacho y equipo de campo."
      />

      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Solicitar despacho {b.name}
          </h2>
          <p className="mt-2 text-muted-foreground">
            Un despachador confirmará la ventana de servicio pronto.
          </p>
          <div className="mt-8">
            <DispatchForm locale="es" />
          </div>
        </div>
      </section>

      {relatedBrands.length ? (
        <section className="bg-accent/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold tracking-tight">
              Otras marcas comerciales que atendemos
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {relatedBrands.map((rb) => (
                <Link
                  key={rb.slug}
                  href={`/es/brands/${rb.slug}`}
                  className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
                >
                  <div className="text-base font-semibold">{rb.name}</div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {rb.es?.teaser ?? rb.teaser}
                  </p>
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <LinkButton href="/es/brands" variant="outline">
                Ver todas las marcas comerciales
              </LinkButton>
            </div>
          </div>
        </section>
      ) : null}

      <JsonLd
        data={serviceSchema({
          name: `Reparación Comercial ${b.name}`,
          description: v.metaDescription,
          url: `${site.url}/es/brands/${b.slug}`,
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Brand",
          name: b.name,
          alternateName: b.manufacturer,
          ...(b.hq
            ? {
                address: {
                  "@type": "PostalAddress",
                  addressLocality: b.hq,
                },
              }
            : {}),
          url: `${site.url}/es/brands/${b.slug}`,
        }}
      />
      <JsonLd data={faqSchema(v.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", url: `${site.url}/es` },
          { name: "Marcas", url: `${site.url}/es/brands` },
          { name: b.name, url: `${site.url}/es/brands/${b.slug}` },
        ])}
      />
    </PageShell>
  )
}

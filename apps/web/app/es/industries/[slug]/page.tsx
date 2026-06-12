import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, ShieldCheck, FileCheck2, Award } from "lucide-react"
import { PageHero, PageShell } from "@/components/page-shell"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { AnchorButton, LinkButton } from "@/components/link-button"
import { DispatchForm } from "@/components/dispatch-form"
import { FAQSection } from "@/components/faq-section"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, faqSchema, metaFor, serviceSchema } from "@/lib/seo"
import { site } from "@/lib/site"
import { REPAIRS_COMPLETED_BARE } from "@/lib/data/company"
import {
  INDUSTRY_PROFILES,
  getIndustryProfile,
} from "@/lib/data/industry-profiles"
import { getService } from "@/lib/data/services"

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return INDUSTRY_PROFILES.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const p = getIndustryProfile(slug)
  if (!p) {
    return metaFor({
      title: "Industria",
      description: "",
      path: `/es/industries/${slug}`,
      noindex: true,
      locale: "es",
    })
  }
  const es = p.es
  return metaFor({
    title: es?.metaTitle ?? p.metaTitle,
    description: es?.metaDescription ?? p.metaDescription,
    path: `/es/industries/${slug}`,
    locale: "es",
  })
}

// industryServiceSchema retired 2026-05-20 — see EN counterpart for context.
// The shared serviceSchema() emits Service with a bare @id provider reference
// to the canonical LocalBusiness from app/layout.tsx, avoiding duplicate-node
// graph conflicts that Google flagged in URL-Inspection.

export default async function IndustryDetailPageES({ params }: Params) {
  const { slug } = await params
  const profile = getIndustryProfile(slug)
  if (!profile) notFound()

  // Fall back to EN content if no ES translation provided.
  const v = profile.es ?? {
    industry: profile.industry,
    industryTitle: profile.industryTitle,
    metaTitle: profile.metaTitle,
    metaDescription: profile.metaDescription,
    h1: profile.h1,
    hero: profile.hero,
    whyUs: profile.whyUs,
    equipment: profile.equipment,
    commonIssues: profile.commonIssues,
    sameDay: profile.sameDay,
    faqs: profile.faqs,
  }

  const related = profile.relatedServices
    .map((s) => getService(s))
    .filter((s): s is NonNullable<ReturnType<typeof getService>> => Boolean(s))

  return (
    <PageShell locale="es">
      <Breadcrumbs
        items={[
          { name: "Inicio", href: "/es" },
          { name: "Industrias", href: "/es/industries" },
          { name: v.industryTitle ?? profile.industryTitle },
        ]}
      />
      <PageHero
        eyebrow="Industrias"
        title={v.h1}
        description={v.hero}
      >
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="outline"
            className="border-primary/30 bg-primary/5 text-primary"
          >
            Service call comercial: {site.serviceCall}
          </Badge>
          <Badge variant="outline">Despacho el mismo día</Badge>
          <Badge variant="outline">
            Licenciados, asegurados, certificados EPA
          </Badge>
          <Badge variant="outline">4.79★ en 871 reseñas</Badge>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton href={`/es/request-dispatch?industry=${profile.slug}`}>
            Solicitar Despacho <ArrowRight className="size-4" />
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
                Por qué los dueños de {v.industry} llaman a Berne
              </h2>
              <p className="mt-4 text-muted-foreground">{v.whyUs}</p>
              <p className="mt-4 text-muted-foreground">
                Once años operando en el Sur de Florida, 18 técnicos en la
                calle, más de {REPAIRS_COMPLETED_BARE} servicios completados, y un promedio de
                4.79 estrellas en 871 reseñas. Somos licenciados y asegurados
                (DBA Berne Appliance Repair), certificados EPA para trabajo de
                refrigerante, y NDA-friendly para las industrias que lo
                requieren.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <a
                  href="/credentials/coi.pdf"
                  className="inline-flex items-center gap-2 rounded-lg border border-border/70 bg-card/60 px-3 py-2 text-sm hover:bg-accent"
                >
                  <ShieldCheck className="size-4 text-primary" />
                  Certificado de Seguro (COI)
                </a>
                <a
                  href="/credentials/epa-certificate.pdf"
                  className="inline-flex items-center gap-2 rounded-lg border border-border/70 bg-card/60 px-3 py-2 text-sm hover:bg-accent"
                >
                  <Award className="size-4 text-primary" />
                  Certificado EPA 608
                </a>
                <a
                  href="/credentials/dba-berne-appliance-repair.pdf"
                  className="inline-flex items-center gap-2 rounded-lg border border-border/70 bg-card/60 px-3 py-2 text-sm hover:bg-accent"
                >
                  <FileCheck2 className="size-4 text-primary" />
                  Registro DBA
                </a>
              </div>
            </div>
            <Card className="h-fit gap-3 p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                Cobertura Sur de Florida
              </div>
              <p className="text-sm text-muted-foreground">
                Miami-Dade, Broward y Palm Beach — despacho de emergencia el
                mismo día para cuentas comerciales.
              </p>
              <ul className="mt-2 space-y-1 text-sm">
                <li>· Miami-Dade County</li>
                <li>· Broward County</li>
                <li>· Palm Beach County</li>
              </ul>
              <LinkButton
                href={`/es/request-dispatch?industry=${profile.slug}`}
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
            Equipo que atendemos en {v.industry}
          </h2>
          <p className="mt-2 max-w-3xl text-muted-foreground">
            Marcas y configuraciones concretas que nuestros técnicos
            verdaderamente abren y reparan — no una lista de marketing.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {v.equipment.map((cat) => (
              <Card key={cat.name} className="gap-2 p-5">
                <div className="text-sm font-semibold">{cat.name}</div>
                <div className="text-xs text-muted-foreground">
                  {cat.brands.join(" · ")}
                </div>
                {cat.notes ? (
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {cat.notes}
                  </p>
                ) : null}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Problemas comunes de reparación en {v.industry}
          </h2>
          <ul className="mt-6 space-y-3">
            {v.commonIssues.map((issue, i) => (
              <li
                key={i}
                className="flex gap-3 rounded-lg border border-border/60 bg-card/60 p-4 text-sm text-muted-foreground"
              >
                <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  {i + 1}
                </span>
                <span>{issue}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border/60 bg-accent/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Área de servicio
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Despachamos en los tres condados del Sur de Florida para{" "}
            {v.industry}: Miami-Dade, Broward y Palm Beach. La mayoría de las
            emergencias reciben respuesta el mismo día de Miami Beach a Boca
            Raton.
          </p>
          <div className="mt-4">
            <Link
              href="/es/service-areas"
              className="text-sm font-medium text-primary hover:underline"
            >
              Ver área de servicio completa →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Por qué el mismo día importa para {v.industry}
          </h2>
          <p className="mt-4 text-muted-foreground">{v.sameDay}</p>
        </div>
      </section>

      {related.length ? (
        <section className="border-b border-border/60 bg-accent/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Servicios relacionados
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  href={`/es/services/${s.slug}`}
                  className="group rounded-lg border border-border/60 bg-card p-4 transition hover:border-primary/40"
                >
                  <div className="text-sm font-semibold group-hover:text-primary">
                    {s.shortTitle}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {s.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Solicitar servicio para su operación de{" "}
            {v.industryTitle.toLowerCase()}
          </h2>
          <p className="mt-2 text-muted-foreground">
            Un despachador confirmará la ventana de servicio pronto.
          </p>
          <div className="mt-8">
            <DispatchForm locale="es" />
          </div>
        </div>
      </section>

      {v.faqs.length ? (
        <>
          <FAQSection
            faqs={v.faqs}
            title={`Preguntas frecuentes — ${v.industryTitle}`}
          />
          <JsonLd data={faqSchema(v.faqs)} />
        </>
      ) : null}

      <JsonLd
        data={serviceSchema({
          name: `Reparación de Equipo para ${v.industryTitle}`,
          description: v.metaDescription,
          url: `${site.url}/es/industries/${profile.slug}`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", url: `${site.url}/es` },
          { name: "Industrias", url: `${site.url}/es/industries` },
          {
            name: v.industryTitle,
            url: `${site.url}/es/industries/${profile.slug}`,
          },
        ])}
      />
    </PageShell>
  )
}

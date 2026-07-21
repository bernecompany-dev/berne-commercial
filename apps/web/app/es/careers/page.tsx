import type { Metadata } from "next"
import { CheckCircle2, MapPin, ShieldCheck, Wrench } from "lucide-react"
import { PageHero, PageShell } from "@/components/page-shell"
import { JsonLd } from "@/components/json-ld"
import { CareersApplyForm } from "@/components/careers-apply-form"
import { metaFor } from "@/lib/seo"
import { site } from "@/lib/site"
import { JOB, POSTING_DATE, VALID_THROUGH } from "@/lib/data/careers"

export const metadata: Metadata = metaFor({
  title: "Carreras — Técnico de equipos comerciales y refrigeración | Berne Commercial",
  description:
    "Berne Commercial busca un técnico de equipos comerciales y refrigeración en el sur de Florida. W-2, equipo de 18 técnicos, órdenes estables en Miami-Dade, Broward y Palm Beach.",
  path: "/es/careers",
  locale: "es",
})

function jobPostingJsonLdEs() {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "@id": `${site.url}/es/careers#${JOB.slug}`,
    inLanguage: "es-US",
    title: JOB.titleEs,
    description: `<p>${JOB.descriptionEs}</p><h3>Requisitos</h3><ul>${JOB.requirementsEs
      .map((r) => `<li>${r}</li>`)
      .join("")}</ul>`,
    identifier: {
      "@type": "PropertyValue",
      name: site.name,
      value: `berne-commercial-careers-${JOB.slug}-es`,
    },
    datePosted: POSTING_DATE,
    validThrough: VALID_THROUGH,
    employmentType: JOB.employmentType,
    industry: "Servicio de Equipos Comerciales",
    occupationalCategory: "49-9031.00 Home Appliance Repairers",
    hiringOrganization: {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      sameAs: site.url,
      logo: `${site.url}/opengraph-image`,
    },
    jobLocation: JOB.counties.map((county) => ({
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: county,
        addressRegion: "FL",
        addressCountry: "US",
      },
    })),
    skills: JOB.skillsEs,
    qualifications: JOB.requirementsEs.join("; "),
    directApply: true,
  }
}

export default function CareersPageEs() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${site.url}/es` },
      { "@type": "ListItem", position: 2, name: "Carreras", item: `${site.url}/es/careers` },
    ],
  }

  return (
    <PageShell locale="es">
      <PageHero
        eyebrow="Carreras"
        title="Técnico de equipos comerciales y refrigeración — Sur de Florida"
        description="Berne Commercial repara equipos de cocina comercial y refrigeración desde 2015. Sumamos un técnico más a un equipo de 18 en nómina W-2, con rutas en Miami-Dade, Broward y Palm Beach."
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <ShieldCheck className="size-3.5" aria-hidden />
            Tiempo completo, W-2
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-foreground/80">
            <MapPin className="size-3.5 text-primary" aria-hidden />
            Miami-Dade · Broward · Palm Beach
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-foreground/80">
            <Wrench className="size-3.5 text-primary" aria-hidden />
            Refrigeración · cocina · lavandería
          </span>
        </div>
      </PageHero>

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <article className="space-y-6 text-base leading-relaxed text-foreground/90">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              El trabajo
            </h2>
            <p>
              Nuestros clientes son restaurantes, cocinas de hotel, torres de
              condominios y administradores de propiedades. Una semana típica:
              un cuarto frío que pierde temperatura en un restaurante, una
              máquina de hielo parada en el bar de un hotel, un lavavajillas
              que se detuvo a mitad de servicio, equipos de lavandería en un
              condominio. El despacho le entrega la ruta y la logística de
              repuestos — usted no busca trabajo. El flujo de órdenes
              comerciales se mantiene estable desde 2015.
            </p>
            <p>
              Todo el equipo está en nómina W-2. Hoy hay 18 técnicos de planta;
              usted sería el número 19.
            </p>

            <h2 className="pt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              Requisitos
            </h2>
            <ul className="space-y-3">
              {JOB.requirementsEs.map((r) => (
                <li key={r} className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="mt-1 size-4 shrink-0 text-primary"
                    aria-hidden
                  />
                  <span>{r}</span>
                </li>
              ))}
            </ul>

            <h2 className="pt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              Cómo aplicar
            </h2>
            <p>
              Use el formulario de abajo — nombre, teléfono, ciudad y unas
              líneas sobre su experiencia. Un despachador devuelve la llamada,
              normalmente el mismo día. Si prefiere hablar primero, llame al{" "}
              <a href={site.phoneHref} className="text-primary hover:underline">
                {site.phone}
              </a>{" "}
              y diga que llama por la posición de técnico.
            </p>
          </article>
        </div>
      </section>

      <section id="apply" className="border-t border-border/60 bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <CareersApplyForm locale="es" />
        </div>
      </section>

      <JsonLd data={[jobPostingJsonLdEs(), breadcrumb]} />
    </PageShell>
  )
}

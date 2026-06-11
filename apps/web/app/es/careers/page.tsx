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
  title: "Carreras — Berne Commercial Repair",
  description:
    "Únete a Berne Commercial Repair en el sur de Florida. Contratando técnicos senior de refrigeración, técnicos de cocina comercial y coordinadores de despacho.",
  path: "/es/careers",
  locale: "es",
})

function jobPostingJsonLdEs(roleSlug: string) {
  const role = CAREERS.find((r) => r.slug === roleSlug)!
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "@id": `${site.url}/es/careers#${role.slug}`,
    inLanguage: "es-US",
    title: role.titleEs,
    description: `<p>${role.descriptionEs}</p><h3>Requisitos</h3><ul>${role.requirementsEs
      .map((r) => `<li>${r}</li>`)
      .join("")}</ul>`,
    identifier: {
      "@type": "PropertyValue",
      name: site.name,
      value: `berne-commercial-careers-${role.slug}-es`,
    },
    datePosted: POSTING_DATE,
    validThrough: VALID_THROUGH,
    employmentType: role.employmentType,
    industry: "Servicio de Equipos Comerciales",
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
    skills: role.skillsEs,
    qualifications: role.requirementsEs.join("; "),
    directApply: false,
  }
}

export default function CareersPageEs() {
  const jobPostings = CAREERS.map((r) => jobPostingJsonLdEs(r.slug))

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${site.url}/es` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Carreras",
        item: `${site.url}/es/careers`,
      },
    ],
  }

  const collectionPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${site.url}/es/careers#collection`,
    url: `${site.url}/es/careers`,
    name: `${site.name} — Carreras`,
    inLanguage: "es-US",
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": `${site.url}/#organization` },
  }

  const benefits = [
    {
      icon: <ShieldCheck className="size-5 text-primary" aria-hidden />,
      title: "Empleo W-2",
      body:
        "No 1099. Nómina, compensación laboral y cumplimiento de empleador en FL manejados internamente.",
    },
    {
      icon: <GraduationCap className="size-5 text-primary" aria-hidden />,
      title: "Capacitación OEM + CFESA",
      body:
        "La empresa paga la certificación CFESA, módulos MSA y escuelas de fabricantes específicas de marca.",
    },
    {
      icon: <Wrench className="size-5 text-primary" aria-hidden />,
      title: "Back-end de despacho corporativo",
      body:
        "ServiceChannel, Corrigo, FacilitySource, ServiceTitan — manejamos las plataformas; tú manejas el trabajo.",
    },
    {
      icon: <Briefcase className="size-5 text-primary" aria-hidden />,
      title: "Documentación lista para vendor",
      body:
        "COI, W-9, MSA, banca — ya implementados en las principales cuentas corporativas.",
    },
    {
      icon: <MapPin className="size-5 text-primary" aria-hidden />,
      title: "Dos oficinas",
      body: "Sede Hallandale Beach + Boca Raton — elige la más cercana.",
    },
    {
      icon: <BadgeDollarSign className="size-5 text-primary" aria-hidden />,
      title: "Premium de guardia",
      body:
        "Pago garantizado por llamada durante la rotación de guardia, no solo tarifa de viaje.",
    },
  ]

  return (
    <PageShell locale="es">
      <PageHero
        eyebrow="Carreras"
        title="Construye una carrera en servicio comercial de campo."
        description={`${site.name} está contratando en el sur de Florida. Somos una organización de servicio comercial corporativo — refrigeración, equipos de restaurante, máquinas de hielo, lavandería comercial — y reclutamos en una curva de habilidades diferente a la residencial. Roles abiertos abajo.`}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Briefcase className="size-3.5" aria-hidden />
            Aceptando solicitudes ahora
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-foreground/80">
            <ShieldCheck className="size-3.5 text-primary" aria-hidden />
            W-2 · listo para vendor
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-foreground/80">
            <GraduationCap className="size-3.5 text-primary" aria-hidden />
            Capacitación CFESA + OEM
          </span>
        </div>
      </PageHero>

      <section className="border-b border-border/60 bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <div className="text-xs font-medium uppercase tracking-wider text-primary">
              Por qué trabajar en Berne Commercial
            </div>
            <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              El trabajo, sin las tonterías habituales del servicio comercial.
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

      <section id="open-roles" className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <div className="text-xs font-medium uppercase tracking-wider text-primary">
              Roles abiertos
            </div>
            <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Aceptando solicitudes ahora.
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Aplica enviando tu currículum + 3 referencias a{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-primary hover:underline"
              >
                {site.email}
              </a>{" "}
              con el título del rol en el asunto, o llama al{" "}
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
                      {role.titleEs}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {role.workLocationEs}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                    <BadgeDollarSign className="size-3.5" aria-hidden />
                    {role.pay.labelEs}
                  </span>
                </header>

                <p className="text-base leading-relaxed text-foreground/90">
                  {role.descriptionEs}
                </p>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Requisitos
                    </h4>
                    <ul className="mt-3 space-y-2 text-sm">
                      {role.requirementsEs.map((r) => (
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
                      Detalles del empleo
                    </h4>
                    <dl className="mt-3 space-y-1.5 text-sm">
                      <div className="flex items-baseline justify-between gap-3 border-b border-border pb-1.5">
                        <dt className="text-muted-foreground">Tipo</dt>
                        <dd className="font-medium">Tiempo completo, W-2</dd>
                      </div>
                      <div className="flex items-baseline justify-between gap-3 border-b border-border pb-1.5">
                        <dt className="text-muted-foreground">Ubicación</dt>
                        <dd className="font-medium text-right">
                          {role.workLocationEs}
                        </dd>
                      </div>
                      <div className="flex items-baseline justify-between gap-3 border-b border-border pb-1.5">
                        <dt className="text-muted-foreground">Pago</dt>
                        <dd className="font-medium text-right">{role.pay.labelEs}</dd>
                      </div>
                      <div className="flex items-baseline justify-between gap-3 border-b border-border pb-1.5">
                        <dt className="text-muted-foreground">Publicado</dt>
                        <dd className="font-medium">{POSTING_DATE}</dd>
                      </div>
                    </dl>
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      <a
                        href={`mailto:${site.email}?subject=Solicitud: ${encodeURIComponent(role.titleEs)}`}
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                      >
                        <Mail className="size-4" aria-hidden />
                        Enviar currículum
                      </a>
                      <a
                        href={site.phoneHref}
                        className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40"
                      >
                        <Phone className="size-4 text-primary" aria-hidden />
                        Llamar al reclutador
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how-we-hire"
        className="border-t border-border/60 bg-muted/30 py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <div className="text-xs font-medium uppercase tracking-wider text-primary">
              Cómo contratamos
            </div>
            <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              5 pasos. Aproximadamente una semana de principio a fin.
            </h2>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["1", "Enviar currículum", `Envía CV + 3 referencias a ${site.email}.`],
              ["2", "Llamada inicial", "15 minutos con el gerente de contratación."],
              [
                "3",
                "Entrevista en persona",
                "30-45 minutos en la sede Hallandale o Boca.",
              ],
              [
                "4",
                "Evaluación de habilidades",
                "Solo roles técnicos — un día acompañando en una camioneta comercial.",
              ],
              [
                "5",
                "Decisión en 1 semana",
                "Oferta, fecha de inicio y onboarding W-2.",
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
              <strong className="text-foreground">
                Empleador de igualdad de oportunidades.
              </strong>{" "}
              Berne Commercial Repair contrata en función de la habilidad y la
              actitud. No discriminamos por raza, color, origen nacional, religión,
              sexo, edad, discapacidad, condición de veterano o cualquier otra clase
              protegida.
            </p>
          </div>
          <div className="mt-8 text-sm text-muted-foreground">
            ¿Carrera en reparación de electrodomésticos residenciales? Visita{" "}
            <Link
              href="https://www.berne-repair.com/es/careers"
              className="text-primary hover:underline"
            >
              berne-repair.com/es/careers
            </Link>
            .
          </div>
        </div>
      </section>

      <JsonLd data={[...jobPostings, collectionPage, breadcrumb]} />
    </PageShell>
  )
}

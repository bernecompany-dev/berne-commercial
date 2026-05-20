import type { Metadata } from "next"
import Image from "next/image"
import { Quote } from "lucide-react"
import { PageHero, PageShell } from "@/components/page-shell"
import { TrustedBy } from "@/components/trusted-by"
import { WhyUs } from "@/components/why-us"
import { TeamGrid } from "@/components/team-grid"
import { CredentialsSection } from "@/components/credentials-section"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Nosotros — Empresa de servicio comercial",
  description:
    "Berne Commercial Repair es una empresa de servicio comercial del Sur de Florida enfocada en refrigeración, equipo de restaurante y despacho corporativo.",
  alternates: {
    canonical: "/es/about",
    languages: {
      en: "/about",
      es: "/es/about",
      "x-default": "/about",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_US",
    url: `${site.url}/es/about`,
    siteName: site.name,
  },
}

export default function AboutPageES() {
  return (
    <PageShell locale="es">
      <PageHero
        eyebrow="Nosotros"
        title="Empresa de servicio comercial del Sur de Florida"
        description={`${site.name} brinda reparación comercial de nivel corporativo en Miami-Dade, Broward y Palm Beach — construida para apoyar restaurantes, plantas de producción, retail y edificios administrados.`}
      />

      <section className="border-b border-border/60 bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <Image
                src={site.founder.photo}
                alt={site.founder.name}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="text-xs font-medium uppercase tracking-wider text-primary">
              Fundador
            </div>
            <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Soy {site.founder.name}, ingeniero de formación — y construí
              Berne Commercial para operar con ingeniería, no con improvisación.
            </h2>
            <div className="mt-6 space-y-4 text-base text-muted-foreground">
              <p className="flex items-start gap-3">
                <Quote className="mt-1 size-5 shrink-0 text-primary" />
                <span>
                  La mayoría de las empresas de servicio en Florida fueron
                  construidas para servir a hogares. Restaurantes,
                  supermercados, hoteles y plantas de producción viven una
                  realidad completamente distinta — cada hora que un walk-in
                  está caído, el inventario está en riesgo, el food cost
                  sube y las operaciones se paralizan. Construimos nuestro
                  despacho, nuestros técnicos y nuestra documentación
                  alrededor de esa realidad.
                </span>
              </p>
              <p>
                Cada miembro del equipo es un técnico con formación de
                ingeniería. Por eso tomamos el trabajo que otros talleres
                rechazan — diagnóstico a nivel de control board, loops de
                refrigeración complejos, reconstrucciones completas de
                walk-in, sistemas de lavandería comercial con eléctrica
                custom. No vendemos trabajos fáciles. Resolvemos los
                difíciles.
              </p>
              <p>
                Berne Commercial opera con 11 años en el negocio, 18
                técnicos certificados y más de 29,000 servicios
                completados — calificación 4.79 ★ en 871 reseñas
                verificadas. Hoy operamos despacho comercial en
                Miami-Dade, Broward y Palm Beach para restaurantes,
                cadenas, plantas de producción, hoteles, retail y
                edificios administrados. Con licencia, asegurados,
                listos para COI y disponibles para servicio de
                emergencia el mismo día.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6 text-sm sm:grid-cols-4">
              <div>
                <div className="text-2xl font-semibold tracking-tight">11</div>
                <div className="text-xs text-muted-foreground">
                  Años en el negocio
                </div>
              </div>
              <div>
                <div className="text-2xl font-semibold tracking-tight">18</div>
                <div className="text-xs text-muted-foreground">
                  Técnicos certificados
                </div>
              </div>
              <div>
                <div className="text-2xl font-semibold tracking-tight">29,000+</div>
                <div className="text-xs text-muted-foreground">
                  Servicios completados
                </div>
              </div>
              <div>
                <div className="text-2xl font-semibold tracking-tight">4.79 ★</div>
                <div className="text-xs text-muted-foreground">
                  871 reseñas verificadas
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="text-sm font-semibold">{site.founder.name}</div>
              <div className="text-sm text-muted-foreground">
                Fundador y Operador, {site.name}
              </div>
            </div>
          </div>
        </div>
      </section>

      <TeamGrid locale="es" />
      <CredentialsSection locale="es" />
      <WhyUs locale="es" />
      <TrustedBy locale="es" />
    </PageShell>
  )
}

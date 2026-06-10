import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Quote } from "lucide-react"
import { PageHero, PageShell } from "@/components/page-shell"
import { TrustedBy } from "@/components/trusted-by"
import { WhyUs } from "@/components/why-us"
import { TeamGrid } from "@/components/team-grid"
import { CredentialsSection } from "@/components/credentials-section"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Nosotros — Berne Commercial Repair · Sur de Florida desde 2015",
  description:
    "Fundada en 2015 por Eugene Bernitsky. 18 técnicos W-2, más de 29,000 servicios, 4.79/871 reseñas. Despacho comercial para restaurantes, hoteles, supermercados y administración de propiedades en el Sur de Florida — listos para COI, NDA, y costo de downtime.",
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
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
}

export default function AboutPageES() {
  return (
    <PageShell locale="es">
      <PageHero
        eyebrow="Nosotros"
        title="Organización de servicio comercial construida para las operaciones del Sur de Florida"
        description={`Fundada en 2015. ${site.name} corre despacho comercial en Miami-Dade, Broward, Palm Beach y la Costa del Golfo para restaurantes, hoteles, supermercados, plantas de producción y portfolios administrados — diseñada alrededor de la verdad operativa de que cada hora de downtime cuesta dólares.`}
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
              Soy {site.founder.name}. Construimos Berne Commercial para
              operar con ingeniería y SLA, no con improvisación.
            </h2>
            <div className="mt-6 space-y-4 text-base text-muted-foreground">
              <p className="flex items-start gap-3">
                <Quote className="mt-1 size-5 shrink-0 text-primary" />
                <span>
                  Arranqué la familia Berne en 2015 porque las cocinas
                  comerciales, supermercados, hoteles y líneas de producción
                  del sur de Florida estaban recibiendo trato de servicio
                  residencial — sin SLA, sin COI, sin confiabilidad de
                  despacho, y con una factura de $400 por un diagnóstico de
                  $40. Cada hora que un walk-in está caído, el inventario
                  está en riesgo, el food cost sube y las operaciones se
                  paralizan. Construimos el despacho, el roster de
                  técnicos, el inventario de partes y la documentación de
                  Berne Commercial alrededor de esa realidad — no
                  alrededor de la del hogar.
                </span>
              </p>
              <p>
                Once años después, la operación son 18 técnicos W-2 en la
                calle, más de 29,000 servicios completados en la familia
                Berne, y una calificación agregada de 4.79★ en 871 reseñas
                verificadas. Los técnicos vienen con formación de
                ingeniería — por eso tomamos el trabajo que otros talleres
                rechazan: diagnóstico a nivel de control board, loops de
                refrigeración complejos, reconstrucciones completas de
                walk-in, sistemas de cerveza con glycol, lavandería
                comercial con eléctrica custom, recuperaciones de NSF
                inspector. No vendemos trabajos fáciles. Resolvemos los
                difíciles — bajo SLA, bajo COI, bajo NDA cuando el
                operador lo requiere.
              </p>
              <p>
                Cómo trabajamos con los operadores: un solo contacto de
                despachador para portfolios multi-unidad, facturas
                subidas vía mobile y fotos al cierre para el
                departamento de AP, garantía de 90 días de mano de obra
                por escrito, y un estándar comercial de mismo día en
                Miami-Dade, Broward y Palm Beach. El diagnóstico en sitio
                comercial es un flat {site.serviceCall}, acreditado si
                procede. Llevamos partes OEM para las verticales en las
                que corremos despacho — Hobart, Vulcan, True, Manitowoc,
                Hoshizaki, Rational, Garland, Traulsen, Beverage-Air,
                Frymaster en cocina; Speed Queen, Continental, Wascomat
                en lavandería comercial.
              </p>
              <p>
                Berne Commercial es una de tres marcas coordinadas
                dentro de la familia Berne. Los clientes residenciales
                son atendidos por nuestra rama de consumo{" "}
                <a
                  href="https://bernerepair.com/"
                  rel="noopener"
                  className="text-foreground underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
                >
                  bernerepair.com
                </a>
                . El residencial premium — columnas Sub-Zero, Wolf
                dual-fuel, Miele built-in para casas de Bal Harbour /
                Fisher Island / Sunny Isles — se despacha vía{" "}
                <a
                  href="https://www.berne-repair.com/"
                  rel="noopener"
                  className="text-foreground underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
                >
                  berne-repair.com
                </a>
                . El mismo estándar de capacitación, el mismo modelo
                W-2, y el mismo flujo de rendición de cuentas en las
                tres. Berne Commercial despacha desde 1001 N Federal
                Hwy #230 en Hallandale Beach (HQ) y 131 S Federal Hwy
                #533 en Boca Raton. Tres líneas comerciales: (754)
                345-4515, (954) 569-8550 y (561) 858-9919. Con
                licencia, asegurados, listos para COI.
              </p>
              <p>
                Berne es miembro de{" "}
                <a
                  href="https://msaworld.com/"
                  rel="noopener external"
                  target="_blank"
                  className="text-foreground underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
                >
                  MSA World
                </a>
                {" "}(Marcone Servicers Association), la principal asociación
                de la industria para contratistas de servicio de
                electrodomésticos. Nuestros técnicos completan capacitación
                continua sobre tecnología emergente de refrigeración y
                equipo comercial a través de cursos de MSA World y
                actualizaciones de certificación OEM (Sub-Zero, Wolf,
                Miele, Hobart, Manitowoc, Hoshizaki, Rational) — para que
                el camión que llega a su loading dock esté equipado para
                reparar el equipo que realmente opera, no una hoja de
                especificaciones de hace cinco años.
              </p>
              <p>
                Hacia dónde vamos: la huella comercial se amplía durante
                2026 y 2027 — seis a ocho técnicos sumados a la flota en
                los próximos 18 meses, cobertura ampliada en la Costa del
                Golfo (Tampa, Sarasota, Naples), y un despachador
                dedicado multi-location para grupos de restaurantes y
                portfolios de administración de propiedades. La premisa
                no cambia: la hospitalidad y las operaciones del sur de
                Florida no deberían tener que descubrir el gap de
                confiabilidad de vendor un viernes en la noche con el
                walk-in a 52°F.
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
              <Link
                href="/team/eugene-bernitsky"
                className="mt-2 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                Perfil del fundador →
              </Link>
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

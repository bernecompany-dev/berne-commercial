import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Utensils,
  Hotel,
  WashingMachine,
  Hospital,
  ShoppingCart,
  School,
  Dumbbell,
  Beer,
  Trophy,
  Building,
  type LucideIcon,
} from "lucide-react"
import { PageHero, PageShell } from "@/components/page-shell"
import { Card } from "@workspace/ui/components/card"
import { LinkButton } from "@/components/link-button"
import { JsonLd } from "@/components/json-ld"
import { metaFor } from "@/lib/seo"
import { site } from "@/lib/site"
import { INDUSTRY_PROFILES } from "@/lib/data/industry-profiles"
import { industries as legacyIndustries } from "@/lib/data/industries"

export const metadata: Metadata = metaFor({
  title: "Industrias que Atendemos — Reparación Comercial",
  description:
    "Restaurantes, hoteles, lavanderías, salud, supermercados, escuelas, gimnasios, cervecerías, country clubs, multi-familiares — reparación comercial Sur de Florida.",
  path: "/es/industries",
  locale: "es",
})

const ICON_BY_SLUG: Record<string, LucideIcon> = {
  restaurants: Utensils,
  hotels: Hotel,
  laundromats: WashingMachine,
  healthcare: Hospital,
  grocery: ShoppingCart,
  schools: School,
  gyms: Dumbbell,
  breweries: Beer,
  "country-clubs": Trophy,
  "multi-family": Building,
}

const ES_LABELS: Record<string, { name: string; teaser: string }> = {
  restaurants: {
    name: "Restaurantes",
    teaser:
      "Walk-ins, estufas, freidoras, campanas, hielo, espresso — un solo despacho, el mismo día.",
  },
  hotels: {
    name: "Hoteles",
    teaser:
      "Lavandería OPL, cocinas de banquete, cuartos de hielo, breakfast bar — un vendedor, cada piso.",
  },
  laundromats: {
    name: "Lavanderías",
    teaser:
      "Speed Queen, Huebsch, Wascomat, Continental — coin, card y flotas de ruta.",
  },
  healthcare: {
    name: "Salud / Médico",
    teaser:
      "Refrigeración de vacunas, lab, cocina de hospital, hielo — discreto, documentado, certificado.",
  },
  grocery: {
    name: "Supermercados",
    teaser:
      "Vitrinas, walk-ins, deli, racks de refrigeración, hielo — cobertura por tienda.",
  },
  schools: {
    name: "Escuelas y Universidades",
    teaser:
      "Cafeterías K-12, dining universitario, lavavajillas, walk-ins, milk coolers.",
  },
  gyms: {
    name: "Gimnasios",
    teaser:
      "Smoothie bars, estaciones de licuadora, juice press, retail coolers.",
  },
  breweries: {
    name: "Cervecerías y Destilerías",
    teaser:
      "Glycol chillers, kegerators, cuartos fríos, refrigeración de taproom.",
  },
  "country-clubs": {
    name: "Country Clubs",
    teaser:
      "Cocinas de catering, refrigeración de banquete, cuartos de hielo, halfway-house.",
  },
  "multi-family": {
    name: "Multi-Familiar / Apartamentos",
    teaser:
      "Lavandería de área común, cocinas de amenity, electrodomésticos in-unit.",
  },
}

const PROFILE_SLUGS = new Set(INDUSTRY_PROFILES.map((p) => p.slug))

const LEGACY_ES: Record<string, { name: string; blurb: string }> = {
  "commercial-kitchens": {
    name: "Cocinas Comerciales",
    blurb: "Cocinas de producción, ghost kitchens, operaciones de catering.",
  },
  "food-production": {
    name: "Producción de Alimentos",
    blurb: "Walk-ins, congelación profunda y equipo de procesamiento.",
  },
  "retail-chains": {
    name: "Cadenas de Retail",
    blurb: "Servicio multi-locación con reportes para vendor.",
  },
  "property-management": {
    name: "Administración de Propiedad",
    blurb: "Cobertura de equipo en todo el edificio y reemplazo.",
  },
  "facility-management": {
    name: "Facility Management",
    blurb: "Despacho listo para vendor y mantenimiento preventivo.",
  },
  warehouses: {
    name: "Almacenes",
    blurb: "Almacenamiento frío, break rooms, cocinas en sitio.",
  },
  "condo-buildings": {
    name: "Edificios de Condominios",
    blurb: "Equipo de áreas comunes y cocinas de amenities.",
  },
  franchises: {
    name: "Franquicias",
    blurb: "Servicio estandarizado en múltiples locaciones.",
  },
  logistics: {
    name: "Logística y Distribución",
    blurb: "Almacenamiento refrigerado y equipo de break-room.",
  },
  "grocery-stores": {
    name: "Supermercados",
    blurb: "Refrigeradores de exhibición, walk-ins, prep de deli.",
  },
  "medical-facilities": {
    name: "Instituciones Médicas",
    blurb: "Máquinas de hielo, refrigeración de farmacia, cocinas de personal.",
  },
}

export default function IndustriesPageES() {
  const additional = legacyIndustries.filter(
    (i) => !PROFILE_SLUGS.has(i.slug) && LEGACY_ES[i.slug],
  )

  return (
    <PageShell locale="es">
      <PageHero
        eyebrow="Industrias"
        title="Hecho para operaciones comerciales"
        description="Berne Commercial Repair atiende 10 verticales principales en el Sur de Florida — refrigeración, equipo de restaurante, lavandería comercial, hielo y más. Despacho corporativo, trabajo de refrigerante certificado EPA, NDA-friendly."
      >
        <div className="flex flex-wrap gap-3">
          <LinkButton href="/es/request-dispatch">
            Solicitar Despacho <ArrowRight className="size-4" />
          </LinkButton>
          <LinkButton href="/es/services" variant="outline">
            Ver todos los servicios
          </LinkButton>
        </div>
      </PageHero>

      <section className="border-b border-border/60 bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Verticales que cubrimos en profundidad
          </h2>
          <p className="mt-2 max-w-3xl text-muted-foreground">
            Cada vertical tiene una página de servicio dedicada con categorías
            de equipo, modos de falla comunes, y un FAQ de la industria.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRY_PROFILES.map((p) => {
              const Icon = ICON_BY_SLUG[p.slug] ?? Building
              const label = ES_LABELS[p.slug] ?? {
                name: p.industryTitle,
                teaser: p.hero,
              }
              return (
                <Link
                  key={p.slug}
                  href={`/es/industries/${p.slug}`}
                  className="group block"
                >
                  <Card className="h-full gap-3 p-6 transition group-hover:border-primary/40">
                    <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <div className="text-base font-semibold group-hover:text-primary">
                      {label.name}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {label.teaser}
                    </p>
                    <div className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary">
                      Explorar
                      <ArrowRight className="size-3" />
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {additional.length ? (
        <section className="border-b border-border/60 bg-accent/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Verticales adicionales que atendemos
            </h2>
            <p className="mt-2 max-w-3xl text-muted-foreground">
              También damos soporte a estos verticales adyacentes en cuentas
              comerciales — mismo despacho, mismos equipos.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {additional.map(({ slug, icon: Icon }) => {
                const es = LEGACY_ES[slug]
                if (!es) return null
                return (
                  <Card key={slug} className="gap-3 p-5">
                    <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <div className="text-sm font-semibold">{es.name}</div>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {es.blurb}
                    </p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-background py-16">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            ¿Necesita un vertical que no listamos?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Si su operación corre refrigeración comercial, equipo de
            restaurante, lavandería comercial, hielo o sistemas de campana —
            probablemente lo cubrimos. Llame al despacho.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <LinkButton href="/es/request-dispatch">
              Solicitar Despacho
            </LinkButton>
            <LinkButton href="/es/contact" variant="outline">
              Contáctenos
            </LinkButton>
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Industrias que Atendemos",
          url: `${site.url}/es/industries`,
          inLanguage: "es-US",
          isPartOf: { "@id": `${site.url}/#website` },
          hasPart: INDUSTRY_PROFILES.map((p) => ({
            "@type": "Service",
            name: `Reparación de Equipo para ${
              ES_LABELS[p.slug]?.name ?? p.industryTitle
            }`,
            url: `${site.url}/es/industries/${p.slug}`,
          })),
        }}
      />
    </PageShell>
  )
}

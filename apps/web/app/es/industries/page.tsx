import type { Metadata } from "next"
import { PageHero, PageShell } from "@/components/page-shell"
import { Card } from "@workspace/ui/components/card"
import { industries } from "@/lib/data/industries"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Industrias — Cobertura de servicio comercial",
  description:
    "Restaurantes, plantas de producción, hoteles, cadenas de retail, administración de propiedad — industrias que atiende Berne Commercial Repair.",
  alternates: {
    canonical: "/es/industries",
    languages: {
      en: "/industries",
      es: "/es/industries",
      "x-default": "/industries",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_US",
    url: `${site.url}/es/industries`,
    siteName: site.name,
  },
}

const INDUSTRY_ES: Record<string, { name: string; blurb: string }> = {
  restaurants: { name: "Restaurantes", blurb: "Refrigeración, freidoras, hornos, máquinas de hielo — respuesta el mismo día." },
  "commercial-kitchens": { name: "Cocinas Comerciales", blurb: "Cocinas de producción, ghost kitchens, operaciones de catering." },
  "food-production": { name: "Producción de Alimentos", blurb: "Walk-ins, congelación profunda y equipo de procesamiento." },
  "grocery-stores": { name: "Supermercados", blurb: "Refrigeradores de exhibición, walk-ins, prep de deli, sistemas de hielo." },
  hotels: { name: "Hoteles", blurb: "Cocinas, lavandería, máquinas de hielo y equipo de back-of-house." },
  "retail-chains": { name: "Cadenas de Retail", blurb: "Servicio multi-locación con reportes para vendor." },
  "property-management": { name: "Administración de Propiedad", blurb: "Cobertura de equipo en todo el edificio y reemplazo." },
  "facility-management": { name: "Facility Management", blurb: "Despacho listo para vendor y mantenimiento preventivo." },
  warehouses: { name: "Almacenes", blurb: "Almacenamiento frío, break rooms, cocinas en sitio." },
  "medical-facilities": { name: "Instituciones Médicas", blurb: "Máquinas de hielo, refrigeración de farmacia, cocinas de personal." },
  schools: { name: "Escuelas", blurb: "Refrigeración de cafetería y equipo de cocina." },
  "condo-buildings": { name: "Edificios de Condominios", blurb: "Equipo de áreas comunes y cocinas de amenities." },
  franchises: { name: "Franquicias", blurb: "Servicio estandarizado en múltiples locaciones." },
  logistics: { name: "Logística y Distribución", blurb: "Almacenamiento refrigerado y equipo de break-room." },
}

export default function IndustriesPageES() {
  return (
    <PageShell locale="es">
      <PageHero
        eyebrow="Industrias"
        title="Hecho para operaciones comerciales"
        description="Despacho corporativo, reportes para vendors y cobertura de alto volumen operacional."
      />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ slug, icon: Icon }) => {
              const es = INDUSTRY_ES[slug]
              if (!es) return null
              return (
                <Card key={slug} className="gap-3 p-6">
                  <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <div className="text-base font-semibold">{es.name}</div>
                  <p className="text-sm text-muted-foreground">{es.blurb}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </PageShell>
  )
}

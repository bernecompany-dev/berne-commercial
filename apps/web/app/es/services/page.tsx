import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PageHero, PageShell } from "@/components/page-shell"
import { Card } from "@workspace/ui/components/card"
import { servicesByCategory, SERVICE_CATEGORIES } from "@/lib/data/services"
import { site } from "@/lib/site"

const CATEGORY_LABELS_ES: Record<keyof typeof SERVICE_CATEGORIES, string> = {
  refrigeration: "Refrigeración Comercial",
  "ice-machines": "Máquinas de Hielo",
  "restaurant-equipment": "Equipo de Restaurante",
  "beverage-frozen": "Equipo de Bebidas y Congelados",
  ventilation: "Ventilación y Extracción",
  vending: "Equipo de Vending",
  "commercial-laundry": "Lavandería Comercial",
  other: "Otro Equipo Comercial",
}

export const metadata: Metadata = {
  title: "Servicios de reparación comercial",
  description:
    "Refrigeración, máquinas de hielo, equipo de restaurante, lavandería comercial — cobertura completa en el Sur de Florida.",
  alternates: {
    canonical: "/es/services",
    languages: {
      en: "/services",
      es: "/es/services",
      "x-default": "/services",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_US",
    url: `${site.url}/es/services`,
    siteName: site.name,
  },
}

export default function ServicesPageES() {
  const groups = servicesByCategory()
  return (
    <PageShell locale="es">
      <PageHero
        eyebrow="Servicios"
        title="Servicios de reparación comercial"
        description="Refrigeración, equipo de restaurante, máquinas de hielo, lavandería comercial y sistemas de back-of-house."
      />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl space-y-14 px-4 sm:px-6 lg:px-8">
          {groups.map((g) => (
            <div key={g.category}>
              <h2 className="text-xl font-semibold tracking-tight">
                {CATEGORY_LABELS_ES[g.category]}
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/es/services/${s.slug}`}
                    className="group"
                  >
                    <Card className="h-full gap-3 p-5 transition-all hover:border-primary/40 hover:shadow-md">
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-sm font-semibold">
                          {s.title}
                        </span>
                        <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {s.summary}
                      </p>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  )
}

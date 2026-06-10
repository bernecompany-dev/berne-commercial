import type { Metadata } from "next"
import Link from "next/link"
import { PageHero, PageShell } from "@/components/page-shell"
import { citiesByCounty } from "@/lib/data/cities"
import { site } from "@/lib/site"

const COUNTY_LABELS_ES = {
  "miami-dade": "Miami-Dade",
  broward: "Broward",
  "palm-beach": "Palm Beach",
}

export const metadata: Metadata = {
  title: "Áreas de servicio — Sur de Florida",
  description:
    "Cobertura de reparación comercial en Miami-Dade, Broward y Palm Beach.",
  alternates: {
    canonical: "/es/service-areas",
    languages: {
      en: "/service-areas",
      es: "/es/service-areas",
      "x-default": "/service-areas",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_US",
    url: `${site.url}/es/service-areas`,
    siteName: site.name,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
}

export default function ServiceAreasPageES() {
  const counties = citiesByCounty()
  return (
    <PageShell locale="es">
      <PageHero
        eyebrow="Áreas de servicio"
        title="Cobertura comercial en el Sur de Florida"
        description="Miami-Dade, Broward y Palm Beach — despacho de emergencia el mismo día para cuentas comerciales."
      />
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          {counties.map((c) => (
            <div key={c.county}>
              <h2 className="text-xl font-semibold tracking-tight">
                Condado de {COUNTY_LABELS_ES[c.county]}
              </h2>
              <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 lg:grid-cols-4">
                {c.items.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/es/${city.slug}`}
                    className="text-sm text-foreground hover:text-primary"
                  >
                    {city.name} →
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

import type { Metadata } from "next"
import { PageHero, PageShell } from "@/components/page-shell"
import { brands } from "@/lib/data/brands"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Marcas comerciales que reparamos",
  description:
    "Hoshizaki, Manitowoc, Scotsman, Turbo Air, True y otras marcas comerciales — cobertura de servicio en el Sur de Florida.",
  alternates: {
    canonical: "/es/brands",
    languages: {
      en: "/brands",
      es: "/es/brands",
      "x-default": "/brands",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_US",
    url: `${site.url}/es/brands`,
    siteName: site.name,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
}

export default function BrandsPageES() {
  const primary = brands.filter((b) => b.primary)
  const others = brands.filter((b) => !b.primary)

  return (
    <PageShell locale="es">
      <PageHero
        eyebrow="Marcas"
        title="Marcas comerciales que reparamos"
        description="Técnicos certificados de fábrica para las marcas que mueven cocinas comerciales, máquinas de hielo, refrigeración y lavandería comercial en el Sur de Florida."
      />
      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold tracking-tight">Marcas principales</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {primary.map((b) => (
              <span
                key={b.name}
                className="rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
              >
                {b.name}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-accent/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold tracking-tight">
            Marcas adicionales
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {others.map((b) => (
              <span
                key={b.name}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground"
              >
                {b.name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}

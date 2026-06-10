import type { Metadata } from "next"
import { CheckCircle2 } from "lucide-react"
import { PageHero, PageShell } from "@/components/page-shell"
import { DispatchForm } from "@/components/dispatch-form"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Hacerse cliente — Servicio comercial corporativo",
  description:
    "Onboarding de restaurantes, plantas de producción y edificios administrados con Berne Commercial Repair.",
  alternates: {
    canonical: "/es/become-a-client",
    languages: {
      en: "/become-a-client",
      es: "/es/become-a-client",
      "x-default": "/become-a-client",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_US",
    url: `${site.url}/es/become-a-client`,
    siteName: site.name,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
}

const capabilities = [
  "Despacho multi-locación y reportes",
  "COI y onboarding de vendor (W-9, seguro)",
  "Cobertura de property management y facility management",
  "Refrigeración, equipo de restaurante, hielo, lavandería",
  "Coordinación de reemplazo cuando la reparación no es viable",
  "Despacho comercial de emergencia 24/7",
]

export default function BecomeAClientPageES() {
  return (
    <PageShell locale="es">
      <PageHero
        eyebrow="Hacerse cliente"
        title="Alianza de servicio comercial corporativo"
        description="Onboarding de restaurantes, cadenas, plantas de producción y edificios administrados con una relación de despacho dedicada."
      />
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold tracking-tight">
              Capacidades comerciales
            </h2>
            <p className="mt-4 text-muted-foreground">
              Berne Commercial Repair opera como vendor en todo el Sur de
              Florida — construido para cadenas, restaurantes, producción de
              alimentos, hoteles, retail y administradores de propiedad.
            </p>
            <ul className="mt-6 space-y-3">
              {capabilities.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-xl border border-border bg-muted/40 p-5 text-sm">
              <div className="font-semibold">Envíe onboarding a</div>
              <a
                href={`mailto:${site.email}`}
                className="text-primary hover:underline"
              >
                {site.email}
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <DispatchForm locale="es" />
          </div>
        </div>
      </section>
    </PageShell>
  )
}

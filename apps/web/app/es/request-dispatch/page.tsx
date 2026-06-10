import type { Metadata } from "next"
import { PageHero, PageShell } from "@/components/page-shell"
import { DispatchForm } from "@/components/dispatch-form"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Solicitar despacho comercial",
  description:
    "Envíe una solicitud de despacho para refrigeración comercial, hielo, equipo de restaurante o lavandería comercial.",
  alternates: {
    canonical: "/es/request-dispatch",
    languages: {
      en: "/request-dispatch",
      es: "/es/request-dispatch",
      "x-default": "/request-dispatch",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_US",
    url: `${site.url}/es/request-dispatch`,
    siteName: site.name,
  },
}

// CTA query params (?city= ?service= ?brand= ?topic=) are read client-side
// inside <DispatchForm/> so this route stays statically prerendered.
export default function RequestDispatchPageES() {
  return (
    <PageShell locale="es">
      <PageHero
        eyebrow="Despacho"
        title="Solicitar despacho comercial"
        description="Envíe los detalles del equipo y un coordinador confirmará la ventana de servicio. Llamada de servicio comercial: $89."
      />
      <section className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <DispatchForm locale="es" />
        </div>
      </section>
    </PageShell>
  )
}

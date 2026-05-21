import type { Metadata } from "next"
import Link from "next/link"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: `Qué cookies usa ${site.name}, para qué sirven y cómo desactivarlas.`,
  alternates: {
    canonical: "/es/cookies",
    languages: {
      "en-US": `${site.url}/cookies`,
      "es-US": `${site.url}/es/cookies`,
      "x-default": `${site.url}/cookies`,
    },
  },
  robots: { index: true, follow: true },
}

export default function CookiesPageES() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <nav className="mb-6 flex items-center gap-2 text-xs text-muted-foreground" aria-label="Breadcrumb">
        <Link href="/es" className="hover:text-foreground">Inicio</Link>
        <span aria-hidden>/</span>
        <span className="text-foreground/80">Cookies</span>
      </nav>
      <h1 className="text-4xl font-semibold tracking-tight">Política de Cookies</h1>
      <p className="mt-3 text-sm text-muted-foreground">Última actualización: 2026-05-20</p>

      <div className="mt-10 space-y-6 text-base leading-relaxed">
        <p>
          Esta página explica las cookies y tecnologías de almacenamiento
          similares que {site.name} usa en{" "}
          <a className="text-primary hover:underline" href={site.url}>{site.url}</a>{" "}
          y cómo controlarlas. Mantenemos el uso de cookies al mínimo — sin
          rastreadores publicitarios, sin píxeles de cross-site, sin reventa
          de identificadores.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">Qué son las cookies</h2>
        <p>
          Las cookies son pequeños archivos de texto que un sitio guarda en su
          navegador para recordar preferencias, medir tráfico agregado y
          proteger formularios del abuso automatizado. El almacenamiento de
          navegador relacionado (localStorage, sessionStorage) cumple el mismo
          propósito sin escribir un archivo de cookie.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">Cookies que establecemos</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Esenciales</strong> — tokens anti-spam en el formulario
            de despacho y una cookie de enrutamiento que evita envíos
            duplicados. No pueden desactivarse sin romper el formulario.
          </li>
          <li>
            <strong>Funcionales</strong> — su elección de idioma (inglés o
            español) se guarda en localStorage para servir la versión correcta
            en visitas posteriores. Ningún tercero la lee.
          </li>
          <li>
            <strong>Analítica</strong> — Google Analytics 4 establece cookies
            de primera parte (<code>_ga</code>, <code>_ga_*</code>) con IP
            anonimizada para ver páginas vistas agregadas, fuentes de tráfico
            y qué categorías de equipo consultan los visitantes. No se envían
            identificadores personales.
          </li>
          <li>
            <strong>Mapas embebidos</strong> — Google Maps puede establecer
            sus propias cookies cuando un mapa se carga en páginas de áreas
            de servicio. Desactive bloqueando cookies de terceros; el mapa
            simplemente no se renderizará.
          </li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">Lo que no usamos</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>Sin Facebook Pixel ni rastreo de Meta.</li>
          <li>Sin cookies de retargeting o publicidad.</li>
          <li>Sin rastreo cross-site ni fingerprinting.</li>
          <li>Sin venta de datos de ningún tipo.</li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">Cómo controlar las cookies</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>Bloquee o elimine cookies en la configuración del navegador (Chrome, Safari, Firefox, Edge — todos soportan control por sitio).</li>
          <li>Active "Do Not Track" o la señal "Global Privacy Control" del navegador — honramos ambas.</li>
          <li>Opte por no participar de Google Analytics instalando la{" "}
            <a className="text-primary hover:underline" href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">extensión oficial de exclusión de GA</a>.
          </li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">Actualizaciones</h2>
        <p>
          Si agregamos o eliminamos cookies actualizaremos esta página. Vea
          la{" "}
          <Link href="/es/privacy" className="text-primary hover:underline">Política de Privacidad</Link>{" "}
          para el cuadro completo de lo que recopilamos y por qué.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">Contacto</h2>
        <p>
          Preguntas: escriba a{" "}
          <a className="text-primary hover:underline" href={`mailto:${site.email}`}>{site.email}</a>{" "}
          o llame al{" "}
          <a className="text-primary hover:underline" href={site.phoneHref}>{site.phone}</a>.
        </p>
      </div>
    </article>
  )
}

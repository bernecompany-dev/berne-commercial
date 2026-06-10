import { LinkButton, AnchorButton } from "@/components/link-button"
import { PageShell } from "@/components/page-shell"
import { site } from "@/lib/site"

// Spanish 404 — mirrors EN /not-found.tsx with commercial tone in Spanish.
export default function NotFound() {
  const destinations = [
    { href: "/es", label: "Inicio" },
    { href: "/es/services", label: "Servicios comerciales" },
    { href: "/es/industries", label: "Industrias" },
    { href: "/es/brands", label: "Marcas que reparamos" },
    { href: "/es/service-areas", label: "Áreas de servicio" },
    { href: "/es/blog", label: "Blog" },
    { href: "/es/about", label: "Sobre Berne Commercial" },
    { href: "/es/contact", label: "Contacto" },
  ]

  return (
    <PageShell locale="es">
      <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
          404 · Página no encontrada
        </div>
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Esa página no existe — te redirigimos.
        </h1>
        <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
          No pudimos encontrar lo que buscabas. Elige un destino, o llama a
          despacho y te llevamos al lugar correcto.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <LinkButton href="/es/request-dispatch">Solicitar servicio</LinkButton>
          <AnchorButton href={site.phoneHref} variant="outline">
            Llamar {site.phone}
          </AnchorButton>
        </div>

        <nav
          aria-label="Destinos populares"
          className="mt-12 w-full max-w-3xl"
        >
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Destinos populares
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
            {destinations.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-md border border-border bg-card px-3 py-2 text-left hover:border-primary/40 hover:bg-primary/5"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </PageShell>
  )
}

import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { Card } from "@workspace/ui/components/card"
import { site } from "@/lib/site"
import { kindLabelEs, search, toEsUrl } from "@/lib/search-index"

// Spanish search results — same index, /es-prefixed URLs where available.
// Noindex for the same reason as the EN version.
export const metadata: Metadata = {
  title: "Buscar · Berne Commercial Repair",
  description:
    "Buscar Berne Commercial Repair — servicios, industrias, marcas, áreas de servicio y guías para equipos comerciales del sur de Florida.",
  robots: { index: false, follow: true },
  alternates: { canonical: `${site.url}/es/search` },
}

export const dynamic = "force-dynamic"

type SP = { q?: string | string[] }

function highlight(text: string, q: string): string {
  if (!q) return text
  const esc = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  return text.replace(new RegExp(`(${esc})`, "ig"), "<mark>$1</mark>")
}

const POPULAR_ES = [
  { href: "/es/services/commercial-refrigeration-repair", label: "Refrigeración comercial" },
  { href: "/es/services/ice-machine-repair", label: "Máquinas de hielo" },
  { href: "/es/services/commercial-dishwasher-repair", label: "Lavavajillas comerciales" },
  { href: "/es/industries/restaurants", label: "Restaurantes" },
  { href: "/es/industries/hotels", label: "Hoteles" },
  { href: "/es/brands/hobart", label: "Hobart" },
  { href: "/es/service-areas", label: "Áreas de servicio" },
  { href: "/blog", label: "Guías" },
]

export default async function SearchPageEs({
  searchParams,
}: {
  searchParams: Promise<SP>
}) {
  const params = await searchParams
  const raw = params.q
  const first = Array.isArray(raw) ? raw[0] ?? "" : raw ?? ""
  const q = first.trim()
  const hits = q ? search(q, 20) : []

  return (
    <PageShell locale="es">
      <section className="border-b border-border/60 bg-gradient-to-b from-background to-accent/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mb-3 text-xs font-medium uppercase tracking-wider text-primary">
            Búsqueda
          </div>
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {q ? (
              <>
                Resultados para &ldquo;{q}&rdquo;
                <span className="ml-3 align-middle text-base font-medium text-muted-foreground">
                  ({hits.length} resultado{hits.length === 1 ? "" : "s"})
                </span>
              </>
            ) : (
              "Buscar Berne Commercial Repair"
            )}
          </h1>

          <form
            action="/es/search"
            method="get"
            role="search"
            aria-label="Búsqueda del sitio"
            className="mt-6 flex w-full max-w-2xl flex-wrap items-stretch gap-2"
          >
            <label htmlFor="berne-search-input-es" className="sr-only">
              Buscar
            </label>
            <input
              id="berne-search-input-es"
              type="search"
              name="q"
              defaultValue={q}
              placeholder="p.ej. máquina de hielo, walk-in, Hobart, Hoshizaki"
              className="min-w-[240px] flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <button
              type="submit"
              className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Buscar
            </button>
          </form>

          <p className="mt-3 text-sm text-muted-foreground">
            O llama a despacho al{" "}
            <a href={site.phoneHref} className="font-semibold text-primary hover:underline">
              {site.phone}
            </a>
            . Visita comercial {site.serviceCall}.
          </p>
        </div>
      </section>

      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {q === "" && (
            <p className="text-sm text-muted-foreground">
              Escribe una marca, un electrodoméstico, una industria o una ciudad
              para encontrar servicios y guías en todo el sitio.
            </p>
          )}

          {q !== "" && hits.length === 0 && (
            <Card className="border-dashed p-6">
              <h2 className="text-lg font-semibold">
                Sin resultados para &ldquo;{q}&rdquo;
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Prueba una marca (Hobart, Vulcan, Hoshizaki), una categoría
                (máquina de hielo, walk-in, lavavajillas) o una industria
                (restaurantes, hoteles, producción).
              </p>
            </Card>
          )}

          {hits.length > 0 && (
            <ol className="grid gap-3">
              {hits.map((h) => {
                const url = toEsUrl(h.url)
                return (
                  <li key={`${h.kind}-${h.url}`}>
                    <Link
                      href={url}
                      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
                    >
                      <Card className="gap-2 p-5 transition-colors group-hover:ring-primary/40 group-focus-visible:ring-primary/60">
                        <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                          {kindLabelEs(h.kind)}
                        </div>
                        <h2
                          className="text-balance text-lg font-semibold leading-snug tracking-tight"
                          dangerouslySetInnerHTML={{ __html: highlight(h.title, q) }}
                        />
                        <p
                          className="text-sm text-muted-foreground"
                          dangerouslySetInnerHTML={{ __html: highlight(h.text, q) }}
                        />
                        <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                          <span className="font-mono">{url}</span>
                          <ArrowRight className="size-3 opacity-60 transition-all group-hover:translate-x-0.5" />
                        </div>
                      </Card>
                    </Link>
                  </li>
                )
              })}
            </ol>
          )}

          <nav
            aria-label="Destinos populares"
            className="mt-12 border-t border-border/60 pt-6"
          >
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Destinos populares
            </h2>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm sm:grid-cols-3 lg:grid-cols-5">
              {POPULAR_ES.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="block rounded-md border border-border bg-card px-3 py-2 hover:border-primary/40 hover:bg-primary/5"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </PageShell>
  )
}

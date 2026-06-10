import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { Card } from "@workspace/ui/components/card"
import { site } from "@/lib/site"
import { kindLabel, search } from "@/lib/search-index"

// Internal search is deliberately noindex — Google explicitly asks site
// owners not to index search result pages. Form action + SearchAction
// urlTemplate already use /search?q= (see lib/seo.ts websiteSchema()).
export const metadata: Metadata = {
  title: "Search · Berne Commercial Repair",
  description:
    "Search Berne Commercial Repair — services, industries, brands, service areas, and field-notes articles for South Florida commercial equipment.",
  robots: { index: false, follow: true },
  alternates: { canonical: `${site.url}/search` },
}

export const dynamic = "force-dynamic"

type SP = { q?: string | string[] }

function highlight(text: string, q: string): string {
  if (!q) return text
  const esc = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  return text.replace(new RegExp(`(${esc})`, "ig"), "<mark>$1</mark>")
}

const POPULAR = [
  { href: "/services/commercial-refrigeration-repair", label: "Commercial refrigeration" },
  { href: "/services/ice-machine-repair", label: "Ice machines" },
  { href: "/services/commercial-dishwasher-repair", label: "Commercial dishwashers" },
  { href: "/services/fryer-repair", label: "Commercial fryers" },
  { href: "/industries/restaurants", label: "Restaurants" },
  { href: "/industries/hotels", label: "Hotels" },
  { href: "/brands/hobart", label: "Hobart specialist" },
  { href: "/brands/manitowoc", label: "Manitowoc specialist" },
  { href: "/service-areas", label: "Service areas" },
  { href: "/blog", label: "Field notes blog" },
]

export default async function SearchPage({
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
    <PageShell>
      <section className="border-b border-border/60 bg-gradient-to-b from-background to-accent/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mb-3 text-xs font-medium uppercase tracking-wider text-primary">
            Search
          </div>
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {q ? (
              <>
                Results for &ldquo;{q}&rdquo;
                <span className="ml-3 align-middle text-base font-medium text-muted-foreground">
                  ({hits.length} match{hits.length === 1 ? "" : "es"})
                </span>
              </>
            ) : (
              "Search Berne Commercial Repair"
            )}
          </h1>

          <form
            action="/search"
            method="get"
            role="search"
            aria-label="Site search"
            className="mt-6 flex w-full max-w-2xl flex-wrap items-stretch gap-2"
          >
            <label htmlFor="berne-search-input" className="sr-only">
              Search
            </label>
            <input
              id="berne-search-input"
              type="search"
              name="q"
              defaultValue={q}
              placeholder="e.g. ice machine, walk-in cooler, Hobart, Hoshizaki"
              className="min-w-[240px] flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <button
              type="submit"
              className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Search
            </button>
          </form>

          <p className="mt-3 text-sm text-muted-foreground">
            Or call dispatch at{" "}
            <a href={site.phoneHref} className="font-semibold text-primary hover:underline">
              {site.phone}
            </a>
            . Commercial service call {site.serviceCall}.
          </p>
        </div>
      </section>

      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {q === "" && (
            <p className="text-sm text-muted-foreground">
              Type a brand, an appliance, an industry, or a city to find
              commercial services, guides, and service areas across the site.
            </p>
          )}

          {q !== "" && hits.length === 0 && (
            <Card className="border-dashed p-6">
              <h2 className="text-lg font-semibold">
                Nothing matched &ldquo;{q}&rdquo;
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Try a brand (Hobart, Vulcan, Hoshizaki), an appliance category
                (ice machine, walk-in cooler, dishwasher), or an industry
                (restaurants, hotels, food production).
              </p>
            </Card>
          )}

          {hits.length > 0 && (
            <ol className="grid gap-3">
              {hits.map((h) => (
                <li key={`${h.kind}-${h.url}`}>
                  <Link
                    href={h.url}
                    className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
                  >
                    <Card className="gap-2 p-5 transition-colors group-hover:ring-primary/40 group-focus-visible:ring-primary/60">
                      <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {kindLabel(h.kind)}
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
                        <span className="font-mono">{h.url}</span>
                        <ArrowRight className="size-3 opacity-60 transition-all group-hover:translate-x-0.5" />
                      </div>
                    </Card>
                  </Link>
                </li>
              ))}
            </ol>
          )}

          <nav
            aria-label="Popular destinations"
            className="mt-12 border-t border-border/60 pt-6"
          >
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Popular destinations
            </h2>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm sm:grid-cols-3 lg:grid-cols-5">
              {POPULAR.map((p) => (
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

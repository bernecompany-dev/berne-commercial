import { LinkButton, AnchorButton } from "@/components/link-button"
import { PageShell } from "@/components/page-shell"
import { site } from "@/lib/site"

// Custom 404 — branded, commercial-tone. WebSite + SearchAction JSON-LD is
// already emitted sitewide via lib/seo.ts websiteSchema() from RootLayout —
// the schema alone carries the sitelinks-searchbox contract. No visible
// search form here: the home page doesn't render ?q= results, and a search
// box that silently discards the query is worse than none.
export default function NotFound() {
  const destinations = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Commercial services" },
    { href: "/industries", label: "Industries served" },
    { href: "/brands", label: "Brands we service" },
    { href: "/service-areas", label: "Service areas" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About Berne Commercial" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <PageShell>
      <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
          404 · Page not found
        </div>
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          That page isn&apos;t live — let&apos;s reroute you.
        </h1>
        <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
          We couldn&apos;t find what you were looking for. Pick a destination
          below, or call dispatch and we&apos;ll get you to the right place.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <LinkButton href="/request-dispatch">Request service</LinkButton>
          <AnchorButton href={site.phoneHref} variant="outline">
            Call {site.phone}
          </AnchorButton>
        </div>

        <nav
          aria-label="Popular destinations"
          className="mt-12 w-full max-w-3xl"
        >
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Popular destinations
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

import { LinkButton, AnchorButton } from "@/components/link-button"
import { PageShell } from "@/components/page-shell"
import { site } from "@/lib/site"

// Custom 404 — branded, commercial-tone. WebSite + SearchAction JSON-LD is
// already emitted sitewide via lib/seo.ts websiteSchema() from RootLayout.
// We surface a search form (submits to home with ?q=) so the URL contract
// stays consistent with the SearchAction target — Google reads the form action
// pattern for sitelinks searchbox heuristics in addition to the schema.
export default function NotFound() {
  const destinations = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Commercial services" },
    { href: "/industries", label: "Industries served" },
    { href: "/brands", label: "Brands we service" },
    { href: "/service-areas", label: "Service areas" },
    { href: "/blog", label: "Field notes" },
    { href: "/credentials", label: "Credentials" },
    { href: "/team", label: "Our team" },
    { href: "/about", label: "About Berne Commercial" },
    { href: "/request-dispatch", label: "Request dispatch" },
    { href: "/become-a-client", label: "Become a client" },
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
          below, search the site, or call dispatch and we&apos;ll get you to
          the right place.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <LinkButton href="/request-dispatch">Request dispatch</LinkButton>
          <AnchorButton href={site.phoneHref} variant="outline">
            Call {site.phone}
          </AnchorButton>
        </div>

        {/* Internal search — submits to home with ?q= (matches the
            SearchAction target). The home doesn't render results today
            but the URL form is the contract Google reads for sitelinks. */}
        <form
          action="/"
          method="get"
          role="search"
          aria-label="Site search"
          className="mt-10 flex w-full max-w-md items-center gap-2"
        >
          <label htmlFor="berne-404-search" className="sr-only">
            Search Berne Commercial
          </label>
          <input
            type="search"
            name="q"
            id="berne-404-search"
            placeholder="Search e.g. ice machine, walk-in, Hobart…"
            className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
          <button
            type="submit"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Search
          </button>
        </form>

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

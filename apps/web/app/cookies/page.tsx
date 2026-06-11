import type { Metadata } from "next"
import Link from "next/link"
import { site } from "@/lib/site"
import { metaFor } from "@/lib/seo"

// metaFor keeps the hreflang cluster (en/es/x-default) symmetric with the
// ES counterpart, which also uses metaFor.
export const metadata: Metadata = metaFor({
  title: "Cookie Policy",
  description: `Which cookies ${site.name} uses, what they do, and how to disable them.`,
  path: "/cookies",
})

export default function CookiesPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <nav className="mb-6 flex items-center gap-2 text-xs text-muted-foreground" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span aria-hidden>/</span>
        <span className="text-foreground/80">Cookies</span>
      </nav>
      <h1 className="text-4xl font-semibold tracking-tight">Cookie Policy</h1>
      <p className="mt-3 text-sm text-muted-foreground">Last updated: 2026-05-20</p>

      <div className="mt-10 space-y-6 text-base leading-relaxed">
        <p>
          This page explains the cookies and similar storage technologies that{" "}
          {site.name} uses on{" "}
          <a className="text-primary hover:underline" href={site.url}>{site.url}</a>{" "}
          and how to control them. We keep cookie use minimal — no advertising
          trackers, no cross-site pixels, no resale of identifiers.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">What cookies are</h2>
        <p>
          Cookies are small text files that a site stores in your browser to
          remember preferences, measure aggregate traffic, and protect forms
          from automated abuse. Related browser storage (localStorage,
          sessionStorage) serves the same purpose without writing a cookie
          file.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">Cookies we set</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Essential</strong> — anti-spam tokens on the dispatch form
            and a routing cookie that prevents duplicate submissions. Cannot
            be disabled without breaking the form.
          </li>
          <li>
            <strong>Functional</strong> — your language choice (English or
            Spanish) is remembered in localStorage so we serve the right
            version on return visits. No third party reads it.
          </li>
          <li>
            <strong>Analytics</strong> — Google Analytics 4 sets first-party
            cookies (<code>_ga</code>, <code>_ga_*</code>) with anonymized IP
            so we can see aggregate page views, traffic sources, and which
            equipment categories visitors look up. No personal identifiers are
            sent.
          </li>
          <li>
            <strong>Map embeds</strong> — Google Maps may set its own cookies
            when a map loads on service-area pages. Disable by blocking
            third-party cookies; the map will simply not render.
          </li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">What we do not use</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>No Facebook Pixel or Meta tracking.</li>
          <li>No retargeting or advertising cookies.</li>
          <li>No cross-site or fingerprint tracking.</li>
          <li>No data sales of any kind.</li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">How to control cookies</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>Block or delete cookies in your browser settings (Chrome, Safari, Firefox, Edge — all support per-site control).</li>
          <li>Enable "Do Not Track" or the "Global Privacy Control" signal — we honor both.</li>
          <li>Opt out of Google Analytics by installing the official{" "}
            <a className="text-primary hover:underline" href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">GA opt-out browser extension</a>.
          </li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">Updates</h2>
        <p>
          If we add or remove cookies we will update this page. See the{" "}
          <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>{" "}
          for the full picture of what we collect and why.
        </p>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">Contact</h2>
        <p>
          Questions: email{" "}
          <a className="text-primary hover:underline" href={`mailto:${site.email}`}>{site.email}</a>{" "}
          or call{" "}
          <a className="text-primary hover:underline" href={site.phoneHref}>{site.phone}</a>.
        </p>
      </div>
    </article>
  )
}

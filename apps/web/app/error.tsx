"use client"

import { useEffect } from "react"
import { AnchorButton, LinkButton } from "@/components/link-button"
import { site } from "@/lib/site"

/**
 * Root error boundary — branded fallback instead of Next's unstyled default.
 * For a lead-gen site the recovery path matters: keep the phone number and a
 * retry button in front of the visitor instead of a dead white screen.
 *
 * Deliberately does NOT render PageShell (navbar/footer): the footer is a
 * server component whose data imports would be dragged into this client
 * bundle, and a minimal standalone section can't itself throw.
 */
export default function RootError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Surface in the console / Vercel logs for diagnostics.
    console.error("route error boundary:", error)
  }, [error])

  return (
    <main
      id="main"
      className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8"
    >
      <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-destructive/30 bg-destructive/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-destructive">
        Something went wrong
      </div>
      <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
        This page hit a snag — dispatch didn&apos;t.
      </h1>
      <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
        An unexpected error interrupted the page. Try again, or call and a
        dispatcher will take it from here — 24/7.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          Try again
        </button>
        <AnchorButton href={site.phoneHref} variant="outline">
          Call {site.phone}
        </AnchorButton>
        <LinkButton href="/" variant="ghost">
          Back to home
        </LinkButton>
      </div>
    </main>
  )
}

"use client"

import { useEffect, useState } from "react"

declare global {
  interface Window {
    gtag?: (...a: unknown[]) => void
    fbq?: (...a: unknown[]) => void
  }
}

const STORAGE_KEY = "berne-consent"

/**
 * gtag.js loads with strategy="lazyOnload" (see components/google-analytics.tsx),
 * so window.gtag may not exist yet when the banner hydrates. Pushing the raw
 * `arguments` object onto window.dataLayer is exactly what the gtag() stub
 * does — gtag.js drains the queue when it eventually loads, so consent
 * commands are never lost to the race.
 *
 * Consent Mode v2 DEFAULTS (analytics granted, ad_* denied — US/CCPA opt-out
 * model) are set by the pre-hydration inline script in google-analytics.tsx,
 * which always runs before this banner hydrates. This component only issues
 * `consent update` commands: "OK" opts into ad_*, "Decline" opts out of
 * analytics_storage.
 */
function gtagQueue(..._args: unknown[]) {
  if (typeof window === "undefined") return
  if (typeof window.gtag === "function") {
    window.gtag(..._args)
    return
  }
  const w = window as unknown as { dataLayer?: unknown[] }
  w.dataLayer = w.dataLayer || []
  // eslint-disable-next-line prefer-rest-params
  w.dataLayer.push(arguments)
}

function applyGranted() {
  if (typeof window === "undefined") return
  gtagQueue("consent", "update", {
    ad_storage: "granted",
    analytics_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
  })
  if (typeof window.fbq === "function") {
    window.fbq("consent", "grant")
  }
}

function applyOptOut() {
  if (typeof window === "undefined") return
  // ad_* is already denied by default — only analytics needs the opt-out.
  gtagQueue("consent", "update", {
    analytics_storage: "denied",
  })
  if (typeof window.fbq === "function") {
    window.fbq("consent", "revoke")
  }
}

export function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (!stored) {
        setShow(true)
      } else if (stored === "accepted") {
        applyGranted()
      } else if (stored === "essential-only") {
        applyOptOut()
      }
    } catch {
      // localStorage blocked — still show banner so users can act.
      setShow(true)
    }
  }, [])

  function accept() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "accepted")
    } catch {
      /* ignore */
    }
    applyGranted()
    setShow(false)
  }

  function decline() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "essential-only")
    } catch {
      /* ignore */
    }
    applyOptOut()
    setShow(false)
  }

  if (!show) return null

  // Compact notice bar: single row on mobile (text + OK / Decline) so it no
  // longer covers the hero CTA zone on 390px viewports. Stays at bottom-36
  // to clear the WhatsApp FAB (max-md:bottom-20, 56px tall) but is now ~50px
  // tall instead of ~130px.
  return (
    <div
      className="berne-consent fixed bottom-36 left-2 right-2 z-[60] rounded-xl border border-border bg-background/95 px-3 py-2 shadow-lg backdrop-blur md:bottom-4 md:left-auto md:right-24 md:max-w-md md:rounded-2xl md:p-4"
      role="region"
      aria-label="Cookie consent"
      aria-live="polite"
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 md:flex-col md:items-start">
        <p className="min-w-0 flex-1 text-xs text-foreground md:text-sm">
          We use cookies to improve service and measure traffic.{" "}
          <a href="/cookies" className="underline underline-offset-2">
            Learn more
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={accept}
            className="rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/80 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px md:py-2.5 md:text-sm"
          >
            OK
          </button>
          <button
            type="button"
            onClick={decline}
            className="rounded-md border border-border bg-transparent px-3 py-1.5 text-xs text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px md:py-2.5 md:text-sm"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}

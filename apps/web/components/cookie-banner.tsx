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

function applyDefaultDeny() {
  if (typeof window === "undefined") return
  gtagQueue("consent", "default", {
    ad_storage: "denied",
    analytics_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    functionality_storage: "granted",
    security_storage: "granted",
  })
  if (typeof window.fbq === "function") {
    window.fbq("consent", "revoke")
  }
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

export function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    // Set Consent Mode v2 defaults on every load (deny-by-default).
    applyDefaultDeny()

    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (!stored) {
        setShow(true)
      } else if (stored === "accepted") {
        applyGranted()
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

  function essentialOnly() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "essential-only")
    } catch {
      /* ignore */
    }
    setShow(false)
  }

  if (!show) return null

  return (
    <div
      className="berne-consent fixed bottom-36 left-4 right-4 z-[60] rounded-2xl border border-border bg-background/95 p-4 shadow-xl backdrop-blur md:bottom-4 md:left-auto md:right-24 md:max-w-md"
      role="region"
      aria-label="Cookie consent"
      aria-live="polite"
    >
      <p className="mb-3 text-sm text-foreground">
        We use cookies to improve service and measure traffic.{" "}
        <a href="/cookies" className="underline underline-offset-2">
          Learn more
        </a>
        .
      </p>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={accept}
          className="rounded-md bg-primary px-3 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px"
        >
          Accept all
        </button>
        <button
          type="button"
          onClick={essentialOnly}
          className="rounded-md border border-border bg-transparent px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px"
        >
          Essential only
        </button>
      </div>
    </div>
  )
}

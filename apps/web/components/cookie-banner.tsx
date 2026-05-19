"use client"

import { useEffect, useState } from "react"

declare global {
  interface Window {
    gtag?: (...a: unknown[]) => void
  }
}

const STORAGE_KEY = "berne-consent"

function applyDefaultDeny() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return
  window.gtag("consent", "default", {
    ad_storage: "denied",
    analytics_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    functionality_storage: "granted",
    security_storage: "granted",
  })
}

function applyGranted() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return
  window.gtag("consent", "update", {
    ad_storage: "granted",
    analytics_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
  })
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
      className="berne-consent fixed bottom-20 left-4 right-4 z-40 rounded-2xl border border-border bg-background/95 p-4 shadow-xl backdrop-blur md:bottom-4 md:left-auto md:right-4 md:max-w-md"
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
    >
      <p className="mb-3 text-sm text-foreground">
        We use cookies to improve service and measure traffic.{" "}
        <a href="/about" className="underline underline-offset-2">
          Learn more
        </a>
        .
      </p>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={accept}
          className="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Accept all
        </button>
        <button
          type="button"
          onClick={essentialOnly}
          className="rounded-md border border-border bg-transparent px-3 py-1.5 text-sm text-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Essential only
        </button>
      </div>
    </div>
  )
}

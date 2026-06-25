"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { CheckCircle2, Loader2, Phone, X } from "lucide-react"
import { site } from "@/lib/site"
import { readAttribution } from "@/lib/attribution"

/**
 * Quick-lead slide-in — the "popup", done the way that doesn't get penalized.
 *
 * - NOT a full-screen interstitial (Google penalizes those on mobile, and B2B
 *   buyers hate them). It's a small dismissible card pinned to the bottom-left
 *   on desktop only.
 * - DESKTOP ONLY (md+). Mobile already has the fixed Call/Request CTA bar +
 *   the WhatsApp FAB, so a mobile card would just collide and annoy.
 * - Two fields only — name + phone (+ optional urgency). Address/details are
 *   collected by the dispatcher on the callback; the whole point is the
 *   lowest-friction capture possible.
 * - Shows ONCE per browser session (sessionStorage), after the visitor has
 *   shown intent: scrolled ~45% of the page OR moved the cursor toward the tab
 *   bar (exit intent), whichever comes first, with an 8s minimum dwell.
 * - Suppressed on the pages that already are the form (/request-dispatch,
 *   /contact, /become-a-client) and their /es twins.
 * - Posts to the same /api/dispatch endpoint and fires the same conversion
 *   events as the main DispatchForm so attribution stays consistent.
 */

const DISMISS_KEY = "berne_quicklead_done"
const SUPPRESSED = [
  "/request-dispatch",
  "/contact",
  "/become-a-client",
  "/es/request-dispatch",
  "/es/contact",
  "/es/become-a-client",
]

type Status = "idle" | "submitting" | "success" | "error"

export function QuickLeadPopup() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState<Status>("idle")
  const firedRef = useRef(false)

  const suppressed = SUPPRESSED.some(
    (p) => pathname === p || pathname?.startsWith(`${p}/`),
  )

  useEffect(() => {
    if (suppressed) return
    if (typeof window === "undefined") return
    // Respect prior dismissal/submit for this session and a coarse desktop
    // check (the card is md+ only via CSS, but no point arming on touch).
    try {
      if (sessionStorage.getItem(DISMISS_KEY)) return
    } catch {
      /* private mode — just proceed */
    }
    if (window.matchMedia("(max-width: 767px)").matches) return

    const mountedAt = Date.now()
    const reveal = () => {
      if (firedRef.current) return
      if (Date.now() - mountedAt < 8000) return // min dwell
      firedRef.current = true
      setOpen(true)
      cleanup()
    }
    const onScroll = () => {
      const sc = window.scrollY + window.innerHeight
      const h = document.documentElement.scrollHeight
      if (h > 0 && sc / h >= 0.45) reveal()
    }
    const onMouseOut = (e: MouseEvent) => {
      // Exit intent: cursor leaves through the top of the viewport.
      if (e.clientY <= 0 && !e.relatedTarget) reveal()
    }
    const fallback = window.setTimeout(reveal, 35000)
    function cleanup() {
      window.removeEventListener("scroll", onScroll)
      document.removeEventListener("mouseout", onMouseOut)
      window.clearTimeout(fallback)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    document.addEventListener("mouseout", onMouseOut)
    return cleanup
  }, [suppressed, pathname])

  function markDone() {
    try {
      sessionStorage.setItem(DISMISS_KEY, "1")
    } catch {
      /* ignore */
    }
  }

  function dismiss() {
    setOpen(false)
    markDone()
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus("submitting")
    const fd = new FormData(form)
    // Honeypot — bots fill it, the API silently no-ops.
    if (String(fd.get("website_url") ?? "").trim() !== "") {
      setStatus("success")
      markDone()
      return
    }
    const payload = {
      contact: String(fd.get("contact") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      urgency: String(fd.get("urgency") ?? ""),
      issue: "Quick callback request (slide-in)",
      ...readAttribution(),
    }
    try {
      const res = await fetch("/api/dispatch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error("submit failed")
      setStatus("success")
      markDone()
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          form: "quick_lead",
          urgency: payload.urgency,
        })
        window.gtag("event", "conversion", {
          send_to: "AW-18232464152/dCXNCM-JqL0cEJim9fVD",
        })
      }
      if (typeof window !== "undefined" && typeof window.fbq === "function") {
        window.fbq("track", "Lead", { content_name: "Quick callback" })
      }
    } catch {
      setStatus("error")
    }
  }

  if (suppressed || !open) return null

  return (
    <div
      role="dialog"
      aria-label="Request a quick callback"
      className="fixed bottom-4 left-4 z-40 hidden w-[22rem] max-w-[calc(100vw-2rem)] rounded-2xl border border-border bg-background p-5 shadow-2xl md:block"
    >
      <button
        type="button"
        onClick={dismiss}
        aria-label="Close"
        className="absolute right-3 top-3 inline-flex size-7 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground"
      >
        <X className="size-4" />
      </button>

      {status === "success" ? (
        <div className="flex flex-col items-start gap-2 pr-6">
          <span className="inline-flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
            <CheckCircle2 className="size-5" />
          </span>
          <h3 className="text-base font-semibold">Got it — we'll call you back.</h3>
          <p className="text-sm text-muted-foreground">
            A dispatcher will call within minutes during business hours. Need us
            now?
          </p>
          <a
            href={site.phoneHref}
            className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            <Phone className="size-4" /> {site.phone}
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-3 pr-4">
          <div>
            <h3 className="text-base font-semibold tracking-tight">
              Need a tech? We'll call you back.
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Leave a name and number — same-day commercial dispatch across South
              Florida.
            </p>
          </div>

          {/* honeypot */}
          <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <input
              type="text"
              name="website_url"
              tabIndex={-1}
              autoComplete="off"
              defaultValue=""
            />
          </div>

          <input
            name="contact"
            required
            autoComplete="name"
            placeholder="Your name"
            className="h-10 w-full rounded-md border border-input bg-transparent px-3 text-base outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm"
          />
          <input
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            placeholder="Phone number"
            // Mirror the server rule (route.ts: phone >=7 chars) so a too-short
            // number is caught client-side instead of returning a generic 400.
            minLength={7}
            pattern="[\d\s()+.\-]{7,}"
            title="Please enter a valid phone number (at least 7 digits)."
            className="h-10 w-full rounded-md border border-input bg-transparent px-3 text-base outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm"
          />
          <select
            name="urgency"
            defaultValue="urgent"
            className="h-10 w-full rounded-md border border-input bg-transparent px-2.5 text-base outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm"
          >
            <option value="emergency">Emergency — down now</option>
            <option value="urgent">Urgent — today</option>
            <option value="scheduled">Schedule a visit</option>
            <option value="estimate">Just an estimate</option>
          </select>

          {status === "error" ? (
            <p className="text-sm text-destructive">
              Something went wrong — please call{" "}
              <a href={site.phoneHref} className="font-semibold underline">
                {site.phone}
              </a>
              .
            </p>
          ) : null}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="size-4 animate-spin" /> Sending…
              </>
            ) : (
              "Request callback"
            )}
          </button>
          <p className="text-[11px] leading-snug text-muted-foreground">
            Or call{" "}
            <a href={site.phoneHref} className="font-medium text-foreground/80 hover:underline">
              {site.phone}
            </a>{" "}
            — no address needed to start.
          </p>
        </form>
      )}
    </div>
  )
}

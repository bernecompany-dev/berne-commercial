"use client"

import { useState } from "react"
import { site } from "@/lib/site"
import { SERVICES } from "@/lib/services"

type State = "idle" | "sending" | "ok" | "error"

export function LeadForm({ presetService }: { presetService?: string }) {
  const [state, setState] = useState<State>("idle")
  const [error, setError] = useState<string>("")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState("sending")
    setError("")
    const form = e.currentTarget
    const fd = new FormData(form)
    const payload: Record<string, string> = {}
    fd.forEach((v, k) => {
      payload[k] = String(v)
    })
    // Attribution — stamp this brand as the source so the shared inbox can tell
    // which micro-site produced the lead, and preserve any real ad-click params.
    const qs = new URLSearchParams(
      typeof window !== "undefined" ? window.location.search : "",
    )
    payload.utm_source = qs.get("utm_source") || site.utmSource
    payload.utm_medium = qs.get("utm_medium") || "organic"
    payload.utm_campaign = qs.get("utm_campaign") || ""
    payload.landing = typeof window !== "undefined" ? window.location.pathname : ""

    try {
      const res = await fetch("/api/dispatch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(body.error || "Something went wrong. Please call us.")
      }
      setState("ok")
      form.reset()
    } catch (err) {
      setState("error")
      setError(err instanceof Error ? err.message : "Please call us instead.")
    }
  }

  if (state === "ok") {
    return (
      <div className="lead" id="quote">
        <div className="form-status form-status--ok">
          Got it — thanks! We'll call you back shortly to confirm a time. Need us
          now? Call{" "}
          <a href={site.phoneHref}>
            <strong>{site.phone}</strong>
          </a>
          .
        </div>
      </div>
    )
  }

  return (
    <form className="lead" id="quote" onSubmit={onSubmit} noValidate>
      <h3>Get a fast quote</h3>
      <p className="muted" style={{ marginTop: "-0.3rem" }}>
        Tell us what's wrong — we'll call back with a time and a price.
      </p>

      {state === "error" ? (
        <div className="form-status form-status--err" role="alert">
          {error}
        </div>
      ) : null}

      <div className="field">
        <label htmlFor="lf-name">Name</label>
        <input id="lf-name" name="name" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="lf-phone">Phone</label>
        <input
          id="lf-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
        />
      </div>
      <div className="field">
        <label htmlFor="lf-city">City</label>
        <input
          id="lf-city"
          name="city"
          placeholder="Fort Lauderdale, Hollywood…"
        />
      </div>
      <div className="field">
        <label htmlFor="lf-service">Appliance</label>
        <select id="lf-service" name="service" defaultValue={presetService || ""}>
          <option value="">Select an appliance…</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.appliance}
            </option>
          ))}
          <option value="Other appliance">Other</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="lf-issue">What's going on?</label>
        <textarea
          id="lf-issue"
          name="issue"
          placeholder="e.g. fridge stopped cooling last night"
        />
      </div>

      {/* honeypot — hidden from humans; bots fill it and get silently dropped */}
      <div className="field--hp" aria-hidden="true">
        <label htmlFor="lf-website">Website</label>
        <input id="lf-website" name="website_url" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        className="btn btn--primary btn--lg"
        type="submit"
        disabled={state === "sending"}
        style={{ width: "100%", justifyContent: "center" }}
      >
        {state === "sending" ? "Sending…" : "Request service"}
      </button>
      <p className="form-note">
        Prefer to talk? Call{" "}
        <a href={site.phoneHref}>
          <strong>{site.phone}</strong>
        </a>{" "}
        · {site.hours}
      </p>
    </form>
  )
}

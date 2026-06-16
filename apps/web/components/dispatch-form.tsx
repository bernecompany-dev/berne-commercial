"use client"

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

import { CheckCircle2, ChevronDown, Loader2, Phone } from "lucide-react"
import { Button, buttonVariants } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Textarea } from "@workspace/ui/components/textarea"
import { Label } from "@workspace/ui/components/label"
import { Card } from "@workspace/ui/components/card"
import { services } from "@/lib/data/services"
import { brands } from "@/lib/data/brands"
import { site } from "@/lib/site"
import { t } from "@/lib/i18n/dict"
import type { Locale } from "@/lib/i18n/config"
import { cn } from "@workspace/ui/lib/utils"

// Mirrors the kit Input recipe exactly (text-base on mobile suppresses iOS
// focus-zoom; same focus ring + dark fill as the adjacent inputs).
const selectClass =
  "flex h-11 w-full rounded-md border border-input bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 md:h-9 md:text-sm dark:bg-input/30"

type Status = "idle" | "submitting" | "success" | "error"

const slugify = (v: string) => v.toLowerCase().replace(/[^a-z0-9]+/g, "-")

/** "hobart-vs-vulcan-ranges" -> "Hobart vs Vulcan Ranges" */
function humanizeSlug(slug: string): string {
  return slug
    .split("-")
    .map((w) => (w === "vs" ? "vs" : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(" ")
}

/**
 * Query-param prefill, read client-side so every page embedding the form
 * stays fully static. Supports the CTA params emitted across the site:
 * ?city= ?service= ?brand= ?topic= (compare pages) ?industry=.
 */
type QueryPrefill = {
  city?: string
  service?: string
  brand?: string
  topic?: string
  industry?: string
}

// The query string never changes without a full page navigation here, so a
// no-op subscription is sufficient; server snapshot is "" (no params).
const subscribeNoop = () => () => {}
const getSearchSnapshot = () => window.location.search
const getServerSearchSnapshot = () => ""

export function DispatchForm({
  variant = "card",
  defaults,
  locale = "en",
}: {
  variant?: "card" | "plain"
  defaults?: { city?: string; service?: string }
  locale?: Locale
}) {
  const tr = t(locale)
  const [status, setStatus] = useState<Status>("idle")
  // Move focus to the success heading so screen-reader/keyboard users hear
  // the state change (the submit button they were on unmounts).
  const successHeadingRef = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    if (status === "success") successHeadingRef.current?.focus()
  }, [status])
  // Read CTA query params client-side (post-hydration) — keeps every route
  // embedding this form statically prerendered.
  const search = useSyncExternalStore(
    subscribeNoop,
    getSearchSnapshot,
    getServerSearchSnapshot,
  )
  const qp = useMemo<QueryPrefill | null>(() => {
    const sp = new URLSearchParams(search)
    const pick = (k: string) => sp.get(k)?.trim() || undefined
    const next: QueryPrefill = {
      city: pick("city"),
      service: pick("service"),
      brand: pick("brand"),
      topic: pick("topic"),
      industry: pick("industry"),
    }
    return Object.values(next).some(Boolean) ? next : null
  }, [search])

  // CTA links pass the city slug ("boca-raton") — show it humanized.
  const cityDefault = qp?.city ? humanizeSlug(qp.city) : defaults?.city
  const serviceDefault =
    qp?.service && services.some((s) => s.slug === qp.service)
      ? qp.service
      : defaults?.service
  const brandDefault = qp?.brand
    ? brands.find((b) => slugify(b.name) === qp.brand)?.name
    : undefined
  // ?topic=<compare-slug> from /compare CTAs — surface it and carry it into
  // the issue field so it reaches the dispatcher.
  const topicLabel = qp?.topic ? humanizeSlug(qp.topic) : undefined
  const issueDefault = topicLabel ? `Re: ${topicLabel} comparison — ` : undefined

  const urgencyOptions = [
    { value: "emergency", label: tr.form.urgencyEmergency },
    { value: "urgent", label: tr.form.urgencyUrgent },
    { value: "scheduled", label: tr.form.urgencyScheduled },
    { value: "estimate", label: tr.form.urgencyEstimate },
  ]

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus("submitting")

    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())

    try {
      const res = await fetch("/api/dispatch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        // Server bodies are not UX copy — log for diagnostics, show the
        // fixed human message with the phone escape hatch instead.
        const text = await res.text().catch(() => "")
        console.error("dispatch submit failed:", res.status, text)
        throw new Error("Submission failed")
      }
      form.reset()
      setStatus("success")
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          form: "dispatch",
          service: String(payload.service ?? ""),
          city: String(payload.city ?? ""),
          urgency: String(payload.urgency ?? ""),
          locale,
        })
        // Google Ads "Lead form submit" conversion (secondary). send_to is a
        // public id (visible in page HTML), so the real value is baked in as
        // the default; NEXT_PUBLIC_GADS_LEAD_LABEL overrides it if needed.
        const adsLeadLabel =
          process.env.NEXT_PUBLIC_GADS_LEAD_LABEL ??
          "AW-18232464152/dCXNCM-JqL0cEJim9fVD"
        window.gtag("event", "conversion", { send_to: adsLeadLabel })
      }
      if (typeof window !== "undefined" && typeof window.fbq === "function") {
        window.fbq("track", "Lead", {
          content_name: "Dispatch request",
          content_category: String(payload.service ?? ""),
          city: String(payload.city ?? ""),
          urgency: String(payload.urgency ?? ""),
          locale,
        })
      }
    } catch (err) {
      console.error("dispatch submit error:", err)
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <Card
        role="status"
        className="flex flex-col items-center gap-3 p-10 text-center"
      >
        <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="size-6" />
        </span>
        <h3
          ref={successHeadingRef}
          tabIndex={-1}
          className="text-lg font-semibold focus:outline-none"
        >
          {tr.form.success}
        </h3>
        <p className="max-w-md text-sm text-muted-foreground">
          {tr.form.successDescription}
        </p>
        <a
          href={site.phoneHref}
          className={cn(buttonVariants({ size: "lg" }), "mt-1 h-11 gap-2 font-semibold")}
        >
          <Phone className="size-4" />
          {tr.form.successCall}: {site.phone}
        </a>
        <p className="text-xs text-muted-foreground">
          {tr.form.successResponse}
        </p>
      </Card>
    )
  }

  const Wrapper = variant === "card" ? Card : "div"
  const wrapperProps =
    variant === "card" ? { className: "p-6 sm:p-8" } : { className: "" }

  return (
    <Wrapper {...wrapperProps}>
      {/* key remounts the uncontrolled form once query-param prefill lands */}
      <form
        key={qp ? "prefilled" : "initial"}
        onSubmit={handleSubmit}
        className="grid gap-5"
      >
        <p className="text-xs text-muted-foreground">{tr.form.requiredNote}</p>
        {/* Honeypot: visually hidden, off-screen, not tabbable, hidden from a11y
            tree. Real users never see or fill it; bots that auto-fill every
            input trip the server-side `website_url` check in route.ts and get a
            silent no-op. autoComplete="off" keeps browsers from pre-filling it. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label htmlFor="website_url">Website (leave blank)</label>
          <input
            id="website_url"
            type="text"
            name="website_url"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </div>
        {topicLabel ? (
          <p className="rounded-md border border-primary/25 bg-primary/5 px-3 py-2 text-sm text-foreground/90">
            <span className="font-semibold text-primary">
              {tr.form.regarding}:
            </span>{" "}
            {topicLabel}
          </p>
        ) : null}
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label={tr.form.contactName}
            name="contact"
            required
            autoComplete="name"
          />
          <Field
            label={tr.form.phone}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
          />
        </div>

        <Field
          label={tr.form.address}
          name="address"
          required
          autoComplete="street-address"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label={tr.form.city}
            name="city"
            defaultValue={cityDefault}
            autoComplete="address-level2"
          />
          <Field
            label={tr.form.email}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label={tr.form.company} name="company" autoComplete="organization" />
          <SelectField
            label={tr.form.service}
            name="service"
            defaultValue={serviceDefault}
            placeholder={tr.form.selectPlaceholder}
          >
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
          </SelectField>
        </div>

        {/* Urgency is routing-critical — visible AND required, so emergency
            requests can't arrive untriaged. */}
        <SelectField
          label={tr.form.urgency}
          name="urgency"
          required
          placeholder={tr.form.selectPlaceholder}
        >
          {urgencyOptions.map((u) => (
            <option key={u.value} value={u.value}>
              {u.label}
            </option>
          ))}
        </SelectField>

        {/* The issue description is as routing-critical as urgency — what the
            caller is bursting to tell us stays visible, not behind details. */}
        <div className="grid gap-2">
          <Label htmlFor="issue">{tr.form.issue}</Label>
          <Textarea
            id="issue"
            name="issue"
            rows={4}
            defaultValue={issueDefault}
            placeholder={tr.form.issuePlaceholder}
          />
        </div>

        <details className="group rounded-md border border-border/60 bg-background/40 open:bg-background/60">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-2 rounded-md px-4 py-3 text-sm font-medium text-foreground/90 hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 [&::-webkit-details-marker]:hidden">
            <span>{tr.form.moreDetails}</span>
            <ChevronDown
              className="size-4 text-muted-foreground transition-transform group-open:rotate-180"
              aria-hidden
            />
          </summary>
          <div className="space-y-4 px-4 pb-4 pt-1">
            <div className="grid gap-4 sm:grid-cols-2">
              <SelectField
                label={tr.form.brand}
                name="brand"
                defaultValue={brandDefault}
                placeholder={tr.form.selectPlaceholder}
              >
                {brands.map((b) => (
                  <option key={b.name} value={b.name}>
                    {b.name}
                  </option>
                ))}
              </SelectField>
              <Field label={tr.form.model} name="model" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="preferredTime">{tr.form.preferredTime}</Label>
              <Input
                id="preferredTime"
                name="preferredTime"
                placeholder={tr.form.preferredTimePlaceholder}
              />
            </div>
          </div>
        </details>

        {status === "error" ? (
          <p
            role="alert"
            className="rounded-md border border-destructive/30 bg-destructive/5 px-3 py-2 text-sm text-destructive"
          >
            {tr.form.errorBeforePhone}{" "}
            <a
              href={site.phoneHref}
              className="font-semibold underline underline-offset-2"
            >
              {site.phone}
            </a>{" "}
            {tr.form.errorAfterPhone}
          </p>
        ) : null}

        <p className="text-xs leading-relaxed text-muted-foreground">
          {tr.form.smsConsent}
        </p>

        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">{tr.form.serviceCallNote}</p>
          <Button
            type="submit"
            size="lg"
            disabled={status === "submitting"}
            className={cn("h-11 min-w-44 gap-2")}
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="size-4 animate-spin" /> {tr.form.submitting}
              </>
            ) : (
              tr.form.submit
            )}
          </Button>
        </div>
      </form>
    </Wrapper>
  )
}

function Field({
  label,
  name,
  type = "text",
  required,
  defaultValue,
  autoComplete,
  inputMode,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  defaultValue?: string
  autoComplete?: string
  inputMode?: "text" | "tel" | "email" | "url" | "numeric" | "decimal" | "search" | "none"
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={name}>
        {label}
        {required ? (
          <span aria-hidden className="text-destructive">
            {" "}
            *
          </span>
        ) : null}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue}
        autoComplete={autoComplete}
        inputMode={inputMode}
      />
    </div>
  )
}

function SelectField({
  label,
  name,
  required,
  children,
  defaultValue,
  placeholder,
}: {
  label: string
  name: string
  required?: boolean
  children: React.ReactNode
  defaultValue?: string
  placeholder?: string
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={name}>
        {label}
        {required ? (
          <span aria-hidden className="text-destructive">
            {" "}
            *
          </span>
        ) : null}
      </Label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue={defaultValue}
        className={selectClass}
      >
        <option value="">{placeholder ?? "—"}</option>
        {children}
      </select>
    </div>
  )
}

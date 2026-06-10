"use client"

import { useMemo, useState, useSyncExternalStore } from "react"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

import { CheckCircle2, Loader2, Phone } from "lucide-react"
import { Button } from "@workspace/ui/components/button"
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

const selectClass =
  "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 disabled:cursor-not-allowed disabled:opacity-50"

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
  const [errorMsg, setErrorMsg] = useState<string>("")
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
    setErrorMsg("")

    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())

    try {
      const res = await fetch("/api/dispatch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const text = await res.text()
        throw new Error(text || "Submission failed")
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
      setStatus("error")
      setErrorMsg(err instanceof Error ? err.message : "Submission failed")
    }
  }

  if (status === "success") {
    return (
      <Card className="flex flex-col items-center gap-3 p-10 text-center">
        <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="size-6" />
        </span>
        <h3 className="text-lg font-semibold">{tr.form.success}</h3>
        <p className="max-w-md text-sm text-muted-foreground">
          {tr.form.successDescription}
        </p>
        <a
          href={site.phoneHref}
          className="mt-1 inline-flex h-10 items-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
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

        {/* Urgency is a routing-critical field — keep it visible, not buried
            in the optional-details accordion. */}
        <SelectField
          label={tr.form.urgency}
          name="urgency"
          placeholder={tr.form.selectPlaceholder}
        >
          {urgencyOptions.map((u) => (
            <option key={u.value} value={u.value}>
              {u.label}
            </option>
          ))}
        </SelectField>

        <details className="group rounded-md border border-border/60 bg-background/40 open:bg-background/60">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-4 py-3 text-sm font-medium text-foreground/90 hover:text-foreground">
            <span>More details (optional)</span>
            <span
              className="text-xs text-muted-foreground transition-transform group-open:rotate-180"
              aria-hidden
            >
              ▾
            </span>
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
              <Label htmlFor="issue">{tr.form.issue}</Label>
              <Textarea
                id="issue"
                name="issue"
                rows={4}
                defaultValue={issueDefault}
                placeholder={tr.form.issuePlaceholder}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="preferredTime">{tr.form.preferredTime}</Label>
              <Input id="preferredTime" name="preferredTime" />
            </div>
          </div>
        </details>

        {status === "error" ? (
          <p className="rounded-md border border-destructive/30 bg-destructive/5 px-3 py-2 text-sm text-destructive">
            {errorMsg || "Submission failed. Please try again."}
          </p>
        ) : null}

        <p className="text-xs leading-relaxed text-muted-foreground">
          By submitting, you agree to receive service messages from Berne
          Commercial. Reply STOP to opt out, HELP for help. Msg &amp; data rates
          may apply.
        </p>

        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">{tr.form.serviceCallNote}</p>
          <Button
            type="submit"
            size="lg"
            disabled={status === "submitting"}
            className={cn("min-w-44 gap-2")}
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
        {required ? <span className="text-destructive"> *</span> : null}
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
        {required ? <span className="text-destructive"> *</span> : null}
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

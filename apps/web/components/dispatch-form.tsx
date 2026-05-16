"use client"

import { useState } from "react"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

import { CheckCircle2, Loader2 } from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Textarea } from "@workspace/ui/components/textarea"
import { Label } from "@workspace/ui/components/label"
import { Card } from "@workspace/ui/components/card"
import { services } from "@/lib/data/services"
import { brands } from "@/lib/data/brands"
import { t } from "@/lib/i18n/dict"
import type { Locale } from "@/lib/i18n/config"
import { cn } from "@workspace/ui/lib/utils"

const selectClass =
  "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 disabled:cursor-not-allowed disabled:opacity-50"

type Status = "idle" | "submitting" | "success" | "error"

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
      </Card>
    )
  }

  const Wrapper = variant === "card" ? Card : "div"
  const wrapperProps =
    variant === "card" ? { className: "p-6 sm:p-8" } : { className: "" }

  return (
    <Wrapper {...wrapperProps}>
      <form onSubmit={handleSubmit} className="grid gap-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label={tr.form.contactName} name="contact" required />
          <Field label={tr.form.phone} name="phone" type="tel" required />
        </div>

        <Field label={tr.form.address} name="address" required />

        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label={tr.form.city}
            name="city"
            defaultValue={defaults?.city}
          />
          <Field label={tr.form.email} name="email" type="email" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label={tr.form.company} name="company" />
          <SelectField
            label={tr.form.service}
            name="service"
            defaultValue={defaults?.service}
            placeholder={tr.form.selectPlaceholder}
          >
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
          </SelectField>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <SelectField
            label={tr.form.brand}
            name="brand"
            placeholder={tr.form.selectPlaceholder}
          >
            {brands.map((b) => (
              <option key={b.name} value={b.name}>
                {b.name}
              </option>
            ))}
          </SelectField>
          <Field label={tr.form.model} name="model" />
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
        </div>

        <div className="grid gap-2">
          <Label htmlFor="issue">{tr.form.issue}</Label>
          <Textarea
            id="issue"
            name="issue"
            rows={4}
            placeholder={tr.form.issuePlaceholder}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="preferredTime">{tr.form.preferredTime}</Label>
          <Input id="preferredTime" name="preferredTime" />
        </div>

        {status === "error" ? (
          <p className="rounded-md border border-destructive/30 bg-destructive/5 px-3 py-2 text-sm text-destructive">
            {errorMsg || "Submission failed. Please try again."}
          </p>
        ) : null}

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
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  defaultValue?: string
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

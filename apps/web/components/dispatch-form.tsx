"use client"

import { useState } from "react"
import { CheckCircle2, Loader2 } from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Textarea } from "@workspace/ui/components/textarea"
import { Label } from "@workspace/ui/components/label"
import { Card } from "@workspace/ui/components/card"
import { services } from "@/lib/data/services"
import { brands } from "@/lib/data/brands"
import { cn } from "@workspace/ui/lib/utils"

const urgencyOptions = [
  { value: "emergency", label: "Emergency / same-day" },
  { value: "urgent", label: "Urgent (within 24h)" },
  { value: "scheduled", label: "Scheduled" },
  { value: "estimate", label: "Estimate only" },
]

const selectClass =
  "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 disabled:cursor-not-allowed disabled:opacity-50"

type Status = "idle" | "submitting" | "success" | "error"

export function DispatchForm({
  variant = "card",
  defaults,
}: {
  variant?: "card" | "plain"
  defaults?: { city?: string; service?: string }
}) {
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState<string>("")

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
        <h3 className="text-lg font-semibold">Dispatch request received</h3>
        <p className="max-w-md text-sm text-muted-foreground">
          A dispatcher will contact you shortly to confirm the service window.
          For emergency service, please also call our dispatch line.
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
          <Field label="Contact name" name="contact" required />
          <Field label="Phone" name="phone" type="tel" required />
        </div>

        <Field label="Service address" name="address" required />

        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="City"
            name="city"
            defaultValue={defaults?.city}
          />
          <Field label="Email" name="email" type="email" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Company name" name="company" />
          <SelectField
            label="Service type"
            name="service"
            defaultValue={defaults?.service}
          >
            <option value="">Select…</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
          </SelectField>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <SelectField label="Brand" name="brand">
            <option value="">Select…</option>
            {brands.map((b) => (
              <option key={b.name} value={b.name}>
                {b.name}
              </option>
            ))}
          </SelectField>
          <Field label="Equipment model" name="model" />
          <SelectField label="Urgency" name="urgency">
            <option value="">Select…</option>
            {urgencyOptions.map((u) => (
              <option key={u.value} value={u.value}>
                {u.label}
              </option>
            ))}
          </SelectField>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="issue">What&apos;s happening with the equipment?</Label>
          <Textarea
            id="issue"
            name="issue"
            rows={4}
            placeholder="Error codes, leaks, noises, last service — anything you have."
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="preferredTime">
            Preferred service window (optional)
          </Label>
          <Input id="preferredTime" name="preferredTime" placeholder="e.g. Tomorrow before 11am" />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="upload">Photo / video of equipment (optional)</Label>
          <input
            id="upload"
            name="upload"
            type="file"
            accept="image/*,video/*"
            className="text-sm file:mr-3 file:rounded-md file:border-0 file:bg-muted file:px-3 file:py-2 file:text-sm file:font-medium hover:file:bg-accent"
          />
        </div>

        {status === "error" ? (
          <p className="rounded-md border border-destructive/30 bg-destructive/5 px-3 py-2 text-sm text-destructive">
            {errorMsg || "Submission failed. Please try again."}
          </p>
        ) : null}

        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            Commercial service call: <strong>$89</strong> · Applied toward
            approved repair
          </p>
          <Button
            type="submit"
            size="lg"
            disabled={status === "submitting"}
            className={cn("min-w-44 gap-2")}
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="size-4 animate-spin" /> Sending…
              </>
            ) : (
              "Request Dispatch"
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
}: {
  label: string
  name: string
  required?: boolean
  children: React.ReactNode
  defaultValue?: string
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
        {children}
      </select>
    </div>
  )
}

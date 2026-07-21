"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2, Loader2, Phone } from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Textarea } from "@workspace/ui/components/textarea"
import { Label } from "@workspace/ui/components/label"
import { Card } from "@workspace/ui/components/card"
import { site } from "@/lib/site"

type Status = "idle" | "submitting" | "success" | "error"

/**
 * Job-application form for /careers. Posts to /api/careers, which mails the
 * application to the shared Berne inbox with a "ТРУДОУСТРОЙСТВО" subject.
 *
 * Anti-bot: the same hidden `website_url` honeypot as the dispatch form, plus
 * a `form_ts` time-trap — the mount timestamp travels with the payload and the
 * server drops submissions that arrive faster than a person can read the page.
 *
 * The /careers page carries an English article with a Russian block below it,
 * so the EN variant shows dual EN/RU labels. The ES variant is Spanish-only.
 */
const LABELS = {
  en: {
    heading: "Apply / Отклик",
    intro:
      "Fill in the four fields — takes about a minute. We call every applicant back, usually the same day. / Заполните форму — перезваниваем каждому, обычно в тот же день.",
    name: "Name / Имя",
    phone: "Phone / Телефон",
    city: "City / Город",
    experience: "Experience / Опыт",
    experiencePlaceholder:
      "What equipment have you worked on, and for how long? / С каким оборудованием работали и сколько лет?",
    email: "Email (optional / необязательно)",
    submit: "Send application / Отправить",
    submitting: "Sending…",
    success: "Application sent / Отклик отправлен",
    successBody:
      "We got it. Expect a call back, usually within one business day. / Получили. Перезвоним, обычно в течение рабочего дня.",
    error:
      "Something went wrong on our end. Call us instead / Не отправилось — позвоните нам:",
    call: "Call",
    requiredNote: "* required / обязательно",
  },
  es: {
    heading: "Aplicar",
    intro:
      "Complete los cuatro campos — toma un minuto. Devolvemos la llamada a cada solicitante, normalmente el mismo día.",
    name: "Nombre",
    phone: "Teléfono",
    city: "Ciudad",
    experience: "Experiencia",
    experiencePlaceholder: "¿Con qué equipos ha trabajado y por cuánto tiempo?",
    email: "Email (opcional)",
    submit: "Enviar solicitud",
    submitting: "Enviando…",
    success: "Solicitud enviada",
    successBody:
      "La recibimos. Espere una llamada, normalmente dentro de un día hábil.",
    error: "Algo salió mal. Llámenos:",
    call: "Llamar",
    requiredNote: "* obligatorio",
  },
} as const

export function CareersApplyForm({ locale = "en" }: { locale?: "en" | "es" }) {
  const tr = LABELS[locale]
  const [status, setStatus] = useState<Status>("idle")
  // Time-trap: stamped once on mount, sent with the payload. Kept in state so
  // the server-rendered HTML has no timestamp for scrapers to replay.
  const [formTs, setFormTs] = useState<number | null>(null)
  useEffect(() => {
    setFormTs(Date.now())
  }, [])
  const successHeadingRef = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    if (status === "success") successHeadingRef.current?.focus()
  }, [status])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus("submitting")
    const formData = new FormData(form)
    const payload = {
      ...Object.fromEntries(formData.entries()),
      form_ts: formTs ?? undefined,
    }
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const body = (await res.json()) as { ok?: boolean }
      if (!res.ok || body.ok !== true) throw new Error("careers submit failed")
      form.reset()
      setStatus("success")
    } catch (err) {
      console.error("careers submit error:", err)
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <Card role="status" className="flex flex-col items-center gap-3 p-10 text-center">
        <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="size-6" />
        </span>
        <h3
          ref={successHeadingRef}
          tabIndex={-1}
          className="text-lg font-semibold focus:outline-none"
        >
          {tr.success}
        </h3>
        <p className="max-w-md text-sm text-muted-foreground">{tr.successBody}</p>
      </Card>
    )
  }

  return (
    <Card className="p-6 sm:p-8">
      <h3 className="text-xl font-semibold tracking-tight">{tr.heading}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{tr.intro}</p>
      <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
        <p className="text-xs text-muted-foreground">{tr.requiredNote}</p>
        {/* Honeypot — same recipe as the dispatch form: off-screen, not
            tabbable, hidden from the a11y tree. The server silently drops any
            submission where this field is filled. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label htmlFor="careers_website_url">Website (leave blank)</label>
          <input
            id="careers_website_url"
            type="text"
            name="website_url"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="careers-name">
              {tr.name}
              <span aria-hidden className="text-destructive"> *</span>
            </Label>
            <Input id="careers-name" name="name" required autoComplete="name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="careers-phone">
              {tr.phone}
              <span aria-hidden className="text-destructive"> *</span>
            </Label>
            <Input
              id="careers-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              minLength={7}
              pattern="[\d\s()+.\-]{7,}"
              title="Please enter a valid phone number (at least 7 digits)."
            />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="careers-city">{tr.city}</Label>
            <Input id="careers-city" name="city" autoComplete="address-level2" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="careers-email">{tr.email}</Label>
            <Input
              id="careers-email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
            />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="careers-experience">{tr.experience}</Label>
          <Textarea
            id="careers-experience"
            name="experience"
            rows={4}
            placeholder={tr.experiencePlaceholder}
          />
        </div>

        {status === "error" ? (
          <p
            role="alert"
            className="rounded-md border border-destructive/30 bg-destructive/5 px-3 py-2 text-sm text-destructive"
          >
            {tr.error}{" "}
            <a href={site.phoneHref} className="font-semibold underline underline-offset-2">
              {site.phone}
            </a>
          </p>
        ) : null}

        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <Phone className="size-4 text-primary" aria-hidden />
            {tr.call}: {site.phone}
          </a>
          <Button
            type="submit"
            size="lg"
            disabled={status === "submitting"}
            className="h-11 min-w-44 gap-2"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="size-4 animate-spin" /> {tr.submitting}
              </>
            ) : (
              tr.submit
            )}
          </Button>
        </div>
      </form>
    </Card>
  )
}

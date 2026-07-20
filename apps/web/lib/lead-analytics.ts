export const COMMERCIAL_SITE_ID = "berne-commercial"

const DEFAULT_ADS_LEAD_LABEL = "AW-18232464152/dCXNCM-JqL0cEJim9fVD"

export type DispatchApiResult = {
  ok: boolean
  delivered: boolean
  lead_id: string
  transport?: "noop" | "resend"
  id?: string
  error?: string
}

type ConversionContext = Record<string, string | undefined>

export type LeadAnalyticsRuntime = {
  location?: { pathname?: string }
  gtag?: (...args: unknown[]) => void
  fbq?: (...args: unknown[]) => void
  oaiq?: (...args: unknown[]) => void
  uetq?: { push: (...args: unknown[]) => unknown } | unknown[]
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
    oaiq?: (...args: unknown[]) => void
    uetq?: { push: (...args: unknown[]) => unknown } | unknown[]
  }
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null
}

export function parseDispatchApiResult(value: unknown): DispatchApiResult {
  if (
    !isObject(value) ||
    typeof value.ok !== "boolean" ||
    typeof value.delivered !== "boolean" ||
    typeof value.lead_id !== "string" ||
    value.lead_id.length === 0
  ) {
    throw new Error("Invalid dispatch response contract")
  }

  return value as DispatchApiResult
}

function cleanContext(context: ConversionContext): Record<string, string> {
  return Object.fromEntries(
    Object.entries(context).filter(
      (entry): entry is [string, string] =>
        typeof entry[1] === "string" && entry[1].length > 0,
    ),
  )
}

export function emitDeliveredLead(
  runtime: LeadAnalyticsRuntime,
  input: {
    formName: string
    leadId: string
    pagePath: string
    context?: ConversionContext
    adsLeadLabel?: string
  },
) {
  const common = {
    site_id: COMMERCIAL_SITE_ID,
    form_name: input.formName,
    page_path: input.pagePath,
    lead_id: input.leadId,
    ...cleanContext(input.context ?? {}),
  }

  runtime.gtag?.("event", "generate_lead", common)
  runtime.gtag?.("event", "conversion", {
    send_to: input.adsLeadLabel ?? DEFAULT_ADS_LEAD_LABEL,
    lead_id: input.leadId,
  })
  runtime.fbq?.("track", "Lead", common, { eventID: input.leadId })
  runtime.oaiq?.("measure", "lead_created", {
    type: "customer_action",
    ...common,
  })
  runtime.uetq?.push("event", "submit_lead", {
    event_category: "dispatch",
    event_label: input.formName,
    ...common,
  })
}

export async function submitDispatchLead(options: {
  payload: Record<string, unknown>
  formName: string
  context?: ConversionContext
  fetchImpl?: typeof fetch
  runtime?: LeadAnalyticsRuntime
  pagePath?: string
  adsLeadLabel?: string
}): Promise<DispatchApiResult> {
  const fetchImpl = options.fetchImpl ?? fetch
  const runtime =
    options.runtime ??
    (typeof window === "undefined" ? {} : (window as LeadAnalyticsRuntime))

  const response = await fetchImpl("/api/dispatch", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(options.payload),
  })

  let body: unknown
  try {
    body = await response.json()
  } catch {
    throw new Error(`Dispatch returned non-JSON response (${response.status})`)
  }

  if (!response.ok) {
    const message =
      isObject(body) && typeof body.error === "string"
        ? body.error
        : `Dispatch failed (${response.status})`
    throw new Error(message)
  }

  const result = parseDispatchApiResult(body)
  if (result.delivered) {
    emitDeliveredLead(runtime, {
      formName: options.formName,
      leadId: result.lead_id,
      pagePath:
        options.pagePath ?? runtime.location?.pathname ?? "/",
      context: options.context,
      adsLeadLabel: options.adsLeadLabel,
    })
  }

  return result
}

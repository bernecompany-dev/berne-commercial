"use client"

import { usePathname } from "next/navigation"

/**
 * Floating WhatsApp click-to-chat button for Berne Commercial.
 *
 * - Fixed bottom-right (16px) on desktop, z-50 (below the cookie banner at
 *   z-[60] while consent is pending).
 * - Below md we shift to bottom-LEFT and ABOVE the fixed CTA bar
 *   (max-md:bottom-20) — the bar is full-width, so only a vertical offset
 *   avoids covering its Call button.
 * - Pre-fills a commercial-toned, context-aware greeting derived from the
 *   current pathname (industry / equipment / city / brand).
 * - Tracks clicks via gtag (`whatsapp_click`) + fbq (`Contact` custom event)
 *   when those globals are present.
 *
 * Phase 1 (free): targets Eugene's personal WhatsApp number — no API,
 * no WhatsApp Business app, just wa.me deep-link.
 */

const PHONE = "17869447518"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

const INDUSTRY_LABELS: Record<string, { en: string; es: string }> = {
  restaurants:      { en: "restaurant",       es: "restaurante" },
  "restaurants-food-service": { en: "restaurant", es: "restaurante" },
  hotels:           { en: "hotel",            es: "hotel" },
  hospitality:      { en: "hospitality property", es: "propiedad hotelera" },
  bars:             { en: "bar",              es: "bar" },
  cafes:            { en: "café",             es: "café" },
  bakeries:         { en: "bakery",           es: "panadería" },
  "ghost-kitchens": { en: "ghost kitchen",    es: "cocina fantasma" },
  hospitals:        { en: "hospital",         es: "hospital" },
  schools:          { en: "school",           es: "escuela" },
  "assisted-living":{ en: "assisted living facility", es: "centro de vida asistida" },
  laundromats:      { en: "laundromat",       es: "lavandería" },
  "country-clubs":  { en: "country club",     es: "club de campo" },
  offices:          { en: "office",           es: "oficina" },
  retail:           { en: "retail location",  es: "tienda" },
}

const EQUIPMENT_GREETINGS: Array<{
  match: RegExp
  greeting: (l: "en" | "es") => string
}> = [
  { match: /walk[-_]?in[-_]?(cooler|freezer)/, greeting: (l) => l === "es" ? "¡Hola! Necesito servicio para un walk-in cooler/freezer comercial" : "Hi! I need service for a commercial walk-in cooler/freezer" },
  { match: /ice[-_]?machine/, greeting: (l) => l === "es" ? "¡Hola! Necesito servicio para una máquina de hielo comercial" : "Hi! I need service for a commercial ice machine" },
  { match: /refrigerat/,      greeting: (l) => l === "es" ? "¡Hola! Necesito servicio de refrigeración comercial" : "Hi! I need commercial refrigeration service" },
  { match: /(combi|combination)[-_]?oven/, greeting: (l) => l === "es" ? "¡Hola! Necesito servicio para un horno combi comercial" : "Hi! I need service for a commercial combi oven" },
  { match: /pizza[-_]?oven/, greeting: (l) => l === "es" ? "¡Hola! Necesito servicio para un horno de pizza comercial" : "Hi! I need service for a commercial pizza oven" },
  { match: /fryer/,    greeting: (l) => l === "es" ? "¡Hola! Necesito servicio para una freidora comercial" : "Hi! I need service for a commercial fryer" },
  { match: /griddle/,  greeting: (l) => l === "es" ? "¡Hola! Necesito servicio para una plancha comercial" : "Hi! I need service for a commercial griddle" },
  { match: /range|cooktop/, greeting: (l) => l === "es" ? "¡Hola! Necesito servicio para un rango comercial" : "Hi! I need service for a commercial range" },
  { match: /dishwasher|warewash/, greeting: (l) => l === "es" ? "¡Hola! Necesito servicio para un lavavajillas comercial" : "Hi! I need service for a commercial dishwasher" },
  { match: /laundry|washer|dryer/, greeting: (l) => l === "es" ? "¡Hola! Necesito servicio para equipo de lavandería comercial" : "Hi! I need service for commercial laundry equipment" },
  { match: /hvac/,     greeting: (l) => l === "es" ? "¡Hola! Necesito servicio HVAC comercial" : "Hi! I need commercial HVAC service" },
]

function pickGreeting(rawPath: string): string {
  const path = rawPath.toLowerCase().replace(/\/+$/, "")
  const locale: "en" | "es" = path.startsWith("/es") ? "es" : "en"
  const p = locale === "es" ? path.replace(/^\/es/, "") : path

  if (p === "" || p === "/") {
    return locale === "es"
      ? "¡Hola! Necesito servicio de equipo comercial para mi negocio"
      : "Hi! I need commercial equipment service for my business"
  }

  // Industry pages (/industries/<slug>) — highest priority because they pin
  // the verticals Eugene targets most.
  const industryMatch = p.match(/(?:^|\/)industries\/([a-z][a-z-]+)/)
  if (industryMatch && industryMatch[1]) {
    const slug = industryMatch[1]
    const label = INDUSTRY_LABELS[slug]
    if (label) {
      return locale === "es"
        ? `¡Hola! Necesito servicio de equipo comercial para mi ${label.es}`
        : `Hi! I need commercial equipment service for my ${label.en}`
    }
    const pretty = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    return locale === "es"
      ? `¡Hola! Necesito servicio de equipo comercial (${pretty})`
      : `Hi! I need commercial equipment service (${pretty})`
  }

  // Services / equipment pages.
  for (const { match, greeting } of EQUIPMENT_GREETINGS) {
    if (match.test(p)) return greeting(locale)
  }

  // Service-area / city pages.
  const cityMatch = p.match(/(?:^|\/)(?:service-areas?|areas?|[a-z-]*-fl)\/?([a-z][a-z-]+)?/)
  // Generic /<city> at root for city pages.
  const rootCityMatch = p.match(/^\/?([a-z][a-z-]+)$/)
  const city = cityMatch?.[1] || rootCityMatch?.[1] || null
  if (city && /^(miami|miami-beach|coral-gables|aventura|sunny-isles|doral|kendall|fort-lauderdale|hollywood|pembroke-pines|plantation|davie|weston|sunrise|coral-springs|pompano-beach|deerfield-beach|boca-raton|delray-beach|boynton-beach|west-palm-beach|palm-beach|jupiter|hialeah|homestead)/.test(city)) {
    const pretty = city.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    return locale === "es"
      ? `¡Hola! Necesito servicio de equipo comercial en ${pretty}`
      : `Hi! I need commercial equipment service in ${pretty}`
  }

  if (/become-a-client/.test(p)) {
    return locale === "es"
      ? "¡Hola! Me gustaría incorporar mi negocio como cliente"
      : "Hi! I'd like to onboard my business as a client"
  }
  if (/contact/.test(p)) {
    return locale === "es"
      ? "¡Hola! Tengo una pregunta sobre servicio de equipo comercial"
      : "Hi! I have a question about commercial equipment service"
  }
  if (/request-dispatch|dispatch/.test(p)) {
    return locale === "es"
      ? "¡Hola! Me gustaría solicitar un técnico para equipo comercial"
      : "Hi! I'd like to request a technician for commercial equipment"
  }
  if (/brands?\//.test(p)) {
    return locale === "es"
      ? "¡Hola! Necesito servicio comercial para esta marca de equipo"
      : "Hi! I need commercial service for this equipment brand"
  }

  return locale === "es"
    ? "¡Hola! Necesito servicio de equipo comercial para mi negocio"
    : "Hi! I need commercial equipment service for my business"
}

export function WhatsAppFab() {
  const pathname = usePathname() ?? "/"
  const message = pickGreeting(pathname)
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`

  function handleClick() {
    try {
      window.gtag?.("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: pathname,
      })
      window.fbq?.("trackCustom", "Contact", {
        method: "whatsapp",
        page: pathname,
      })
    } catch {
      /* swallow analytics errors */
    }
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label="Chat with Berne Commercial on WhatsApp"
      data-analytics="whatsapp-fab"
      onClick={handleClick}
      className="berne-whatsapp-fab fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-[transform,background-color] duration-150 ease-out hover:scale-105 hover:bg-[#1ebe57] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background max-md:bottom-20 max-md:left-4 max-md:right-auto motion-reduce:transition-none motion-reduce:hover:scale-100"
    >
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="h-[30px] w-[30px] fill-white"
      >
        <path d="M19.11 17.62c-.27-.13-1.58-.78-1.83-.87-.25-.09-.42-.13-.6.14-.18.27-.69.87-.84 1.05-.16.18-.31.2-.58.07-.27-.13-1.13-.42-2.15-1.33-.79-.71-1.33-1.58-1.48-1.85-.16-.27-.02-.41.12-.55.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.6-1.45-.83-1.99-.22-.52-.44-.45-.6-.46-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.26 0 1.33.97 2.62 1.11 2.8.13.18 1.91 2.91 4.62 4.08.65.28 1.15.44 1.55.57.65.21 1.24.18 1.71.11.52-.08 1.58-.65 1.81-1.27.22-.62.22-1.16.16-1.27-.07-.11-.25-.18-.52-.31zM16.05 26.13h-.01c-1.83 0-3.62-.49-5.18-1.42l-.37-.22-3.86 1.01 1.03-3.76-.24-.39a10.05 10.05 0 0 1-1.55-5.35c0-5.55 4.52-10.07 10.18-10.07 2.72 0 5.27 1.06 7.19 2.98a10.07 10.07 0 0 1 2.98 7.18c0 5.55-4.52 10.04-10.17 10.04zm8.66-18.7A12.04 12.04 0 0 0 16.05 4C9.36 4 3.92 9.44 3.92 16.13c0 2.14.56 4.22 1.63 6.06L3.8 28l5.99-1.57a12.07 12.07 0 0 0 5.78 1.47h.01c6.69 0 12.13-5.44 12.13-12.13 0-3.24-1.26-6.29-3.55-8.58z" />
      </svg>
    </a>
  )
}

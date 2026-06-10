import type { Industry } from "./industries"

/**
 * Spanish copy for the industry cards (home /es grid — audit 2026-06-10
 * P1.4: the ES home rendered the English name/blurb straight from
 * industries.ts). Mirrors the services-es.ts pattern. Keep in sync with
 * the LEGACY_ES map in app/es/industries/page.tsx.
 */
type IndustryI18n = Pick<Industry, "name" | "blurb">

export const industriesEs: Record<string, IndustryI18n> = {
  restaurants: {
    name: "Restaurantes",
    blurb: "Refrigeración, freidoras, hornos, máquinas de hielo — respuesta el mismo día.",
  },
  "commercial-kitchens": {
    name: "Cocinas Comerciales",
    blurb: "Cocinas de producción, ghost kitchens, operaciones de catering.",
  },
  "food-production": {
    name: "Producción de Alimentos",
    blurb: "Walk-ins, congelación profunda y equipo de procesamiento.",
  },
  "grocery-stores": {
    name: "Supermercados",
    blurb: "Refrigeradores de exhibición, walk-ins, prep de deli, sistemas de hielo.",
  },
  hotels: {
    name: "Hoteles",
    blurb: "Cocinas, lavandería, máquinas de hielo y equipo de back-of-house.",
  },
  "retail-chains": {
    name: "Cadenas de Retail",
    blurb: "Servicio multi-locación con reportes para vendor.",
  },
  "property-management": {
    name: "Administración de Propiedad",
    blurb: "Cobertura de equipo en todo el edificio y reemplazo.",
  },
  "facility-management": {
    name: "Facility Management",
    blurb: "Despacho listo para vendor y mantenimiento preventivo.",
  },
  warehouses: {
    name: "Almacenes",
    blurb: "Almacenamiento frío, break rooms, cocinas en sitio.",
  },
  "medical-facilities": {
    name: "Instituciones Médicas",
    blurb: "Máquinas de hielo, refrigeración de farmacia, cocinas de personal.",
  },
  schools: {
    name: "Escuelas",
    blurb: "Refrigeración de cafetería y equipo de cocina.",
  },
  "condo-buildings": {
    name: "Edificios de Condominios",
    blurb: "Equipo de áreas comunes y cocinas de amenities.",
  },
  franchises: {
    name: "Franquicias",
    blurb: "Servicio estandarizado en múltiples locaciones.",
  },
  logistics: {
    name: "Logística y Distribución",
    blurb: "Almacenamiento refrigerado y equipo de break-room.",
  },
}

export function localizedIndustry(i: Industry, locale: "en" | "es"): Industry {
  if (locale !== "es") return i
  const es = industriesEs[i.slug]
  if (!es) return i
  return { ...i, name: es.name, blurb: es.blurb }
}

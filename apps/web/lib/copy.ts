import { type City, COUNTIES } from "./data/cities"
import { type Service } from "./data/services"
import {
  cityProfileFallback,
  getCityProfile,
  type CityProfile,
} from "./data/city-profiles"
import {
  cityProfileFallbackEs,
  getCityProfileEs,
} from "./data/city-profiles-es"
import { localizedService } from "./data/services-es"
import type { Locale } from "./i18n/config"

function cap(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function profileFor(city: City, locale: Locale): CityProfile {
  if (locale === "es") {
    return (
      getCityProfileEs(city.slug) ?? cityProfileFallbackEs(city.name, city.county)
    )
  }
  return getCityProfile(city.slug) ?? cityProfileFallback(city.name, city.county)
}

const CATEGORY_NOTES_EN: Record<Service["category"], (city: string) => string> = {
  refrigeration: (city) =>
    `Walk-in coolers, prep tables, reach-ins and deep-freeze systems in ${city} run on continuous duty under South Florida humidity — we keep refrigeration-grade compressors, evaporator fans and door gaskets on the trucks for first-visit repairs.`,
  "ice-machines": (city) =>
    `${city} ice operations push commercial machines through long harvest cycles in hot, humid ambient conditions. We service Hoshizaki, Manitowoc and Scotsman systems on dispatch — water chemistry, harvest sensors, condenser cleaning and refrigerant work all in scope.`,
  "restaurant-equipment": (city) =>
    `Fryers, ovens, ranges, panini presses and warming systems in ${city} kitchens cycle through long service days. We carry common ignition modules, gas valves, thermostats and heating elements so most repairs close out the same day.`,
  "beverage-frozen": (city) =>
    `Frozen drink, soda and beverage dispensers in ${city} bars and high-traffic operations cycle aggressively. Auger drives, dispense valves, carbonator pumps and refrigeration loops are all routine service for our techs.`,
  ventilation: (city) =>
    `Commercial hood and exhaust systems in ${city} kitchens run during every service. Fan motors, belt drives, makeup-air units and hood control panels age fast under continuous duty — we service all the moving parts that aren't fire-suppression scope.`,
  vending: (city) =>
    `Operators running vending equipment in ${city} need fast diagnostics on bill validators, vend motors and refrigeration. We dispatch with the standard parts for the platforms in use across South Florida.`,
  "commercial-laundry": (city) =>
    `Hotels, condo buildings, fitness centers and care facilities in ${city} depend on continuous laundry throughput. We service Speed Queen, Whirlpool Commercial, Maytag Commercial and Electrolux Professional washers and dryers — coin/card operations included.`,
  other: (city) =>
    `Disposal, compactor and miscellaneous commercial equipment service across ${city} — repair where it's viable, replacement coordination when it isn't.`,
}

const CATEGORY_NOTES_ES: Record<Service["category"], (city: string) => string> = {
  refrigeration: (city) =>
    `Walk-in coolers, prep tables, reach-ins y sistemas de congelación profunda en ${city} operan en ciclo continuo bajo la humedad del Sur de Florida — cargamos compresores grado refrigeración, fans de evaporador y empaques de puerta en los trucks para reparaciones en la primera visita.`,
  "ice-machines": (city) =>
    `Las operaciones de hielo en ${city} hacen ciclar las máquinas comerciales por ciclos largos de harvest en condiciones cálidas y húmedas. Atendemos sistemas Hoshizaki, Manitowoc y Scotsman en despacho — química del agua, sensores de harvest, limpieza de condensador y trabajo de refrigerante.`,
  "restaurant-equipment": (city) =>
    `Freidoras, hornos, ranges, panini presses y sistemas de calentamiento en cocinas de ${city} ciclan en jornadas largas de servicio. Cargamos módulos de ignición, válvulas de gas, termostatos y elementos de calentamiento comunes, así que la mayoría de reparaciones cierran el mismo día.`,
  "beverage-frozen": (city) =>
    `Dispensadores de bebidas congeladas, soda y bebidas en bares y operaciones de alto tráfico en ${city} ciclan agresivamente. Auger drives, válvulas de dispensación, bombas de carbonator y loops de refrigeración son servicio de rutina para nuestros técnicos.`,
  ventilation: (city) =>
    `Las campanas comerciales y sistemas de extracción en cocinas de ${city} operan durante cada servicio. Motores de fan, drives de correa, makeup-air units y paneles de control de campana envejecen rápido bajo carga continua — atendemos todas las partes móviles que no son alcance de fire-suppression.`,
  vending: (city) =>
    `Operadores de vending en ${city} necesitan diagnóstico rápido de bill validators, motores de vend y refrigeración. Despachamos con las partes estándar de las plataformas usadas en el Sur de Florida.`,
  "commercial-laundry": (city) =>
    `Hoteles, edificios de condominio, centros de fitness e instituciones de cuidado en ${city} dependen del throughput continuo de lavandería. Atendemos lavadoras y secadoras Speed Queen, Whirlpool Commercial, Maytag Commercial y Electrolux Professional — incluyendo operaciones con monedas y tarjetas.`,
  other: (city) =>
    `Servicio de disposal, compactor y equipo comercial misceláneo en ${city} — reparación cuando es viable, coordinación de reemplazo cuando no.`,
}

export function cityIntro(city: City, locale: Locale = "en"): string {
  const p = profileFor(city, locale)
  if (locale === "es") {
    return (
      `Berne Commercial Repair despacha en ${p.corridor} de ${city.name}, ` +
      `atendiendo ${p.mix}. Factor local: ${p.climate}. La refrigeración, ` +
      `máquinas de hielo, equipo de cocina y sistemas de back-of-house en ` +
      `${city.name} permanecen en nuestra rotación de servicio de ciclo corto todo el año.`
    )
  }
  return (
    `Berne Commercial Repair dispatches across ${p.corridor} in ${city.name}, ` +
    `serving ${p.mix}. Local factor: ${p.climate}. Refrigeration, ice machines, ` +
    `cooking equipment and back-of-house systems in ${city.name} stay on our ` +
    `short-cycle service rotation year-round.`
  )
}

export function citySecondaryParagraph(city: City, locale: Locale = "en"): string {
  const county = COUNTIES[city.county]
  if (locale === "es") {
    return (
      `${city.name} está en el condado de ${county}, y nuestro modelo de despacho ` +
      `está construido para las cuentas comerciales que operan aquí — restaurantes, ` +
      `producción de alimentos, hospitalidad, retail y edificios administrados que no ` +
      `pueden permitirse un vendor lento cuando un walk-in falla o una máquina de hielo ` +
      `deja de producir.`
    )
  }
  return (
    `${city.name} sits in ${county} County, and our dispatch model is built ` +
    `for the kind of commercial accounts that operate here — restaurants, ` +
    `food production, hospitality, retail and property-managed buildings ` +
    `that can't afford a slow service vendor when a walk-in goes down or an ` +
    `ice machine stops harvesting.`
  )
}

export function cityServiceIntro(
  city: City,
  service: Service,
  locale: Locale = "en",
): string {
  const localizedSrv = localizedService(service, locale)
  const p = profileFor(city, locale)
  if (locale === "es") {
    const note = CATEGORY_NOTES_ES[service.category](city.name)
    return (
      `En ${city.name}, nuestro despacho de ${localizedSrv.shortTitle.toLowerCase()} cubre ` +
      `${p.corridor} — atendiendo ${p.mix}. Factor local: ${p.climate}. ${note}`
    )
  }
  const note = CATEGORY_NOTES_EN[service.category](city.name)
  return (
    `In ${city.name}, our ${service.shortTitle.toLowerCase()} dispatch covers ` +
    `${p.corridor} — serving ${p.mix}. Local factor: ${p.climate}. ${note}`
  )
}

export function cityServiceContext(
  city: City,
  service: Service,
  locale: Locale = "en",
): string {
  const localizedSrv = localizedService(service, locale)
  if (locale === "es") {
    return (
      `${localizedSrv.longDescription} ` +
      `Para ${city.name} específicamente, ese trabajo ocurre contra el contexto comercial ` +
      `local descrito arriba — enviamos un técnico con la especialización y partes correctas ` +
      `para ${localizedSrv.shortTitle.toLowerCase()} en la primera visita.`
    )
  }
  return (
    `${service.longDescription} ` +
    `For ${city.name} specifically, that work happens against the local commercial ` +
    `backdrop above — we route a tech with the right specialization and parts ` +
    `for ${service.shortTitle.toLowerCase()} the first time.`
  )
}

// Keep symbol stable for English-only callers that don't pass a locale.
export { cap as _cap }

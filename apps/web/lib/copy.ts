import { type City, COUNTIES } from "./data/cities"
import { type Service } from "./data/services"
import {
  cityProfileFallback,
  getCityProfile,
  type CityProfile,
} from "./data/city-profiles"

function cap(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function profileFor(city: City): CityProfile {
  return getCityProfile(city.slug) ?? cityProfileFallback(city.name, city.county)
}

const CATEGORY_NOTES: Record<Service["category"], (city: string) => string> = {
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

export function cityIntro(city: City): string {
  const p = profileFor(city)
  return (
    `Berne Commercial Repair dispatches across ${p.corridor} in ${city.name}, ` +
    `where ${p.mix}. ${cap(p.climate)} — which means refrigeration, ice machines, ` +
    `cooking equipment and back-of-house systems in ${city.name} stay on our ` +
    `short-cycle service rotation year-round.`
  )
}

export function citySecondaryParagraph(city: City): string {
  const county = COUNTIES[city.county]
  return (
    `${city.name} sits in ${county} County, and our dispatch model is built ` +
    `for the kind of commercial accounts that operate here — restaurants, ` +
    `food production, hospitality, retail and property-managed buildings ` +
    `that can't afford a slow service vendor when a walk-in goes down or an ` +
    `ice machine stops harvesting.`
  )
}

export function cityServiceIntro(city: City, service: Service): string {
  const p = profileFor(city)
  const note = CATEGORY_NOTES[service.category](city.name)
  return (
    `In ${city.name}, our ${service.shortTitle.toLowerCase()} dispatch covers ` +
    `${p.corridor}, where ${p.mix}. ${cap(p.climate)}. ${note}`
  )
}

export function cityServiceContext(city: City, service: Service): string {
  return (
    `${service.longDescription} ` +
    `For ${city.name} specifically, that work happens against the local commercial ` +
    `backdrop above — we route a tech with the right specialization and parts ` +
    `for ${service.shortTitle.toLowerCase()} the first time.`
  )
}

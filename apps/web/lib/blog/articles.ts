import { iceMachineNotMakingIce } from "./content/ice-machine-not-making-ice-restaurant"
import { walkInCoolerTemperature } from "./content/commercial-walk-in-cooler-temperature-issues"
import { commercialDishwasherLowPressure } from "./content/commercial-dishwasher-low-pressure"
import { espressoMachineNoPressure } from "./content/espresso-machine-no-pressure-cafe"
import { commercialFryerThermostat } from "./content/commercial-fryer-thermostat-issues"
import { commercialConvectionOvenEvenBake } from "./content/commercial-convection-oven-even-bake-failure"
import { hobartDishwasherWashArms } from "./content/hobart-dishwasher-wash-arms-not-spinning"
import { hoshizakiVsManitowocVsScotsman } from "./content/hoshizaki-vs-manitowoc-vs-scotsman-south-florida"
import { nsfInspectorFailedReachIn } from "./content/nsf-inspector-failed-reach-in-recovery"
import { greaseTrapApplianceLifespan } from "./content/restaurant-grease-trap-maintenance-appliance-lifespan"
import { walkInFreezerFrostBuildup } from "./content/walk-in-freezer-frost-buildup-defrost"
import { beverageAirCondenserCleaning } from "./content/beverage-air-condenser-cleaning-coastal"
import { vulcanRangePilot } from "./content/vulcan-range-pilot-wont-stay-lit"
import { beerSystemGlycolChiller } from "./content/beer-system-glycol-chiller-issues"
import { hotelBanquetRefrigeration } from "./content/hotel-banquet-refrigeration-service"
import { commercialMicrowaveMagnetron } from "./content/commercial-microwave-magnetron-replacement"
import { foodTruckRefrigeration } from "./content/food-truck-refrigeration-mobile-coil"
import { trueRefrigerationGasket } from "./content/true-refrigeration-door-gasket-replacement"
import { marineRefrigerationMarina } from "./content/marine-refrigeration-marina-restaurants"
import { frymasterFilterPumpLockout } from "./content/frymaster-filter-pump-lockout"
import { espressoGroupHeadBoilerPressure } from "./content/espresso-group-head-boiler-pressure"
import { underbarRefrigerationFailure } from "./content/restaurant-underbar-refrigeration-failure"
import { pizzaConveyorOvenBelt } from "./content/pizza-conveyor-oven-belt-bearing"
import { propertyManagementMultiUnit } from "./content/property-management-multi-unit-refrigeration"

export type ArticleSection = {
  heading: string
  body: string[]
}

export type ArticleLink = {
  label: string
  href: string
}

export type Article = {
  slug: string
  title: string
  description: string
  publishedAt: string // ISO yyyy-mm-dd
  updatedAt?: string
  readingMinutes: number
  category: string
  tags: string[]
  lede: string
  sections: ArticleSection[]
  internalLinks: ArticleLink[]
  relatedSlugs?: string[]
}

export const articles: Article[] = [
  iceMachineNotMakingIce,
  walkInCoolerTemperature,
  commercialDishwasherLowPressure,
  espressoMachineNoPressure,
  commercialFryerThermostat,
  commercialConvectionOvenEvenBake,
  hobartDishwasherWashArms,
  hoshizakiVsManitowocVsScotsman,
  nsfInspectorFailedReachIn,
  greaseTrapApplianceLifespan,
  walkInFreezerFrostBuildup,
  beverageAirCondenserCleaning,
  vulcanRangePilot,
  beerSystemGlycolChiller,
  hotelBanquetRefrigeration,
  commercialMicrowaveMagnetron,
  foodTruckRefrigeration,
  trueRefrigerationGasket,
  marineRefrigerationMarina,
  frymasterFilterPumpLockout,
  espressoGroupHeadBoilerPressure,
  underbarRefrigerationFailure,
  pizzaConveyorOvenBelt,
  propertyManagementMultiUnit,
]

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function publishedArticles(now: Date = new Date()): Article[] {
  return articles
    .filter((a) => new Date(a.publishedAt).getTime() <= now.getTime())
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
}

export function isPublished(article: Article, now: Date = new Date()): boolean {
  return new Date(article.publishedAt).getTime() <= now.getTime()
}

export function formatPublishDate(iso: string, locale: "en" | "es" = "en") {
  const d = new Date(iso)
  return d.toLocaleDateString(locale === "es" ? "es-US" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

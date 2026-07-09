/**
 * Data layer for the South Florida Commercial Kitchen Equipment Repair Cost
 * Guide (`/resources/commercial-kitchen-repair-cost-guide`) — a linkable
 * data-asset built for editorial + LLM citation.
 *
 * EVERY dollar range and lifespan figure here is aggregated from content ALREADY
 * PUBLISHED on this site (lib/data/services.ts symptomTable, the static service
 * hubs under app/services/*, and lib/blog/content/*). Nothing is invented. Where
 * a published per-symptom range did not exist we left the cell to a published
 * adjacent figure or an honest "Assessment". See the page's Methodology section.
 *
 * The `replacementUSD` field is the ONE deliberately approximate value: a
 * representative *installed* replacement cost used solely to apply the industry
 * "50% rule" inside the calculator. It is labeled as approximate in the UI and
 * methodology block — no false precision. Sources where published: walk-in
 * condensing-unit replacement $2,500–$4,800 (services.ts), commercial dishwasher
 * installed $3,800–$9,400 (commercial-dishwasher blog posts), combi steam-system
 * $3,000–$5,000 (combi hub). Others are reasonable South Florida installed
 * midpoints flagged as estimates.
 */

export type CostRow = {
  /** What the operator sees on the floor. */
  symptom: string
  /** Most likely cause / failed part, from real tickets. */
  cause: string
  /** Typical repair cost range, parts + labor, before any contract pricing. */
  cost: string
  /** Dispatch expectation ("Same-day", "Emergency", "Next visit", "24–48h"). */
  response: string
}

export type EquipmentCostGroup = {
  /** Stable key — also the calculator option value. */
  key: string
  /** Display label for the table heading + calculator dropdown. */
  label: string
  /** One-sentence framing for the table caption. */
  blurb: string
  /** Published lifespan range as text, e.g. "7–12 years". */
  lifespan: string
  /** Numeric lifespan bounds (years) for the repair-vs-replace calculator. */
  lifespanYears: { min: number; max: number }
  /**
   * Approximate INSTALLED replacement cost (USD), used only to apply the 50%
   * rule in the calculator. Flagged as an estimate in the UI/methodology.
   */
  replacementUSD: number
  /** The on-site service hub this category maps to (internal link). */
  serviceLink: { href: string; label: string }
  rows: CostRow[]
}

export const COST_GROUPS: EquipmentCostGroup[] = [
  {
    key: "walk-in",
    label: "Walk-in cooler & freezer",
    blurb:
      "A walk-in is two lifespans: the insulated panels last decades, the condensing unit runs ~10–15 years and is the part you actually replace.",
    lifespan: "10–15 years (condensing unit)",
    lifespanYears: { min: 10, max: 15 },
    replacementUSD: 3800,
    serviceLink: {
      href: "/services/walk-in-cooler-repair",
      label: "Walk-in cooler & freezer repair",
    },
    rows: [
      {
        symptom: "Box temperature creeping up overnight",
        cause: "Defrost timer/heater failure or low refrigerant charge",
        cost: "$250–$700",
        response: "Emergency",
      },
      {
        symptom: "Ice building up on the evaporator coil",
        cause: "Failed defrost cycle, heater or termination thermostat",
        cost: "$250–$700",
        response: "Same-day",
      },
      {
        symptom: "Evaporator fans loud, slow, or dead",
        cause: "Fan motor wear — heat load climbs fast once one drops",
        cost: "$200–$450",
        response: "Same-day",
      },
      {
        symptom: "Door won't seal, frame sweating or iced over",
        cause: "Gasket, sweep, hinge cam or frame-heater wear",
        cost: "$150–$450",
        response: "Same-day",
      },
      {
        symptom: "Warm box + hissing or oil traces (refrigerant leak)",
        cause: "Aged line set or coil — recharge runs $90–$150/lb",
        cost: "$400–$1,200",
        response: "Emergency",
      },
      {
        symptom: "Compressor dead on a 10+ year system",
        cause: "Full condensing-unit replacement — resets 10–15 yrs of life",
        cost: "$2,500–$4,800",
        response: "24–48h",
      },
    ],
  },
  {
    key: "reach-in",
    label: "Reach-in & prep refrigeration",
    blurb:
      "Reach-ins, prep tables and display cases. The compressor works hardest in a hot kitchen; dirty coils and torn gaskets age them fastest.",
    lifespan: "7–12 years",
    lifespanYears: { min: 7, max: 12 },
    replacementUSD: 4000,
    serviceLink: {
      href: "/services/commercial-refrigeration-repair",
      label: "Commercial refrigeration repair",
    },
    rows: [
      {
        symptom: "Cabinet not holding temperature / product above 41°F",
        cause: "Door gasket compression set or thermostat/controller drift",
        cost: "$80–$380",
        response: "Same-day",
      },
      {
        symptom: "Compressor short-cycling or running constantly",
        cause: "Start relay/capacitor wear or fouled/salt-corroded condenser",
        cost: "$120–$480",
        response: "Same-day",
      },
      {
        symptom: "Condenser fan dead, unit running hot",
        cause: "Salt-air corroded fan motor — the #1 coastal failure",
        cost: "$120–$240",
        response: "Same-day",
      },
      {
        symptom: "Doors sweating, condensation around the frame",
        cause: "Worn gasket or failed door/frame heater",
        cost: "$80–$350",
        response: "Same-day",
      },
      {
        symptom: "Water pooling under the cabinet",
        cause: "Clogged condensate drain or leaking inlet solenoid",
        cost: "$90–$280",
        response: "Next visit",
      },
      {
        symptom: "Display controller showing a fault code",
        cause: "Sensor or control board failure",
        cost: "$120–$420",
        response: "Same-day",
      },
    ],
  },
  {
    key: "ice-machine",
    label: "Ice machine",
    blurb:
      "Hoshizaki, Manitowoc, Scotsman. The 7–10 year range collapses without water treatment — hard South Florida water scales the evaporator.",
    lifespan: "7–10 years",
    lifespanYears: { min: 7, max: 10 },
    replacementUSD: 4000,
    serviceLink: {
      href: "/services/ice-machine-repair",
      label: "Ice machine repair",
    },
    rows: [
      {
        symptom: "No ice, or cubes coming out thin",
        cause: "Water inlet valve failure or scale restricting flow",
        cost: "$90–$260",
        response: "Same-day",
      },
      {
        symptom: "Runs continuously but never harvests",
        cause: "Harvest sensor drift — the classic 5–8 year ticket",
        cost: "$80–$180",
        response: "Same-day",
      },
      {
        symptom: "Production drops in summer heat",
        cause: "Fouled condenser or corroded fan motor (coastal)",
        cost: "$120–$300",
        response: "Same-day",
      },
      {
        symptom: "Ice tastes or smells off",
        cause: "Overdue sanitation cycle + water filter change",
        cost: "$180–$340",
        response: "Next visit",
      },
      {
        symptom: "Grinding noise from a nugget / flaker machine",
        cause: "Auger bearing wear — stop the machine, it gets expensive",
        cost: "$300–$900",
        response: "Emergency",
      },
      {
        symptom: "Compressor dead on a 10+ year machine",
        cause: "End-of-life sealed system — replace vs repair math",
        cost: "$800–$1,400",
        response: "24–48h",
      },
    ],
  },
  {
    key: "fryer",
    label: "Commercial fryer",
    blurb:
      "Gas fryers tend to outlast electric (simpler heat source). The vat can outlive everything; oil management and thermostats send you to the phone first.",
    lifespan: "7–12 years",
    lifespanYears: { min: 7, max: 12 },
    replacementUSD: 2500,
    serviceLink: { href: "/services/fryer-repair", label: "Fryer repair" },
    rows: [
      {
        symptom: "Pilot won't stay lit",
        cause: "Thermopile/thermocouple failure — parts on the truck",
        cost: "$80–$160",
        response: "Same-day",
      },
      {
        symptom: "Oil overheating, food burning",
        cause: "Thermostat drift or stuck high-limit",
        cost: "$120–$300",
        response: "Same-day",
      },
      {
        symptom: "Fryer drops to standby mid-rush",
        cause: "Temperature probe failure",
        cost: "$90–$160",
        response: "Same-day",
      },
      {
        symptom: "Filter pump locked out (Frymaster FilterQuick)",
        cause: "Thermal lockout or seized pump from cold-oil filtration",
        cost: "$260–$520",
        response: "Same-day",
      },
      {
        symptom: "Burner won't ignite on electronic-ignition models",
        cause: "Ignition module or combination gas valve",
        cost: "$180–$380",
        response: "Same-day",
      },
      {
        symptom: "Vat weeping oil at the weld seams",
        cause: "Vat corrosion — end of life, replacement planning",
        cost: "Assessment",
        response: "Same-day",
      },
    ],
  },
  {
    key: "combi-oven",
    label: "Combi & convection oven",
    blurb:
      "Combis last 10–15 years but the steam generator is the limiter — South Florida hard water scales the boiler and the steam side fails before the rest.",
    lifespan: "10–15 years (combi); 12–15 (convection)",
    lifespanYears: { min: 10, max: 15 },
    replacementUSD: 14000,
    serviceLink: {
      href: "/services/combi-oven-repair",
      label: "Combi & commercial oven repair",
    },
    rows: [
      {
        symptom: "Oven won't ignite or won't heat",
        cause: "Ignition module, gas valve, or failed heating element",
        cost: "$180–$480",
        response: "Same-day",
      },
      {
        symptom: "Not holding set temperature / uneven bake",
        cause: "Thermostat or temperature-probe drift, or blower motor wear",
        cost: "$150–$450",
        response: "Same-day",
      },
      {
        symptom: "Combi not generating steam",
        cause: "Scaled or failed steam generator, water inlet, or level probe",
        cost: "$300–$1,200",
        response: "Same-day",
      },
      {
        symptom: "Combi throwing a fault / error code",
        cause: "Sensor, control-board or water-system fault (Rational, etc.)",
        cost: "$200–$700",
        response: "Same-day",
      },
      {
        symptom: "Blower motor noisy or not turning (convection)",
        cause: "Fan motor bearing wear or failed motor",
        cost: "$250–$600",
        response: "Same-day",
      },
      {
        symptom: "Steam generator dead on a 10+ year boiler combi",
        cause: "End-of-life steam system — repair-vs-replace math",
        cost: "$3,000–$5,000",
        response: "24–48h",
      },
    ],
  },
  {
    key: "range",
    label: "Range, charbroiler & griddle",
    blurb:
      "The marathon runners — 12–15+ years. Mostly gas and steel with few electronics, so there's less to fail; burners and valves are wear items you replace as you go.",
    lifespan: "12–15+ years",
    lifespanYears: { min: 12, max: 15 },
    replacementUSD: 4500,
    serviceLink: {
      href: "/services/commercial-range-repair",
      label: "Commercial range repair",
    },
    rows: [
      {
        symptom: "Burner won't light or weak flame",
        cause: "Thermocouple, spark module or clogged burner/orifice",
        cost: "$140–$400",
        response: "Same-day",
      },
      {
        symptom: "Low or uneven flame across the range",
        cause: "Gas-pressure / regulator drift — needs a manometer adjustment",
        cost: "$80–$280",
        response: "Same-day",
      },
      {
        symptom: "Charbroiler section runs cold or uneven",
        cause: "Burner or regulator fault ($58–$82 OEM burner per section)",
        cost: "$140–$400",
        response: "Same-day",
      },
      {
        symptom: "Range oven base not holding temperature",
        cause: "Thermostat, safety valve or pilot fault",
        cost: "$150–$420",
        response: "Same-day",
      },
      {
        symptom: "Multiple burner sections failing on an aging range",
        cause: "Burner-bank wear — a full RB-36 rebuild runs $850–$1,200",
        cost: "$850–$1,200",
        response: "24–48h",
      },
    ],
  },
  {
    key: "dishwasher",
    label: "Commercial dishwasher",
    blurb:
      "Door-type, undercounter and conveyor machines last 10–15 years but live and die by water — scale, pumps and booster elements are the usual wear points.",
    lifespan: "10–15 years",
    lifespanYears: { min: 10, max: 15 },
    replacementUSD: 6000,
    serviceLink: {
      href: "/services/commercial-dishwasher-repair",
      label: "Commercial dishwasher repair",
    },
    rows: [
      {
        symptom: "Dishes not getting clean, low wash pressure",
        cause: "Worn wash-arm bearings/jets or a weak wash pump",
        cost: "$90–$480",
        response: "Same-day",
      },
      {
        symptom: "Wash arms not spinning",
        cause: "Bearing kit, clogged jets or failed pump assembly",
        cost: "$40–$480",
        response: "Same-day",
      },
      {
        symptom: "Not reaching the 180°F sanitizing rinse",
        cause: "Scaled or failed booster heater element / contactor",
        cost: "$180–$620",
        response: "Same-day",
      },
      {
        symptom: "Sanitizer or detergent not dosing",
        cause: "Chemical pump tube or dispenser fault",
        cost: "$60–$180",
        response: "Same-day",
      },
      {
        symptom: "Door won't seal, slow drain or leaks",
        cause: "Door spring kit, gasket or drain valve",
        cost: "$90–$245",
        response: "Next visit",
      },
      {
        symptom: "Booster heater dead on an aging machine",
        cause: "End-of-life — installed replacement runs $3,800–$9,400",
        cost: "Assessment",
        response: "24–48h",
      },
    ],
  },
  {
    key: "pizza-oven",
    label: "Pizza oven (deck & conveyor)",
    blurb:
      "Deck, conveyor and brick ovens. Stones, burners, thermocouples and conveyor drives are the field-frequent failures across South Florida pizzerias.",
    lifespan: "10–15 years",
    lifespanYears: { min: 10, max: 15 },
    replacementUSD: 12000,
    serviceLink: {
      href: "/services/pizza-oven-repair",
      label: "Commercial pizza oven repair",
    },
    rows: [
      {
        symptom: "Deck won't reach or hold 500–700°F",
        cause: "Burner, thermocouple, gas-valve or element fault",
        cost: "$180–$900",
        response: "Same-day",
      },
      {
        symptom: "Slow recovery between bakes, soggy or pale crust",
        cause: "Stone heat loss, weak burner, blower fault or door seal leak",
        cost: "$200–$680",
        response: "Same-day",
      },
      {
        symptom: "Pilot / ignition won't light or drops out",
        cause: "Thermocouple, spark module, gas valve or flame-sensor fault",
        cost: "$160–$520",
        response: "Same-day",
      },
      {
        symptom: "Conveyor belt stalls, drags or runs uneven",
        cause: "Drive motor, gearbox, worn bearings or stretched belt",
        cost: "$220–$1,100",
        response: "Same-day",
      },
      {
        symptom: "Gas smell, sooting or yellow flame",
        cause: "Combustion / gas-pressure fault — stop and call",
        cost: "$160–$600",
        response: "Emergency",
      },
    ],
  },
  {
    key: "beer-cooler",
    label: "Beer cooler & kegerator",
    blurb:
      "Direct-draw coolers, kegerators and glycol systems for bars. Most 'foamy taps' calls are a temperature or gas-pressure problem, not the beer.",
    lifespan: "10–15 years",
    lifespanYears: { min: 10, max: 15 },
    replacementUSD: 5000,
    serviceLink: {
      href: "/services/beer-cooler-repair",
      label: "Beer cooler & kegerator repair",
    },
    rows: [
      {
        symptom: "Every tap pours foamy across the whole bar",
        cause: "Warm glycol/trunk line, low gas pressure or a temperature fault",
        cost: "$160–$520",
        response: "Same-day",
      },
      {
        symptom: "Beer pours warm, box never reaches 34–38°F",
        cause: "Dirty condenser, low refrigerant, weak compressor or fan fault",
        cost: "$220–$900",
        response: "Same-day",
      },
      {
        symptom: "Back-bar glass door sweating / fogging",
        cause: "Failed door anti-sweat heater or compression-set gasket",
        cost: "$140–$380",
        response: "Same-day",
      },
      {
        symptom: "CO2 empties fast / kegs go flat in 48h",
        cause: "Regulator diaphragm leak, loose gas line or wrong set pressure",
        cost: "$110–$300",
        response: "Same-day",
      },
      {
        symptom: "Compressor runs nonstop, never satisfies",
        cause: "Coastal condenser fouling, refrigerant leak or restricted metering",
        cost: "$240–$950",
        response: "Same-day",
      },
    ],
  },
  {
    key: "wine-cooler",
    label: "Wine cooler & cellar",
    blurb:
      "Restaurant and retail wine refrigeration, dual-zone cabinets and walk-in cellars (Wine Guardian, CellarPro). Temperature, humidity and dual-zone control.",
    lifespan: "7–12 years",
    lifespanYears: { min: 7, max: 12 },
    replacementUSD: 5000,
    serviceLink: {
      href: "/services/commercial-wine-cooler-repair",
      label: "Commercial wine cooler repair",
    },
    rows: [
      {
        symptom: "Not cooling to set point",
        cause: "Compressor / refrigeration, controller or sensor fault",
        cost: "$240–$900",
        response: "Same-day",
      },
      {
        symptom: "Dual zones not separating (one tracks the other)",
        cause: "Zone damper, second evaporator/fan, or controller fault",
        cost: "$220–$680",
        response: "Same-day",
      },
      {
        symptom: "Glass door sweating / fogging on the inside",
        cause: "Anti-condensate heater failed or door gasket leaking humid air",
        cost: "$160–$420",
        response: "Same-day",
      },
      {
        symptom: "Humidity too low — corks drying, labels lifting",
        cause: "Over-cooling, humidity system or controller fault",
        cost: "$180–$480",
        response: "Same-day",
      },
      {
        symptom: "Walk-in wine cellar cooling unit dead",
        cause: "End-of-life cellar unit — repair-vs-replace assessment",
        cost: "$900–$3,200",
        response: "24–48h",
      },
    ],
  },
  {
    key: "holding-cabinet",
    label: "Holding & warming cabinet",
    blurb:
      "Heated holding and cook-and-hold cabinets. Elements, humidity and 140°F+ hot-hold compliance — a HACCP calibration issue is a food-safety issue.",
    lifespan: "10–15 years",
    lifespanYears: { min: 10, max: 15 },
    replacementUSD: 4000,
    serviceLink: {
      href: "/services/holding-cabinet-repair",
      label: "Holding & warming cabinet repair",
    },
    rows: [
      {
        symptom: "Won't reach or hold 140°F+ hot-hold temperature",
        cause: "Heating element, thermostat or contactor fault",
        cost: "$180–$520",
        response: "Same-day",
      },
      {
        symptom: "Food drying out, edges crusting on a long hold",
        cause: "Humidity / water system or vent fault",
        cost: "$160–$480",
        response: "Same-day",
      },
      {
        symptom: "Hot and cold spots shelf-to-shelf",
        cause: "Circulation fan motor/blade fault or blocked air plenum",
        cost: "$220–$560",
        response: "Same-day",
      },
      {
        symptom: "Display / controller reading wrong or faulting",
        cause: "Sensor or control board fault",
        cost: "$180–$640",
        response: "Same-day",
      },
      {
        symptom: "Cook-and-Hold won't transition out of cook into hold",
        cause: "Mode/transfer relay, timer board, or probe-driven logic fault",
        cost: "$240–$620",
        response: "Same-day",
      },
    ],
  },
  {
    key: "espresso",
    label: "Espresso machine",
    blurb:
      "High-pressure water systems with many small valves and electronics — limited by scale on the boiler. Filtration and descaling are everything.",
    lifespan: "7–10 years",
    lifespanYears: { min: 7, max: 10 },
    replacementUSD: 9000,
    serviceLink: {
      href: "/services/espresso-machine-repair",
      label: "Espresso machine repair",
    },
    rows: [
      {
        symptom: "No pressure / weak shots",
        cause: "Pump, gicleur, or pressure-regulation fault",
        cost: "$180–$410",
        response: "Same-day",
      },
      {
        symptom: "Group head leaking or low pressure",
        cause: "Group gasket / shower screen or solenoid ($80–$140 per group)",
        cost: "$80–$230",
        response: "Same-day",
      },
      {
        symptom: "Boiler not heating or pressure low",
        cause: "Heating element, pressurestat or scaled boiler",
        cost: "$185–$620",
        response: "Same-day",
      },
      {
        symptom: "Scale warning / slow flow",
        cause: "Overdue descale + filter cartridge ($185 every ~6 months)",
        cost: "$180–$340",
        response: "Next visit",
      },
      {
        symptom: "Boiler failure on an aging machine",
        cause: "End-of-life boiler — a $2,400 boiler job triggers replace math",
        cost: "Assessment",
        response: "24–48h",
      },
    ],
  },
]

/**
 * Self-contained, number-bearing sentences engineered for AI Overviews /
 * Perplexity / ChatGPT citation. Each is true on its own with no surrounding
 * context, and every figure traces to published site content.
 */
export const CITABLE_STATS: { stat: string; source: string }[] = [
  {
    stat: "Most commercial kitchen equipment repairs in South Florida fall between $80 and $1,200 in parts and labor; full sealed-system or condensing-unit replacements run $2,500 to $4,800.",
    source: "Aggregated from Berne Commercial service-ticket cost tables.",
  },
  {
    stat: "A walk-in cooler's insulated panels can last decades, but its condensing unit runs about 10–15 years and typically costs $2,500 to $4,500 to replace.",
    source: "Berne Commercial walk-in cooler repair data.",
  },
  {
    stat: "Commercial ice machines last 7–10 years, but untreated South Florida hard water can cut that to as little as four years by scaling the evaporator.",
    source: "Berne Commercial equipment-lifespan guide.",
  },
  {
    stat: "Gas ranges, charbroilers, and griddles are the longest-lived commercial kitchen equipment at 12–15 years and often beyond, because they are mostly gas and steel with few electronics to fail.",
    source: "Berne Commercial equipment-lifespan guide.",
  },
  {
    stat: "Combi ovens last 10–15 years, but the steam generator is the limiter — a failed generator on an aging boiler combi runs $3,000 to $5,000 and usually forces a repair-versus-replace decision.",
    source: "Berne Commercial combi oven repair data.",
  },
  {
    stat: "The 50% rule: when a single repair exceeds about half the cost of a comparable new unit — especially on older equipment with scarce parts — replacement usually wins.",
    source: "Berne Commercial repair-or-replace framework.",
  },
  {
    stat: "Berne Commercial Repair has completed 29,300+ commercial equipment services across Miami-Dade, Broward, and Palm Beach since 2015, holding a 4.79-star average across 1,373 reviews.",
    source: "Berne Commercial company record.",
  },
  {
    stat: "A roughly $200 quarterly dishwasher maintenance bill prevents the $7,000 mid-shift failure and helps a commercial dishwasher reach the top of its 10–15-year service life.",
    source: "Berne Commercial dishwasher maintenance data.",
  },
]

export const COST_GUIDE_FAQS: { q: string; a: string }[] = [
  {
    q: "How much does commercial kitchen equipment repair cost in South Florida?",
    a: "Most commercial kitchen repairs land between $80 and $1,200 in parts and labor — door gaskets, fan motors, thermostats, probes, pumps and control boards. Sealed-system work (refrigerant leaks, compressors) and end-of-life condensing units run higher, $2,500 to $4,800. Berne Commercial's $89 commercial service call covers the diagnosis and is free when you approve the repair.",
  },
  {
    q: "Should I repair or replace my commercial kitchen equipment?",
    a: "Use the 50% rule with the unit's age. If a single repair costs more than about half of a comparable new unit, replacement starts to make sense — especially on equipment near the end of its lifespan range with scarce parts or high energy use. An early-life failure is almost always worth repairing; the same failure at end-of-range usually is not. Our calculator on this page applies that logic to your numbers.",
  },
  {
    q: "How long does commercial kitchen equipment last?",
    a: "Realistic South Florida ranges: reach-in refrigeration 7–12 years, walk-in condensing units 10–15 years, ice machines 7–10 years, fryers 7–12 years, ranges and griddles 12–15+ years, combi ovens 10–15 years, convection ovens 12–15 years, commercial dishwashers 10–15 years, and espresso machines 7–10 years. The simpler and more mechanical the unit, the longer it lasts; the more it depends on water and electronics, the shorter the clock.",
  },
  {
    q: "Why does equipment fail faster in South Florida?",
    a: "Three local factors compress every lifespan: heat (compressors and condensers run longer, hotter cycles), salt air (corrodes coils, fan motors and cabinets on coastal sites), and hard water (scales every machine that touches water — ice machines, combi steam generators, dishwasher booster heaters and espresso boilers). Water treatment, condenser cleaning and scheduled descaling are the biggest levers for reaching the top of each range.",
  },
  {
    q: "Where do these repair cost ranges come from?",
    a: "Every range on this page is aggregated from Berne Commercial Repair's own South Florida service tickets and published equipment guides — parts plus labor, before any maintenance-contract pricing. They are typical ranges, not quotes; the exact figure depends on brand, part availability and access. The one approximate value is the installed replacement cost used by the calculator to apply the 50% rule, which is labeled as an estimate.",
  },
]

/**
 * Pure repair-vs-replace verdict logic — shared by the calculator client
 * component. Kept here (server-importable) so the logic is testable and the
 * client bundle stays thin. Returns a verdict label, tone and explanation.
 */
export type Verdict = {
  label: string
  tone: "repair" | "replace" | "lean-replace"
  pctOfNew: number
  explanation: string
}

export function repairOrReplace(
  group: Pick<EquipmentCostGroup, "label" | "lifespanYears" | "replacementUSD">,
  ageYears: number,
  repairUSD: number,
): Verdict {
  const pctOfNew = Math.round((repairUSD / group.replacementUSD) * 100)
  const { min, max } = group.lifespanYears
  const pastLife = ageYears >= max
  const endOfRange = ageYears >= min && ageYears < max
  const pct = `${pctOfNew}% of a comparable new unit`

  // 50% rule dominates: a single repair over ~half of new = replace.
  if (pctOfNew >= 50) {
    return {
      label: "Replace",
      tone: "replace",
      pctOfNew,
      explanation: `At about $${repairUSD.toLocaleString()}, this repair is ${pct} (~$${group.replacementUSD.toLocaleString()} installed). The 50% rule says a single repair over half the price of new usually means replace — and the next failure on this unit is likely soon.`,
    }
  }
  if (pastLife) {
    if (pctOfNew >= 30) {
      return {
        label: "Lean replace",
        tone: "lean-replace",
        pctOfNew,
        explanation: `This unit is at or past its typical ${min}–${max}-year life, and at ${pct} the repair is large for an end-of-life machine. Repairing buys time, but budget the replacement — scarce parts, energy cost and downtime are working against you.`,
      }
    }
    return {
      label: "Repair, but plan the replacement",
      tone: "lean-replace",
      pctOfNew,
      explanation: `At ${pct} this is an affordable repair, so fixing it is reasonable. But the unit is past its typical ${min}–${max}-year life — get this repair, then start budgeting a replacement before the next (likely larger) failure.`,
    }
  }
  if (endOfRange && pctOfNew >= 40) {
    return {
      label: "Lean replace",
      tone: "lean-replace",
      pctOfNew,
      explanation: `The unit is near the end of its ${min}–${max}-year range and the repair is ${pct} — close enough to the 50% threshold that replacement deserves a serious look, especially if parts or energy use are concerns.`,
    }
  }
  return {
    label: "Repair",
    tone: "repair",
    pctOfNew,
    explanation: `At ${pct} the repair is well under the 50% rule, and the unit is within its typical ${min}–${max}-year life. Fixing it is the clear call — keep up condenser cleaning, water treatment and descaling to reach the top of that range.`,
  }
}

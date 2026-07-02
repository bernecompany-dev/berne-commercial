// Six core residential appliance services. Copy is written fresh for this
// brand (symptom → likely cause → what a repair runs) — not spun from any
// other site. Keep it specific and honest; vague filler reads as thin content.

export type Faq = { q: string; a: string }

export type Service = {
  slug: string
  appliance: string // "Refrigerator"
  title: string // page H1 / service name
  short: string // one-line teaser for cards + meta
  intro: string // opening paragraph
  symptoms: { sign: string; cause: string }[]
  priceNote: string
  brands: string[]
  faqs: Faq[]
}

export const SERVICES: Service[] = [
  {
    slug: "refrigerator-repair",
    appliance: "Refrigerator",
    title: "Refrigerator Repair",
    short: "Not cooling, leaking, or freezing food? Same-day fridge repair in Broward.",
    intro:
      "A warm refrigerator is the one repair that can't wait — you're losing groceries by the hour. Our Broward technicians carry the parts that fail most on side-by-sides, French-door, and bottom-freezer units, so most no-cool calls are fixed on the first visit.",
    symptoms: [
      { sign: "Fridge is warm but the freezer is fine", cause: "usually a failed evaporator fan or a frosted-over defrost system, not a dead compressor" },
      { sign: "Water pooling under the crisper drawers", cause: "a clogged or frozen defrost drain — a common, inexpensive fix" },
      { sign: "Compressor runs constantly and never cycles off", cause: "dirty condenser coils or a failing start relay" },
      { sign: "Ice maker stopped or ice tastes off", cause: "a stuck water inlet valve or a clogged filter line" },
    ],
    priceNote:
      "Most refrigerator repairs in Broward land between $150 and $450 depending on the part. You get a firm quote before any work starts — no surprises.",
    brands: ["Samsung", "LG", "Whirlpool", "GE", "Frigidaire", "Sub-Zero", "KitchenAid", "Bosch"],
    faqs: [
      { q: "My fridge is warm — is it worth repairing?", a: "Usually yes. A no-cool is most often a fan, relay, or defrost part in the $150–$400 range, well under the cost of a new unit. We only recommend replacement when a sealed-system (compressor) failure meets an aging fridge." },
      { q: "Do you fix Samsung and LG refrigerators?", a: "Yes — they're the two most common brands we see in Broward, and we stock the fan motors, sensors, and control boards that fail most on them." },
      { q: "How fast can someone come out?", a: "For no-cool calls we prioritize same-day or next-morning slots anywhere in Broward County." },
    ],
  },
  {
    slug: "washer-repair",
    appliance: "Washer",
    title: "Washer Repair",
    short: "Won't drain, won't spin, or leaking? Broward washing-machine repair.",
    intro:
      "A washer that won't drain or spin usually strands a drum full of soaking clothes. Most of these faults trace back to a handful of parts — a drain pump, a door lock, or a worn belt — and are fixed the same day once we diagnose which one.",
    symptoms: [
      { sign: "Water left standing in the drum", cause: "a jammed drain pump or a sock caught in the pump filter" },
      { sign: "Drum won't spin or clothes come out soaked", cause: "a broken drive belt, worn motor coupler, or a failed door-lock switch" },
      { sign: "Washer walks across the floor on spin", cause: "worn suspension rods or shock absorbers letting the tub bang around" },
      { sign: "Leaking from underneath", cause: "a cracked hose, a loose pump, or a failed tub seal" },
    ],
    priceNote:
      "Front-load and top-load washer repairs typically run $140–$400. Drain-pump and door-lock jobs sit at the lower end; bearing work at the higher end.",
    brands: ["Samsung", "LG", "Whirlpool", "Maytag", "GE", "Electrolux", "Speed Queen", "Bosch"],
    faqs: [
      { q: "Why won't my front-loader drain?", a: "Nine times out of ten it's the drain pump — either the impeller is jammed with lint and coins or the pump motor has failed. It's a quick, affordable fix." },
      { q: "Is a leaking washer dangerous to keep using?", a: "It can be — water near an electrical appliance and unseen sub-floor damage add up fast. Shut off the supply valves and book a repair; we'll trace the exact source." },
      { q: "Do you repair stackable washer/dryer units?", a: "Yes, we service stacked and combo units common in Broward condos and townhomes." },
    ],
  },
  {
    slug: "dryer-repair",
    appliance: "Dryer",
    title: "Dryer Repair",
    short: "No heat or clothes still damp? Broward dryer repair, gas or electric.",
    intro:
      "When a dryer runs but clothes come out damp, the drum is turning without heat — a repairable fault, not a dead machine. In Florida humidity a restricted vent is also a frequent (and fire-relevant) culprit, so we check airflow on every dryer call.",
    symptoms: [
      { sign: "Drum turns but there's no heat", cause: "a blown thermal fuse, failed heating element, or bad igniter on gas models" },
      { sign: "Takes two or three cycles to dry", cause: "a clogged vent line or lint-packed blower — a safety issue as much as a performance one" },
      { sign: "Loud thumping or squealing", cause: "worn drum rollers, a failing idler pulley, or a stretched belt" },
      { sign: "Dryer shuts off mid-cycle", cause: "an overheating vent or a faulty thermostat tripping the safety cutoff" },
    ],
    priceNote:
      "Most dryer repairs run $130–$350. A no-heat fix (fuse, element, or igniter) is typically at the lower end; motor or bearing work higher.",
    brands: ["Samsung", "LG", "Whirlpool", "Maytag", "GE", "Kenmore", "Electrolux", "Amana"],
    faqs: [
      { q: "My dryer has no heat — what's wrong?", a: "On electric dryers it's usually a blown thermal fuse or heating element; on gas, a failed igniter or valve coil. All three are common, in-stock parts we can replace on the visit." },
      { q: "Do you clean dryer vents too?", a: "We clear the vent and blower as part of a no-heat or slow-drying diagnosis — critical in Florida where a packed vent is both a performance and a fire risk." },
      { q: "Gas or electric — do you handle both?", a: "Both. Tell us which when you book so the tech arrives with the right parts." },
    ],
  },
  {
    slug: "dishwasher-repair",
    appliance: "Dishwasher",
    title: "Dishwasher Repair",
    short: "Not draining, not cleaning, or leaking onto the floor? We fix it.",
    intro:
      "A dishwasher that leaves grit on the dishes or water in the tub is rarely a lost cause — it's usually a clogged filter, a tired pump, or a spray arm that's stopped turning. We diagnose the actual fault instead of guessing, so you're not paying for parts you didn't need.",
    symptoms: [
      { sign: "Standing water in the bottom after a cycle", cause: "a clogged filter, blocked drain hose, or a failed drain pump" },
      { sign: "Dishes come out gritty or still dirty", cause: "a worn wash pump, a clogged spray arm, or low inlet water pressure" },
      { sign: "Water on the floor", cause: "a failed door gasket, a cracked hose, or an overfilling inlet valve" },
      { sign: "Won't start or lights flash a code", cause: "a faulty door latch, control-board fault, or tripped float switch" },
    ],
    priceNote:
      "Dishwasher repairs generally run $130–$350. Drain and spray-arm jobs are quick; pump or control-board replacements sit higher.",
    brands: ["Bosch", "KitchenAid", "Whirlpool", "Samsung", "LG", "GE", "Frigidaire", "Maytag"],
    faqs: [
      { q: "Why is there water sitting in the bottom of my dishwasher?", a: "It's a drainage fault — most often a clogged filter or drain hose, sometimes a failed drain pump. We clear or replace the blockage and confirm a full drain before we leave." },
      { q: "Is it worth repairing a dishwasher or should I replace it?", a: "If it's under about eight years old, repair almost always wins — the common faults are inexpensive parts. We'll give you a straight answer either way." },
      { q: "Do you service built-in and drawer dishwashers?", a: "Yes, including Bosch built-ins and Fisher & Paykel drawer units common in newer Broward kitchens." },
    ],
  },
  {
    slug: "oven-repair",
    appliance: "Oven",
    title: "Oven & Wall-Oven Repair",
    short: "Won't heat, won't hold temperature, or door won't open? Oven repair in Broward.",
    intro:
      "An oven that won't reach temperature or bakes unevenly is almost always one failed component — a heating element, an igniter, or a temperature sensor — not the whole appliance. We test the circuit, confirm the fault, and quote the exact part before touching anything.",
    symptoms: [
      { sign: "Oven won't heat at all", cause: "a burned-out bake element (electric) or a weak igniter (gas)" },
      { sign: "Runs hot or cold vs. the set temperature", cause: "a drifting oven temperature sensor or a miscalibrated control" },
      { sign: "Broiler works but bake doesn't (or vice-versa)", cause: "a failed element or a relay on the control board" },
      { sign: "Door locked shut after self-clean", cause: "a tripped thermal fuse or a stuck door-lock motor" },
    ],
    priceNote:
      "Oven and wall-oven repairs typically run $160–$450. Element and igniter swaps are on the lower end; control-board work higher.",
    brands: ["GE", "Whirlpool", "Samsung", "LG", "Frigidaire", "KitchenAid", "Bosch", "Café"],
    faqs: [
      { q: "My electric oven won't heat but the stovetop works — why?", a: "The bake element or its control relay has failed. The cooktop runs on a separate circuit, which is why it still works. It's a common, same-day repair." },
      { q: "Can you recalibrate an oven that bakes unevenly?", a: "Yes — we test the temperature sensor against a reference and either recalibrate the control or replace a drifting sensor." },
      { q: "Do you repair wall ovens and double ovens?", a: "Yes, single and double wall ovens as well as freestanding and slide-in ranges." },
    ],
  },
  {
    slug: "range-repair",
    appliance: "Range / Stove",
    title: "Range & Cooktop Repair",
    short: "Burner won't light, no heat, or sparking? Gas and electric range repair.",
    intro:
      "Whether it's a gas burner that clicks but won't light or an electric element that stays cold, a range fault is usually isolated to one burner or one switch. We fix the affected part and confirm every burner is safe and even before we call it done.",
    symptoms: [
      { sign: "Gas burner clicks but won't light", cause: "a dirty or cracked igniter, or a clogged burner port" },
      { sign: "Electric coil or radiant element stays cold", cause: "a burned-out element or a failed infinite switch" },
      { sign: "Burner stuck on high, won't adjust", cause: "a shorted infinite switch — a safety concern worth prompt attention" },
      { sign: "Smell of gas near the range", cause: "a loose fitting or valve issue — shut off the supply and call for service right away" },
    ],
    priceNote:
      "Range and cooktop repairs typically run $140–$400. Igniter and element replacements are quick; valve and control work higher.",
    brands: ["GE", "Samsung", "Whirlpool", "Frigidaire", "LG", "KitchenAid", "Bosch", "Maytag"],
    faqs: [
      { q: "My gas burner clicks but won't light — is that dangerous?", a: "The clicking is the igniter working while gas struggles to catch. Turn the burner off, and don't leave it clicking. It's usually a dirty igniter or clogged port — a fast fix once we're out." },
      { q: "Do you repair induction and glass-top ranges?", a: "Yes — induction, radiant glass-top, coil electric, and gas ranges are all in scope." },
      { q: "One burner is dead but the others work — worth a call?", a: "Yes, it's almost always a single element or switch, an inexpensive repair that restores full use of the range." },
    ],
  },
]

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug)
}

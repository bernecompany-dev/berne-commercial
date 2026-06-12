export type ServiceCategory =
  | "refrigeration"
  | "ice-machines"
  | "restaurant-equipment"
  | "beverage-frozen"
  | "ventilation"
  | "vending"
  | "commercial-laundry"
  | "other"

export type SymptomRow = {
  /** What the operator sees ("walk-in not holding temperature") */
  symptom: string
  /** Most likely cause(s) from real tickets */
  cause: string
  /** Typical repair cost range, parts + labor */
  cost: string
  /** Dispatch expectation ("Same-day", "Emergency", "Next visit") */
  response: string
}

export type Service = {
  slug: string
  title: string
  shortTitle: string
  category: ServiceCategory
  summary: string
  longDescription: string
  bullets: string[]
  faqs: { q: string; a: string }[]
  /**
   * Symptom → likely cause → typical cost table for the top hubs
   * (wave-2 2026-06-10: refrigeration pos 8.0 / "near me" pos 9.9 — this is
   * the diagnostic-content depth the page-1 competitors have and we lacked).
   * Costs derive from the brand-comparisons failure-mode data — keep in sync.
   */
  symptomTable?: SymptomRow[]
  primary?: boolean
  // Optional SERP-tuned overrides for the /services/<slug> hub. When unset,
  // the hub falls back to `${title} in South Florida` / `summary`. Keep
  // metaTitle <=52 chars (the layout appends " · Berne", 8 chars, for a 60
  // char SERP budget) and metaDescription <=155 chars.
  metaTitle?: string
  metaDescription?: string
  /**
   * Optional H1 override for the /services/<slug> hub hero (SXO round-4
   * block 5: put the SERP intent qualifier — "Commercial" — in the H1).
   * Rendered as `${heroTitle} in South Florida`; falls back to `title`.
   */
  heroTitle?: string
  /**
   * SERP-tuned <title> template for the /{city}/{slug} combo pages —
   * `{city}` is substituted with the city name. Keep the substituted base
   * <=52 chars for typical city names (layout appends " · Berne", 8 chars).
   * When unset, combos fall back to `${title} in ${city}, FL`.
   */
  comboTitle?: string
}

export const SERVICE_CATEGORIES: Record<ServiceCategory, string> = {
  refrigeration: "Commercial Refrigeration",
  "ice-machines": "Ice Machines",
  "restaurant-equipment": "Restaurant Equipment",
  "beverage-frozen": "Beverage & Frozen Drink Equipment",
  ventilation: "Ventilation & Exhaust",
  vending: "Vending Equipment",
  "commercial-laundry": "Commercial Laundry",
  other: "Other Commercial Equipment",
}

export const services: Service[] = [
  {
    slug: "commercial-refrigeration-repair",
    title: "Commercial Refrigeration Repair",
    shortTitle: "Commercial Refrigeration",
    category: "refrigeration",
    primary: true,
    metaTitle: "Commercial Refrigeration Repair Miami — 24/7",
    metaDescription:
      "Walk-in coolers, freezers & reach-ins fixed same-day across South Florida. 18 W-2 techs, COI-ready dispatch, 4.79★ from 871 reviews. $89 call.",
    summary:
      "Same-day refrigeration service for restaurants, supermarkets, production facilities and enterprise clients.",
    longDescription:
      "Berne Commercial Repair services every class of commercial refrigeration system in South Florida — from walk-in coolers and freezers to reach-in units, prep tables, display merchandisers, and deep freeze systems. Our refrigeration technicians are factory-trained on the brands that dominate commercial kitchens and back-of-house operations: Hoshizaki, Manitowoc, Scotsman, Turbo Air, True, Traulsen, Beverage-Air, Continental, Delfield and more.",
    symptomTable: [
      {
        symptom: "Cabinet not holding temperature / product above 41°F",
        cause: "Door gasket compression set or thermostat/controller drift",
        cost: "$80–$380",
        response: "Same-day",
      },
      {
        symptom: "Compressor short-cycling or struggling to start",
        cause: "Start relay/capacitor wear or fouled condenser coil",
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
        symptom: "Warm box + hissing or oil traces at fittings",
        cause: "Refrigerant leak — detection, repair and recharge",
        cost: "$400–$1,200",
        response: "Emergency",
      },
      {
        symptom: "Compressor dead on a 10+ year system",
        cause: "End-of-life sealed system — replacement vs repair math",
        cost: "$700–$1,300",
        response: "24–48h",
      },
    ],
    bullets: [
      "Walk-in coolers and freezers",
      "Reach-in coolers and freezers",
      "Prep tables and display coolers",
      "Deep freeze refrigeration",
      "Refrigerant leak detection and recharge",
      "Compressor, condenser and evaporator service",
    ],
    faqs: [
      {
        q: "Do you offer same-day commercial refrigeration repair?",
        a: "Yes. Our dispatch operates across South Florida with same-day commercial refrigeration response for restaurants, production facilities, and enterprise accounts.",
      },
      {
        q: "How much does a commercial refrigeration service call cost?",
        a: "Our commercial service call is $89 — free if you approve the repair; you only pay the fee if you decide not to proceed.",
      },
      {
        q: "What commercial refrigeration brands do you service?",
        a: "Hoshizaki, Manitowoc, Scotsman, Turbo Air, True, Traulsen, Beverage-Air, Continental, Delfield, and most major commercial brands.",
      },
    ],
  },
  {
    slug: "walk-in-cooler-repair",
    title: "Walk-In Cooler Repair",
    shortTitle: "Walk-In Coolers",
    category: "refrigeration",
    primary: true,
    metaTitle: "Walk-In Cooler Repair Miami — 24/7 Emergency",
    metaDescription:
      "Emergency walk-in cooler repair across South Florida — temp loss, compressors, refrigerant leaks. 24/7 dispatch, COI-ready, 4.79★. $89 service call.",
    summary:
      "Emergency walk-in cooler service — temperature loss, door seal issues, compressor failures, refrigerant leaks.",
    longDescription:
      "A failing walk-in cooler puts inventory and revenue at risk. Berne Commercial Repair dispatches refrigeration technicians equipped for walk-in cooler diagnostics, refrigerant recovery, electrical work, and component replacement. We service every common configuration — indoor and outdoor units, self-contained and remote condensing systems, and walk-ins with custom panels.",
    symptomTable: [
      {
        symptom: "Temperature creeping up overnight",
        cause: "Defrost timer/heater failure or low refrigerant charge",
        cost: "$250–$600",
        response: "Emergency",
      },
      {
        symptom: "Ice building up on the evaporator coil",
        cause: "Failed defrost cycle or door infiltration icing the coil",
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
        symptom: "Door won't seal, sweep dragging, frame sweating",
        cause: "Gasket, sweep, hinge cam or frame-heater wear",
        cost: "$150–$350",
        response: "Next visit",
      },
      {
        symptom: "Refrigerant leak on an R-22 system",
        cause: "Aged line set or coil — recharge runs $90–$150/lb",
        cost: "$400–$1,200",
        response: "Same-day",
      },
      {
        symptom: "Compressor dead on an aging system",
        cause: "Full condensing-unit replacement resets 10–15 yrs of life",
        cost: "$2,500–$4,500",
        response: "24–48h",
      },
      {
        symptom: "Walls sweating, soft floor, ice at panel seams",
        cause: "Failed panel insulation — repair-or-replace assessment",
        cost: "Included in $89 call",
        response: "Same-day",
      },
    ],
    bullets: [
      "Loss of temperature diagnostics",
      "Compressor and condenser replacement",
      "Refrigerant charge correction",
      "Defrost timer and control board service",
      "Door seal, gasket and hinge replacement",
      "Floor and panel evaluation",
    ],
    faqs: [
      {
        q: "My walk-in cooler is not holding temperature — can you respond today?",
        a: "Yes. Loss-of-temperature calls are treated as emergencies in our dispatch queue and typically receive same-day response across South Florida.",
      },
      {
        q: "Do you replace walk-in cooler compressors?",
        a: "Yes — we carry common compressor sizes and source factory-matched replacements for Hoshizaki, Turbo Air, True, Traulsen and Manitowoc walk-ins.",
      },
    ],
  },
  {
    slug: "walk-in-freezer-repair",
    title: "Walk-In Freezer Repair",
    shortTitle: "Walk-In Freezers",
    category: "refrigeration",
    primary: true,
    summary:
      "Walk-in freezer diagnostics and component replacement — frost build-up, compressor failure, control issues.",
    longDescription:
      "Walk-in freezer downtime is expensive. Our team responds with the tools and parts to restore service quickly — including refrigerant recovery, evaporator coil replacement, defrost system rebuilds, electrical work, and door system repair. We support both self-contained and remote-condensing walk-in freezers from every major commercial brand.",
    bullets: [
      "Frost build-up and defrost system service",
      "Evaporator and condenser coil repair",
      "Refrigerant leak detection",
      "Door heater and gasket replacement",
      "Compressor replacement",
      "Temperature controller calibration",
    ],
    faqs: [
      {
        q: "Why is my walk-in freezer frosting up?",
        a: "Common causes include a failed defrost timer or heater, door seal failure, or low refrigerant charge. We diagnose all three on the first visit.",
      },
    ],
  },
  {
    slug: "reach-in-cooler-repair",
    title: "Reach-In Cooler Repair",
    shortTitle: "Reach-In Coolers",
    category: "refrigeration",
    summary:
      "Reach-in cooler service for prep lines, bars, and back-of-house operations.",
    longDescription:
      "Berne Commercial Repair services reach-in coolers from True, Turbo Air, Traulsen, Continental, Delfield, Beverage-Air and other commercial brands. Common issues we resolve include temperature drift, fan failure, compressor short-cycling, and electronic control failures.",
    bullets: [
      "Compressor and condenser service",
      "Evaporator fan motor replacement",
      "Thermostat and control board replacement",
      "Door gasket, hinge and handle replacement",
      "Refrigerant charge correction",
    ],
    faqs: [
      {
        q: "Can you service True and Turbo Air reach-ins on the same visit?",
        a: "Yes. Our trucks carry common parts for True, Turbo Air, Traulsen and Beverage-Air reach-ins so we can complete most repairs in one visit.",
      },
    ],
  },
  {
    slug: "reach-in-freezer-repair",
    title: "Reach-In Freezer Repair",
    shortTitle: "Reach-In Freezers",
    category: "refrigeration",
    summary: "Reach-in freezer service for commercial kitchens and retail.",
    longDescription:
      "We service reach-in freezers across South Florida — including units in tight prep-line configurations and freezer merchandisers in retail and grocery. Our technicians handle compressor service, defrost rebuilds, refrigerant work, and electronic controller replacement.",
    bullets: [
      "Compressor replacement",
      "Defrost heater and timer service",
      "Refrigerant leak detection and recharge",
      "Evaporator fan motor service",
      "Door seal and hinge replacement",
    ],
    faqs: [
      {
        q: "Do you carry freezer-grade door gaskets?",
        a: "Yes — we source factory and aftermarket gaskets for most common commercial reach-in freezers.",
      },
    ],
  },
  {
    slug: "ice-machine-repair",
    title: "Ice Machine Repair",
    shortTitle: "Ice Machines",
    category: "ice-machines",
    primary: true,
    metaTitle: "Commercial Ice Machine Repair Miami — 24/7",
    metaDescription:
      "Hoshizaki, Manitowoc, Scotsman & Ice-O-Matic fixed same-day across Miami & South Florida. 24/7 dispatch, $89 call — free with repair.",
    heroTitle: "Commercial Ice Machine Repair",
    summary:
      "Commercial ice machine repair for restaurants, hotels, healthcare and retail — Hoshizaki, Manitowoc, Scotsman.",
    longDescription:
      "Berne Commercial Repair services every major commercial ice machine — Hoshizaki, Manitowoc, Scotsman, Ice-O-Matic, Follett, Kold-Draft and more. Whether you have a modular head, undercounter, or remote condenser system, our technicians diagnose ice production failures, water flow problems, electronic control faults, and refrigeration loops.",
    symptomTable: [
      {
        symptom: "No ice, or cubes coming out thin",
        cause: "Water inlet valve failure or scale restricting flow",
        cost: "$90–$260",
        response: "Same-day",
      },
      {
        symptom: "Machine runs continuously but never harvests",
        cause: "Harvest sensor drift — the classic 5–8 year ticket",
        cost: "$80–$180",
        response: "Same-day",
      },
      {
        symptom: "Production drops in summer heat",
        cause: "Fouled condenser or corroded fan motor (coastal)",
        cost: "$120–$260",
        response: "Same-day",
      },
      {
        symptom: "Ice tastes or smells off",
        cause: "Overdue sanitation cycle + water filter change",
        cost: "$180–$340",
        response: "Next visit",
      },
      {
        symptom: "Machine stops while the bin is half empty",
        cause: "Bin level sensor or thermistor contamination",
        cost: "$60–$140",
        response: "Same-day",
      },
      {
        symptom: "Water pooling under the machine",
        cause: "Inlet solenoid drip or drain line clog",
        cost: "$90–$130",
        response: "Next visit",
      },
      {
        symptom: "Grinding noise from a nugget machine",
        cause: "Auger bearing wear — stop the machine, it gets expensive",
        cost: "$300–$600",
        response: "Emergency",
      },
    ],
    bullets: [
      "Low or no ice production diagnostics",
      "Water inlet valve and pump service",
      "Cleaning system and scaling treatment",
      "Compressor and condenser service",
      "Control board diagnostics",
      "Bin thermostat and harvest cycle issues",
    ],
    faqs: [
      {
        q: "Do you service Hoshizaki, Manitowoc and Scotsman ice machines?",
        a: "Yes — those three brands cover the majority of our ice machine service calls, and our technicians are trained on each.",
      },
      {
        q: "How fast can you respond to an ice machine outage?",
        a: "Same-day in most South Florida service areas. Hotels and high-volume food service operations are prioritized.",
      },
    ],
  },
  {
    slug: "fryer-repair",
    title: "Commercial Fryer Repair",
    shortTitle: "Fryers",
    category: "restaurant-equipment",
    primary: true,
    summary:
      "Pitco, Frymaster, Vulcan and Hobart fryer repair — ignition, gas valve, thermostat and element service.",
    longDescription:
      "We repair gas and electric commercial fryers from Pitco, Frymaster, Vulcan, Hobart, Garland, Southbend and Cleveland. Common failures we resolve include ignition issues, gas valve faults, heating element failures, thermostat drift, and filtration system problems.",
    symptomTable: [
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
        symptom: "Oil leaking into the cabinet",
        cause: "Hardened filtration O-rings or seized drain valve",
        cost: "$20–$220",
        response: "Next visit",
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
    bullets: [
      "Gas valve and ignition module service",
      "Thermostat replacement and calibration",
      "High-limit safety service",
      "Heating element replacement",
      "Filtration system repair",
    ],
    faqs: [
      {
        q: "Can you repair both gas and electric fryers?",
        a: "Yes. Our restaurant equipment technicians service gas and electric fryers from every major commercial brand.",
      },
    ],
  },
  {
    slug: "commercial-dishwasher-repair",
    title: "Commercial Dishwasher Repair",
    shortTitle: "Commercial Dishwashers",
    category: "restaurant-equipment",
    primary: true,
    metaTitle: "Commercial Dishwasher Repair Miami — 24/7",
    metaDescription:
      "Hobart, CMA, Jackson & Champion dish machine repair across South Florida. Rinse temp, booster heaters, chemical feed. 24/7, COI-ready, $89 call.",
    summary:
      "Same-day dish machine repair — Hobart, CMA, Jackson, Champion — rinse temperature, booster heater, chemical feed and wash pump service.",
    longDescription:
      "A down dish machine stalls the whole line: plates back up, the expo window slows, and a health inspector who finds a final rinse below spec can stop service entirely. Berne Commercial Repair dispatches technicians for door-type, undercounter, conveyor and flight-type commercial dishwashers across Miami-Dade, Broward and Palm Beach — Hobart, CMA Dishmachines, Jackson, Champion, Moyer Diebel, Insinger, Fagor and Electrolux Professional, including machines running Auto-Chlor or Ecolab chemical-feed systems. Most dishwasher calls fall into a handful of patterns we resolve on the first visit. High-temp machines that won't reach the 180°F final rinse NSF requires — usually a failed booster heater element, a scaled heat exchanger or a drifted rinse thermostat. Low-temp chemical machines with sanitizer concentration faults — air-locked squeeze-tube pumps, hardened peristaltic tubing, crimped chemical lines or a feed system that lost its prime. Wash pumps that hum but won't circulate — seized impellers, sheared couplings, or worn shaft seals letting water reach the motor. And machines that won't fill or won't drain — fill valves, float switches, drain solenoids, ball valves and vacuum breakers. South Florida adds a failure mode most markets don't see at this rate: hard, mineral-heavy municipal water scales booster heaters, rinse jets and wash arms aggressively, choking flow and dragging rinse temperature down weeks before the machine fails outright. We descale, rebuild and recalibrate as part of the repair, and we flag machines where a scale-management program will prevent the next outage instead of just clearing this one. Every repair is verified against operating spec before the tech leaves: wash and final-rinse temperatures logged at the machine, pressure checked at the rinse manifold, and chemical concentration titrated on low-temp machines — so the machine passes its next health inspection, not just its next rack.",
    bullets: [
      "Low rinse temperature and booster heater service",
      "Chemical feed, sanitizer and detergent pump repair",
      "Wash pump, wash arm and spray jet service",
      "Fill valve, float switch and drain solenoid replacement",
      "Door switch, latch and gasket replacement",
      "Descaling and hard-water scale management",
    ],
    faqs: [
      {
        q: "Do you repair Hobart commercial dishwashers?",
        a: "Yes — Hobart is the most common machine on our dishwasher calls. We service AM-series door machines, LXe undercounters and CL-series conveyors, and we stock common wash arm, pump seal and booster heater parts for first-visit repairs.",
      },
      {
        q: "My dish machine isn't reaching 180°F final rinse — can you fix it today?",
        a: "Rinse-temperature failures are health-inspection critical, so they're prioritized in our dispatch queue with same-day response across South Florida. The usual causes are a failed booster heater element, heavy scale in the booster or heat exchanger, or a drifted rinse thermostat — we diagnose all three on the first visit.",
      },
      {
        q: "Do you service both high-temp and low-temp dish machines?",
        a: "Yes. High-temp machines (180°F sanitizing rinse with a booster heater) and low-temp chemical-sanitizing machines are both routine for our technicians, including the chemical feed pumps and concentration calibration on low-temp units.",
      },
      {
        q: "Can you work on machines using Auto-Chlor or Ecolab chemical systems?",
        a: "If the machine is leased, repairs typically run through the lease provider. For customer-owned machines running Auto-Chlor or Ecolab chemical feeds, we repair the machine itself and coordinate with your chemical provider on feed-rate and titration issues.",
      },
      {
        q: "Why does my dishwasher leave film or spots on glassware?",
        a: "In South Florida it's usually hard-water scale or a rinse-aid feed problem — scaled rinse jets, low rinse pressure, or a rinse-aid pump that lost its prime. We descale, restore rinse pressure and recalibrate the feed as part of the repair.",
      },
      {
        q: "What does a commercial dishwasher service call cost?",
        a: "Our commercial service call is $89, and it is free when you approve the repair — the fee applies only if you decline.",
      },
    ],
  },
  {
    slug: "commercial-oven-repair",
    title: "Commercial Oven Repair",
    shortTitle: "Commercial Ovens",
    category: "restaurant-equipment",
    primary: true,
    summary:
      "Convection, combi, conveyor and deck oven repair — Vulcan, Blodgett, Rational, Middleby.",
    longDescription:
      "Berne Commercial Repair services every common commercial oven configuration — convection, combi, conveyor, deck, and rotating ovens — from Vulcan, Blodgett, Rational, Middleby, Garland, Southbend, Alto-Shaam and Hatco. We resolve ignition, gas valve, control board, blower motor and thermostat issues.",
    bullets: [
      "Ignition and gas valve service",
      "Control board diagnostics",
      "Blower motor and fan service",
      "Door hinge, latch and gasket service",
      "Thermostat calibration",
    ],
    faqs: [
      {
        q: "Do you repair combi ovens?",
        a: "Yes — including Rational, Alto-Shaam, and other combi systems used in production kitchens and hotels.",
      },
    ],
  },
  {
    slug: "commercial-range-repair",
    title: "Commercial Range Repair",
    shortTitle: "Commercial Ranges",
    category: "restaurant-equipment",
    summary: "Range top and oven combo service for commercial kitchens.",
    longDescription:
      "We service commercial range tops and range/oven combinations from Vulcan, Garland, Southbend, Wolf and other commercial brands. Common service work includes burner replacement, gas valve service, pilot ignition repair, and oven thermostat calibration.",
    bullets: [
      "Burner head and orifice service",
      "Pilot and ignition module service",
      "Gas valve replacement",
      "Oven thermostat calibration",
    ],
    faqs: [
      {
        q: "Can you service a 6-burner range with oven base on the same visit?",
        a: "Yes — most commercial range/oven combo repairs are completed on a single visit.",
      },
    ],
  },
  {
    slug: "steamer-repair",
    title: "Commercial Steamer Repair",
    shortTitle: "Steamers",
    category: "restaurant-equipment",
    summary: "Pressure and convection steamer service for production kitchens.",
    longDescription:
      "We service pressure and convection steamers from Cleveland, Vulcan, Garland and other commercial brands. Service includes water level control, heating element and gas valve work, door seal replacement, and descaling.",
    bullets: [
      "Water level probe service",
      "Heating element and gas valve repair",
      "Descaling and cleaning system service",
      "Door seal and latch replacement",
    ],
    faqs: [],
  },
  {
    slug: "prep-table-repair",
    title: "Prep Table Repair",
    shortTitle: "Prep Tables",
    category: "refrigeration",
    summary:
      "Sandwich, pizza and salad prep table service — refrigeration and electrical.",
    longDescription:
      "Prep tables run hot kitchen environments. We diagnose temperature drift, compressor failure, evaporator coil icing, control board faults, and door/lid seal issues on Turbo Air, True, Continental, Beverage-Air and Delfield prep tables.",
    bullets: [
      "Compressor and condenser service",
      "Evaporator coil icing diagnostics",
      "Thermostat and control board service",
      "Door and lid gasket replacement",
    ],
    faqs: [
      {
        q: "My prep table is icing up the food pans — what causes that?",
        a: "Typically a defrost cycle problem, low refrigerant, or a faulty thermostat. We diagnose all three on the first visit.",
      },
    ],
  },
  {
    slug: "commercial-laundry-repair",
    title: "Commercial Laundry Repair",
    shortTitle: "Commercial Laundry",
    category: "commercial-laundry",
    primary: true,
    summary:
      "Commercial washer and dryer repair — Speed Queen, Whirlpool Commercial, Maytag Commercial, Electrolux Professional.",
    longDescription:
      "We service commercial laundry equipment in hotels, condo buildings, multi-family housing, fitness centers and care facilities. Our technicians work on Speed Queen, Whirlpool Commercial, Maytag Commercial and Electrolux Professional washers and dryers — including coin- and card-operated equipment.",
    bullets: [
      "Commercial washer drum and motor service",
      "Commercial dryer heat and airflow service",
      "Coin and card operation diagnostics",
      "Control board replacement",
      "Belt, bearing and seal replacement",
    ],
    faqs: [
      {
        q: "Do you service coin-operated laundry equipment?",
        a: "Yes — including Speed Queen and Whirlpool Commercial coin- and card-operated washers and dryers.",
      },
    ],
  },
  {
    slug: "commercial-washer-repair",
    title: "Commercial Washer Repair",
    shortTitle: "Commercial Washers",
    category: "commercial-laundry",
    summary: "Front-load and top-load commercial washer service.",
    longDescription:
      "We service front-load and top-load commercial washers used in hotels, condos, multi-family housing, fitness centers and care facilities.",
    bullets: [
      "Drum bearing and seal service",
      "Drive motor and belt replacement",
      "Control board and timer service",
      "Water inlet valve and drain pump service",
    ],
    faqs: [],
  },
  {
    slug: "commercial-dryer-repair",
    title: "Commercial Dryer Repair",
    shortTitle: "Commercial Dryers",
    category: "commercial-laundry",
    summary: "Gas and electric commercial dryer service.",
    longDescription:
      "We service gas and electric commercial dryers — including stack dryers and large-capacity units used in hotels and care facilities.",
    bullets: [
      "Gas valve and ignition service",
      "Heating element replacement",
      "Airflow and venting diagnostics",
      "Belt, drum bearing and motor service",
    ],
    faqs: [],
  },
  {
    slug: "commercial-hood-repair",
    title: "Commercial Hood & Exhaust Repair",
    shortTitle: "Commercial Hoods",
    category: "ventilation",
    primary: true,
    // CTR pass 2026-06-10: "kitchen hood repair commercial near me" sits at
    // pos 5.7 — surface the exhaust-fan synonym and the $89/makeup-air hooks.
    metaTitle: "Commercial Hood & Exhaust Fan Repair — 24/7 South FL",
    metaDescription:
      "Exhaust fan motors, hood control panels and makeup-air units fixed same-day across South Florida kitchens. Belts, bearings, dampers. $89 service call.",
    summary:
      "Vent hood, range hood and commercial exhaust system service — fan motors, controls, makeup-air units.",
    longDescription:
      "Berne Commercial Repair services commercial vent hoods, range hoods and exhaust systems for restaurants, commercial kitchens and production facilities. We handle exhaust fan motors and bearings, makeup-air unit (MAU) service, hood control panels, fire-suppression linkage components (non-licensed scope) and lighting. We don't certify fire-suppression systems — but we coordinate with your certified vendor when a repair touches that interface.",
    bullets: [
      "Exhaust fan motor and bearing replacement",
      "Belt and pulley service",
      "Hood control panel and switch service",
      "Makeup-air unit diagnostics",
      "Light bulb and ballast replacement",
      "Damper, hinge and gasket service",
    ],
    faqs: [
      {
        q: "Do you service makeup-air units (MAUs) along with hoods?",
        a: "Yes — fan, belt, motor and control board service on both the exhaust and makeup-air sides of the kitchen ventilation system.",
      },
    ],
  },
  {
    slug: "slush-machine-repair",
    title: "Slush Machine Repair",
    shortTitle: "Slush Machines",
    category: "beverage-frozen",
    summary:
      "Frozen drink and slush machine service — refrigeration, auger, viscosity controls.",
    longDescription:
      "Frozen drink dispensers run hard during peak hours. We service the refrigeration loop, auger drive, viscosity controls and dispensing valves on slush machines used in convenience stores, theaters, restaurants and event venues.",
    bullets: [
      "Refrigeration loop diagnostics",
      "Auger drive and gearbox service",
      "Viscosity control adjustment",
      "Dispense valve replacement",
      "Bowl seal and gasket replacement",
    ],
    faqs: [],
  },
  {
    slug: "ice-cream-machine-repair",
    title: "Ice Cream Machine Repair",
    shortTitle: "Ice Cream Machines",
    category: "beverage-frozen",
    summary:
      "Soft-serve and batch freezer service — compressor, scraper blade, mix pump.",
    longDescription:
      "We service soft-serve and batch ice cream freezers for restaurants, dessert shops, hotels and franchise operators. Common service includes compressor and refrigeration work, scraper blade and dasher replacement, mix pump diagnostics, electronic controller service and air-pump rebuilds.",
    bullets: [
      "Compressor and condenser service",
      "Scraper blade and dasher replacement",
      "Mix pump diagnostics",
      "Air pump rebuild",
      "Electronic controller service",
    ],
    faqs: [],
  },
  {
    slug: "pizza-prep-table-repair",
    title: "Pizza Prep Table Repair",
    shortTitle: "Pizza Prep Tables",
    category: "refrigeration",
    summary:
      "Pizza prep table refrigeration, lid seals, fan motors, control boards.",
    longDescription:
      "Pizza prep tables sit in hot kitchen environments and run constantly. We diagnose temperature drift, evaporator coil icing, control board faults, and door/lid seal issues on prep tables from True, Turbo Air, Continental, Beverage-Air and Delfield.",
    bullets: [
      "Refrigeration loop diagnostics",
      "Lid hinge, seal and gasket replacement",
      "Evaporator coil and fan service",
      "Control board and thermostat service",
    ],
    faqs: [],
  },
  {
    slug: "espresso-machine-repair",
    title: "Commercial Espresso Machine Repair",
    shortTitle: "Espresso Machines",
    category: "restaurant-equipment",
    primary: true,
    summary:
      "Espresso machine, grinder and brew-group service for cafés, restaurants and hotels.",
    longDescription:
      "We service commercial espresso machines and grinders for cafés, restaurants, hotels and quick-service operators. Common service includes brew-group rebuilds, boiler and heating element work, water-system descaling, pump and motor service, electronic controller diagnostics, and grinder burr replacement. We work on single, double and triple-group machines.",
    bullets: [
      "Brew-group rebuilds and gasket replacement",
      "Boiler and heating element service",
      "Pump, motor and pressure regulation",
      "Water-system descaling and filtration",
      "Electronic controller diagnostics",
      "Grinder burr replacement and calibration",
    ],
    faqs: [
      {
        q: "Do you service multi-group espresso machines used in high-volume cafés?",
        a: "Yes — single, double and triple-group commercial machines, including the most common Italian and European brands found in South Florida cafés.",
      },
    ],
  },
  {
    slug: "coffee-machine-repair",
    title: "Commercial Coffee Machine & Brewer Repair",
    shortTitle: "Coffee Machines",
    category: "restaurant-equipment",
    summary:
      "Coffee brewer, drip and pod machine service for offices, hotels, breakrooms and food service.",
    longDescription:
      "Berne Commercial Repair services commercial coffee brewers, drip machines, decanter-style brewers and capsule-based systems used in offices, hotels, condo amenities and food-service operations. Common service includes heating elements, solenoid valves, water-line and descaling work, and electronic controller diagnostics.",
    bullets: [
      "Heating element replacement",
      "Solenoid valve and water-line service",
      "Descaling and water-system service",
      "Electronic controller diagnostics",
      "Decanter and warmer plate service",
    ],
    faqs: [],
  },
  {
    slug: "panini-press-repair",
    title: "Panini Press & Sandwich Grill Repair",
    shortTitle: "Panini Presses",
    category: "restaurant-equipment",
    summary:
      "Panini press, sandwich grill and contact grill service — heating elements, thermostats, hinges.",
    longDescription:
      "We service commercial panini presses, sandwich grills and contact grills used in cafés, sandwich shops, hotels and quick-service restaurants.",
    bullets: [
      "Heating element replacement",
      "Thermostat and high-limit service",
      "Hinge and spring service",
      "Power cord and switch replacement",
    ],
    faqs: [],
  },
  {
    slug: "warming-table-repair",
    title: "Warming Table & Heated Holding Repair",
    shortTitle: "Warming Tables",
    category: "restaurant-equipment",
    summary:
      "Heated holding cabinets, warming tables, steam tables — element and control service.",
    longDescription:
      "Heated holding equipment keeps food at safe service temperature. We service warming tables, steam tables, heated holding cabinets and drawer warmers — including Alto-Shaam, Hatco, Vulcan and other commercial brands.",
    bullets: [
      "Heating element replacement",
      "Thermostat and high-limit service",
      "Water level controls (steam tables)",
      "Door seal and latch service",
    ],
    faqs: [],
  },
  {
    slug: "soda-machine-repair",
    title: "Fountain & Soda Machine Repair",
    shortTitle: "Soda Machines",
    category: "beverage-frozen",
    // GSC 2026-06-10: "pepsi fountain machine service" (14 imp) + "pepsi
    // fountain service" (13 imp) landed on combos whose titles never said
    // "fountain" — the hub and combo titles now lead with the synonym.
    metaTitle: "Fountain & Soda Machine Repair — South Florida 24/7",
    metaDescription:
      "Pepsi & Coke fountain machines, post-mix soda & beverage dispensers fixed same-day across South Florida. Carbonators, BIB lines, valves. $89 service call.",
    comboTitle: "Fountain & Soda Machine Repair in {city} — $89",
    summary:
      "Fountain and post-mix soda, juice and coffee dispenser service — carbonators, valves, refrigeration.",
    longDescription:
      "We service fountain machines and post-mix soda systems — Pepsi and Coke fountain dispensers, juice dispensers, iced tea brewers and combination beverage stations. Common service includes carbonator rebuilds, BIB (bag-in-box) line work, dispense valve service, ice/water bath refrigeration, and electronic control.",
    bullets: [
      "Carbonator pump and motor service",
      "Dispense valve replacement",
      "BIB and CO2 line diagnostics",
      "Ice/water bath refrigeration service",
      "Electronic controller diagnostics",
    ],
    faqs: [],
  },
  {
    slug: "margarita-machine-repair",
    title: "Margarita & Frozen Cocktail Machine Repair",
    shortTitle: "Margarita Machines",
    category: "beverage-frozen",
    summary:
      "Frozen cocktail dispenser service — refrigeration, auger, dispense valves.",
    longDescription:
      "Frozen margarita and cocktail machines run continuously in bars and restaurants. We service the refrigeration loop, auger drive, viscosity control, dispense valves and bowl seals.",
    bullets: [
      "Refrigeration system service",
      "Auger and gearbox replacement",
      "Viscosity and consistency adjustment",
      "Dispense valve and bowl seal replacement",
    ],
    faqs: [],
  },
  {
    slug: "vending-machine-repair",
    title: "Vending Machine Repair",
    shortTitle: "Vending Machines",
    category: "vending",
    summary:
      "Snack, drink and combo vending machine service — refrigeration, bill validators, control boards.",
    longDescription:
      "We service commercial vending machines in offices, schools, warehouses, hospitals and condo buildings — refrigerated drink machines, snack machines and combo machines.",
    bullets: [
      "Refrigeration system service",
      "Coin and bill validator service",
      "Vend motor and helix replacement",
      "Control board diagnostics",
      "Door and lock service",
    ],
    faqs: [],
  },
  {
    slug: "garbage-disposal-repair",
    title: "Garbage Disposal Repair",
    shortTitle: "Garbage Disposals",
    category: "other",
    summary: "Commercial disposal repair and replacement.",
    longDescription:
      "We service and replace commercial garbage disposals used in restaurants, hotels, and production kitchens.",
    bullets: [
      "Jam and overload diagnostics",
      "Motor and impeller replacement",
      "Replacement and re-installation",
    ],
    faqs: [],
  },
  {
    slug: "trash-compactor-repair",
    title: "Trash Compactor Repair",
    shortTitle: "Trash Compactors",
    category: "other",
    summary: "Commercial trash compactor service.",
    longDescription:
      "We service commercial trash compactors for restaurants, retail, and property-managed buildings.",
    bullets: [
      "Hydraulic system service",
      "Switch and control board replacement",
      "Drum and ram replacement",
    ],
    faqs: [],
  },
  {
    slug: "commercial-appliance-repair",
    title: "Commercial Appliance Repair",
    shortTitle: "Commercial Appliances",
    category: "other",
    summary:
      "Whole-facility commercial appliance repair and replacement coordination.",
    longDescription:
      "Beyond category-specific service, Berne Commercial Repair handles whole-facility coverage — including replacement coordination and vendor management for property-managed buildings, chains and franchises.",
    bullets: [
      "Whole-facility coverage",
      "Replacement coordination",
      "Vendor and chain reporting",
    ],
    faqs: [],
  },
]

export const primaryServices = services.filter((s) => s.primary)

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function servicesByCategory() {
  return (Object.keys(SERVICE_CATEGORIES) as ServiceCategory[]).map((cat) => ({
    category: cat,
    label: SERVICE_CATEGORIES[cat],
    items: services.filter((s) => s.category === cat),
  }))
}

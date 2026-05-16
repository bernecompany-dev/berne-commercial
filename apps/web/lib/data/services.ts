export type ServiceCategory =
  | "refrigeration"
  | "ice-machines"
  | "restaurant-equipment"
  | "commercial-laundry"
  | "other"

export type Service = {
  slug: string
  title: string
  shortTitle: string
  category: ServiceCategory
  summary: string
  longDescription: string
  bullets: string[]
  faqs: { q: string; a: string }[]
  primary?: boolean
}

export const SERVICE_CATEGORIES: Record<ServiceCategory, string> = {
  refrigeration: "Commercial Refrigeration",
  "ice-machines": "Ice Machines",
  "restaurant-equipment": "Restaurant Equipment",
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
    summary:
      "Same-day refrigeration service for restaurants, supermarkets, production facilities and enterprise clients.",
    longDescription:
      "Berne Commercial Repair services every class of commercial refrigeration system in South Florida — from walk-in coolers and freezers to reach-in units, prep tables, display merchandisers, and deep freeze systems. Our refrigeration technicians are factory-trained on the brands that dominate commercial kitchens and back-of-house operations: Hoshizaki, Manitowoc, Scotsman, Turbo Air, True, Traulsen, Beverage-Air, Continental, Delfield and more.",
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
        a: "Our commercial service call is $89 and may be applied toward an approved repair.",
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
    summary:
      "Emergency walk-in cooler service — temperature loss, door seal issues, compressor failures, refrigerant leaks.",
    longDescription:
      "A failing walk-in cooler puts inventory and revenue at risk. Berne Commercial Repair dispatches refrigeration technicians equipped for walk-in cooler diagnostics, refrigerant recovery, electrical work, and component replacement. We service every common configuration — indoor and outdoor units, self-contained and remote condensing systems, and walk-ins with custom panels.",
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
    summary:
      "Commercial ice machine repair for restaurants, hotels, healthcare and retail — Hoshizaki, Manitowoc, Scotsman.",
    longDescription:
      "Berne Commercial Repair services every major commercial ice machine — Hoshizaki, Manitowoc, Scotsman, Ice-O-Matic, Follett, Kold-Draft and more. Whether you have a modular head, undercounter, or remote condenser system, our technicians diagnose ice production failures, water flow problems, electronic control faults, and refrigeration loops.",
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

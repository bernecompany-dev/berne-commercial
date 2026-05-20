/**
 * Long-form industry profiles powering /industries/[slug].
 *
 * Distinct from `industries.ts` (which is the card index used on the
 * /industries grid + the homepage strip). The 10 slugs here are the verticals
 * that ship a full SERP-grade page; some reuse the same slug as the index,
 * some replace older index slugs (e.g. "grocery" vs "grocery-stores").
 */

export type EquipmentCategory = {
  name: string
  brands: string[]
  notes?: string
}

export type IndustryFaq = { q: string; a: string }

export type IndustryProfile = {
  slug: string
  /** Plural noun used in copy: "restaurants", "hotels", etc. */
  industry: string
  /** Title-cased label used in headings. */
  industryTitle: string
  /** ≤60ch title tag */
  metaTitle: string
  /** ≤155ch meta description */
  metaDescription: string
  /** H1 — usually "X Equipment Repair in South Florida". */
  h1: string
  /** Single sentence for the hero / introductory line. */
  hero: string
  /** Body paragraph for "Why X owners call Berne" (no trust stats — those are templated). */
  whyUs: string
  equipment: EquipmentCategory[]
  /** Real failure modes a tech would call out, 5–7 items. */
  commonIssues: string[]
  /** Why same-day matters — one short paragraph specific to vertical. */
  sameDay: string
  faqs: IndustryFaq[]
  /** Service slugs to cross-link in a "Related services" strip. */
  relatedServices: string[]
  /** Spanish localization. If absent the EN content is used as fallback. */
  es?: {
    industry: string
    industryTitle: string
    metaTitle: string
    metaDescription: string
    h1: string
    hero: string
    whyUs: string
    equipment: EquipmentCategory[]
    commonIssues: string[]
    sameDay: string
    faqs: IndustryFaq[]
  }
}

export const INDUSTRY_PROFILES: IndustryProfile[] = [
  // ────────────────────────────────────────────────────────── 1. Restaurants
  {
    slug: "restaurants",
    industry: "restaurants",
    industryTitle: "Restaurant",
    metaTitle: "Restaurant Equipment Repair Miami | Berne Commercial",
    metaDescription:
      "Same-day restaurant equipment repair across South Florida — Hobart, Vulcan, Hoshizaki, Manitowoc. Insured, EPA-certified, 18 techs, 4.79★ on 871 reviews.",
    h1: "Restaurant Equipment Repair in South Florida",
    hero: "Walk-ins, ranges, fryers, hoods, ice, espresso — one dispatch, same day.",
    whyUs:
      "Restaurant managers call us because a refrigeration loss after 7pm Friday isn't a ticket — it's lost revenue. We dispatch the right truck the first time: a refrigeration tech with R-410A and R-404A on board, a cooking-equipment tech who actually opens Vulcan and Hobart panels for a living, or both when a ticket reads \"the line went down.\" That triage happens on the phone, not on the parking lot.",
    equipment: [
      {
        name: "Refrigeration",
        brands: ["True", "Turbo Air", "Traulsen", "Beverage-Air", "Continental", "Delfield"],
        notes: "Walk-ins, reach-ins, prep tables, undercounter, pass-through",
      },
      {
        name: "Cooking line",
        brands: ["Vulcan", "Wolf", "Garland", "Southbend", "Imperial", "American Range"],
        notes: "Open-burner ranges, salamanders, char-broilers, French tops",
      },
      {
        name: "Fryers",
        brands: ["Pitco", "Frymaster", "Henny Penny", "Vulcan"],
        notes: "Open-pot and tube-fired gas, electric, filtration-equipped",
      },
      {
        name: "Dish & sanitation",
        brands: ["Hobart", "Jackson", "Champion", "CMA"],
        notes: "Door-type, conveyor, under-counter, glasswashers",
      },
      {
        name: "Ice machines",
        brands: ["Hoshizaki", "Manitowoc", "Scotsman", "Ice-O-Matic", "Kold-Draft"],
        notes: "Modular head, undercounter, remote condenser",
      },
      {
        name: "Hoods & ventilation",
        brands: ["CaptiveAire", "Greenheck", "Halton"],
        notes: "Exhaust fans, makeup-air units, hood controls",
      },
      {
        name: "Espresso & beverage",
        brands: ["La Marzocco", "Nuova Simonelli", "Rancilio", "Bunn", "Curtis"],
        notes: "Multi-group espresso, brewers, soda guns",
      },
      {
        name: "Prep & holding",
        brands: ["Alto-Shaam", "Hatco", "Vollrath"],
        notes: "Heated cabinets, holding drawers, salamander broilers",
      },
    ],
    commonIssues: [
      "Walk-in cooler drifting from 38°F to 50°F after a Friday rush — usually a clogged condenser, slipping fan motor, or low charge on R-404A",
      "Hobart AM dishwasher tripping the wash pump or refusing to fill — often a thermistor or float switch, sometimes the line strainer",
      "Vulcan or Wolf range pilots that won't stay lit — thermocouple, pilot orifice, or gas valve",
      "Ice machine harvest stuck mid-cycle — Manitowoc J-Series water curtain switch or Hoshizaki float",
      "Fryer that won't ignite — Pitco hot-surface ignitor, gas valve coil, or high-limit safety",
      "Hood exhaust fan running loud or low CFM — belt, bearing, or makeup-air imbalance",
      "Prep table icing up the food pans — defrost timer, evap fan, or door gasket leak",
    ],
    sameDay:
      "Restaurants live on Friday and Saturday night covers. A 6pm refrigeration call we book for Tuesday means the operator is dumping inventory and losing a service. Our dispatch is built to flip a refrigeration emergency to a tech inside 90 minutes from Miami Beach to Boca Raton most evenings — and we carry common Hoshizaki, Manitowoc, Turbo Air and Hobart parts on the truck so the second visit is the exception, not the rule.",
    faqs: [
      {
        q: "Do you do same-day restaurant equipment repair in Miami?",
        a: "Yes. Refrigeration and ice machine emergencies are prioritized in the dispatch queue and usually receive same-day response across Miami-Dade, Broward and Palm Beach.",
      },
      {
        q: "Are your technicians EPA-certified for refrigerant work?",
        a: "Yes. Our refrigeration techs hold EPA Section 608 certification and we file recovery records on every system that opens.",
      },
      {
        q: "Can you service Hobart dish machines and Vulcan ranges on the same visit?",
        a: "Often, yes. If a ticket mentions both cooking and dish equipment, dispatch sends a tech qualified for both, or routes a second truck so the kitchen isn't down twice.",
      },
      {
        q: "Do you carry Hoshizaki and Manitowoc parts on the truck?",
        a: "Common service parts — water curtain switches, harvest probes, water inlet valves, contactors, and fan motors — yes. Specialty boards and compressors are sourced same-day or next-day depending on time of call.",
      },
      {
        q: "What's the commercial service-call fee?",
        a: "$89 commercial service call, applied toward an approved repair. Diagnostic and travel are included in that fee.",
      },
      {
        q: "Will you provide a Certificate of Insurance for our landlord?",
        a: "Yes — our COI is on file at /credentials/coi.pdf and we add additional insureds on request for landlord or property-management requirements.",
      },
    ],
    relatedServices: [
      "commercial-refrigeration-repair",
      "walk-in-cooler-repair",
      "ice-machine-repair",
      "fryer-repair",
      "commercial-oven-repair",
      "commercial-hood-repair",
      "espresso-machine-repair",
    ],
    es: {
      industry: "restaurantes",
      industryTitle: "Restaurante",
      metaTitle: "Reparación de Equipo de Restaurante Miami | Berne",
      metaDescription:
        "Reparación de equipo de restaurante el mismo día en el Sur de Florida — Hobart, Vulcan, Hoshizaki. Asegurados, certificados EPA, 18 técnicos.",
      h1: "Reparación de Equipo de Restaurante en el Sur de Florida",
      hero: "Walk-ins, estufas, freidoras, campanas, hielo, espresso — un solo despacho, el mismo día.",
      whyUs:
        "Los gerentes de restaurante nos llaman porque una pérdida de refrigeración un viernes a las 7pm no es un ticket — es ingreso perdido. Despachamos el camión correcto la primera vez: un técnico de refrigeración con R-410A y R-404A a bordo, un técnico de equipo de cocción que abre paneles Vulcan y Hobart todos los días, o ambos cuando un ticket dice \"la línea se cayó.\" Ese triage pasa por teléfono, no en el estacionamiento.",
      equipment: [
        { name: "Refrigeración", brands: ["True", "Turbo Air", "Traulsen", "Beverage-Air", "Continental", "Delfield"], notes: "Walk-ins, reach-ins, mesas de prep, undercounter" },
        { name: "Línea de cocción", brands: ["Vulcan", "Wolf", "Garland", "Southbend", "Imperial"], notes: "Estufas, salamandras, char-broilers" },
        { name: "Freidoras", brands: ["Pitco", "Frymaster", "Henny Penny", "Vulcan"], notes: "Gas y eléctricas, con filtración" },
        { name: "Lavavajillas", brands: ["Hobart", "Jackson", "Champion", "CMA"], notes: "Door-type, conveyor, glasswashers" },
        { name: "Máquinas de hielo", brands: ["Hoshizaki", "Manitowoc", "Scotsman", "Ice-O-Matic"], notes: "Modular, undercounter, condensador remoto" },
        { name: "Campanas y ventilación", brands: ["CaptiveAire", "Greenheck", "Halton"], notes: "Ventiladores de extracción, makeup-air" },
        { name: "Espresso y bebidas", brands: ["La Marzocco", "Nuova Simonelli", "Rancilio", "Bunn"], notes: "Multi-grupo, brewers" },
        { name: "Prep y holding", brands: ["Alto-Shaam", "Hatco", "Vollrath"], notes: "Gabinetes calientes, cajones de holding" },
      ],
      commonIssues: [
        "Walk-in cooler subiendo de 38°F a 50°F después del rush del viernes — condensador tapado, motor de ventilador o carga baja de R-404A",
        "Hobart AM lavavajillas disparando la bomba o sin llenar — termistor, switch de flotador o filtro de línea",
        "Vulcan o Wolf con piloto que no se mantiene — termocople, orificio del piloto o válvula de gas",
        "Hielera con cosecha atascada — switch de cortina de agua Manitowoc J-Series o flotador Hoshizaki",
        "Freidora que no enciende — ignitor de superficie caliente Pitco, bobina de válvula de gas, o high-limit",
        "Ventilador de campana con poco CFM — banda, balero o desbalance de makeup-air",
        "Mesa de prep escarchando las bandejas — defrost timer, ventilador del evaporador o empaque",
      ],
      sameDay:
        "Los restaurantes viven del viernes y sábado en la noche. Una llamada de refrigeración a las 6pm agendada para el martes significa que el operador está tirando inventario y perdiendo un servicio. Nuestro despacho está construido para enviar un técnico de refrigeración en 90 minutos de Miami Beach a Boca Raton la mayoría de las noches.",
      faqs: [
        { q: "¿Hacen reparación de equipo de restaurante el mismo día en Miami?", a: "Sí. Emergencias de refrigeración y máquinas de hielo se priorizan en el despacho y usualmente reciben respuesta el mismo día en Miami-Dade, Broward y Palm Beach." },
        { q: "¿Sus técnicos están certificados por la EPA?", a: "Sí. Nuestros técnicos de refrigeración tienen certificación EPA Sección 608 y registramos recuperación de refrigerante en cada sistema." },
        { q: "¿Pueden atender Hobart y Vulcan en la misma visita?", a: "Frecuentemente sí. Si el ticket menciona cocción y lavavajillas, el despacho manda un técnico calificado para ambos." },
        { q: "¿Cargan partes Hoshizaki y Manitowoc en el camión?", a: "Partes comunes — switches de cortina de agua, válvulas de entrada, contactores, motores de ventilador — sí. Tarjetas especiales se piden el mismo día o al siguiente." },
        { q: "¿Cuál es el costo del service call comercial?", a: "$89 service call comercial, aplicable a la reparación aprobada. Diagnóstico y viaje incluidos." },
        { q: "¿Pueden dar un Certificado de Seguro para nuestro landlord?", a: "Sí — nuestro COI está en /credentials/coi.pdf y agregamos additional insureds cuando lo pide el property management." },
      ],
    },
  },

  // ────────────────────────────────────────────────────────── 2. Hotels
  {
    slug: "hotels",
    industry: "hotels",
    industryTitle: "Hotel",
    metaTitle: "Hotel Equipment Repair South Florida | Berne Commercial",
    metaDescription:
      "Hotel laundry, kitchen, ice and refrigeration repair across Miami-Dade, Broward, Palm Beach. Speed Queen, Continental, Hoshizaki — same-day dispatch.",
    h1: "Hotel Equipment Repair in South Florida",
    hero: "OPL laundry, banquet kitchens, ice rooms, breakfast bars — one vendor, every floor.",
    whyUs:
      "Hotel engineering teams call us because a 200-room property has three laundry rooms, two kitchens, four ice machines and a banquet floor — and the GM doesn't care which one is broken at 5am, only that it's fixed before check-in. We work the way hotel ops works: NDA-friendly, COI on file, after-hours service routed through engineering, no marketing in the lobby. We service properties under most major flags and have a standing additional-insured arrangement with several South Florida operators.",
    equipment: [
      {
        name: "On-premise laundry (OPL)",
        brands: ["Speed Queen", "Continental Girbau", "UniMac", "Milnor", "Huebsch"],
        notes: "Soft-mount and rigid washers, gas-fired and steam dryers, ironers",
      },
      {
        name: "Banquet & line kitchen",
        brands: ["Vulcan", "Hobart", "Rational", "Alto-Shaam", "Cleveland"],
        notes: "Combi ovens, tilt skillets, steam-jacketed kettles, ranges, salamanders",
      },
      {
        name: "Ice rooms & guest floors",
        brands: ["Hoshizaki", "Manitowoc", "Scotsman", "Follett"],
        notes: "Bulk ice rooms, floor-by-floor dispensers, hotel-pak nugget",
      },
      {
        name: "Breakfast bar & deli refrigeration",
        brands: ["True", "Turbo Air", "Federal Industries", "Structural Concepts"],
        notes: "Display merchandisers, breakfast prep, grab-and-go cases",
      },
      {
        name: "Minibar & in-room refrigeration",
        brands: ["Indel B", "Minibar Systems", "Dometic"],
        notes: "Solid-state and compressor minibars",
      },
      {
        name: "Dishwashing",
        brands: ["Hobart", "Champion", "Jackson", "Insinger"],
        notes: "Conveyor, flight-type, door-type for banquet load",
      },
      {
        name: "Hood & ventilation",
        brands: ["CaptiveAire", "Greenheck", "Halton"],
        notes: "Banquet and line exhaust, makeup-air units",
      },
    ],
    commonIssues: [
      "OPL dryer cycle running long — gas valve, dryer-belt slip, or lint-trap airflow restriction on Continental Girbau and Speed Queen units",
      "Bulk ice machine in the engineering corridor not producing — Hoshizaki KM water curtain, Manitowoc IY-Series harvest probe, scaled distributor tube",
      "Banquet combi oven steam generator not firing — Rational descaling cycle incomplete, water-level probe, or Alto-Shaam element",
      "Breakfast bar merchandiser case fogging at 6am — defrost cycle off, door heater failed, or evap fan not running",
      "Floor-by-floor ice dispenser jammed — auger motor, bin thermostat, or door latch",
      "Hobart conveyor dish machine stuck mid-cycle — sensor relay, water-level probe, drain solenoid",
      "Minibar warm in occupied room — thermoelectric module or compressor failure",
    ],
    sameDay:
      "A failed bulk ice machine before a wedding banquet is a $4,000 emergency-bag-ice purchase plus a guest complaint trail. We treat hotel emergencies as engineering-priority dispatch — most properties get response inside two hours, and our trucks are stocked for the equipment hotel ops actually breaks: ice machines, OPL dryers, breakfast-bar coolers and combi ovens. Engineering gets a direct dispatcher line, not the consumer queue.",
    faqs: [
      {
        q: "Do you service hotels under flag brand standards?",
        a: "Yes. We work with properties operating under most major hotel flags and follow brand engineering standards for parts sourcing, documentation and turnaround timelines.",
      },
      {
        q: "Can we get an additional-insured COI for our property?",
        a: "Yes. Our base COI lives at /credentials/coi.pdf and we issue property-specific additional-insured endorsements within one business day for new accounts.",
      },
      {
        q: "Do you handle on-premise laundry (OPL) repair?",
        a: "Yes — Speed Queen, Continental Girbau, UniMac, Milnor and Huebsch washers, dryers and ironers. We service both soft-mount and rigid-mount OPL configurations.",
      },
      {
        q: "Can engineering get an after-hours dispatcher?",
        a: "Yes. Our dispatch line is staffed 24/7 and after-hours hotel calls bypass the consumer queue.",
      },
      {
        q: "Do you service in-room minibar refrigeration?",
        a: "Yes — both thermoelectric and compressor minibars from Indel B, Minibar Systems and Dometic, including room-by-room replacement coordination.",
      },
      {
        q: "Are your techs background-screened for guest-floor access?",
        a: "Yes. Our technicians are screened and badged appropriate for guest-floor and back-of-house access. We coordinate escort arrangements with security on the first visit.",
      },
    ],
    relatedServices: [
      "commercial-laundry-repair",
      "ice-machine-repair",
      "commercial-refrigeration-repair",
      "commercial-oven-repair",
      "commercial-hood-repair",
      "commercial-dryer-repair",
    ],
  },

  // ────────────────────────────────────────────────────────── 3. Laundromats
  {
    slug: "laundromats",
    industry: "laundromats",
    industryTitle: "Laundromat",
    metaTitle: "Laundromat Equipment Repair Miami | Berne Commercial",
    metaDescription:
      "Speed Queen, Huebsch, Wascomat, Continental Girbau washer & dryer repair across South Florida. Coin and card systems, route fleets, multi-store operators.",
    h1: "Laundromat Equipment Repair in South Florida",
    hero: "Speed Queen, Huebsch, Wascomat, Continental — coin, card, and route fleets.",
    whyUs:
      "Laundromat owners run thin margins on equipment that's heavily cycled — 8 to 14 turns per machine per day for the well-run stores. We work the way operators work: same-day for a down stack, parts on the truck for the failures that actually happen on Speed Queen and Huebsch front-loads, and quoted PM schedules for chains running multi-location route service. We don't pad invoices with diagnostic theater on a machine the owner already knows is the drain pump.",
    equipment: [
      {
        name: "Front-load washers",
        brands: ["Speed Queen", "Huebsch", "Wascomat", "Continental Girbau", "Electrolux Professional"],
        notes: "20–80lb capacity, soft-mount and rigid",
      },
      {
        name: "Top-load & double-load",
        brands: ["Speed Queen", "Maytag Commercial", "Whirlpool Commercial"],
        notes: "Standard and double-load route equipment",
      },
      {
        name: "Stack & single dryers",
        brands: ["Speed Queen", "Huebsch", "Dexter", "ADC", "Maytag Commercial"],
        notes: "Gas-fired primarily; 30lb–75lb",
      },
      {
        name: "Payment systems",
        brands: ["Greenwald", "Setomatic SpyderWash", "CCI", "ESD", "Card Concepts"],
        notes: "Coin slides, smart-card and mobile payment retrofits",
      },
      {
        name: "Water heating",
        brands: ["AO Smith Commercial", "Rheem Commercial", "Bradford White"],
        notes: "Gas-fired and tankless commercial water heaters",
      },
      {
        name: "OPL / drop-off service",
        brands: ["Continental Girbau", "Milnor", "UniMac"],
        notes: "Higher-capacity production washers and dryers for wash-and-fold lines",
      },
    ],
    commonIssues: [
      "Speed Queen front-load that fills and drains but won't spin — door lock switch or pressure switch",
      "Huebsch stack dryer running cool — gas valve, ignitor, or high-limit",
      "Wascomat door lock chattering after spin — boot leak getting into the lock harness, or door lock module",
      "Card system refusing to accept value-add — Setomatic or CCI reader, network bridge, or token program",
      "Drain pump making noise on a Continental Girbau — coin or button in the pump, bearing wear, or impeller damage",
      "Gas dryer cycle too short — vent restriction, dryer-vent length out of spec for the BTU input",
      "Vending machine of soap/dryer-sheets eating quarters — coin mech jam or vend motor",
    ],
    sameDay:
      "Every hour a washer is down is roughly 1–2 lost cycles. For a 30-machine store with 15 down for a Sunday morning, that's the difference between a profitable weekend and a complaint stack on Monday. Our laundromat dispatch carries common Speed Queen, Huebsch and Wascomat parts on the truck — door locks, drain pumps, ignitors, gas valves, drive motors — so the first visit is usually the only visit.",
    faqs: [
      {
        q: "Do you service Speed Queen, Huebsch and Continental Girbau equipment?",
        a: "Yes — those three plus Wascomat and Electrolux Professional cover almost every machine in a South Florida laundromat. Our techs are trained on each.",
      },
      {
        q: "Can you support a multi-store route operator?",
        a: "Yes. We support multi-location laundromat operators with scheduled PM, batched repairs, and consolidated invoicing.",
      },
      {
        q: "Do you work on coin and card payment systems?",
        a: "Yes — Greenwald coin mechs, Setomatic SpyderWash, CCI, ESD and Card Concepts smart-card systems. Including retrofits from coin-only stores.",
      },
      {
        q: "What about commercial gas water heaters?",
        a: "Yes — gas-fired and tankless AO Smith, Rheem and Bradford White commercial water heaters used in laundromat hot-water plants.",
      },
      {
        q: "Do you do OPL drop-off / wash-and-fold equipment?",
        a: "Yes — Continental Girbau, Milnor and UniMac higher-capacity washers and dryers used for wash-and-fold and commercial accounts.",
      },
      {
        q: "Can you handle a new equipment install or store reset?",
        a: "Yes — install coordination on washers, dryers, water heating and venting. We work alongside your plumbing and gas contractor or coordinate a licensed sub when needed.",
      },
    ],
    relatedServices: [
      "commercial-laundry-repair",
      "commercial-washer-repair",
      "commercial-dryer-repair",
    ],
  },

  // ────────────────────────────────────────────────────────── 4. Healthcare
  {
    slug: "healthcare",
    industry: "healthcare facilities",
    industryTitle: "Healthcare",
    metaTitle: "Medical & Healthcare Equipment Repair Miami | Berne",
    metaDescription:
      "Vaccine fridge, lab refrigeration, hospital kitchen and ice machine repair across South Florida. Helmer, Thermo Scientific. NDA & HIPAA-aware crews.",
    h1: "Healthcare Equipment Repair in South Florida",
    hero: "Vaccine fridges, lab refrigeration, hospital kitchens, ice — discreet, documented, certified.",
    whyUs:
      "Healthcare facilities have a different vendor bar: documentation requirements, NDA expectations, HIPAA-aware crew behavior, and refrigeration that's not just \"cold\" but logged-and-validated cold. We work on the same equipment a biomed group would touch on the refrigeration side — Helmer plasma and vaccine fridges, Thermo Scientific lab freezers, Follett pharmacy ice — and we stay out of the regulated medical-device scope. When a freezer alarm trips at 2am, our dispatch logs the call, the response time, and the resolution for your QA chain.",
    equipment: [
      {
        name: "Vaccine & pharmacy refrigeration",
        brands: ["Helmer", "Thermo Scientific", "Follett", "VWR", "Migali Scientific"],
        notes: "Vaccine refrigerators, plasma freezers, pharmacy-grade reach-ins",
      },
      {
        name: "Lab freezers & ULT",
        brands: ["Thermo Scientific", "Helmer", "PHCbi (Panasonic)", "Stirling Ultracold"],
        notes: "-20°C and -80°C freezers (mechanical service, not biomed-cert)",
      },
      {
        name: "Hospital kitchen & cafeteria",
        brands: ["Vulcan", "Hobart", "Rational", "Cleveland", "Alto-Shaam"],
        notes: "Combi ovens, dish machines, ranges, holding cabinets",
      },
      {
        name: "Ice machines (pharmacy & nourishment)",
        brands: ["Follett", "Hoshizaki", "Manitowoc", "Scotsman"],
        notes: "Nugget pharmacy ice, patient floor nourishment stations",
      },
      {
        name: "Walk-in cold rooms",
        brands: ["Bally", "Master-Bilt", "Polar King", "Kolpak"],
        notes: "Pharmacy, morgue-adjacent kitchen storage, central kitchens",
      },
      {
        name: "Cafeteria refrigeration",
        brands: ["True", "Turbo Air", "Continental", "Beverage-Air"],
        notes: "Patient tray-line, retail cafeteria, staff break rooms",
      },
    ],
    commonIssues: [
      "Helmer vaccine refrigerator alarming on temperature excursion — door gasket leak, condenser airflow, or controller calibration",
      "Thermo Scientific -80°C freezer running compressor 24/7 — first-stage refrigerant leak, dirty condenser, ambient too high",
      "Follett pharmacy ice machine not producing nugget — auger motor or water-distribution",
      "Cafeteria Hobart conveyor dishwasher tripping mid-meal service — water-level probe, drain solenoid, or sensor relay",
      "Walk-in pharmacy cooler drifting up at night — defrost-cycle frequency or controller calibration",
      "Patient-floor ice/water dispenser jammed — solenoid, water filter, or auger",
      "Combi oven steam generator not firing on a cafeteria Rational — descaling overdue or water-level probe",
    ],
    sameDay:
      "A vaccine refrigerator excursion is not just a financial loss — it's a regulatory event with paperwork attached. Our healthcare dispatch is set up to log the call, get a refrigeration tech onsite quickly, and produce documentation your QA program can attach to the excursion record. Same-day on critical refrigeration; standard turnaround on cafeteria equipment unless a patient-meal service is impacted.",
    faqs: [
      {
        q: "Do you work on medical refrigeration like Helmer and Thermo Scientific?",
        a: "Yes — on the mechanical refrigeration side (compressor, refrigerant, controls, gaskets). We coordinate with your biomed group on anything that crosses into validated medical-device scope.",
      },
      {
        q: "Can you sign an NDA and HIPAA acknowledgment?",
        a: "Yes. Healthcare clients regularly require both and our crews are oriented for HIPAA-aware behavior on patient floors and in clinical areas.",
      },
      {
        q: "Do you provide service documentation for QA?",
        a: "Yes. Call timestamps, response time, technician, parts replaced and resolution are documented and available in PDF for your QA chain.",
      },
      {
        q: "Can you handle the cafeteria and pharmacy ice machines on the same account?",
        a: "Yes — Hoshizaki and Manitowoc cafeteria machines and Follett pharmacy nugget ice are common on the same hospital account. We service both.",
      },
      {
        q: "Are your techs EPA Section 608 certified?",
        a: "Yes — required for any refrigerant work on vaccine, lab and walk-in refrigeration.",
      },
      {
        q: "Do you do ULT (-80°C) freezer repair?",
        a: "We service the mechanical refrigeration on Thermo, Helmer, PHCbi (Panasonic) and Stirling Ultracold ULT units. Biomed validation is handled by your biomed group.",
      },
    ],
    relatedServices: [
      "commercial-refrigeration-repair",
      "walk-in-cooler-repair",
      "ice-machine-repair",
      "commercial-oven-repair",
    ],
  },

  // ────────────────────────────────────────────────────────── 5. Grocery
  {
    slug: "grocery",
    industry: "supermarkets and grocery stores",
    industryTitle: "Grocery & Supermarket",
    metaTitle: "Supermarket & Grocery Equipment Repair Miami | Berne",
    metaDescription:
      "Hussmann, Hill Phoenix, Master-Bilt display case and walk-in repair across South Florida. Refrigeration racks, deli, ice, scales — same-day dispatch.",
    h1: "Supermarket & Grocery Equipment Repair in South Florida",
    hero: "Display cases, walk-ins, deli, refrigeration racks, ice machines — store-level coverage.",
    whyUs:
      "Grocery stores have the most refrigeration per square foot of any vertical we serve — and the highest cost of failure when a single multi-deck case shuts down on a Saturday. Our techs work on the same equipment a national refrigeration contractor would touch: parallel rack systems, multi-deck and reach-in display cases, deli prep, ice systems, walk-ins with sub-cooler loops. We're a regional alternative to the national chains for store managers who'd rather call a phone someone actually answers.",
    equipment: [
      {
        name: "Display cases",
        brands: ["Hussmann", "Hill Phoenix", "Arneg", "Kysor Warren", "Tyler"],
        notes: "Multi-deck dairy/deli, low-temp frozen, island freezers, service deli",
      },
      {
        name: "Refrigeration racks",
        brands: ["Hussmann", "Hill Phoenix", "Heatcraft", "Copeland"],
        notes: "Parallel rack systems, sub-coolers, secondary loops",
      },
      {
        name: "Walk-in coolers & freezers",
        brands: ["Bally", "Master-Bilt", "Kolpak", "Polar King", "Norlake"],
        notes: "Receiving, dairy, produce, frozen, beer cave",
      },
      {
        name: "Deli & prepared foods",
        brands: ["Hobart", "Globe", "Bizerba"],
        notes: "Slicers, scales, packagers, deli prep refrigeration",
      },
      {
        name: "Bakery & in-store kitchen",
        brands: ["Vulcan", "Hobart", "Cleveland", "Rational"],
        notes: "Combi ovens, proofers, dough mixers, fryers for hot bar",
      },
      {
        name: "Ice machines & beverage",
        brands: ["Hoshizaki", "Manitowoc", "Scotsman"],
        notes: "Receiving, hot bar, beverage station",
      },
      {
        name: "Specialty cases",
        brands: ["Federal Industries", "Structural Concepts", "Hussmann Specialty"],
        notes: "Sushi cases, gelato, prepared-foods grab-and-go",
      },
    ],
    commonIssues: [
      "Multi-deck dairy case at 50°F instead of 36°F — defrost-cycle frequency off, evaporator iced, or rack pressure dropped after a compressor cycled out",
      "Hussmann frozen island case running compressor but no temp drop — refrigerant leak, expansion valve, or condenser fan failure",
      "Deli prep table at 45°F — dirty condenser or fan motor",
      "Rack low-pressure alarm in the equipment room — Copeland compressor on the system tripped on overload",
      "Walk-in freezer floor frosting — door heater, gasket leak, or vapor barrier breach",
      "Hoshizaki ice machine at hot bar not harvesting — water curtain switch or thermistor",
      "Federal sushi case fogging at 9am — door gasket or fan motor",
    ],
    sameDay:
      "Refrigeration failure in a supermarket isn't a single ticket — it's a inventory-write-off countdown. Dairy and prepared-foods cases have hours, not days, before product is unsalable. We treat grocery refrigeration alarms as priority dispatch, and our trucks carry the components grocery cases actually fail on: condenser fan motors, evap fans, defrost terminators, expansion valves, contactors and common Hussmann/Hill Phoenix board parts.",
    faqs: [
      {
        q: "Do you service refrigeration racks and parallel systems?",
        a: "Yes — Hussmann, Hill Phoenix, Heatcraft and Copeland-based rack systems including sub-cooler loops.",
      },
      {
        q: "Can you respond to a case-temperature alarm same-day?",
        a: "Yes. Display case temperature alarms are priority dispatch and usually receive same-day response across our South Florida coverage.",
      },
      {
        q: "Do you handle the in-store bakery and hot bar equipment too?",
        a: "Yes — Hobart, Vulcan, Rational, Cleveland for bakery and hot-bar service. Same dispatch, often same tech on a combined ticket.",
      },
      {
        q: "Can you support multi-store grocery operators?",
        a: "Yes — scheduled PM, consolidated invoicing, multi-location dispatch routing.",
      },
      {
        q: "Are your techs EPA Section 608 certified for refrigerant work?",
        a: "Yes — required for any work on display cases, walk-ins, and rack systems with R-404A, R-448A or R-449A refrigerant.",
      },
      {
        q: "Do you do deli slicer and scale repair?",
        a: "Hobart, Globe and Bizerba slicers and Bizerba scales — yes, on the same account as refrigeration.",
      },
    ],
    relatedServices: [
      "commercial-refrigeration-repair",
      "walk-in-cooler-repair",
      "walk-in-freezer-repair",
      "ice-machine-repair",
      "commercial-oven-repair",
    ],
  },

  // ────────────────────────────────────────────────────────── 6. Schools
  {
    slug: "schools",
    industry: "schools and universities",
    industryTitle: "School & University",
    metaTitle: "School Cafeteria Equipment Repair Miami | Berne",
    metaDescription:
      "K-12 and university cafeteria repair across South Florida — Cleveland, Vulcan, Hobart dish machines, walk-ins, bulk milk coolers. Background-screened techs.",
    h1: "School & University Equipment Repair in South Florida",
    hero: "K-12 cafeterias, university dining, dish machines, walk-ins, bulk milk — district-friendly dispatch.",
    whyUs:
      "School kitchens have constraints that no other vertical does: a meal service window measured in minutes, USDA volume requirements, background-screened-vendor lists, and a budget cycle that doesn't care that the steamer broke on Tuesday. We work with district food-service directors and university dining operations the same way: scheduled PM in the summer, fast-turn during the school year, parts on the truck for the steamers, kettles, and dish machines that actually break, and documentation that fits into district vendor systems.",
    equipment: [
      {
        name: "Cooking & batch production",
        brands: ["Cleveland", "Vulcan", "Groen", "Crown Steam"],
        notes: "Steam-jacketed kettles, tilt skillets, pressure steamers, convection ovens",
      },
      {
        name: "Combi & convection ovens",
        brands: ["Rational", "Vulcan", "Blodgett", "Alto-Shaam"],
        notes: "Batch cooking for tray-line meal service",
      },
      {
        name: "Dish machines",
        brands: ["Hobart", "Champion", "Jackson", "Insinger"],
        notes: "Conveyor, flight-type, door-type — high-volume tray return",
      },
      {
        name: "Walk-ins",
        brands: ["Bally", "Master-Bilt", "Kolpak", "Norlake"],
        notes: "Receiving, dry storage and dairy walk-ins",
      },
      {
        name: "Bulk milk coolers",
        brands: ["Norlake", "Beverage-Air", "Continental"],
        notes: "5-crate and 12-crate cooler boxes for tray-line",
      },
      {
        name: "Refrigerated tray-line & prep",
        brands: ["True", "Turbo Air", "Delfield"],
        notes: "Prep tables, refrigerated cold-pans, milk cases",
      },
      {
        name: "Ice machines & beverage",
        brands: ["Hoshizaki", "Manitowoc", "Scotsman"],
        notes: "Cafeteria and athletic-department ice",
      },
    ],
    commonIssues: [
      "Cleveland steam-jacketed kettle not building pressure — water-level probe, steam-trap, or relief valve",
      "Hobart CL44 conveyor dish machine stuck — relay, water-level probe, or pump",
      "Bulk milk cooler at 45°F before lunch service — condenser airflow, evap fan, or door left open after delivery",
      "Combi oven steam not firing on a Rational — descaling overdue or water-level probe",
      "Walk-in freezer alarming over the weekend — defrost-cycle failure or condenser fan",
      "Tray-line cold-pan losing temp during meal service — evap fan or refrigerant charge",
      "Athletic-department ice machine empty — Hoshizaki harvest cycle or water inlet valve",
    ],
    sameDay:
      "A dish machine failure during meal service is a USDA-volume problem in minutes. We staff dispatch with school food-service in mind: priority routing for active meal-service emergencies, batched scheduling for between-meal repairs, and summer PM windows for the work that doesn't need to happen during the year. Most district kitchens get a tech onsite same-day for active-service failures.",
    faqs: [
      {
        q: "Are your technicians background-screened for school district vendor lists?",
        a: "Yes. Our technicians clear standard background screening and we coordinate district-specific badging where required.",
      },
      {
        q: "Can you handle district-wide PM during summer break?",
        a: "Yes. Summer PM across multiple school kitchens is a standard service for us — we schedule the route, document each kitchen, and deliver consolidated reporting.",
      },
      {
        q: "Do you service Hobart conveyor dish machines and Cleveland steamers?",
        a: "Yes — both are staple equipment in school cafeterias and our trucks carry common service parts for each.",
      },
      {
        q: "Can you service university dining and athletic-department equipment on one account?",
        a: "Yes. University dining commissaries, residential dining halls, and athletic-department concession refrigeration are commonly handled under one account.",
      },
      {
        q: "Do you do bulk milk cooler service?",
        a: "Yes — Norlake, Beverage-Air and Continental bulk milk coolers for K-12 tray-line meal service.",
      },
      {
        q: "Will you provide a COI naming the district as additional insured?",
        a: "Yes. Additional-insured endorsements for school districts are routine — turnaround is one business day.",
      },
    ],
    relatedServices: [
      "commercial-refrigeration-repair",
      "walk-in-cooler-repair",
      "commercial-oven-repair",
      "steamer-repair",
      "ice-machine-repair",
    ],
  },

  // ────────────────────────────────────────────────────────── 7. Gyms / Fitness
  {
    slug: "gyms",
    industry: "gyms and fitness centers",
    industryTitle: "Gym & Fitness Center",
    metaTitle: "Gym Smoothie Bar & Cafe Equipment Repair Miami | Berne",
    metaDescription:
      "Smoothie bar refrigeration, blender stations, juice press, retail beverage coolers — gym & fitness equipment repair across South Florida.",
    h1: "Gym & Fitness Center Equipment Repair in South Florida",
    hero: "Smoothie bars, blender stations, juice press, retail coolers, locker-room laundry.",
    whyUs:
      "Modern fitness operations run a retail food and beverage program — smoothie bar, branded merchandise coolers, occasional kitchen for prepared foods — and a small laundry for towel service. The equipment is light commercial, but the failure cost is real: members notice when the post-workout smoothie line is closed. We work this segment efficiently — one tech, one truck, the small-format refrigeration and beverage equipment that most gyms run, plus the locker-room laundry side when needed.",
    equipment: [
      {
        name: "Smoothie bar refrigeration",
        brands: ["True", "Turbo Air", "Beverage-Air", "Delfield"],
        notes: "Undercounter prep, glass-door merchandiser",
      },
      {
        name: "Blender & high-volume prep",
        brands: ["Vitamix", "Blendtec Commercial", "Hamilton Beach Commercial"],
        notes: "Member-facing blender stations and station refrigeration",
      },
      {
        name: "Juice press & cold-press",
        brands: ["Goodnature", "Sana", "Angel"],
        notes: "Cold-press juicers and refrigerated juice merchandisers",
      },
      {
        name: "Retail beverage coolers",
        brands: ["True", "Beverage-Air", "Pepsi/Coca-Cola coolers (asset)"],
        notes: "Glass-door merchandisers, branded asset coolers",
      },
      {
        name: "Ice & post-workout",
        brands: ["Hoshizaki", "Manitowoc", "Follett"],
        notes: "Smoothie bar nugget, water-station ice",
      },
      {
        name: "Locker-room laundry",
        brands: ["Speed Queen", "Whirlpool Commercial", "Maytag Commercial"],
        notes: "Towel-service washers and dryers",
      },
      {
        name: "Light kitchen / prepared foods",
        brands: ["Vulcan", "Turbo Air", "Hobart"],
        notes: "Where the gym runs a hot-bar or breakfast cafe",
      },
    ],
    commonIssues: [
      "Smoothie bar merchandiser at 50°F — condenser airflow blocked behind the merchandiser",
      "Vitamix or Blendtec blender drive coupling shredded — replacement and base service",
      "Juice press refrigeration in the prep area drifting — small commercial condenser failure",
      "Branded asset cooler (Pepsi/Coca-Cola) not cooling — Pepsi/Coca-Cola service queue can be slow; we cover the refrigeration mechanically if the asset agreement allows",
      "Locker-room dryer running long cycle — lint trap, vent length, or belt slip",
      "Nugget ice dispenser jammed — Follett auger or door switch",
      "Cafe espresso machine at the juice bar not heating — element or pressure switch",
    ],
    sameDay:
      "A closed smoothie bar at 7pm Monday isn't a financial emergency the way a dead walk-in is at a restaurant — but it is a member-experience issue, and chain gym operators take it seriously. We respond same-day for an active-revenue failure (the smoothie bar can't sell) and next-day for support equipment (locker-room dryer slow). Most gym calls are one-visit, one-truck repairs.",
    faqs: [
      {
        q: "Do you service Vitamix and Blendtec commercial blenders?",
        a: "Yes — drive coupling, motor, container service for Vitamix Drink Machine and Quiet One, Blendtec Commercial, and Hamilton Beach Commercial.",
      },
      {
        q: "Can you handle cold-press juicers (Goodnature, Sana)?",
        a: "Yes — we service the press hydraulics, refrigeration on the juice merchandiser, and the bottling-area equipment.",
      },
      {
        q: "Do you do locker-room laundry repair?",
        a: "Yes — Speed Queen, Whirlpool Commercial and Maytag Commercial towel-service washers and dryers.",
      },
      {
        q: "What about branded asset coolers (Pepsi, Coca-Cola)?",
        a: "We service the refrigeration mechanically — the asset agreement with the beverage company governs ownership and whether service is billable to the gym or the beverage company.",
      },
      {
        q: "Can you support a multi-location gym chain?",
        a: "Yes — multi-club dispatch with consolidated invoicing.",
      },
      {
        q: "Do you carry Hoshizaki and Manitowoc parts for gym ice machines?",
        a: "Yes — common service parts on the truck for both.",
      },
    ],
    relatedServices: [
      "commercial-refrigeration-repair",
      "ice-machine-repair",
      "commercial-laundry-repair",
      "espresso-machine-repair",
    ],
  },

  // ────────────────────────────────────────────────────────── 8. Breweries
  {
    slug: "breweries",
    industry: "breweries and distilleries",
    industryTitle: "Brewery & Distillery",
    metaTitle: "Brewery Glycol & Taproom Repair Miami | Berne",
    metaDescription:
      "Glycol chillers, kegerators, walk-in cold rooms, taproom refrigeration & ice for breweries and distilleries across South Florida. Same-day taproom service.",
    h1: "Brewery & Distillery Equipment Repair in South Florida",
    hero: "Glycol chillers, kegerators, cold rooms, taproom refrigeration — dispensing and cold-side service.",
    whyUs:
      "We're a cold-side service partner for breweries and distilleries — glycol chillers feeding fermenters, walk-in cold storage for kegs and packaging, kegerator and tap-tower dispense, and the taproom kitchen if there is one. We don't certify pressure vessels or do brewery-specific process work (jacketed fermenter weld, CIP loop validation, pressure-relief recert) — that's a brewery engineering scope. We're the people you call when the glycol chiller drops 10°F overnight or the taproom kegerator stops cooling on a Friday at 4pm.",
    equipment: [
      {
        name: "Glycol chillers",
        brands: ["Pro Refrigeration", "G&D Chillers", "Penguin Chillers", "Mueller"],
        notes: "Service on commercial refrigeration side; not pressure-vessel cert",
      },
      {
        name: "Walk-in cold rooms",
        brands: ["Bally", "Polar King", "Master-Bilt", "Kolpak"],
        notes: "Keg storage, packaging cold, finished-goods cold",
      },
      {
        name: "Kegerators & tap-tower refrigeration",
        brands: ["Perlick", "Glastender", "Krowne", "True"],
        notes: "Direct-draw and remote tower systems",
      },
      {
        name: "Taproom refrigeration",
        brands: ["True", "Turbo Air", "Beverage-Air"],
        notes: "Merchandisers, undercounter, back-bar",
      },
      {
        name: "Ice machines",
        brands: ["Hoshizaki", "Manitowoc", "Scotsman"],
        notes: "Bar and packaging-area ice",
      },
      {
        name: "Taproom kitchen (where applicable)",
        brands: ["Vulcan", "Hobart", "Pitco", "True"],
        notes: "Limited-menu kitchen equipment",
      },
      {
        name: "CO2 / gas line refrigeration support",
        brands: ["Micro Matic", "Perlick"],
        notes: "Gas blender service, dispense pressure (mechanical side)",
      },
    ],
    commonIssues: [
      "Glycol chiller losing temperature overnight — condenser airflow, refrigerant charge, or chiller compressor",
      "Walk-in keg cooler drifting up — evap fan failure or door gasket on a heavily-cycled door",
      "Tap-tower foaming after a long pour — chiller loop temperature, recirculation pump, or tower insulation",
      "Kegerator on the taproom floor at 50°F — condenser cleaning overdue or compressor failure",
      "Ice machine at the bar empty during a Friday rush — Hoshizaki harvest cycle or water inlet valve",
      "Back-bar merchandiser cooler not lighting — LED ballast or door switch",
      "Walk-in floor frosting in summer humidity — door heater, gasket, or vapor barrier",
    ],
    sameDay:
      "Taproom equipment failure during a Friday rush is a sales-floor emergency. We treat brewery taproom calls as same-day priority on weekends, especially for tap-tower foaming, kegerator failure and bar ice machine outages. The fermentation side (glycol loop temp drift, walk-in keg cooler) gets fast turnaround but is usually a tomorrow-morning ticket unless production is at risk.",
    faqs: [
      {
        q: "Do you service glycol chillers?",
        a: "Yes — on the commercial refrigeration side. Pro Refrigeration, G&D, Penguin and Mueller chillers. We don't do pressure-vessel certification or fermenter jacket work.",
      },
      {
        q: "Can you fix tap-tower foaming?",
        a: "Yes — tap-tower foaming is usually a temperature, pressure or insulation issue. We diagnose all three on the first visit.",
      },
      {
        q: "Do you handle walk-in keg coolers?",
        a: "Yes — Bally, Polar King, Master-Bilt and Kolpak walk-ins are common in South Florida breweries and we service all four.",
      },
      {
        q: "What about distillery-specific equipment?",
        a: "Refrigerated storage, condenser cooling, kegerator and taproom — yes. Still-process and pot-still scope is distillery engineering, not us.",
      },
      {
        q: "Can you respond same-day to a Friday taproom failure?",
        a: "Yes. Friday and Saturday taproom emergencies are priority dispatch.",
      },
      {
        q: "Do you carry kegerator parts on the truck?",
        a: "Common parts — fan motors, condenser cleaning kits, thermostats, gaskets — yes. Tap-tower-specific parts are sourced same- or next-day depending on brand.",
      },
    ],
    relatedServices: [
      "commercial-refrigeration-repair",
      "walk-in-cooler-repair",
      "ice-machine-repair",
    ],
  },

  // ────────────────────────────────────────────────────────── 9. Country Clubs
  {
    slug: "country-clubs",
    industry: "country clubs and private hospitality venues",
    industryTitle: "Country Club & Private Hospitality",
    metaTitle: "Country Club Kitchen & Ice Repair Miami | Berne",
    metaDescription:
      "Country club catering kitchens, banquet refrigeration, ice machines, dishwashing — discreet, NDA-friendly service across South Florida. Member-event priority.",
    h1: "Country Club & Hospitality Equipment Repair in South Florida",
    hero: "Catering kitchens, banquet refrigeration, ice rooms, halfway-house — member-event priority.",
    whyUs:
      "Country clubs run on member events and tournament weekends — the kind of operations where a refrigeration failure on a Friday before a 200-person Saturday banquet is a board-of-governors phone call. We work the way private clubs work: discreet, NDA-friendly, COI on file with the club, after-hours dispatch routed through the F&B director or club engineer, and crews that know the difference between a member-facing area and a back-of-house corridor. Most South Florida clubs we serve have us on quarterly PM plus on-call.",
    equipment: [
      {
        name: "Banquet & catering refrigeration",
        brands: ["True", "Traulsen", "Turbo Air", "Delfield"],
        notes: "Reach-in, walk-in, banquet prep tables, plating refrigeration",
      },
      {
        name: "Main kitchen & line",
        brands: ["Vulcan", "Wolf", "Garland", "Rational", "Hobart"],
        notes: "Combi ovens, ranges, salamanders, dish machines",
      },
      {
        name: "Halfway house & snack bar",
        brands: ["True", "Hatco", "Hobart", "Vulcan"],
        notes: "Small-format kitchen, hot-holding, merchandiser refrigeration",
      },
      {
        name: "Pool & cabana service",
        brands: ["True", "Beverage-Air", "Hoshizaki"],
        notes: "Cabana refrigeration, ice for poolside service",
      },
      {
        name: "Ice machines",
        brands: ["Hoshizaki", "Manitowoc", "Scotsman", "Kold-Draft"],
        notes: "Main kitchen, bars, ice rooms, halfway-house",
      },
      {
        name: "Bar & beverage",
        brands: ["Perlick", "Krowne", "Glastender", "True"],
        notes: "Under-bar refrigeration, beer towers, glass chillers",
      },
      {
        name: "Walk-ins",
        brands: ["Bally", "Master-Bilt", "Kolpak"],
        notes: "Banquet prep, beverage, wine-cellar adjacent",
      },
    ],
    commonIssues: [
      "Banquet walk-in drifting up before a Friday rehearsal dinner — condenser fan, evap fan, or refrigerant charge",
      "Main-kitchen Rational combi steam generator not firing — descaling overdue or water-level probe",
      "Halfway-house ice machine empty — Hoshizaki harvest or float",
      "Cabana-bar Perlick kegerator at 50°F — condenser cleaning or compressor",
      "Banquet plating refrigeration drifting between courses — Delfield evap fan or thermostat",
      "Pool bar Kold-Draft chewer ice machine not producing — water inlet valve or scaling",
      "Main bar Glastender glass chiller at room temp — compressor or refrigerant",
    ],
    sameDay:
      "Member events drive the country-club calendar — and the cost of a refrigeration failure on event day is reputational, not just operational. Our dispatch treats club emergencies the way we treat hotel emergencies: priority routing, after-hours coverage, and crew familiarity with discreet on-property behavior. Most clubs we serve have a standing PM schedule and a direct line to dispatch for emergencies.",
    faqs: [
      {
        q: "Will you sign an NDA for our club?",
        a: "Yes. Member privacy and event-confidentiality NDAs are standard for the clubs we serve.",
      },
      {
        q: "Can we have a standing PM schedule?",
        a: "Yes — quarterly PM is the most common configuration for South Florida clubs we serve, scheduled to avoid event weekends.",
      },
      {
        q: "Do you handle member-event emergencies after-hours?",
        a: "Yes. After-hours dispatch routes through our 24/7 line and connects directly to a dispatcher, not a queue.",
      },
      {
        q: "Can you service the halfway-house and main kitchen on one account?",
        a: "Yes — halfway-house, main kitchen, pool/cabana, banquet, and all bars on one account is the typical configuration.",
      },
      {
        q: "Do you support equipment in private dining rooms and member homes?",
        a: "We serve club property; private member homes are out of scope for our commercial division (residential service is handled by Berne Appliance Repair).",
      },
      {
        q: "Are your techs presentable for member-area access?",
        a: "Yes. Uniformed, badged, and oriented to member-area protocol.",
      },
    ],
    relatedServices: [
      "commercial-refrigeration-repair",
      "walk-in-cooler-repair",
      "ice-machine-repair",
      "commercial-oven-repair",
    ],
  },

  // ────────────────────────────────────────────────────────── 10. Multi-Family
  {
    slug: "multi-family",
    industry: "multi-family and apartment buildings",
    industryTitle: "Multi-Family & Apartment",
    metaTitle: "Multi-Family Laundry & Common-Area Repair Miami | Berne",
    metaDescription:
      "Common-area laundry, amenity kitchens, apartment-unit appliances across South Florida multi-family. Speed Queen, building manager service contracts.",
    h1: "Multi-Family & Apartment Equipment Repair in South Florida",
    hero: "Common-area laundry, amenity kitchens, in-unit appliances — building-manager service contracts.",
    whyUs:
      "Property managers running multi-family and apartment buildings need a vendor who handles the three layers of equipment that come with the territory: the common-area laundry room (Speed Queen, Whirlpool Commercial), the amenity-floor demo kitchen or coffee bar, and the in-unit appliances that come back as resident tickets. We work directly with property management — one account, one COI, consolidated monthly invoicing — and our crews know how to enter occupied units on the manager's schedule, not the resident's.",
    equipment: [
      {
        name: "Common-area laundry",
        brands: ["Speed Queen", "Whirlpool Commercial", "Maytag Commercial", "Huebsch"],
        notes: "Coin- and card-op washers and dryers, value-add card systems",
      },
      {
        name: "Amenity-floor kitchen",
        brands: ["GE Profile", "Whirlpool", "Bosch", "Sub-Zero", "Wolf"],
        notes: "Demo kitchen, coffee bar, residential-grade equipment in amenity spaces",
      },
      {
        name: "Amenity refrigeration",
        brands: ["True", "Beverage-Air", "GE", "Whirlpool"],
        notes: "Pool bar, breakfast nook, coffee bar, package room",
      },
      {
        name: "Ice machines & water",
        brands: ["Hoshizaki", "Manitowoc", "Scotsman"],
        notes: "Amenity-floor and pool-deck ice",
      },
      {
        name: "Card payment systems (laundry)",
        brands: ["CSC ServiceWorks", "WASH", "Greenwald", "Setomatic"],
        notes: "Where coordination with the laundry vendor is required",
      },
      {
        name: "In-unit appliances (resident tickets)",
        brands: ["GE", "Whirlpool", "Frigidaire", "Samsung", "LG"],
        notes: "Refrigerators, ranges, dishwashers, washers, dryers — handled under property-management account",
      },
      {
        name: "Trash room compactors",
        brands: ["Marathon", "Wastequip", "Compactor Management"],
        notes: "Compactor service and chute equipment",
      },
    ],
    commonIssues: [
      "Common-area Speed Queen dryer running long — gas valve, ignitor, or vent restriction (multi-family gas dryer venting is a recurring issue)",
      "Card reader on the laundry not accepting value-add — CSC, WASH or Setomatic reader; sometimes a network bridge",
      "Amenity kitchen ice maker empty for the weekend — Hoshizaki harvest cycle or water inlet",
      "In-unit refrigerator warm — typically condenser fan or compressor; common across GE, Whirlpool, Samsung",
      "In-unit dishwasher leaking onto neighbor unit — pump seal or door gasket; usually escalated by property",
      "Amenity coffee bar espresso machine not heating — element or pressure switch",
      "Trash-room compactor stuck — hydraulic system or limit switch",
    ],
    sameDay:
      "Multi-family service runs on a different urgency than restaurant or hotel work — most in-unit tickets are non-emergency and batched, but common-area failures (laundry room, amenity kitchen) and water-leak tickets are same-day priority. Our property-management dispatch is built around batch scheduling for in-unit work plus emergency routing for leaks, no-cool refrigerators in occupied units, and amenity-floor failures.",
    faqs: [
      {
        q: "Do you work directly with property management companies?",
        a: "Yes. Single account, single COI with management company named, consolidated monthly invoicing, and resident-ticket routing through property.",
      },
      {
        q: "Can you do in-unit appliance repair under the building account?",
        a: "Yes — resident-reported tickets routed through property management. We enter on the management schedule, not the resident's, unless the management company specifies otherwise.",
      },
      {
        q: "Do you service the common-area laundry?",
        a: "Yes — Speed Queen, Whirlpool Commercial, Maytag Commercial, Huebsch coin- and card-op washers and dryers, including coordination with CSC/WASH card programs.",
      },
      {
        q: "Will you service residential-grade appliances in amenity kitchens?",
        a: "Yes — amenity-floor demo kitchens often have GE Profile, Whirlpool, Bosch, Sub-Zero and Wolf residential-grade equipment. We service all five.",
      },
      {
        q: "Can you handle a leak emergency in an occupied unit same-day?",
        a: "Yes. Water-leak tickets in occupied units are priority dispatch.",
      },
      {
        q: "Do you cover trash-room compactor service?",
        a: "Yes — Marathon, Wastequip and Compactor Management equipment.",
      },
    ],
    relatedServices: [
      "commercial-laundry-repair",
      "commercial-washer-repair",
      "commercial-dryer-repair",
      "commercial-refrigeration-repair",
    ],
  },
]

export function getIndustryProfile(slug: string): IndustryProfile | undefined {
  return INDUSTRY_PROFILES.find((p) => p.slug === slug)
}

export const INDUSTRY_PROFILE_SLUGS = INDUSTRY_PROFILES.map((p) => p.slug)

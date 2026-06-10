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
  /**
   * Optional highlighted page rendered first in the related-services strip —
   * for dedicated pages that are not services.ts entries (e.g. the static
   * medical & lab refrigeration page linked from healthcare).
   */
  featuredPage?: { href: string; title: string; description: string }
  /**
   * Optional contextual cross-link to a sister site (residential / premium-residential).
   * Rendered as a single sentence after the "Why same-day" section so the link
   * appears in editorial context rather than as boilerplate. Allows inline markdown
   * `[label](https://...)` syntax (rendered via renderInline in industries page).
   */
  residentialAside?: string
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
    metaTitle: "Restaurant Equipment Repair Miami",
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
          {
        q: "How quickly can you respond to a walk-in cooler emergency on a Friday night?",
        a: "Walk-in emergencies on Friday and Saturday nights get the top of the dispatch queue — typical response time across Miami-Dade and Broward is under 90 minutes when the call comes in by 9 pm. Refrigeration techs on those routes carry R-410A and R-404A on the truck plus the most common Copeland and Tecumseh compressor relays and contactors, so the first visit usually closes the ticket.",
      },
      {
        q: "Do you handle hood and exhaust cleaning records for the fire marshal?",
        a: "We handle hood mechanical repair — blower bearings, belts, makeup-air balancing, damper assemblies — and document NFPA 96 service records that fit into the property's annual fire marshal binder. Full grease-cleaning is a separate scope handled by a partnered hood-cleaning specialist on the same dispatch if the operator wants both done at once.",
      },
      {
        q: "What does a typical fryer rebuild cost on a Pitco or Frymaster?",
        a: "A standard rebuild — hot-surface ignitor, gas valve coils, high-limit thermostat, drain valve gasket — runs $480 to $780 in parts and labor on Pitco SG and Frymaster H50 platforms. Larger filtration-equipped units sit higher. We always quote in writing after the diagnostic so the operator authorizes the scope before parts are pulled.",
      },
      {
        q: "Can you service equipment after the dinner rush so the line is not interrupted?",
        a: "Yes. Restaurant calls that can wait until after-hours go to the late-shift dispatch — typically 10 pm to 2 am on the cooking line, earlier on refrigeration if there is product loss risk. Service-call fee is the same; no after-hours surcharge for booked appointments. Emergency response outside the window is quoted separately.",
      },
      {
        q: "Do you provide quarterly preventive-maintenance contracts for restaurant groups?",
        a: "Yes. Multi-unit restaurant operators run on quarterly PM programs that cover refrigeration coil cleaning, walk-in door seal inspection, ice machine descaling, fryer drain valve service, and combustion analyzer checks on the gas line. Pricing scales with location count and equipment density — we quote per portfolio after a baseline walkthrough.",
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
    residentialAside:
      "Restaurant operators who run premium kitchens at home can route home-side dispatch to [Berne's premium residential team at berne-repair.com](https://berne-repair.com); the back-office is shared, so the call gets the same dispatch quality on either side.",
    es: {
      industry: "restaurantes",
      industryTitle: "Restaurante",
      metaTitle: "Reparación de Equipo de Restaurante Miami",
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
    metaTitle: "Hotel Equipment Repair South Florida",
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
          {
        q: "Do you support after-hours engineering calls without surcharge for contracted properties?",
        a: "Yes for properties on a service agreement — engineering can call the dispatcher 24/7 and the call is routed to on-call technicians at standard rates. Non-contracted after-hours calls carry a $150 emergency dispatch fee that is credited toward the repair when work is authorized. We invoice through the property's existing PO process.",
      },
      {
        q: "How fast can you turn a guest-room minibar replacement across a 200-room property?",
        a: "Phased minibar rollouts on Indel B and Minibar Systems platforms typically run 40 to 60 units per visit day, with two technicians working in parallel and one runner moving units between the loading dock and the floors. A 200-room conversion completes in 4 to 6 service days with no impact on revenue floors because we sequence around occupancy.",
      },
      {
        q: "Can you coordinate banquet-floor work around event schedules so we do not disrupt setups?",
        a: "Yes. Banquet manager hands us the BEO calendar and we sequence repairs into the gap windows between events — combi oven descaling, hood blower service, ice room dispenser swaps. We coordinate with banquet captain on cart routing through the back-of-house corridors so prep flow is not interrupted.",
      },
      {
        q: "Do you handle pool-deck and outdoor bar refrigeration for the pool ops team?",
        a: "Yes. Outdoor reach-ins, kegerators, ice bins, and frozen-drink machines at the pool deck and beach club get serviced on the same dispatch as interior equipment. Outdoor units fail more often because of salt air corrosion on condenser coils — we quote PM coil cleaning at 6-month intervals on outdoor refrigeration to extend service life.",
      },
      {
        q: "Are your technicians familiar with brand-flag engineering standards documentation?",
        a: "Yes. Major flag properties have brand-specific engineering manuals that govern parts sourcing, OEM-only requirements on guest-facing equipment, and documentation formats for the property's engineering log. Our senior techs work within those standards and provide closeout documentation in the format the property's engineering chief uses for brand audits.",
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
    residentialAside:
      "Hotel staff-housing units and owner-occupied private suites run residential-grade equipment — [Berne Appliance Repair at bernerepair.com](https://bernerepair.com) handles in-unit washer/dryer, range, and refrigeration service on the residential side.",
    es: {
      industry: "hoteles",
      industryTitle: "Hotel",
      metaTitle: "Reparación de Equipo de Hotel Miami",
      metaDescription:
        "Lavandería OPL, cocina, hielo y refrigeración para hoteles en Miami-Dade, Broward y Palm Beach. Speed Queen, Continental, Hoshizaki — despacho el mismo día.",
      h1: "Reparación de Equipo de Hotel en el Sur de Florida",
      hero: "Lavandería OPL, cocinas de banquetes, cuartos de hielo, breakfast bars — un solo proveedor, cada piso.",
      whyUs:
        "Los equipos de ingeniería de hoteles nos llaman porque una propiedad de 200 habitaciones tiene tres cuartos de lavandería, dos cocinas, cuatro máquinas de hielo y un piso de banquetes — y al GM no le importa cuál está dañado a las 5am, sólo que esté arreglado antes del check-in. Trabajamos como trabaja la operación hotelera: NDA-friendly, COI archivado con la propiedad, servicio after-hours ruteado por ingeniería, sin marketing en el lobby. Atendemos propiedades bajo la mayoría de banderas mayores y mantenemos additional-insured con varios operadores del Sur de Florida.",
      equipment: [
        { name: "Lavandería on-premise (OPL)", brands: ["Speed Queen", "Continental Girbau", "UniMac", "Milnor", "Huebsch"], notes: "Lavadoras soft-mount y rígidas, secadoras de gas y vapor, planchadoras" },
        { name: "Cocina de banquetes y línea", brands: ["Vulcan", "Hobart", "Rational", "Alto-Shaam", "Cleveland"], notes: "Hornos combi, sartenes basculantes, marmitas de vapor, estufas, salamandras" },
        { name: "Cuartos de hielo y pisos de huéspedes", brands: ["Hoshizaki", "Manitowoc", "Scotsman", "Follett"], notes: "Cuartos de hielo en bulk, dispensadores por piso, nugget tipo hotel-pak" },
        { name: "Breakfast bar y refrigeración de deli", brands: ["True", "Turbo Air", "Federal Industries", "Structural Concepts"], notes: "Vitrinas merchandiser, prep de breakfast, casos grab-and-go" },
        { name: "Minibar y refrigeración en habitación", brands: ["Indel B", "Minibar Systems", "Dometic"], notes: "Minibares de estado sólido y de compresor" },
        { name: "Lavavajillas", brands: ["Hobart", "Champion", "Jackson", "Insinger"], notes: "Conveyor, flight-type, door-type para carga de banquetes" },
        { name: "Campanas y ventilación", brands: ["CaptiveAire", "Greenheck", "Halton"], notes: "Extracción de banquete y línea, unidades makeup-air" },
      ],
      commonIssues: [
        "Secadora OPL con ciclo largo — válvula de gas, banda patinando o restricción de aire en el filtro de lint en Continental Girbau y Speed Queen",
        "Máquina de hielo en bulk en el corredor de ingeniería sin producir — cortina de agua Hoshizaki KM, probe de cosecha Manitowoc IY-Series, tubo distribuidor con sarro",
        "Generador de vapor del combi de banquetes que no enciende — descalcificación incompleta en Rational, probe de nivel de agua o elemento Alto-Shaam",
        "Vitrina del breakfast bar empañándose a las 6am — ciclo de defrost apagado, calentador de puerta o ventilador del evaporador",
        "Dispensador de hielo por piso atascado — motor de tornillo, termostato del bin o seguro de puerta",
        "Lavavajillas Hobart conveyor detenido mid-ciclo — relé del sensor, probe de nivel de agua, solenoide de drenaje",
        "Minibar caliente en habitación ocupada — módulo termoeléctrico o falla de compresor",
      ],
      sameDay:
        "Una máquina de hielo en bulk fallida antes de un banquete de boda son $4,000 en hielo de emergencia más una cola de quejas de huéspedes. Tratamos las emergencias de hotel como despacho prioritario de ingeniería — la mayoría de propiedades reciben respuesta dentro de dos horas, y nuestros camiones cargan partes para el equipo que operación de hotel verdaderamente rompe: máquinas de hielo, secadoras OPL, coolers de breakfast bar y hornos combi. Ingeniería tiene línea directa al despachador, no la cola del consumidor.",
      faqs: [
        { q: "¿Atienden hoteles bajo estándares de bandera?", a: "Sí. Trabajamos con propiedades bajo la mayoría de banderas mayores y seguimos estándares de ingeniería de la marca para sourcing de partes, documentación y tiempos de respuesta." },
        { q: "¿Pueden emitir un COI con additional-insured para nuestra propiedad?", a: "Sí. Nuestro COI base está en /credentials/coi.pdf y emitimos endorsements de additional-insured específicos para la propiedad dentro de un día hábil." },
        { q: "¿Manejan reparación de lavandería on-premise (OPL)?", a: "Sí — Speed Queen, Continental Girbau, UniMac, Milnor y Huebsch lavadoras, secadoras y planchadoras. Atendemos configuraciones soft-mount y rígidas." },
        { q: "¿Puede ingeniería llamar a un despachador after-hours?", a: "Sí. Nuestra línea de despacho está atendida 24/7 y las llamadas de hotel after-hours saltan la cola del consumidor." },
        { q: "¿Atienden refrigeración de minibar en habitación?", a: "Sí — termoeléctricos y de compresor de Indel B, Minibar Systems y Dometic, incluyendo coordinación de reemplazo cuarto por cuarto." },
        { q: "¿Sus técnicos pasan screening para acceso a pisos de huéspedes?", a: "Sí. Nuestros técnicos están screened y badged para acceso a pisos de huéspedes y back-of-house." },
      ],
    },
  },

  // ────────────────────────────────────────────────────────── 3. Laundromats
  {
    slug: "laundromats",
    industry: "laundromats",
    industryTitle: "Laundromat",
    metaTitle: "Laundromat Equipment Repair Miami",
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
          {
        q: "Can you support a multi-store route operator?",
        a: "Yes. Multi-store operators get a single dispatcher relationship across the portfolio with consolidated invoicing, scheduled PM rotations, and per-store equipment history. We have laundromat chain operators currently running 3, 5, and 8-store portfolios on our route service. Pricing is volume-based and quoted per portfolio after a baseline walkthrough.",
      },
      {
        q: "Do you handle coin and card payment system repair?",
        a: "Yes — Greenwald coin mechs, Setomatic SpyderWash card readers, CCI and ESD value-add systems, and Card Concepts mobile-payment retrofits. We diagnose mechanical jams, reader cleaning and replacement, and network bridge troubleshooting. Programming and merchant account work is on the operator's side — we handle the hardware.",
      },
      {
        q: "How do you price preventive maintenance on a 30-machine laundromat?",
        a: "Quarterly PM rotation on a 30-machine store runs $480 to $720 per quarter depending on equipment mix — covers door seal inspection, drain pump checks, dryer vent flow testing, gas valve combustion analysis on the dryer bank, and water heater anode rod inspection. PM finds the failures 2-3 weeks early so they get fixed on a scheduled visit instead of a Sunday morning emergency.",
      },
      {
        q: "Can you replace a Speed Queen front-load drum bearing on-site?",
        a: "Yes for SC and SF-series front-loads — drum bearing kits run $580 to $820 in parts and labor depending on capacity. The work is 4-6 hours per machine because the drum has to come out for the bearing seal replacement. We schedule bearing jobs for off-peak windows so the store does not lose weekend revenue.",
      },
      {
        q: "Do you carry Wascomat door lock modules on the truck?",
        a: "Yes for the EX and W4-series — door lock modules and the boot harnesses that fail because of water intrusion. Wascomat door locks are the number-one stocked part on the laundromat truck because the failure mode (chattering after a long spin) happens 3-4 times a year on a heavily-cycled machine.",
      },
],
    relatedServices: [
      "commercial-laundry-repair",
      "commercial-washer-repair",
      "commercial-dryer-repair",
    ],
    residentialAside:
      "Laundromat owners and managers often have residential laundry at home — for in-home washer/dryer service (LG, Samsung, Whirlpool, Speed Queen residential), [Berne Appliance Repair](https://bernerepair.com) handles that side.",
    es: {
      industry: "lavanderías",
      industryTitle: "Lavandería",
      metaTitle: "Reparación de Equipo de Lavandería Miami",
      metaDescription:
        "Reparación de lavadoras y secadoras Speed Queen, Huebsch, Wascomat, Continental Girbau en el Sur de Florida. Sistemas de monedas, tarjeta, flotas de ruta.",
      h1: "Reparación de Equipo de Lavandería en el Sur de Florida",
      hero: "Speed Queen, Huebsch, Wascomat, Continental — monedas, tarjeta y flotas de ruta.",
      whyUs:
        "Los dueños de lavanderías corren márgenes apretados en equipo que se cicla pesado — 8 a 14 ciclos por máquina por día en las tiendas bien manejadas. Trabajamos como trabajan los operadores: el mismo día para una hilera caída, partes en el camión para las fallas que verdaderamente pasan en Speed Queen y Huebsch front-load, y PMs cotizados para cadenas con servicio multi-location. No inflamos facturas con teatro de diagnóstico en una máquina donde el dueño ya sabe que es la bomba de drenaje.",
      equipment: [
        { name: "Lavadoras front-load", brands: ["Speed Queen", "Huebsch", "Wascomat", "Continental Girbau", "Electrolux Professional"], notes: "20–80lb de capacidad, soft-mount y rígidas" },
        { name: "Top-load y doble carga", brands: ["Speed Queen", "Maytag Commercial", "Whirlpool Commercial"], notes: "Estándar y doble carga para equipo de ruta" },
        { name: "Secadoras stack y sencillas", brands: ["Speed Queen", "Huebsch", "Dexter", "ADC", "Maytag Commercial"], notes: "Principalmente de gas; 30lb–75lb" },
        { name: "Sistemas de pago", brands: ["Greenwald", "Setomatic SpyderWash", "CCI", "ESD", "Card Concepts"], notes: "Coin slides, smart-card y retrofits de pago móvil" },
        { name: "Calentadores de agua", brands: ["AO Smith Commercial", "Rheem Commercial", "Bradford White"], notes: "Calentadores comerciales a gas y tankless" },
        { name: "OPL / drop-off service", brands: ["Continental Girbau", "Milnor", "UniMac"], notes: "Lavadoras y secadoras de mayor capacidad para wash-and-fold" },
      ],
      commonIssues: [
        "Speed Queen front-load que llena y drena pero no centrifuga — door lock switch o pressure switch",
        "Huebsch stack que corre fría — válvula de gas, ignitor o high-limit",
        "Wascomat con door lock chacarreando después del spin — fuga del boot entrando al arnés del seguro o módulo de door lock",
        "Sistema de tarjeta rechazando value-add — lector Setomatic o CCI, network bridge, o programa de token",
        "Bomba de drenaje haciendo ruido en una Continental Girbau — moneda o botón en la bomba, desgaste de balero o daño en impulsor",
        "Secadora de gas con ciclo corto — restricción de vent o longitud de vent fuera de spec para el BTU input",
        "Máquina de jabón/dryer sheets comiendo monedas — coin mech atorado o motor de vending",
      ],
      sameDay:
        "Cada hora que una lavadora está abajo son aproximadamente 1–2 ciclos perdidos. Para una tienda de 30 máquinas con 15 abajo un domingo en la mañana, eso es la diferencia entre un fin de semana rentable y una pila de quejas el lunes. Nuestro despacho de laundromat carga partes comunes de Speed Queen, Huebsch y Wascomat — door locks, bombas de drenaje, ignitors, válvulas de gas, motores — para que la primera visita sea usualmente la única.",
      faqs: [
        { q: "¿Atienden Speed Queen, Huebsch y Continental Girbau?", a: "Sí — esas tres más Wascomat y Electrolux Professional cubren casi toda máquina en una laundromat del Sur de Florida. Nuestros técnicos están entrenados en cada una." },
        { q: "¿Pueden soportar un operador multi-store de ruta?", a: "Sí. Soportamos operadores de laundromat multi-location con PM programado, reparaciones batched y facturación consolidada." },
        { q: "¿Trabajan en sistemas de pago de monedas y tarjeta?", a: "Sí — coin mechs Greenwald, Setomatic SpyderWash, CCI, ESD y Card Concepts smart-card. Incluyendo retrofits de tienda solo-monedas." },
        { q: "¿Y calentadores de agua comerciales a gas?", a: "Sí — AO Smith, Rheem y Bradford White comerciales a gas y tankless usados en plantas de agua caliente de laundromat." },
        { q: "¿Hacen equipo OPL drop-off / wash-and-fold?", a: "Sí — Continental Girbau, Milnor y UniMac de mayor capacidad usados para wash-and-fold y cuentas comerciales." },
        { q: "¿Pueden manejar instalación de equipo nuevo o reset de tienda?", a: "Sí — coordinación de instalación de lavadoras, secadoras, calentadores y venting." },
      ],
    },
  },

  // ────────────────────────────────────────────────────────── 4. Healthcare
  {
    slug: "healthcare",
    industry: "healthcare facilities",
    industryTitle: "Healthcare",
    metaTitle: "Medical & Healthcare Equipment Repair Miami",
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
          {
        q: "Are your technicians background-screened for HIPAA-sensitive environments?",
        a: "Yes. Our healthcare-route techs are background-screened, badged for clinical-area access, and trained in basic HIPAA awareness — they understand they are working in patient-care areas and do not engage with visible patient information. Badge documentation is on file with the facility's vendor management system.",
      },
      {
        q: "Can you service medical-grade refrigeration with temperature logging requirements?",
        a: "Yes. Vaccine refrigerators, blood bank units, and lab reagent storage with temperature monitoring (Helmer, Migali Scientific, So-Low) are part of our regular healthcare service. We document service against the facility's temperature log and provide calibration certificates on units we adjust. We do not handle USP 797/800 compounding pharmacy work — that requires specialized vendors.",
      },
      {
        q: "Do you provide service documentation that meets Joint Commission audit requirements?",
        a: "Yes. Service tickets include serial number, work performed, parts replaced with manufacturer info, and tech sign-off in the format the facility's biomed or facilities management team uses for Joint Commission documentation. We do not provide medical device validation — that is a regulated activity outside our scope.",
      },
      {
        q: "How fast can you respond to a kitchen equipment failure in a hospital cafeteria?",
        a: "Hospital cafeteria emergencies route to the next available restaurant-trained technician — typical response in Miami-Dade is 2-4 hours during business hours, longer for after-hours. We coordinate with the facility's food service director on entry through service corridors and timing around meal service rounds.",
      },
      {
        q: "Do you handle ice machine sanitization for infection control?",
        a: "Yes. Ice machine sanitization on Hoshizaki, Manitowoc, Scotsman, and Follett medical-grade units follows the manufacturer's sanitization cycle plus a discharge water test if the facility's infection control program requires one. We document the cycle and the chemical batch on the service ticket.",
      },
],
    featuredPage: {
      href: "/services/medical-lab-refrigeration-repair",
      title: "Medical & Lab Refrigeration Service",
      description:
        "Vaccine fridges, blood bank & reagent storage, lab and ULT freezers, pharmacy ice — the dedicated service page with response SLAs, typical repair costs and audit-documentation details.",
    },
    relatedServices: [
      "commercial-refrigeration-repair",
      "walk-in-cooler-repair",
      "ice-machine-repair",
      "commercial-oven-repair",
    ],
    residentialAside:
      "Concierge medicine practices and physician homes often install medical-grade refrigeration outside the clinic — [Berne's premium residential team at berne-repair.com](https://berne-repair.com) handles those private-residence installations.",
    es: {
      industry: "instalaciones de salud",
      industryTitle: "Salud",
      metaTitle: "Reparación de Equipo Médico Miami",
      metaDescription:
        "Refrigeradores de vacunas, refrigeración de laboratorio, cocinas de hospital y máquinas de hielo en el Sur de Florida. Helmer, Thermo Scientific. NDA y HIPAA-aware.",
      h1: "Reparación de Equipo de Salud en el Sur de Florida",
      hero: "Refrigeradores de vacunas, refrigeración de laboratorio, cocinas de hospital, hielo — discreto, documentado, certificado.",
      whyUs:
        "Las instalaciones de salud tienen una barra de proveedor distinta: requerimientos de documentación, expectativas de NDA, comportamiento HIPAA-aware del personal, y refrigeración que no es solo \"fría\" sino logged-and-validated. Trabajamos en el mismo equipo que un grupo de biomédica tocaría del lado de refrigeración — refrigeradores de plasma y vacunas Helmer, congeladores de laboratorio Thermo Scientific, hielo Follett de farmacia — y nos mantenemos fuera del scope regulado de dispositivo médico. Cuando una alarma de congelador se dispara a las 2am, nuestro despacho registra la llamada, el tiempo de respuesta y la resolución para su cadena de QA.",
      equipment: [
        { name: "Refrigeración de vacunas y farmacia", brands: ["Helmer", "Thermo Scientific", "Follett", "VWR", "Migali Scientific"], notes: "Refrigeradores de vacunas, congeladores de plasma, reach-ins grado farmacia" },
        { name: "Congeladores de laboratorio y ULT", brands: ["Thermo Scientific", "Helmer", "PHCbi (Panasonic)", "Stirling Ultracold"], notes: "Congeladores -20°C y -80°C (servicio mecánico, no biomed-cert)" },
        { name: "Cocina de hospital y cafetería", brands: ["Vulcan", "Hobart", "Rational", "Cleveland", "Alto-Shaam"], notes: "Hornos combi, lavavajillas, estufas, gabinetes de holding" },
        { name: "Máquinas de hielo (farmacia y nourishment)", brands: ["Follett", "Hoshizaki", "Manitowoc", "Scotsman"], notes: "Hielo nugget de farmacia, estaciones de nourishment en piso de paciente" },
        { name: "Cuartos fríos walk-in", brands: ["Bally", "Master-Bilt", "Polar King", "Kolpak"], notes: "Farmacia, almacenamiento adyacente, cocinas centrales" },
        { name: "Refrigeración de cafetería", brands: ["True", "Turbo Air", "Continental", "Beverage-Air"], notes: "Tray-line de paciente, cafetería retail, salas de descanso de personal" },
      ],
      commonIssues: [
        "Refrigerador de vacunas Helmer alarmando por excursión de temperatura — fuga de empaque, airflow del condensador o calibración del controlador",
        "Congelador Thermo Scientific -80°C con compresor corriendo 24/7 — fuga de refrigerante primera etapa, condensador sucio, ambiente alto",
        "Máquina de hielo Follett de farmacia sin producir nugget — motor de tornillo o distribución de agua",
        "Lavavajillas Hobart conveyor de cafetería disparando mid-servicio — probe de nivel, solenoide de drenaje o relé sensor",
        "Cooler walk-in de farmacia subiendo de noche — frecuencia de ciclo defrost o calibración",
        "Dispensador de hielo/agua en piso de paciente atascado — solenoide, filtro de agua o tornillo",
        "Generador de vapor del combi cafetería Rational sin encender — descalcificación vencida o probe de nivel",
      ],
      sameDay:
        "Una excursión de refrigerador de vacunas no es solo una pérdida financiera — es un evento regulatorio con papeleo adjunto. Nuestro despacho de salud está configurado para registrar la llamada, llevar un técnico de refrigeración onsite rápido, y producir documentación que su programa de QA pueda adjuntar al registro de excursión. El mismo día en refrigeración crítica; turnaround estándar en equipo de cafetería a menos que un servicio de comida de paciente esté impactado.",
      faqs: [
        { q: "¿Atienden refrigeración médica como Helmer y Thermo Scientific?", a: "Sí — del lado mecánico (compresor, refrigerante, controles, empaques). Coordinamos con su grupo de biomédica en cualquier cosa que cruce al scope de dispositivo médico validado." },
        { q: "¿Pueden firmar NDA y acknowledgment HIPAA?", a: "Sí. Clientes de salud regularmente requieren ambos y nuestro personal está orientado para comportamiento HIPAA-aware en pisos de paciente y áreas clínicas." },
        { q: "¿Proveen documentación de servicio para QA?", a: "Sí. Timestamps de llamada, tiempo de respuesta, técnico, partes reemplazadas y resolución se documentan y están disponibles en PDF para su cadena de QA." },
        { q: "¿Pueden manejar las máquinas de hielo de cafetería y farmacia en la misma cuenta?", a: "Sí — Hoshizaki y Manitowoc de cafetería y Follett nugget de farmacia son comunes en la misma cuenta de hospital. Atendemos ambos." },
        { q: "¿Sus técnicos están certificados EPA Sección 608?", a: "Sí — requerido para cualquier trabajo de refrigerante en vacunas, laboratorio y refrigeración walk-in." },
        { q: "¿Hacen reparación de ULT (-80°C)?", a: "Atendemos la refrigeración mecánica en unidades ULT Thermo, Helmer, PHCbi (Panasonic) y Stirling Ultracold." },
      ],
    },
  },

  // ────────────────────────────────────────────────────────── 5. Grocery
  {
    slug: "grocery",
    industry: "supermarkets and grocery stores",
    industryTitle: "Grocery & Supermarket",
    metaTitle: "Supermarket & Grocery Equipment Repair Miami",
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
          {
        q: "Can you handle multi-location grocery chain dispatch?",
        a: "Yes. Multi-location grocery operators get a single dispatcher relationship across the chain with consolidated billing, store-by-store equipment history, and PM rotation schedules that align with each store's slow-traffic windows. We currently service grocery chains running 4, 6, and 11 stores in South Florida on this model.",
      },
      {
        q: "Do you handle walk-in freezer compressor replacement?",
        a: "Yes — sealed-system work on walk-in freezers across Copeland, Tecumseh, and Bitzer platforms is part of our regular grocery service. Compressor jobs typically run $2,400 to $4,800 depending on size and refrigerant. We hold EPA Section 608 Universal certification and document refrigerant recovery on every system that opens.",
      },
      {
        q: "How quickly can you respond to a refrigeration emergency that threatens product loss?",
        a: "Grocery refrigeration emergencies are the top of the dispatch priority — typical response in Miami-Dade and Broward is under 90 minutes during business hours. We carry common Copeland and Tecumseh contactors, fan motors, and EC fan motors on the truck for first-visit fixes. Product-loss protection drives the schedule.",
      },
      {
        q: "Do you service open-front meat and deli cases?",
        a: "Yes — Hussmann, Hill Phoenix, and Kysor open-front meat cases plus the closed-glass deli display sections. Common failures are evap fan motors, defrost heaters, night-curtain motors, and door heaters on the glass section. We carry the high-failure parts for the platforms we see most.",
      },
      {
        q: "Can you support our store rack refrigeration with subcooling loops?",
        a: "Yes for parallel rack systems — Heatcraft, Hussmann, and Kysor rack platforms with subcooling and heat-recovery loops are part of our commercial refrigeration scope. Rack work is senior-tech and we send EPA-certified refrigeration specialists. Compressor and condenser fan work on rack systems is quoted separately from in-store case work.",
      },
],
    relatedServices: [
      "commercial-refrigeration-repair",
      "walk-in-cooler-repair",
      "walk-in-freezer-repair",
      "ice-machine-repair",
      "commercial-oven-repair",
    ],
    residentialAside:
      "Grocery managers and franchisees who run premium home kitchens (Sub-Zero, Wolf, Viking) can route home-side service through [Berne's premium residential operation](https://berne-repair.com).",
    es: {
      industry: "supermercados",
      industryTitle: "Supermercado",
      metaTitle: "Reparación de Equipo de Supermercado Miami",
      metaDescription:
        "Hussmann, Hill Phoenix, Master-Bilt — reparación de vitrinas y walk-ins en el Sur de Florida. Racks de refrigeración, deli, hielo — despacho el mismo día.",
      h1: "Reparación de Equipo de Supermercado en el Sur de Florida",
      hero: "Vitrinas, walk-ins, deli, racks de refrigeración, máquinas de hielo — cobertura nivel tienda.",
      whyUs:
        "Los supermercados tienen la mayor cantidad de refrigeración por pie cuadrado de cualquier vertical que servimos — y el mayor costo de falla cuando una sola vitrina multi-deck se cae un sábado. Nuestros técnicos trabajan en el mismo equipo que un contratista de refrigeración nacional tocaría: sistemas de rack paralelo, vitrinas multi-deck y reach-in, prep de deli, sistemas de hielo, walk-ins con loop sub-cooler. Somos la alternativa regional para gerentes de tienda que preferirían llamar a un teléfono que alguien sí contesta.",
      equipment: [
        { name: "Vitrinas (display cases)", brands: ["Hussmann", "Hill Phoenix", "Arneg", "Kysor Warren", "Tyler"], notes: "Multi-deck de lácteos/deli, frozen de baja temperatura, islas freezer, deli de servicio" },
        { name: "Racks de refrigeración", brands: ["Hussmann", "Hill Phoenix", "Heatcraft", "Copeland"], notes: "Sistemas de rack paralelo, sub-coolers, loops secundarios" },
        { name: "Walk-in coolers y freezers", brands: ["Bally", "Master-Bilt", "Kolpak", "Polar King", "Norlake"], notes: "Recibo, lácteos, produce, frozen, beer cave" },
        { name: "Deli y prepared foods", brands: ["Hobart", "Globe", "Bizerba"], notes: "Slicers, básculas, empacadoras, refrigeración de prep de deli" },
        { name: "Panadería y cocina in-store", brands: ["Vulcan", "Hobart", "Cleveland", "Rational"], notes: "Hornos combi, proofers, batidoras, freidoras para hot bar" },
        { name: "Máquinas de hielo y bebida", brands: ["Hoshizaki", "Manitowoc", "Scotsman"], notes: "Recibo, hot bar, estación de bebidas" },
        { name: "Vitrinas especializadas", brands: ["Federal Industries", "Structural Concepts", "Hussmann Specialty"], notes: "Casos de sushi, gelato, grab-and-go" },
      ],
      commonIssues: [
        "Vitrina multi-deck de lácteos a 50°F en vez de 36°F — frecuencia de ciclo defrost, evaporador engelado o presión del rack cayó después de un compresor que se sacó",
        "Vitrina frozen island Hussmann corriendo compresor pero sin baja de temperatura — fuga de refrigerante, válvula de expansión o falla de ventilador del condensador",
        "Mesa de prep de deli a 45°F — condensador sucio o motor de ventilador",
        "Alarma de baja presión del rack en el cuarto de equipo — compresor Copeland del sistema disparó por sobrecarga",
        "Piso del walk-in freezer escarchando — calentador de puerta, fuga de empaque o brecha de vapor barrier",
        "Máquina de hielo Hoshizaki del hot bar sin cosechar — switch de cortina de agua o termistor",
        "Vitrina Federal de sushi empañándose a las 9am — empaque o ventilador",
      ],
      sameDay:
        "Una falla de refrigeración en un supermercado no es un solo ticket — es un countdown de inventario para write-off. Vitrinas de lácteos y prepared-foods tienen horas, no días, antes de que el producto sea no vendible. Tratamos alarmas de refrigeración de supermercado como despacho prioritario, y nuestros camiones cargan los componentes en los que las vitrinas realmente fallan: motores de ventilador del condensador, evap fans, defrost terminators, válvulas de expansión, contactores y tarjetas comunes Hussmann/Hill Phoenix.",
      faqs: [
        { q: "¿Atienden racks de refrigeración y sistemas paralelos?", a: "Sí — Hussmann, Hill Phoenix, Heatcraft y sistemas de rack base Copeland incluyendo loops de sub-cooler." },
        { q: "¿Pueden responder a una alarma de temperatura el mismo día?", a: "Sí. Alarmas de temperatura de vitrina son despacho prioritario y usualmente reciben respuesta el mismo día en nuestra cobertura del Sur de Florida." },
        { q: "¿Manejan el equipo de panadería in-store y hot bar?", a: "Sí — Hobart, Vulcan, Rational, Cleveland para panadería y hot-bar. Mismo despacho, frecuentemente mismo técnico en un ticket combinado." },
        { q: "¿Pueden soportar operadores de supermercado multi-store?", a: "Sí — PM programado, facturación consolidada, ruteo de despacho multi-location." },
        { q: "¿Sus técnicos están EPA Sección 608 certificados?", a: "Sí — requerido para cualquier trabajo en vitrinas, walk-ins y sistemas de rack con refrigerante R-404A, R-448A o R-449A." },
        { q: "¿Hacen reparación de slicer y báscula de deli?", a: "Slicers Hobart, Globe y Bizerba y básculas Bizerba — sí, en la misma cuenta que refrigeración." },
      ],
    },
  },

  // ────────────────────────────────────────────────────────── 6. Schools
  {
    slug: "schools",
    industry: "schools and universities",
    industryTitle: "School & University",
    metaTitle: "School Cafeteria Equipment Repair Miami",
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
          {
        q: "Do you service equipment under the school district's procurement process?",
        a: "Yes. We work with school districts on PO-based invoicing, district-approved vendor onboarding, and the documentation requirements district procurement uses (W-9, COI naming the district, background-check records on technicians assigned to school sites). We support charter networks and private K-12 schools on the same procurement model.",
      },
      {
        q: "Can you schedule major repairs around the school calendar?",
        a: "Yes. Cafeteria walk-in coolers, dish machine motor work, and combi oven steam generator rebuilds get scheduled into school breaks — winter, spring, summer — so the cafeteria operation is not disrupted during instructional days. Emergency repairs during the school year happen between meal services.",
      },
      {
        q: "Do you handle the kitchen equipment in a high school football stadium concession?",
        a: "Yes — stadium concession equipment (fryers, hot-holding cabinets, ice machines, soda dispensers) is part of our regular service mix. Concession work typically clusters around event days, and we schedule PM service after Friday night games so the equipment is ready for Saturday tournament events.",
      },
      {
        q: "Are your technicians background-screened for K-12 campus access?",
        a: "Yes. Our school-route techs are background-screened to the standards district vendor programs require, badged for campus access, and aware of school-day protocols (no contact with students, escort by facilities staff during instructional hours). Documentation is on file with the district's vendor management office.",
      },
      {
        q: "Do you provide preventive-maintenance contracts for school food service?",
        a: "Yes. Annual PM contracts for K-12 cafeteria operations cover walk-in coil cleaning, dish machine descaling, combi oven steam generator service, fryer drain valve maintenance, and ice machine descaling. We schedule the work into school breaks and document service for the district's facilities management records.",
      },
],
    relatedServices: [
      "commercial-refrigeration-repair",
      "walk-in-cooler-repair",
      "commercial-oven-repair",
      "steamer-repair",
      "ice-machine-repair",
    ],
    residentialAside:
      "Faculty housing and on-campus residences run residential-grade laundry and kitchen equipment — [Berne Appliance Repair](https://bernerepair.com) handles those in-unit calls on the residential side.",
    es: {
      industry: "escuelas y universidades",
      industryTitle: "Escuela y Universidad",
      metaTitle: "Reparación de Cafetería Escolar Miami",
      metaDescription:
        "Reparación K-12 y universidad en el Sur de Florida — Cleveland, Vulcan, lavavajillas Hobart, walk-ins, coolers de leche en bulk. Técnicos con background-screen.",
      h1: "Reparación de Equipo Escolar y Universitario en el Sur de Florida",
      hero: "Cafeterías K-12, dining universitario, lavavajillas, walk-ins, leche en bulk — despacho district-friendly.",
      whyUs:
        "Las cocinas escolares tienen restricciones que ningún otro vertical tiene: una ventana de meal service medida en minutos, requisitos de volumen USDA, listas de vendor con background-screen, y un ciclo de presupuesto al que no le importa que el steamer se haya roto el martes. Trabajamos con directores de food-service del distrito y operaciones de dining universitario igual: PM programado en verano, vuelta rápida durante el ciclo escolar, partes en el camión para los steamers, marmitas y lavavajillas que verdaderamente se rompen, y documentación que cabe en sistemas de vendor del distrito.",
      equipment: [
        { name: "Cocción y producción batch", brands: ["Cleveland", "Vulcan", "Groen", "Crown Steam"], notes: "Marmitas de vapor jacketed, sartenes basculantes, steamers de presión, hornos de convección" },
        { name: "Hornos combi y convección", brands: ["Rational", "Vulcan", "Blodgett", "Alto-Shaam"], notes: "Cocción batch para tray-line de meal service" },
        { name: "Lavavajillas", brands: ["Hobart", "Champion", "Jackson", "Insinger"], notes: "Conveyor, flight-type, door-type — retorno de tray de alto volumen" },
        { name: "Walk-ins", brands: ["Bally", "Master-Bilt", "Kolpak", "Norlake"], notes: "Recibo, almacenamiento seco y lácteos" },
        { name: "Coolers de leche en bulk", brands: ["Norlake", "Beverage-Air", "Continental"], notes: "Cajas de 5-crate y 12-crate para tray-line" },
        { name: "Tray-line refrigerado y prep", brands: ["True", "Turbo Air", "Delfield"], notes: "Mesas de prep, cold-pans refrigerados, cases de leche" },
        { name: "Máquinas de hielo y bebida", brands: ["Hoshizaki", "Manitowoc", "Scotsman"], notes: "Cafetería y hielo de departamento atlético" },
      ],
      commonIssues: [
        "Marmita Cleveland steam-jacketed sin construir presión — probe de nivel de agua, steam-trap o válvula de alivio",
        "Lavavajillas Hobart CL44 conveyor atascado — relé, probe de nivel de agua o bomba",
        "Cooler de leche en bulk a 45°F antes del servicio de almuerzo — airflow del condensador, evap fan o puerta dejada abierta después del delivery",
        "Generador de vapor del combi Rational sin encender — descalcificación vencida o probe de nivel",
        "Walk-in freezer alarmando el fin de semana — falla de ciclo defrost o ventilador del condensador",
        "Tray-line cold-pan perdiendo temperatura durante el meal service — evap fan o carga de refrigerante",
        "Máquina de hielo del departamento atlético vacía — ciclo de cosecha Hoshizaki o válvula de entrada de agua",
      ],
      sameDay:
        "Una falla de lavavajillas durante meal service es un problema de volumen USDA en minutos. Configuramos despacho con food-service escolar en mente: ruteo prioritario para emergencias en servicio activo, scheduling batched para reparaciones entre comidas, y ventanas de PM en verano. La mayoría de cocinas de distrito reciben un técnico onsite el mismo día para fallas en servicio activo.",
      faqs: [
        { q: "¿Sus técnicos pasan background-screen para listas de vendor de distrito escolar?", a: "Sí. Nuestros técnicos pasan background screening estándar y coordinamos badging específico del distrito donde se requiera." },
        { q: "¿Pueden manejar PM district-wide en break de verano?", a: "Sí. PM de verano en múltiples cocinas escolares es servicio estándar para nosotros — programamos la ruta, documentamos cada cocina y entregamos reporte consolidado." },
        { q: "¿Atienden lavavajillas Hobart conveyor y steamers Cleveland?", a: "Sí — ambos son equipo staple en cafeterías escolares y nuestros camiones cargan partes comunes para cada uno." },
        { q: "¿Pueden atender dining universitario y equipo atlético en una cuenta?", a: "Sí. Commissaries de dining universitario, halls de dining residencial y refrigeración de concession atlético se manejan comúnmente bajo una cuenta." },
        { q: "¿Hacen servicio de cooler de leche en bulk?", a: "Sí — Norlake, Beverage-Air y Continental para tray-line K-12." },
        { q: "¿Emitirán un COI nombrando al distrito como additional insured?", a: "Sí. Endorsements de additional-insured para distritos escolares son rutina — turnaround es un día hábil." },
      ],
    },
  },

  // ────────────────────────────────────────────────────────── 7. Gyms / Fitness
  {
    slug: "gyms",
    industry: "gyms and fitness centers",
    industryTitle: "Gym & Fitness Center",
    metaTitle: "Gym Smoothie Bar & Cafe Equipment Repair Miami",
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
          {
        q: "Do you service smoothie bar and juice bar equipment in gyms?",
        a: "Yes — Vitamix XL blenders, Hamilton Beach commercial blenders, Bunn juice dispensers, and the under-counter refrigeration that holds prepped fruit and dairy. Smoothie bar equipment runs hot because of the duty cycle, and we carry common blender drive sockets and motor brushes on the truck for same-visit fixes.",
      },
      {
        q: "How do you handle ice machine descaling in a high-humidity gym environment?",
        a: "Quarterly descaling on Hoshizaki and Manitowoc units is the recommended cycle for gym installations because the high humidity around the locker rooms and pool areas accelerates mineral buildup. We descale with a nickel-safe acid solution and document each cycle on the service ticket so the facility manager has a maintenance log for the franchise audit.",
      },
      {
        q: "Can you service equipment in gyms operating under franchise brand standards?",
        a: "Yes. Most major fitness franchise brands have equipment standards for their juice bars and refreshment areas, and we work within those standards on parts sourcing and documentation. Service records get filed in the franchisee's brand-audit binder along with the rest of the operational compliance documentation.",
      },
      {
        q: "Do you service towel laundry equipment in gym facilities?",
        a: "Yes — on-premise laundry for gym towel programs typically runs Speed Queen or Continental Girbau commercial washers and gas dryers. We service the washers and dryers on the same dispatch as the juice bar and refreshment equipment, which lets the facility batch maintenance into a single visit.",
      },
      {
        q: "Can you handle pool-area ice machines and outdoor refrigeration?",
        a: "Yes. Outdoor and pool-area refrigeration is part of our regular service scope. Outdoor units fail more often because of salt air corrosion on condenser coils — we quote PM coil cleaning at 6-month intervals on outdoor refrigeration to extend service life. Stainless cabinets and outdoor-rated compressors hold up better than indoor units pressed into outdoor service.",
      },
],
    relatedServices: [
      "commercial-refrigeration-repair",
      "ice-machine-repair",
      "commercial-laundry-repair",
      "espresso-machine-repair",
    ],
    residentialAside:
      "Gym members and owners running premium home kitchens often pair this account with [Berne's premium residential team at berne-repair.com](https://berne-repair.com) for Sub-Zero, Wolf, Viking, and Miele service at home.",
    es: {
      industry: "gimnasios y centros fitness",
      industryTitle: "Gimnasio y Fitness",
      metaTitle: "Reparación Smoothie Bar y Cafe de Gym Miami",
      metaDescription:
        "Refrigeración de smoothie bar, estaciones de licuadora, juice press, coolers de bebida retail — reparación de equipo de gym en el Sur de Florida.",
      h1: "Reparación de Equipo de Gimnasio y Fitness en el Sur de Florida",
      hero: "Smoothie bars, estaciones de licuadora, juice press, coolers retail, lavandería de locker-room.",
      whyUs:
        "Las operaciones modernas de fitness corren un programa retail de comida y bebida — smoothie bar, coolers de merchandise branded, cocina ocasional para prepared foods — y una pequeña lavandería para servicio de toallas. El equipo es light commercial, pero el costo de falla es real: los miembros notan cuando la línea de smoothie post-workout está cerrada. Trabajamos este segmento eficientemente — un técnico, un camión, la refrigeración small-format y equipo de bebida que la mayoría de gyms corren, más el lado de lavandería de locker-room cuando se necesite.",
      equipment: [
        { name: "Refrigeración de smoothie bar", brands: ["True", "Turbo Air", "Beverage-Air", "Delfield"], notes: "Prep undercounter, merchandiser de puerta de vidrio" },
        { name: "Licuadoras y prep de alto volumen", brands: ["Vitamix", "Blendtec Commercial", "Hamilton Beach Commercial"], notes: "Estaciones de licuadora cara al miembro y refrigeración de estación" },
        { name: "Juice press y cold-press", brands: ["Goodnature", "Sana", "Angel"], notes: "Juicers cold-press y merchandisers de jugo refrigerados" },
        { name: "Coolers de bebida retail", brands: ["True", "Beverage-Air", "Coolers Pepsi/Coca-Cola (asset)"], notes: "Merchandisers de puerta de vidrio, asset coolers branded" },
        { name: "Hielo y post-workout", brands: ["Hoshizaki", "Manitowoc", "Follett"], notes: "Nugget de smoothie bar, hielo de estación de agua" },
        { name: "Lavandería de locker-room", brands: ["Speed Queen", "Whirlpool Commercial", "Maytag Commercial"], notes: "Lavadoras y secadoras de servicio de toallas" },
        { name: "Cocina light / prepared foods", brands: ["Vulcan", "Turbo Air", "Hobart"], notes: "Donde el gym corre un hot-bar o breakfast cafe" },
      ],
      commonIssues: [
        "Merchandiser del smoothie bar a 50°F — airflow del condensador bloqueado atrás del merchandiser",
        "Acople de drive de licuadora Vitamix o Blendtec destruido — reemplazo y servicio de base",
        "Refrigeración del juice press en el área de prep drifteando — falla pequeña de condensador comercial",
        "Asset cooler branded (Pepsi/Coca-Cola) sin enfriar — la cola de servicio de Pepsi/Coca-Cola puede ser lenta; cubrimos la refrigeración mecánicamente si el acuerdo de asset lo permite",
        "Secadora de locker-room con ciclo largo — filtro de lint, longitud de vent o banda patinando",
        "Dispensador de hielo nugget atascado — tornillo Follett o switch de puerta",
        "Máquina de espresso del juice bar sin calentar — elemento o pressure switch",
      ],
      sameDay:
        "Un smoothie bar cerrado el lunes a las 7pm no es una emergencia financiera como un walk-in muerto en un restaurante — pero sí es un tema de experiencia de miembro, y los operadores de gym de cadena lo toman en serio. Respondemos el mismo día para fallas de revenue activo (el smoothie bar no puede vender) y al siguiente día para equipo de soporte. La mayoría de llamadas de gym son reparaciones de una visita.",
      faqs: [
        { q: "¿Atienden licuadoras comerciales Vitamix y Blendtec?", a: "Sí — acople de drive, motor, servicio de contenedor para Vitamix Drink Machine y Quiet One, Blendtec Commercial y Hamilton Beach Commercial." },
        { q: "¿Manejan juicers cold-press (Goodnature, Sana)?", a: "Sí — atendemos la hidráulica del press, refrigeración del juice merchandiser y equipo del área de embotellado." },
        { q: "¿Hacen reparación de lavandería de locker-room?", a: "Sí — Speed Queen, Whirlpool Commercial y Maytag Commercial de servicio de toallas." },
        { q: "¿Y los asset coolers branded (Pepsi, Coca-Cola)?", a: "Atendemos la refrigeración mecánicamente — el acuerdo de asset con la compañía de bebida gobierna ownership y si el servicio es facturable al gym o a la compañía." },
        { q: "¿Pueden soportar una cadena multi-location?", a: "Sí — despacho multi-club con facturación consolidada." },
        { q: "¿Cargan partes Hoshizaki y Manitowoc para máquinas de hielo de gym?", a: "Sí — partes de servicio comunes en el camión para ambos." },
      ],
    },
  },

  // ────────────────────────────────────────────────────────── 8. Breweries
  {
    slug: "breweries",
    industry: "breweries and distilleries",
    industryTitle: "Brewery & Distillery",
    metaTitle: "Brewery Glycol & Taproom Repair Miami",
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
          {
        q: "Do you handle glycol chiller service for brewery fermenters?",
        a: "Yes. Glycol chiller systems on Pro Refrigeration, G&D Chillers, and Mueller platforms are part of our brewery service scope. Chiller work is senior-tech and we send EPA Section 608 Universal certified refrigeration specialists. We service the chiller, the glycol distribution loop, and the temperature controls — full system scope rather than just the box.",
      },
      {
        q: "Can you repair walk-in cold rooms for finished beer storage?",
        a: "Yes. Walk-in cold rooms for packaged beer storage use standard commercial refrigeration platforms (Heatcraft, Russell, Bohn) and are part of our regular service mix. The temperature setpoints for finished beer storage (38-42 F) are looser than restaurant walk-ins, but the consequence of failure is the same: product loss.",
      },
      {
        q: "Do you service taproom draft systems and CO2 distribution?",
        a: "Taproom-side draft system work — keg couplers, FOB detectors, faucet cleaning, line balancing — is typically handled by a draft-specific specialist, but we service the cold room refrigeration that holds the kegs, the glycol chiller that runs the long-draw beer lines, and the ice machine behind the bar. We coordinate with the operator's draft-line specialist on scheduling.",
      },
      {
        q: "How do you handle a brewery cold room emergency on a weekend?",
        a: "Brewery cold room emergencies get the top of the dispatch queue for the same reason restaurant walk-ins do — finished product is at risk. Typical weekend response in Miami-Dade and Broward is 2-4 hours. We carry common Copeland and Tecumseh compressor contactors and EC fan motors on the truck for first-visit fixes.",
      },
      {
        q: "Do you service the kitchen equipment in brewpub operations?",
        a: "Yes. Brewpub kitchens run the same restaurant equipment we service every day — Vulcan and Wolf ranges, Pitco fryers, Hobart dish machines, Hoshizaki ice machines. The brewpub model lets us dispatch a single technician for both the brewery glycol chiller and the kitchen line on the same visit, which most operators prefer over coordinating two vendors.",
      },
],
    relatedServices: [
      "commercial-refrigeration-repair",
      "walk-in-cooler-repair",
      "ice-machine-repair",
    ],
    residentialAside:
      "Brewery owners and head brewers often run premium beverage refrigeration at home (Sub-Zero wine columns, Marvel beverage centers) — [Berne's premium residential team](https://berne-repair.com) handles those installations.",
    es: {
      industry: "cervecerías y destilerías",
      industryTitle: "Cervecería y Destilería",
      metaTitle: "Reparación Glycol y Taproom Cervecería Miami",
      metaDescription:
        "Chillers de glycol, kegerators, cuartos fríos walk-in, refrigeración de taproom y hielo para cervecerías y destilerías en el Sur de Florida.",
      h1: "Reparación de Cervecería y Destilería en el Sur de Florida",
      hero: "Chillers de glycol, kegerators, cuartos fríos, refrigeración de taproom — dispensing y servicio cold-side.",
      whyUs:
        "Somos un partner de servicio cold-side para cervecerías y destilerías — chillers de glycol alimentando fermentadores, almacenamiento walk-in para kegs y empaque, dispense de kegerator y tap-tower, y la cocina del taproom si hay una. No certificamos pressure vessels ni hacemos trabajo de proceso específico de cervecería (soldadura de jacket de fermentador, validación de CIP, recert de pressure-relief) — eso es scope de ingeniería de cervecería. Somos la gente que llamas cuando el chiller de glycol baja 10°F durante la noche o el kegerator del taproom deja de enfriar un viernes a las 4pm.",
      equipment: [
        { name: "Chillers de glycol", brands: ["Pro Refrigeration", "G&D Chillers", "Penguin Chillers", "Mueller"], notes: "Servicio del lado de refrigeración comercial; no pressure-vessel cert" },
        { name: "Cuartos fríos walk-in", brands: ["Bally", "Polar King", "Master-Bilt", "Kolpak"], notes: "Almacenamiento de kegs, empaque, finished-goods cold" },
        { name: "Kegerators y refrigeración tap-tower", brands: ["Perlick", "Glastender", "Krowne", "True"], notes: "Sistemas direct-draw y de torre remota" },
        { name: "Refrigeración de taproom", brands: ["True", "Turbo Air", "Beverage-Air"], notes: "Merchandisers, undercounter, back-bar" },
        { name: "Máquinas de hielo", brands: ["Hoshizaki", "Manitowoc", "Scotsman"], notes: "Hielo de bar y área de empaque" },
        { name: "Cocina de taproom (donde aplique)", brands: ["Vulcan", "Hobart", "Pitco", "True"], notes: "Equipo de cocina con menú limitado" },
        { name: "Soporte de líneas CO2 / gas", brands: ["Micro Matic", "Perlick"], notes: "Servicio de gas blender, presión de dispense (lado mecánico)" },
      ],
      commonIssues: [
        "Chiller de glycol perdiendo temperatura durante la noche — airflow del condensador, carga de refrigerante o compresor del chiller",
        "Walk-in de kegs drifteando arriba — falla de evap fan o empaque de puerta en una puerta de mucho ciclo",
        "Tap-tower haciendo espuma después de pour largo — temperatura del loop chiller, bomba de recirculación o aislamiento de la torre",
        "Kegerator del taproom a 50°F — cleaning de condensador vencido o falla de compresor",
        "Máquina de hielo del bar vacía durante un rush de viernes — ciclo de cosecha Hoshizaki o válvula de entrada de agua",
        "Merchandiser back-bar sin iluminar — LED ballast o switch de puerta",
        "Piso del walk-in escarchando en humedad de verano — calentador de puerta, empaque o vapor barrier",
      ],
      sameDay:
        "Una falla de equipo del taproom durante un rush de viernes es una emergencia de piso de ventas. Tratamos llamadas de taproom como prioridad el mismo día en fines de semana, especialmente para foaming de tap-tower, falla de kegerator y máquinas de hielo del bar fuera de servicio. El lado de fermentación (drift de loop glycol, walk-in de kegs) recibe turnaround rápido pero usualmente es ticket para mañana en la mañana a menos que la producción esté en riesgo.",
      faqs: [
        { q: "¿Atienden chillers de glycol?", a: "Sí — del lado de refrigeración comercial. Chillers Pro Refrigeration, G&D, Penguin y Mueller. No hacemos certificación de pressure-vessel ni trabajo de jacket de fermentador." },
        { q: "¿Pueden arreglar foaming de tap-tower?", a: "Sí — foaming de tap-tower usualmente es tema de temperatura, presión o aislamiento. Diagnosticamos los tres en la primera visita." },
        { q: "¿Manejan walk-ins de keg cooler?", a: "Sí — Bally, Polar King, Master-Bilt y Kolpak son comunes en cervecerías del Sur de Florida y atendemos las cuatro." },
        { q: "¿Y equipo específico de destilería?", a: "Almacenamiento refrigerado, condenser cooling, kegerator y taproom — sí. El proceso del still y pot-still es scope de ingeniería de destilería, no nuestro." },
        { q: "¿Pueden responder el mismo día a una falla de taproom de viernes?", a: "Sí. Emergencias de taproom de viernes y sábado son despacho prioritario." },
        { q: "¿Cargan partes de kegerator en el camión?", a: "Partes comunes — motores de ventilador, kits de cleaning de condensador, termostatos, empaques — sí." },
      ],
    },
  },

  // ────────────────────────────────────────────────────────── 9. Country Clubs
  {
    slug: "country-clubs",
    industry: "country clubs and private hospitality venues",
    industryTitle: "Country Club & Private Hospitality",
    metaTitle: "Country Club Kitchen & Ice Repair Miami",
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
          {
        q: "Can you service the equipment across multiple country club outlets in one visit?",
        a: "Yes. Country club properties typically have a main dining room kitchen, a grill kitchen, a halfway-house concession, a banquet kitchen, and a pool-side cabana. We schedule maintenance rotation across all five outlets in a single multi-day visit so the property's F&B director coordinates with a single dispatcher rather than juggling multiple vendors.",
      },
      {
        q: "Do you handle ice machines on the halfway house and pool deck?",
        a: "Yes — outdoor and remote-location ice machines (Hoshizaki, Manitowoc, Scotsman, Follett) are part of our regular service scope. Outdoor units fail more often because of salt air corrosion on condenser coils — we quote PM coil cleaning at 6-month intervals on outdoor ice machines to extend service life.",
      },
      {
        q: "Can you support member-event work outside normal kitchen schedules?",
        a: "Yes. Country club banquet operations cluster around member events that often happen on weekends — weddings, member tournaments, charity events. We dispatch around the event calendar so the kitchen line is ready for service Friday afternoon and we are not in the kitchen during plated service.",
      },
      {
        q: "Do you provide quarterly PM for the entire F&B operation?",
        a: "Yes. Quarterly PM contracts for country club F&B cover the dining room and grill kitchens, banquet kitchen, halfway-house concession, and pool cabana — refrigeration coil cleaning, walk-in door seal inspection, ice machine descaling, fryer drain valve service, and combustion analyzer checks on the gas line. PM finds the failures 2-3 weeks early so they get fixed on a scheduled visit.",
      },
      {
        q: "How do you handle the kitchen equipment in the men's grill versus the main dining room?",
        a: "Same technicians, same parts inventory, different dispatch windows. Main dining room work happens late morning before service; men's grill work happens mid-afternoon between lunch and evening service. We coordinate with the F&B director on each outlet's service window so the work fits the operation rather than disrupting it.",
      },
],
    relatedServices: [
      "commercial-refrigeration-repair",
      "walk-in-cooler-repair",
      "ice-machine-repair",
      "commercial-oven-repair",
    ],
    residentialAside:
      "Club members can route home-side appliance service through [Berne's premium residential team at berne-repair.com](https://berne-repair.com); same factory training on Sub-Zero, Wolf, Viking, Thermador, and Miele, same dispatch back-office.",
    es: {
      industry: "country clubs y venues privados de hospitalidad",
      industryTitle: "Country Club y Hospitalidad Privada",
      metaTitle: "Reparación Cocina y Hielo Country Club Miami",
      metaDescription:
        "Cocinas de catering de country club, refrigeración de banquetes, máquinas de hielo, lavavajillas — servicio discreto y NDA-friendly en el Sur de Florida.",
      h1: "Reparación de Country Club y Hospitalidad en el Sur de Florida",
      hero: "Cocinas de catering, refrigeración de banquetes, cuartos de hielo, halfway-house — prioridad en evento de socios.",
      whyUs:
        "Los country clubs corren en eventos de socios y fines de semana de torneo — el tipo de operaciones donde una falla de refrigeración un viernes antes de un banquete de 200 personas el sábado es una llamada del board of governors. Trabajamos como trabajan los clubes privados: discretos, NDA-friendly, COI archivado con el club, despacho after-hours ruteado por el director de F&B o ingeniero del club, y personal que conoce la diferencia entre un área cara al socio y un corredor back-of-house. La mayoría de clubes del Sur de Florida que servimos nos tienen en PM trimestral más on-call.",
      equipment: [
        { name: "Refrigeración de banquete y catering", brands: ["True", "Traulsen", "Turbo Air", "Delfield"], notes: "Reach-in, walk-in, prep de banquete, refrigeración de plating" },
        { name: "Cocina principal y línea", brands: ["Vulcan", "Wolf", "Garland", "Rational", "Hobart"], notes: "Hornos combi, estufas, salamandras, lavavajillas" },
        { name: "Halfway house y snack bar", brands: ["True", "Hatco", "Hobart", "Vulcan"], notes: "Cocina small-format, hot-holding, refrigeración merchandiser" },
        { name: "Pool y servicio de cabana", brands: ["True", "Beverage-Air", "Hoshizaki"], notes: "Refrigeración de cabana, hielo para servicio de piscina" },
        { name: "Máquinas de hielo", brands: ["Hoshizaki", "Manitowoc", "Scotsman", "Kold-Draft"], notes: "Cocina principal, bares, cuartos de hielo, halfway-house" },
        { name: "Bar y bebida", brands: ["Perlick", "Krowne", "Glastender", "True"], notes: "Refrigeración under-bar, torres de cerveza, glass chillers" },
        { name: "Walk-ins", brands: ["Bally", "Master-Bilt", "Kolpak"], notes: "Prep de banquete, bebida, adyacente a wine-cellar" },
      ],
      commonIssues: [
        "Walk-in de banquete drifteando arriba antes de un rehearsal dinner de viernes — ventilador del condensador, evap fan o carga de refrigerante",
        "Generador de vapor del combi Rational de cocina principal sin encender — descalcificación vencida o probe de nivel",
        "Máquina de hielo del halfway-house vacía — cosecha Hoshizaki o flotador",
        "Kegerator Perlick del cabana bar a 50°F — cleaning de condensador o compresor",
        "Refrigeración de plating de banquete drifteando entre cursos — evap fan Delfield o termostato",
        "Máquina de hielo chewer Kold-Draft del pool bar sin producir — válvula de entrada de agua o sarro",
        "Glass chiller Glastender del bar principal a temperatura ambiente — compresor o refrigerante",
      ],
      sameDay:
        "Los eventos de socios manejan el calendario del country club — y el costo de una falla de refrigeración día del evento es reputacional, no solo operacional. Nuestro despacho trata emergencias de club como tratamos las de hotel: ruteo prioritario, cobertura after-hours y familiaridad del personal con comportamiento discreto en propiedad. La mayoría de clubes que servimos tienen un schedule de PM standing y una línea directa al despacho para emergencias.",
      faqs: [
        { q: "¿Firmarán un NDA para nuestro club?", a: "Sí. NDAs de privacidad de socios y confidencialidad de eventos son estándar para los clubes que servimos." },
        { q: "¿Podemos tener un schedule de PM standing?", a: "Sí — PM trimestral es la configuración más común para los clubes del Sur de Florida que servimos, programado para evitar fines de semana de evento." },
        { q: "¿Manejan emergencias de evento de socios after-hours?", a: "Sí. El despacho after-hours rutea por nuestra línea 24/7 y conecta directo a un despachador, no una cola." },
        { q: "¿Pueden atender el halfway-house y la cocina principal en una cuenta?", a: "Sí — halfway-house, cocina principal, pool/cabana, banquete y todos los bares en una cuenta es la configuración típica." },
        { q: "¿Soportan equipo en private dining rooms y casas de socios?", a: "Servimos la propiedad del club; las casas privadas de socios están fuera de scope para nuestra división comercial (servicio residencial lo maneja Berne Appliance Repair)." },
        { q: "¿Sus técnicos son presentables para acceso a área de socios?", a: "Sí. Uniformados, badged y orientados al protocolo de área de socios." },
      ],
    },
  },

  // ────────────────────────────────────────────────────────── 10. Multi-Family
  {
    slug: "multi-family",
    industry: "multi-family and apartment buildings",
    industryTitle: "Multi-Family & Apartment",
    metaTitle: "Multi-Family Laundry & Common-Area Repair Miami",
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
          {
        q: "Do you service common-area laundry rooms in multi-family properties?",
        a: "Yes — common-area laundry installations on Speed Queen, Huebsch, and Continental Girbau commercial washers and dryers are part of our regular multi-family service. We coordinate with the property's laundry-service vendor (Coinmach, CSC ServiceWorks, WASH Multifamily) when the property is on a leased-equipment program, or service direct when the property owns the machines.",
      },
      {
        q: "Can you handle in-unit appliance repair across the property in one visit?",
        a: "Yes. Property managers schedule multi-unit work orders into a single dispatch day — we route the technician through all units that need service that day rather than dispatching separately for each unit. Consolidated invoicing per work-order batch reduces the property's admin overhead.",
      },
      {
        q: "How do you handle resident notification for in-unit work?",
        a: "Property management handles resident notification through their standard 24/48-hour notice process — we coordinate with the leasing or maintenance office on entry codes, key access, or escort arrangements. Our technicians sign in at the property office on arrival and sign out at completion with a service ticket for each unit visited.",
      },
      {
        q: "Do you provide turnover service on appliances between residents?",
        a: "Yes. Turnover inspections on in-unit refrigerators, ranges, dishwashers, washers, and dryers find the failures before the new resident moves in. Typical turnover service is a 20-30 minute inspection per unit with a written list of needed repairs and replacement recommendations. Property managers batch turnover service into the make-ready cycle.",
      },
      {
        q: "Can you handle the central laundry-room ventilation and gas dryer compliance?",
        a: "Yes. Central laundry rooms with gas dryers require periodic vent inspection (12-18 months on a heavy-use installation) for fire safety, plus gas combustion analysis on the dryer bank. We document inspection records for the property's fire safety file and provide the report format the property insurance carrier requires.",
      },
],
    relatedServices: [
      "commercial-laundry-repair",
      "commercial-washer-repair",
      "commercial-dryer-repair",
      "commercial-refrigeration-repair",
    ],
    residentialAside:
      "Resident-owned in-unit washer/dryer and kitchen appliances are residential-grade — [Berne Appliance Repair at bernerepair.com](https://bernerepair.com) handles those individual-unit calls separately from the common-area laundry contract.",
    es: {
      industry: "multifamiliar y edificios de apartamentos",
      industryTitle: "Multifamiliar y Apartamentos",
      metaTitle: "Reparación Multifamiliar Lavandería y Amenidades Miami",
      metaDescription:
        "Lavandería de área común, cocinas de amenidades, appliances de unidad en multifamiliar del Sur de Florida. Speed Queen, contratos de service para building managers.",
      h1: "Reparación de Equipo Multifamiliar y Apartamentos en el Sur de Florida",
      hero: "Lavandería de área común, cocinas de amenidades, appliances in-unit — contratos de servicio para building managers.",
      whyUs:
        "Los property managers de multifamiliar y edificios de apartamentos necesitan un proveedor que maneje las tres capas de equipo que vienen con el territorio: el cuarto de lavandería de área común (Speed Queen, Whirlpool Commercial), la demo kitchen del amenity floor o coffee bar, y los appliances in-unit que regresan como tickets de residente. Trabajamos directamente con property management — una cuenta, un COI, facturación mensual consolidada — y nuestro personal sabe entrar a unidades ocupadas en el schedule del manager, no del residente.",
      equipment: [
        { name: "Lavandería de área común", brands: ["Speed Queen", "Whirlpool Commercial", "Maytag Commercial", "Huebsch"], notes: "Lavadoras y secadoras coin- y card-op, sistemas value-add card" },
        { name: "Cocina de amenity floor", brands: ["GE Profile", "Whirlpool", "Bosch", "Sub-Zero", "Wolf"], notes: "Demo kitchen, coffee bar, equipo grado residencial en espacios de amenidad" },
        { name: "Refrigeración de amenidades", brands: ["True", "Beverage-Air", "GE", "Whirlpool"], notes: "Pool bar, breakfast nook, coffee bar, cuarto de paquetes" },
        { name: "Máquinas de hielo y agua", brands: ["Hoshizaki", "Manitowoc", "Scotsman"], notes: "Hielo de amenity floor y pool deck" },
        { name: "Sistemas de pago card (lavandería)", brands: ["CSC ServiceWorks", "WASH", "Greenwald", "Setomatic"], notes: "Donde se requiere coordinación con el vendor de lavandería" },
        { name: "Appliances in-unit (tickets de residente)", brands: ["GE", "Whirlpool", "Frigidaire", "Samsung", "LG"], notes: "Refrigeradores, estufas, lavavajillas, lavadoras, secadoras — manejado bajo cuenta de property management" },
        { name: "Compactores de cuarto de basura", brands: ["Marathon", "Wastequip", "Compactor Management"], notes: "Servicio de compactor y equipo de chute" },
      ],
      commonIssues: [
        "Secadora Speed Queen de área común con ciclo largo — válvula de gas, ignitor o restricción de vent (venting de gas multi-family es tema recurrente)",
        "Lector de tarjeta de la lavandería sin aceptar value-add — lector CSC, WASH o Setomatic; a veces network bridge",
        "Hielera de cocina de amenidad vacía para el fin de semana — ciclo de cosecha Hoshizaki o válvula de entrada",
        "Refrigerador in-unit caliente — típicamente ventilador del condensador o compresor; común en GE, Whirlpool, Samsung",
        "Lavavajillas in-unit goteando a unidad vecina — empaque de bomba o de puerta; usualmente escalado por property",
        "Máquina de espresso del coffee bar de amenidad sin calentar — elemento o pressure switch",
        "Compactor del trash room atascado — sistema hidráulico o limit switch",
      ],
      sameDay:
        "El servicio multifamiliar corre en urgencia distinta a restaurante u hotel — la mayoría de tickets in-unit son non-emergency y batched, pero fallas de área común (cuarto de lavandería, cocina de amenidad) y tickets de fuga de agua son prioridad el mismo día. Nuestro despacho de property management está construido alrededor de scheduling batched para trabajo in-unit más ruteo de emergencia para fugas, refrigeradores no-cool en unidades ocupadas y fallas de amenity floor.",
      faqs: [
        { q: "¿Trabajan directo con compañías de property management?", a: "Sí. Cuenta única, COI único con management company nombrada, facturación mensual consolidada y ruteo de ticket de residente vía property." },
        { q: "¿Pueden hacer reparación de appliance in-unit bajo la cuenta del edificio?", a: "Sí — tickets reportados por residente ruteados vía property management. Entramos en el schedule del management, no del residente, a menos que el management company especifique otra cosa." },
        { q: "¿Atienden la lavandería de área común?", a: "Sí — Speed Queen, Whirlpool Commercial, Maytag Commercial, Huebsch coin- y card-op incluyendo coordinación con programas CSC/WASH." },
        { q: "¿Atienden appliances grado residencial en cocinas de amenidad?", a: "Sí — demo kitchens de amenity floor frecuentemente tienen GE Profile, Whirlpool, Bosch, Sub-Zero y Wolf grado residencial. Atendemos las cinco." },
        { q: "¿Pueden manejar emergencia de fuga en unidad ocupada el mismo día?", a: "Sí. Tickets de fuga de agua en unidades ocupadas son despacho prioritario." },
        { q: "¿Cubren servicio de compactor de cuarto de basura?", a: "Sí — equipo Marathon, Wastequip y Compactor Management." },
      ],
    },
  },
]

export function getIndustryProfile(slug: string): IndustryProfile | undefined {
  return INDUSTRY_PROFILES.find((p) => p.slug === slug)
}

export const INDUSTRY_PROFILE_SLUGS = INDUSTRY_PROFILES.map((p) => p.slug)

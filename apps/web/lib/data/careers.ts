/**
 * Open roles for Berne Commercial Repair. Surfaced on /careers + emitted as
 * JobPosting JSON-LD for Google for Jobs integration.
 *
 * Commercial site bias: roles emphasize commercial refrigeration, walk-ins,
 * ice machines, commercial cooking and laundry — not residential appliance
 * repair. Berne Commercial recruits separately from Berne Appliance Repair
 * (the residential arm at bernerepair.com / berne-repair.com) because the
 * skill profile is different (CFESA-style commercial vs MSA-style
 * residential).
 *
 * Refresh POSTING_DATE every 30 days so listings stay valid in Google for
 * Jobs. validThrough is 90 days out.
 */
export type JobRole = {
  slug: string
  title: string
  titleEs: string
  employmentType:
    | "FULL_TIME"
    | "PART_TIME"
    | "CONTRACTOR"
    | "TEMPORARY"
    | "INTERN"
    | "VOLUNTEER"
    | "PER_DIEM"
    | "OTHER"
  pay: {
    label: string
    labelEs: string
    min: number
    max: number
    unitText: "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR"
  }
  workLocation: string
  workLocationEs: string
  blurb: string
  blurbEs: string
  description: string
  descriptionEs: string
  requirements: string[]
  requirementsEs: string[]
  skills: string
  skillsEs: string
}

export const POSTING_DATE = "2026-05-20"
export const VALID_THROUGH = "2026-08-18"

export const CAREERS: JobRole[] = [
  {
    slug: "senior-commercial-refrigeration-technician",
    title: "Senior Commercial Refrigeration Technician",
    titleEs: "Técnico senior de refrigeración comercial",
    employmentType: "FULL_TIME",
    pay: {
      label: "Competitive base + on-call + bonuses",
      labelEs: "Base competitiva + guardia + bonos",
      min: 75000,
      max: 130000,
      unitText: "YEAR",
    },
    workLocation: "Mobile — Miami-Dade, Broward, Palm Beach commercial accounts",
    workLocationEs: "Móvil — cuentas comerciales en Miami-Dade, Broward, Palm Beach",
    blurb:
      "Walk-in coolers, freezers, ice machines, line-side refrigeration. EPA 608 Universal required. CFESA-friendly experience preferred.",
    blurbEs:
      "Cuartos fríos, congeladores, máquinas de hielo, refrigeración de línea. Se requiere EPA 608 Universal. Experiencia tipo CFESA preferida.",
    description:
      "Senior commercial refrigeration technician for the Berne Commercial Repair enterprise dispatch. Day-to-day: walk-in coolers / freezers, reach-ins, prep-table refrigeration, ice machines (Manitowoc / Hoshizaki / Scotsman / Ice-O-Matic), and line-side refrigeration in restaurants, supermarkets, hotels, and food production. W-2 employment with vendor-ready paperwork (COI, W-9, vendor onboarding). On-call rotation pays a guaranteed premium per call. Continuous training through Marcone Servicers Association and OEM channels (Manitowoc, Hoshizaki, True, Hobart).",
    descriptionEs:
      "Técnico senior de refrigeración comercial para el despacho corporativo de Berne Commercial Repair. Día a día: cuartos fríos / congeladores, refrigeradores reach-in, refrigeración de mesa de preparación, máquinas de hielo (Manitowoc / Hoshizaki / Scotsman / Ice-O-Matic) y refrigeración de línea en restaurantes, supermercados, hoteles y producción de alimentos. Empleo W-2 con documentación lista para vendors (COI, W-9, onboarding de vendor). La rotación de guardia paga un premium garantizado por llamada. Capacitación continua a través de Marcone Servicers Association y canales OEM (Manitowoc, Hoshizaki, True, Hobart).",
    requirements: [
      "5+ years commercial refrigeration field experience",
      "EPA Section 608 Universal — current",
      "Comfortable on sealed systems: brazing, vacuum, charge, leak isolation",
      "Walk-in coolers / freezers / ice machine teardown + rebuild",
      "Valid Florida driver license + clean MVR",
      "Bilingual (English + Spanish) strongly preferred",
    ],
    requirementsEs: [
      "5+ años de experiencia de campo en refrigeración comercial",
      "EPA Sección 608 Universal — vigente",
      "Cómodo con sistemas sellados: soldadura fuerte, vacío, carga, aislamiento de fugas",
      "Desmontaje y reconstrucción de cuartos fríos / congeladores / máquinas de hielo",
      "Licencia de conducir de Florida válida + MVR limpio",
      "Bilingüe (inglés + español) muy preferido",
    ],
    skills:
      "Commercial refrigeration, EPA 608, brazing, sealed-system diagnostics, walk-in coolers, ice machines, Manitowoc, Hoshizaki, True, restaurant-equipment service",
    skillsEs:
      "Refrigeración comercial, EPA 608, soldadura fuerte, diagnóstico de sistemas sellados, cuartos fríos, máquinas de hielo, Manitowoc, Hoshizaki, True, servicio de equipos de restaurante",
  },
  {
    slug: "commercial-cooking-equipment-technician",
    title: "Commercial Cooking Equipment Technician",
    titleEs: "Técnico de equipos de cocina comercial",
    employmentType: "FULL_TIME",
    pay: {
      label: "Competitive base + per-call + bonuses",
      labelEs: "Base competitiva + por servicio + bonos",
      min: 65000,
      max: 115000,
      unitText: "YEAR",
    },
    workLocation: "Mobile — Miami-Dade, Broward, Palm Beach commercial kitchens",
    workLocationEs:
      "Móvil — cocinas comerciales en Miami-Dade, Broward, Palm Beach",
    blurb:
      "Combi ovens, convection ovens, ranges, fryers, steamers, dishmachines. Gas + electric. CFESA-aligned training.",
    blurbEs:
      "Hornos combi, hornos de convección, estufas, freidoras, vaporizadores, lavavajillas. Gas + eléctrico. Capacitación alineada con CFESA.",
    description:
      "Field service technician for commercial cooking equipment in restaurants, hotels, and institutional kitchens. Combi ovens (Rational, Alto-Shaam, Henny Penny), convection ovens, gas + electric ranges, deck ovens, fryers, steamers, holding cabinets, dishmachines (Hobart, CMA, Jackson). Diagnose, repair, perform planned-maintenance and tune-ups. Working knowledge of gas valves, ignition systems, controllers (Honeywell, Robertshaw, Bonnet), and code-compliant gas piping. We're CFESA-aligned and pay for CFESA certification.",
    descriptionEs:
      "Técnico de servicio de campo para equipos de cocina comercial en restaurantes, hoteles y cocinas institucionales. Hornos combi (Rational, Alto-Shaam, Henny Penny), hornos de convección, estufas a gas + eléctricas, hornos de plataforma, freidoras, vaporizadores, gabinetes de mantenimiento, lavavajillas (Hobart, CMA, Jackson). Diagnostica, repara, realiza mantenimiento planificado y puesta a punto. Conocimientos prácticos de válvulas de gas, sistemas de encendido, controladores (Honeywell, Robertshaw, Bonnet) y tubería de gas conforme a código. Estamos alineados con CFESA y pagamos la certificación CFESA.",
    requirements: [
      "3+ years commercial cooking equipment field experience",
      "Comfortable with gas + electric systems, control wiring, ignition diagnostics",
      "Brand exposure: Rational, Alto-Shaam, Henny Penny, Hobart, Vulcan",
      "CFESA certification a plus (company-paid to obtain)",
      "Valid Florida driver license + clean MVR",
      "Bilingual (English + Spanish) preferred",
    ],
    requirementsEs: [
      "3+ años de experiencia de campo en equipos de cocina comercial",
      "Cómodo con sistemas a gas + eléctricos, cableado de control, diagnóstico de encendido",
      "Exposición a marcas: Rational, Alto-Shaam, Henny Penny, Hobart, Vulcan",
      "Certificación CFESA un plus (pagada por la empresa)",
      "Licencia de conducir de Florida válida + MVR limpio",
      "Bilingüe (inglés + español) preferido",
    ],
    skills:
      "Commercial cooking equipment, combi ovens, gas systems, ignition diagnostics, Rational, Hobart, Alto-Shaam, controller wiring, CFESA",
    skillsEs:
      "Equipos de cocina comercial, hornos combi, sistemas a gas, diagnóstico de encendido, Rational, Hobart, Alto-Shaam, cableado de controlador, CFESA",
  },
  {
    slug: "enterprise-dispatch-coordinator",
    title: "Enterprise Dispatch Coordinator",
    titleEs: "Coordinador de despacho corporativo",
    employmentType: "FULL_TIME",
    pay: {
      label: "$22 – $28 / hr",
      labelEs: "$22 – $28 / hora",
      min: 22,
      max: 28,
      unitText: "HOUR",
    },
    workLocation: "In-office — Hallandale Beach HQ",
    workLocationEs: "En oficina — Hallandale Beach (sede)",
    blurb:
      "Multi-location dispatch for restaurants, supermarkets, hotels, property managers. NTE / not-to-exceed workflows. ServiceChannel / Corrigo / FacilitySource experience a strong plus.",
    blurbEs:
      "Despacho multi-ubicación para restaurantes, supermercados, hoteles, administradores de propiedades. Flujos NTE / no exceder. Experiencia con ServiceChannel / Corrigo / FacilitySource un gran plus.",
    description:
      "Coordinate commercial dispatch across restaurant chains, supermarket banners, hospitality groups, and property managers. Triage inbound work-orders from enterprise platforms (ServiceChannel, Corrigo, FacilitySource, ServiceTitan, FieldEdge), assign to the right tech based on credentials and geography, monitor NTE budgets and follow-ups, and close out with full documentation. Translate field findings into IVR-acceptable notes for asset owners. Build relationships with facility managers who call you by name.",
    descriptionEs:
      "Coordina el despacho comercial entre cadenas de restaurantes, supermercados, grupos de hospitalidad y administradores de propiedades. Clasifica órdenes de trabajo entrantes desde plataformas corporativas (ServiceChannel, Corrigo, FacilitySource, ServiceTitan, FieldEdge), asigna al técnico correcto según credenciales y geografía, monitorea presupuestos NTE y seguimientos, y cierra con documentación completa. Traduce hallazgos de campo en notas aceptables para los dueños de activos. Construye relaciones con gerentes de instalaciones que te llaman por nombre.",
    requirements: [
      "2+ years dispatch / service-coordinator experience in commercial field service",
      "ServiceChannel / Corrigo / FacilitySource / Ecotrak fluency",
      "Strong written English (NTE responses, status updates, IVR check-ins)",
      "Bilingual (English + Spanish) strongly preferred",
      "Calm under pressure — restaurants don't wait",
    ],
    requirementsEs: [
      "2+ años de experiencia en despacho / coordinación de servicio en campo comercial",
      "Fluidez en ServiceChannel / Corrigo / FacilitySource / Ecotrak",
      "Inglés escrito sólido (respuestas NTE, actualizaciones de estado, check-ins IVR)",
      "Bilingüe (inglés + español) muy preferido",
      "Calma bajo presión — los restaurantes no esperan",
    ],
    skills:
      "Enterprise dispatch, ServiceChannel, Corrigo, FacilitySource, NTE management, commercial service coordination, written customer communication",
    skillsEs:
      "Despacho corporativo, ServiceChannel, Corrigo, FacilitySource, gestión NTE, coordinación de servicio comercial, comunicación escrita al cliente",
  },
  {
    slug: "vendor-onboarding-account-coordinator",
    title: "Vendor Onboarding & Account Coordinator",
    titleEs: "Coordinador de onboarding de vendor y cuentas",
    employmentType: "FULL_TIME",
    pay: {
      label: "$24 – $30 / hr + benefits track",
      labelEs: "$24 – $30 / hora + plan de beneficios",
      min: 24,
      max: 30,
      unitText: "HOUR",
    },
    workLocation: "In-office — Hallandale Beach HQ",
    workLocationEs: "En oficina — Hallandale Beach (sede)",
    blurb:
      "Onboard new chain accounts. COI, W-9, MSA / vendor agreements, insurance certificates, banking + AP setup. Detail-oriented, paperwork-positive.",
    blurbEs:
      "Onboarding de nuevas cuentas corporativas. COI, W-9, MSA / acuerdos de vendor, certificados de seguro, configuración bancaria y de AP. Orientado al detalle, positivo con el papeleo.",
    description:
      "Bring new enterprise accounts (restaurants, chains, property management portfolios, food production) into Berne Commercial cleanly. Submit COI updates per portfolio insurance requirements, complete W-9s and tax docs, return executed MSAs and vendor agreements, set up banking + AP routing, and maintain ongoing compliance. Be the human interface between the facility-management ops team at the client and our dispatch / accounting. The right person is rigorous, calm, and treats compliance paperwork as a craft.",
    descriptionEs:
      "Lleva nuevas cuentas corporativas (restaurantes, cadenas, portafolios de administración de propiedades, producción de alimentos) a Berne Commercial limpiamente. Envía actualizaciones de COI según los requisitos de seguros del portafolio, completa W-9 y documentos fiscales, devuelve MSA y acuerdos de vendor ejecutados, configura banca + enrutamiento de AP, y mantiene el cumplimiento continuo. Sé la interfaz humana entre el equipo de operaciones de administración de instalaciones en el cliente y nuestro despacho / contabilidad. La persona adecuada es rigurosa, calmada y trata el papeleo de cumplimiento como un oficio.",
    requirements: [
      "2+ years experience with vendor onboarding, AP, or commercial account management",
      "Comfortable with COI / insurance documentation, W-9, MSA review",
      "Familiarity with at least one enterprise portal (ServiceChannel, Corrigo, FacilitySource, Ecotrak, ServiceTitan)",
      "Strong written English + spreadsheet fluency",
      "Bilingual (English + Spanish) preferred",
    ],
    requirementsEs: [
      "2+ años de experiencia con onboarding de vendor, AP o gestión de cuentas comerciales",
      "Cómodo con documentación COI / seguros, W-9, revisión de MSA",
      "Familiaridad con al menos un portal corporativo (ServiceChannel, Corrigo, FacilitySource, Ecotrak, ServiceTitan)",
      "Inglés escrito sólido + fluidez con hojas de cálculo",
      "Bilingüe (inglés + español) preferido",
    ],
    skills:
      "Vendor onboarding, COI management, W-9 / tax documents, MSA review, enterprise portals, AP coordination, commercial account management",
    skillsEs:
      "Onboarding de vendor, gestión de COI, W-9 / documentos fiscales, revisión de MSA, portales corporativos, coordinación de AP, gestión de cuentas comerciales",
  },
]

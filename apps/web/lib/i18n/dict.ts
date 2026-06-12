import type { Locale } from "./config"

type Dict = {
  nav: {
    services: string
    industries: string
    brands: string
    serviceAreas: string
    becomeClient: string
    about: string
    contact: string
    requestDispatch: string
  }
  cta: {
    requestService: string
    callNow: string
    becomeClient: string
    requestDispatch: string
  }
  hero: {
    eyebrow: string
    title: string
    description: string
    highlights: {
      serviceCall: string
      sameDay: string
      licensed: string
      refrigeration: string
    }
  }
  sections: {
    servicesEyebrow: string
    servicesTitle: string
    servicesDescription: string
    allServices: string
    industriesEyebrow: string
    industriesTitle: string
    industriesDescription: string
    allIndustries: string
    whyUsEyebrow: string
    whyUsTitle: string
    whyUsDescription: string
    brandsEyebrow: string
    brandsTitle: string
    brandsDescription: string
    trustedBy: string
    trustedByDisclaimer: string
    dispatchEyebrow: string
    dispatchTitle: string
    dispatchDescription: string
    faqTitle: string
    faqDescription: string
    credentialsEyebrow: string
    credentialsTitle: string
    credentialsDescription: string
    teamEyebrow: string
    teamTitle: string
    teamDescription: string
    founderEyebrow: string
    founderTitle: string
    founderQuote: string
  }
  form: {
    contactName: string
    phone: string
    email: string
    address: string
    city: string
    company: string
    service: string
    selectPlaceholder: string
    brand: string
    model: string
    urgency: string
    urgencyEmergency: string
    urgencyUrgent: string
    urgencyScheduled: string
    urgencyEstimate: string
    issue: string
    issuePlaceholder: string
    preferredTime: string
    preferredTimePlaceholder: string
    moreDetails: string
    requiredNote: string
    errorBeforePhone: string
    errorAfterPhone: string
    smsConsent: string
    submit: string
    submitting: string
    success: string
    successDescription: string
    successResponse: string
    successCall: string
    regarding: string
    serviceCallNote: string
    required: string
  }
  whyUs: {
    fast: { title: string; body: string }
    enterprise: { title: string; body: string }
    refrigeration: { title: string; body: string }
    coverage: { title: string; body: string }
    repairs: { title: string; body: string }
    experienced: { title: string; body: string }
  }
  founder: {
    name: string
    role: string
    description: string
  }
  footer: {
    services: string
    company: string
    serviceAreas: string
    viewAll: string
    copyright: (year: number) => string
    serviceCall: string
  }
}

const en: Dict = {
  nav: {
    services: "Services",
    industries: "Industries",
    brands: "Brands",
    serviceAreas: "Service Areas",
    becomeClient: "Become a Client",
    about: "About",
    contact: "Contact",
    // One name for the one conversion action, sitewide (ES already unified).
    requestDispatch: "Request Service",
  },
  cta: {
    requestService: "Request Service",
    callNow: "Call Now",
    becomeClient: "Become a Client",
    requestDispatch: "Request Service",
  },
  hero: {
    eyebrow: "South Florida commercial dispatch",
    title: "Commercial Equipment Repair in South Florida",
    description:
      "Commercial emergency response across Miami-Dade, Broward, and Palm Beach — same-day dispatch, after-hours support, NDA-friendly for hotels and restaurants.",
    highlights: {
      serviceCall: "Commercial service call: $89",
      sameDay: "Same-day response — emergency dispatch within hours",
      licensed: "Licensed & insured",
      refrigeration: "Refrigeration specialists",
    },
  },
  sections: {
    servicesEyebrow: "Services",
    servicesTitle: "Commercial equipment we repair",
    servicesDescription:
      "Refrigeration, restaurant equipment, commercial laundry and back-of-house systems — across South Florida.",
    allServices: "All services",
    industriesEyebrow: "Industries",
    industriesTitle: "Built for commercial operations",
    industriesDescription:
      "Enterprise dispatch, vendor-ready reporting and high-volume operational coverage.",
    allIndustries: "All industries",
    whyUsEyebrow: "Why Berne Commercial",
    whyUsTitle: "A service organization, not a handyman",
    whyUsDescription:
      "We operate like a commercial vendor — designed to support restaurants, production facilities and enterprise clients at scale.",
    brandsEyebrow: "Brands",
    brandsTitle: "Commercial brands we service",
    brandsDescription:
      "Factory-trained technicians for the brands that run commercial operations across South Florida.",
    trustedBy: "Trusted by commercial clients and national brands",
    trustedByDisclaimer:
      "Our team has provided service for locations associated with these brands.",
    dispatchEyebrow: "Online Dispatch",
    dispatchTitle: "Request commercial service",
    dispatchDescription:
      "Submit a dispatch request and a coordinator will follow up to confirm the service window. For emergency outages, please call dispatch directly.",
    faqTitle: "Commercial repair questions",
    faqDescription:
      "Common questions from restaurants, production facilities and enterprise clients.",
    credentialsEyebrow: "Licensed · Insured · Certified",
    credentialsTitle: "Vendor-ready credentials",
    credentialsDescription:
      "Restaurants, chains, property managers and facility teams need vendors that pass procurement. We do.",
    teamEyebrow: "Team",
    teamTitle: "The technicians on the trucks",
    teamDescription:
      "Refrigeration specialists, restaurant equipment techs, ice machine and commercial laundry pros — built for the work other shops walk away from.",
    founderEyebrow: "Founder",
    founderTitle:
      "An engineering-built service company. We take on the hard work other shops walk away from.",
    founderQuote:
      "I'm an engineer by training, and so is the team I built. That's why we take on the equipment most South Florida shops won't — complex refrigeration loops, control-board level diagnostics, commercial laundry systems, walk-in rebuilds. Berne Commercial is backed by 11 years and 29,000+ services from the Berne family, with 18 technicians on the trucks today.",
  },
  form: {
    contactName: "Contact name",
    phone: "Phone",
    email: "Email",
    address: "Service address",
    city: "City",
    company: "Company name",
    service: "Service type",
    selectPlaceholder: "Select…",
    brand: "Brand",
    model: "Equipment model",
    urgency: "Urgency",
    urgencyEmergency: "Emergency / same-day",
    urgencyUrgent: "Urgent (within 24h)",
    urgencyScheduled: "Scheduled",
    urgencyEstimate: "Estimate only",
    issue: "What's happening with the equipment?",
    issuePlaceholder:
      "Error codes, leaks, noises, last service — anything you have.",
    preferredTime: "Preferred service window (optional)",
    preferredTimePlaceholder: "e.g. today 2–4 PM, or tomorrow morning",
    moreDetails: "More details (optional)",
    requiredNote: "Fields marked * are required.",
    errorBeforePhone: "We couldn't send your request. Please try again, or call",
    errorAfterPhone: "— dispatch answers 24/7.",
    smsConsent:
      "By submitting, you agree to receive service messages from Berne Commercial. Reply STOP to opt out, HELP for help. Msg & data rates may apply.",
    submit: "Request Service",
    submitting: "Sending…",
    success: "Dispatch request received",
    successDescription:
      "A dispatcher will contact you shortly to confirm the service window. For emergency service, please also call our dispatch line.",
    successResponse: "Same-day response — emergency dispatch within hours.",
    successCall: "Call dispatch",
    regarding: "Regarding",
    serviceCallNote:
      "Commercial service call: $89 · Free with approved repair",
    required: "required",
  },
  whyUs: {
    fast: {
      title: "Fast dispatch",
      body: "Emergency same-day response across Miami-Dade, Broward and Palm Beach.",
    },
    enterprise: {
      title: "Enterprise-ready",
      body: "Vendor onboarding, COI, multi-location reporting and chain coverage.",
    },
    refrigeration: {
      title: "Commercial refrigeration specialists",
      body: "Walk-ins, prep tables, ice machines and deep freeze systems.",
    },
    coverage: {
      title: "South Florida coverage",
      body: "Miami, Fort Lauderdale, West Palm Beach and surrounding cities.",
    },
    repairs: {
      title: "Repairs & replacements",
      body: "From component-level service to full equipment replacement coordination.",
    },
    experienced: {
      title: "Experienced technicians",
      body: "Factory-trained on the brands that run commercial kitchens.",
    },
  },
  founder: {
    name: "Eugene Bernitsky",
    role: "Founder & Operator",
    description: "Engineer by training. Built Berne Commercial to run on dispatch, paperwork and engineering discipline — not on word-of-mouth.",
  },
  footer: {
    services: "Services",
    company: "Company",
    serviceAreas: "Service Areas",
    viewAll: "View all service areas →",
    copyright: (y) => `© ${y} Berne Commercial Repair. All rights reserved.`,
    serviceCall: "Commercial service call: $89",
  },
}

const es: Dict = {
  nav: {
    services: "Servicios",
    industries: "Industrias",
    brands: "Marcas",
    serviceAreas: "Áreas de servicio",
    becomeClient: "Hacerse cliente",
    about: "Nosotros",
    contact: "Contacto",
    requestDispatch: "Solicitar servicio",
  },
  cta: {
    requestService: "Solicitar servicio",
    callNow: "Llamar ahora",
    becomeClient: "Hacerse cliente",
    requestDispatch: "Solicitar servicio",
  },
  hero: {
    eyebrow: "Despacho comercial del Sur de Florida",
    title: "Reparación de Equipo Comercial en el Sur de Florida",
    description:
      "Respuesta comercial de emergencia en Miami-Dade, Broward y Palm Beach — despacho el mismo día, soporte fuera de horario, NDA-friendly para hoteles y restaurantes.",
    highlights: {
      serviceCall: "Llamada de servicio comercial: $89",
      sameDay: "Respuesta el mismo día — despacho de emergencia en horas",
      licensed: "Con licencia y asegurado",
      refrigeration: "Especialistas en refrigeración",
    },
  },
  sections: {
    servicesEyebrow: "Servicios",
    servicesTitle: "Equipo comercial que reparamos",
    servicesDescription:
      "Refrigeración, equipo de restaurante, lavandería comercial y sistemas de back-of-house — en todo el Sur de Florida.",
    allServices: "Todos los servicios",
    industriesEyebrow: "Industrias",
    industriesTitle: "Hecho para operaciones comerciales",
    industriesDescription:
      "Despacho corporativo, reportes para vendors y cobertura de alto volumen operacional.",
    allIndustries: "Todas las industrias",
    whyUsEyebrow: "Por qué Berne Commercial",
    whyUsTitle: "Una empresa de servicio, no un handyman",
    whyUsDescription:
      "Operamos como un vendor comercial — diseñado para apoyar restaurantes, plantas de producción y clientes corporativos a gran escala.",
    brandsEyebrow: "Marcas",
    brandsTitle: "Marcas comerciales que reparamos",
    brandsDescription:
      "Técnicos certificados de fábrica para las marcas que mueven las operaciones comerciales del Sur de Florida.",
    trustedBy: "Confían en nosotros clientes comerciales y marcas nacionales",
    trustedByDisclaimer:
      "Nuestro equipo ha brindado servicio a locales asociados con estas marcas.",
    dispatchEyebrow: "Despacho en Línea",
    dispatchTitle: "Solicite servicio comercial",
    dispatchDescription:
      "Envíe una solicitud de despacho y un coordinador se comunicará para confirmar la ventana de servicio. Para emergencias, llame directamente al despacho.",
    faqTitle: "Preguntas frecuentes",
    faqDescription:
      "Preguntas habituales de restaurantes, plantas de producción y clientes corporativos.",
    credentialsEyebrow: "Licenciados · Asegurados · Certificados",
    credentialsTitle: "Credenciales listas para vendors",
    credentialsDescription:
      "Restaurantes, cadenas, administradores de propiedad y equipos de facility necesitan vendors que pasen procurement. Lo hacemos.",
    teamEyebrow: "Equipo",
    teamTitle: "Los técnicos que viajan en los trucks",
    teamDescription:
      "Especialistas en refrigeración, técnicos de equipo de restaurante, máquinas de hielo y lavandería comercial — preparados para el trabajo que otros talleres no aceptan.",
    founderEyebrow: "Fundador",
    founderTitle:
      "Una empresa de servicio construida por ingenieros. Tomamos el trabajo difícil que otros talleres rechazan.",
    founderQuote:
      "Soy ingeniero de formación, igual que el equipo que armé. Por eso tomamos el equipo que la mayoría de los talleres del Sur de Florida rechazan — loops de refrigeración complejos, diagnóstico a nivel de control board, sistemas de lavandería comercial, reconstrucciones de walk-in. Berne Commercial está respaldado por 11 años y más de 29,000 servicios de la familia Berne, con 18 técnicos en los trucks hoy.",
  },
  form: {
    contactName: "Nombre de contacto",
    phone: "Teléfono",
    email: "Email",
    address: "Dirección de servicio",
    city: "Ciudad",
    company: "Nombre de la empresa",
    service: "Tipo de servicio",
    selectPlaceholder: "Seleccione…",
    brand: "Marca",
    model: "Modelo del equipo",
    urgency: "Urgencia",
    urgencyEmergency: "Emergencia / mismo día",
    urgencyUrgent: "Urgente (en 24h)",
    urgencyScheduled: "Programado",
    urgencyEstimate: "Solo estimado",
    issue: "¿Qué está pasando con el equipo?",
    issuePlaceholder:
      "Códigos de error, fugas, ruidos, último servicio — todo lo que tenga.",
    preferredTime: "Ventana de servicio preferida (opcional)",
    preferredTimePlaceholder: "p. ej. hoy 2–4 PM, o mañana por la mañana",
    moreDetails: "Más detalles (opcional)",
    requiredNote: "Los campos marcados con * son obligatorios.",
    errorBeforePhone:
      "No pudimos enviar su solicitud. Inténtelo de nuevo o llame al",
    errorAfterPhone: "— el despacho responde 24/7.",
    smsConsent:
      "Al enviar, acepta recibir mensajes de servicio de Berne Commercial. Responda STOP para darse de baja, HELP para ayuda. Pueden aplicar tarifas de mensajes y datos.",
    submit: "Solicitar servicio",
    submitting: "Enviando…",
    success: "Solicitud de despacho recibida",
    successDescription:
      "Un despachador se comunicará pronto para confirmar la ventana de servicio. Para servicio de emergencia, llame también a nuestra línea de despacho.",
    successResponse:
      "Respuesta el mismo día — despacho de emergencia en cuestión de horas.",
    successCall: "Llamar a despacho",
    regarding: "Asunto",
    serviceCallNote:
      "Llamada de servicio comercial: $89 · Gratis con la reparación aprobada",
    required: "requerido",
  },
  whyUs: {
    fast: {
      title: "Despacho rápido",
      body: "Respuesta de emergencia el mismo día en Miami-Dade, Broward y Palm Beach.",
    },
    enterprise: {
      title: "Listo para corporativos",
      body: "Onboarding de vendor, COI, reportes multi-locación y cobertura de cadenas.",
    },
    refrigeration: {
      title: "Especialistas en refrigeración comercial",
      body: "Walk-ins, prep tables, máquinas de hielo y sistemas de congelación profunda.",
    },
    coverage: {
      title: "Cobertura en el Sur de Florida",
      body: "Miami, Fort Lauderdale, West Palm Beach y ciudades aledañas.",
    },
    repairs: {
      title: "Reparaciones y reemplazos",
      body: "Desde servicio a nivel de componente hasta coordinación de reemplazo de equipo completo.",
    },
    experienced: {
      title: "Técnicos con experiencia",
      body: "Certificados de fábrica en las marcas que mueven cocinas comerciales.",
    },
  },
  founder: {
    name: "Eugene Bernitsky",
    role: "Fundador y Operador",
    description: "Ingeniero de formación. Construyó Berne Commercial para operar con despacho, papeleo y disciplina de ingeniería — no con boca-a-boca.",
  },
  footer: {
    services: "Servicios",
    company: "Empresa",
    serviceAreas: "Áreas de servicio",
    viewAll: "Ver todas las áreas →",
    copyright: (y) => `© ${y} Berne Commercial Repair. Todos los derechos reservados.`,
    serviceCall: "Llamada de servicio comercial: $89",
  },
}

const dicts: Record<Locale, Dict> = { en, es }

export function t(locale: Locale): Dict {
  return dicts[locale]
}

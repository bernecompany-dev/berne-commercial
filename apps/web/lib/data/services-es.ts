import type { Service } from "./services"

type ServiceI18n = Partial<
  Pick<Service, "title" | "shortTitle" | "summary" | "longDescription" | "bullets" | "faqs">
>

export const servicesEs: Record<string, ServiceI18n> = {
  "commercial-refrigeration-repair": {
    title: "Reparación de Refrigeración Comercial",
    shortTitle: "Refrigeración Comercial",
    summary:
      "Servicio de refrigeración el mismo día para restaurantes, supermercados, plantas de producción y clientes corporativos.",
    longDescription:
      "Berne Commercial Repair brinda servicio a todo tipo de sistema de refrigeración comercial en el Sur de Florida — desde walk-in coolers y freezers hasta unidades reach-in, prep tables, refrigeradores de exhibición y sistemas de congelación profunda. Nuestros técnicos de refrigeración están certificados de fábrica para las marcas que dominan las cocinas comerciales: Hoshizaki, Manitowoc, Scotsman, Turbo Air, True, Traulsen, Beverage-Air, Continental, Delfield y más.",
    bullets: [
      "Walk-in coolers y freezers",
      "Reach-in coolers y freezers",
      "Prep tables y refrigeradores de exhibición",
      "Refrigeración de congelación profunda",
      "Detección de fugas de refrigerante y recarga",
      "Servicio de compresor, condensador y evaporador",
    ],
    faqs: [
      {
        q: "¿Ofrecen reparación de refrigeración comercial el mismo día?",
        a: "Sí. Nuestro despacho opera en todo el Sur de Florida con respuesta el mismo día para refrigeración comercial — restaurantes, plantas de producción y cuentas corporativas.",
      },
      {
        q: "¿Cuánto cuesta una llamada de servicio de refrigeración comercial?",
        a: "Nuestra llamada de servicio comercial es $89 y se aplica al costo de la reparación aprobada.",
      },
      {
        q: "¿Qué marcas de refrigeración comercial reparan?",
        a: "Hoshizaki, Manitowoc, Scotsman, Turbo Air, True, Traulsen, Beverage-Air, Continental, Delfield y la mayoría de marcas comerciales principales.",
      },
    ],
  },
  "walk-in-cooler-repair": {
    title: "Reparación de Walk-In Cooler",
    shortTitle: "Walk-In Coolers",
    summary:
      "Servicio de emergencia de walk-in cooler — pérdida de temperatura, sellos de puerta, fallas de compresor, fugas de refrigerante.",
    longDescription:
      "Un walk-in cooler que falla pone en riesgo inventario y ingresos. Berne Commercial Repair despacha técnicos de refrigeración equipados para diagnóstico de walk-in cooler, recuperación de refrigerante, trabajo eléctrico y reemplazo de componentes. Atendemos cada configuración común — unidades interiores y exteriores, sistemas self-contained y de condensación remota, y walk-ins con paneles custom.",
    bullets: [
      "Diagnóstico de pérdida de temperatura",
      "Reemplazo de compresor y condensador",
      "Corrección de carga de refrigerante",
      "Servicio de timer de defrost y control board",
      "Reemplazo de sellos, empaques y bisagras",
      "Evaluación de piso y paneles",
    ],
    faqs: [
      {
        q: "Mi walk-in cooler no mantiene la temperatura — ¿pueden responder hoy?",
        a: "Sí. Las llamadas de pérdida de temperatura se tratan como emergencia en nuestra cola de despacho y típicamente reciben respuesta el mismo día en el Sur de Florida.",
      },
      {
        q: "¿Reemplazan compresores de walk-in cooler?",
        a: "Sí — cargamos tamaños de compresor comunes y conseguimos reemplazos compatibles de fábrica para walk-ins Hoshizaki, Turbo Air, True, Traulsen y Manitowoc.",
      },
    ],
  },
  "walk-in-freezer-repair": {
    title: "Reparación de Walk-In Freezer",
    shortTitle: "Walk-In Freezers",
    summary:
      "Diagnóstico y reemplazo de componentes de walk-in freezer — acumulación de escarcha, falla de compresor, problemas de control.",
    longDescription:
      "El downtime de un walk-in freezer es costoso. Nuestro equipo responde con las herramientas y partes para restaurar servicio rápido — incluyendo recuperación de refrigerante, reemplazo de serpentín evaporador, reconstrucción de sistemas de defrost, trabajo eléctrico y reparación de sistemas de puerta. Atendemos walk-in freezers self-contained y de condensación remota de todas las marcas comerciales principales.",
    bullets: [
      "Acumulación de escarcha y servicio de defrost",
      "Reparación de serpentín evaporador y condensador",
      "Detección de fugas de refrigerante",
      "Reemplazo de calentador de puerta y empaques",
      "Reemplazo de compresor",
      "Calibración de controlador de temperatura",
    ],
    faqs: [
      {
        q: "¿Por qué mi walk-in freezer está acumulando escarcha?",
        a: "Causas comunes incluyen falla del timer o calentador de defrost, falla del sello de puerta, o carga baja de refrigerante. Diagnosticamos las tres en la primera visita.",
      },
    ],
  },
  "ice-machine-repair": {
    title: "Reparación de Máquinas de Hielo",
    shortTitle: "Máquinas de Hielo",
    summary:
      "Reparación de máquinas de hielo comerciales para restaurantes, hoteles, healthcare y retail — Hoshizaki, Manitowoc, Scotsman.",
    longDescription:
      "Berne Commercial Repair atiende cada máquina de hielo comercial principal — Hoshizaki, Manitowoc, Scotsman, Ice-O-Matic, Follett, Kold-Draft y más. Ya sea modular head, undercounter o sistema de condensación remota, nuestros técnicos diagnostican fallas de producción de hielo, problemas de flujo de agua, fallas de control electrónico y loops de refrigeración.",
    bullets: [
      "Diagnóstico de poca o ninguna producción de hielo",
      "Servicio de válvula de entrada de agua y bomba",
      "Sistema de limpieza y tratamiento de scaling",
      "Servicio de compresor y condensador",
      "Diagnóstico de control board",
      "Termostato de bin y problemas de ciclo de harvest",
    ],
    faqs: [
      {
        q: "¿Atienden máquinas de hielo Hoshizaki, Manitowoc y Scotsman?",
        a: "Sí — esas tres marcas cubren la mayoría de nuestras llamadas de servicio de máquinas de hielo, y nuestros técnicos están entrenados en cada una.",
      },
      {
        q: "¿Qué tan rápido pueden responder a una falla de máquina de hielo?",
        a: "El mismo día en la mayoría de áreas del Sur de Florida. Hoteles y operaciones de food service de alto volumen tienen prioridad.",
      },
    ],
  },
  "fryer-repair": {
    title: "Reparación de Freidoras Comerciales",
    shortTitle: "Freidoras",
    summary:
      "Reparación de freidoras Pitco, Frymaster, Vulcan y Hobart — servicio de ignición, válvula de gas, termostato y elementos.",
    longDescription:
      "Reparamos freidoras comerciales de gas y eléctricas de Pitco, Frymaster, Vulcan, Hobart, Garland, Southbend y Cleveland. Fallas comunes que resolvemos: problemas de ignición, fallas de válvula de gas, fallas de elementos de calentamiento, drift de termostato y problemas de sistema de filtración.",
    bullets: [
      "Servicio de válvula de gas y módulo de ignición",
      "Reemplazo y calibración de termostato",
      "Servicio de high-limit safety",
      "Reemplazo de elemento de calentamiento",
      "Reparación de sistema de filtración",
    ],
    faqs: [
      {
        q: "¿Reparan freidoras de gas y eléctricas?",
        a: "Sí. Nuestros técnicos de equipo de restaurante atienden freidoras de gas y eléctricas de cada marca comercial principal.",
      },
    ],
  },
  "commercial-oven-repair": {
    title: "Reparación de Hornos Comerciales",
    shortTitle: "Hornos Comerciales",
    summary:
      "Reparación de hornos convección, combi, conveyor y deck — Vulcan, Blodgett, Rational, Middleby.",
    longDescription:
      "Berne Commercial Repair atiende cada configuración común de horno comercial — convección, combi, conveyor, deck y hornos rotativos — de Vulcan, Blodgett, Rational, Middleby, Garland, Southbend, Alto-Shaam y Hatco. Resolvemos problemas de ignición, válvula de gas, control board, motor de blower y termostato.",
    bullets: [
      "Servicio de ignición y válvula de gas",
      "Diagnóstico de control board",
      "Servicio de motor de blower y fan",
      "Servicio de bisagras, latches y empaques de puerta",
      "Calibración de termostato",
    ],
    faqs: [
      {
        q: "¿Reparan hornos combi?",
        a: "Sí — incluyendo Rational, Alto-Shaam y otros sistemas combi usados en cocinas de producción y hoteles.",
      },
    ],
  },
  "commercial-laundry-repair": {
    title: "Reparación de Lavandería Comercial",
    shortTitle: "Lavandería Comercial",
    summary:
      "Reparación de lavadoras y secadoras comerciales — Speed Queen, Whirlpool Commercial, Maytag Commercial, Electrolux Professional.",
    longDescription:
      "Atendemos equipo de lavandería comercial en hoteles, edificios de condominio, vivienda multi-familiar, centros de fitness e instituciones de cuidado. Nuestros técnicos trabajan con lavadoras y secadoras Speed Queen, Whirlpool Commercial, Maytag Commercial y Electrolux Professional — incluyendo equipo operado con monedas y tarjetas.",
    bullets: [
      "Servicio de tambor y motor de lavadora comercial",
      "Servicio de calentamiento y flujo de aire de secadora comercial",
      "Diagnóstico de operación con monedas y tarjetas",
      "Reemplazo de control board",
      "Reemplazo de correa, rodamiento y sello",
    ],
    faqs: [
      {
        q: "¿Atienden equipo de lavandería operado con monedas?",
        a: "Sí — incluyendo lavadoras y secadoras Speed Queen y Whirlpool Commercial operadas con monedas y tarjetas.",
      },
    ],
  },
  "commercial-hood-repair": {
    title: "Reparación de Campanas y Extractores Comerciales",
    shortTitle: "Campanas Comerciales",
    summary:
      "Servicio de campana de ventilación, range hood y sistemas de extracción — motores de fan, controles, makeup-air units.",
    longDescription:
      "Berne Commercial Repair atiende campanas comerciales, range hoods y sistemas de extracción para restaurantes, cocinas comerciales y plantas de producción. Manejamos motores y rodamientos de fan de extracción, servicio de makeup-air units (MAU), paneles de control de campana, componentes de fire-suppression linkage (alcance sin licencia) e iluminación. No certificamos sistemas de fire-suppression — pero coordinamos con su vendor certificado cuando una reparación toca esa interface.",
    bullets: [
      "Reemplazo de motor y rodamiento de fan de extracción",
      "Servicio de correa y polea",
      "Servicio de panel de control de campana y switches",
      "Diagnóstico de makeup-air unit",
      "Reemplazo de bombillas y ballasts",
      "Servicio de damper, bisagra y empaques",
    ],
    faqs: [
      {
        q: "¿Atienden makeup-air units (MAUs) junto con campanas?",
        a: "Sí — servicio de fan, correa, motor y control board en el lado de extracción y de makeup-air del sistema de ventilación de cocina.",
      },
    ],
  },
  "espresso-machine-repair": {
    title: "Reparación de Máquinas de Espresso Comerciales",
    shortTitle: "Máquinas de Espresso",
    summary:
      "Servicio de máquina de espresso, molino y brew-group para cafés, restaurantes y hoteles.",
    longDescription:
      "Atendemos máquinas de espresso comerciales y molinos para cafés, restaurantes, hoteles y operadores de quick-service. Servicio común incluye reconstrucciones de brew-group, trabajo de caldera y elementos de calentamiento, descaling del sistema de agua, servicio de bomba y motor, diagnóstico de controlador electrónico y reemplazo de burrs de molino. Trabajamos con máquinas single, double y triple-group.",
    bullets: [
      "Reconstrucciones de brew-group y reemplazo de empaques",
      "Servicio de caldera y elementos de calentamiento",
      "Bomba, motor y regulación de presión",
      "Descaling del sistema de agua y filtración",
      "Diagnóstico de controlador electrónico",
      "Reemplazo de burrs de molino y calibración",
    ],
    faqs: [
      {
        q: "¿Atienden máquinas de espresso multi-group usadas en cafés de alto volumen?",
        a: "Sí — máquinas comerciales single, double y triple-group, incluyendo las marcas italianas y europeas más comunes en los cafés del Sur de Florida.",
      },
    ],
  },
}

export function getServiceI18n(slug: string): ServiceI18n | undefined {
  return servicesEs[slug]
}

export function localizedService<T extends Service>(s: T, locale: "en" | "es"): T {
  if (locale !== "es") return s
  const es = servicesEs[s.slug]
  if (!es) return s
  return {
    ...s,
    title: es.title ?? s.title,
    shortTitle: es.shortTitle ?? s.shortTitle,
    summary: es.summary ?? s.summary,
    longDescription: es.longDescription ?? s.longDescription,
    bullets: es.bullets ?? s.bullets,
    faqs: es.faqs ?? s.faqs,
  }
}

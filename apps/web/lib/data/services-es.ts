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
        a: "Nuestra llamada de servicio comercial es $89 y es gratuita si aprueba la reparación: solo se paga si decide no continuar.",
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
  "commercial-dishwasher-repair": {
    title: "Reparación de Lavavajillas Comerciales",
    shortTitle: "Lavavajillas Comerciales",
    summary:
      "Reparación de dish machines el mismo día — Hobart, CMA, Jackson, Champion — temperatura de rinse, booster heater, chemical feed y bomba de lavado.",
    longDescription:
      "Un dish machine caído detiene toda la línea: los platos se acumulan, la ventana de expo se atrasa, y un inspector de salud que encuentra un final rinse fuera de spec puede parar el servicio por completo. Berne Commercial Repair despacha técnicos para lavavajillas comerciales door-type, undercounter, conveyor y flight-type en Miami-Dade, Broward y Palm Beach — Hobart, CMA Dishmachines, Jackson, Champion, Moyer Diebel, Insinger, Fagor y Electrolux Professional, incluyendo máquinas con sistemas de chemical feed de Auto-Chlor o Ecolab. Resolvemos los patrones más comunes en la primera visita: máquinas high-temp que no alcanzan el final rinse de 180°F que exige NSF (elemento de booster heater fallado, intercambiador con escala, termostato de rinse desviado), máquinas low-temp con fallas de concentración de sanitizante (bombas peristálticas con aire, tubing endurecido, líneas químicas dobladas), bombas de lavado que zumban pero no circulan, y máquinas que no llenan o no drenan. El Sur de Florida agrega su propio modo de falla: el agua dura y cargada de minerales genera escala en booster heaters, jets de rinse y brazos de lavado más rápido que en casi cualquier otro mercado — hacemos descaling, reconstrucción y recalibración como parte de la reparación. Cada reparación se verifica contra spec antes de que el técnico se vaya: temperaturas de lavado y final rinse registradas, presión verificada en el manifold de rinse, y concentración química titrada en máquinas low-temp.",
    bullets: [
      "Temperatura de rinse baja y servicio de booster heater",
      "Reparación de bombas de chemical feed, sanitizante y detergente",
      "Servicio de bomba de lavado, brazos de lavado y spray jets",
      "Reemplazo de válvula de llenado, float switch y solenoide de drenaje",
      "Reemplazo de door switch, latch y empaques",
      "Descaling y manejo de escala de agua dura",
    ],
    faqs: [
      {
        q: "¿Reparan lavavajillas comerciales Hobart?",
        a: "Sí — Hobart es la máquina más común en nuestras llamadas de lavavajillas. Atendemos door machines AM-series, undercounters LXe y conveyors CL-series, y cargamos partes comunes de brazos de lavado, sellos de bomba y booster heater para reparaciones en la primera visita.",
      },
      {
        q: "Mi dish machine no alcanza 180°F de final rinse — ¿pueden arreglarlo hoy?",
        a: "Las fallas de temperatura de rinse son críticas para inspección de salud, así que tienen prioridad en nuestra cola de despacho con respuesta el mismo día en el Sur de Florida. Las causas usuales: elemento de booster heater fallado, escala pesada, o termostato de rinse desviado — diagnosticamos las tres en la primera visita.",
      },
      {
        q: "¿Atienden máquinas high-temp y low-temp?",
        a: "Sí. Máquinas high-temp (rinse sanitizante de 180°F con booster heater) y máquinas low-temp de sanitización química son rutina para nuestros técnicos, incluyendo las bombas de chemical feed y calibración de concentración en unidades low-temp.",
      },
      {
        q: "¿Por qué mi lavavajillas deja película o manchas en la cristalería?",
        a: "En el Sur de Florida usualmente es escala de agua dura o un problema de feed de rinse-aid — jets de rinse con escala, presión de rinse baja, o una bomba de rinse-aid sin prime. Hacemos descaling, restauramos presión de rinse y recalibramos el feed como parte de la reparación.",
      },
      {
        q: "¿Cuánto cuesta una llamada de servicio de lavavajillas comercial?",
        a: "Nuestra llamada de servicio comercial es $89 — gratis si aprueba la reparación; solo se paga si decide no continuar.",
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
  "reach-in-cooler-repair": {
    title: "Reparación de Reach-In Cooler",
    shortTitle: "Reach-In Coolers",
    summary:
      "Servicio de reach-in cooler para prep lines, bares y operaciones de back-of-house.",
    longDescription:
      "Berne Commercial Repair atiende reach-in coolers de True, Turbo Air, Traulsen, Continental, Delfield, Beverage-Air y otras marcas comerciales. Problemas comunes que resolvemos: drift de temperatura, falla de fan, short-cycling de compresor y fallas de control electrónico.",
    bullets: [
      "Servicio de compresor y condensador",
      "Reemplazo de motor de fan de evaporador",
      "Reemplazo de termostato y control board",
      "Reemplazo de empaques, bisagras y manijas de puerta",
      "Corrección de carga de refrigerante",
    ],
    faqs: [
      {
        q: "¿Atienden reach-ins True y Turbo Air en la misma visita?",
        a: "Sí. Nuestros trucks cargan partes comunes para reach-ins True, Turbo Air, Traulsen y Beverage-Air, así que podemos completar la mayoría de reparaciones en una visita.",
      },
    ],
  },
  "reach-in-freezer-repair": {
    title: "Reparación de Reach-In Freezer",
    shortTitle: "Reach-In Freezers",
    summary: "Servicio de reach-in freezer para cocinas comerciales y retail.",
    longDescription:
      "Atendemos reach-in freezers en todo el Sur de Florida — incluyendo unidades en configuraciones ajustadas de prep-line y merchandisers de freezer en retail y grocery. Nuestros técnicos manejan servicio de compresor, reconstrucciones de defrost, trabajo de refrigerante y reemplazo de controladores electrónicos.",
    bullets: [
      "Reemplazo de compresor",
      "Servicio de calentador y timer de defrost",
      "Detección de fugas de refrigerante y recarga",
      "Servicio de motor de fan de evaporador",
      "Reemplazo de sello y bisagra de puerta",
    ],
    faqs: [
      {
        q: "¿Tienen empaques de puerta de freezer-grade?",
        a: "Sí — conseguimos empaques de fábrica y aftermarket para los reach-in freezers comerciales más comunes.",
      },
    ],
  },
  "commercial-range-repair": {
    title: "Reparación de Ranges Comerciales",
    shortTitle: "Ranges Comerciales",
    summary: "Servicio de range tops y combos range/oven para cocinas comerciales.",
    longDescription:
      "Atendemos range tops comerciales y combinaciones range/oven de Vulcan, Garland, Southbend, Wolf y otras marcas comerciales. Trabajo común incluye reemplazo de quemadores, servicio de válvula de gas, reparación de ignición piloto y calibración de termostato de horno.",
    bullets: [
      "Servicio de cabeza de quemador y orificio",
      "Servicio de piloto y módulo de ignición",
      "Reemplazo de válvula de gas",
      "Calibración de termostato de horno",
    ],
    faqs: [
      {
        q: "¿Atienden un range de 6 quemadores con base de horno en la misma visita?",
        a: "Sí — la mayoría de reparaciones de combos range/oven comercial se completan en una sola visita.",
      },
    ],
  },
  "steamer-repair": {
    title: "Reparación de Steamers Comerciales",
    shortTitle: "Steamers",
    summary: "Servicio de steamers de presión y convección para cocinas de producción.",
    longDescription:
      "Atendemos steamers de presión y convección de Cleveland, Vulcan, Garland y otras marcas comerciales. Servicio incluye control de nivel de agua, trabajo de elementos de calentamiento y válvula de gas, reemplazo de sello de puerta y descaling.",
    bullets: [
      "Servicio de sonda de nivel de agua",
      "Reparación de elementos de calentamiento y válvula de gas",
      "Servicio de sistema de descaling y limpieza",
      "Reemplazo de sello y latch de puerta",
    ],
    faqs: [],
  },
  "prep-table-repair": {
    title: "Reparación de Prep Tables",
    shortTitle: "Prep Tables",
    summary:
      "Servicio de prep tables para sandwich, pizza y ensalada — refrigeración y eléctrica.",
    longDescription:
      "Las prep tables operan en ambientes calientes de cocina. Diagnosticamos drift de temperatura, falla de compresor, icing de serpentín evaporador, fallas de control board y problemas de sellos de puerta/tapa en prep tables Turbo Air, True, Continental, Beverage-Air y Delfield.",
    bullets: [
      "Servicio de compresor y condensador",
      "Diagnóstico de icing de serpentín evaporador",
      "Servicio de termostato y control board",
      "Reemplazo de empaques de puerta y tapa",
    ],
    faqs: [
      {
        q: "Mi prep table está congelando las pans de comida — ¿cuál es la causa?",
        a: "Típicamente un problema de ciclo de defrost, bajo refrigerante o termostato defectuoso. Diagnosticamos las tres en la primera visita.",
      },
    ],
  },
  "commercial-washer-repair": {
    title: "Reparación de Lavadoras Comerciales",
    shortTitle: "Lavadoras Comerciales",
    summary: "Servicio de lavadoras comerciales front-load y top-load.",
    longDescription:
      "Atendemos lavadoras comerciales front-load y top-load usadas en hoteles, condominios, vivienda multi-familiar, centros de fitness e instituciones de cuidado.",
    bullets: [
      "Servicio de rodamiento y sello de tambor",
      "Reemplazo de motor y correa de drive",
      "Servicio de control board y timer",
      "Servicio de válvula de entrada de agua y bomba de drenaje",
    ],
    faqs: [],
  },
  "commercial-dryer-repair": {
    title: "Reparación de Secadoras Comerciales",
    shortTitle: "Secadoras Comerciales",
    summary: "Servicio de secadoras comerciales de gas y eléctricas.",
    longDescription:
      "Atendemos secadoras comerciales de gas y eléctricas — incluyendo stack dryers y unidades de alta capacidad usadas en hoteles e instituciones de cuidado.",
    bullets: [
      "Servicio de válvula de gas e ignición",
      "Reemplazo de elemento de calentamiento",
      "Diagnóstico de flujo de aire y ventilación",
      "Servicio de correa, rodamiento de tambor y motor",
    ],
    faqs: [],
  },
  "garbage-disposal-repair": {
    title: "Reparación de Garbage Disposals",
    shortTitle: "Garbage Disposals",
    summary: "Reparación y reemplazo de garbage disposals comerciales.",
    longDescription:
      "Atendemos y reemplazamos garbage disposals comerciales usados en restaurantes, hoteles y cocinas de producción.",
    bullets: [
      "Diagnóstico de jam y overload",
      "Reemplazo de motor y impeller",
      "Reemplazo y reinstalación",
    ],
    faqs: [],
  },
  "trash-compactor-repair": {
    title: "Reparación de Trash Compactors",
    shortTitle: "Trash Compactors",
    summary: "Servicio de trash compactors comerciales.",
    longDescription:
      "Atendemos trash compactors comerciales para restaurantes, retail y edificios administrados por property management.",
    bullets: [
      "Servicio de sistema hidráulico",
      "Reemplazo de switch y control board",
      "Reemplazo de drum y ram",
    ],
    faqs: [],
  },
  "commercial-appliance-repair": {
    title: "Reparación de Equipo Comercial",
    shortTitle: "Equipos Comerciales",
    summary:
      "Reparación de equipo comercial whole-facility y coordinación de reemplazo.",
    longDescription:
      "Más allá del servicio por categoría específica, Berne Commercial Repair maneja cobertura whole-facility — incluyendo coordinación de reemplazo y gestión de vendor para edificios administrados, cadenas y franquicias.",
    bullets: [
      "Cobertura whole-facility",
      "Coordinación de reemplazo",
      "Reportes de vendor y cadena",
    ],
    faqs: [],
  },
  "slush-machine-repair": {
    title: "Reparación de Máquinas de Slush",
    shortTitle: "Máquinas de Slush",
    summary:
      "Servicio de dispensadores de bebidas congeladas y slush — refrigeración, auger, controles de viscosidad.",
    longDescription:
      "Los dispensadores de bebidas congeladas operan duro durante las horas pico. Atendemos el loop de refrigeración, drive de auger, controles de viscosidad y válvulas de dispensación en máquinas de slush usadas en tiendas de conveniencia, cines, restaurantes y venues de eventos.",
    bullets: [
      "Diagnóstico del loop de refrigeración",
      "Servicio de drive y gearbox de auger",
      "Ajuste de control de viscosidad",
      "Reemplazo de válvula de dispensación",
      "Reemplazo de sello y empaque de bowl",
    ],
    faqs: [],
  },
  "ice-cream-machine-repair": {
    title: "Reparación de Máquinas de Helado",
    shortTitle: "Máquinas de Helado",
    summary:
      "Servicio de soft-serve y batch freezer — compresor, scraper blade, mix pump.",
    longDescription:
      "Atendemos freezers de soft-serve y batch ice cream para restaurantes, dessert shops, hoteles y operadores de franquicia. Servicio común incluye trabajo de compresor y refrigeración, reemplazo de scraper blade y dasher, diagnóstico de mix pump, servicio de controlador electrónico y reconstrucciones de air pump.",
    bullets: [
      "Servicio de compresor y condensador",
      "Reemplazo de scraper blade y dasher",
      "Diagnóstico de mix pump",
      "Reconstrucción de air pump",
      "Servicio de controlador electrónico",
    ],
    faqs: [],
  },
  "pizza-prep-table-repair": {
    title: "Reparación de Pizza Prep Tables",
    shortTitle: "Pizza Prep Tables",
    summary:
      "Refrigeración de pizza prep table, sellos de tapa, motores de fan, control boards.",
    longDescription:
      "Las pizza prep tables están en ambientes calientes de cocina y operan continuamente. Diagnosticamos drift de temperatura, icing de serpentín evaporador, fallas de control board y problemas de sellos de puerta/tapa en prep tables de True, Turbo Air, Continental, Beverage-Air y Delfield.",
    bullets: [
      "Diagnóstico del loop de refrigeración",
      "Reemplazo de bisagra, sello y empaque de tapa",
      "Servicio de serpentín evaporador y fan",
      "Servicio de control board y termostato",
    ],
    faqs: [],
  },
  "panini-press-repair": {
    title: "Reparación de Panini Press y Grill de Sándwich",
    shortTitle: "Panini Presses",
    summary:
      "Servicio de panini press, sandwich grill y contact grill — elementos de calentamiento, termostatos, bisagras.",
    longDescription:
      "Atendemos panini presses comerciales, sandwich grills y contact grills usados en cafés, sandwich shops, hoteles y restaurantes quick-service.",
    bullets: [
      "Reemplazo de elemento de calentamiento",
      "Servicio de termostato y high-limit",
      "Servicio de bisagra y resorte",
      "Reemplazo de cable de poder y switch",
    ],
    faqs: [],
  },
  "warming-table-repair": {
    title: "Reparación de Warming Tables y Heated Holding",
    shortTitle: "Warming Tables",
    summary:
      "Heated holding cabinets, warming tables, steam tables — servicio de elementos y control.",
    longDescription:
      "El equipo de heated holding mantiene la comida a temperatura segura de servicio. Atendemos warming tables, steam tables, heated holding cabinets y drawer warmers — incluyendo Alto-Shaam, Hatco, Vulcan y otras marcas comerciales.",
    bullets: [
      "Reemplazo de elemento de calentamiento",
      "Servicio de termostato y high-limit",
      "Controles de nivel de agua (steam tables)",
      "Servicio de sello y latch de puerta",
    ],
    faqs: [],
  },
  "soda-machine-repair": {
    title: "Reparación de Máquinas de Soda y Dispensadores de Bebidas",
    shortTitle: "Máquinas de Soda",
    summary:
      "Servicio de post-mix soda, jugo y dispensadores de café — carbonators, válvulas, refrigeración.",
    longDescription:
      "Atendemos post-mix soda machines, dispensadores de jugo, brewers de iced tea y estaciones de bebidas combinadas. Servicio común incluye reconstrucciones de carbonator, trabajo de líneas BIB (bag-in-box), servicio de válvula de dispensación, refrigeración de ice/water bath y control electrónico.",
    bullets: [
      "Servicio de bomba y motor de carbonator",
      "Reemplazo de válvula de dispensación",
      "Diagnóstico de líneas BIB y CO2",
      "Servicio de refrigeración de ice/water bath",
      "Diagnóstico de controlador electrónico",
    ],
    faqs: [],
  },
  "margarita-machine-repair": {
    title: "Reparación de Máquinas de Margarita y Frozen Cocktail",
    shortTitle: "Máquinas de Margarita",
    summary:
      "Servicio de dispensador de frozen cocktail — refrigeración, auger, válvulas de dispensación.",
    longDescription:
      "Las máquinas de frozen margarita y cocktail operan continuamente en bares y restaurantes. Atendemos el loop de refrigeración, drive de auger, control de viscosidad, válvulas de dispensación y sellos de bowl.",
    bullets: [
      "Servicio del sistema de refrigeración",
      "Reemplazo de auger y gearbox",
      "Ajuste de viscosidad y consistencia",
      "Reemplazo de válvula de dispensación y sello de bowl",
    ],
    faqs: [],
  },
  "vending-machine-repair": {
    title: "Reparación de Vending Machines",
    shortTitle: "Vending Machines",
    summary:
      "Servicio de máquinas vending de snacks, bebidas y combo — refrigeración, bill validators, control boards.",
    longDescription:
      "Atendemos vending machines comerciales en oficinas, escuelas, almacenes, hospitales y edificios de condominios — máquinas refrigeradas de bebidas, máquinas de snacks y máquinas combo.",
    bullets: [
      "Servicio del sistema de refrigeración",
      "Servicio de coin y bill validator",
      "Reemplazo de vend motor y helix",
      "Diagnóstico de control board",
      "Servicio de puerta y cerradura",
    ],
    faqs: [],
  },
  "coffee-machine-repair": {
    title: "Reparación de Máquinas de Café Comerciales y Brewers",
    shortTitle: "Máquinas de Café",
    summary:
      "Servicio de coffee brewer, drip y pod machine para oficinas, hoteles, breakrooms y food service.",
    longDescription:
      "Berne Commercial Repair atiende coffee brewers comerciales, drip machines, decanter-style brewers y sistemas basados en capsule usados en oficinas, hoteles, amenities de condominios y operaciones de food-service. Servicio común incluye elementos de calentamiento, válvulas solenoides, trabajo de línea de agua y descaling, y diagnóstico de controlador electrónico.",
    bullets: [
      "Reemplazo de elemento de calentamiento",
      "Servicio de válvula solenoide y línea de agua",
      "Descaling y servicio del sistema de agua",
      "Diagnóstico de controlador electrónico",
      "Servicio de decanter y warmer plate",
    ],
    faqs: [],
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

/**
 * Per-brand commercial repair profiles for /brands/[slug] pages.
 *
 * Long-form technician copy — failure modes, model series, FAQs.
 * Authoritative source for both the route generator and the
 * Brand JSON-LD schema we emit on each page.
 */

export type BrandProfile = {
  /** URL slug: /brands/{slug} */
  slug: string
  /** Display name */
  name: string
  /** OEM legal / parent entity used in Brand JSON-LD */
  manufacturer: string
  /** Country of origin or OEM headquarters for the Brand schema */
  hq?: string
  /** ≤60 char <title> */
  metaTitle: string
  /** ≤155 char meta description */
  metaDescription: string
  /** One-line teaser used on /brands grid */
  teaser: string
  /** Primary categories — drives Industries cross-link */
  categories: string[]
  /** 2-3 sentence factual brand summary */
  about: string
  /** Equipment we service — series + use case */
  equipment: { series: string; description: string }[]
  /** Brand-specific failure modes — technician-voice, real */
  failureModes: { title: string; detail: string }[]
  /** Industries-page slugs this brand commonly appears in */
  industrySlugs: string[]
  /** Why-us long-form */
  whyBerne: string
  /** Service area copy */
  serviceArea: string
  /** Brand-specific FAQs */
  faqs: { q: string; a: string }[]
  /** Common search keywords — used in copy & description */
  keywords: string[]
  /** Spanish localization. If absent the EN content is used as fallback. */
  es?: {
    metaTitle: string
    metaDescription: string
    teaser: string
    about: string
    equipment: { series: string; description: string }[]
    failureModes: { title: string; detail: string }[]
    whyBerne: string
    serviceArea: string
    faqs: { q: string; a: string }[]
  }
}

export const brandProfiles: BrandProfile[] = [
  {
    slug: "hobart",
    name: "Hobart",
    manufacturer: "Hobart Corporation (ITW Food Equipment Group)",
    hq: "Troy, Ohio, USA",
    metaTitle: "Hobart Commercial Repair in South Florida",
    metaDescription:
      "Hobart commercial dishwasher, mixer and slicer repair across Miami-Dade, Broward and Palm Beach. AM, CL, FT, A-200 series. Same-day, $89 call.",
    teaser:
      "AM, CL and FT ware-washing plus A-200 mixers and 1612/2812 slicers — restaurants, hotels and high-volume kitchens.",
    categories: ["ware-washing", "food-prep"],
    about:
      "Hobart Corporation is the dominant North-American manufacturer of commercial dishwashers, planetary mixers and food slicers, building equipment used in the back-of-house of essentially every full-service restaurant, hotel and institutional kitchen on the continent. The brand is split between two product families that Berne services daily: ware-washing — undercounter, door-type, conveyor and flight-type dishmachines — and bakery/deli equipment, including the legacy A-200 20-quart mixer and the 1612/2812 manual & automatic slicer lines. Hobart machines are built to last twenty-plus years, which is exactly why an aging South Florida fleet generates so many repair calls.",
    equipment: [
      {
        series: "AM-15 / AM-15VL / AM-15VLT",
        description:
          "Door-type high-temp sanitizing dishwashers — restaurants, bars, coffee shops. The AM-15VL adds the ventless heat-recovery hood; AM-15VLT is the tall variant for sheet pans. Booster element and wash-arm bearing are the standard South Florida service tickets.",
      },
      {
        series: "AM-15F / AM-15T-2",
        description:
          "AM-15F is the door-type with a built-in booster, AM-15T-2 the dual-rinse tall version. Common in hotel BOH and country-club kitchens. Drain pump and final-rinse solenoid lead the failure list.",
      },
      {
        series: "AM-16VL / AM-16-ASR / AM-16T",
        description:
          "Successor to the AM-15 platform with smarter controls and the Advanced Sanitation rinse — same form factor, same install footprint, OEM parts now stocked for both generations.",
      },
      {
        series: "LXeR / LXi / LXeR-2 Undercounter",
        description:
          "Compact 24\" undercounter dishwashers — bakeries, cafes, small kitchens. Hot-water and chemical-sanitizing variants. Drain pump impeller and wash motor capacitor are the truck-stock failures.",
      },
      {
        series: "LXGePR / LXGeR Glass-Washer Variants",
        description:
          "Glass-washing variants of the LX platform — bar and lounge installs. Soft-spray wash arms with low-pressure pumps; bearing service is the recurring call.",
      },
      {
        series: "CL44e / CL44eN / CL54e / CL54eN",
        description:
          "Conveyor (rack) ware-washers — high-volume restaurants, banquet halls and hotel commissaries pushing 200+ racks per hour. The eN-series adds the energy-recovery option. Curtain wear and conveyor drive bearing are the workhorse repairs.",
      },
      {
        series: "CL64e / CL66e / CL66eN",
        description:
          "Mid-volume conveyor ware-washers — schools, casino BOH, large hotel banquet kitchens. Booster heater, prewash pump and pawl-bar drive lead the service log.",
      },
      {
        series: "CL86e / CL88e / CL88eN",
        description:
          "Heavy-duty conveyor washers for the largest banquet and institutional installs. Three-tank designs, separate booster, automated curtain assemblies — full PM cycle work for Berne's PM accounts.",
      },
      {
        series: "FT900 / FT1000 / FT1000S Flight-Type",
        description:
          "Flight-type (belt) ware-washers — hospitals, casino BOH, university dining, prison kitchens. Continuous belt design at 6000+ dishes/hr. PRW prewash and conveyor chain are the high-wear components.",
      },
      {
        series: "ECMax / Hood-Type Door Dishwashers",
        description:
          "Hobart's hood-type door machines on European-style frames — used in chef-driven independents and pizza concepts. Door cable, microswitch and rinse-arm jet are standard truck-stock.",
      },
      {
        series: "A-200 / A-200T (Legacy)",
        description:
          "20-quart bench mixer — pizzerias, bakeries, prep kitchens. Belt drive, planetary action, gearbox parts still field-serviceable. The A-200T is the timed variant.",
      },
      {
        series: "HL120 / HL200 / HL200T Legacy+ Bench Mixers",
        description:
          "12 and 20-quart Legacy+ bench-model planetary mixers — the modern A-200 line. Bowl-lift handle, agitator, drive belt and gearbox bearings are the recurring repairs.",
      },
      {
        series: "HL300 / HL400 / HL600 / HL662 Floor Mixers",
        description:
          "30, 40 and 60-quart floor mixers — pizzerias, bagel shops and high-volume bakeries. HL662 is the pizza-spec variant with #12 hub. Bowl-lift cable and planetary clutch see the most calls.",
      },
      {
        series: "HL800 / HL1400 Floor Mixers",
        description:
          "80 and 140-quart floor-model planetary mixers for industrial bakeries and commissary kitchens. Three-phase drive motor, planetary gearbox and bowl-truck wheel assemblies are the heavy repairs.",
      },
      {
        series: "1612 / 1712 / 1812 Manual Slicers",
        description:
          "Manual gravity-feed slicers — delis, sandwich shops, grocery service deli. Carriage tracking, blade tension and sharpener stone alignment dominate the call list.",
      },
      {
        series: "2812 / 2912 Automatic Slicers",
        description:
          "Automatic gravity-feed slicers with motorized carriage. Carriage drive motor, transmission and stroke-end switch are the wear points; we stock the gear-drive rebuild kit.",
      },
      {
        series: "EDGE12 / EDGE13 / Centerline / Quantum",
        description:
          "Compact entry-level and premium-tier slicers — sandwich shops, grocery prep, fine-dining cold lines. Blade ring, ring guard and sharpener assembly are the standard service items.",
      },
      {
        series: "HCM / Buffalo Chopper Food Cutters",
        description:
          "Hobart HCM-450 vertical cutter mixer and the classic 84186 Buffalo chopper — bowl bearing, knife shaft seal and motor brake make the recurring repair list.",
      },
    ],
    failureModes: [
      {
        title: "Wash & rinse arm bearing failure (CL & AM series)",
        detail:
          "Top and bottom spray arms stop rotating. Most often the upper hub bearing fails from years of detergent chemistry — bearings dry out, arms wobble, then seize. Glasses come out spotted, plates greasy. We rebuild the arm assemblies and verify rotation under load.",
      },
      {
        title: "Booster heater element + high-limit trip",
        detail:
          "Final-rinse temperature can’t hit the 180°F sanitizing minimum. Either the booster element is scaled and burning out, or the high-limit thermostat is tripping early. In South Florida tap water the booster sees the heaviest mineral load and is almost always the first failure point on a five-year-old AM-15.",
      },
      {
        title: "Drain pump motor seized (LXe / LXi)",
        detail:
          "Tank doesn’t drain between cycles. Pump impeller jammed with broken glass shards or labels from bottle washing. Standard kitchen complaint that masquerades as a control-board failure.",
      },
      {
        title: "A-200 mixer planetary gearbox grind",
        detail:
          "On the legacy A-200 the planetary gearbox oil dries out and pinion gears chip. Symptom: noisy mixing under dough load, dough hook wobbling. Requires drain, inspect, and gear or bearing replacement — a job that has to be done before the cluster destroys itself.",
      },
      {
        title: "Slicer carriage tracking / blade sharpener jam (1612, 2812)",
        detail:
          "Carriage drift on automatic slicers means slice thickness wanders. Blade sharpener stones bind because deli wrap residue gums them up. Standard cleaning + carriage adjustment restores spec.",
      },
      {
        title: "Detergent / rinse-aid pump priming loss",
        detail:
          "Chemical pumps lose prime when supply containers run dry. Tubing perishes, check valves clog. Dishes come out filmed or under-sanitized. Field replaceable; we keep peristaltic heads on the truck.",
      },
      {
        title: "Wash motor capacitor failure",
        detail:
          "Single-phase wash motors on AM and LXe models use a run capacitor that fails in Florida humidity. Motor hums but doesn’t start, breaker trips after a few seconds. Capacitor swap, clamp-meter verify.",
      },
    ],
    industrySlugs: ["restaurants", "hotels", "grocery", "schools"],
    whyBerne:
      "Berne Commercial Repair has serviced Hobart equipment across South Florida for eleven years, with eighteen field technicians on the bench and a parts network that includes OEM Hobart distribution. We carry an AggregateRating of 4.79 across 871 reviews, hold full general-liability and workers-comp coverage, and supply COI on request for property managers and franchise compliance teams. Hobart repairs go in with OEM wash arms, booster elements and gearbox kits — the rebuild lasts as long as the machine.",
    serviceArea:
      "Miami-Dade, Broward and Palm Beach — same-day dispatch on Hobart ware-washing failures because a dead dishmachine shuts the floor. Coverage runs from Homestead to Jupiter, including Miami Beach, Aventura, Hallandale, Fort Lauderdale, Boca Raton, Delray and West Palm.",
    faqs: [
      {
        q: "Do you repair Hobart commercial dishwashers same-day in Miami?",
        a: "Yes. Our dispatch puts a Hobart-trained technician on-site the same business day across Miami-Dade, Broward and Palm Beach. Booster element failures, drain-pump jams and wash-arm bearings are stocked on the truck.",
      },
      {
        q: "Can you service legacy Hobart A-200 mixers? Parts are getting harder to find.",
        a: "Yes. We service A-200 and HL200 20-quart mixers including gearbox rebuilds, drive belts, planetary bearings, agitator shafts and switch packs. OEM parts are still in production through Hobart Service Parts.",
      },
      {
        q: "What does a Hobart commercial service call cost?",
        a: "Our commercial service call is $89, which covers travel and diagnostic. The fee is applied toward the approved repair when work is authorized on the same visit.",
      },
      {
        q: "Do you handle Hobart slicer blade replacement and sharpening?",
        a: "Yes — blade replacement, sharpening stone alignment, carriage tracking and motor service on 1612, 2812, EDGE13 and CenterLine slicer lines. We can also rebuild the gear drive on automatic models.",
      },
      {
        q: "Are your Hobart parts OEM?",
        a: "Default is OEM Hobart parts — wash arms, booster heaters, motors, gearboxes, control boards. We will quote a quality aftermarket alternative on commodity parts (hoses, fittings, fuses) when the customer asks.",
      },
      {
        q: "Do you provide COI and W-9 for property managers and franchise vendors?",
        a: "Yes — General Liability, Workers Comp and Auto on a single COI, plus W-9 and EPA refrigerant license documentation. Available under /credentials/.",
      },
    ],
    keywords: [
      "hobart dishwasher repair miami",
      "hobart AM-15 repair",
      "hobart CL44 service",
      "hobart a-200 mixer repair",
      "hobart slicer 2812 repair",
      "hobart commercial repair south florida",
    ],
    es: {
      metaTitle: "Reparación Comercial Hobart en el Sur de Florida",
      metaDescription:
        "Reparación de lavavajillas, batidoras y rebanadoras Hobart en Miami-Dade, Broward y Palm Beach. Series AM, CL, FT, A-200. El mismo día, $89 service call.",
      teaser:
        "Ware-washing AM, CL y FT, batidoras A-200 y rebanadoras 1612/2812 — restaurantes, hoteles y cocinas de alto volumen.",
      about:
        "Hobart Corporation es el fabricante dominante en Norteamérica de lavavajillas comerciales, batidoras planetarias y rebanadoras de alimentos, construyendo el equipo que se usa en el back-of-house de prácticamente cada restaurante full-service, hotel y cocina institucional del continente. La marca se divide en dos familias de producto que Berne atiende a diario: ware-washing — lavavajillas undercounter, door-type, conveyor y flight-type — y equipo de panadería/deli, incluyendo la legendaria batidora A-200 de 20 cuartos y las líneas de rebanadoras 1612/2812 manual y automática. Las máquinas Hobart están construidas para durar más de veinte años, que es exactamente por qué una flota envejecida en el Sur de Florida genera tantas llamadas de reparación.",
      equipment: [
        { series: "AM-15 / AM-15VL / AM-15VLT", description: "Lavavajillas door-type high-temp sanitizing — restaurantes, bares, coffee shops. El AM-15VL agrega la campana ventless de recuperación de calor; AM-15VLT es la variante alta para sheet pans. El elemento del booster y el balero del wash-arm son los tickets de servicio estándar en el Sur de Florida." },
        { series: "AM-15F / AM-15T-2", description: "AM-15F es el door-type con booster integrado, AM-15T-2 la versión alta de doble enjuague. Comunes en BOH de hotel y cocinas de country club. Bomba de drenaje y solenoide del final-rinse lideran la lista de fallas." },
        { series: "AM-16VL / AM-16-ASR / AM-16T", description: "Sucesor de la plataforma AM-15 con controles más inteligentes y el enjuague Advanced Sanitation — misma forma, mismo footprint de instalación, partes OEM ya en stock para ambas generaciones." },
        { series: "LXeR / LXi / LXeR-2 Undercounter", description: "Lavavajillas undercounter compactos de 24\" — panaderías, cafés, cocinas pequeñas. Variantes de agua caliente y de sanitización química. El impulsor de la bomba de drenaje y el capacitor del motor de lavado son las fallas que cargamos en el camión." },
        { series: "LXGePR / LXGeR Glasswasher", description: "Variantes glasswasher de la plataforma LX — instalaciones de bar y lounge. Brazos de lavado soft-spray con bombas de baja presión; servicio de baleros es la llamada recurrente." },
        { series: "CL44e / CL44eN / CL54e / CL54eN", description: "Lavavajillas conveyor (de rack) — restaurantes de alto volumen, salones de banquete y commissaries de hotel empujando 200+ racks por hora. La serie eN agrega la opción de recuperación de energía. Desgaste de cortina y balero del conveyor drive son las reparaciones workhorse." },
        { series: "CL64e / CL66e / CL66eN", description: "Lavavajillas conveyor de volumen medio — escuelas, BOH de casino, cocinas de banquete grandes de hotel. Booster, bomba de prewash y drive del pawl-bar lideran el log de servicio." },
        { series: "CL86e / CL88e / CL88eN", description: "Lavavajillas conveyor heavy-duty para las instalaciones de banquete e institucionales más grandes. Diseños de tres tanques, booster separado, ensambles de cortina automatizados — trabajo de ciclo PM completo para las cuentas PM de Berne." },
        { series: "FT900 / FT1000 / FT1000S Flight-Type", description: "Lavavajillas flight-type (de banda) — hospitales, BOH de casino, dining universitario, cocinas de prisión. Diseño de banda continua a 6000+ platos/hr. PRW prewash y cadena del conveyor son los componentes de mayor desgaste." },
        { series: "ECMax / Hood-Type Door Dishwashers", description: "Máquinas hood-type Hobart en marcos europeos — usadas en independientes chef-driven y conceptos de pizza. Cable de puerta, microswitch y jet del brazo de enjuague son truck-stock estándar." },
        { series: "A-200 / A-200T (Legacy)", description: "Batidora de banco de 20 cuartos — pizzerías, panaderías, cocinas de prep. Drive de banda, acción planetaria, partes de gearbox aún field-serviceable. La A-200T es la variante con timer." },
        { series: "HL120 / HL200 / HL200T Legacy+", description: "Batidoras planetarias de banco de 12 y 20 cuartos — la línea moderna A-200. Manija de bowl-lift, agitador, banda de drive y baleros del gearbox son las reparaciones recurrentes." },
        { series: "HL300 / HL400 / HL600 / HL662 Floor Mixers", description: "Batidoras de piso de 30, 40 y 60 cuartos — pizzerías, bagel shops y panaderías de alto volumen. HL662 es la variante pizza-spec con hub #12. Cable de bowl-lift y embrague planetario ven más llamadas." },
        { series: "HL800 / HL1400 Floor Mixers", description: "Batidoras planetarias de piso de 80 y 140 cuartos para panaderías industriales y cocinas commissary. Motor de drive trifásico, gearbox planetario y ensambles de bowl-truck son las reparaciones pesadas." },
        { series: "1612 / 1712 / 1812 Rebanadoras Manuales", description: "Rebanadoras manuales gravity-feed — delis, sandwich shops, deli de servicio de supermercado. Tracking del carriage, tensión de la cuchilla y alineación de la piedra de afilar dominan la lista de llamadas." },
        { series: "2812 / 2912 Rebanadoras Automáticas", description: "Rebanadoras automáticas gravity-feed con carriage motorizado. Motor del carriage, transmisión y switch de fin-de-stroke son los puntos de desgaste; cargamos el kit de rebuild del gear-drive." },
        { series: "EDGE12 / EDGE13 / Centerline / Quantum", description: "Rebanadoras compactas entry-level y tier premium — sandwich shops, prep de supermercado, líneas frías de fine-dining. Anillo de cuchilla, guarda del anillo y ensamble del sharpener son los items de servicio estándar." },
        { series: "HCM / Buffalo Chopper", description: "Hobart HCM-450 vertical cutter mixer y el clásico chopper 84186 Buffalo — balero del bowl, sello del eje de la cuchilla y freno del motor son la lista de reparación recurrente." },
      ],
      failureModes: [
        { title: "Falla de balero del brazo de lavado y enjuague (series CL y AM)", detail: "Los brazos de spray superior e inferior dejan de rotar. La mayoría de veces el balero del hub superior falla por años de química de detergente — los baleros se secan, los brazos cabecean, luego se trancan. Los vasos salen con manchas, los platos grasosos. Reconstruimos los ensambles del brazo y verificamos rotación bajo carga." },
        { title: "Elemento del booster + trip del high-limit", detail: "La temperatura del final-rinse no llega al mínimo de 180°F de sanitización. O el elemento del booster tiene sarro y se está quemando, o el termostato high-limit dispara temprano. En el agua de la llave del Sur de Florida el booster ve la carga mineral más pesada y es casi siempre el primer punto de falla en un AM-15 de cinco años." },
        { title: "Motor de bomba de drenaje trancado (LXe / LXi)", detail: "El tanque no drena entre ciclos. Impulsor de la bomba atascado con esquirlas de vidrio roto o etiquetas de lavado de botellas. Queja estándar de cocina que se hace pasar por falla de tarjeta de control." },
        { title: "Gearbox planetario rasposo A-200", detail: "En la A-200 legacy el aceite del gearbox planetario se seca y los engranes piñón se astillan. Síntoma: mezclado ruidoso bajo carga de masa, dough hook cabeceando. Requiere drenar, inspeccionar, y reemplazo de engrane o balero — un trabajo que tiene que hacerse antes de que el cluster se destruya solo." },
        { title: "Tracking de carriage de rebanadora / atasco del sharpener (1612, 2812)", detail: "Drift del carriage en rebanadoras automáticas significa que el grosor de la rebanada vaga. Las piedras del sharpener se atoran porque el residuo del wrap de deli las pega. Cleaning estándar + ajuste de carriage restaura spec." },
        { title: "Pérdida de prime de bomba de detergente / rinse-aid", detail: "Las bombas químicas pierden prime cuando los contenedores de suministro se acaban. La tubería se gasta, las check valves se tapan. Los platos salen con película o sub-sanitizados. Reemplazable en campo; cargamos cabezas peristálticas en el camión." },
        { title: "Falla de capacitor del motor de lavado", detail: "Motores de lavado monofásicos en modelos AM y LXe usan un capacitor de run que falla en humedad de Florida. El motor zumba pero no arranca, el breaker se cae después de unos segundos. Swap de capacitor, verificación con clamp-meter." },
      ],
      whyBerne:
        "Berne Commercial Repair ha atendido equipo Hobart en el Sur de Florida por once años, con dieciocho técnicos de campo en la banca y una red de partes que incluye distribución Hobart OEM. Tenemos un AggregateRating de 4.79 en 871 reseñas, cobertura completa de general-liability y workers-comp, y entregamos COI bajo pedido para property managers y equipos de compliance de franquicia. Las reparaciones Hobart entran con brazos de lavado, elementos de booster y kits de gearbox OEM — el rebuild dura tanto como la máquina.",
      serviceArea:
        "Miami-Dade, Broward y Palm Beach — despacho el mismo día en fallas de ware-washing Hobart porque un dishmachine muerto cierra el piso. Cobertura corre de Homestead a Jupiter, incluyendo Miami Beach, Aventura, Hallandale, Fort Lauderdale, Boca Raton, Delray y West Palm.",
      faqs: [
        { q: "¿Reparan lavavajillas Hobart comerciales el mismo día en Miami?", a: "Sí. Nuestro despacho pone un técnico entrenado en Hobart on-site el mismo día hábil en Miami-Dade, Broward y Palm Beach. Fallas de elemento del booster, atascos de bomba de drenaje y baleros del wash-arm están stocked en el camión." },
        { q: "¿Pueden atender batidoras A-200 legacy? Las partes son cada vez más difíciles.", a: "Sí. Atendemos batidoras A-200 y HL200 de 20 cuartos incluyendo rebuilds de gearbox, bandas de drive, baleros planetarios, ejes de agitador y switch packs. Las partes OEM todavía están en producción vía Hobart Service Parts." },
        { q: "¿Cuánto cuesta un service call comercial Hobart?", a: "Nuestro service call comercial es $89, que cubre viaje y diagnóstico. La cuota se aplica a la reparación aprobada cuando el trabajo se autoriza en la misma visita." },
        { q: "¿Manejan reemplazo y afilado de cuchilla Hobart?", a: "Sí — reemplazo de cuchilla, alineación de piedra de sharpening, tracking de carriage y servicio de motor en líneas de rebanadora 1612, 2812, EDGE13 y CenterLine. También podemos reconstruir el gear drive en modelos automáticos." },
        { q: "¿Sus partes Hobart son OEM?", a: "Default es partes Hobart OEM — brazos de lavado, booster heaters, motores, gearboxes, control boards. Cotizaremos una alternativa aftermarket de calidad en partes commodity (mangueras, fittings, fusibles) cuando el cliente lo pida." },
        { q: "¿Proveen COI y W-9 para property managers y vendors de franquicia?", a: "Sí — General Liability, Workers Comp y Auto en un solo COI, más W-9 y documentación de licencia EPA de refrigerante. Disponible bajo /credentials/." },
      ],
    },
  },
  {
    slug: "vulcan",
    name: "Vulcan",
    manufacturer: "Vulcan (ITW Food Equipment Group)",
    hq: "Baltimore, Maryland, USA",
    metaTitle: "Vulcan Commercial Range & Fryer Repair — South FL",
    metaDescription:
      "Vulcan commercial range, salamander, fryer and hot-top repair in South Florida. V-series, EV, MSA, LG fryers. Same-day dispatch, gas-certified technicians.",
    teaser:
      "V-series ranges, salamanders, hot tops and LG fryers — restaurant lines, banquet kitchens and ghost-kitchen rebuilds.",
    categories: ["cooking", "gas"],
    about:
      "Vulcan, part of the ITW Food Equipment Group along with Hobart, manufactures heavy-duty commercial cooking equipment — restaurant ranges, salamanders, broilers, fryers, hot tops, charbroilers and combi ovens. The brand sits in the workhorse tier of commercial kitchens: not the cheapest, not the most exotic, just the equipment most line cooks have actually run for ten years. Vulcan repairs concentrate on gas-train problems, thermocouples and pilot ignition that Florida humidity accelerates.",
    equipment: [
      {
        series: "V36 / V60 / V72 V-Series Value Ranges",
        description:
          "36\", 60\" and 72\" V-Series gas restaurant ranges — the price-sensitive workhorse on every casual line in South Florida. Pilot thermocouple and oven safety valve are the recurring tickets.",
      },
      {
        series: "SX36-6B / SX60-10B SX Series Ranges",
        description:
          "Stainless 36\" 6-burner and 60\" 10-burner SX-Series value ranges with standard oven base. Burner orifice, pilot tube and oven thermostat are stocked truck-side.",
      },
      {
        series: "36SS-6B / 60SS-10B Endurance Ranges",
        description:
          "Endurance stainless 36\" and 60\" heavy-duty range bases with two standard ovens on the 60\" model — banquet kitchens, country clubs, hotel cooklines.",
      },
      {
        series: "EV12 / EV24 / EV36 Endurance Modular Battery",
        description:
          "12\", 24\" and 36\" modular hot tops, charbroilers, open-burner sections and griddle modules — high-end restaurant lines and large banquet kitchens. Common service: orifice cleaning and modular section re-leveling.",
      },
      {
        series: "VTEC25 / VTEC36 Thermostatic Griddles",
        description:
          "Heavy-duty thermostatic griddles with under-plate sensing — breakfast platforms, diner concepts. Per-zone thermostat failure produces the classic hot-spot complaint.",
      },
      {
        series: "VCRH25 / VCRH36 / VCRH48 Radiant Charbroilers",
        description:
          "25\", 36\" and 48\" gas radiant charbroilers — steakhouse and burger-concept mainstay. Ceramic radiants replaced as a matched set after grease-fire damage.",
      },
      {
        series: "VCCB25 / VCCB36 Lava-Rock Charbroilers",
        description:
          "Lava-rock charbroiler variants — old-school steakhouse rigs. Cast-iron grate, lava rock and burner tube are the recurring service items.",
      },
      {
        series: "VSX24 / VSX36 / VSX48 Salamander Broilers",
        description:
          "Wall-mount infrared salamander finishers, 24/36/48\" widths. Infrared ceramic emitter and gas valve solenoid are the standard failures.",
      },
      {
        series: "1ER50 / 1ER85 / 1ER50C Cheesemelter Broilers",
        description:
          "Counter-mount cheese-melter broilers for kitchens that can't accept a wall-mount salamander — pizza concepts and casual lines.",
      },
      {
        series: "MSA72 / MSA85 Adjustable Salamanders",
        description:
          "Vertically adjustable gas salamanders, wall or shelf-mount. Lift-rail cable and counterweight pulley wear out before the burner does.",
      },
      {
        series: "LG300 / LG400 / LG500 Gas Fryers",
        description:
          "35/45/65 lb open-pot floor fryers with millivolt or solid-state controls — the value-tier Vulcan fryer family. High-limit thermostat and gas valve dominate the call book.",
      },
      {
        series: "MLG14 / MLG18 / MLG22 Master Fryer Battery",
        description:
          "Master gas fryers in 50, 65 and 85 lb capacities — battery-built fryer lines in QSR and hotel BOH. Drain valve, filter pump and combustion-blower repairs.",
      },
      {
        series: "VFRY18 / VFRY24 Electric Fryers",
        description:
          "Floor-model electric fryers for kitchens without gas service — element burnout and contactor failure are the recurring repairs.",
      },
      {
        series: "VK45 / VK65 / VK85 Tilting Kettles",
        description:
          "Gas and electric tilt skillets and kettles — banquet kitchens and high-volume sauce production. Tilt mechanism, gas pilot and steam-jacket pressure relief are the technical work.",
      },
      {
        series: "VG24 / VG36 / VG48 Heavy-Duty Griddles",
        description:
          "Manual-control heavy-duty griddles in 24/36/48\" widths — short-order and breakfast platforms. Burner tube and pilot tube replacement is most of the service log.",
      },
      {
        series: "VC44 / VC55 / VC66 Convection Ovens",
        description:
          "Single and double-stack gas convection ovens — bakeries, restaurants, country clubs. Blower motor bearing, ignition module and door switch are the standard repairs.",
      },
      {
        series: "VHP / VPX Hot Tops & French Plates",
        description:
          "Modular hot-top sections — French-plate cooking, sauté lines, Mediterranean kitchens. Plate warpage and orifice fouling are the typical complaints.",
      },
    ],
    failureModes: [
      {
        title: "Pilot thermocouple failure (V-series base oven)",
        detail:
          "Oven pilot lights but main burner won’t fire — the thermocouple has drifted below the 20mV threshold. Standard South Florida failure on five-plus year-old V-series ovens where steam and grease have cycled the millivolt circuit. Replace, verify millivolt drop under load.",
      },
      {
        title: "Hot-top section uneven heat",
        detail:
          "Front of the hot top scorches food, back stays cool. Cause is almost always a partially blocked burner orifice or a warped plate that no longer makes contact. We pull the plate, ream the orifices and re-level the section to spec.",
      },
      {
        title: "LG fryer melt-cycle malfunction",
        detail:
          "LG-series fryers won’t leave melt mode — the high-limit or melt-cycle thermostat is misreading. On millivolt models the safety valve is dropping out; on solid-state we verify temperature probe resistance and control board logic before swapping parts.",
      },
      {
        title: "Salamander infrared ceramic cracked",
        detail:
          "VSAL/MSA salamanders use infrared ceramic emitters that crack from grease ignition events. Result is dead zones across the finishing surface. We replace emitters as a set so the heat profile stays even.",
      },
      {
        title: "Gas valve solenoid drop-out",
        detail:
          "Burners light, run for a minute, then drop out. Solenoid coil in the main gas valve is overheating from years of cycling. Verify with a multimeter, swap valve, leak-test joints with combustible-gas detector.",
      },
      {
        title: "Oven door seal & hinge sag",
        detail:
          "Base ovens lose calibration because the door no longer seals — hinge bushings worn, gasket compressed. Affected calibration recovery requires hinge service first, then thermostat calibration.",
      },
      {
        title: "Fryer drain ball-valve seize",
        detail:
          "Drain ball valves on LG and MLG fryers seize from solidified shortening when the kitchen lets oil cool inside the valve. We rebuild rather than replace where possible, restoring full drain stroke.",
      },
    ],
    industrySlugs: ["restaurants", "country-clubs", "hotels"],
    whyBerne:
      "Vulcan repairs are gas work, so they need a technician who can pull a manometer reading, verify combustion under load and stand behind the leak test. Berne Commercial Repair runs eighteen technicians, EPA-licensed where required and all under a single COI carrying General Liability and Workers Comp. We have eleven years on South Florida lines, an AggregateRating of 4.79 across 871 reviews, and a parts policy that defaults to OEM Vulcan thermocouples, gas valves and burners. Same-day dispatch when a Vulcan range goes down on service.",
    serviceArea:
      "Miami-Dade, Broward and Palm Beach — Doral, Hialeah, Miami Beach, Aventura, Hallandale, Fort Lauderdale, Boca Raton, Delray, West Palm. Same-day for kitchens that can’t turn lunch without the range battery.",
    faqs: [
      {
        q: "Do you service Vulcan V-series ranges in Miami same day?",
        a: "Yes. Same-day dispatch across Miami-Dade, Broward and Palm Beach. Pilot thermocouples, gas valves, hot-top burners and oven calibration are stocked on the truck for V-series.",
      },
      {
        q: "Can you repair LG-series fryers under the millivolt safety system?",
        a: "Yes. LG300, LG400 and LG500 millivolt and solid-state variants — high-limit thermostats, melt-cycle controls, gas valves, drain valves and elements.",
      },
      {
        q: "Do your technicians do the gas leak test after the repair?",
        a: "Always. Every Vulcan repair that touches the gas train ends with a combustible-gas detector leak test on all opened joints and a manometer verification of supply pressure under burner load.",
      },
      {
        q: "What is the Vulcan commercial service call cost?",
        a: "Our commercial service call is $89, applied toward the approved repair when the customer authorizes work on the same visit.",
      },
      {
        q: "Do you replace Vulcan salamander infrared emitters?",
        a: "Yes. VSAL, MSA and Endurance salamander emitters are replaced as a matched set so heat distribution stays even across the finishing surface.",
      },
      {
        q: "Can you provide a COI naming our property management company?",
        a: "Yes — we issue COIs with additional-insured endorsements for property managers, franchise vendor networks and facility-management programs. Documentation lives under /credentials/.",
      },
    ],
    keywords: [
      "vulcan range repair miami",
      "vulcan v-series repair",
      "vulcan fryer LG repair",
      "vulcan salamander service",
      "vulcan commercial repair south florida",
    ],
    es: {
      metaTitle: "Reparación Comercial Vulcan Estufas y Freidoras Miami",
      metaDescription:
        "Reparación comercial Vulcan de estufas, salamandras, freidoras y hot-tops en el Sur de Florida. V-series, EV, MSA, freidoras LG. Despacho el mismo día, técnicos gas-certified.",
      teaser:
        "Estufas V-series, salamandras, hot tops y freidoras LG — líneas de restaurante, cocinas de banquete y rebuilds de ghost-kitchen.",
      about:
        "Vulcan, parte del ITW Food Equipment Group junto con Hobart, fabrica equipo de cocción comercial heavy-duty — estufas de restaurante, salamandras, broilers, freidoras, hot tops, charbroilers y hornos combi. La marca está en el tier workhorse de las cocinas comerciales: ni la más barata, ni la más exótica, simplemente el equipo que la mayoría de cocineros de línea realmente ha corrido por diez años. Las reparaciones Vulcan se concentran en problemas de gas-train, termocoples e ignición de piloto que la humedad de Florida acelera.",
      equipment: [
        { series: "V36 / V60 / V72 V-Series Value", description: "Estufas de gas de restaurante V-Series de 36\", 60\" y 72\" — el workhorse price-sensitive en cada línea casual del Sur de Florida. Termocople de piloto y safety valve del horno son los tickets recurrentes." },
        { series: "SX36-6B / SX60-10B SX Series", description: "Estufas value SX-Series de acero inox de 36\" 6-burner y 60\" 10-burner con base de horno estándar. Orificio del quemador, tubo del piloto y termostato del horno se cargan en el camión." },
        { series: "36SS-6B / 60SS-10B Endurance", description: "Bases de estufa heavy-duty Endurance de 36\" y 60\" con dos hornos estándar en el modelo de 60\" — cocinas de banquete, country clubs, cocklines de hotel." },
        { series: "EV12 / EV24 / EV36 Endurance Modular", description: "Hot tops, charbroilers, secciones open-burner y módulos de griddle modulares de 12\", 24\" y 36\" — líneas de restaurante de gama alta y cocinas de banquete grandes. Servicio común: limpieza de orificio y re-leveling modular." },
        { series: "VTEC25 / VTEC36 Griddles Termostáticos", description: "Griddles termostáticos heavy-duty con sensing bajo plato — plataformas de breakfast, conceptos diner. Falla de termostato por zona produce la queja clásica de hot-spot." },
        { series: "VCRH25 / VCRH36 / VCRH48 Radiant Charbroilers", description: "Charbroilers radiantes de gas de 25\", 36\" y 48\" — staple de steakhouse y burger. Radiantes cerámicos reemplazados como matched set después de daño por grease-fire." },
        { series: "VSX24 / VSX36 / VSX48 Salamandras", description: "Salamandras finisher de infrarrojo wall-mount, anchos 24/36/48\". Emisor cerámico de infrarrojo y solenoide de válvula de gas son las fallas estándar." },
        { series: "MSA72 / MSA85 Salamandras Ajustables", description: "Salamandras de gas ajustables verticalmente, wall o shelf-mount. Cable de lift-rail y polea de contrapeso se gastan antes que el quemador." },
        { series: "LG300 / LG400 / LG500 Freidoras de Gas", description: "Freidoras de piso open-pot de 35/45/65 lb con controles millivolt o solid-state — la familia value de Vulcan. Termostato high-limit y válvula de gas dominan el call book." },
        { series: "MLG14 / MLG18 / MLG22 Master Fryer", description: "Freidoras Master de gas en capacidades 50, 65 y 85 lb — líneas de freidora battery-built en QSR y BOH de hotel. Reparaciones de válvula de drenaje, bomba de filtro y blower de combustión." },
        { series: "VC44 / VC55 / VC66 Hornos de Convección", description: "Hornos de convección de gas single y double-stack — panaderías, restaurantes, country clubs. Balero del blower motor, módulo de ignición y switch de puerta son las reparaciones estándar." },
      ],
      failureModes: [
        { title: "Falla de termocople de piloto (horno base V-series)", detail: "El piloto del horno enciende pero el quemador principal no dispara — el termocople ha drifteado abajo del umbral de 20mV. Falla estándar del Sur de Florida en hornos V-series de cinco-plus años donde el vapor y la grasa han ciclado el circuito millivolt. Reemplazar, verificar drop de millivolt bajo carga." },
        { title: "Hot-top con calor desparejo", detail: "El frente del hot top quema la comida, el atrás se queda frío. La causa casi siempre es un orificio del quemador parcialmente tapado o una placa pandeada que ya no hace contacto. Sacamos la placa, repasamos los orificios y re-nivelamos la sección a spec." },
        { title: "Malfunción del melt-cycle de freidora LG", detail: "Las freidoras LG-series no salen de modo melt — el high-limit o termostato del melt-cycle está mal-leyendo. En modelos millivolt la válvula de safety se está cayendo; en solid-state verificamos resistencia del probe y lógica del control board antes de cambiar partes." },
        { title: "Salamandra con cerámico de infrarrojo agrietado", detail: "Salamandras VSAL/MSA usan emisores cerámicos de infrarrojo que se agrietan por eventos de ignición de grasa. Resultado: zonas muertas en la superficie de finisher. Reemplazamos emisores como set para mantener perfil de calor parejo." },
        { title: "Drop-out del solenoide de válvula de gas", detail: "Los quemadores encienden, corren un minuto, luego se caen. Bobina del solenoide en la válvula de gas principal está sobrecalentando por años de ciclo. Verificar con multímetro, swap de válvula, leak-test de joints con detector de gas combustible." },
        { title: "Trancada de drain ball-valve de freidora", detail: "Las drain ball valves en freidoras LG y MLG se trancan por shortening solidificado cuando la cocina deja enfriar el aceite dentro de la válvula. Reconstruimos en vez de reemplazar donde sea posible, restaurando full drain stroke." },
      ],
      whyBerne:
        "Las reparaciones Vulcan son trabajo de gas, entonces necesitan un técnico que pueda sacar una lectura de manómetro, verificar combustión bajo carga y respaldar el leak test. Berne Commercial Repair corre dieciocho técnicos, EPA-licensed donde se requiere y todos bajo un solo COI con General Liability y Workers Comp. Tenemos once años en líneas del Sur de Florida, un AggregateRating de 4.79 en 871 reseñas, y una política de partes que por defecto va a termocoples, válvulas de gas y quemadores Vulcan OEM. Despacho el mismo día cuando una estufa Vulcan se cae en servicio.",
      serviceArea:
        "Miami-Dade, Broward y Palm Beach — Doral, Hialeah, Miami Beach, Aventura, Hallandale, Fort Lauderdale, Boca Raton, Delray, West Palm. El mismo día para cocinas que no pueden sacar lunch sin la range battery.",
      faqs: [
        { q: "¿Atienden estufas Vulcan V-series en Miami el mismo día?", a: "Sí. Despacho el mismo día en Miami-Dade, Broward y Palm Beach. Termocoples de piloto, válvulas de gas, quemadores de hot-top y calibración de horno están stocked en el camión para V-series." },
        { q: "¿Pueden reparar freidoras LG-series bajo el sistema millivolt safety?", a: "Sí. LG300, LG400 y LG500 variantes millivolt y solid-state — termostatos high-limit, controles de melt-cycle, válvulas de gas, válvulas de drenaje y elementos." },
        { q: "¿Sus técnicos hacen el leak test de gas después de la reparación?", a: "Siempre. Cada reparación Vulcan que toca el gas-train termina con un leak test con detector de gas combustible en todos los joints abiertos y verificación con manómetro de presión de suministro bajo carga de quemador." },
        { q: "¿Cuánto cuesta el service call Vulcan comercial?", a: "Nuestro service call comercial es $89, aplicado a la reparación aprobada cuando el cliente autoriza el trabajo en la misma visita." },
        { q: "¿Reemplazan emisores de infrarrojo de salamandra Vulcan?", a: "Sí. Emisores VSAL, MSA y Endurance se reemplazan como matched set para que la distribución de calor se mantenga pareja en la superficie." },
        { q: "¿Pueden proveer un COI nombrando a nuestro property management?", a: "Sí — emitimos COIs con endorsements de additional-insured para property managers, redes de vendor de franquicia y programas de facility-management. Documentación vive bajo /credentials/." },
      ],
    },
  },
  {
    slug: "true",
    name: "True",
    manufacturer: "True Manufacturing Co., Inc.",
    hq: "O'Fallon, Missouri, USA",
    metaTitle: "True Commercial Refrigeration Repair — South FL",
    metaDescription:
      "True commercial refrigerator repair in South Florida — T-series reach-ins, TSSU prep tables, GDM merchandisers. Same-day, EPA-certified, $89 call.",
    teaser:
      "T-series reach-ins, TSSU/TWT prep tables and GDM glass-door merchandisers — restaurants, bars, c-stores and bakeries.",
    categories: ["refrigeration", "merchandising"],
    about:
      "True Manufacturing builds the bulk of the commercial refrigeration fleet that Berne sees in South Florida — reach-in coolers and freezers, prep tables, glass-door merchandisers, back-bar coolers and food-display cases. The brand’s engineering is conservative and serviceable: copper-aluminum coils, standard Embraco/Tecumseh compressors, accessible electrical compartments. That serviceability is exactly why True equipment runs ten-to-fifteen years in Florida heat — and why a repair-first strategy beats replacement on almost every call.",
    equipment: [
      {
        series: "T-12 / T-19 Compact Reach-In Coolers",
        description:
          "Single-door compact reach-ins for tight kitchens, bar back and espresso stations — Embraco compressor, capillary feed, simple defrost. Door gasket and start relay are the standard service items.",
      },
      {
        series: "T-23 / T-23-HC One-Door Reach-In Coolers",
        description:
          "Full-height single-door coolers — the most-installed unit in every restaurant in South Florida. The -HC variant is the post-2017 hydrocarbon-charged platform. Condenser coil grease load and door cartridge drop are the recurring tickets.",
      },
      {
        series: "T-49 / T-49-HC Two-Door Reach-In Coolers",
        description:
          "Two-door full-height reach-in coolers — every BOH from pizza to fine dining. Top-shelf warm complaint is almost always evaporator fan motor or coil load.",
      },
      {
        series: "T-72 / T-72-HC Three-Door Reach-In Coolers",
        description:
          "Three-door full-height reach-in coolers — banquet prep, country clubs, high-volume restaurants. Dual evaporator, single condenser layout.",
      },
      {
        series: "T-23F / T-49F / T-72F Reach-In Freezers",
        description:
          "Matching freezer variants — bottom-mount condenser, hot-gas defrost. Defrost timer and termination thermostat dominate the freezer service log.",
      },
      {
        series: "T-23G / T-49G / T-72G Glass-Door Reach-Ins",
        description:
          "Glass-door variants of the T-series reach-in line — anti-sweat heater wire and frame gasket are the routine repairs in Florida humidity.",
      },
      {
        series: "TG1R / TG2R / TG3R Premium Reach-Ins",
        description:
          "Premium-tier solid and glass-door reach-ins with electronic controls and intelligent defrost — controller resets and probe drift are the standard calls.",
      },
      {
        series: "TSSU-27 / TSSU-48 / TSSU-60 / TSSU-72 Sandwich Prep",
        description:
          "Refrigerated sandwich prep tables, 27/48/60/72\" widths with pan rail — sandwich shops, deli lines, country-club cold prep. Pan-rail temperature drift is the most frequent service concern.",
      },
      {
        series: "TPP-44 / TPP-60 / TPP-67 / TPP-93 Pizza Prep",
        description:
          "Refrigerated pizza prep tables with raised refrigerated rail — pizzerias and Italian concepts across Miami and Broward. Heavy lid use destroys hinges before the compressor goes.",
      },
      {
        series: "TWT-27 / TWT-48 / TWT-60 / TWT-72 Worktop Refrigerators",
        description:
          "Undercounter worktop refrigerators — pizza make-line back-prep, dessert station, espresso back. Door rail and cutting-board mount are standard wear items.",
      },
      {
        series: "TUC-27 / TUC-48 / TUC-60 / TUC-72 Undercounter Coolers",
        description:
          "Undercounter refrigerators with full-height door — bar back, breakfast platform, back-prep. Drain pan and evaporator fan are the recurring fixes.",
      },
      {
        series: "TUC-27F / TUC-48F Undercounter Freezers",
        description:
          "Undercounter freezer variants — defrost cycle and door hinge are the standard service log entries.",
      },
      {
        series: "GDM-10 / GDM-12 / GDM-15 Countertop Merchandisers",
        description:
          "Compact countertop and undercounter glass-door merchandisers — espresso bars, juice shops, grab-and-go counters.",
      },
      {
        series: "GDM-23 / GDM-26 / GDM-26F Single-Door Merchandisers",
        description:
          "Single glass-door display refrigerators and freezers — c-stores, beverage retail, supermarket grab-and-go. Door heater wire failure and frame condensate are the standard repairs.",
      },
      {
        series: "GDM-49 / GDM-49F / GDM-72 / GDM-72F Multi-Door Merchandisers",
        description:
          "Two and three glass-door display coolers and freezers — high-volume c-stores and supermarket aisles. Anti-sweat heater wire and door cartridge dominate the repair list.",
      },
      {
        series: "TBB-24 / TBB-3 / TBB-4 Back-Bar Coolers",
        description:
          "Back-bar bottle coolers in 24/68/95\" widths — restaurants, bars, lounges. Hinge spring and gasket replacement run perpetually.",
      },
      {
        series: "TDD-1 / TDD-2 / TDD-3 Direct-Draw Beer Dispensers",
        description:
          "Direct-draw beer dispensers — bars and brewpubs. Beer line, faucet shank and CO2 regulator are the standard non-refrigerant calls; compressor and start gear handle the refrigerant side.",
      },
      {
        series: "TGM-12 / TGM-23 Glass-Top Ice Cream Merchandisers",
        description:
          "Glass-top ice cream display freezers — ice cream shops and grocery frozen aisles. Defrost cycle and door gasket dominate the service log.",
      },
      {
        series: "TWT-44CI / TPP-AT Air-Curtain Open Display",
        description:
          "Open-display air-curtain refrigerators for grab-and-go retail — air curtain calibration and condenser load are the recurring complaints in Florida humidity.",
      },
    ],
    failureModes: [
      {
        title: "Condenser coil grease + dust load (kitchen units)",
        detail:
          "Bottom-mount condenser on every T-series unit ingests grease from the cookline. Coil clogs, head pressure climbs, compressor cycles short, box temperature rises. We chemical-clean the coil, vacuum the fins, and document amp draw before/after — the most common single repair on True kitchen units in Florida.",
      },
      {
        title: "TSSU pan-rail temperature drift",
        detail:
          "Pan-rail running 50°F when the cabinet reads 38°F. Almost always the evaporator fan is failing, the air baffle has been removed for cleaning and not reseated, or the rail seal is torn. Sequential isolation: airflow first, fan second, seal third.",
      },
      {
        title: "GDM door gasket failure & frame sweat",
        detail:
          "GDM glass doors sweat at the frame and gaskets perish. Anti-sweat heaters in the frame burn out, condensate runs down the glass, customers stop opening the doors. Heater wire and gasket are stocked.",
      },
      {
        title: "Electronic expansion valve hunting (newer T-series)",
        detail:
          "Late-model T-series with electronic controls — superheat hunts, the box temperature swings ±6°F. Verify superheat with gauges, check probe placement and resistance, flash controller if firmware is the cause.",
      },
      {
        title: "Drain line algae block & water on the floor",
        detail:
          "Condensate drain line clogs with biological growth — standard Florida humidity issue. Water pools under the cabinet, evaporator pan overflows. Clear the line, dose with appropriate biocide, verify slope to evap pan.",
      },
      {
        title: "Compressor start relay / start capacitor failure",
        detail:
          "Compressor hums but won’t start, breaker trips after 10–15 seconds. Embraco/Tecumseh start relays and start capacitors fail in Florida humidity. Verify with multimeter, replace, confirm amp draw.",
      },
      {
        title: "Defrost timer / defrost thermostat failure (freezers)",
        detail:
          "T-23F or T-49F freezers ice up the evaporator. Either the mechanical defrost timer is stuck or the defrost thermostat isn’t terminating. Walk the cycle through manually, confirm with thermometer.",
      },
    ],
    industrySlugs: ["restaurants", "grocery", "hotels", "breweries"],
    whyBerne:
      "Berne is EPA-608 certified, carries Florida refrigeration credentials, and runs eighteen field technicians dispatched daily across South Florida. We service True equipment under same-day windows and supply OEM True gaskets, evap fans, defrost controls, anti-sweat heaters and start components from a parts network that includes True’s authorized service distribution. Eleven years on the ground, 4.79 across 871 reviews, full COI / W-9 / EPA documentation under /credentials/.",
    serviceArea:
      "Miami-Dade, Broward and Palm Beach — same-day for restaurants and supermarkets running on True refrigeration. Common ZIPs include Miami (33101–33199), Doral, Aventura, Hallandale, Fort Lauderdale, Pompano, Boca Raton, Delray, West Palm and Wellington.",
    faqs: [
      {
        q: "Can you fix a True T-49 that’s warm on the top shelf?",
        a: "Yes. Most often the condenser coil is grease-loaded or the evaporator fan motor is dying. We chemical-clean the coil, swap the fan motor and verify amp draw, head pressure and box temperature before close-out.",
      },
      {
        q: "Do you repair True TSSU prep tables on the same day?",
        a: "Yes — pan-rail temperature, evaporator fan, anti-sweat seals, defrost issues. Common drive time across Miami-Dade is under two hours for emergency dispatch.",
      },
      {
        q: "Is your refrigerant work EPA-certified?",
        a: "Yes. All Berne refrigeration technicians hold EPA-608 certification. Refrigerant recovery, leak test, evacuation and recharge are documented on the work order with PT-chart verification.",
      },
      {
        q: "Do you replace GDM glass-door anti-sweat heater wire?",
        a: "Yes. GDM-23, GDM-49 and GDM-72 frame heaters are a standard repair — wire, terminal block and gasket are stocked on the truck.",
      },
      {
        q: "What is the True commercial service call cost?",
        a: "Our commercial service call is $89, applied toward the repair when authorized on the same visit.",
      },
      {
        q: "Can you handle multi-location True refrigeration coverage for a chain?",
        a: "Yes — multi-location dispatch with vendor reporting, COI on file with property management or franchise vendor networks, and standardized service documentation. Talk to dispatch about the account setup.",
      },
    ],
    keywords: [
      "true refrigerator repair miami",
      "true t-49 service",
      "true TSSU prep table repair",
      "true GDM merchandiser service",
      "true commercial refrigeration south florida",
    ],
    es: {
      metaTitle: "Reparación Refrigeración Comercial True — Sur de Florida",
      metaDescription:
        "Reparación de refrigeradores True comerciales en el Sur de Florida — T-series reach-ins, prep tables TSSU, merchandisers GDM. El mismo día, EPA-certified, $89.",
      teaser:
        "Reach-ins T-series, prep tables TSSU/TWT y merchandisers de puerta de vidrio GDM — restaurantes, bares, c-stores y panaderías.",
      about:
        "True Manufacturing construye el grueso de la flota de refrigeración comercial que Berne ve en el Sur de Florida — coolers y freezers reach-in, mesas de prep, merchandisers de puerta de vidrio, coolers back-bar y vitrinas de display. La ingeniería de la marca es conservadora y serviceable: coils cobre-aluminio, compresores estándar Embraco/Tecumseh, compartimentos eléctricos accesibles. Esa serviceability es exactamente por qué el equipo True corre diez-a-quince años en el calor de Florida — y por qué una estrategia de repair-first le gana a reemplazo en casi cada llamada.",
      equipment: [
        { series: "T-12 / T-19 Reach-In Compactos", description: "Reach-ins compactos de una puerta para cocinas apretadas, back de bar y estaciones de espresso — compresor Embraco, capilar, defrost simple. Empaque de puerta y relé de start son los items estándar." },
        { series: "T-23 / T-23-HC Reach-In de Una Puerta", description: "Coolers de altura completa de una puerta — la unidad más instalada en cada restaurante del Sur de Florida. La variante -HC es la plataforma post-2017 con carga de hidrocarburo. Carga de grasa en el coil del condensador y drop del cartucho de puerta son los tickets recurrentes." },
        { series: "T-49 / T-49-HC Reach-In de Dos Puertas", description: "Coolers reach-in de dos puertas altura completa — cada BOH de pizza a fine dining. La queja de top-shelf caliente casi siempre es motor de evap fan o carga del coil." },
        { series: "T-72 / T-72-HC Reach-In de Tres Puertas", description: "Coolers reach-in de tres puertas altura completa — prep de banquete, country clubs, restaurantes de alto volumen. Layout de evaporador dual, condensador único." },
        { series: "T-23F / T-49F / T-72F Reach-In Freezers", description: "Variantes de freezer correspondientes — condensador bottom-mount, defrost hot-gas. Timer de defrost y termostato de terminación dominan el log de servicio de freezer." },
        { series: "TG1R / TG2R / TG3R Reach-Ins Premium", description: "Reach-ins tier premium con controles electrónicos y defrost inteligente — resets de controlador y drift del probe son las llamadas estándar." },
        { series: "TSSU-27/48/60/72 Sandwich Prep", description: "Mesas de prep de sandwich refrigeradas con riel de pan — sandwich shops, líneas de deli, prep frío de country club. Drift de temperatura del pan-rail es la queja más frecuente." },
        { series: "TPP-44/60/67/93 Pizza Prep", description: "Mesas de prep de pizza con riel refrigerado elevado — pizzerías y conceptos italianos en Miami y Broward. Uso pesado de la tapa destruye bisagras antes que el compresor." },
        { series: "TWT/TUC Worktop y Undercounter", description: "Refrigeradores worktop y undercounter — back-prep de línea, dessert station, espresso back. Drain pan y evap fan son los fixes recurrentes." },
        { series: "GDM-23/26/49/72 Merchandisers", description: "Coolers de display de una a tres puertas de vidrio — c-stores, retail de bebida, grab-and-go de supermercado. Falla de cable anti-sweat y condensado en frame son las reparaciones estándar." },
        { series: "TBB Back-Bar Coolers", description: "Coolers de back-bar bottle en anchos 24/68/95\" — restaurantes, bares, lounges. Reemplazo de resorte de bisagra y empaque corren perpetuamente." },
      ],
      failureModes: [
        { title: "Carga de grasa y polvo en coil del condensador", detail: "El condensador bottom-mount en cada unidad T-series ingesta grasa de la cookline. El coil se tapa, head pressure sube, el compresor cicla corto, la temperatura de la caja sube. Hacemos limpieza química del coil, aspiramos las aletas y documentamos amp draw antes/después — la reparación única más común en unidades True de cocina en Florida." },
        { title: "Drift de temperatura del pan-rail TSSU", detail: "Pan-rail corriendo a 50°F cuando el gabinete lee 38°F. Casi siempre el evap fan está fallando, el deflector de aire se sacó para limpiar y no se volvió a poner, o el sello del rail está roto. Aislamiento secuencial: airflow primero, ventilador segundo, sello tercero." },
        { title: "Falla de empaque y sweat en frame GDM", detail: "Cabinets GDM en humedad de Florida sweatean del frame cuando el cable anti-sweat falla o el empaque deja de sellar. Resultado: agua en el piso, queja del cliente. Reemplazamos cable anti-sweat o cartucho de empaque." },
        { title: "Falla de cartucho de puerta (reach-ins)", detail: "Los cartuchos de bisagra-y-empaque de True caen después de uso pesado. El reemplazo del cartucho restaura el sello y la rotación de la puerta a spec. Truck-stock para T-23, T-49 y T-72." },
        { title: "Falla de compresor Embraco/Tecumseh", detail: "Compresores Embraco y Tecumseh fallan eléctrica y mecánicamente después de 8-12 años. Verificación de amp draw, capacitor de start y resistencia del overload antes del reemplazo." },
      ],
      whyBerne:
        "True repairs son trabajo de refrigeración con riesgo en humedad de Florida: condensadores cargados, drifts de coil, y carga eléctrica que un técnico tiene que verificar bajo amp clamp. Berne corre dieciocho técnicos, EPA-608 en todo el field team, y mantiene partes True OEM en el camión — cartuchos de puerta, evap fans, empaques, capacitores. Once años en el Sur de Florida, 4.79 / 871 reseñas, COI y W-9 archivados.",
      serviceArea:
        "Miami-Dade, Broward y Palm Beach — el mismo día en T-23/T-49 caídos en servicio. ZIPs incluyen Miami, Doral, Hialeah, Aventura, Hallandale, Fort Lauderdale, Pompano, Boca Raton, Delray y West Palm.",
      faqs: [
        { q: "¿Qué tan rápido pueden poner online un True T-23 o T-49?", a: "La mayoría de reparaciones True cierran en una visita. Cartuchos de puerta, empaques, evap fans, capacitores y cleaning de coil de condensador están en el camión. Despacho el mismo día cuando se llama antes de 1pm en la mayoría de ZIPs." },
        { q: "¿Pueden hacer limpieza de coil de condensador en mantenimiento?", a: "Sí — cleaning químico del coil con verificación de amp draw antes/después es servicio estándar. La carga de grasa es la falla #1 en cocinas." },
        { q: "¿Trabajan en TSSU prep tables y temperatura del pan-rail?", a: "Sí — drift de pan-rail es queja regular. Aislamos airflow, ventilador y sello en secuencia antes de cambiar partes." },
        { q: "¿Cuánto cuesta un service call comercial True?", a: "$89 service call comercial, cubre diagnóstico. Se aplica a la reparación aprobada en la misma visita." },
        { q: "¿Su trabajo de refrigerante es EPA-certified?", a: "Sí. Todos los técnicos de refrigeración tienen EPA-608 universal. Recovery, leak test y recharge se documentan en el work order." },
        { q: "¿Atienden merchandisers GDM en c-stores y supermercados?", a: "Sí — GDM-23, GDM-49, GDM-72 y variantes freezer. Cable anti-sweat, cartucho de puerta y limpieza de coil son las reparaciones estándar." },
      ],
    },
  },
  {
    slug: "manitowoc",
    name: "Manitowoc",
    manufacturer: "Manitowoc Ice (Welbilt / Ali Group)",
    hq: "Manitowoc, Wisconsin, USA",
    metaTitle: "Manitowoc Ice Machine Repair in South Florida",
    metaDescription:
      "Manitowoc Indigo NXT, NEO and undercounter ice-machine repair across Miami-Dade, Broward and Palm Beach. EPA-certified, OEM parts, $89 service call.",
    teaser:
      "Indigo NXT and NEO modular ice machines, ice-and-water dispensers and undercounter cubers — restaurants, hotels, hospitals.",
    categories: ["ice", "refrigeration"],
    about:
      "Manitowoc Ice is the most-installed commercial ice brand in North America, with the Indigo NXT modular cuber accounting for a large share of South Florida restaurant and bar ice production. The platform layout is consistent across decades — water trough, evaporator plate, water-distribution tube, harvest sensor, hot-gas valve — which means the failure modes are predictable, and so are the repairs. Manitowoc service is fundamentally a water-treatment story: South Florida’s mineral load is what determines how long the harvest cycle stays clean.",
    equipment: [
      {
        series: "IYT0420A / IDT0420A Indigo NXT Half-Dice",
        description:
          "30\" modular half-dice and dice cube machines, ~470 lb/24h production — restaurants, small hotels. Curtain switch and water-distribution tube are the standard truck repairs.",
      },
      {
        series: "IYT0500A / IDT0500A Indigo NXT",
        description:
          "30\" modular cubers in the 550 lb/24h class — the most-installed Indigo NXT in South Florida. Lime descale and harvest sensor dominate the service log.",
      },
      {
        series: "IYT0620A / IDT0620A Indigo NXT",
        description:
          "30\" modular cubers in the 600+ lb/24h class. Water-cooled variants (IYT0620W/IDT0620W) show up in kitchens with poor airflow.",
      },
      {
        series: "IYT0750A / IDT0750A Indigo NXT",
        description:
          "30\" Indigo NXT in the 750 lb/24h class — mid-size restaurants and hotel BOH. Hot-gas valve solenoid and condenser airflow lead the calls.",
      },
      {
        series: "IYT0900A / IYF0900A Indigo NXT",
        description:
          "30\" Indigo NXT in the 900 lb/24h class, cube (IYT) and full-dice (IYF) variants — restaurant lines, banquet ice, hotel bar service.",
      },
      {
        series: "IYT1200A / IDT1200A / IDF1200A Indigo NXT",
        description:
          "30\" Indigo NXT in the 1200 lb/24h class — high-volume restaurants and resort hotels. Water-cooled IYT1200W common in enclosed BOH installs.",
      },
      {
        series: "IYT1500A / IDT1500A Indigo NXT",
        description:
          "30\" Indigo NXT in the 1500 lb/24h class — banquet kitchens, casino BOH. Compressor amp draw and head pressure are the diagnostic priorities.",
      },
      {
        series: "IYT1900A / IYT1900W Indigo NXT",
        description:
          "30\" flagship Indigo NXT at 1900 lb/24h. Air and water-cooled — typical install in resort, casino and convention-center kitchens.",
      },
      {
        series: "IRT0500A / IRT0620A / IRT0900A Regular Cube",
        description:
          "Regular-cube Indigo NXT variants — supermarket beverage and ice bagging programs. Same chassis, different evaporator pitch.",
      },
      {
        series: "UYF / UDF NEO Undercounter Cubers",
        description:
          "UYF-0140A, UYF-0190A, UDF-0140A undercounter half-dice and dice machines — bars, coffee shops, small kitchens. Self-contained condenser, bin-thermostat early-shutdown is the standard ticket.",
      },
      {
        series: "UR / UN NEO Undercounter Nugget",
        description:
          "UN-0244A and UN-0324A undercounter nugget machines for chewable-ice concepts and healthcare break rooms. Auger gear-motor service work.",
      },
      {
        series: "QYT0420 / QYT0620 / QYT0900 QuietQube Remote",
        description:
          "Remote-condenser modular cube machines — quieter floor noise, rooftop CVD condensing unit. Line-set leak and head-pressure control valve service are the technical jobs.",
      },
      {
        series: "RFS-0385 / RFS-0650 / RFS-1300 Flake Ice",
        description:
          "Flake ice machines, 385/650/1300 lb/24h — seafood display, healthcare, blended-drink stations. Evaporator bearing and auger seal rebuild are the major-service items.",
      },
      {
        series: "RNS-12 / RNS-20 Nugget Ice (Soft Cubelet)",
        description:
          "Nugget (chewable) ice machines — ER kitchens, healthcare, blended-beverage concepts. Auger drive motor and discharge tube clog are the recurring repairs.",
      },
      {
        series: "RFS / RFS Sani-Server Flake & Nugget",
        description:
          "Sani-Server platform combining ice production with dispensing for FDA-regulated environments — full sanitize cycle plus mechanical service.",
      },
      {
        series: "CNF / SPA / RNS Ice & Water Dispensers",
        description:
          "Countertop and floor ice-and-water dispensers — break rooms, healthcare, hotels. Sanitize cycle, water valve and dispense lever are the standard service items.",
      },
      {
        series: "B-Series / D-Series Ice Storage Bins",
        description:
          "Ice storage bins under the modular heads — bin gasket, drain and ice diverter make up the bin-only call list.",
      },
      {
        series: "AC-Pre / XO Manitowoc Water Filtration",
        description:
          "Manufacturer-approved pre-filters and twin-stage filtration — installed alongside descale calls to slow the next failure. Cartridge swaps and head pressure test included in PM.",
      },
    ],
    failureModes: [
      {
        title: "Lime scale on evaporator plate (Indigo NXT)",
        detail:
          "The number one Manitowoc failure mode in South Florida. Scale builds on the plate, cube formation slows, harvest cycles get longer, then the unit goes into a freeze-up. We descale with nickel-safe cleaner, sanitize, verify cycle times return to spec — and quote the customer on a water-treatment filter setup if there isn’t one.",
      },
      {
        title: "Water-distribution tube clog",
        detail:
          "Water-distribution tube at the top of the evaporator plate clogs with scale and biofilm. Result is irregular cube formation — half-cubes, missing cubes on the left or right of the plate. Clean or replace tube.",
      },
      {
        title: "Harvest sensor / curtain switch failure",
        detail:
          "Indigo NXT relies on the harvest curtain switch to know when ice has dropped. Switch fails, machine reports a harvest-not-completed error and locks out. We verify with the diagnostic mode and replace the switch.",
      },
      {
        title: "Hot-gas valve solenoid stuck",
        detail:
          "Hot-gas valve doesn’t open at harvest. Ice freezes to the plate, machine sits at freeze. Often a stuck solenoid or a failed coil — replace, verify harvest behavior.",
      },
      {
        title: "Condenser airflow restriction + head-pressure climb",
        detail:
          "Air-cooled Indigo NXT condenser ingests dust and grease from the kitchen. Head pressure climbs, the machine slows production by 30–50%. Coil clean, verify amp draw and discharge pressure.",
      },
      {
        title: "Bin-thermostat early-fill shutdown",
        detail:
          "Bin thermostat reads ice contact early — machine shuts off before the bin is full. Either the bulb has slipped or the thermostat is out of calibration. We re-seat or replace.",
      },
      {
        title: "Water inlet valve drip / overfill",
        detail:
          "Inlet valve fails open, water overflows trough, machine error or water on the floor. Standard replacement, with screen filter cleanout upstream.",
      },
    ],
    industrySlugs: ["restaurants", "hotels", "healthcare", "grocery"],
    whyBerne:
      "Berne is EPA-608 certified across the whole field team, runs eighteen technicians on the bench, and treats Manitowoc service as a water-chemistry problem first, mechanical second. We carry OEM Manitowoc water-distribution tubes, curtain switches, hot-gas valves, harvest sensors and Indigo controllers — and we ship the water test before quoting the descale, so the kitchen isn’t back on the phone in six months. Eleven years in South Florida, 4.79 across 871 reviews, COI / W-9 / EPA documentation on file.",
    serviceArea:
      "Miami-Dade, Broward and Palm Beach — same-day for restaurants, bars and hotels running on Indigo NXT or NEO. ZIPs include Miami, Doral, Hialeah, Aventura, Hallandale, Fort Lauderdale, Pompano, Boca Raton, Delray and West Palm.",
    faqs: [
      {
        q: "How fast can you get a Manitowoc Indigo NXT back online?",
        a: "Most South Florida Manitowoc repairs close in a single visit. Descales, water-distribution tube, curtain switch, hot-gas valve and harvest sensors are stocked on the truck. Same-day dispatch when called before 1 PM in most ZIPs.",
      },
      {
        q: "Do you install Manitowoc water-treatment filters?",
        a: "Yes — XO and AC-prefilter installs are standard with descale calls. Florida tap water is the root cause of most Manitowoc service calls; we will not close out a major descale without recommending filtration.",
      },
      {
        q: "Is your ice-machine refrigerant work EPA-certified?",
        a: "Yes. All Berne refrigeration technicians hold EPA-608 universal certification. Recovery, leak test and recharge are documented on the work order.",
      },
      {
        q: "What does a Manitowoc service call cost?",
        a: "Our commercial service call is $89, which covers diagnostic. The fee is applied toward the approved repair on the same visit.",
      },
      {
        q: "Do you sanitize Manitowoc machines under FDA / health-department schedule?",
        a: "Yes. Full nickel-safe descale plus chlorine sanitize with documented before-and-after photos and chemical lot numbers for health-inspector files.",
      },
      {
        q: "Can you service remote-condensing Manitowoc QuietQube setups?",
        a: "Yes — line-set verification, remote-condenser fan service, refrigerant charge correction and head-pressure control valve diagnosis on QuietQube installations.",
      },
    ],
    keywords: [
      "manitowoc ice machine repair miami",
      "manitowoc indigo NXT service",
      "manitowoc undercounter cuber repair",
      "manitowoc descale service",
      "manitowoc commercial ice south florida",
    ],
    es: {
      metaTitle: "Reparación Máquinas de Hielo Manitowoc Sur de Florida",
      metaDescription:
        "Reparación de máquinas de hielo Manitowoc Indigo NXT, NEO y undercounter en Miami-Dade, Broward y Palm Beach. EPA-certified, partes OEM, $89 service call.",
      teaser:
        "Máquinas de hielo modulares Indigo NXT y NEO, dispensadores de hielo-y-agua y cubers undercounter — restaurantes, hoteles, hospitales.",
      about:
        "Manitowoc Ice es la marca de hielo comercial más instalada en Norteamérica, con el cuber modular Indigo NXT contando una gran porción de la producción de hielo de restaurantes y bares del Sur de Florida. El layout de la plataforma es consistente a través de décadas — water trough, placa del evaporador, tubo de distribución de agua, sensor de harvest, válvula hot-gas — lo que significa que los modos de falla son predecibles, y las reparaciones también. El servicio Manitowoc es fundamentalmente una historia de water-treatment: la carga mineral del Sur de Florida es lo que determina cuánto tiempo el ciclo de cosecha se mantiene limpio.",
      equipment: [
        { series: "IYT0420A / IDT0420A Indigo NXT", description: "Máquinas modulares half-dice y dice de 30\", producción ~470 lb/24h — restaurantes, hoteles pequeños. Switch de cortina y tubo de distribución de agua son las reparaciones estándar." },
        { series: "IYT0500A / IDT0500A Indigo NXT", description: "Cubers modulares de 30\" en la clase 550 lb/24h — el Indigo NXT más instalado en el Sur de Florida. Descale de cal y sensor de harvest dominan el log de servicio." },
        { series: "IYT0620A / IDT0620A Indigo NXT", description: "Cubers modulares de 30\" en clase 600+ lb/24h. Variantes water-cooled aparecen en cocinas con airflow pobre." },
        { series: "IYT0750A / IDT0750A Indigo NXT", description: "Indigo NXT de 30\" en clase 750 lb/24h — restaurantes mid-size y BOH de hotel. Solenoide de válvula hot-gas y airflow del condensador lideran las llamadas." },
        { series: "IYT0900A / IYT1200A / IYT1500A / IYT1900A Indigo NXT", description: "Indigo NXT en clases 900 a 1900 lb/24h — restaurantes de alto volumen, hoteles resort, casinos. Compresor amp draw y head pressure son las prioridades de diagnóstico." },
        { series: "UYF / UDF / UN NEO Undercounter", description: "Máquinas undercounter half-dice, dice y nugget — bares, coffee shops, cocinas pequeñas, break rooms de healthcare. Condensador self-contained, shutdown temprano del bin-thermostat es el ticket estándar." },
        { series: "QYT QuietQube Remote", description: "Cubers modulares con condensador remoto — ruido más bajo en piso, condensing unit CVD en techo. Leak de line-set y válvula de head-pressure son los trabajos técnicos." },
        { series: "RFS / RNS Flake & Nugget", description: "Máquinas de hielo flake y nugget — display de seafood, healthcare, estaciones de bebidas blended. Balero del evaporador y sello del tornillo son los items de major-service." },
        { series: "AC-Pre / XO Filtración de Agua", description: "Pre-filtros y filtración de dos etapas aprobada por fabricante — instalados junto con llamadas de descale para frenar la siguiente falla. Swaps de cartucho y test de head pressure incluidos en PM." },
      ],
      failureModes: [
        { title: "Escala de cal en placa del evaporador (Indigo NXT)", detail: "El modo de falla #1 de Manitowoc en el Sur de Florida. La escala se acumula en la placa, formación de cubos se ralentiza, ciclos de cosecha se alargan, luego la unidad va a freeze-up. Hacemos descale con cleaner nickel-safe, sanitize, verificamos que los tiempos de ciclo regresen a spec — y cotizamos al cliente un setup de filtración de agua si no hay uno." },
        { title: "Atasco del tubo de distribución de agua", detail: "El tubo de distribución arriba de la placa del evaporador se tapa con escala y biofilm. Resultado: formación irregular de cubos — medios cubos, cubos faltantes a la izquierda o derecha. Limpiar o reemplazar tubo." },
        { title: "Falla de sensor de harvest / switch de cortina", detail: "El Indigo NXT depende del switch de cortina de harvest para saber cuándo cayó el hielo. El switch falla, la máquina reporta error de harvest-not-completed y se traba. Verificamos con modo diagnóstico y reemplazamos el switch." },
        { title: "Solenoide de válvula hot-gas trancado", detail: "La válvula hot-gas no abre en harvest. El hielo se congela a la placa, la máquina se queda en freeze. Frecuentemente un solenoide trancado o una bobina fallida — reemplazar, verificar comportamiento de harvest." },
        { title: "Restricción de airflow del condensador + climb de head pressure", detail: "El condensador air-cooled Indigo NXT ingesta polvo y grasa de la cocina. Head pressure sube, la máquina reduce producción 30–50%. Limpieza de coil, verificación de amp draw y presión de descarga." },
      ],
      whyBerne:
        "Berne es EPA-608 certified en todo el field team, corre dieciocho técnicos en banca, y trata el servicio Manitowoc como problema de water-chemistry primero, mecánico segundo. Cargamos tubos de distribución, switches de cortina, válvulas hot-gas, sensores de harvest e Indigo controllers OEM Manitowoc — y mandamos el water test antes de cotizar el descale, para que la cocina no esté de vuelta al teléfono en seis meses. Once años en el Sur de Florida, 4.79 en 871 reseñas, documentación COI / W-9 / EPA archivada.",
      serviceArea:
        "Miami-Dade, Broward y Palm Beach — el mismo día para restaurantes, bares y hoteles corriendo Indigo NXT o NEO. ZIPs incluyen Miami, Doral, Hialeah, Aventura, Hallandale, Fort Lauderdale, Pompano, Boca Raton, Delray y West Palm.",
      faqs: [
        { q: "¿Qué tan rápido pueden poner online un Manitowoc Indigo NXT?", a: "La mayoría de reparaciones Manitowoc en el Sur de Florida cierran en una visita. Descales, tubo de distribución, switch de cortina, válvula hot-gas y sensores de harvest están en el camión. Despacho el mismo día cuando se llama antes de 1pm en la mayoría de ZIPs." },
        { q: "¿Instalan filtros de water-treatment Manitowoc?", a: "Sí — instalaciones de XO y AC-prefilter son estándar con llamadas de descale. El agua de la llave de Florida es la causa raíz de la mayoría de llamadas Manitowoc; no cerraremos un descale mayor sin recomendar filtración." },
        { q: "¿Su trabajo de refrigerante es EPA-certified?", a: "Sí. Todos los técnicos de refrigeración tienen EPA-608 universal. Recovery, leak test y recharge se documentan en el work order." },
        { q: "¿Cuánto cuesta un service call Manitowoc?", a: "$89 service call comercial, cubre diagnóstico. Se aplica a la reparación aprobada en la misma visita." },
        { q: "¿Sanitizan máquinas Manitowoc bajo schedule del health department?", a: "Sí. Descale full nickel-safe más chlorine sanitize con fotos documentadas antes/después y números de lote químico para archivos de health-inspector." },
        { q: "¿Pueden atender setups QuietQube con condensador remoto?", a: "Sí — verificación de line-set, servicio de ventilador del condensador remoto, corrección de carga de refrigerante y diagnóstico de válvula de head-pressure en instalaciones QuietQube." },
      ],
    },
  },
  {
    slug: "hoshizaki",
    name: "Hoshizaki",
    manufacturer: "Hoshizaki America, Inc.",
    hq: "Peachtree City, Georgia, USA (parent: Hoshizaki Corp., Toyoake, Japan)",
    metaTitle: "Hoshizaki Ice Machine Repair in South Florida",
    metaDescription:
      "Hoshizaki KM, KMD, F801 and DCM cubelet ice-machine repair across Miami-Dade, Broward and Palm Beach. OEM parts, EPA-608, $89 service call.",
    teaser:
      "KM stackable cubers, KMD modular, F801 flake and DCM cubelet machines — restaurants, healthcare, hotels.",
    categories: ["ice", "refrigeration"],
    about:
      "Hoshizaki America is the premium half of the commercial ice-machine market in South Florida — the brand is engineered around a stainless-steel evaporator plate and a long mean-time-between-failures, and it commands a higher install price for that reason. Hoshizaki service problems differ from Manitowoc: the evaporator design tolerates scale better, but the float, water valve and pump assemblies generate their own failure profile. Our technicians have a separate Hoshizaki kit on the truck.",
    equipment: [
      {
        series: "KM-301BAJ Modular Crescent Cuber",
        description:
          "Compact 22\" modular crescent cuber at ~315 lb/24h — small restaurants, coffee shops. Float switch and water valve solenoid are the bread-and-butter repairs.",
      },
      {
        series: "KM-515MAJ / KM-515MWJ Modular Cuber",
        description:
          "22\" modular crescent cuber at ~515 lb/24h, air or water-cooled — mid-size restaurants, smaller hotels. Lime scale + sump cleaning lead the call list.",
      },
      {
        series: "KM-660MAJ / KM-660MRJ Slim-Line Cuber",
        description:
          "22\" slim-line modular crescent cuber at ~650 lb/24h, air or remote-cooled — restaurant lines and country clubs. Water pump bearing and float chamber service dominate.",
      },
      {
        series: "KM-901MAJ / KM-901MWJ / KM-901MRJ",
        description:
          "30\" modular crescent cuber at ~900 lb/24h, air-cooled / water-cooled / remote — the most-installed KM in South Florida hotels. Hot-gas valve and float assembly are stocked truck-side.",
      },
      {
        series: "KM-1100MAJ / KM-1100MWJ / KM-1100MRJ",
        description:
          "30\" modular crescent cuber at ~1100 lb/24h — banquet kitchens, hospital BOH. The MRJ is the remote-cooled variant common in interior installs.",
      },
      {
        series: "KM-1340MAJ / KM-1340MWJ / KM-1340MRJ",
        description:
          "30\" KM at ~1340 lb/24h — high-volume restaurants, hotels and casino BOH. Compressor amp draw and head pressure verification on every service visit.",
      },
      {
        series: "KM-1601MAJ / KM-1601MWJ / KM-1601MRJ",
        description:
          "30\" flagship modular crescent cuber at ~1600 lb/24h — convention centers, resorts, casino BOH. Three-phase compressor and expansion valve drift make up the heavy work.",
      },
      {
        series: "KMD Series Modular Cube Stack Pairs",
        description:
          "Stackable KMD-901, KMD-1101 and KMD-1340 cube machines for high-volume installations — paired heads on a single bin. Doubling production typically doubles call frequency.",
      },
      {
        series: "F-801MAJ / F-801MWJ Flake Ice",
        description:
          "22\" air or water-cooled flake ice machines at ~800 lb/24h — seafood display, healthcare, blended-drink stations. Auger seal and bearing rebuild kit is the major service.",
      },
      {
        series: "F-1001MAJ / F-1001MWJ Flake Ice",
        description:
          "22\" flake ice machines at ~1000 lb/24h — supermarket seafood and large healthcare. Auger gear-motor and evaporator cylinder are the wear path.",
      },
      {
        series: "F-1500MAJ-C / F-1500MWJ-C Flake Ice",
        description:
          "30\" flake ice machines at ~1500 lb/24h with built-in compressor and remote variants. Recirculation pump and discharge tube top the call list.",
      },
      {
        series: "F-2000MWJ / F-2000MRJ Flake Ice",
        description:
          "30\" flagship flake machines at ~2000 lb/24h — fish markets, hospital production kitchens. Auger seal rebuild every 3-5 years in Florida service.",
      },
      {
        series: "DCM-300BAH / DCM-500BAH / DCM-500BWH",
        description:
          "Countertop cubelet (nugget) ice-and-water dispensers — break rooms, hotel guest floors, healthcare. Auger gear-motor stall and dispense lever microswitch are the standard repairs.",
      },
      {
        series: "DCM-751BAH / DCM-751BWH Cubelet Dispensers",
        description:
          "Larger countertop cubelet dispensers at ~800 lb/24h with 70 lb storage — hotel banquet floors, fitness centers, healthcare. Sanitize cycle and water valve service.",
      },
      {
        series: "AM-50BAJ / AM-150BAJ Undercounter Cubers",
        description:
          "Undercounter cube and half-cube machines for bars, espresso stations and small kitchens. Self-contained condenser, bin-thermostat early-shutdown is the typical complaint.",
      },
      {
        series: "AM-251BAJ / AM-50BAJ-PV Specialty Undercounter",
        description:
          "Specialty undercounter installs including the AM-251 octagonal-pearl gourmet cube — back-bar fine dining, specialty cocktail concepts.",
      },
      {
        series: "HR / HF Series Commercial Reach-In Refrigeration",
        description:
          "Hoshizaki HR-RT and HF-RT one, two and three-door reach-in coolers and freezers. Top-mount condenser layout, electronic controls, premium-tier alternative to True/Traulsen.",
      },
      {
        series: "PR / PT Series Pizza & Sandwich Prep",
        description:
          "Hoshizaki pizza and sandwich prep tables — pan rail temperature drift, evaporator fan and door gasket are the standard service items.",
      },
      {
        series: "Hoshizaki H-GUARD Plus Water Filtration",
        description:
          "OEM-approved single and twin-stage carbon filtration — installed alongside every descale on machines without an existing filter program.",
      },
    ],
    failureModes: [
      {
        title: "Lime scale on Hoshizaki KM evaporator",
        detail:
          "Stainless-steel evaporator tolerates scale better than nickel plates, but it still bricks up eventually. Symptom is irregular cube fill — Hoshizaki cubes should be uniform crescents — and a longer freeze cycle. Descale with Hoshizaki-spec scale remover only; non-spec acid will pit the evaporator.",
      },
      {
        title: "Float switch stuck / water-level error",
        detail:
          "KM-series uses a float switch to monitor sump water level. Float gets gummed with scale, switch sticks, machine throws a water-level alarm. Clean float chamber, verify continuity, replace switch where needed.",
      },
      {
        title: "Water pump bearing failure",
        detail:
          "Recirculation pump that sprays water across the evaporator wears out the bearing — pump squeals, then seizes. Symptom is incomplete cube formation. Pump is field-replaceable.",
      },
      {
        title: "DCM cubelet auger gear-motor stall",
        detail:
          "DCM machines use an auger to push cubelet ice up the discharge tube. Auger gear-motor stalls under back-pressure from packed ice or a worn auger bearing. Standard repair — pull motor, verify auger free-running.",
      },
      {
        title: "Expansion valve / refrigerant charge drift",
        detail:
          "Long-running Hoshizaki machines lose a touch of charge through joint seepage. Symptom is undersized cubes and longer cycles. EPA-608 recovery, leak test, charge to spec.",
      },
      {
        title: "Inlet water valve solenoid drop-out",
        detail:
          "Solenoid coil overheats and drops out — sump doesn’t refill, machine alarms low-water. Replace valve, verify supply pressure.",
      },
      {
        title: "F-801 flake auger seal leak",
        detail:
          "Flake ice machines have an auger seal at the bottom of the evaporator cylinder. Seal hardens, water leaks past, contaminates motor end. Rebuild kit replaces seal, bearing and o-rings.",
      },
    ],
    industrySlugs: ["restaurants", "hotels", "healthcare", "grocery"],
    whyBerne:
      "We service Hoshizaki with OEM parts and Hoshizaki-spec descaler — using the wrong chemistry on a Hoshizaki evaporator voids the warranty and can pit the plate. Eighteen technicians, EPA-608 across the field team, full COI / W-9 / EPA documentation under /credentials/. Eleven years in South Florida, 4.79 across 871 reviews. Same-day dispatch on Hoshizaki for restaurants and healthcare facilities.",
    serviceArea:
      "Miami-Dade, Broward and Palm Beach — restaurants, hotels and medical facilities depending on Hoshizaki KM, KMD, F-801 and DCM. Coverage Homestead to Jupiter, including all of Miami Beach, Aventura, Hallandale, Fort Lauderdale, Boca Raton and West Palm.",
    faqs: [
      {
        q: "Do you use OEM Hoshizaki scale remover, or generic acid?",
        a: "OEM Hoshizaki Scale Away only. Generic acid descalers pit the stainless evaporator plate and void warranty coverage. Our parts policy on Hoshizaki is OEM by default.",
      },
      {
        q: "Can you repair a DCM cubelet dispenser in a hospital?",
        a: "Yes — DCM auger gear-motor, auger bearing, ice-discharge tube, sanitizer cycle and water valve. Hospital sanitation documentation is included on the work order.",
      },
      {
        q: "Is your Hoshizaki refrigerant work EPA-certified?",
        a: "Yes, EPA-608 across the field team. Recovery, leak test, evacuation and charge to spec with PT-chart documentation.",
      },
      {
        q: "What does a Hoshizaki service call cost?",
        a: "Our commercial service call is $89, applied toward the approved repair on the same visit.",
      },
      {
        q: "Do you handle F-801 flake-ice auger seal rebuilds?",
        a: "Yes — F-801, F-1001 and F-1500 auger seal, bearing and o-ring rebuild kits. Common job on five-plus year-old flake machines.",
      },
      {
        q: "Can you do preventive maintenance on a fleet of Hoshizaki machines?",
        a: "Yes — quarterly descale, sanitize, filter swap and condenser clean on a documented PM schedule. Multi-location pricing for chains and property management.",
      },
    ],
    keywords: [
      "hoshizaki ice machine repair miami",
      "hoshizaki KM service",
      "hoshizaki DCM cubelet repair",
      "hoshizaki F801 flake ice service",
      "hoshizaki commercial ice south florida",
    ],
    es: {
      metaTitle: "Reparación Máquinas de Hielo Hoshizaki Sur de Florida",
      metaDescription:
        "Reparación de máquinas de hielo Hoshizaki KM, KMD, DCM y F-801 en Miami-Dade, Broward y Palm Beach. Partes OEM, EPA-608, $89 service call.",
      teaser:
        "Máquinas de hielo modulares KM y KMD, cubeleteras DCM, flake F-801 — restaurantes, hoteles, hospitales y supermercados.",
      about:
        "Hoshizaki es la otra mitad del oligopolio de hielo comercial en el Sur de Florida — la plataforma KM y KMD de cubo escamado y el flake F-801 son tan comunes como cualquier Manitowoc en cocinas, bares, salas de emergencia y supermercados. La ingeniería de Hoshizaki favorece evaporadores stainless-steel, sistemas de bomba de recirculación y switches de cortina de agua que requieren química OEM-spec. Usar descaler equivocado en una placa Hoshizaki la pica y anula el warranty — esa es la razón principal por la que cargamos solo el descaler Hoshizaki Scale Away en el camión.",
      equipment: [
        { series: "KM-340MAJ / KM-515MAJ / KM-650MAJ Modular", description: "Cubers modulares en clases 340/515/650 lb/24h — restaurantes, bares, hoteles boutique. Switch de cortina de agua y bomba de recirculación son las reparaciones recurrentes." },
        { series: "KM-901MAJ / KM-1100MRJ / KM-1340MRJ Modular", description: "Cubers de mayor capacidad — restaurantes de alto volumen, hoteles, banquete. Las variantes water-cooled aparecen en BOH cerrado." },
        { series: "KML-325MAJ / KML-451MAJ Stackable", description: "Plataformas modulares apilables — instalaciones donde el footprint manda. Sensor de hielo bin y panel de control son las llamadas estándar." },
        { series: "DCM-300BAH / DCM-500BAH / DCM-751BAH Cubelet", description: "Dispensadores de hielo cubelet — break rooms de hospital, casinos, hoteles. Motor de tornillo, balero del tornillo y tubo de descarga son las reparaciones recurrentes." },
        { series: "F-801MWJ / F-1001MAJ / F-1500MAJ Flake Ice", description: "Máquinas de hielo flake — display de seafood, healthcare, bebidas blended. Sello del tornillo del evaporador y bearing son los items de major-service." },
        { series: "AM-50BAJ / AM-150BAJ Undercounter", description: "Cubers undercounter — bares, coffee shops, cocinas pequeñas. Self-contained, switch de bin-thermostat es el ticket estándar." },
        { series: "KMD-460MAH / KMD-901MAH Modular Cubelet", description: "Plataformas modulares cubelet de mayor producción — soda fountains de restaurante, dispensadores de hotel." },
      ],
      failureModes: [
        { title: "Switch de cortina de agua atascado (KM-Series)", detail: "El switch de cortina de agua de Hoshizaki detecta cuándo el ciclo de cosecha completó. Atascado, la máquina alarma o cicla incorrectamente. Limpiar, verificar movimiento libre o reemplazar." },
        { title: "Falla de balero de bomba de agua", detail: "La bomba de recirculación que rocía agua sobre el evaporador desgasta el balero — la bomba chilla, luego se tranca. Síntoma es formación de cubo incompleta. La bomba es field-replaceable." },
        { title: "Stall de gear-motor de tornillo DCM cubelet", detail: "Las máquinas DCM usan un tornillo para empujar hielo cubelet por el tubo de descarga. El gear-motor del tornillo se tranca bajo back-pressure de hielo apretado o un balero desgastado. Reparación estándar — sacar motor, verificar tornillo free-running." },
        { title: "Drift de válvula de expansión / carga de refrigerante", detail: "Máquinas Hoshizaki long-running pierden un toque de carga por seepage de joint. Síntoma es cubos undersized y ciclos más largos. Recovery EPA-608, leak test, carga a spec." },
        { title: "Drop-out de solenoide de inlet water valve", detail: "La bobina del solenoide se sobrecalienta y se cae — el sump no se vuelve a llenar, la máquina alarma low-water. Reemplazar válvula, verificar presión de suministro." },
        { title: "Fuga del sello del tornillo F-801", detail: "Las máquinas de hielo flake tienen un sello del tornillo en el fondo del cilindro del evaporador. El sello se endurece, el agua se fuga, contamina el extremo del motor. El rebuild kit reemplaza sello, balero y o-rings." },
      ],
      whyBerne:
        "Atendemos Hoshizaki con partes OEM y descaler spec-Hoshizaki — usar la química equivocada en un evaporador Hoshizaki anula el warranty y puede picar la placa. Dieciocho técnicos, EPA-608 en todo el field team, documentación COI / W-9 / EPA completa bajo /credentials/. Once años en el Sur de Florida, 4.79 en 871 reseñas. Despacho el mismo día en Hoshizaki para restaurantes e instalaciones de salud.",
      serviceArea:
        "Miami-Dade, Broward y Palm Beach — restaurantes, hoteles e instalaciones médicas dependiendo de Hoshizaki KM, KMD, F-801 y DCM. Cobertura Homestead a Jupiter, incluyendo todo Miami Beach, Aventura, Hallandale, Fort Lauderdale, Boca Raton y West Palm.",
      faqs: [
        { q: "¿Usan removedor OEM Hoshizaki, o ácido genérico?", a: "Solo OEM Hoshizaki Scale Away. Descaler ácidos genéricos pican la placa stainless del evaporador y anulan la cobertura del warranty. Nuestra política de partes en Hoshizaki es OEM por defecto." },
        { q: "¿Pueden reparar un dispensador cubelet DCM en un hospital?", a: "Sí — gear-motor del tornillo DCM, balero del tornillo, tubo de descarga de hielo, ciclo de sanitizer y water valve. Documentación de sanitización para hospital incluida en el work order." },
        { q: "¿Su trabajo de refrigerante en Hoshizaki es EPA-certified?", a: "Sí, EPA-608 en todo el field team. Recovery, leak test, evacuación y carga a spec con documentación PT-chart." },
        { q: "¿Cuánto cuesta un service call Hoshizaki?", a: "$89 service call comercial, aplicado a la reparación aprobada en la misma visita." },
        { q: "¿Manejan rebuilds del sello del tornillo F-801 flake?", a: "Sí — F-801, F-1001 y F-1500 rebuild kits de sello, balero y o-ring del tornillo. Trabajo común en máquinas flake de cinco-plus años." },
        { q: "¿Pueden hacer mantenimiento preventivo en una flota de Hoshizaki?", a: "Sí — descale trimestral, sanitize, swap de filtro y limpieza de condensador en un schedule de PM documentado. Pricing multi-location para cadenas y property management." },
      ],
    },
  },
  {
    slug: "rational",
    name: "Rational",
    manufacturer: "Rational AG",
    hq: "Landsberg am Lech, Germany",
    metaTitle: "Rational Combi Oven Repair in South Florida",
    metaDescription:
      "Rational iCombi Pro and Classic combi-oven repair across Miami-Dade, Broward and Palm Beach. Electric and gas, SCC predecessors. Same-day, $89.",
    teaser:
      "iCombi Pro, iCombi Classic and SelfCookingCenter (SCC) combi ovens — fine-dining, banquet, hospital and ghost kitchens.",
    categories: ["cooking", "steam"],
    about:
      "Rational AG manufactures the most-installed combi-oven platform in commercial kitchens worldwide — the iCombi Pro and iCombi Classic series, succeeding the SelfCookingCenter (SCC) line. Combi ovens combine convection heat with controlled steam injection, and Rational’s implementation includes a self-clean cycle that uses caustic tablets. The brand is engineering-heavy, repair-intensive once it ages, and absolutely critical to the kitchens that depend on it.",
    equipment: [
      {
        series: "iCombi Pro XS 6-2/3 (Half-Size)",
        description:
          "Half-size 6-2/3 GN iCombi Pro for tight kitchens, ghost kitchens and back-prep counters. Steam generator scale and door gasket compression are the top two service items.",
      },
      {
        series: "iCombi Pro 6-1/1 (Electric / Gas)",
        description:
          "Six-rack 1/1 GN iCombi Pro — small-format restaurants, satellite kitchens, country clubs. Probe socket corrosion and CareControl tubing replacement run continuously.",
      },
      {
        series: "iCombi Pro 6-2/1 (Electric / Gas)",
        description:
          "Six-rack 2/1 GN format — banquet kitchens and country clubs needing full-hotel-pan capacity at 6-rack height. Steam injection valve and core probe service.",
      },
      {
        series: "iCombi Pro 10-1/1 (Electric / Gas)",
        description:
          "Ten-rack 1/1 GN — the workhorse fine-dining and full-service install. Cavity light, door seal and dosing pump are the standard repair list.",
      },
      {
        series: "iCombi Pro 10-2/1 (Electric / Gas)",
        description:
          "Ten-rack 2/1 GN — banquet platforms and large country clubs. Heavier cavity weight increases hinge wear over time.",
      },
      {
        series: "iCombi Pro 20-1/1 (Electric / Gas)",
        description:
          "Roll-in 20-rack 1/1 GN floor model — hotel banquet kitchens, hospital production, large catering. Door bushing, roll-in trolley bumper and dosing line are the typical service jobs.",
      },
      {
        series: "iCombi Pro 20-2/1 (Electric / Gas)",
        description:
          "Roll-in flagship 20-rack 2/1 GN — convention centers, resort banquet platforms. Three-phase electric or gas; steam generator descale is the largest single PM job.",
      },
      {
        series: "iCombi Classic 6-1/1 (Manual Controls)",
        description:
          "Six-rack manual-control combi at 1/1 GN format — casual dining, bakery production, schools that don't need iCookingSuite intelligence.",
      },
      {
        series: "iCombi Classic 10-1/1 / 10-2/1",
        description:
          "Ten-rack manual-control combi in 1/1 and 2/1 GN — hotel banquet back-up, satellite production. Same mechanical platform as Pro, simpler HMI.",
      },
      {
        series: "iCombi Classic 20-1/1 / 20-2/1",
        description:
          "Roll-in 20-rack manual-control combi — institutional kitchens, schools. Mechanical service profile identical to Pro variants.",
      },
      {
        series: "SelfCookingCenter (SCC) 61, 62, 101, 102",
        description:
          "Predecessor SCC platform in 6 and 10-rack, 1/1 and 2/1 GN — still extremely common in South Florida hotels. Parts and service remain in full production. CareControl pump, probe, dosing tube.",
      },
      {
        series: "SelfCookingCenter (SCC) 201, 202 Roll-In",
        description:
          "Roll-in 20-rack SCC predecessor — banquet platforms across older Miami Beach and Fort Lauderdale resorts. Steam generator service is the largest PM line item.",
      },
      {
        series: "SCC 5 Senses (5-Senses Update)",
        description:
          "Mid-life update of the SCC platform with the 5-Senses HMI — same hardware, refreshed touchscreen and software stack. Firmware push fixes most lockup symptoms.",
      },
      {
        series: "CombiMaster Plus CMP 61 / 62",
        description:
          "Six-rack 1/1 and 2/1 GN CombiMaster Plus — manual-only entry combi for schools, ghost kitchens, smaller operations. Simpler service profile, fewer electronics.",
      },
      {
        series: "CombiMaster Plus CMP 101 / 102",
        description:
          "Ten-rack 1/1 and 2/1 CombiMaster Plus — institutional and back-up production. Same mechanical platform, simpler service log.",
      },
      {
        series: "CombiMaster Plus CMP 201 / 202",
        description:
          "Roll-in 20-rack CombiMaster Plus — institutional and large catering. Standard descale and door-gasket service.",
      },
      {
        series: "VarioCookingCenter VCC 112 / 211 / 311",
        description:
          "Multifunctional tilting pans — pressure cooking, frying, boiling, braising. Tilt mechanism, pressure lid seal and probe socket are the technical work.",
      },
      {
        series: "iVario Pro 2-XS / L / XL",
        description:
          "Successor to VarioCookingCenter — iVario Pro multifunctional pans with intelligent cooking. Tilt drive and lid hinge are the wear points.",
      },
      {
        series: "UltraVent / UltraVent Plus Hood Systems",
        description:
          "Rational ventilation hoods that pair with iCombi installs — fan motor and condensate drain service. Often replaced or rebuilt alongside the combi PM.",
      },
      {
        series: "UC-M / UC-XS Water Treatment",
        description:
          "Rational-approved water-treatment cartridges for the steam generator — installed alongside every descale call. Florida tap water is the root cause of the SCC/iCombi service log.",
      },
    ],
    failureModes: [
      {
        title: "Steam generator scaling + descale fault",
        detail:
          "Steam generator on iCombi and SCC scales heavily in South Florida tap water. Symptom is a CareControl descale fault that won’t clear, or visible steam-output reduction. We descale the generator with Rational tab chemistry, inspect the level sensor, and recommend a UC-M water treatment if there isn’t one in place.",
      },
      {
        title: "Door seal compression set",
        detail:
          "Door gasket on 10-1/1 and 20-1/1 ovens takes compression set after 4–6 years. Steam leaks across the door frame, the kitchen smells like wet dough, cook results drift. OEM gasket, clean channel, install.",
      },
      {
        title: "Probe socket / core probe drift",
        detail:
          "Core probe drifts out of calibration or the socket pins corrode from steam ingress. Symptom is a wandering cook temperature on automated programs. We test probe resistance, clean or replace socket.",
      },
      {
        title: "Steam injection solenoid failure",
        detail:
          "Steam injection valve solenoid coil burns out — oven runs convection but won’t steam. Replace valve, verify steam introduction with sight check and cook test.",
      },
      {
        title: "Drain pipe collapse / drain pump grind",
        detail:
          "Drain on bottom of cavity backs up. Either the drain pipe has collapsed (heat-cycled rubber), or the drain pump has worn out. We replace whichever component is failing and verify free flow.",
      },
      {
        title: "CareControl pump priming loss",
        detail:
          "CareControl auto-clean pulls cleaner and rinse from internal tablets and a peristaltic-style dosing system. Dosing tube perishes, prime drops, clean cycle aborts. Tubing kit is field-replaceable.",
      },
      {
        title: "Touchscreen / control board freeze on iCombi",
        detail:
          "Touchscreen freezes mid-cycle or won’t boot. Usually fixable with a firmware push and a control-board capacitor refresh; in severe cases the HMI assembly is replaced.",
      },
    ],
    industrySlugs: ["restaurants", "hotels", "country-clubs", "healthcare"],
    whyBerne:
      "Rational combi service requires a technician who knows the platform — wrong cleaning chemistry damages the cavity, wrong descale chemistry pits the steam generator, wrong probe calibration ruins production. Our team is trained on iCombi Pro, iCombi Classic and SCC platforms, stocks OEM door gaskets, steam-injection valves, probes and drain components, and ships every Rational job with a full functional test. Eleven years South Florida, eighteen technicians, 4.79/871 reviews, COI/W-9/EPA under /credentials/.",
    serviceArea:
      "Miami-Dade, Broward and Palm Beach — banquet kitchens, hospital production kitchens, fine-dining and ghost-kitchen platforms running on Rational iCombi or SCC. ZIPs across Miami, Doral, Aventura, Hallandale, Fort Lauderdale, Boca Raton, Delray and West Palm.",
    faqs: [
      {
        q: "Do you service Rational iCombi Pro and the older SCC platform?",
        a: "Yes — iCombi Pro, iCombi Classic, SelfCookingCenter (SCC) including 5 Senses, CombiMaster Plus and VarioCookingCenter. All major subsystems: steam generator, dosing, door, probe, drain, controls.",
      },
      {
        q: "Can you descale a Rational steam generator?",
        a: "Yes — Rational-spec descale chemistry, level-sensor inspection, post-descale steam-output test. Non-spec acid damages the boiler; we will not deviate from OEM chemistry.",
      },
      {
        q: "Do you handle Rational gas combi ovens?",
        a: "Yes — gas iCombi and SCC variants. Gas-train inspection, ignition module, burner service and manometer verification of supply pressure under cooking load.",
      },
      {
        q: "What does a Rational service call cost?",
        a: "Our commercial service call is $89, applied toward the repair when authorized on the same visit.",
      },
      {
        q: "Can you do Rational PM (preventive maintenance) on a hotel banquet platform?",
        a: "Yes — quarterly descale, gasket inspection, probe verification, drain check and control firmware update on a documented PM schedule.",
      },
      {
        q: "Do you have a COI for Rational repairs on hospital production kitchens?",
        a: "Yes — full COI with hospital additional-insured endorsements, W-9, license documentation under /credentials/.",
      },
    ],
    keywords: [
      "rational combi oven repair miami",
      "rational iCombi Pro service",
      "rational SCC repair",
      "rational steam generator descale",
      "rational commercial combi south florida",
    ],
    es: {
      metaTitle: "Reparación Horno Combi Rational en Sur de Florida",
      metaDescription:
        "Reparación de hornos combi Rational iCombi Pro y Classic en Miami-Dade, Broward y Palm Beach. Eléctricos y gas, predecesores SCC. El mismo día, $89.",
      teaser:
        "Hornos combi iCombi Pro, iCombi Classic y SelfCookingCenter (SCC) — fine-dining, banquete, hospital y ghost kitchens.",
      about:
        "Rational AG fabrica la plataforma de horno combi más instalada en cocinas comerciales del mundo — la serie iCombi Pro y iCombi Classic, sucediendo a la línea SelfCookingCenter (SCC). Los hornos combi combinan calor de convección con inyección de vapor controlada, y la implementación de Rational incluye un ciclo de self-clean que usa tabletas cáusticas. La marca es engineering-heavy, repair-intensive una vez que envejece, y absolutamente crítica a las cocinas que dependen de ella.",
      equipment: [
        { series: "iCombi Pro XS 6-2/3 (Half-Size)", description: "iCombi Pro half-size 6-2/3 GN para cocinas apretadas, ghost kitchens y back-prep. Escala del generador de vapor y compresión del empaque de puerta son los top dos items de servicio." },
        { series: "iCombi Pro 6-1/1 (Eléctrico / Gas)", description: "iCombi Pro de 6 racks 1/1 GN — restaurantes small-format, satellite kitchens, country clubs. Corrosión de probe socket y reemplazo de tubería CareControl corren continuamente." },
        { series: "iCombi Pro 6-2/1 (Eléctrico / Gas)", description: "Formato 6 racks 2/1 GN — cocinas de banquete y country clubs necesitando capacidad full hotel-pan en altura de 6-rack. Servicio de válvula de inyección de vapor y core probe." },
        { series: "iCombi Pro 10-1/1 (Eléctrico / Gas)", description: "10 racks 1/1 GN — la instalación workhorse de fine-dining y full-service. Cavity light, sello de puerta y bomba de dosing son la lista estándar de reparación." },
        { series: "iCombi Pro 10-2/1 (Eléctrico / Gas)", description: "10 racks 2/1 GN — plataformas de banquete y country clubs grandes. Peso de cavity más pesado aumenta desgaste de bisagra con el tiempo." },
        { series: "iCombi Pro 20-1/1 (Eléctrico / Gas)", description: "Floor model roll-in 20 racks 1/1 GN — cocinas de banquete de hotel, producción de hospital, catering grande. Bushing de puerta, bumper de trolley roll-in y línea de dosing son los trabajos típicos." },
        { series: "iCombi Classic / SelfCookingCenter SCC", description: "Generaciones predecesoras — todavía en servicio en muchas cocinas del Sur de Florida. Misma arquitectura mecánica, controles distintos. Reemplazo de control board y soporte de software son frecuentes." },
      ],
      failureModes: [
        { title: "Escala en generador de vapor / probe de nivel de agua", detail: "El agua de la llave del Sur de Florida crea acumulación de escala en el generador de vapor. La unidad no inyecta vapor, dispara error de nivel de agua o el ciclo de self-clean falla. Descale spec-Rational, verificación del probe y validación del ciclo." },
        { title: "Compresión del empaque de puerta / fuga", detail: "Empaques de puerta Rational se comprimen y endurecen con el tiempo — la unidad pierde vapor durante el ciclo, los tiempos de cocción se alargan. Reemplazo del empaque y verificación de alineación de bisagra." },
        { title: "Bomba de dosing CleanJet inoperante", detail: "El ciclo CleanJet falla cuando la bomba de dosing del químico se atora o pierde prime. La cocina no puede correr self-clean. Servicio o reemplazo de la bomba." },
        { title: "Corrosión del probe socket", detail: "Los core probes se desconectan del socket; la corrosión del socket impide lectura. Servicio del socket o reemplazo del cable harness." },
        { title: "Falla de motor del blower de convección", detail: "El balero del blower de convección falla después de uso pesado. Síntoma: ruido en cabin y cocción desparejada. Reemplazo del motor con verificación de carga." },
        { title: "Reset / falla de control board (SCC legacy)", detail: "Tarjetas SCC fallan después de exposición prolongada a vapor. Reemplazo del board con actualización de software cuando disponible." },
      ],
      whyBerne:
        "Las reparaciones Rational requieren un técnico que pueda navegar la lógica del control combi, leer la diagnostic mode del fabricante, y verificar el ciclo de vapor bajo carga. Berne corre dieciocho técnicos con experiencia Rational, EPA-608 donde se requiere para refrigeración adyacente, y partes Rational OEM en el camión — empaques, bombas de dosing, probes, sockets. Once años en el Sur de Florida, 4.79 / 871 reseñas, documentación completa.",
      serviceArea:
        "Miami-Dade, Broward y Palm Beach — restaurantes fine-dining, country clubs, hoteles y hospitales corriendo iCombi Pro y Classic. Mismo día cuando el servicio activo está en riesgo.",
      faqs: [
        { q: "¿Hacen descale del generador de vapor Rational?", a: "Sí — descale spec-Rational con verificación del probe de nivel de agua y validación del ciclo CleanJet. Es el ticket más recurrente en iCombi después de los cinco años." },
        { q: "¿Atienden iCombi Classic y SelfCookingCenter legacy?", a: "Sí — SCC y iCombi Classic son plataformas todavía en servicio. Reemplazo de control board, empaques y bombas de dosing son trabajos estándar." },
        { q: "¿Su trabajo en línea de gas Rational es licenciado?", a: "Sí. Técnicos gas-certified manejan combis de gas con leak test post-reparación y verificación de manómetro." },
        { q: "¿Cuánto cuesta un service call Rational?", a: "$89 service call comercial, aplicado a la reparación aprobada en la misma visita." },
        { q: "¿Pueden hacer PM trimestral en una flota de Rational?", a: "Sí — PM trimestral con descale, swap de empaque, verificación CleanJet y diagnostic mode review. Pricing multi-location disponible." },
        { q: "¿Reemplazan el control board en SCC?", a: "Sí — boards disponibles vía partes OEM Rational. Coordinamos actualización de software cuando aplique." },
      ],
    },
  },
  {
    slug: "garland",
    name: "Garland",
    manufacturer: "Garland Group (Welbilt / Ali Group)",
    hq: "Mississauga, Ontario, Canada",
    metaTitle: "Garland Commercial Range Repair in South Florida",
    metaDescription:
      "Garland commercial range, charbroiler and salamander repair across Miami-Dade, Broward and Palm Beach. G-series, Master, MWE. Same-day, $89 service call.",
    teaser:
      "Garland G-series ranges, charbroilers, salamanders and Master cooking platforms — restaurant lines and steakhouse kitchens.",
    categories: ["cooking", "gas"],
    about:
      "Garland Group, part of the Welbilt / Ali Group umbrella, manufactures heavy-duty commercial cooking equipment — gas ranges, electric ranges, charbroilers, salamanders, hot tops and full restaurant range batteries. The brand is heavily represented in steakhouse and banquet kitchens, where the open-burner sections and infrared charbroilers are common picks. Garland service is gas work; combustion verification, thermocouples and pilot maintenance dominate the call book.",
    equipment: [
      {
        series: "G24-3L / G24-4L 24\" Restaurant Ranges",
        description:
          "24\" gas restaurant ranges with 3 or 4 open burners and standard oven base — small-format restaurants, satellite kitchens, ghost-kitchen builds. Pilot thermocouple is the first wear item.",
      },
      {
        series: "G36-6R / G36-6T 36\" Restaurant Ranges",
        description:
          "36\" gas restaurant ranges with 6 open burners over standard oven (G36-6R) or 24\" griddle plus 2 burners (G36-2G24R). The Miami cookline default.",
      },
      {
        series: "G48-8R / G48-G24R / G48-G36R 48\" Ranges",
        description:
          "48\" gas restaurant ranges in 8-burner, 4-burner+24\" griddle, and 36\" griddle layouts — banquet support and full-service casual lines.",
      },
      {
        series: "G60-10R / G60-G36R / G60-G48R 60\" Ranges",
        description:
          "60\" gas restaurant ranges, 10-burner or burner+griddle combos — banquet kitchens, country clubs, full-line restaurants. Oven safety valve and pilot tube lead the call list.",
      },
      {
        series: "Master 200 Heavy-Duty Range Battery",
        description:
          "Heavy-duty Master 200 modular range battery — banquet platforms, hotel cooklines, steakhouse rigs. Modular hot top, open burner, charbroiler sections.",
      },
      {
        series: "Master Sentry MST Range-Match Series",
        description:
          "Master Sentry range-match charbroilers, salamanders and griddles with flame-failure protection and electric ignition. Spec-grade for steakhouses and resort kitchens.",
      },
      {
        series: "MWE / MWE-RB Radiant Charbroilers",
        description:
          "Gas radiant charbroilers — 24/36/48/60\" widths. Ceramic radiants replaced as a matched set to keep heat distribution even.",
      },
      {
        series: "GD-15RB / GD-24RB / GD-36RB Designer Series",
        description:
          "Designer Series countertop radiant charbroilers at 15/24/36\" — pizza concepts, ghost kitchens, satellite stations. Piezo igniter and burner tube are stocked truck-side.",
      },
      {
        series: "GTBG Lava-Rock & Radiant Broilers",
        description:
          "Heavy-duty lava-rock and radiant charbroilers in 24-72\" widths — steakhouse and burger-concept staple. Cast grate and lava rock replacement, plus burner tube service.",
      },
      {
        series: "GIR-BS / GIR-WB Infrared Salamander",
        description:
          "Wall-mount and counter-mount infrared salamanders with spark ignition. Igniter electrode fouling and flame-rectification failure are the standard repairs.",
      },
      {
        series: "GIR-RC Cheesemelter Series",
        description:
          "Counter-mount cheesemelters for kitchens that can't accept a wall-mount salamander — pizza, casual dining. Burner tube and gas valve service.",
      },
      {
        series: "ED-24G / ED-30G / ED-36G / ED-48G Thermostatic Griddles",
        description:
          "Heavy-duty thermostatic griddles with under-plate sensing in 24/30/36/48\" widths — breakfast platforms and short-order lines. Per-zone thermostat failure produces the hot-spot ticket.",
      },
      {
        series: "S680 / S684 Sectional Hot Tops & French Plates",
        description:
          "Sectional hot-tops and French-plate cooking modules — sauté lines and Mediterranean kitchens. Plate level and burner orifice cleaning lead the service log.",
      },
      {
        series: "MCO-GS-10S / MCO-GS-20S Master Convection Ovens",
        description:
          "Master single and double-stack gas convection ovens — bakeries, restaurants, country clubs. Blower motor bearing, ignition module and door switch are standard truck repairs.",
      },
      {
        series: "MCO-ES Electric Convection Ovens",
        description:
          "Electric single and double-stack convection ovens — kitchens without gas service. Element burnout, contactor and door switch are the recurring failures.",
      },
      {
        series: "MP-ED-10D / MP-GD-10S Moisture+ Convection",
        description:
          "Moisture-Plus convection ovens with steam injection — bakery and bread-program kitchens. Water inlet valve and steam line clog are the routine service items.",
      },
      {
        series: "G24-G G24-G24 Hot Tops",
        description:
          "Modular 24\" gas hot tops with French-plate cook surface — sauté and stock-pot service in steakhouses and banquet kitchens.",
      },
      {
        series: "G-Series Pasta Cookers & Stock Pots",
        description:
          "Garland pasta cookers and stock-pot ranges — Italian concepts and banquet kitchens. Gas valve, pilot tube and pot-fill water line are the standard service work.",
      },
    ],
    failureModes: [
      {
        title: "Open-burner pilot drop-out (G-series)",
        detail:
          "G-series open burners run a standing pilot. Pilot goes out repeatedly under hood draft — kitchen ventilation pulling combustion air away from the pilot orifice. We adjust pilot air shutter, verify thermocouple millivolt drop, and confirm the hood balance with the kitchen.",
      },
      {
        title: "Oven base thermostat calibration drift",
        detail:
          "Bake temperature wanders ±25°F from setpoint. Capillary-tube thermostat bulb has lost charge or the calibration has drifted from years of heat cycling. Calibrate, or replace, then verify across the cook range.",
      },
      {
        title: "Charbroiler radiant element burnout (MWE)",
        detail:
          "Gas radiant charbroilers crack the ceramic radiants from grease ignition events. Dead zones across the cook surface. Replace as a matched set so heat distribution stays even.",
      },
      {
        title: "Salamander GIR pilot ignition failure",
        detail:
          "GIR salamanders use a spark module to ignite the infrared burner. Spark module fails, igniter electrode fouls with grease, or flame-rectification circuit weakens. Standard diagnostic + replacement.",
      },
      {
        title: "Griddle thermostat zone hot spot",
        detail:
          "Heavy-duty thermostatic griddles develop hot zones when one of the under-plate thermostats fails — plate runs 100°F over setpoint in that zone. Pull plate, verify thermostat resistance, replace.",
      },
      {
        title: "Range hood interlock / safety-valve drop-out",
        detail:
          "In some Florida code jurisdictions Garland ranges are tied to hood-ansul interlocks. Ansul activation drops the gas safety valve and won’t reset cleanly. We verify the interlock wiring and reset sequence.",
      },
      {
        title: "Convection oven blower motor bearing",
        detail:
          "Convection oven blower motor bearings dry out after extended heat exposure. Motor squeals, then locks. Replace motor, verify amp draw and airflow.",
      },
    ],
    industrySlugs: ["restaurants", "hotels", "country-clubs"],
    whyBerne:
      "Garland is gas work and gas work is a licensure question — Berne carries the Florida licensing required, runs eighteen technicians on the field bench, and ends every gas job with a combustible-gas detector leak test plus a manometer pressure verification under burner load. Eleven years South Florida, OEM Garland thermocouples, gas valves, radiants and burner sets stocked, 4.79/871 reviews, COI/W-9 under /credentials/.",
    serviceArea:
      "Miami-Dade, Broward and Palm Beach — same-day dispatch on Garland cooking equipment. Restaurants, steakhouses, banquet kitchens and country clubs across Miami, Doral, Aventura, Fort Lauderdale, Boca Raton, Delray and West Palm.",
    faqs: [
      {
        q: "Do you service Garland G-series ranges in Miami?",
        a: "Yes — G24, G36, G48, G60 and the full Master-series range battery. Pilot work, thermocouples, gas valves, burners, oven thermostats and hood-interlock service.",
      },
      {
        q: "Can you replace Garland charbroiler radiant elements?",
        a: "Yes. MWE and Master radiant charbroilers — replaced as a matched set to keep heat distribution even.",
      },
      {
        q: "Do your technicians do gas leak verification?",
        a: "Always. Every Garland repair that touches the gas train ends with a combustible-gas detector test on opened joints and manometer verification of supply pressure.",
      },
      {
        q: "What does a Garland commercial service call cost?",
        a: "Our commercial service call is $89, applied toward the approved repair when authorized on the same visit.",
      },
      {
        q: "Do you handle Garland convection ovens?",
        a: "Yes — gas and electric convection: blower motors, ignition modules, thermostats, door switches and door gaskets.",
      },
      {
        q: "Can you provide COI for property managers and restaurant groups?",
        a: "Yes — GL + WC + Auto on a single COI with additional-insured endorsements. Documentation under /credentials/.",
      },
    ],
    keywords: [
      "garland range repair miami",
      "garland g-series service",
      "garland charbroiler repair",
      "garland salamander service",
      "garland commercial repair south florida",
    ],
    es: {
      metaTitle: "Reparación Garland Estufas y Charbroilers — Sur de FL",
      metaDescription:
        "Reparación de estufas Garland G-series, charbroilers, salamandras y hornos de convección en el Sur de Florida. Despacho el mismo día, gas-certified, $89.",
      teaser:
        "Estufas G-series, charbroilers MWE/GTBG, salamandras GIR y hornos Master convection — cocinas de banquete, steakhouses y cocinas de hotel.",
      about:
        "Garland Commercial Ranges (Welbilt) construye estufas, charbroilers, salamandras y hornos de convección que se ven en cada steakhouse, kitchen de banquete y línea de hotel en el Sur de Florida. Las series G y MCO son workhorses con gas-trains predecibles y reparaciones field-friendly — el tipo de equipo donde un técnico puede sacar un pilot orifice, limpiar un quemador y verificar el manómetro sin documentación misteriosa de fabricante. Las llamadas Garland se concentran en pilotos, válvulas de gas y radiantes cerámicos de charbroiler.",
      equipment: [
        { series: "G24-2 / G36-6 / G48-8 G-Series Restaurant Ranges", description: "Estufas restaurante G-Series en anchos 24/36/48\" — staple de banquete y casual dining. Pilot tube y termocople de horno son los items recurrentes." },
        { series: "G60-10 / G72-12 G-Series Large Ranges", description: "Estufas G-Series de 60\"/72\" con doble horno — country clubs, hoteles, cocinas grandes de banquete. Servicio de doble horno y batería de quemadores." },
        { series: "MWE Series Radiant Charbroiler", description: "Charbroilers radiantes de gas — anchos 24/36/48/60\". Radiantes cerámicos reemplazados como matched set para mantener distribución de calor pareja." },
        { series: "GD-15RB / GD-24RB / GD-36RB Designer", description: "Charbroilers radiantes Designer Series countertop de 15/24/36\" — conceptos de pizza, ghost kitchens. Piezo igniter y tubo del quemador están en el camión." },
        { series: "GTBG Lava-Rock y Radiant Broilers", description: "Charbroilers heavy-duty lava-rock y radiantes en 24-72\" — staple de steakhouse y burger. Reemplazo de grate y lava rock, más servicio de tubo del quemador." },
        { series: "GIR-BS / GIR-WB Infrared Salamander", description: "Salamandras de infrarrojo wall-mount y counter-mount con ignición de chispa. Fouling del electrodo y falla de flame-rectification son las reparaciones estándar." },
        { series: "ED-24G / ED-30G / ED-36G / ED-48G Griddles", description: "Griddles termostáticos heavy-duty con sensing bajo-plato — plataformas de breakfast y short-order. Falla de termostato por zona produce el ticket de hot-spot." },
        { series: "MCO-GS-10S / MCO-GS-20S Master Convection", description: "Hornos de convección de gas Master single y double-stack — panaderías, restaurantes, country clubs. Balero del blower motor, módulo de ignición y switch de puerta son truck repairs estándar." },
        { series: "MP-ED-10D / MP-GD-10S Moisture+ Convection", description: "Hornos Moisture-Plus con inyección de vapor — panadería y programas de pan. Válvula de inlet y atasco de línea de vapor son los items rutinarios." },
      ],
      failureModes: [
        { title: "Drop-out de piloto open-burner (G-series)", detail: "Los quemadores G-series corren piloto standing. El piloto se apaga repetidamente bajo draft de campana — la ventilación de cocina jala aire de combustión del orificio del piloto. Ajustamos shutter de aire, verificamos drop millivolt del termocople, y confirmamos balance de campana con la cocina." },
        { title: "Drift de calibración del termostato de horno base", detail: "La temperatura de bake vaga ±25°F del setpoint. El bulbo del termostato capilar perdió carga o la calibración drifteó por años de heat cycling. Calibrar, o reemplazar, luego verificar a través del rango de cocción." },
        { title: "Burnout de radiante cerámico de charbroiler (MWE)", detail: "Los charbroilers radiantes de gas agrietan los radiantes cerámicos por eventos de grease ignition. Zonas muertas en la superficie de cocción. Reemplazar como matched set para mantener distribución de calor pareja." },
        { title: "Falla de ignición de piloto salamandra GIR", detail: "Las salamandras GIR usan módulo de chispa para encender el quemador de infrarrojo. El módulo falla, el electrodo se foulea con grasa, o el circuito de flame-rectification se debilita. Diagnóstico estándar + reemplazo." },
        { title: "Falla de balero del blower de convección MCO", detail: "El balero del blower de convección falla después de uso pesado. Síntoma: ruido y cocción desparejada. Reemplazo del motor con verificación de amp." },
      ],
      whyBerne:
        "Las reparaciones Garland son trabajo de gas — pilotos, válvulas, leak tests. Berne corre dieciocho técnicos gas-certified, EPA-608 donde se requiere, partes Garland OEM en el camión — termocoples, válvulas de gas, electrodos, radiantes cerámicos. Once años en el Sur de Florida, 4.79 / 871 reseñas, COI y W-9 archivados. Despacho el mismo día cuando una línea Garland se cae.",
      serviceArea:
        "Miami-Dade, Broward y Palm Beach — steakhouses, country clubs, cocinas de banquete y hoteles. El mismo día en G-series caído antes de un cover de viernes o sábado.",
      faqs: [
        { q: "¿Atienden estufas Garland G-series en Miami el mismo día?", a: "Sí. Despacho el mismo día en Miami-Dade, Broward y Palm Beach. Termocoples de piloto, válvulas de gas y batería de quemadores están en el camión." },
        { q: "¿Hacen reemplazo de radiantes cerámicos en MWE?", a: "Sí — reemplazamos radiantes cerámicos como matched set para mantener distribución de calor pareja. Misma visita en la mayoría de casos." },
        { q: "¿Sus técnicos hacen leak test post-reparación?", a: "Siempre. Cada reparación Garland que toca el gas-train termina con leak test de detector de gas combustible y verificación de manómetro." },
        { q: "¿Cuánto cuesta un service call Garland?", a: "$89 service call comercial, aplicado a la reparación aprobada en la misma visita." },
        { q: "¿Atienden salamandras GIR con ignición de chispa?", a: "Sí — módulos de chispa, electrodos y circuitos de flame-rectification GIR son trabajo regular." },
        { q: "¿Pueden proveer COI para nuestro property management?", a: "Sí — emitimos COIs con additional-insured para property managers y vendor networks de franquicia." },
      ],
    },
  },
  {
    slug: "traulsen",
    name: "Traulsen",
    manufacturer: "Traulsen (ITW Food Equipment Group)",
    hq: "Fort Worth, Texas, USA",
    metaTitle: "Traulsen Refrigeration Repair in South Florida",
    metaDescription:
      "Traulsen reach-in, blast chiller and dealer-network refrigeration repair across Miami-Dade, Broward and Palm Beach. EPA-608, OEM parts, $89 service call.",
    teaser:
      "Reach-in refrigerators and freezers, blast chillers and dealer-network premium platforms — fine-dining, hospitals, hotels, R-series.",
    categories: ["refrigeration", "blast-chill"],
    about:
      "Traulsen is the premium tier of commercial reach-in refrigeration and the dominant brand in serious back-of-house kitchens — fine-dining lines, banquet prep, hospital production kitchens and the R-Series dealer-network specs that come standard on every consultant-designed kitchen plan. The cabinets are heavier than the volume tier, the controls are tighter, and the failure profile is shifted: less coil-grease, more electronics and door-mechanism work.",
    equipment: [
      {
        series: "RHT132WUT One-Section Reach-In Cooler",
        description:
          "Single-section R-series reach-in cooler — fine-dining back-prep, country-club pantry. Top-mount condenser, OEM hinge cartridges, INTELA-TRAUL controller.",
      },
      {
        series: "RHT232WUT Two-Section Reach-In Cooler",
        description:
          "Two-section R-series reach-in cooler — the consultant-spec workhorse on banquet kitchen plans. Door cartridge wear, gasket pull and condenser airflow lead the service log.",
      },
      {
        series: "RHT332WUT Three-Section Reach-In Cooler",
        description:
          "Three-section R-series reach-in cooler — banquet platforms, high-volume restaurant prep. Dual evaporator, single top-mount condenser.",
      },
      {
        series: "RHF132 / RHF232 / RHF332 R-Series Freezers",
        description:
          "Matching R-series freezer variants in one, two and three-section formats. Defrost termination thermostat and evaporator fan motor are the standard freezer-side repairs.",
      },
      {
        series: "RRI132 / RRI232 / RRI332 Roll-In Refrigerators",
        description:
          "R-Series roll-in refrigerators for sheet-pan rack-in production — bakery, banquet prep. Floor channel and door bumper wear.",
      },
      {
        series: "RRF132 / RRF232 Roll-In Freezers",
        description:
          "R-Series roll-in freezers for frozen production lines — defrost termination and door bushing service.",
      },
      {
        series: "RIH132 / RIH232 Pass-Thru Refrigerators",
        description:
          "Pass-thru R-Series reach-ins — kitchen-to-wait-staff handoffs in fine-dining and resort BOH. Double-sided door alignment and gasket sealing on every PM.",
      },
      {
        series: "G10010 / G12010 G-Series Compact",
        description:
          "G-series single-section reach-ins for compact kitchens — pantry stations, bar back, espresso prep. Hinge cartridge and gasket are the recurring repairs.",
      },
      {
        series: "G20010 / G22010 G-Series Two-Section",
        description:
          "G-series two-section reach-in coolers and freezers — production kitchens and country-club back-prep. INTELA-TRAUL controller and probe drift are the typical electronics calls.",
      },
      {
        series: "G30010 / G31010 G-Series Three-Section",
        description:
          "G-series three-section reach-ins — banquet platforms and large casual restaurants. Same mechanical platform, more doors, more hinge service.",
      },
      {
        series: "GHT / GLT G-Series Glass-Door Reach-Ins",
        description:
          "Glass-door variants of the G-series platform — fine-dining display and country-club beverage. Anti-sweat heater wire and frame condensate are the standard repairs.",
      },
      {
        series: "RBC50 Undercounter Blast Chiller",
        description:
          "50 lb capacity undercounter blast chiller — fine-dining cold lines, pastry stations. Core-probe socket corrosion and chill-cycle termination service.",
      },
      {
        series: "RBC100 Reach-In Blast Chiller",
        description:
          "100 lb capacity reach-in blast chiller — banquet prep, country clubs, hospital cooking. HACCP-compliant chill cycles documented on the work order.",
      },
      {
        series: "RBC200 / RBC200RT Roll-In Blast Chiller",
        description:
          "200 lb capacity roll-in blast chiller — hospital production kitchens and large banquet platforms. RT variant is the retrofit replacement. Heavy compressor and condenser PM.",
      },
      {
        series: "RBC400 / RBC700 Large-Capacity Blast Chillers",
        description:
          "400 and 700 lb capacity production blast chillers — central commissary kitchens and food-safety-regulated production. Three-phase compressor service, refrigerant charge verification.",
      },
      {
        series: "TBSU-27 / TBSU-48 / TBSU-60 / TBSU-72 Sandwich Prep",
        description:
          "Traulsen sandwich prep tables — high-end pizzerias and resort sandwich stations. Pan-rail temperature, evaporator fan and lid hinge are the standard repairs.",
      },
      {
        series: "TUC-27 / TUC-48 / TUC-60 Undercounter Coolers",
        description:
          "Traulsen undercounter refrigerators — bar back, fine-dining service stations, pastry prep. Compact top-mount or front-breathing condenser; coil cleaning lead.",
      },
      {
        series: "TS / TBC Dealer-Network Compact Cabinets",
        description:
          "Compact dealer-network cabinets for tight kitchens — bar back, espresso back-prep, satellite kitchens. Drain pan, gasket and door switch are the recurring fixes.",
      },
      {
        series: "RDT / RHT Spec-Line Premium Cabinets",
        description:
          "Spec-line premium R-series cabinets with custom interior racking and HACCP probe ports — kitchen-consultant builds in resort hotels and hospital systems.",
      },
    ],
    failureModes: [
      {
        title: "Hinge cartridge wear (R-series door)",
        detail:
          "R-series doors use heavy cartridges that wear over a decade of hard kitchen use. Door drops, gasket no longer seals, box runs warm and the compressor cycles long. Replace cartridges, re-shim the door, verify gasket pull.",
      },
      {
        title: "INTELA-TRAUL controller fault",
        detail:
          "Newer Traulsen units use the INTELA-TRAUL controller. Symptom is locked-out display, alarm-not-clearing, sensor-not-reading errors. Verify probe resistance, refresh firmware, replace controller if needed.",
      },
      {
        title: "Evaporator fan motor seize (top-mount units)",
        detail:
          "Top-mount Traulsen units have multiple evaporator fan motors that fail one at a time. The cabinet runs warm on one shelf while another reads to spec. We isolate by airflow test and swap.",
      },
      {
        title: "Defrost termination thermostat failure",
        detail:
          "Freezer ices up because the defrost termination thermostat fails to close, or fails to open. Walk the cycle manually, verify the thermostat, replace.",
      },
      {
        title: "Compressor head-pressure climb (top-mount condenser)",
        detail:
          "Top-mount condenser dust-loads even in the cleanest kitchens. Coil clean, fan service, then verify amp draw + discharge pressure at spec.",
      },
      {
        title: "Blast chiller core-probe socket failure",
        detail:
          "RBC blast chillers rely on a core probe for HACCP-compliant chill cycles. Probe socket corrodes from steam ingress, cycle reads incorrectly, food-safety log is wrong. Replace socket and probe, document with the customer.",
      },
      {
        title: "Door anti-sweat heater + frame condensate",
        detail:
          "Reach-in doors with anti-sweat heaters lose the heater wire in Florida humidity. Condensate runs down the frame. Wire and gasket are stocked.",
      },
    ],
    industrySlugs: ["restaurants", "hotels", "healthcare", "country-clubs"],
    whyBerne:
      "Traulsen is consultant-spec equipment — it lands on jobs where the kitchen is a serious operation, and the service provider needs to match. Berne carries EPA-608 across the field team, runs eighteen technicians, stocks OEM Traulsen hinge cartridges, fan motors, controllers and gaskets, and ships every refrigeration job with documented PT-chart, amp draw and box-temperature verification. Eleven years on South Florida lines, 4.79 across 871 reviews, full COI / W-9 / EPA under /credentials/.",
    serviceArea:
      "Miami-Dade, Broward and Palm Beach — fine-dining, hospital production kitchens, hotel banquet platforms and pizzerias running on Traulsen R-series and G-series. ZIPs across Miami, Aventura, Hallandale, Fort Lauderdale, Pompano, Boca Raton, Delray and West Palm.",
    faqs: [
      {
        q: "Can you replace Traulsen R-series door hinge cartridges?",
        a: "Yes — RHT, RHF and RHT232 hinge cartridges are stocked. Door drop, gasket pull and shimming verified at close-out.",
      },
      {
        q: "Do you service Traulsen blast chillers under HACCP documentation?",
        a: "Yes — RBC and blast-chiller core probe, socket, controller and chill-cycle verification with documented PT-chart and probe-resistance check for HACCP records.",
      },
      {
        q: "Is your Traulsen refrigerant work EPA-certified?",
        a: "Yes. EPA-608 universal across the field team. Refrigerant recovery, leak test and recharge are documented on the work order.",
      },
      {
        q: "What does a Traulsen service call cost?",
        a: "Our commercial service call is $89, applied toward the approved repair when authorized on the same visit.",
      },
      {
        q: "Do you stock parts for the older Traulsen mechanical-control platforms?",
        a: "Yes — capillary thermostats, defrost timers, defrost termination thermostats and gaskets for older Traulsen reach-ins. We don’t obsolete a unit when parts are still available.",
      },
      {
        q: "Can you support multi-location Traulsen coverage for a hotel group?",
        a: "Yes — multi-property dispatch, vendor reporting, COI documentation and standardized work-order format for hotel and restaurant-group accounts.",
      },
    ],
    keywords: [
      "traulsen refrigerator repair miami",
      "traulsen R-series service",
      "traulsen blast chiller repair",
      "traulsen hinge cartridge replacement",
      "traulsen commercial refrigeration south florida",
    ],
    es: {
      metaTitle: "Reparación Refrigeración Traulsen — Sur de Florida",
      metaDescription:
        "Reparación de refrigeradores Traulsen R-series, G-series, blast chillers RBC en Miami-Dade, Broward y Palm Beach. EPA-608, OEM, $89 service call.",
      teaser:
        "Reach-ins R-series, G-series, blast chillers RBC y mesas de prep TBSU — fine-dining, country clubs, panaderías y producción de hospital.",
      about:
        "Traulsen (parte de ITW Food Equipment Group) es la marca premium de refrigeración comercial en el back-of-house — reach-ins R-series y G-series, blast chillers RBC y plataformas roll-in son comunes en cocinas fine-dining, country clubs y producción de hospital del Sur de Florida. La ingeniería de Traulsen es heavy-duty: gabinetes de stainless de pared gruesa, cartuchos de bisagra reemplazables y el controlador INTELA-TRAUL en unidades más nuevas. Las reparaciones son repair-first — Traulsen está diseñado para corre veinte años con servicio adecuado.",
      equipment: [
        { series: "RRI132 / RRI232 / RRI332 Roll-In Refrigerators", description: "Refrigeradores roll-in R-Series para producción sheet-pan rack-in — panadería, prep de banquete. Desgaste de floor channel y bumper de puerta." },
        { series: "RRF132 / RRF232 Roll-In Freezers", description: "Freezers roll-in R-Series para líneas de producción frozen — terminación de defrost y servicio de bushing de puerta." },
        { series: "RIH132 / RIH232 Pass-Thru", description: "Reach-ins pass-thru R-Series — handoffs cocina-a-wait staff en fine-dining y BOH de resort. Alineación de puerta doble y sellado de empaque en cada PM." },
        { series: "G10010 / G12010 / G20010 / G30010 G-Series", description: "Reach-ins G-series single, dos y tres secciones — cocinas compactas a cocinas de producción. Cartucho de bisagra y empaque son las reparaciones recurrentes; controlador INTELA-TRAUL y drift de probe son las llamadas típicas de electrónica." },
        { series: "GHT / GLT G-Series Glass-Door", description: "Variantes glass-door de la plataforma G-series — display de fine-dining y bebida de country club. Cable anti-sweat heater y condensado en frame son las reparaciones estándar." },
        { series: "RBC50 / RBC100 / RBC200 / RBC400 / RBC700 Blast Chillers", description: "Blast chillers de 50 a 700 lb de capacidad — fine-dining, banquete, producción de hospital. Ciclos chill HACCP-compliant documentados en el work order. Corrosión del socket del core-probe y servicio del compresor lideran las llamadas." },
        { series: "TBSU-27/48/60/72 Sandwich Prep", description: "Mesas de prep de sandwich Traulsen — pizzerías high-end y stations de sandwich de resort. Temperatura del pan-rail, evap fan y bisagra de lid son las reparaciones estándar." },
        { series: "TUC-27 / TUC-48 / TUC-60 Undercounter", description: "Refrigeradores undercounter Traulsen — bar back, stations de fine-dining, pastry prep. Top-mount compacto o condensador front-breathing; cleaning de coil lead." },
      ],
      failureModes: [
        { title: "Desgaste de cartucho de bisagra (puerta R-series)", detail: "Las puertas R-series usan cartuchos pesados que se desgastan en una década de uso pesado de cocina. La puerta cae, el empaque ya no sella, la caja corre caliente y el compresor cicla largo. Reemplazamos cartuchos, re-shim la puerta, verificamos pull del empaque." },
        { title: "Falla del controlador INTELA-TRAUL", detail: "Unidades Traulsen más nuevas usan el controlador INTELA-TRAUL. Síntoma es display trancado, alarma no se limpia, errores de sensor-not-reading. Verificamos resistencia del probe, refrescamos firmware, reemplazamos controlador si se necesita." },
        { title: "Trancada de motor del evaporador fan (top-mount)", detail: "Las unidades top-mount Traulsen tienen múltiples motores de evap fan que fallan uno a la vez. El cabinet corre caliente en una repisa mientras otra lee a spec. Aislamos por test de airflow y hacemos swap." },
        { title: "Falla del termostato de defrost termination", detail: "El freezer se engela porque el termostato de defrost termination falla cerrando, o falla abriendo. Caminamos el ciclo manualmente, verificamos el termostato, reemplazamos." },
        { title: "Climb de head-pressure del compresor (top-mount)", detail: "El condensador top-mount carga polvo incluso en las cocinas más limpias. Cleaning de coil, servicio de ventilador, luego verificación de amp draw + presión de descarga a spec." },
        { title: "Falla de socket del core-probe en blast chiller", detail: "Los blast chillers RBC dependen de un core probe para ciclos chill HACCP-compliant. El socket se corroe por ingress de vapor, el ciclo lee incorrectamente, el log de food-safety está mal. Reemplazamos socket y probe, documentamos con el cliente." },
      ],
      whyBerne:
        "Traulsen es refrigeración premium que merece un técnico que entienda cartuchos de bisagra, el controlador INTELA-TRAUL, y los ciclos HACCP de los blast chillers RBC. Berne corre dieciocho técnicos EPA-608, partes Traulsen OEM en el camión — cartuchos, empaques, controladores, probes. Once años en el Sur de Florida, 4.79 / 871 reseñas, documentación completa.",
      serviceArea:
        "Miami-Dade, Broward y Palm Beach — restaurantes fine-dining, country clubs, panaderías de producción y hospitales corriendo Traulsen R-series, G-series y blast chillers RBC.",
      faqs: [
        { q: "¿Atienden cartuchos de bisagra en R-series y G-series?", a: "Sí — reemplazamos cartuchos de bisagra y re-shim la puerta para restaurar sello del empaque y rotación a spec." },
        { q: "¿Pueden hacer ciclos HACCP en blast chillers RBC?", a: "Sí — verificación del core probe, validación del ciclo chill y documentación HACCP-compliant en el work order. Coordinamos con auditores de food-safety cuando se requiera." },
        { q: "¿Su trabajo de refrigerante Traulsen es EPA-certified?", a: "Sí. EPA-608 universal en todo el field team. Recovery, leak test y recharge se documentan en el work order." },
        { q: "¿Cuánto cuesta un service call Traulsen?", a: "$89 service call comercial, aplicado a la reparación aprobada cuando se autoriza en la misma visita." },
        { q: "¿Stockan partes para plataformas Traulsen mecánicas legacy?", a: "Sí — termostatos capilares, defrost timers, defrost termination thermostats y empaques para reach-ins Traulsen más viejos. No obsoletamos una unidad cuando las partes todavía están disponibles." },
        { q: "¿Pueden soportar cobertura multi-location Traulsen para un grupo de hotel?", a: "Sí — despacho multi-property, reporting de vendor, documentación COI y formato estandarizado de work-order para cuentas de hotel y restaurant-group." },
      ],
    },
  },
]

export function getBrandProfile(slug: string): BrandProfile | undefined {
  return brandProfiles.find((b) => b.slug === slug)
}

export const brandProfileSlugs = brandProfiles.map((b) => b.slug)

/**
 * Return the brand profiles tagged as relevant for a given industry slug.
 * Derived by inverting brand.industrySlugs — keeps the source of truth on
 * the brand record so we don't drift two arrays.
 */
export function getBrandsForIndustry(industrySlug: string): BrandProfile[] {
  return brandProfiles.filter((b) => b.industrySlugs.includes(industrySlug))
}

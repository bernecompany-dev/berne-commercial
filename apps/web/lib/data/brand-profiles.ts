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

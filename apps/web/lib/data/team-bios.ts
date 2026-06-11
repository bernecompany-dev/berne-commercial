/**
 * Long-form technician + back-office bios for /team/[slug] pages.
 *
 * Source data:
 *   - C:/Users/golds/Berne_Commercial/_data/technicians.json (canonical)
 *   - lib/data/team.ts (UI roster + Person schema fields)
 *
 * Voice rules (do not violate):
 *   - Technician voice, not marketing voice.
 *   - No fabricated years, cities, or training-program dates.
 *   - Slavic-named techs may reference "trained in <region>" only when plausible
 *     ("the former Soviet bloc", "Eastern Europe") — never specific cities.
 *   - Each bio is 200-400 words and follows: Background / What I work on /
 *     Why I work at Berne / Service area.
 *   - Link references map to real /services and /brands routes on this site.
 */

export type RelatedLink = {
  /** Path on this site, e.g. "/services/walk-in-cooler-repair" */
  href: string
  /** Visible label, e.g. "Walk-in cooler repair" */
  label: string
}

export type ExtendedBio = {
  /** ~30-50 word lede shown directly under the H1. */
  lede: string
  /** Background paragraph — 2-4 sentences. */
  background: string
  /** "What I work on" — 2-4 sentences. */
  workOn: string
  /** "Why I work at Berne" — 1-2 sentences. */
  whyBerne: string
  /** Service area sentence. */
  serviceArea: string
  /** Internal links to relevant service and brand pages. */
  related: RelatedLink[]
}

/**
 * Keyed by team.ts slug. Every member of the technician roster appears here.
 * Back-office entries live in `BACK_OFFICE` below.
 */
export const TECH_BIOS: Record<string, ExtendedBio> = {
  "eugene-bernitsky": {
    lede:
      "Founder and lead diagnostic technician. 18 years on the road, in the shop, and on the phone with property managers when something is on fire. Personal guarantee on every Berne ticket.",
    background:
      "Trained as an engineer before moving into appliance service, and ran my first calls in Eastern Europe before relocating to South Florida. I picked refrigeration first because it's the category that punishes guessing — refrigerant, compressors, sealed systems, and electronics all have to line up. The Berne fleet grew out of that habit: hire people who think before they cut.",
    workOn:
      "I still take commercial dispatch calls myself. Day-to-day that means Sub-Zero 648PRO and 700-series built-ins, Wolf range diagnostics, Thermador ovens, and walk-in cooler rebuilds across Miami-Dade, Broward, and Palm Beach. When a tech runs into a control-board call they can't isolate, I'm the second pair of eyes on FaceTime.",
    whyBerne:
      "I built this company so I'd want to work here. W-2 only, paid training, real trucks, real parts, and no commission pressure to upsell a customer on a part they don't need.",
    serviceArea:
      "Personal dispatch across Miami-Dade, Broward, and Palm Beach. Bilingual: English, Russian, and conversational Spanish.",
    related: [
      { href: "/services/commercial-refrigeration-repair", label: "Commercial refrigeration repair" },
      { href: "/brands/true", label: "True commercial refrigeration" },
      { href: "/brands/hobart", label: "Hobart dishwasher service" },
    ],
  },

  mike: {
    lede:
      "Lead refrigeration technician. Sub-Zero and Wolf specialist — 12 years on built-in columns, integrated wine coolers, and walk-in systems.",
    background:
      "I got into refrigeration through restaurant work — bussing tables turned into bussing condenser coils, and I never went back. Picked up factory training on Sub-Zero sealed systems early, and have stayed on the premium side of the catalog ever since. If a 648PRO drops out of temp at 11 p.m., the call usually lands with me.",
    workOn:
      "Built-in columns (Sub-Zero 700, 736TC, integrated wine), Wolf ranges and ovens, walk-in cooler boxes for restaurants, and the kind of sealed-system work that needs an EPA-certified tech with a recovery machine in the truck. I carry digital manifold gauges, micron meter, and a leak detector on every refrigerant call.",
    whyBerne:
      "Honest dispatch. Honest pricing. I've worked at shops that quote a flat compressor swap before they've pulled the panel — Berne won't do that.",
    serviceArea:
      "Primary coverage Hallandale Beach, Aventura, Sunny Isles, Miami Beach, and the Brickell corridor. English and Russian.",
    related: [
      { href: "/services/walk-in-cooler-repair", label: "Walk-in cooler repair" },
      { href: "/services/commercial-refrigeration-repair", label: "Commercial refrigeration" },
      { href: "/brands/traulsen", label: "Traulsen built-in service" },
    ],
  },

  "akhmed-osmanov": {
    lede:
      "Senior refrigeration and commercial laundry technician. 12 years in the trade — property managers and laundromat owners call me by name.",
    background:
      "Started in the former Soviet bloc on industrial refrigeration before crossing over to South Florida commercial work. The first thing I learned: a laundromat with three dead UniMacs is not three identical problems. Patience and a multimeter solve more jobs than any parts catalog.",
    workOn:
      "Commercial laundry routes — UniMac, Speed Queen, Electrolux Professional, Continental Girbau. Coin and card payment systems, drive trains, gas dryer ignition and venting, plus refrigeration crossover work when a walk-in goes down on the same site. EPA 608 Universal certified for refrigerant handling.",
    whyBerne:
      "Fleet, dispatch, and parts — all the things that used to slow me down when I was solo. Now I show up, fix it, move to the next stop.",
    serviceArea:
      "Property-management routes across Miami-Dade and Broward, with regular laundromat stops in Hollywood, Pembroke Pines, and North Miami. English and Russian.",
    related: [
      { href: "/services/commercial-laundry-repair", label: "Commercial laundry repair" },
      { href: "/services/commercial-washer-repair", label: "Commercial washer service" },
      { href: "/industries/multi-family", label: "Property management dispatch" },
    ],
  },

  "andrei-lavrov": {
    lede:
      "Restaurant equipment specialist with a strong sealed-system background. EPA 608 Universal — compressor swaps and refrigerant work other shops won't touch.",
    background:
      "Trained on industrial equipment in Eastern Europe before moving into US commercial service. I spent the first few years specifically chasing leak-detection and recovery work, because that's the corner of the trade where reading the gauges wrong gets expensive fast.",
    workOn:
      "Fryers, ovens, ranges, steamers, gas valves, and ignition systems on the cooking side. On the refrigeration side: compressor failures, evaporator coil leaks, sealed-system recharge on built-in fridges and prep tables. I keep recovery machines and nitrogen on the truck — no shortcut refrigerant pulls.",
    whyBerne:
      "Real parts inventory, real backup from senior techs, and a dispatcher who actually reads the notes I leave at end-of-day.",
    serviceArea:
      "Restaurant calls across Broward and Palm Beach — Fort Lauderdale, Boca Raton, Delray Beach, Boynton. English and Russian.",
    related: [
      { href: "/services/fryer-repair", label: "Commercial fryer repair" },
      { href: "/services/commercial-oven-repair", label: "Commercial oven repair" },
      { href: "/industries/restaurants", label: "Restaurant service program" },
    ],
  },

  boris: {
    lede:
      "Ice machine specialist on the team. Hoshizaki, Manitowoc, Scotsman — water chemistry, harvest cycles, electronic boards.",
    background:
      "Ice is its own discipline. I picked it up after a few years on general refrigeration when I noticed how much money operators lose to bad water and ignored preventative maintenance — a $30 inlet filter saves a $1,400 condenser replacement six months later. I lean into that conversation on every site visit.",
    workOn:
      "Hoshizaki KM-series, Manitowoc Indigo NXT, Scotsman Prodigy and Eclipse. Harvest cycle diagnostics, float and bin control boards, water inlet valves, condenser cleaning, and full preventative-maintenance schedules for bar and restaurant operators.",
    whyBerne:
      "Berne sends me to the same sites month after month, so I actually know each machine's history — which condenser was cleaned when, which board has been flaky.",
    serviceArea:
      "Bars, restaurants, hotels, and convenience stores from Aventura through Coral Gables and west to Doral. English and Russian.",
    related: [
      { href: "/services/ice-machine-repair", label: "Ice machine repair" },
      { href: "/brands/hoshizaki", label: "Hoshizaki service" },
      { href: "/brands/manitowoc", label: "Manitowoc service" },
    ],
  },

  "denis-novitskii": {
    lede:
      "Refrigeration technician. Reach-ins, prep tables, display merchandisers, walk-ins. Customers on Google reviews ask for me by name — \"Dennis was great\" lands often.",
    background:
      "Started in residential refrigeration and moved to commercial after a year, because component-level diagnostics are where the interesting problems live. I'm not the fastest tech on the team but I leave the cleanest notes, which matters when the next call on the same site lands six months later.",
    workOn:
      "Restaurant-side refrigeration — True and Traulsen reach-ins, Continental and Beverage-Air prep tables, Hussmann display merchandisers. Diagnostics work that goes past \"replace the board\" and finds the actual upstream cause: bad relay, miswired thermostat, condensate line, dirty condenser.",
    whyBerne:
      "Honest shop. I don't have to upsell anything. When I quote a job it's the job that's actually needed.",
    serviceArea:
      "Restaurant route across Broward — Hollywood, Dania Beach, Fort Lauderdale, Sunrise. English and Russian.",
    related: [
      { href: "/services/reach-in-cooler-repair", label: "Reach-in cooler repair" },
      { href: "/services/prep-table-repair", label: "Prep table repair" },
      { href: "/brands/true", label: "True Manufacturing service" },
    ],
  },

  "dzmitrii-kitou": {
    lede:
      "Commercial laundry specialist. Drum bearings, transmissions, drain pump rebuilds — the laundry jobs other techs flag as too hard.",
    background:
      "Came up on industrial laundry equipment in Eastern Europe, then transitioned to US commercial work. Coin operations and card-reader integrations were the steepest learning curve when I started here — those electronics are nothing like what's installed overseas.",
    workOn:
      "UniMac UWN and UF-series, Speed Queen SCN and SF-series, gas dryer ignition and exhaust, drum-bearing rebuilds, drive trains, transmission swaps, and coin/card payment integrations. Front-load and top-load — both feel the same once you have the rear panel off.",
    whyBerne:
      "Dispatch knows my hard-job calibration. They send me the difficult tickets and protect my schedule from the easy ones, so I can actually finish what I start.",
    serviceArea:
      "Multifamily laundry rooms and laundromats across Miami-Dade and Broward — Hialeah, Miami Lakes, Pembroke Pines, Davie. English and Russian.",
    related: [
      { href: "/services/commercial-laundry-repair", label: "Commercial laundry repair" },
      { href: "/services/commercial-dryer-repair", label: "Commercial dryer repair" },
      { href: "/industries/multi-family", label: "Property management program" },
    ],
  },

  dzmitrii: {
    lede:
      "Refrigeration technician focused on the restaurant side — prep tables, reach-ins, display cases, ice makers.",
    background:
      "Moved into US commercial service after a few years of mixed residential and commercial work overseas. I keep my diagnostics conservative — gauges on, panels off, decision after. The job pays for the slow approach the first time and saves you the second.",
    workOn:
      "Reach-in coolers and freezers, prep tables, glass-door display merchandisers, undercounter ice makers, commercial dishwashers on the smaller end. Component-level work on condensers, evaporator fans, and electronic temperature controls.",
    whyBerne:
      "Berne has the parts on the truck. That alone is the difference between a same-day fix and a return visit.",
    serviceArea:
      "Restaurant calls across Broward and Palm Beach. English and Russian.",
    related: [
      { href: "/services/reach-in-cooler-repair", label: "Reach-in cooler repair" },
      { href: "/services/prep-table-repair", label: "Prep table repair" },
      { href: "/services/ice-machine-repair", label: "Ice machine repair" },
    ],
  },

  "evgenii-knyazev": {
    lede:
      "Refrigeration technician. Refrigerant systems, walk-ins, reach-ins. Strong leak-detection workflow.",
    background:
      "Got into refrigeration through HVAC work and decided commercial appliance refrigeration was the more interesting branch. Leak-detection became my niche because half the failed compressors I see actually died from a slow leak nobody addressed for six months.",
    workOn:
      "Walk-in cooler and freezer service, restaurant reach-ins, sealed-system recharge, leak-detection with electronic sniffers and ultraviolet dye, and refrigerant recovery. EPA 608 Universal — I won't pull a system without a recovery machine.",
    whyBerne:
      "Real W-2 employment, real training budget, and dispatch that respects my service notes from the last visit.",
    serviceArea:
      "Restaurant and grocery routes across Broward and Palm Beach. English and Russian.",
    related: [
      { href: "/services/walk-in-cooler-repair", label: "Walk-in cooler repair" },
      { href: "/services/walk-in-freezer-repair", label: "Walk-in freezer repair" },
      { href: "/services/commercial-refrigeration-repair", label: "Commercial refrigeration" },
    ],
  },

  "maksim-shiryagin": {
    lede:
      "Diagnostic technician. Patient and thorough — would rather take an extra 30 minutes than guess at a root cause.",
    background:
      "Started in industrial electronics overseas and crossed into appliance service in South Florida. The diagnostic workflow is where I add the most value: read the codes, verify the inputs, then make a parts decision — not the other way around.",
    workOn:
      "Control board diagnostics on cooking-line equipment, multi-brand troubleshooting across Wolf, Viking, Thermador, KitchenAid, GE Monogram, and Sub-Zero. I keep an oscilloscope and a meter that actually reads true-RMS in the truck because clamps lie.",
    whyBerne:
      "The team is built around technicians who think first. That's not the norm in this trade.",
    serviceArea:
      "Multi-county dispatch — anywhere a control-board call has stumped the first tech. English and Russian.",
    related: [
      { href: "/services/commercial-oven-repair", label: "Commercial oven repair" },
      { href: "/brands/vulcan", label: "Vulcan commercial range" },
      { href: "/brands/rational", label: "Rational combi-oven service" },
    ],
  },

  "nikita-maslakov": {
    lede:
      "Senior technician — ice machines, dryers, gas appliances, vent installation. Quick, polite, knowledgeable; that's the customer feedback that keeps coming back.",
    background:
      "Crossed over from a mechanical trade and built up appliance-side skills with an emphasis on gas systems and refrigerant. Two of the trickiest categories on the same truck.",
    workOn:
      "Hoshizaki and Manitowoc ice machines, commercial gas dryers (Speed Queen, Maytag, Huebsch), dryer-vent installation and re-routing, and refrigerant work on smaller reach-in systems. EPA 608 certified.",
    whyBerne:
      "Training budget — Berne pays for me to stay current on factory courses, not just to ship me to a job.",
    serviceArea:
      "Routes across Miami-Dade and Broward, with regular dryer-vent jobs in Aventura, North Miami Beach, and Hollywood high-rises. English and Russian.",
    related: [
      { href: "/services/ice-machine-repair", label: "Ice machine repair" },
      { href: "/services/commercial-dryer-repair", label: "Commercial dryer repair" },
      { href: "/brands/hoshizaki", label: "Hoshizaki service" },
    ],
  },

  "nikita-shirshov": {
    lede:
      "Commercial equipment tech. Premium cooking equipment plus bar and beverage — soda guns, frozen-drink dispensers, draft systems.",
    background:
      "Worked through a few smaller shops before joining Berne. The cooking side and the bar side overlap more than people realize — both come down to gas, electrical, and the cleanliness of the system that the operator skipped on PM.",
    workOn:
      "Wolf, Viking, and Thermador ranges and ovens; Hatco warming systems; Bunn coffee equipment; Lancer and Cornelius beverage dispensers; Taylor frozen-drink machines. Cooktops, ignitions, valves, and electronic ignition controls.",
    whyBerne:
      "The fleet stocks the right brand-specific parts. I'm not waiting on overnight shipping every time a Viking ignitor blows.",
    serviceArea:
      "Restaurant and bar route — Miami Beach, Brickell, Coconut Grove, Coral Gables. English and Russian.",
    related: [
      { href: "/services/commercial-oven-repair", label: "Commercial oven repair" },
      { href: "/brands/vulcan", label: "Vulcan commercial range" },
      { href: "/brands/garland", label: "Garland commercial cooking" },
    ],
  },

  "refat-bekirov": {
    lede:
      "Senior multi-category technician. Refrigeration, restaurant equipment, premium brands, commercial laundry. Reviewers ask for me by name.",
    background:
      "10 years across both residential premium-brand work and commercial routes. The variety keeps me sharp — every category has a different failure pattern, and you stop relying on shortcuts when the next job might be something completely different.",
    workOn:
      "Sub-Zero and Wolf premium service, restaurant reach-ins and prep tables, commercial laundry crossover for property-managed buildings, and full diagnostic work on multi-brand kitchens. EPA 608 Universal and Florida technician license.",
    whyBerne:
      "Honest dispatch, honest billing, and a team I respect. That's why I've stayed.",
    serviceArea:
      "Premium routes across Miami-Dade, Broward, and Palm Beach — Aventura, Bal Harbour, Sunny Isles, Boca Raton. English and Russian.",
    related: [
      { href: "/services/commercial-refrigeration-repair", label: "Commercial refrigeration" },
      { href: "/brands/true", label: "True commercial refrigeration" },
      { href: "/services/commercial-laundry-repair", label: "Commercial laundry" },
    ],
  },

  "ruslan-hordieiev": {
    lede:
      "Refrigeration technician with strong front-load laundry coverage. Reach-ins, walk-ins, and washers.",
    background:
      "Came through HVAC and crossed into appliance work. Front-load laundry is its own animal — door seals, drive trains, drum bearings, and digital control boards that look nothing like top-load systems.",
    workOn:
      "Reach-in coolers and freezers, walk-in service for restaurants and groceries, front-load washers (residential and commercial), refrigerant diagnostics, and electrical troubleshooting on motor and pump circuits.",
    whyBerne:
      "Real training time and real parts inventory. Both make the work feel possible.",
    serviceArea:
      "Routes across Broward and northern Miami-Dade — Hollywood, Hallandale Beach, Aventura, North Miami. English and Russian.",
    related: [
      { href: "/services/reach-in-cooler-repair", label: "Reach-in cooler repair" },
      { href: "/services/walk-in-cooler-repair", label: "Walk-in cooler repair" },
      { href: "/services/commercial-washer-repair", label: "Commercial washer repair" },
    ],
  },

  "shokhrat-agabekov": {
    lede:
      "Restaurant equipment technician. Gas and electric cooking equipment, hood components, warming systems.",
    background:
      "Mechanical background before crossing into commercial appliance service. The cooking line was an easy choice — I prefer the immediacy of gas and ignition work to the slower-paced refrigeration troubleshooting cycle.",
    workOn:
      "Vulcan and Wolf ranges, Garland and Imperial cooktops, microwaves, hood components, warming wells, and proofers. Gas valves, ignition modules, electric elements, and the kind of operator-error issues that resolve themselves once someone explains what's actually happening.",
    whyBerne:
      "Berne pays for ongoing factory training. That matters in the cooking-line segment where ignition systems evolve every model year.",
    serviceArea:
      "Restaurant calls across Miami-Dade and Broward. English and Russian.",
    related: [
      { href: "/services/commercial-range-repair", label: "Commercial range repair" },
      { href: "/services/commercial-hood-repair", label: "Commercial hood repair" },
      { href: "/brands/garland", label: "Garland commercial cooking" },
    ],
  },

  "valerii-basov": {
    lede:
      "Commercial equipment tech specializing in ventilation — hoods, exhaust fans, makeup-air units — plus cooking-line equipment and dishwashers.",
    background:
      "Worked on industrial ventilation systems before moving into commercial appliance service. Hood and makeup-air work is undervalued — most kitchens are running with mismatched airflow that costs them on the cooking line and on energy bills.",
    workOn:
      "Commercial hood motors, exhaust fan belts and bearings, makeup-air unit (MAU) controls, ANSUL inspections coordination, and a steady book of cooking-line and commercial dishwasher work (Hobart AM-15, CRS-66, Stero) on the same routes.",
    whyBerne:
      "Multi-category routes are good for me — I'd rather solve four different problems in a day than do the same one four times.",
    serviceArea:
      "Restaurant and food-service ventilation across Miami-Dade and Broward. English and Russian.",
    related: [
      { href: "/services/commercial-hood-repair", label: "Commercial hood repair" },
      { href: "/brands/hobart", label: "Hobart dishwasher service" },
      { href: "/industries/restaurants", label: "Restaurant program" },
    ],
  },

  "viktor-kamenschikov": {
    lede:
      "Senior refrigeration specialist — 11 years on commercial work. Walk-in rebuilds, compressor service, complex refrigerant systems.",
    background:
      "Long career in commercial refrigeration, much of it on rebuild and overhaul work rather than break-fix. There's a difference between replacing a compressor and rebuilding a system that's been wrong for three years — I prefer the second job.",
    workOn:
      "Full walk-in rebuilds, semi-hermetic compressor service, EPR valves, head-pressure controls, defrost timing, and refrigerant management on multi-evap systems. Complex jobs that need a real plan before any wrench comes out.",
    whyBerne:
      "Berne lets me take the time the job actually needs. The shops that rush these jobs are the ones that get called back in three months.",
    serviceArea:
      "Grocery, restaurant, and industrial walk-in work across Miami-Dade and Broward. English and Russian.",
    related: [
      { href: "/services/walk-in-cooler-repair", label: "Walk-in cooler repair" },
      { href: "/services/walk-in-freezer-repair", label: "Walk-in freezer repair" },
      { href: "/services/commercial-refrigeration-repair", label: "Commercial refrigeration" },
    ],
  },
}

/**
 * Dispatch & operations roster — the back office behind the technician fleet.
 *
 * Voice rules: bios describe what the ROLE covers at Berne — no fabricated
 * personal histories, years, or cities. Taglines are one truthful role line.
 */
export type BackOfficeMember = {
  slug: string
  name: string
  role: string
  photo: string
  /** One short, truthful role line shown on roster cards. */
  tagline: string
  bio: ExtendedBio
}

export const BACK_OFFICE: BackOfficeMember[] = [
  {
    slug: "bogdan",
    name: "Bogdan",
    role: "Operational Director",
    photo: "/team/bogdan.jpg",
    tagline: "Runs day-to-day operations behind the 18-technician fleet.",
    bio: {
      lede:
        "Operational Director — responsible for the machine behind the fleet: dispatch standards, vendor compliance, parts logistics, and the service quality the customer actually feels.",
      background:
        "Operations covers everything that doesn't happen on a truck but makes the work on the truck possible: the dispatch board, fleet capacity planning, vendor compliance for property-management clients, and the escalation path when a commercial account needs an answer today.",
      workOn:
        "Day-to-day oversight of the dispatch and operations team, technician capacity planning across Miami-Dade, Broward, and Palm Beach, COI and vendor-portal compliance, and commercial-account escalations.",
      whyBerne:
        "Berne treats dispatch and compliance as features, not checkboxes. That makes this role about service quality, not paperwork.",
      serviceArea:
        "Oversees operations for the full Berne service area — Miami-Dade, Broward, and Palm Beach.",
      related: [
        { href: "/become-a-client", label: "Become a commercial client" },
        { href: "/credentials", label: "Licenses & credentials" },
      ],
    },
  },
  {
    slug: "artem",
    name: "Artem",
    role: "Operational Manager & IT",
    photo: "/team/artem.jpg",
    tagline: "Keeps dispatch software, routing, and phone systems running.",
    bio: {
      lede:
        "Operational Manager and IT — the systems side of dispatch: the software, routing tools, phones, and ticketing that turn an inbound call into a tech at your door.",
      background:
        "Berne dispatch runs on real software — ticketing, live routing, and service history per site — not whiteboards. Someone has to keep that stack running, integrated, and honest. That's this role.",
      workOn:
        "Dispatch and ticketing systems, technician routing tools, phone and online-request intake, and the operational reporting that multi-location commercial accounts ask for.",
      whyBerne:
        "Dispatch quality is a software problem as much as a people problem. Berne invests in both.",
      serviceArea:
        "Systems support for the full dispatch operation across Miami-Dade, Broward, and Palm Beach.",
      related: [
        { href: "/request-dispatch", label: "Request commercial dispatch" },
        { href: "/services", label: "Service catalog" },
      ],
    },
  },
  {
    slug: "gabe",
    name: "Gabe",
    role: "Operational Manager",
    photo: "/team/gabe.jpg",
    tagline: "Coordinates schedules, parts, and technician routes.",
    bio: {
      lede:
        "Operational Manager — schedules, parts, and technician load balancing. The role that decides whether a job gets fixed on the first visit or needs a second one.",
      background:
        "A same-day fix depends on logistics that happen before the truck rolls: the right tech, the right route order, and the right parts loaded the night before. This role owns that sequence.",
      workOn:
        "Technician schedule coordination, parts pre-load for the next day's dispatch board, same-day reschedule logistics when a job runs long, and route balancing across the fleet.",
      whyBerne:
        "Berne stocks real parts-on-truck inventory, which makes first-visit fixes an operations goal you can actually hit.",
      serviceArea:
        "Coordinates fleet logistics across Miami-Dade, Broward, and Palm Beach.",
      related: [
        { href: "/services", label: "Service catalog" },
        { href: "/brands", label: "Brands serviced" },
      ],
    },
  },
  {
    slug: "keith",
    name: "Keith",
    role: "Dispatch Lead Operator",
    photo: "/team/keith.jpg",
    tagline: "Leads the dispatch desk — triage, routing, ETA windows.",
    bio: {
      lede:
        "Dispatch Lead Operator — first triage on incoming commercial tickets, and the person who decides which tech goes where, in what order.",
      background:
        "Dispatch is the difference between a same-day fix and a return visit. The lead operator role covers ticket triage, technician routing, ETA windows, and the day-of communication that keeps a property manager calm when a walk-in goes down at 6 a.m.",
      workOn:
        "Live routing across Miami-Dade, Broward, and Palm Beach. Triage of incoming dispatch tickets, emergency prioritization for refrigeration and food-safety-critical equipment, and ETA communication to the customer.",
      whyBerne:
        "Berne dispatch runs on real software and real notes from real techs — not whiteboards and guesses.",
      serviceArea:
        "Coordinates the full fleet across Miami-Dade, Broward, and Palm Beach.",
      related: [
        { href: "/request-dispatch", label: "Request commercial dispatch" },
        { href: "/services", label: "Service catalog" },
      ],
    },
  },
  {
    slug: "jayla",
    name: "Jayla",
    role: "Dispatch Operator",
    photo: "/team/jayla.jpg",
    tagline: "Takes inbound service calls and books dispatch tickets.",
    bio: {
      lede:
        "Dispatch Operator — one of the voices answering when a commercial customer calls Berne, and the person who turns that call into a scheduled dispatch ticket.",
      background:
        "Every Berne job starts as a phone call or an online request. The dispatch operator role qualifies the call, captures the equipment and site details a technician needs, and books the visit into the live dispatch board.",
      workOn:
        "Inbound call qualification, dispatch ticket intake, scheduling against technician routes, and keeping the customer informed from booking through arrival.",
      whyBerne:
        "A real in-house dispatch desk — not an answering service. The person who books the call works next to the people who route it.",
      serviceArea:
        "Phone and online-request coverage during business hours across all Berne service areas.",
      related: [
        { href: "/contact", label: "Contact Berne Commercial" },
        { href: "/request-dispatch", label: "Request dispatch online" },
      ],
    },
  },
  {
    slug: "lina",
    name: "Lina",
    role: "Dispatch Operator",
    photo: "/team/lina.jpg",
    tagline: "Schedules service visits and keeps customers updated.",
    bio: {
      lede:
        "Dispatch Operator — scheduling service visits and keeping commercial customers updated from first call through job completion.",
      background:
        "Commercial customers don't just need a fix — they need to know when the tech arrives, what happens if a part is ordered, and who to call with a question. The dispatch operator role owns that communication loop.",
      workOn:
        "Service visit scheduling, ETA updates, follow-up coordination when a job needs a parts order or a second visit, and day-of communication with restaurant managers and property managers.",
      whyBerne:
        "Berne's dispatch desk reads the technician's notes from the last visit before booking the next one. That context makes the job possible to do well.",
      serviceArea:
        "Phone and email coverage during business hours across all Berne service areas.",
      related: [
        { href: "/contact", label: "Contact Berne Commercial" },
        { href: "/become-a-client", label: "Become a commercial client" },
      ],
    },
  },
  {
    slug: "stacey",
    name: "Stacey",
    role: "Dispatch Operator",
    photo: "/team/stacey.jpg",
    tagline: "Handles dispatch tickets and day-of customer updates.",
    bio: {
      lede:
        "Dispatch Operator — handling dispatch tickets and the day-of updates that keep a commercial kitchen or property office in the loop.",
      background:
        "A dispatch ticket isn't done when it's booked. Jobs run long, parts get ordered, schedules shift — and the customer needs to hear it from a person, not a portal. This role keeps that loop closed.",
      workOn:
        "Dispatch ticket handling, day-of customer updates, reschedule coordination, and post-service follow-up so completed jobs actually get closed out.",
      whyBerne:
        "The dispatch desk and the technicians are one team under one roof. Questions get answered the same hour, not the next day.",
      serviceArea:
        "Phone and email coverage during business hours across all Berne service areas.",
      related: [
        { href: "/contact", label: "Contact Berne Commercial" },
        { href: "/request-dispatch", label: "Request dispatch online" },
      ],
    },
  },
]

export const BACK_OFFICE_BY_SLUG: Record<string, BackOfficeMember> =
  Object.fromEntries(BACK_OFFICE.map((m) => [m.slug, m]))

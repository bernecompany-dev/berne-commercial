import type { SymptomRow } from "./services"
import type { BrandServiceSlug } from "./brand-service-slugs"

/**
 * Brand-specific service pages — /services/<brand>-<equipment>-repair.
 *
 * A third flavor of service page (after the services.ts hubs and the static
 * medical-lab route): one page per high-volume "{brand} {equipment} repair"
 * query (Content_Plan 2026-06-10 — manitowoc ice machine repair 12,100/mo,
 * hoshizaki 6,600, scotsman 3,600, hobart dishwasher 2,900, …).
 *
 * Deliberately NOT entries in services.ts — a services.ts entry would spawn
 * 70 phantom /{city}/<slug> combo routes (same decision as the medical-lab
 * page; parked with Eugene). Routes are static folders under app/services/
 * rendering the shared <BrandServicePage> template from this data. EN-only:
 * metaFor esAlternate=false.
 *
 * Content rules (independent service company):
 *   - NO "authorized service partner/agent" claims, ever. Each page renders
 *     the trademark + independence disclaimer from the template.
 *   - Error-code tables are general technician knowledge for the brand line
 *     (Indigo/NEO alerts, KM beep codes, Prodigy codes…) — keep them at the
 *     level a field tech would recognize, no invented numeric codes.
 *   - Canonical facts only: 18 techs, 29,000+ services, since 2015,
 *     4.79★/871, $89 service call, Miami-Dade/Broward/Palm Beach.
 */

export type BrandServiceCode = {
  /** What the operator sees on the display / hears from the board */
  code: string
  /** What the machine is reporting */
  meaning: string
  /** What our tech actually does about it */
  action: string
}

export type BrandService = {
  /** /services/<slug> — must be listed in brand-service-slugs.ts (keeps the
   *  language switcher's EN-only list in sync; see that module's docblock) */
  slug: BrandServiceSlug
  /** Brand name as written in copy ("Manitowoc") */
  brand: string
  /** /brands/<slug> on this site, if a brand profile exists */
  brandSlug?: string
  /** H1 base — rendered as `${title} in South Florida` */
  title: string
  /** Short label for breadcrumbs / pills */
  shortTitle: string
  /** <=52 chars — layout template appends " · Berne" (8 chars) */
  metaTitle: string
  /** <=155 chars */
  metaDescription: string
  /** Answer-first hero paragraph: brand + 24/7 + South Florida + $89 */
  heroDescription: string
  /** 2-3 intro paragraphs ("Why these machines fail / how we work them") */
  intro: string[]
  /** Heading for the codes/fault section */
  codesHeading: string
  /** 1 short paragraph framing the codes table */
  codesIntro: string
  codes: BrandServiceCode[]
  /** Optional footnote under the codes table */
  codesNote?: string
  /** Same shape as the service-hub tables */
  symptomTable: SymptomRow[]
  /** "What we service" — model lines, with detail */
  equipment: { name: string; detail: string }[]
  /** 4-6 — rendered visibly AND as FAQPage schema (site rule) */
  faqs: { q: string; a: string }[]
  /** Cross-link pills (hub, compare pages, brand profile) */
  related: { label: string; href: string }[]
  /** /request-dispatch?topic=<requestTopic> */
  requestTopic: string
  /** ISO yyyy-mm-dd — honest sitemap lastmod */
  datePublished: string
}

// ---------------------------------------------------------------------------
// 1. Manitowoc ice machine repair — 12,100/mo
// ---------------------------------------------------------------------------

const MANITOWOC: BrandService = {
  slug: "manitowoc-ice-machine-repair",
  brand: "Manitowoc",
  brandSlug: "manitowoc",
  title: "Manitowoc Ice Machine Repair",
  shortTitle: "Manitowoc Ice Machine",
  metaTitle: "Manitowoc Ice Machine Repair Miami — 24/7",
  metaDescription:
    "Manitowoc Indigo, NEO & i-Series fixed same-day across South Florida. 18 W-2 techs read the fault codes daily. 4.79★ from 871 reviews. $89 service call.",
  heroDescription:
    "Same-day Manitowoc ice machine repair across Miami-Dade, Broward and Palm Beach — Indigo NXT, NEO, i-Series and S-Series cubers, plus RNS/RFS nugget and flake machines. 24/7 emergency dispatch for commercial accounts, $89 service call — free with approved repair.",
  intro: [
    "Manitowoc is the highest-volume ice machine in our South Florida ticket history — more restaurants, hotels and bars run Indigo and NEO heads here than any other brand. That volume means our 18 W-2 technicians see every Manitowoc failure mode weekly, carry the common parts on the truck (ice thickness probes, water level probes, dump valves, fan motors, bin switches), and clear most calls on the first visit.",
    "South Florida is hard duty for a Manitowoc. Salt air corrodes condenser fins and fan motors on coastal installs; our mineral-heavy water scales evaporator plates and fouls the sensing probes the Indigo control system depends on; and 90°F+ ambient in cramped back-of-house alcoves pushes discharge temperatures into the range where the controller starts derating production or shutting the machine down to protect the compressor. Most of the \"my Manitowoc died\" calls we run trace back to one of those three local stressors, not a defective machine.",
    "We are an independent commercial service company — not a Manitowoc dealership — which means we work for you, not a warranty queue. Out-of-warranty Indigo, NEO, i-Series, S-Series, QuietQube remote systems and legacy Q/J-Series heads are our daily bread, and we will tell you honestly when a 12-year-old machine is past the repair-vs-replace line.",
  ],
  codesHeading: "Manitowoc fault codes & display alerts we clear daily",
  codesIntro:
    "Indigo NXT and NEO machines report faults as plain-text alerts on the display; older i-Series and S-Series boards log equivalent safety-limit events. These are the alerts behind most of our Manitowoc dispatches — and what each one usually means in South Florida conditions.",
  codes: [
    {
      code: "Long Freeze / freeze time exceeded",
      meaning:
        "The freeze cycle hit its safety limit before the ice thickness probe was satisfied.",
      action:
        "Usually low refrigerant charge, a dirty condenser, or a scaled evaporator. We check charge and superheat, clean the condenser, and descale before condemning the compressor.",
    },
    {
      code: "Long Harvest / harvest time exceeded",
      meaning:
        "The slab didn't release from the evaporator within the harvest safety window.",
      action:
        "Scale on the evaporator plate, a failed hot-gas valve, or a worn water dump valve. Descale plus valve test — harvest assist components ride on the truck.",
    },
    {
      code: "High Discharge Temperature",
      meaning:
        "Compressor discharge temp exceeded the controller's protection limit.",
      action:
        "Classic South Florida alert: fouled condenser coil, dead condenser fan motor, or the machine boxed into an alcove with no airflow. Coil cleaning and fan replacement are same-day fixes.",
    },
    {
      code: "Ice Thickness Probe fault",
      meaning:
        "The controller can't read the probe that ends the freeze cycle.",
      action:
        "Mineral scale bridges the probe or the harness corrodes. We clean or replace the probe and verify bridging thickness afterward.",
    },
    {
      code: "Water Level Probe / water system fault",
      meaning:
        "The machine isn't seeing water at the level probe within the fill window.",
      action:
        "Scaled probe, clogged water inlet valve or failed float — we trace the water path from filter to sump and replace the failed component.",
    },
    {
      code: "Bin Switch fault",
      meaning:
        "The controller sees an implausible bin-switch state, so the machine won't cycle.",
      action:
        "Stuck or failed bin switch / damper-door magnet on QuietQube systems. Quick diagnosis, cheap part, common call.",
    },
    {
      code: "Compressor / discharge sensor fault",
      meaning:
        "A thermistor the protection logic depends on reads open or shorted.",
      action:
        "We confirm with resistance checks before replacing — corroded connectors cause false sensor codes on coastal installs.",
    },
  ],
  codesNote:
    "Older dip-switch and LED-board Manitowocs (Q, J, B-Series) report the same safety limits as blink patterns — we service those too.",
  symptomTable: [
    {
      symptom: "Machine runs but makes no ice",
      cause: "Failed water inlet valve, scaled float/probes, or low charge",
      cost: "$150–$450",
      response: "Same-day",
    },
    {
      symptom: "Thin, cloudy or shallow cubes",
      cause: "Scaled evaporator or ice thickness probe out of position",
      cost: "$150–$350",
      response: "Same-day",
    },
    {
      symptom: "Ice won't drop — slab freezes solid to the plate",
      cause: "Harvest valve failure or heavy evaporator scale",
      cost: "$200–$500",
      response: "Same-day",
    },
    {
      symptom: "Production down 30-50% in summer",
      cause: "Dirty condenser or weak fan motor in high ambient",
      cost: "$120–$300",
      response: "Same-day",
    },
    {
      symptom: "Machine trips off on high discharge temp",
      cause: "Blocked condenser airflow — the #1 South Florida Manitowoc call",
      cost: "$120–$350",
      response: "Emergency",
    },
    {
      symptom: "Water leaking from the head or bin area",
      cause: "Split distribution tube, dump valve, or clogged drain",
      cost: "$100–$280",
      response: "Same-day",
    },
    {
      symptom: "Compressor dead on a 10+ year machine",
      cause: "End-of-life sealed system — we run the repair-vs-replace math",
      cost: "$800–$1,400",
      response: "24–48h",
    },
  ],
  equipment: [
    {
      name: "Indigo NXT Series (IYT/IDT)",
      detail:
        "Current touch-display cuber line, half-dice to dice, 300-2,100 lb/day. Probe faults, harvest issues and controller diagnostics are daily work.",
    },
    {
      name: "NEO Undercounter Series (UYF/UDF)",
      detail:
        "Self-contained undercounter cubers in bars and cafés — tight-alcove airflow problems and scale dominate the tickets.",
    },
    {
      name: "i-Series & S-Series legacy heads",
      detail:
        "Thousands still running across South Florida. Full support: boards, probes, valves, sealed-system work with EPA 608-certified techs.",
    },
    {
      name: "QuietQube remote systems (CVD condensers)",
      detail:
        "Remote-condenser installs on rooftops take the worst of the salt air — fan motors, contactors and line-set issues.",
    },
    {
      name: "RNS / RFS nugget & flake machines",
      detail:
        "Healthcare and beverage nugget ice — auger bearings, gearmotor wear and water-seal failures before they take out the auger.",
    },
    {
      name: "Bins, dispensers & filtration",
      detail:
        "B-Series bins, hotel dispensers, water filtration sizing and replacement schedules that actually match South Florida water.",
    },
  ],
  faqs: [
    {
      q: "Do you repair Manitowoc ice machines the same day in Miami?",
      a: "Yes — Manitowoc calls dispatch same-day across Miami-Dade, Broward and Palm Beach, seven days a week, and a down ice machine in season is treated as an emergency. The $89 commercial service call is free if you approve the repair — you only pay it if you decline.",
    },
    {
      q: "Are you an authorized Manitowoc service agent?",
      a: "No — and that's deliberate. Berne is an independent commercial service company. We are not affiliated with Manitowoc and don't process factory warranty claims; what we do is repair out-of-warranty Indigo, NEO, i-Series and legacy machines fast, with parts on the truck and no warranty-queue wait times. For in-warranty units we'll tell you to use the factory network first — it's free for you.",
    },
    {
      q: "My Indigo shows \"Long Harvest\" — what does the repair usually cost?",
      a: "Most Long Harvest tickets close between $200 and $500. The usual culprits are evaporator scale (descale + cleaning) or a failed harvest/dump valve. If the machine has been limping for months the slab may have damaged the evaporator surface — that's the expensive version, and we'll show you before quoting.",
    },
    {
      q: "Why does my Manitowoc make less ice every summer?",
      a: "High ambient temperature plus a dirty condenser. Manitowoc rates production at 70°F air / 50°F water; a 90°F South Florida kitchen with a fouled coil can cut output 30-50% and eventually trips the high discharge temperature protection. A condenser cleaning and airflow check ($120-$300) typically restores rated production.",
    },
    {
      q: "Do you offer preventive maintenance for Manitowoc machines?",
      a: "Yes — semi-annual or quarterly PM contracts: descale and sanitize, condenser cleaning, probe and water-system check, filtration change. In South Florida water, machines on PM run roughly twice as long between repairs, and clean-machine documentation is there for health inspections.",
    },
    {
      q: "Should I repair or replace my 12-year-old Manitowoc?",
      a: "Our honest line: if the sealed system fails (compressor, evaporator leak) past year 10, replacement usually wins — a new NEO/Indigo pays back in energy and reliability. Board, probe, valve and fan failures are worth repairing at almost any age. We quote both paths and tell you which one we'd pick.",
    },
  ],
  related: [
    { label: "Ice machine repair (all brands)", href: "/services/ice-machine-repair" },
    { label: "Manitowoc vs Hoshizaki — honest comparison", href: "/compare/manitowoc-vs-hoshizaki-ice" },
    { label: "Manitowoc brand overview", href: "/brands/manitowoc" },
    { label: "Hoshizaki ice machine repair", href: "/services/hoshizaki-ice-machine-repair" },
    { label: "Scotsman ice machine repair", href: "/services/scotsman-ice-machine-repair" },
  ],
  requestTopic: "manitowoc-ice-machine",
  datePublished: "2026-06-11",
}

// ---------------------------------------------------------------------------
// 2. Hoshizaki ice machine repair — 6,600/mo
// ---------------------------------------------------------------------------

const HOSHIZAKI: BrandService = {
  slug: "hoshizaki-ice-machine-repair",
  brand: "Hoshizaki",
  brandSlug: "hoshizaki",
  title: "Hoshizaki Ice Machine Repair",
  shortTitle: "Hoshizaki Ice Machine",
  metaTitle: "Hoshizaki Ice Machine Repair Miami — 24/7",
  metaDescription:
    "Hoshizaki KM & IM series repaired same-day across South Florida. Techs who read the beep codes. 18 W-2 techs, 4.79★ from 871 reviews. $89 service call.",
  heroDescription:
    "Same-day Hoshizaki ice machine repair across Miami-Dade, Broward and Palm Beach — KM-series crescent cubers, IM-series square cubers, F/DCM flaker and nugget machines. 24/7 emergency dispatch for commercial accounts, $89 service call — free with approved repair.",
  intro: [
    "Hoshizaki has earned its workhorse reputation honestly — stainless evaporators, simple control logic, fewer moving parts in the water path. But South Florida still finds the weak points: float switches and harvest-water valves scale up in our mineral-heavy water, condenser coils foul fast in greasy kitchens, and coastal salt air takes fan motors years early. Our techs run Hoshizaki tickets daily and carry float switches, water valves, fan motors, and control-board spares for the KM line on the truck.",
    "The KM-series control board talks to you — alarm beeps and LED patterns that identify exactly which safety shut it down. Most operators never get told this; they just hear \"it stopped working.\" Our technicians read those codes the way the factory manual intends, which turns a vague no-ice complaint into a targeted one-visit repair instead of parts roulette.",
    "We are an independent service company, not a Hoshizaki distributor — no affiliation, no factory warranty processing, no incentive to sell you a new machine. What you get is a tech who has serviced hundreds of KM and IM units across South Florida, same-day, with the $89 service call waived when you approve the repair.",
  ],
  codesHeading: "Hoshizaki KM beep codes — what the board is telling you",
  codesIntro:
    "When a KM-series machine shuts down on a safety, the control board reports the reason as a beep pattern (and LED indication on later boards). These are the patterns behind most of our Hoshizaki dispatches:",
  codes: [
    {
      code: "1 beep — high evaporator temperature",
      meaning:
        "The thermistor saw abnormal evaporator heat — often a harvest problem or refrigerant issue, not an actual fire.",
      action:
        "We check the hot-gas valve, thermistor placement and charge. Frequent false trips trace to a drifted thermistor — cheap fix.",
    },
    {
      code: "2 beeps — harvest backup timer",
      meaning:
        "Harvest didn't complete within the safety window.",
      action:
        "Scaled harvest-water valve or float switch, or a lazy hot-gas valve. Descale plus valve service closes most of these same-day.",
    },
    {
      code: "3 beeps — freeze timer backup",
      meaning:
        "The freeze cycle ran too long before the float switch ended it.",
      action:
        "Classic scale symptom: the float switch sticks and never signals. Also low charge or a dirty condenser — we test, not guess.",
    },
    {
      code: "4 beeps — high discharge pressure/temperature",
      meaning:
        "Head pressure protection tripped.",
      action:
        "Fouled condenser, dead fan motor, or blocked airflow in a tight alcove — the #1 summer Hoshizaki call in South Florida.",
    },
    {
      code: "6 beeps — voltage out of range",
      meaning:
        "Supply voltage outside the board's protection window.",
      action:
        "We verify at the machine and the circuit — brownouts and shared circuits in older buildings cause this more than the machine does.",
    },
    {
      code: "Continuous / repeating pattern",
      meaning:
        "Multiple or repeating safety events logged.",
      action:
        "Board-level diagnosis. We carry KM control boards for common models and test inputs before condemning the board.",
    },
  ],
  codesNote:
    "IM-series square cubers use a different fill-and-freeze cycle with its own failure signature (fill timeouts, cube size drift) — our techs service both lines.",
  symptomTable: [
    {
      symptom: "Machine cycles but the bin stays empty",
      cause: "Scaled float switch or stuck harvest-water valve",
      cost: "$150–$380",
      response: "Same-day",
    },
    {
      symptom: "Thin or incomplete crescent cubes",
      cause: "Water-system scale or low refrigerant charge",
      cost: "$150–$400",
      response: "Same-day",
    },
    {
      symptom: "Shutdowns every afternoon in summer",
      cause: "High head pressure — dirty condenser or weak fan motor",
      cost: "$120–$320",
      response: "Emergency",
    },
    {
      symptom: "IM-series cubes coming out undersized or cloudy",
      cause: "Fill valve, water filter, or cube-guide scale",
      cost: "$140–$350",
      response: "Same-day",
    },
    {
      symptom: "Water running constantly into the sump",
      cause: "Failed inlet valve or float switch — wastes water and ice",
      cost: "$130–$300",
      response: "Same-day",
    },
    {
      symptom: "Flaker/nugget (F/DCM) grinding or squealing",
      cause: "Auger bearings or gearmotor wear — stop before auger damage",
      cost: "$350–$900",
      response: "Same-day",
    },
    {
      symptom: "Dead machine, no beeps, no display",
      cause: "Power, transformer or control board failure",
      cost: "$120–$520",
      response: "Same-day",
    },
  ],
  equipment: [
    {
      name: "KM-series crescent cubers",
      detail:
        "KM-151 through KM-1900 — the back-of-house standard. Float switches, harvest valves, boards, full sealed-system work (EPA 608).",
    },
    {
      name: "IM-series square cubers",
      detail:
        "Bar and cocktail program machines — fill-cycle faults, cube size drift, and water-quality tuning.",
    },
    {
      name: "F-series flakers & DCM nugget dispensers",
      detail:
        "Healthcare and beverage stations — auger bearings, gearmotors, water seals before they cascade into auger replacement.",
    },
    {
      name: "Remote-condenser (URC) systems",
      detail:
        "Rooftop condensers in salt air — fan motors, contactors, line sets. We quote coastal-grade replacements honestly.",
    },
    {
      name: "Hoshizaki refrigeration",
      detail:
        "Steelheart reach-ins and prep tables share our refrigeration bench — one vendor across your Hoshizaki fleet.",
    },
    {
      name: "Bins, dispensers & filtration",
      detail:
        "B-series bins, hotel/healthcare dispensers, and filtration sized for South Florida mineral loads.",
    },
  ],
  faqs: [
    {
      q: "Do you repair Hoshizaki ice machines same-day in South Florida?",
      a: "Yes — Hoshizaki tickets dispatch same-day across Miami-Dade, Broward and Palm Beach, with no-ice emergencies prioritized. The $89 commercial service call is waived with an approved repair — it is only charged if you decline.",
    },
    {
      q: "Are you a Hoshizaki authorized service center?",
      a: "No. Berne is an independent commercial service company — not affiliated with Hoshizaki and not a factory warranty station. In-warranty machines should go through Hoshizaki's network first (it's free for you); for everything out of warranty, we're typically faster, and our techs service the KM/IM lines daily.",
    },
    {
      q: "My KM machine beeps and shuts down — what does that mean?",
      a: "The beep pattern is a diagnostic code: 1 beep is a high evaporator temperature event, 2 beeps long harvest, 3 beeps long freeze, 4 beeps high head pressure, 6 beeps a voltage problem. Note the pattern before you power-cycle and tell the dispatcher — it often lets the tech arrive with the right part on the first visit.",
    },
    {
      q: "Why does my Hoshizaki stop making ice every summer?",
      a: "Almost always head-pressure protection: a fouled condenser coil or dying fan motor can't reject heat into 90°F kitchen air, the board sees high discharge pressure and shuts down. Cleaning the coil and restoring airflow ($120-$320) fixes most of these; the permanent fix is putting the machine on a PM schedule before June.",
    },
    {
      q: "How often should a Hoshizaki be descaled in South Florida water?",
      a: "Twice a year minimum, quarterly for high-volume or hard-water locations. Scale on the float switch and harvest valve is the root cause behind the majority of KM no-ice calls we run. Our PM contracts bundle descale/sanitize, condenser cleaning and a water-system check with documentation for health inspections.",
    },
    {
      q: "Is a 10-year-old Hoshizaki worth repairing?",
      a: "Usually yes — that's the brand's strength. Stainless evaporators don't fail like nickel-plated ones, so a board, valve or fan repair on a 10-year-old KM is money well spent. The line we draw is sealed-system failure past year 12: at that point we quote both repair and replacement and tell you which we'd choose.",
    },
  ],
  related: [
    { label: "Ice machine repair (all brands)", href: "/services/ice-machine-repair" },
    { label: "Hoshizaki vs Scotsman — honest comparison", href: "/compare/hoshizaki-vs-scotsman-ice" },
    { label: "Manitowoc vs Hoshizaki — honest comparison", href: "/compare/manitowoc-vs-hoshizaki-ice" },
    { label: "Hoshizaki brand overview", href: "/brands/hoshizaki" },
    { label: "Manitowoc ice machine repair", href: "/services/manitowoc-ice-machine-repair" },
    { label: "Scotsman ice machine repair", href: "/services/scotsman-ice-machine-repair" },
  ],
  requestTopic: "hoshizaki-ice-machine",
  datePublished: "2026-06-11",
}

// ---------------------------------------------------------------------------
// 3. Scotsman ice machine repair — 3,600/mo
// ---------------------------------------------------------------------------

const SCOTSMAN: BrandService = {
  slug: "scotsman-ice-machine-repair",
  brand: "Scotsman",
  title: "Scotsman Ice Machine Repair",
  shortTitle: "Scotsman Ice Machine",
  metaTitle: "Scotsman Ice Machine Repair Miami — 24/7",
  metaDescription:
    "Scotsman Prodigy & legacy cubers, Meridian dispensers, nugget machines — same-day repair across South Florida. 4.79★ from 871 reviews. $89 service call.",
  heroDescription:
    "Same-day Scotsman ice machine repair across Miami-Dade, Broward and Palm Beach — Prodigy and Prodigy Plus cubers, legacy CME heads, Meridian dispensers and nugget/flake machines. 24/7 emergency dispatch for commercial accounts, $89 service call — free with approved repair.",
  intro: [
    "Scotsman's Prodigy platform is built around sensors — water level, ice level, temperature — which makes it efficient when clean and temperamental in South Florida water. Mineral scale on the conductivity-style water sensors is the single most common root cause behind the Prodigy fault calls we run: the machine isn't broken, it's blind. Our techs descale and recalibrate the sensing system, replace what's actually failed, and leave you with a filtration recommendation matched to your water.",
    "The diagnostic codes on the Prodigy display do half the work — if your service company reads them. Code 1 and 2 events (long freeze, long harvest), slow-water-fill faults and high discharge temperature shutdowns each point at a short list of components, and our trucks carry the usual suspects: water sensors, fill valves, curtain/bin switches, condenser fan motors, harvest assist parts.",
    "Berne is an independent commercial service company — no Scotsman affiliation, no dealer quota, 18 W-2 technicians and 29,000+ completed services since 2015. Hotels, bars, healthcare and QSR accounts run our PM contracts on Scotsman fleets precisely because we're brand-neutral: when a machine is worth fixing we fix it, and when it isn't we say so.",
  ],
  codesHeading: "Scotsman Prodigy diagnostic codes we see most",
  codesIntro:
    "Prodigy and Prodigy Plus machines flash numbered diagnostic codes on the front display when a safety ends a cycle. These are the ones behind most South Florida dispatches:",
  codes: [
    {
      code: "Code 1 — long freeze cycle",
      meaning:
        "Freeze ran past its maximum time before the ice level/thickness target was met.",
      action:
        "Low charge, dirty condenser or scaled evaporator. We measure superheat and clean before condemning sealed-system parts.",
    },
    {
      code: "Code 2 — long harvest cycle",
      meaning:
        "The slab/cubes didn't release within the harvest window.",
      action:
        "Scale on the evaporator, a failed harvest valve, or curtain-switch issues. Descale plus valve test closes most same-day.",
    },
    {
      code: "Code 3 — slow or no water fill",
      meaning:
        "The water system didn't satisfy the level sensor in time.",
      action:
        "Clogged inlet valve or filter, or — most often here — scaled water-level sensors reading dry in a full sump. Clean/replace and verify.",
    },
    {
      code: "Code 4 — high discharge temperature",
      meaning:
        "Compressor discharge exceeded the protection limit.",
      action:
        "The summer classic: fouled condenser, weak fan motor, or zero clearance around the machine. Cleaning and airflow restoration, same-day.",
    },
    {
      code: "Ice-level sensor fault / false bin-full",
      meaning:
        "The photo-eye ice level sensors read blocked or dirty, so the machine thinks the bin is full.",
      action:
        "Cleaning the sensor eyes fixes half of these; we replace and align the rest. The 'machine randomly stops at half a bin' complaint lives here.",
    },
    {
      code: "Repeating codes after reset",
      meaning:
        "The same safety keeps ending cycles — a component, not a glitch.",
      action:
        "Power-cycling clears the display, not the fault. We pull the event history, test the implicated circuit, and fix the cause.",
    },
  ],
  codesNote:
    "Legacy CME-series and dip-switch era Scotsman heads pre-date the Prodigy display but report the same failures mechanically — we service those daily too.",
  symptomTable: [
    {
      symptom: "Machine stops with the bin half empty",
      cause: "Dirty ice-level sensor eyes or curtain switch",
      cost: "$120–$280",
      response: "Same-day",
    },
    {
      symptom: "No ice, display shows water fault",
      cause: "Scaled water sensors or clogged fill valve/filter",
      cost: "$140–$350",
      response: "Same-day",
    },
    {
      symptom: "Cubes freezing into a bridge / not releasing",
      cause: "Evaporator scale or harvest valve failure",
      cost: "$200–$500",
      response: "Same-day",
    },
    {
      symptom: "Production drops hard every summer",
      cause: "Fouled condenser or weak fan motor in high ambient",
      cost: "$120–$320",
      response: "Same-day",
    },
    {
      symptom: "Nugget machine squealing or grinding",
      cause: "Auger bearing/gearmotor wear — stop before auger seizure",
      cost: "$350–$900",
      response: "Same-day",
    },
    {
      symptom: "Meridian dispenser jams or won't dispense",
      cause: "Agitation/dispense mechanism or chute icing",
      cost: "$150–$400",
      response: "Same-day",
    },
    {
      symptom: "Compressor dead on a 10+ year head",
      cause: "End-of-life sealed system — repair-vs-replace decision",
      cost: "$800–$1,400",
      response: "24–48h",
    },
  ],
  equipment: [
    {
      name: "Prodigy & Prodigy Plus cubers (C-series)",
      detail:
        "C0322 through C2148, air- and water-cooled — sensor diagnostics, descaling, boards, valves, full sealed-system work (EPA 608).",
    },
    {
      name: "Legacy CME-series heads",
      detail:
        "Pre-Prodigy machines still earning their keep across South Florida bars — we keep them running honestly.",
    },
    {
      name: "Nugget & flake machines (N/F-series)",
      detail:
        "Healthcare and beverage nugget ice — auger systems, gearmotors, water seals, sanitization.",
    },
    {
      name: "Meridian countertop dispensers (HID series)",
      detail:
        "Hotel, healthcare and office ice+water dispensers — dispense mechanisms, sanitization cycles, water-path service.",
    },
    {
      name: "Undercounter cubers (CU series)",
      detail:
        "Bar and café undercounters where alcove airflow and scale do the damage — same-day service.",
    },
    {
      name: "Bins, dispensers & filtration",
      detail:
        "Bins, hotel dispensers, and filtration packages sized for South Florida mineral content.",
    },
  ],
  faqs: [
    {
      q: "Do you repair Scotsman ice machines same-day?",
      a: "Yes — same-day dispatch across Miami-Dade, Broward and Palm Beach, seven days a week. A down ice machine in a bar or healthcare setting is run as an emergency. $89 service call — free if you approve the repair.",
    },
    {
      q: "Are you an authorized Scotsman service agency?",
      a: "No — Berne is an independent commercial service company with no Scotsman affiliation. Machines under factory warranty should go through Scotsman's network first. Out of warranty, independence works for you: we stock common Prodigy parts, dispatch same-day, and have no quota pushing new-machine sales.",
    },
    {
      q: "My Prodigy keeps flashing Code 1 — is the compressor dying?",
      a: "Not necessarily — that's the long-freeze safety, and in our tickets the cause is more often a dirty condenser, low charge from a slow leak, or heavy evaporator scale. We test before condemning: superheat measurement, coil inspection, descale. Compressor replacement is the last resort, not the first quote.",
    },
    {
      q: "Why does my Scotsman stop when the bin is only half full?",
      a: "The Prodigy ice-level sensors are photo-eyes — when dust, scale film or splash coats them, the machine reads 'bin full' and shuts down early. Cleaning the eyes is a 20-minute fix; if a sensor has genuinely failed we carry replacements. It's one of the cheapest, most-missed Scotsman repairs.",
    },
    {
      q: "How do I stop the constant scale problems?",
      a: "Filtration matched to your actual water plus a descale schedule. South Florida water is mineral-heavy, and Prodigy's sensors are more scale-sensitive than older machines. Our PM contracts (descale/sanitize, condenser cleaning, sensor cleaning, filter change) typically cut Scotsman emergency calls by more than half.",
    },
    {
      q: "Repair or replace a 12-year-old Scotsman head?",
      a: "Boards, valves, sensors and fan motors — repair, at almost any age. Sealed-system failure past year 10-12 — usually replace, and we'll quote both paths with real numbers so the decision is yours, not ours.",
    },
  ],
  related: [
    { label: "Ice machine repair (all brands)", href: "/services/ice-machine-repair" },
    { label: "Hoshizaki vs Scotsman — honest comparison", href: "/compare/hoshizaki-vs-scotsman-ice" },
    { label: "Hoshizaki ice machine repair", href: "/services/hoshizaki-ice-machine-repair" },
    { label: "Manitowoc ice machine repair", href: "/services/manitowoc-ice-machine-repair" },
  ],
  requestTopic: "scotsman-ice-machine",
  datePublished: "2026-06-11",
}

// ---------------------------------------------------------------------------
// 4. Hobart dishwasher repair — 2,900/mo
// ---------------------------------------------------------------------------

const HOBART: BrandService = {
  slug: "hobart-dishwasher-repair",
  brand: "Hobart",
  brandSlug: "hobart",
  title: "Hobart Dishwasher Repair",
  shortTitle: "Hobart Dishwasher",
  metaTitle: "Hobart Dishwasher Repair Miami — 24/7",
  metaDescription:
    "Hobart AM15, LXi/LXe & CL conveyor dishwashers repaired same-day across South Florida. Sanitizer temps restored, inspection-ready. 4.79★/871. $89 call.",
  heroDescription:
    "Same-day Hobart commercial dishwasher repair across Miami-Dade, Broward and Palm Beach — AM15/AM16 door-types, LXi/LXe undercounters, and CL-series conveyors. 24/7 emergency dispatch for commercial accounts, $89 service call — free with approved repair.",
  intro: [
    "A down Hobart isn't an appliance problem — it's a health-code problem. When the final rinse can't hold sanitizing temperature, every plate out of that machine is an inspection finding waiting to happen, and hand-washing through a Friday service burns labor you don't have. That's why dish machine outages dispatch same-day in our queue, and why our techs verify wash and rinse temperatures with a calibrated thermometer before they leave — documented on the ticket for your inspection file.",
    "Hobart machines are the longest-lived dishwashers in the industry, which is exactly why South Florida is full of 10-20 year old AM-series and CL conveyors with very fixable problems: scaled booster heaters that can't reach 180°F rinse, fill valves and float switches fouled by mineral load, wash pump seals, door springs and interlocks, and delime cycles that nobody has run since installation. The machine is rarely dead; it's neglected.",
    "Berne is an independent commercial service company — not a Hobart agency — servicing Hobart warewashing alongside the rest of your kitchen line. 18 W-2 technicians, 29,000+ services since 2015, and honest advice at the repair-vs-replace line: a 15-year-old AM15 with a sound tank and pump is usually worth every dollar of repair; a rusted-through wash chamber is not.",
  ],
  codesHeading: "Hobart fault indications we diagnose daily",
  codesIntro:
    "Late-model Hobart machines (AM15/AM16, LXi/LXe) report faults on the controls — temperature, fill, drain and delime warnings. Older machines report the same failures physically. Either way, here's what the common indications mean:",
  codes: [
    {
      code: "Low wash / low rinse temperature warning",
      meaning:
        "The machine can't reach or hold wash temp or the 180°F sanitizing final rinse.",
      action:
        "Scaled or failed heating elements, booster heater faults, contactors or thermostats. We restore temps and verify with a calibrated thermometer — this is the health-inspection killer.",
    },
    {
      code: "Fill timeout / low water",
      meaning:
        "The tank didn't fill to the float/probe level within the allowed window.",
      action:
        "Clogged fill valve or strainer, scaled float/probe, or supply-pressure problems. We trace the water path end to end.",
    },
    {
      code: "Drain fault",
      meaning:
        "Water isn't leaving the tank — the drain valve, pump, or line is at fault.",
      action:
        "Drain valves and drain pumps foul with food soil and scale; we clear, rebuild or replace and check the standpipe while we're in there.",
    },
    {
      code: "Delime notification",
      meaning:
        "The machine has logged enough run time / conductivity to demand a deliming cycle.",
      action:
        "Ignoring it is how booster heaters and elements die in our water. We run the chemical delime properly and put the machine on a schedule.",
    },
    {
      code: "Door / interlock fault",
      meaning:
        "The machine sees a door open or an interlock that won't satisfy.",
      action:
        "Worn door springs, bent guides, or a failed switch. Mechanical adjustment plus switch replacement — quick, same-day work.",
    },
    {
      code: "Conveyor stall (CL series)",
      meaning:
        "Rack drive overload or jam on conveyor machines.",
      action:
        "Pawl bars, drive dogs, clutches and gear motors wear under volume — we repair the drive and align the rack path.",
    },
  ],
  codesNote:
    "Chemical-sanitizing (low-temp) machines have their own failure set — sanitizer concentration, chemical pumps, priming — which we service alongside the high-temp fleet.",
  symptomTable: [
    {
      symptom: "Dishes coming out dirty or filmy",
      cause: "Worn wash arms/end caps, clogged jets, or wash pump wear",
      cost: "$120–$380",
      response: "Same-day",
    },
    {
      symptom: "Final rinse won't hit 180°F",
      cause: "Scaled booster heater, element or thermostat failure",
      cost: "$200–$600",
      response: "Emergency",
    },
    {
      symptom: "Machine won't fill or fills slowly",
      cause: "Fill valve, strainer or scaled float/level probe",
      cost: "$130–$320",
      response: "Same-day",
    },
    {
      symptom: "Tank won't drain / standing water",
      cause: "Drain valve or drain pump fouled with soil and scale",
      cost: "$140–$380",
      response: "Same-day",
    },
    {
      symptom: "Leaking around the door or under the machine",
      cause: "Door gaskets, worn door springs, or pump seal failure",
      cost: "$120–$420",
      response: "Same-day",
    },
    {
      symptom: "Breaker trips when the machine heats",
      cause: "Shorted heating element or contactor — electrical diagnosis",
      cost: "$180–$520",
      response: "Same-day",
    },
    {
      symptom: "CL conveyor racks stalling mid-machine",
      cause: "Drive pawls, clutch or gearmotor wear",
      cost: "$250–$800",
      response: "Same-day",
    },
  ],
  equipment: [
    {
      name: "AM15 / AM16 door-type machines",
      detail:
        "The independent-restaurant standard. Elements, fill and drain systems, door mechanics, boards — we keep decade-old AMs passing inspection.",
    },
    {
      name: "LXi / LXe undercounters",
      detail:
        "Bars, cafés and small kitchens — fill faults, heater and sanitation issues, door interlocks, chemical-feed problems.",
    },
    {
      name: "CL-series conveyors (CL44e/CL54e/CL64e)",
      detail:
        "High-volume hotel and institutional machines — conveyor drives, curtains, booster heaters, vent cowl and final-rinse service.",
    },
    {
      name: "Booster heaters",
      detail:
        "Built-in and standalone boosters that make the 180°F rinse possible — descaling, elements, contactors, thermostats.",
    },
    {
      name: "Chemical-sanitizing (low-temp) machines",
      detail:
        "Sanitizer concentration verification, chemical pumps and tubing, priming faults — inspection-ready documentation.",
    },
    {
      name: "Hobart food equipment",
      detail:
        "Mixers, slicers and disposers share our restaurant-equipment bench — one dispatch for the whole Hobart fleet.",
    },
  ],
  faqs: [
    {
      q: "Do you repair Hobart dishwashers the same day?",
      a: "Yes — a dish machine that can't sanitize is a health-code emergency and dispatches same-day across Miami-Dade, Broward and Palm Beach. The $89 commercial service call is free with an approved repair; you only pay it if you decide not to proceed.",
    },
    {
      q: "Are you Hobart-authorized?",
      a: "No — Berne is an independent commercial service company, not affiliated with Hobart or ITW. Hobart's own service network is excellent but books out; we exist for the operator who needs the machine sanitizing tonight. In-warranty machines should use the factory network first.",
    },
    {
      q: "My final rinse won't reach 180°F — how bad is it?",
      a: "Bad for inspection, usually cheap to fix. In South Florida water the booster heater scales up until the elements can't transfer heat, then the elements themselves fail. Descaling plus an element or thermostat runs $200-$600 — far less than the fine, the re-inspection, or a replacement machine. We verify temps with a calibrated thermometer and note them on your ticket.",
    },
    {
      q: "Is a 15-year-old Hobart AM15 worth repairing?",
      a: "Usually yes — that's the brand's whole reputation. If the stainless tank, wash chamber and pump housing are sound, elements, valves, boards and door mechanics are all economical repairs. The honest line: a corroded-through tank or a destroyed wash pump on a 20-year machine is replacement territory, and we'll tell you straight.",
    },
    {
      q: "Why do dishes come out dirty even though the machine runs?",
      a: "In order of frequency from our tickets: clogged or worn wash-arm jets, missing end caps killing spray pressure, detergent concentration problems, wash temperature below spec, and a worn wash pump. Most of these close in one visit for $120-$380 — bring us in before you re-wash a whole Saturday night by hand.",
    },
    {
      q: "Do you offer maintenance contracts for warewashing?",
      a: "Yes — scheduled deliming, temperature and chemical verification, wash-system inspection and door-mechanics service, with documentation your health inspector and chemical rep can both read. Warewashing PM pairs naturally with the refrigeration and cooking-line contracts most of our accounts run.",
    },
  ],
  related: [
    { label: "Commercial dishwasher repair (all brands)", href: "/services/commercial-dishwasher-repair" },
    { label: "Hobart vs Vulcan — honest comparison", href: "/compare/hobart-vs-vulcan-ranges" },
    { label: "Hobart brand overview", href: "/brands/hobart" },
    { label: "Vulcan oven & range repair", href: "/services/vulcan-oven-repair" },
  ],
  requestTopic: "hobart-dishwasher",
  datePublished: "2026-06-11",
}

// ---------------------------------------------------------------------------
// 5. True refrigeration repair — 880/mo
// ---------------------------------------------------------------------------

const TRUE: BrandService = {
  slug: "true-refrigeration-repair",
  brand: "True",
  brandSlug: "true",
  title: "True Refrigeration Repair",
  shortTitle: "True Refrigeration",
  metaTitle: "True Refrigeration Repair Miami — 24/7",
  metaDescription:
    "True T-series reach-ins, GDM merchandisers & prep tables repaired same-day across South Florida. R290 service, EPA 608 techs. 4.79★/871. $89 call.",
  heroDescription:
    "Same-day True commercial refrigeration repair across Miami-Dade, Broward and Palm Beach — T-series reach-ins, GDM glass-door merchandisers, TUC undercounters and prep tables. 24/7 emergency dispatch, $89 service call — free with approved repair.",
  intro: [
    "True is the most common reach-in nameplate in South Florida kitchens, which makes it the most common refrigeration ticket we run. The good news: True boxes are mechanically simple and almost always worth fixing. The patterns are stable across thousands of our tickets — condenser coils choked with kitchen grease and dust, evaporator fan motors dying of salt air and age, door gaskets that lost compression years ago, and start components (relay/capacitor) that fail long before the compressor itself does.",
    "The single most valuable thing a True owner can hear: when a T-49 stops holding temperature, it is usually a $120-$400 repair, not a dead compressor. A fouled condenser makes the system run hot and long until it trips or quits; a $30 start relay mimics total compressor failure; a torn gasket makes a healthy box sweat and struggle. We diagnose with gauges and meters before anyone says the word 'replacement.'",
    "Newer True cabinets run R290 (propane) sealed systems — efficient, environmentally sound, and a different service discipline: small charges, hydrocarbon-rated components and leak protocols. Our EPA 608-certified techs service both the legacy R-134a/R-404A fleet and the R290 generation. Berne is an independent service company with no True affiliation — we work for the operator, on whatever vintage is in your kitchen.",
  ],
  codesHeading: "How True cabinets fail — the field signature",
  codesIntro:
    "Most True boxes use electromechanical or simple electronic controls rather than fault-code displays, so the machine 'reports' problems physically. These are the signatures our techs read on arrival:",
  codes: [
    {
      code: "Compressor runs constantly, box warm",
      meaning:
        "The system can't reject heat or has lost capacity — not necessarily a failing compressor.",
      action:
        "Condenser cleaning first (the #1 True fix), then charge and leak check. Most 'dying compressor' calls end as a $120-$250 coil service.",
    },
    {
      code: "Compressor clicks but won't start",
      meaning:
        "Start relay/capacitor failure — the classic False Compressor Death.",
      action:
        "We test and replace the start components and verify run amperage. A $30 part saves a $1,200 condemnation, regularly.",
    },
    {
      code: "Evaporator iced into a block",
      meaning:
        "Defrost failure or airflow loss — the box warms while the coil wears an iceberg.",
      action:
        "Defrost timer/heater/thermostat diagnosis, evaporator fan check, and a controlled thaw. We find why it iced, not just melt it.",
    },
    {
      code: "Cabinet temp uneven, fans quiet",
      meaning:
        "Evaporator fan motor failure — coastal salt air shortens their lives badly.",
      action:
        "Motor and blade replacement from truck stock; we check amp draw on the survivors while we're in the box.",
    },
    {
      code: "Doors sweating, frame dripping",
      meaning:
        "Gasket compression loss or failed perimeter/frame heaters.",
      action:
        "Gasket replacement restores seal and run-time economics; heater diagnosis on glass-door merchandisers.",
    },
    {
      code: "Water pooling under the cabinet",
      meaning:
        "Condensate drain clogged or evaporation pan/heater failure.",
      action:
        "Drain clearing, pan and heater service — before the slip-and-fall and the floor damage.",
    },
  ],
  codesNote:
    "LAE/Danfoss-style electronic controllers on newer True models add probe-failure and high-temp alarms — we carry compatible probes and controllers.",
  symptomTable: [
    {
      symptom: "Reach-in not holding 38°F / product warm",
      cause: "Fouled condenser, gasket loss, or low charge",
      cost: "$120–$400",
      response: "Same-day",
    },
    {
      symptom: "Compressor hums/clicks, won't start",
      cause: "Start relay or capacitor — not the compressor itself",
      cost: "$120–$260",
      response: "Same-day",
    },
    {
      symptom: "Evaporator frozen solid",
      cause: "Defrost component failure or dead evaporator fan",
      cost: "$150–$420",
      response: "Same-day",
    },
    {
      symptom: "GDM merchandiser doors sweating",
      cause: "Worn gaskets or failed frame heaters",
      cost: "$100–$380",
      response: "Same-day",
    },
    {
      symptom: "Prep table top section warm, base cold",
      cause: "Airflow limits plus fan or controller issues — pan-rail service",
      cost: "$130–$350",
      response: "Same-day",
    },
    {
      symptom: "Unit short-cycling day and night",
      cause: "Controller/thermostat drift or probe failure",
      cost: "$130–$320",
      response: "Same-day",
    },
    {
      symptom: "Sealed-system failure on a 10+ year box",
      cause: "Compressor or evaporator leak — repair-vs-replace math",
      cost: "$600–$1,300",
      response: "24–48h",
    },
  ],
  equipment: [
    {
      name: "T-series reach-ins (T-23, T-49, T-72)",
      detail:
        "The back-of-house standard, one to three doors, coolers and freezers — gaskets, fans, start components, sealed systems (EPA 608).",
    },
    {
      name: "GDM glass-door merchandisers",
      detail:
        "Front-of-house display coolers — frame heaters, gaskets, lighting, condensation control in South Florida humidity.",
    },
    {
      name: "TUC undercounters & worktops",
      detail:
        "Line refrigeration that lives next to fryers — grease-loaded condensers are the dominant failure we service.",
    },
    {
      name: "TSSU/TPP prep tables",
      detail:
        "Sandwich, salad and pizza prep — pan-rail temps, hood gaskets, airflow and controller service to keep the top section legal.",
    },
    {
      name: "R290 (propane) generation cabinets",
      detail:
        "Hydrocarbon-qualified sealed-system service for the current True line — correct components, correct protocols.",
    },
    {
      name: "Worktop freezers & specialty cabinets",
      detail:
        "Chef bases, milk coolers, back bar units — the whole True catalog shares the same service fundamentals.",
    },
  ],
  faqs: [
    {
      q: "Do you repair True refrigerators the same day?",
      a: "Yes — loss of refrigeration is an emergency in our dispatch queue. Same-day across Miami-Dade, Broward and Palm Beach, seven days a week — $89 service call, free when you approve the repair.",
    },
    {
      q: "Are you an authorized True service company?",
      a: "No — Berne is an independent commercial service company with no True affiliation. True's factory warranty (often 3 years parts/labor, longer on compressors) should be used while it lasts; out of warranty, our techs service more True cabinets than any other refrigeration brand in our ticket history.",
    },
    {
      q: "My True compressor won't start — is the box dead?",
      a: "Probably not. The start relay and capacitor fail far more often than the compressor they serve, and the symptom is identical: clicking, humming, no start. We test the start components first — a $120-$260 repair — and only condemn the compressor with meter evidence. It's the single most over-diagnosed failure in commercial refrigeration.",
    },
    {
      q: "Why does my True run constantly but stay warm?",
      a: "Ninety percent of the time: a condenser coil packed with kitchen grease and dust. The system can't reject heat, capacity collapses, and the compressor runs itself toward early death. Coil cleaning and an airflow check typically restore performance same-day — and a quarterly PM schedule keeps it from coming back.",
    },
    {
      q: "Do you service the new R290 True models?",
      a: "Yes. The current True line runs R290 (propane) refrigerant — small charges, sealed systems and hydrocarbon-specific service protocols. Our EPA 608-certified techs are equipped for both R290 and the legacy R-134a/R-404A fleet, with correct rated components.",
    },
    {
      q: "Repair or replace a 12-year-old True reach-in?",
      a: "Electrical, fan, gasket and controller repairs: fix it, the cabinet shell is built to outlive them all. Sealed-system failure past year 10: we quote repair and replacement side by side. A True with a sound cabinet often justifies a compressor at year 10 where a lighter-built brand wouldn't.",
    },
  ],
  related: [
    { label: "Commercial refrigeration repair (all brands)", href: "/services/commercial-refrigeration-repair" },
    { label: "True vs Traulsen — honest comparison", href: "/compare/true-vs-traulsen-refrigeration" },
    { label: "True vs Turbo Air — honest comparison", href: "/compare/true-vs-turbo-air" },
    { label: "True brand overview", href: "/brands/true" },
    { label: "Turbo Air refrigeration repair", href: "/services/turbo-air-refrigeration-repair" },
    { label: "Reach-in cooler repair", href: "/services/reach-in-cooler-repair" },
  ],
  requestTopic: "true-refrigeration",
  datePublished: "2026-06-11",
}

// ---------------------------------------------------------------------------
// 6. La Marzocco espresso machine repair — 260/mo
// ---------------------------------------------------------------------------

const LA_MARZOCCO: BrandService = {
  slug: "la-marzocco-espresso-repair",
  brand: "La Marzocco",
  title: "La Marzocco Espresso Machine Repair",
  shortTitle: "La Marzocco Espresso",
  metaTitle: "La Marzocco Espresso Repair Miami — 24/7",
  metaDescription:
    "La Marzocco Linea, GB5 & PB repaired across South Florida — scale, groups, pumps, boilers. Café-grade workmanship, honest parts. 4.79★/871. $89 call.",
  heroDescription:
    "Commercial La Marzocco espresso machine repair across Miami-Dade, Broward and Palm Beach — Linea Classic, Linea PB, GB5 and KB90 machines in cafés, restaurants and hotels. Same-day dispatch for dead-machine emergencies, $89 service call — free with approved repair.",
  intro: [
    "A La Marzocco is the most expensive piece of equipment per square foot in most cafés, and the one the entire revenue line depends on. When a three-group Linea goes down on a Saturday morning, you're not losing a machine — you're losing every ticket until it's back. We run espresso emergencies same-day across South Florida, and our techs treat a $20,000 machine with the respect its owner does: proper gaskets, correct torque, no improvised parts.",
    "South Florida water is the enemy. Nearly every La Marzocco failure we see traces to scale: heating elements furred until they burn out, level probes reading wrong, autofill systems overfilling or timing out, gicleurs and flow restrictors clogging, and steam valves seizing. A machine on properly maintained softening/filtration runs for decades; a machine on raw Florida water eats boilers. Every service ticket we close includes a frank assessment of your water treatment, because the alternative is selling you the same repair every eight months.",
    "Berne is an independent commercial service company — not a La Marzocco distributor or authorized café-equipment agency. What we bring is commercial-kitchen discipline: 18 W-2 technicians, real dispatch (not a one-man bench with a two-week backlog), 29,000+ completed services since 2015, and stocked espresso wear parts — group gaskets, diffusion screens, vacuum breakers, level probes, pump heads.",
  ],
  codesHeading: "La Marzocco failure points our techs service",
  codesIntro:
    "Linea Classic machines fail mechanically; PB/GB5-generation machines add electronic supervision (autofill timeouts, probe faults) on top of the same plumbing. The failure map is consistent:",
  codes: [
    {
      code: "Autofill timeout / boiler won't fill",
      meaning:
        "The fill system ran past its safety window — the controller stops filling to protect the elements.",
      action:
        "Scaled level probe, failed fill solenoid, or inlet restriction. We descale or replace the probe, test the solenoid, and verify fill logic.",
    },
    {
      code: "No steam pressure / slow recovery",
      meaning:
        "Steam boiler can't reach or hold pressure under load.",
      action:
        "Scaled or burned-out heating element, pressurestat (Classic) or controller/SSR issues (PB/GB5). Element and control service with a descale verdict.",
    },
    {
      code: "Group runs but no flow / weak flow",
      meaning:
        "Water path to the group is restricted.",
      action:
        "Clogged gicleur, scaled group solenoid, or pump wear. We clear the path and measure flow rate properly, not by eye.",
    },
    {
      code: "Pressure unstable during shots",
      meaning:
        "Pump or bypass problems — shots run fast/slow and taste tells on it.",
      action:
        "Rotary pump rebuild or replacement, bypass adjustment, and a gauge-verified 9-bar set point.",
    },
    {
      code: "Water under the machine",
      meaning:
        "A seal, valve or hose has let go somewhere in a very wet machine.",
      action:
        "Drain-box, vacuum breaker, fitting and hose diagnosis. Small leaks become rusted frames and dead electronics — fix early.",
    },
    {
      code: "Group gasket blowing past the portafilter",
      meaning:
        "Channeling, sputter and spray at lock-in — gaskets are end-of-life.",
      action:
        "Group rebuild: gaskets, diffusion screens, lubrication. The single most deferred maintenance item in café fleets.",
    },
  ],
  codesNote:
    "We also service the supporting cast — grinders, water softeners/filtration and the prep refrigeration the bar depends on.",
  symptomTable: [
    {
      symptom: "Machine dead / heating breaker trips",
      cause: "Scaled element shorting, SSR/contactor or wiring fault",
      cost: "$180–$650",
      response: "Same-day",
    },
    {
      symptom: "No steam by mid-morning rush",
      cause: "Scaled steam boiler element or pressure control fault",
      cost: "$200–$600",
      response: "Same-day",
    },
    {
      symptom: "Shots running fast and thin",
      cause: "Pump pressure drift or worn group internals",
      cost: "$150–$450",
      response: "Same-day",
    },
    {
      symptom: "One group dead, others fine",
      cause: "Group solenoid or clogged gicleur on that group",
      cost: "$150–$400",
      response: "Same-day",
    },
    {
      symptom: "Boiler overfilling / water from the safety valve",
      cause: "Scaled level probe or stuck fill solenoid",
      cost: "$140–$380",
      response: "Same-day",
    },
    {
      symptom: "Sputtering at the portafilter lock",
      cause: "Group gaskets and screens past service life",
      cost: "$120–$300",
      response: "Next visit",
    },
  ],
  equipment: [
    {
      name: "Linea Classic / Linea Classic S",
      detail:
        "The café workhorse for 30 years — pressurestats, elements, groups, autofill, full mechanical service on 2- and 3-group machines.",
    },
    {
      name: "Linea PB",
      detail:
        "PB-generation electronics over proven plumbing — display faults, probe and autofill service, group and pump work.",
    },
    {
      name: "GB5",
      detail:
        "Hotel and high-end restaurant standard — PID-controlled boilers, level systems, and the same scale battles as the rest of the fleet.",
    },
    {
      name: "KB90 / Strada-class machines",
      detail:
        "Straight-in portafilter mechanisms and per-group controls — serviced with documented care and correct parts.",
    },
    {
      name: "Water treatment for espresso",
      detail:
        "Softener and filtration assessment, sizing and replacement schedules — the difference between a 5-year boiler and a 20-year boiler.",
    },
    {
      name: "Café support equipment",
      detail:
        "Grinders, undercounter refrigeration and ice for the bar — one dispatch for the whole coffee program.",
    },
  ],
  faqs: [
    {
      q: "Do you repair La Marzocco machines on-site in Miami?",
      a: "Yes — on-site service across Miami-Dade, Broward and Palm Beach. Most repairs (groups, pumps, valves, probes, elements) are done in place; if a boiler job genuinely needs bench time we say so up front. Dead-machine calls during business hours dispatch same-day.",
    },
    {
      q: "Are you a La Marzocco authorized technician?",
      a: "No — Berne is an independent commercial service company, not affiliated with La Marzocco. Machines under factory warranty should go through the brand's own network. Out of warranty — which is most of the Lineas in South Florida — you get commercial dispatch speed, stocked wear parts and honest pricing instead of a boutique backlog.",
    },
    {
      q: "How often should a café La Marzocco be maintained?",
      a: "Group gaskets and screens every 6-12 months depending on volume; a preventive visit (groups, pump pressure, autofill, steam valves, water treatment check) every 6 months; descale verdicts based on your actual water, not a calendar. Cafés on our PM schedule almost never call us with Saturday-morning emergencies — that's the point.",
    },
    {
      q: "My machine has no steam during rush — what's the likely cost?",
      a: "Usually $200-$600. The classic cause in South Florida is a scaled steam-boiler element working at half capacity until it fails, or a pressure-control fault (pressurestat on Classics, controller/SSR on PB/GB5). If the element died of scale, budget for the water-treatment fix too — otherwise we'll meet again in a year.",
    },
    {
      q: "Is a 15-year-old Linea Classic worth repairing?",
      a: "Almost always. The Linea Classic is one of the few machines in any category where a full rebuild — boilers out, descale, new elements, seals, groups — is routinely cheaper than replacement and yields a machine good for another decade. Frame rust and electrical fire damage are the only reasons we'd say no.",
    },
    {
      q: "What does the $89 service call cover?",
      a: "The visit and the diagnosis — free if you approve the repair, paid only if you decline. Same flat structure as every Berne commercial dispatch. You get a written quote before any work; espresso parts are itemized, never bundled into mystery labor.",
    },
  ],
  related: [
    { label: "Espresso machine repair (all brands)", href: "/services/espresso-machine-repair" },
    { label: "Commercial coffee machine repair", href: "/services/coffee-machine-repair" },
    { label: "Ice machine repair for cafés", href: "/services/ice-machine-repair" },
  ],
  requestTopic: "la-marzocco-espresso",
  datePublished: "2026-06-11",
}

// ---------------------------------------------------------------------------
// 7. Vulcan oven & range repair — 170/mo
// ---------------------------------------------------------------------------

const VULCAN: BrandService = {
  slug: "vulcan-oven-repair",
  brand: "Vulcan",
  brandSlug: "vulcan",
  title: "Vulcan Oven & Range Repair",
  shortTitle: "Vulcan Oven & Range",
  metaTitle: "Vulcan Oven & Range Repair Miami — 24/7",
  metaDescription:
    "Vulcan VC convection ovens, ranges & deck ovens repaired same-day across South Florida. Igniters, t-stats, gas valves on the truck. 4.79★/871. $89 call.",
  heroDescription:
    "Same-day Vulcan oven and range repair across Miami-Dade, Broward and Palm Beach — VC-series convection ovens, restaurant ranges, deck ovens and kettles. 24/7 emergency dispatch for commercial kitchens, $89 service call — free with approved repair.",
  intro: [
    "Vulcan cooking equipment is everywhere in South Florida kitchens — VC4GD and VC5GD convection ovens stacked two high, 6-burner ranges with standard ovens under, salamanders and cheese melters over the line. When a Vulcan goes down mid-prep, the failure is almost always in a short list of components: hot-surface igniters, spark modules and pilots, thermostats, gas valves, door mechanisms and blower motors. Our trucks carry that list.",
    "Convection ovens have a particular South Florida career: years of heavy use take out door hinges and gaskets first (heat loss, uneven bakes, slammed doors), then igniters, then thermostat calibration drifts until the bake chart is fiction. Ranges age differently — pilot outages from grease and cleaning chemicals, burner valves stiffening, oven thermostats failing safe-cold. None of it is exotic; all of it costs covers when ignored.",
    "Berne is an independent commercial service company — not a Vulcan/ITW agency. 18 W-2 technicians service gas and electric Vulcan equipment daily alongside the refrigeration and warewashing in the same kitchens: one dispatch, one accountable vendor, with gas work done by techs who treat combustion safety as non-negotiable.",
  ],
  codesHeading: "Vulcan failure points we repair daily",
  codesIntro:
    "Most Vulcan ranges and ovens report faults the old-fashioned way — no ignition, no heat, wrong heat. The component map behind those symptoms is consistent across the line:",
  codes: [
    {
      code: "No ignition on a convection oven (VC series)",
      meaning:
        "The hot-surface igniter or ignition module isn't lighting the burner.",
      action:
        "Igniters are consumables — we measure current draw and replace weak igniters before they strand a Saturday bake. Modules and flame sensors tested in the same visit.",
    },
    {
      code: "Pilot won't stay lit (ranges)",
      meaning:
        "Thermocouple/pilot safety is dropping out, or the pilot is fouled.",
      action:
        "Cleaning, thermocouple replacement and gas-pressure check. Grease and aggressive cleaning chemicals kill more pilots than age does.",
    },
    {
      code: "Oven heats wrong — over, under, or uneven",
      meaning:
        "Thermostat drift, failed temperature probe, or door/gasket heat loss.",
      action:
        "We verify with a calibrated thermometer, recalibrate or replace the control, and fix the door seal that's been skewing every bake.",
    },
    {
      code: "Burner flame lazy, yellow, or sooting",
      meaning:
        "Combustion air or gas-pressure problem — efficiency and safety issue.",
      action:
        "Burner cleaning, orifice and air-shutter adjustment, manifold pressure verification. Yellow flames are a service call, not a quirk.",
    },
    {
      code: "Convection fan noisy or stopped",
      meaning:
        "Blower motor bearings or fan-switch failure — bakes go uneven immediately.",
      action:
        "Motor replacement with correct RPM/frame spec, plus a door-switch check since the fan interlocks on it.",
    },
    {
      code: "Electric models: no heat on one circuit",
      meaning:
        "Element, contactor or infinite-switch failure.",
      action:
        "Amp-draw diagnosis per element, replacement with OEM-spec parts, contactor inspection while the panel is open.",
    },
  ],
  codesNote:
    "We service gas and electric Vulcan equipment; combustion work includes a manifold-pressure and flame-quality check as standard. If you smell gas, shut the equipment's gas valve and call — that ticket jumps the queue.",
  symptomTable: [
    {
      symptom: "Convection oven won't light",
      cause: "Hot-surface igniter or ignition module failure",
      cost: "$150–$400",
      response: "Same-day",
    },
    {
      symptom: "Range pilot keeps going out",
      cause: "Thermocouple or fouled pilot assembly",
      cost: "$120–$280",
      response: "Same-day",
    },
    {
      symptom: "Bakes uneven / temperature off by 25°F+",
      cause: "Thermostat drift, probe failure, or door heat loss",
      cost: "$150–$420",
      response: "Same-day",
    },
    {
      symptom: "Oven door won't close flush",
      cause: "Worn hinges, springs or warped gasket — heat pouring out",
      cost: "$140–$380",
      response: "Same-day",
    },
    {
      symptom: "Blower motor screaming or dead",
      cause: "Motor bearings or fan switch",
      cost: "$220–$520",
      response: "Same-day",
    },
    {
      symptom: "Gas smell or yellow sooting flames",
      cause: "Combustion/gas-pressure fault — safety first",
      cost: "$120–$400",
      response: "Emergency",
    },
    {
      symptom: "Electric oven heats slowly or partially",
      cause: "Failed element or contactor",
      cost: "$180–$480",
      response: "Same-day",
    },
    {
      symptom: "Salamander or cheese melter won't fire",
      cause: "Igniter, valve or element failure on the overhead unit",
      cost: "$130–$360",
      response: "Same-day",
    },
  ],
  equipment: [
    {
      name: "VC-series convection ovens (VC4GD/VC5GD/VC4ED)",
      detail:
        "Single and double stacks, gas and electric — igniters, thermostats, doors, blowers, control boards.",
    },
    {
      name: "Restaurant ranges (36\"-60\")",
      detail:
        "Open burners, griddle tops, standard and convection bases — pilots, valves, thermostats, grates and burner service.",
    },
    {
      name: "Deck & bakery ovens",
      detail:
        "Stone-deck pizza and bakery decks — burner systems, thermostats, door mechanics.",
    },
    {
      name: "Salamanders & cheese melters",
      detail:
        "Overhead broilers on the line — igniters, valves, element service.",
    },
    {
      name: "Kettles, braising pans & steam",
      detail:
        "Vulcan steam-jacketed kettles and tilting skillets — controls, seals, steam-side service.",
    },
    {
      name: "Fryers & griddles",
      detail:
        "Vulcan fry and flat-top equipment shares our cooking-line bench — one vendor across the hot side.",
    },
  ],
  faqs: [
    {
      q: "Do you repair Vulcan ovens and ranges the same day?",
      a: "Yes — cooking-line outages dispatch same-day across Miami-Dade, Broward and Palm Beach. A dead convection oven before a Friday service is exactly the call our dispatch exists for. $89 service call — waived once you approve the repair.",
    },
    {
      q: "Are you an authorized Vulcan service agent?",
      a: "No — Berne is an independent commercial service company with no Vulcan/ITW affiliation. Use the factory network while your warranty lasts; out of warranty, our techs repair Vulcan equipment daily with the common parts already on the truck.",
    },
    {
      q: "My convection oven bakes unevenly — what's wrong?",
      a: "Three suspects, in order: the door (worn hinges/gasket dumping heat from one side), the blower (weak motor not circulating), and the thermostat (drifted calibration). We test all three in one visit — typically $150-$420 — and verify the cavity with a calibrated thermometer before we leave.",
    },
    {
      q: "Is a yellow, lazy burner flame actually dangerous?",
      a: "Treat it as a service call, yes. Yellow or sooting flames mean incomplete combustion — wasted gas, soot on cookware, and carbon monoxide production in a space where people work all day. The fix is usually cleaning plus air-shutter and gas-pressure adjustment, and it's quick. Don't run it for months.",
    },
    {
      q: "Should I repair or replace a 12-year-old Vulcan range?",
      a: "Repair, usually — heavy-gauge Vulcan ranges are simple machines, and valves, pilots, thermostats and grates are all economical parts. Replacement math only wins when the frame and oven cavity are rusted out or a discontinued control system fails. We'll give you the straight answer on the first visit.",
    },
    {
      q: "Do you offer cooking-line maintenance contracts?",
      a: "Yes — quarterly or semi-annual: burner and pilot service, thermostat verification with a calibrated thermometer, door mechanics, gas-pressure checks across the line. Hot-side PM pairs with the refrigeration and dish-machine contracts most of our accounts already run.",
    },
  ],
  related: [
    { label: "Commercial oven repair (all brands)", href: "/services/commercial-oven-repair" },
    { label: "Commercial range repair", href: "/services/commercial-range-repair" },
    { label: "Hobart vs Vulcan — honest comparison", href: "/compare/hobart-vs-vulcan-ranges" },
    { label: "Vulcan brand overview", href: "/brands/vulcan" },
    { label: "Hobart dishwasher repair", href: "/services/hobart-dishwasher-repair" },
  ],
  requestTopic: "vulcan-oven-range",
  datePublished: "2026-06-11",
}

// ---------------------------------------------------------------------------
// 8. Turbo Air refrigeration repair — 110/mo
// ---------------------------------------------------------------------------

const TURBO_AIR: BrandService = {
  slug: "turbo-air-refrigeration-repair",
  brand: "Turbo Air",
  title: "Turbo Air Refrigeration Repair",
  shortTitle: "Turbo Air Refrigeration",
  metaTitle: "Turbo Air Refrigeration Repair Miami — 24/7",
  metaDescription:
    "Turbo Air M3 & PRO reach-ins, undercounters & prep tables repaired same-day across South Florida. Controller faults read right. 4.79★/871. $89 call.",
  heroDescription:
    "Same-day Turbo Air refrigeration repair across Miami-Dade, Broward and Palm Beach — M3 and PRO series reach-ins, TSR merchandisers, undercounters and prep tables. 24/7 emergency dispatch for commercial accounts, $89 service call — free with approved repair.",
  intro: [
    "Turbo Air earned its market share on price and features — digital controllers, self-cleaning condenser mechanisms, hydrocarbon refrigerants early. In the field that means a different failure profile than the all-mechanical brands: more sensor and controller tickets, more defrost-logic faults, and a self-cleaning condenser that helps but doesn't repeal South Florida physics. Our techs service the M3 fleet daily and know which faults are a probe, which are a board, and which are plain old dirty-coil heat rejection.",
    "The digital controller is your friend if someone reads it correctly. Probe errors (the E-type sensor faults on M3 displays), high-temp alarms and defrost misbehavior each narrow the diagnosis to minutes. The expensive mistake we see from generalist repair: replacing a controller to fix what was a $40 probe, or condemning a compressor when the start components failed. We test components, not guesses.",
    "Berne is an independent commercial service company — no Turbo Air affiliation, no dealer relationship. We service Turbo Air alongside True, Traulsen and the rest of the cold side: 18 W-2 technicians, 29,000+ services since 2015, EPA 608-certified for both the legacy R-134a/R-404A units and the current R290 hydrocarbon generation.",
  ],
  codesHeading: "Turbo Air M3 controller faults & field signatures",
  codesIntro:
    "M3-generation cabinets surface problems on the digital display; older and simpler units fail physically. The service map behind the common indications:",
  codes: [
    {
      code: "Probe/sensor error (E-type code on display)",
      meaning:
        "The controller lost a plausible reading from the air or evaporator (defrost) sensor.",
      action:
        "We test the probe's resistance curve before touching the board — probes and connectors fail far more often than controllers, especially with coastal corrosion.",
    },
    {
      code: "High-temperature alarm",
      meaning:
        "Cabinet air exceeded the alarm threshold — the box is losing the battle.",
      action:
        "Condenser inspection first (self-cleaning mechanism included), then charge, fans and gaskets. Alarm history tells us whether it's nightly or new.",
    },
    {
      code: "Evaporator icing despite auto-defrost",
      meaning:
        "Defrost logic, heater or sensor failure — the controller thinks it defrosted; the coil disagrees.",
      action:
        "Defrost sensor placement and heater amp-draw check, controlled thaw, and parameter verification against factory spec.",
    },
    {
      code: "Self-cleaning condenser mechanism stalled",
      meaning:
        "The rotating brush/cleaning mechanism has jammed or its motor failed — the headline feature quietly stopped working.",
      action:
        "Mechanism service or replacement, plus the manual deep-clean the coil missed while it was down.",
    },
    {
      code: "Compressor clicks, won't start",
      meaning:
        "Start relay/capacitor failure mimicking compressor death.",
      action:
        "Start-component test and replacement, run-amperage verification. Same $30-part-saves-$1,200 story as every reach-in brand.",
    },
    {
      code: "Display dead / controller unresponsive",
      meaning:
        "Power supply, transformer or controller failure.",
      action:
        "We verify supply and transformer output before replacing the controller, and we program replacement parameters correctly — factory defaults are not your cabinet's defaults.",
    },
  ],
  codesNote:
    "R290 (propane) Turbo Air cabinets require hydrocarbon-rated service protocols and components — our EPA 608 techs are equipped for them.",
  symptomTable: [
    {
      symptom: "Cabinet warm, display shows sensor error",
      cause: "Failed air/evap probe or corroded connector",
      cost: "$120–$300",
      response: "Same-day",
    },
    {
      symptom: "High-temp alarms every afternoon",
      cause: "Dirty condenser or stalled self-clean mechanism",
      cost: "$120–$350",
      response: "Same-day",
    },
    {
      symptom: "Evaporator iced into a block",
      cause: "Defrost heater/sensor or controller-logic fault",
      cost: "$150–$420",
      response: "Same-day",
    },
    {
      symptom: "Compressor hums but won't start",
      cause: "Start relay/capacitor — not the compressor",
      cost: "$120–$260",
      response: "Same-day",
    },
    {
      symptom: "Doors sweating, gaskets torn",
      cause: "Gasket compression loss in South Florida humidity",
      cost: "$100–$320",
      response: "Same-day",
    },
    {
      symptom: "Prep-table rail won't hold 41°F",
      cause: "Airflow, controller setpoint, or refrigeration capacity",
      cost: "$130–$380",
      response: "Same-day",
    },
    {
      symptom: "Sealed-system failure on an older unit",
      cause: "Compressor or leak — honest repair-vs-replace math",
      cost: "$600–$1,200",
      response: "24–48h",
    },
  ],
  equipment: [
    {
      name: "M3 series reach-ins (M3R/M3F/M3H)",
      detail:
        "The volume line — controller and probe diagnostics, defrost service, gaskets, sealed systems (EPA 608).",
    },
    {
      name: "PRO series reach-ins",
      detail:
        "Premium line with the same service fundamentals plus higher-spec controls — serviced to spec, parameters verified.",
    },
    {
      name: "TSR / TGM glass-door merchandisers",
      detail:
        "Front-of-house display — lighting, frame heaters, gaskets, condensation control.",
    },
    {
      name: "Undercounters & worktops (MUR/PUR)",
      detail:
        "Line refrigeration next to the hot side — grease-loaded condensers dominate; cleaning and fan service same-day.",
    },
    {
      name: "Sandwich & pizza prep tables (MST/TPR)",
      detail:
        "Pan-rail temperature battles, hood gaskets, airflow and controller service to keep the rail legal.",
    },
    {
      name: "R290 hydrocarbon generation",
      detail:
        "Current Turbo Air cabinets run propane refrigerant — correct components and protocols, EPA 608-certified techs.",
    },
  ],
  faqs: [
    {
      q: "Do you repair Turbo Air refrigerators same-day?",
      a: "Yes — refrigeration loss dispatches as an emergency across Miami-Dade, Broward and Palm Beach, seven days a week. $89 commercial service call — free with the approved repair.",
    },
    {
      q: "Are you an authorized Turbo Air servicer?",
      a: "No — Berne is an independent commercial service company with no Turbo Air affiliation. In-warranty units should use the factory network (Turbo Air's compressor warranties are long); for everything else our techs carry the probes, start components and gaskets that close most M3 calls in one visit.",
    },
    {
      q: "My M3 shows a sensor error — do I need a new controller?",
      a: "Usually not. The temperature probes and their connectors fail far more often than the controller itself, especially near the coast where corrosion creeps into pin connections. We test the probe's resistance against its curve first — a $120-$300 repair — and only replace the controller on meter evidence.",
    },
    {
      q: "Does the self-cleaning condenser mean I can skip coil maintenance?",
      a: "No — it helps, it doesn't exempt. The mechanism handles dust film but not kitchen grease, and the mechanism itself jams or loses its motor after years of service (often unnoticed). We check it on every visit; a stalled self-cleaner plus a greasy line location equals the same dirty-coil failures as any other brand.",
    },
    {
      q: "Is a Turbo Air cabinet worth repairing, or is it disposable?",
      a: "Worth repairing in almost every non-sealed-system case — probes, controllers, fans, gaskets and start components are all economical. Sealed-system failure on an 8-10 year unit is where the math gets close, and we quote repair vs replace side by side. The cabinets are better than their street reputation; the maintenance they received usually isn't.",
    },
    {
      q: "Do you service other refrigeration brands at the same visit?",
      a: "Yes — most kitchens mix Turbo Air with True, Traulsen, Beverage-Air and others, and our techs service the whole cold side under one dispatch. One vendor, one PM schedule, one accountable phone number: (754) 345-4515.",
    },
  ],
  related: [
    { label: "Commercial refrigeration repair (all brands)", href: "/services/commercial-refrigeration-repair" },
    { label: "True vs Turbo Air — honest comparison", href: "/compare/true-vs-turbo-air" },
    { label: "True refrigeration repair", href: "/services/true-refrigeration-repair" },
    { label: "Reach-in cooler repair", href: "/services/reach-in-cooler-repair" },
  ],
  requestTopic: "turbo-air-refrigeration",
  datePublished: "2026-06-11",
}

// ---------------------------------------------------------------------------
// Registry + helpers
// ---------------------------------------------------------------------------

export const BRAND_SERVICES: BrandService[] = [
  MANITOWOC,
  HOSHIZAKI,
  SCOTSMAN,
  HOBART,
  TRUE,
  LA_MARZOCCO,
  VULCAN,
  TURBO_AIR,
]

export function getBrandService(slug: string): BrandService | undefined {
  return BRAND_SERVICES.find((b) => b.slug === slug)
}

/**
 * Service-hub → brand-service cross-links. Renders a "brand specialists"
 * block on the matching /services/<hub> pages so the new brand pages get
 * crawl paths from the highest-authority hubs on day one.
 */
const BRAND_SERVICES_BY_HUB: Record<string, string[]> = {
  "ice-machine-repair": [
    "manitowoc-ice-machine-repair",
    "hoshizaki-ice-machine-repair",
    "scotsman-ice-machine-repair",
  ],
  "commercial-dishwasher-repair": ["hobart-dishwasher-repair"],
  "commercial-refrigeration-repair": [
    "true-refrigeration-repair",
    "turbo-air-refrigeration-repair",
  ],
  "reach-in-cooler-repair": [
    "true-refrigeration-repair",
    "turbo-air-refrigeration-repair",
  ],
  "reach-in-freezer-repair": [
    "true-refrigeration-repair",
    "turbo-air-refrigeration-repair",
  ],
  "commercial-oven-repair": ["vulcan-oven-repair"],
  "commercial-range-repair": ["vulcan-oven-repair"],
  "espresso-machine-repair": ["la-marzocco-espresso-repair"],
  "coffee-machine-repair": ["la-marzocco-espresso-repair"],
}

export function getBrandServicesForHub(hubSlug: string): BrandService[] {
  return (BRAND_SERVICES_BY_HUB[hubSlug] ?? [])
    .map((slug) => getBrandService(slug))
    .filter((b): b is BrandService => Boolean(b))
}

/**
 * /compare/<slug> → brand-service cross-links ("need a repair, not a
 * comparison?"). Keyed by comparison slug.
 */
const BRAND_SERVICES_BY_COMPARISON: Record<string, string[]> = {
  "manitowoc-vs-hoshizaki-ice": [
    "manitowoc-ice-machine-repair",
    "hoshizaki-ice-machine-repair",
  ],
  "hoshizaki-vs-scotsman-ice": [
    "hoshizaki-ice-machine-repair",
    "scotsman-ice-machine-repair",
  ],
  "hobart-vs-vulcan-ranges": [
    "hobart-dishwasher-repair",
    "vulcan-oven-repair",
  ],
  "true-vs-traulsen-refrigeration": ["true-refrigeration-repair"],
  "true-vs-turbo-air": [
    "true-refrigeration-repair",
    "turbo-air-refrigeration-repair",
  ],
}

export function getBrandServicesForComparison(
  comparisonSlug: string,
): BrandService[] {
  return (BRAND_SERVICES_BY_COMPARISON[comparisonSlug] ?? [])
    .map((slug) => getBrandService(slug))
    .filter((b): b is BrandService => Boolean(b))
}

/**
 * /brands/<slug> → dedicated repair page, where one exists.
 */
const BRAND_SERVICE_BY_BRAND_PROFILE: Record<string, string> = {
  manitowoc: "manitowoc-ice-machine-repair",
  hoshizaki: "hoshizaki-ice-machine-repair",
  true: "true-refrigeration-repair",
  hobart: "hobart-dishwasher-repair",
  vulcan: "vulcan-oven-repair",
}

export function getBrandServiceForBrandProfile(
  brandProfileSlug: string,
): BrandService | undefined {
  const slug = BRAND_SERVICE_BY_BRAND_PROFILE[brandProfileSlug]
  return slug ? getBrandService(slug) : undefined
}

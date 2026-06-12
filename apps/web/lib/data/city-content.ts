/**
 * Deep city build-outs for the highest-demand city hubs.
 *
 * Wave-2 (2026-06-10): the 71 city pages are template-rendered with ~2
 * unique sentences each — GSC treats them as directory pages (zero city
 * above pos 29 despite West Palm Beach 88 impr / Boynton Beach 103 impr).
 * This layer adds real localized content — named corridors, local
 * equipment-failure patterns, city-specific FAQs — to the cities that have
 * proven impressions. Rendered by app/[city]/page.tsx when present;
 * the other cities keep the lightweight template.
 *
 * Build order (per GSC demand): west-palm-beach, boynton-beach. Next up:
 * miami, miami-beach, fort-lauderdale, pembroke-pines, boca-raton,
 * hollywood, hialeah, doral.
 */

export type CityEnrichment = {
  slug: string
  /** H2 for the deep-dive section */
  heading: string
  /** 3-5 paragraphs of genuinely local commercial copy */
  paragraphs: string[]
  /** Named corridors / districts and what we service there */
  districts: { name: string; detail: string }[]
  /** Local equipment-failure patterns from our ticket history */
  patterns: { title: string; detail: string }[]
  /** City-specific FAQs — appended to the templated city FAQ set */
  faqs: { q: string; a: string }[]
  /** Contextual deep links (e.g. the city's highest-demand combo page) */
  links?: { label: string; href: string }[]
}

const CITY_ENRICHMENTS: CityEnrichment[] = [
  // ──────────────────────────────────────────────────── West Palm Beach
  {
    slug: "west-palm-beach",
    heading: "Commercial equipment service in West Palm Beach — how we work the city",
    paragraphs: [
      "West Palm Beach is the densest commercial-kitchen market in Palm Beach County, and it runs on tight margins for downtime. The restaurant rows on Clematis Street and around Rosemary Square turn tables continuously from lunch through late evening; a walk-in that drifts above 41°F at 4pm is not a maintenance item there — it is tonight's revenue. Our Palm Beach dispatch routes a refrigeration tech with R-404A and R-448A on board to downtown West Palm Beach loss-of-temperature calls the same day, and the $89 commercial service call is free when you approve the repair.",
      "The city's commercial mix is broader than the downtown dining core. Northwood Village runs independent kitchens and cafés in older buildings where electrical service and equipment access add real constraints to a repair. The Okeechobee Boulevard corridor west of I-95 carries hotel flags, chain restaurants, and the convention-center hospitality cluster. South Dixie Highway's Antique Row and the El Cid edge mix boutique food service into retail. Palm Beach Outlets and the Congress Avenue retail strips run food courts, grocery refrigeration, and QSR equipment on long hours. And the healthcare anchors — St. Mary's Medical Center and Good Samaritan among them — run cafeteria cooking lines, patient-floor ice, and pharmacy-grade refrigeration that need documented, COI-ready vendors.",
      "Equipment-wise, West Palm Beach is a hybrid climate market. East of Flagler Drive and along the waterfront, salt air shortens outdoor condenser and fan-motor life the same way it does on the barrier island — we replace corroded condenser fan motors on waterfront accounts at roughly twice the inland rate. West of I-95, the failure profile shifts to heat-load and dust: condensers foul faster near construction corridors, and refrigeration cycles hard through the long summer. Our preventive-maintenance contracts in the city are built around exactly that split — coil cleaning and corrosion checks quarterly on the waterfront, semi-annual inland.",
      "We also serve the operators the storefronts depend on: commissary and dark kitchens off Australian Avenue and the warehouse corridors, catering operations loading out for Palm Beach island events, and property-managed buildings from downtown towers to Flamingo Park edges that need one accountable vendor across refrigeration, ice, cooking equipment, and common-area laundry. Dispatch is COI-ready for property-management onboarding (Compliance Depot, NetVendor, RealPage) and our techs are W-2 employees, not subcontractors.",
    ],
    districts: [
      {
        name: "Clematis Street & the downtown waterfront",
        detail:
          "High-turnover restaurant row — walk-ins, reach-ins, ice machines and fryers on continuous duty. Loss-of-temperature calls here are treated as emergencies; evening service windows available so repairs don't collide with covers.",
      },
      {
        name: "Rosemary Square & The Square district",
        detail:
          "Mixed hospitality and chef-driven kitchens with combi ovens, espresso machines and display refrigeration. Tight service corridors and valet logistics — our techs coordinate access with property management.",
      },
      {
        name: "Northwood Village",
        detail:
          "Independent cafés and kitchens in older building stock — aging electrical, undersized condensate drains and legacy R-22 systems are the recurring tickets. We quote R-448A/R-449A conversions honestly against recharges.",
      },
      {
        name: "Okeechobee Blvd & convention-center corridor",
        detail:
          "Hotel banquet kitchens, chain restaurants and event catering — combi ovens, banquet holding cabinets, high-volume ice. Multi-unit account management with consolidated reporting available.",
      },
      {
        name: "Healthcare anchors (St. Mary's / Good Samaritan area)",
        detail:
          "Cafeteria cooking lines, patient-floor nugget ice, vaccine and lab refrigeration on the mechanical side — documented service tickets, badge-ready techs, EPA 608 certified.",
      },
    ],
    patterns: [
      {
        title: "Waterfront condenser corrosion",
        detail:
          "East of Flagler and along the Intracoastal, salt air kills outdoor condenser fan motors in 4-6 years instead of 8-10. Quarterly coil treatment on our waterfront contracts roughly doubles component life.",
      },
      {
        title: "Legacy R-22 walk-ins in older corridors",
        detail:
          "Northwood and South Dixie building stock still runs 2000s-era walk-in systems. At $90-$150/lb for reclaimed R-22, we usually recommend a condensing-unit conversion ($3,000-$5,000) over a second recharge.",
      },
      {
        title: "Summer heat-load failures west of I-95",
        detail:
          "Inland West Palm Beach ambient pushes marginal compressors over the edge every July-September. Pre-season condenser cleaning and amperage checks (May) prevent most of the emergency queue.",
      },
    ],
    faqs: [
      {
        q: "Do you service downtown West Palm Beach restaurants during evening service?",
        a: "Yes — we schedule non-emergency work around service windows, and loss-of-temperature emergencies dispatch same-day regardless. Clematis Street and Rosemary Square accounts can request morning-only access windows.",
      },
      {
        q: "Can you onboard through our property-management vendor portal?",
        a: "Yes. We are COI-ready and registered with the common procurement portals (Compliance Depot, NetVendor, RealPage). W-9, EPA 608, license and insurance documents are available for download on our credentials page.",
      },
      {
        q: "Do you handle healthcare refrigeration in West Palm Beach?",
        a: "Yes — mechanical service on vaccine, pharmacy and lab refrigeration (Helmer, Migali Scientific, Follett) plus cafeteria cooking equipment, with documentation formatted for your QA chain. Same-day on critical refrigeration.",
      },
    ],
    links: [
      {
        label: "Commercial refrigeration repair in West Palm Beach",
        href: "/west-palm-beach/commercial-refrigeration-repair",
      },
      {
        label: "Ice machine repair in West Palm Beach",
        href: "/west-palm-beach/ice-machine-repair",
      },
      {
        label: "Walk-in cooler repair in West Palm Beach",
        href: "/west-palm-beach/walk-in-cooler-repair",
      },
    ],
  },

  // ──────────────────────────────────────────────────── Boynton Beach
  {
    slug: "boynton-beach",
    heading: "Commercial equipment service in Boynton Beach — how we work the city",
    paragraphs: [
      "Boynton Beach runs a quieter profile than the downtown West Palm dining core, but the commercial equipment load is real: the Federal Highway corridor's restaurants and waterfront dining around the Boynton Harbor Marina, the Ocean Avenue downtown district, the big-box and food-court cluster around the Boynton Beach Mall and Congress Avenue, and the Renaissance Commons mixed-use kitchens all run refrigeration, ice and cooking equipment on long South Florida duty cycles. Berne dispatches across all of it with the same $89 commercial service call — free with an approved repair.",
      "Ice machines are the single biggest service category in our Boynton Beach ticket history — marina-adjacent bars and seafood kitchens, hotel and pool-deck dispensers, and healthcare ice at the Bethesda Hospital East campus all push machines hard through the season. Coastal accounts east of Federal Highway add the salt-air factor: condenser fan motors and exposed evaporator components age measurably faster within a mile of the Intracoastal. If your Hoshizaki, Manitowoc or Scotsman is producing thin ice, running long harvest cycles, or stopping with the bin half empty, those are exactly the symptoms our techs clear daily — see the dedicated ice machine repair in Boynton Beach page for the symptom-by-symptom breakdown.",
      "West of I-95, the profile shifts industrial: Quantum Park and the Gateway Boulevard corridor run commissary kitchens, food production, and distribution refrigeration where downtime is measured in pallets, not covers. Walk-in coolers and freezers dominate those tickets — defrost-cycle failures, door-seal infiltration, and aging condensing units on boxes that have outlived their first refrigeration system. We replace condensing units on structurally sound walk-ins for $2,500-$4,500 — a fraction of box replacement — and we will tell you honestly when panels are too far gone to be worth it.",
      "The city's restaurant economics reward a vendor who shows up the first time with parts: most of our Boynton Beach repairs close on the first visit because gaskets, fan motors, thermostats, igniters and harvest sensors ride on the trucks. Dispatch covers Boynton Beach seven days a week from our Palm Beach County routes, with refrigeration loss prioritized as an emergency.",
    ],
    districts: [
      {
        name: "Federal Highway corridor & Boynton Harbor Marina",
        detail:
          "Waterfront dining, seafood kitchens and bars — heavy ice-machine duty plus salt-air condenser wear. First-visit fixes on harvest sensors, inlet valves and fan motors; quarterly cleanings on contract.",
      },
      {
        name: "Ocean Avenue downtown district",
        detail:
          "Independent restaurants and cafés in the walkable core — reach-ins, espresso machines, fryers and prep tables. Morning service windows available before doors open.",
      },
      {
        name: "Congress Ave / Boynton Beach Mall cluster",
        detail:
          "Food-court QSR equipment, grocery refrigeration and chain-restaurant cooking lines on long hours — multi-unit account service with consolidated invoicing.",
      },
      {
        name: "Quantum Park & Gateway Blvd industrial corridor",
        detail:
          "Commissary and production kitchens, distribution cold storage — walk-in coolers and freezers, compressor and defrost-system work, planned condensing-unit replacements scheduled around production.",
      },
      {
        name: "Bethesda Hospital East area",
        detail:
          "Healthcare foodservice and patient-floor ice on the mechanical side — documented tickets, EPA 608-certified techs, COI on file for facility vendor management.",
      },
    ],
    patterns: [
      {
        title: "Ice machine scale + salt air east of Federal",
        detail:
          "Hard water scales evaporators while coastal air corrodes condensers — the double hit behind most Boynton no-ice calls. Water filtration ($300-$900 installed) plus quarterly cleaning is the difference between a 7-year and a 14-year machine.",
      },
      {
        title: "Walk-in defrost failures in industrial accounts",
        detail:
          "Quantum Park boxes ice up the evaporator when defrost timers and heaters age out — production stops while the coil thaws. Defrost-system service runs $250-$700; we stock the common timers and heaters.",
      },
      {
        title: "Aging condensing units on first-generation boxes",
        detail:
          "A wave of 2008-2014 walk-ins around the city is hitting end-of-mechanical-life. Sound panels make these $2,500-$4,500 system swaps, not $10,000+ replacements — we assess panels on every major diagnosis.",
      },
    ],
    faqs: [
      {
        q: "Do you repair commercial ice machines in Boynton Beach same-day?",
        a: "Yes — no-ice calls dispatch same-day across Boynton Beach, including the marina corridor and Congress Avenue cluster. Hoshizaki, Manitowoc, Scotsman, Ice-O-Matic and Follett are all routine; common parts ride on the trucks.",
      },
      {
        q: "Can you service our walk-in in Quantum Park around production hours?",
        a: "Yes. Industrial accounts can schedule diagnostics and planned work (including condensing-unit replacements) around production windows, and emergency loss-of-temperature calls jump the queue regardless of hour.",
      },
      {
        q: "What does an ice machine cleaning cost in Boynton Beach?",
        a: "Per-visit cleanings run $180-$260; an annual contract with quarterly cleanings plus first-tier diagnostics runs $720-$960 per machine. In Boynton's water, the contract is the cheapest insurance a bar or kitchen can buy.",
      },
    ],
    links: [
      {
        label: "Ice machine repair in Boynton Beach",
        href: "/boynton-beach/ice-machine-repair",
      },
      {
        label: "Walk-in cooler repair in Boynton Beach",
        href: "/boynton-beach/walk-in-cooler-repair",
      },
      {
        label: "Commercial refrigeration repair in Boynton Beach",
        href: "/boynton-beach/commercial-refrigeration-repair",
      },
    ],
  },
]

const map = new Map(CITY_ENRICHMENTS.map((c) => [c.slug, c]))

export function getCityEnrichment(slug: string): CityEnrichment | undefined {
  return map.get(slug)
}

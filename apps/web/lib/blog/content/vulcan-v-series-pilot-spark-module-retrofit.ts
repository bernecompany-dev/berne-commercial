import type { Article } from "../articles"

export const vulcanVSeriesPilotSparkModule: Article = {
  slug: "vulcan-v-series-pilot-spark-module-retrofit",
  title:
    "Vulcan V-Series Range Pilot vs Spark Module Retrofits — When It's Worth It",
  description:
    "The standing pilot on your Vulcan V6BS or V10P is reliable but eats $30 a month in gas per burner. A spark module retrofit pays back in 14 to 22 months. The catch is finding the right kit for the range vintage.",
  publishedAt: "2026-08-06T09:00:00Z",
  readingMinutes: 10,
  category: "Restaurant Equipment",
  tags: [
    "Vulcan",
    "V-series range",
    "spark module",
    "pilot retrofit",
    "gas equipment",
  ],
  lede: "A Coconut Grove steakhouse runs a Vulcan V10P 10-burner range with standing pilots. Each pilot burns roughly 600 BTU/hour continuously — about 5,256 therms of natural gas per year across all ten burners just for pilots, before anyone cooks anything. At Florida commercial natural gas rates that's $380 to $520 a year in gas wasted, plus the heat dumped into a kitchen that's already paying to be cooled. A spark module retrofit eliminates the pilots, the heat dump, and the gas waste — but only if the range vintage accepts the retrofit cleanly. Here's how to tell.",
  sections: [
    {
      heading: "1. The standing pilot — what it actually costs",
      body: [
        "A Vulcan V-series standing pilot is a small gas flame burning continuously at the burner head. Pilots are rated at 500 to 800 BTU/hour depending on burner size. A 10-burner V10P with all pilots lit burns roughly 6,000 BTU/hour just keeping the pilots, 24/7, 365 days a year. That's 52.5 million BTU annually, or about 525 therms, before any actual cooking. At $0.70 per therm Florida commercial rate, that's $367 in pilot gas per year.",
        "The hidden cost is the heat. Those 6,000 BTU/hour dump into the kitchen as waste heat. The HVAC has to pull it out. For a typical Miami restaurant the cooling cost of removing pilot heat runs another $180 to $260 per year. Total annual cost of pilots on a 10-burner range: roughly $550 to $620 in direct and indirect cost.",
      ],
    },
    {
      heading: "2. The spark module — how it works",
      body: [
        "A spark module replaces the standing pilot with an electronic igniter that fires only when the burner valve is opened. The burner control sends 24V to an ignition module, the module generates a high-voltage spark across an electrode at the burner head, the gas ignites, and a flame-sensing rod confirms ignition. No pilot, no continuous burn, no heat dump.",
        "Vulcan's factory spark ignition system is the VS-SP kit on the V-series Endurance line (2018+). Aftermarket kits from Hi-Cap and Robertshaw work on older V-series ranges. The retrofit takes 2 to 4 hours per range depending on burner count and the original wiring. Parts run $180 to $280 per burner depending on the kit.",
      ],
    },
    {
      heading: "3. Vintage matters — what year was the range built",
      body: [
        "Vulcan V-series ranges built 2005 to 2014 use a manifold and burner head geometry that accepts the Robertshaw HS780 spark-ignition retrofit cleanly. Ranges built 2014 to 2018 use a different burner head with an integrated pilot tube that requires a longer-throat electrode — the Hi-Cap 600 series. Ranges built 2018+ (Endurance line) ship with the OEM Vulcan VS-SP kit available factory-direct.",
        "Ranges pre-2005 (V6B older variants, original V10P) often don't have a 24V control transformer wired in. Adding the transformer plus the spark module turns a $2,000 retrofit into a $3,500 retrofit and the payback window stretches from 16 months to 28+ months. For pre-2005 ranges, we usually recommend running the existing pilots and budgeting for a range replacement at end-of-service-life rather than retrofitting.",
      ],
    },
    {
      heading: "4. The retrofit procedure — what gets touched",
      body: [
        "Power off and gas off, lock-and-tag both. Remove burner heads. Pull the existing pilot assemblies — pilot tube, thermocouple, pilot orifice. The new electrode and flame-sensing rod thread into the same orifice ports on most kits. Run 24V wiring from the existing transformer (or new transformer if needed) to the ignition module mounted under the range top.",
        "The flame-sensing rod requires careful adjustment — too close to the flame and it gets hot enough to fail; too far and the module won't see flame and will lock out. Spec is 1/8 inch from the burner ring with the electrode positioned to spark into the gas stream. Each burner gets bench-tested for clean ignition and stable flame sensing before the range is returned to service.",
      ],
    },
    {
      heading: "5. The payback math — when it makes sense",
      body: [
        "Cost: roughly $2,000 to $3,200 for a 10-burner V10P retrofit including parts, labor, and a 24V transformer if needed. Savings: $550 to $620 per year in gas plus HVAC. Payback window: 38 to 58 months on direct gas savings alone, 30 to 48 months if HVAC offset is counted, 14 to 22 months if the kitchen runs natural gas spot pricing in a high-rate period.",
        "Sounds long. But the range is a 15 to 25 year asset. If you're 2 years into the range life, payback is over the remaining 13 to 23 years and the retrofit makes sense. If you're 18 years in and planning replacement at 22, the retrofit math is marginal. We do a free estimate that includes the vintage check, the kit cost, and the payback calculation per your kitchen.",
      ],
    },
    {
      heading: "6. Other reasons to retrofit besides gas savings",
      body: [
        "Kitchen comfort: removing 6,000 BTU/hour of waste heat changes the line temperature meaningfully. Restaurants that have done this report a 4 to 7°F drop at the line, which improves cook performance and reduces HVAC stress during peak service.",
        "Fire risk: a standing pilot is a 24/7 ignition source. A retrofit eliminates that. NFPA 96 (hood and exhaust standards) and the Florida fire marshal have no problem with standing pilots if the hood is properly sized and maintained, but a kitchen with marginal hood capture will reduce its fire risk meaningfully by going to spark ignition.",
        "Insurance: some commercial kitchen insurers offer a credit for spark-ignition retrofits. Not a huge number — usually 2 to 5 percent on the equipment portion — but real money on a multi-asset policy.",
      ],
    },
    {
      heading: "7. When NOT to retrofit",
      body: [
        "If the range has documented combustion issues — yellow flames, soot, burner port erosion — fix those before retrofitting. The retrofit doesn't solve combustion problems and a marginal burner becomes a non-igniting burner under spark ignition. If the range is past 15 years of service and showing other wear (worn valves, drifting thermostats), we usually recommend budgeting for replacement rather than retrofitting.",
        "If the kitchen has frequent power glitches — Miami summer storms — a spark module range without UPS protection can lock out repeatedly. Standing pilots don't care about power. For unstable-power kitchens, the retrofit decision is more nuanced and often comes with a UPS recommendation for the range control circuit.",
      ],
    },
    {
      heading: "8. Compliance — NFPA 54 and Florida fuel gas code",
      body: [
        "Any gas-equipment modification falls under NFPA 54 national fuel gas code and the Florida fuel gas inspector's purview. Berne Commercial pulls a permit if required by the local jurisdiction, performs the retrofit, and provides a leak-test certification (Yokogawa or Bacharach electronic combustible-gas detector at every joint) on completion. The certification stays with the kitchen and is the answer to any subsequent fire-marshal inquiry.",
      ],
    },
    {
      heading: "Same-day Vulcan service",
      body: [
        "Berne Commercial Repair services Vulcan V-series, Endurance, and L-series ranges and fryers across Miami-Dade, Broward, and Palm Beach. Spark module retrofits, pilot service, burner replacements, and full range diagnostics. $89 commercial service call, free if you go ahead with the repair. Call (754) 345-4515 or request through our commercial range repair page.",
        "For residential pro-style range pilot and spark module service (Wolf, Viking Professional, BlueStar), [Berne's premium residential operation](https://berne-repair.com) covers the home-side equivalents.",
      ],
    },
  ],
  internalLinks: [
    { label: "Commercial range repair", href: "/services/commercial-range-repair" },
    { label: "Vulcan repair", href: "/brands/vulcan" },
    { label: "Restaurants", href: "/industries/restaurants" },
    { label: "Credentials", href: "/credentials" },
    { label: "Request dispatch", href: "/request-dispatch" },
  ],
  relatedSlugs: [
    "vulcan-range-pilot-wont-stay-lit",
    "commercial-convection-oven-even-bake-failure",
  ],
}

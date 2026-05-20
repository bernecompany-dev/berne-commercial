import type { Article } from "../articles"

export const garlandRbCharbroilerBurnerRegulator: Article = {
  slug: "garland-rb-charbroiler-burner-regulator",
  title:
    "Garland RB Charbroiler — Burner Regulator Failure Pattern",
  description:
    "Garland RB series charbroilers hold flame on a sectional manifold with individual burner regulators. The regulators fail in a predictable sequence and the symptoms get blamed on the gas company. Here's the real diagnostic.",
  publishedAt: "2026-09-24T09:00:00Z",
  readingMinutes: 9,
  category: "Restaurant Equipment",
  tags: [
    "Garland",
    "RB charbroiler",
    "burner regulator",
    "gas equipment",
    "diagnostics",
  ],
  lede: "A South Beach steakhouse runs three Garland RB-36 36-inch charbroilers across two lines. By month 31, burner two on the center unit was running noticeably cooler than the other five sections. The chef blamed the gas company. The line cook compensated by moving steaks off section two. Two weeks later section five on the same unit started running cool. The pattern wasn't the gas company. It was the burner regulators failing in sequence — and on a Garland RB the regulator failure pattern is well-documented. The fix is straightforward when you recognize the symptom for what it is.",
  sections: [
    {
      heading: "1. The Garland RB sectional manifold",
      body: [
        "The Garland RB-24, RB-36, and RB-48 charbroilers use a sectional manifold design. Each 6-inch section is independent: own burner, own valve, own pressure regulator, own pilot. The design lets you run different temperatures on different sections — searing on one, holding on another. Good for kitchen flexibility. Hard on regulators because each one is a separate wear point.",
        "The regulators are gas pressure regulators rated for the burner orifice and the supply pressure. On natural gas, the spec is 4 inches water column at the burner inlet. On propane, 10 inches. The regulator drops supply pressure (typically 7-14 inches WC for natural gas at the manifold) to burner spec. Over 24 to 48 months of service the regulator diaphragm hardens, the regulating spring loses calibration, and the burner runs progressively below spec.",
      ],
    },
    {
      heading: "2. The failure sequence",
      body: [
        "Garland RB burner regulators tend to fail in a predictable pattern: the regulator on the section nearest the supply line goes first, then progressively outward. The reason is heat: regulators closer to the main valve see more thermal cycling from supply-side pressure variations and from kitchen ambient. By month 24 to 36 on a heavily-used unit, the first regulator is showing measurable output drift. By month 36 to 48, three or four regulators have drifted.",
        "The symptom is always the same: that section runs cooler than the others at the same valve setting. The line cook compensates, the chef notices, and the diagnostic finger points to the wrong cause (gas supply, burner cleanliness, ignition system) when the actual cause is the regulator.",
      ],
    },
    {
      heading: "3. The diagnostic — manometer at the burner",
      body: [
        "Power off (no electrical on a pure-gas RB but lock-and-tag any associated ignition system). Gas on. Install a U-tube manometer or a digital combustion analyzer on the test port of each section's regulator. Open the section valve to wide open. Read the burner inlet pressure. Spec is 4 inches WC for natural gas, 10 inches for propane.",
        "Sections reading 3.0 to 3.5 inches WC on natural gas are the failing regulators. The valve is wide open and the regulator can't deliver spec pressure. The burner runs cool and the section underperforms. Sections reading 4.0 to 4.2 are healthy. Sections reading above 4.5 are either over-firing (regulator failed open, dangerous) or have a stuck regulator that needs immediate service.",
      ],
    },
    {
      heading: "4. The replacement — and the section to replace all at once",
      body: [
        "Garland RB regulator part: typically Maxitrol RV47 or equivalent depending on the unit vintage, $58 to $82 OEM, 30-minute replacement per section. When one regulator has drifted, the others on the same unit are typically within 6 months of similar drift. The labor cost difference between replacing one regulator and replacing all six on a 36-inch unit is 90 minutes. The parts cost difference is $200 to $400. The downtime cost of doing them all at once is one unit-day. The downtime cost of doing one regulator now and another in 4 months and another in 7 months is three unit-days plus three service calls.",
        "We recommend replacing the entire set when more than one section is out of spec. For units past 48 months, replace the whole set proactively at the next preventive visit. Document the install date so the next service knows the lifecycle.",
      ],
    },
    {
      heading: "5. Verifying the install — and the other things to check",
      body: [
        "After replacement, re-run the manometer test on each section. All sections should read within 0.2 inches WC of spec. Light each burner and observe the flame: sharp blue cones across the burner, no yellow tips, no flame lift. Run each section through a heat-soak (20 minutes at high) and re-check pressure under load — supply-side pressure drops can show up only under heavy load.",
        "While the panel is open, inspect the pilot assemblies (RB pilots are tiny and prone to scaling), the burner orifices (clear them with a fine drill bit if dirty), and the gas piping for visible corrosion. South Florida humidity drives black-iron pipe corrosion at the fittings and a leaking fitting under a charbroiler is an NFPA 54 violation and a fire-marshal-level finding.",
      ],
    },
    {
      heading: "6. Why operators delay this fix",
      body: [
        "The unit is still cooking — just not as hot. The line cook adapts. The cost of the cool section shows up as longer cook times (lower covers per hour on that part of the line), lower steak yield (overcook compensation), and inconsistent product (one section searing properly, another not). None of these show up on a P&L line. They show up as marginally lower volume and slightly worse reviews.",
        "Per-section regulator replacement is $58 in parts and 30 minutes labor — call it $140 to $180 in real cost per section, $850 to $1,200 for a full RB-36 replacement of all six sections. Compare to the implicit cost of running cool sections for 6 to 12 months. Math is favorable for the fix.",
      ],
    },
    {
      heading: "7. Compliance — NFPA 54 and the fire marshal",
      body: [
        "Any work on a commercial gas appliance falls under NFPA 54. Berne Commercial techs leak-test every fitting touched during regulator replacement with a Bacharach combustible-gas detector. The leak-test certification goes on the service ticket and is the answer to any subsequent fire-marshal inspection.",
        "If the local jurisdiction requires a permit for regulator replacement (most Miami-Dade jurisdictions don't for like-for-like replacement on existing fittings), we pull the permit and coordinate the inspection. For new gas piping work, the permit and inspection are mandatory regardless.",
      ],
    },
    {
      heading: "8. Why the RB specifically — versus radiant broilers and salamanders",
      body: [
        "Garland RB charbroilers are the radiant-burner charbroilers — what most chefs picture when they say 'charbroiler.' The RB shares the sectional-manifold architecture with the older S-series Garland and the newer Master Series. The regulator-failure-in-sequence pattern is consistent across all three. Garland salamander broilers (XPE series) use a different gas system and don't show this pattern.",
        "If your unit is a competing brand — MagicChef MCB, Imperial, Wolf, Star, Vulcan VTEC — the architecture varies and the diagnostic differs. Vulcan VTEC charbroilers are spec-similar to Garland RB and the regulator pattern often appears. Imperial and Wolf use a different manifold design with fewer regulators.",
      ],
    },
    {
      heading: "Same-day Garland service",
      body: [
        "Berne Commercial Repair services Garland charbroilers, ranges, salamanders, and convection ovens across Miami-Dade, Broward, and Palm Beach. Regulator service, burner work, gas leak testing, and full diagnostic. $89 commercial service call applied to the approved repair. Call (754) 345-4515 or request through our commercial range repair page.",
        "For high-end residential outdoor grills and indoor ranges (Wolf, Viking, BlueStar), [Berne's premium residential team at berne-repair.com](https://berne-repair.com) covers the home-side equivalent.",
      ],
    },
  ],
  internalLinks: [
    { label: "Commercial range repair", href: "/services/commercial-range-repair" },
    { label: "Garland repair", href: "/brands/garland" },
    { label: "Restaurants", href: "/industries/restaurants" },
    { label: "Credentials", href: "/credentials" },
    { label: "Request dispatch", href: "/request-dispatch" },
  ],
  relatedSlugs: [
    "vulcan-v-series-pilot-spark-module-retrofit",
    "vulcan-range-pilot-wont-stay-lit",
  ],
}

import type { Article } from "../articles"

export const garlandSectionalGasPressure: Article = {
  slug: "garland-sectional-range-gas-pressure-adjustment",
  title:
    "Garland Sectional Range — Gas Pressure Adjustment After Install",
  description:
    "A new Garland G24, G36, or G60 sectional range that's running yellow flames or underperforming on day one usually has a manifold pressure adjustment issue. Here's the install-day check the gas plumber didn't do.",
  publishedAt: "2026-11-19T09:00:00Z",
  readingMinutes: 9,
  category: "Restaurant Equipment",
  tags: [
    "Garland",
    "sectional range",
    "gas pressure",
    "install",
    "manifold",
  ],
  lede: "A Brickell new restaurant install: a Garland G36-6-LRD 6-burner range plus oven, delivered Friday, plumbed Saturday, fired up Monday morning. By Monday afternoon the chef noticed yellow flame tips on burners 4 and 5, slow heat-up on the oven, and an off-smell that the new-equipment narrative didn't explain. Manifold gas pressure was reading 5.2 inches WC at the gas inlet — the spec is 4.0 inches WC at the manifold for natural gas. The gas plumber set the line pressure for the building and skipped the equipment-specific manifold check. Garland sectional ranges install reliably when the manifold pressure is set correctly. They run poorly forever when it isn't. Install-day check matters.",
  sections: [
    {
      heading: "1. The Garland sectional range manifold",
      body: [
        "Garland G24, G36, G48, and G60 sectional ranges use a common gas manifold feeding all burners and the oven(s). The manifold has an integral pressure regulator that drops incoming supply pressure to spec at the burner inlets. Spec is 4 inches water column for natural gas, 10 inches WC for propane.",
        "Building gas supply typically runs 7 to 14 inches WC for natural gas, sometimes higher in commercial occupancies. The manifold regulator drops this to spec — but only if it's set correctly and the regulator is functioning. A regulator set wrong from the factory, damaged in shipping, or simply not adjusted post-install delivers wrong pressure to every burner on the range.",
      ],
    },
    {
      heading: "2. The symptoms of wrong manifold pressure",
      body: [
        "Over-pressure (manifold above 4.5 inches WC for natural gas): yellow flame tips, lifting flame, possible soot, accelerated burner port erosion, gas waste, sometimes a noticeable gas smell. Over-pressure on propane (above 11 inches WC) is more dangerous because of propane's specific combustion characteristics.",
        "Under-pressure (manifold below 3.5 inches WC for natural gas): weak flame, slow heat-up, burners don't reach designed BTU output, oven temperature struggles to reach setpoint, cook times stretch. Sometimes burners go out on a high-flame setting (flame is below the minimum stable burner mass).",
      ],
    },
    {
      heading: "3. The install-day measurement",
      body: [
        "Garland sectional ranges have a pressure test port at the manifold for verification. The port is typically a 1/8-inch NPT plug accessible from the front or side panel — service manual identifies the exact location. Install a U-tube manometer or a digital combustion analyzer (Bacharach Combustion Insight or similar) at the port. Run the range at full output (all burners on high, oven on high). Read the manifold pressure under load.",
        "Spec: 4 inches WC for natural gas, 10 inches for propane. Tolerance is plus-or-minus 0.2 inches. Reading outside that range means the regulator needs adjustment.",
      ],
    },
    {
      heading: "4. The adjustment procedure",
      body: [
        "Gas off (or appropriate isolation), lock-and-tag. Remove the regulator adjustment cap (usually a screw-cap on the top of the regulator). Re-energize gas with all burners closed. Carefully open one burner and adjust the regulator screw — clockwise increases pressure on most regulators, counterclockwise decreases. Watch the manometer and adjust until spec is reached. Open all burners and the oven and verify pressure holds spec under maximum load.",
        "Close the adjustment cap. Run a leak test on the regulator cap and any other joints touched during the work. Final flame inspection: sharp blue flames across all burners, oven heating consistently, no off-smell.",
      ],
    },
    {
      heading: "5. The orifice question — natural gas vs propane",
      body: [
        "Garland ranges ship from the factory configured for either natural gas or propane. The burner orifices and the regulator setting both must match. If a range is delivered configured for propane and installed on natural gas (or vice versa), no amount of regulator adjustment fixes the problem — the orifices are wrong for the gas type.",
        "Verify on day one: check the data plate for the gas-type configuration. Confirm with the project specifications. If there's a mismatch, the orifices must be changed (Garland sells natural-gas-to-propane and propane-to-natural-gas conversion kits, $80 to $140 per kit, 1 to 2 hours of labor depending on the range size). Don't let a wrong-orifice install go into service.",
      ],
    },
    {
      heading: "6. The hood capture and combustion air",
      body: [
        "A Garland sectional range at full output consumes a substantial volume of combustion air. The hood and exhaust system must be sized for the range BTU load. NFPA 96 sets hood capture velocity requirements that translate to specific exhaust CFM per linear foot of cooking surface.",
        "On install day, run the range at full output with the hood at full exhaust and verify capture (a smoke pen or visual smoke test at the hood face). Smoke pulling cleanly into the hood = adequate capture. Smoke escaping into the kitchen = inadequate capture, either hood sized wrong or makeup air balanced wrong. Either is an NFPA 96 issue that surfaces at install and needs correction.",
      ],
    },
    {
      heading: "7. Commissioning documentation",
      body: [
        "The Garland install should produce a commissioning report: manifold pressure at spec, burner flame condition (visual photos), oven temperature calibration (cavity temperature versus setpoint, verified with a reference thermometer), gas leak test (Bacharach combustible-gas detector at every joint touched, no detected leak), hood capture verification, electrical verification (if the range has any electrical components — most do for igniters and oven controls).",
        "This commissioning report is the answer to any subsequent service question and to fire-marshal or insurance inspection. New equipment without a proper commissioning record is hard to maintain and creates ambiguity if anything fails in the first year.",
      ],
    },
    {
      heading: "8. The 30-day post-install check",
      body: [
        "Schedule a follow-up check 30 days after install. Re-verify manifold pressure under load, re-check burner flame, re-verify oven thermostat calibration (calibration drift in the first 30 days isn't uncommon as the unit settles in), inspect any visible burner-port erosion or soot accumulation.",
        "Most install-related issues surface in the first 30 days. Catching them then keeps the unit on its design service life. Letting them ride for 6 months ages components prematurely.",
      ],
    },
    {
      heading: "9. NFPA 54 and the gas inspector",
      body: [
        "Commercial gas-equipment install falls under NFPA 54 national fuel gas code. Most Miami-Dade jurisdictions require a gas-piping permit and inspection for new commercial installations. The inspection covers the piping from the meter to the equipment shutoff, the connectors, and the leak tests. The equipment-side commissioning (manifold pressure, flame condition) is typically the equipment installer's responsibility, not the gas inspector's, but documenting it satisfies any subsequent question.",
      ],
    },
    {
      heading: "Same-day Garland service",
      body: [
        "Berne Commercial Repair installs and services Garland sectional ranges, charbroilers, salamanders, and convection ovens across Miami-Dade, Broward, and Palm Beach. Commissioning, manifold adjustment, orifice conversion, full diagnostic service. $89 commercial service call applied to the approved repair. Call (754) 345-4515 or request through our commercial range repair page.",
        "For residential pro-style gas ranges in private kitchens (Wolf, Viking Professional, BlueStar), [Berne's premium residential team](https://berne-repair.com) handles the home-side calibration.",
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
    "garland-rb-charbroiler-burner-regulator",
    "vulcan-v-series-pilot-spark-module-retrofit",
  ],
}

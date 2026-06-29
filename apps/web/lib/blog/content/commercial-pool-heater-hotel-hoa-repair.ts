import type { Article } from "../articles"

export const commercialPoolHeaterHotelHoa: Article = {
  slug: "commercial-pool-heater-hotel-hoa-repair",
  title: "Commercial Pool Heater Repair for Hotels & HOAs",
  description:
    "Your hotel pool is cold and the front desk is fielding complaints. A field tech's diagnostic on Pentair, Raypak, and Hayward gas heaters and AquaCal heat pumps — heat exchangers, ignition, flow switches, and the salt-air corrosion that kills them early.",
  publishedAt: "2026-06-22T09:00:00Z",
  readingMinutes: 10,
  category: "Wellness & Spa",
  tags: [
    "pool heater",
    "heat pump",
    "Pentair",
    "Raypak",
    "Hayward",
    "AquaCal",
  ],
  lede: "A property manager for a beachfront condo in Hollywood calls on the first cool morning of the season: the pool is at 74°F, the HOA board wants 84°F, and the Pentair MasterTemp out by the equipment pad lights for thirty seconds and then locks out. Down the street, a boutique hotel's AquaCal heat pump runs all day and adds nothing. Two different machines, two different failure modes, one common thread — salt air, hard water, and 24/7 duty wear South Florida pool heaters out years before the catalog says they should.",
  sections: [
    {
      heading: "1. Gas heater or heat pump — they fail differently",
      body: [
        "Before you can fix a commercial pool heater you have to know which kind you have, because the diagnostic trees barely overlap. A gas heater (Pentair MasterTemp, Raypak, Hayward Universal H-Series, Jandy, Lochinvar) burns natural gas or propane to heat water fast through a finned-tube heat exchanger — it's a combustion appliance with an ignition system, a gas valve and a flue. A heat pump (AquaCal, Raypak heat pump, Hayward) is a refrigeration machine running in reverse, pulling heat from the air with a compressor and a titanium exchanger — slower, far cheaper to run, and useless below about 50°F ambient.",
        "The tell at the equipment pad: a gas heater has a gas line and a vent, fires audibly, and heats 20–30°F over a day; a heat pump has a big fan on top, a refrigerant circuit, and works gently over many hours. Hotels and HOAs often run one of each — a gas heater on the pool for fast recovery and a heat pump on the spa, or vice versa — so a single property can need both diagnostic skill sets in one visit. That's the gap most pool-cleaning routes can't cover.",
      ],
    },
    {
      heading: "2. The heat exchanger: the most expensive part to lose",
      body: [
        "On a gas heater, the heat exchanger is a copper or cupronickel finned-tube bundle that the burner fires under and the pool water flows through. It's also the part South Florida destroys. Hard water lays calcium scale on the inside of the tubes, insulating them so the burner's heat can't reach the water — the heater fires fine but the pool barely warms and the gas bill climbs. Meanwhile salt air and aggressive water chemistry corrode the tubes from both sides. A scaled exchanger on a Raypak or MasterTemp is often recoverable with a proper acid descale and a chemistry correction; a corroded, leaking one is a $400–$2,400 replacement and a repair-vs-replace conversation.",
        "Cupronickel exchangers cost more than standard copper but survive coastal and salt-pool water far better — when we replace an exchanger at a beachfront property, upgrading to cupronickel (or titanium on a heat pump) is usually the right call to avoid doing it again in two years. The root cause is almost always chemistry plus low flow: water that's even slightly aggressive, run through tubes that aren't getting enough flow to carry the heat away, scales and corrodes fast. Fix the exchanger without fixing the water and you'll be back.",
      ],
    },
    {
      heading: "3. Ignition faults: the 'fires then quits' lockout",
      body: [
        "The most common gas-heater service call is a heater that lights for a few seconds and then shuts down on a lockout. That sequence is a safety circuit doing its job, and the usual suspect is the flame-sensing path: a hot-surface igniter or spark igniter that lights the burner, and a flame sensor that has to confirm flame within a few seconds or the gas valve closes. A flame sensor coated in oxide, or an igniter that's cracked and weak, breaks that confirmation and the heater locks out every time. Cleaning or replacing the sensor and igniter is a $220–$540 same-day fix.",
        "Behind ignition sit the gas valve and the control board. A MasterTemp or H-Series that won't fire at all, with a good igniter, may have a failed gas valve, a tripped high-limit, or a board fault — we check gas pressure at the valve (both static and under fire), the high-limit and stack sensors, and the board's diagnostic codes before condemning anything. Manufacturers each have their own fault-code language; reading it correctly is the difference between a $40 sensor and a $400 board swap that didn't need to happen.",
      ],
    },
    {
      heading: "4. The pressure switch and the flow problem in disguise",
      body: [
        "Every pool heater has a water-pressure (flow) switch that won't let the burner or compressor run until there's enough water moving through the exchanger — fire a gas heater with no flow and you'll boil and split the exchanger in minutes. So when a heater shows a pressure-switch or low-flow error, the heater is often innocent; the real problem is upstream. A dirty filter, a clogged pump basket, a closed valve, a failing pump, or air in the lines drops flow below the switch's threshold and the heater refuses to fire.",
        "We diagnose flow before we ever replace a pressure switch, because swapping the switch on a system that genuinely has low flow just removes the safety that's protecting a $1,500 exchanger. Check filter pressure, pump operation, valve positions, and for air leaks on the suction side. Only once flow is confirmed good do we test the switch itself — and a genuinely failed pressure switch is a cheap $160–$300 part. On commercial systems we also verify the heater isn't being starved by a pump that was downsized during a 'energy-saving' variable-speed retrofit that nobody re-checked against the heater's minimum flow.",
      ],
    },
    {
      heading: "5. Heat pumps: charge, reversing valve, and defrost",
      body: [
        "A pool heat pump that runs but won't add heat is usually low on refrigerant, has a failed reversing valve, or a TXV that's stuck. Low charge — always from a leak, never from 'using it up' — shows as low suction pressure and a small temperature split across the titanium exchanger; the fan spins, the compressor runs, but the water gains a degree an hour instead of the five it should. We confirm with superheat and subcooling, find and repair the leak, then evacuate to a deep vacuum and recharge to weight. Berne handles the refrigerant to EPA Section 608 — the same sealed-system work we do on commercial cold plunges, just running the other direction.",
        "Two heat-pump-specific faults catch operators out. The reversing valve is what lets some units cool as well as heat; when it sticks or its solenoid fails, the unit can run backwards or get stuck mid-shift and produce nothing. And on cool South Florida mornings a heat pump can ice its evaporator and rely on a defrost cycle to clear it — a failed defrost control leaves it iced and dead until the sun thaws it. AquaCal, Raypak and Hayward heat-pump work runs $260–$1,800 depending on whether it's a control part or a sealed-system repair.",
      ],
    },
    {
      heading: "6. Code, combustion safety, and ASME on the big units",
      body: [
        "Commercial pool heating isn't just bigger residential work — it carries code weight. Large commercial heaters and the storage water heaters on big aquatic systems often require an ASME-stamped heat exchanger and pressure relief, and the install has to meet venting and combustion-air requirements that protect against carbon-monoxide build-up in an equipment room. A gas heater that's sooting, showing flame rollout, or that someone has crammed into a closet without combustion air isn't just inefficient — it's a CO hazard, and we'll red-tag it rather than band-aid it.",
        "For HOAs and hotels this matters at inspection time. A pool heater that's been 'repaired' by a handyman with the wrong gas pressure, a defeated high-limit, or a blocked vent is a liability the property owns. When we service a commercial heater we verify gas pressure under fire, confirm the safeties are intact and functioning, check the vent and combustion air, and document it. That documentation is what a property manager wants in the file when the county pool inspector or the insurer asks.",
      ],
    },
    {
      heading: "7. Why South Florida eats pool heaters, and PM that helps",
      body: [
        "Manufacturers rate heater life on inland assumptions: moderate water, seasonal use, clean combustion air. South Florida breaks all three. Coastal salt aerosol corrodes cabinets, burners, fasteners and exchangers; hard water and salt-chlorine pools scale and pit the tubes; and a resort or HOA pool runs heated most of the year, not four months. The result is exchangers, igniters and fan motors that wear out in three to five years instead of eight to ten — and they wear out fastest right before peak season, when everyone needs them at once.",
        "The defense is preventive maintenance, not heroics in November. A PM contract that descales the exchanger, checks and cleans the burner and combustion, verifies gas pressure and flow, tests the safeties, and (on heat pumps) checks the charge and clears the coil will catch a scaling exchanger or a tired igniter while it's a cheap planned fix instead of a guest-facing emergency. For a property with a pool, spa, sauna and cold plunge sharing one equipment yard, bundling all of it under one vendor and one service calendar is what keeps the amenities open and the complaints down.",
      ],
    },
    {
      heading: "8. Calling for service and what to know first",
      body: [
        "When you call Berne Commercial at (754) 345-4515 about a pool or spa heater, our dispatcher will ask whether it's a gas heater or a heat pump, the brand and model (Pentair, Raypak, Hayward, Jandy, Lochinvar, AquaCal), what it's doing — won't ignite, fires then quits, runs but no heat, low-flow error — and the current water temperature versus the target. Those answers decide whether we roll with combustion and gas-train tools or with refrigeration gauges and a recovery machine, and whether it's likely a same-day fix or an exchanger/sealed-system job needing parts.",
        "The $89 commercial service call covers the diagnostic. Most heater fixes — igniters, sensors, pressure switches, descaling, heat-pump charge — close in one visit; exchanger replacement or a major sealed-system repair takes a second visit with parts. We cover the rest of the hydrothermal amenity too, so the sauna, steam room and cold plunge at the same property get one vendor. For residential pool and spa heaters at a single-family home, our sister site bernerepair.com handles the residential side.",
      ],
    },
  ],
  internalLinks: [
    {
      label: "Commercial pool heater repair",
      href: "/services/commercial-pool-heater-repair",
    },
    {
      label: "Commercial sauna repair",
      href: "/services/commercial-sauna-repair",
    },
    {
      label: "Commercial cold plunge repair",
      href: "/services/commercial-cold-plunge-repair",
    },
    { label: "Request dispatch", href: "/request-dispatch" },
  ],
  relatedSlugs: [
    "hotel-banquet-refrigeration-service",
    "pre-tourist-season-equipment-audit-miami",
  ],
}

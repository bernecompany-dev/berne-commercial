import type { Article } from "../articles"

export const walkInCoolerTemperature: Article = {
  slug: "commercial-walk-in-cooler-temperature-issues",
  title: "Walk-In Cooler Running Warm? Causes, Costs, and When to Call",
  description:
    "Why a True, Beverage-Air, or Traulsen walk-in starts climbing into the 40s — defrost faults, evaporator fan motors, refrigerant leaks, door gaskets, and what each repair actually costs.",
  publishedAt: "2026-05-29",
  readingMinutes: 10,
  category: "Refrigeration",
  tags: [
    "walk-in cooler",
    "True",
    "Beverage-Air",
    "Traulsen",
    "refrigeration",
  ],
  lede: "A hotel banquet chef opens the walk-in at 5:03 PM, ninety minutes before a 200-cover plated dinner, and the digital thermometer on the wall reads 46°F. The product temperature probe in the spinach is 43°F. The Florida DBPR rule is product at or below 41°F, and the kitchen manager has 90 minutes to make a call: hold the menu, swap inventory to a reach-in, or get a refrigeration tech on the dock. A walk-in cooler running warm rarely fails for one reason — it fails for a sequence of small things stacked over months. Here is the field-tested sequence.",
  sections: [
    {
      heading: "1. First, separate a real warm box from a false reading",
      body: [
        "Before assuming the system is broken, verify the reading. The Honeywell or Dixell controller on a True or Beverage-Air walk-in displays box temperature from a single thermistor mounted near the evaporator return air. If that thermistor has drifted (common after 5–7 years in a salt-air kitchen) or has fallen out of its clip, the display reads warm even when product is at 38°F.",
        "A technician will hang a calibrated NIST-traceable thermocouple in the box, away from the evaporator coil, and read product-pulp temperature on three items: a jug of milk near the door, a tray in the center, and a case at the back. If those read under 41°F and the controller reads 46°F, the fix is a $40 thermistor and a recalibration, not a refrigerant call.",
      ],
    },
    {
      heading: "2. Door gaskets, sweeps, and infiltration load",
      body: [
        "South Florida walk-ins lose more capacity to door infiltration than anything else. A torn gasket on a 10-year-old Norlake panel or a missing kick-plate sweep on a Kolpak entrance can add 15–20 percent to the heat load. On a 90°F kitchen day with 60 percent humidity, that delta is enough to push a marginal compressor over the edge.",
        "A flashlight test from inside the box, lights off, will show the daylight leaks. Gaskets are an $80–$200 part on a standard 36-inch swing door. Door closers and self-closing hinges on a Bohn or Heatcraft panel should snap the door shut in under 4 seconds — if it hangs open, the compressor runs continuously, the evaporator ices, and the box drifts warm during peak service.",
      ],
    },
    {
      heading: "3. Check the evaporator coil for ice and the defrost cycle",
      body: [
        "If the evaporator coil is iced over — visible white frost more than half an inch thick on the fins — the defrost cycle is failing. Standard medium-temp walk-ins use either off-cycle defrost (passive, fan-driven) or electric defrost (heater rods through the coil). The defrost clock or controller initiates 2–6 cycles per day on a typical Heatcraft Beacon II controller.",
        "Common failures: a stuck defrost contactor on a Paragon 8141 time clock, a burned-out 1500-watt electric defrost heater (read element resistance — 8–12 ohms is healthy on a 240V heater), or a defrost termination thermostat that fails open. The diagnostic is straightforward — force a defrost from the controller and watch whether the coil clears in 20–25 minutes.",
      ],
    },
    {
      heading: "4. Evaporator fan motors and airflow",
      body: [
        "A walk-in cooler depends on the evaporator fans to push cold air across the box. Bohn, Heatcraft, and Larkin evaporators run 9-watt ECM or 16-watt shaded-pole fan motors. When one of three fans seizes, total airflow drops by a third, and product nearest the failed fan starts to climb.",
        "The check is visual and acoustic — pull the drain pan cover, look for a stalled blade, and listen for bearing noise. ECM motors fail open and read 0 RPM on the controller; shaded-pole motors usually grumble for weeks before dying. Replacement is a $120–$220 part plus 45 minutes labor.",
      ],
    },
    {
      heading: "5. Condenser coil, condenser fan, and head pressure",
      body: [
        "The condensing unit on the roof or rear pad is the heart of the system. A Copeland Discus on a True walk-in or a Tecumseh AE-series on a Beverage-Air will run hot, loud, and short-cycle on a clogged condenser. South Florida roofs get pollen, lint, and bird debris. A roof-mounted Bohn condensing unit needs a quarterly clean to stay inside spec.",
        "A technician will gauge head pressure on the discharge line — for R-404A in a 90°F ambient, expect 280–340 psi. Above 380 psi means a dirty condenser, a slow condenser fan, or a non-condensable contaminant in the system. The fan capacitor on a Copeland (typically a 7.5 µF run cap) fails first; check with a meter, not a guess.",
      ],
    },
    {
      heading: "6. Refrigerant charge and leak detection",
      body: [
        "If suction superheat is high (above 20°F at the evaporator outlet on R-404A) and head pressure is low, the system is undercharged. Refrigerant does not get consumed — it leaks. The most common leak points on a 10-year-old walk-in: brazed joints at the evaporator manifold, the Schrader cores at service ports, and the king valve on the receiver.",
        "Florida refrigerant regulation requires EPA 608 certification for any work involving refrigerant. The leak gets repaired, the system gets evacuated to 500 microns, and the proper weight of R-404A or R-449A (the EPA AIM Act replacement) gets weighed in by scale, not by gauge. Anyone topping off a leaking system without finding and repairing the leak is wasting your money and violating federal rules.",
      ],
    },
    {
      heading: "7. Compressor short-cycling, contactor, and overload",
      body: [
        "If the compressor starts, runs 90 seconds, kicks out on overload, and restarts five minutes later, the contactor or start components are at fault. The contactor coil on a Square D or Furnas 3-pole runs 240 VAC and pulls 0.05 amps. A pitted contactor drops voltage to the compressor on close, the compressor draws locked-rotor current, and the overload trips.",
        "Diagnosis: read voltage at the load side of the contactor during a call-for-cool. If line-to-line drops below 220 VAC under load, replace the contactor. A 30-amp 3-pole replacement is $60 in parts. Letting that ride means a $1,400 compressor failure inside a year.",
      ],
    },
    {
      heading: "What this actually costs",
      body: [
        "Real numbers from recent Berne Commercial Repair tickets across South Florida: gasket replacement on a 36-inch door, $260 total. Evaporator fan motor swap, $310. Defrost time clock and heater pair, $480. Refrigerant leak repair with R-404A recharge on a 1.5-HP system, $750–$1,100 depending on leak access. Full condensing unit replacement on a 3-HP medium-temp Copeland, $4,200–$5,800 depending on copper line set and platform work.",
        "Planned preventive service — quarterly coil cleans, gasket and door check, controller calibration, refrigerant log review — runs $180–$320 per quarter on a single walk-in and prevents the majority of these emergency calls. Multi-unit accounts get scheduled visits across all locations on one dispatch run.",
      ],
    },
    {
      heading: "Health inspector and HACCP implications",
      body: [
        "A walk-in drifting above 41°F is a Florida DBPR priority violation. FDA Food Code §3-501.16 governs cold-holding at 41°F or below, and a county inspector will write the finding regardless of why the box is warm. HACCP logs that show 4 hours of out-of-spec readings drive product disposal at the inventory cost line — and a corporate-managed restaurant chain will pull the dispatch records to figure out who delayed the call.",
        "Vendor-ready reporting matters here. Every Berne Commercial visit produces a written service record with temperatures logged, parts replaced, and refrigerant weight tracked. That is what an audit asks for.",
      ],
    },
    {
      heading: "Get a refrigeration tech on the dock",
      body: [
        "Berne Commercial Repair runs same-day commercial dispatch across South Florida — $89 service call applied to the approved repair, with a refrigeration-specialist truck in your area most days. Call (305) 520-7833 or request service through our walk-in cooler repair page or commercial refrigeration repair page. For residential refrigeration — Sub-Zero, Viking, or a basement reach-in at a property manager's residence — our sister site bernerepair.com covers that side.",
      ],
    },
  ],
  internalLinks: [
    { label: "Walk-in cooler repair", href: "/services/walk-in-cooler-repair" },
    {
      label: "Walk-in freezer repair",
      href: "/services/walk-in-freezer-repair",
    },
    {
      label: "Commercial refrigeration repair",
      href: "/services/commercial-refrigeration-repair",
    },
    { label: "Request dispatch", href: "/request-dispatch" },
  ],
  relatedSlugs: [
    "ice-machine-not-making-ice-restaurant",
    "commercial-dishwasher-low-pressure",
  ],
}

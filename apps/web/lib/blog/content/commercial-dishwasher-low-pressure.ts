import type { Article } from "../articles"

export const commercialDishwasherLowPressure: Article = {
  slug: "commercial-dishwasher-low-pressure",
  title:
    "Commercial Dishwasher Low Pressure or Poor Wash Results — Diagnosis",
  description:
    "Why a Hobart AM-15, Jackson Conserver, or CMA EST-44L starts pushing dirty racks — pump impellers, clogged wash jets, mineral scale, drain valves, and the descaling routine that saves the wash arms.",
  publishedAt: "2026-05-15",
  readingMinutes: 9,
  category: "Restaurant Equipment",
  tags: ["dishwashers", "Hobart", "Jackson", "CMA", "descaling"],
  lede: "A line cook at a Coral Gables steakhouse runs the post-service rack through a Hobart AM-15 and pulls plates that still have garlic butter streaks. The booster heater reads 180°F on the gauge, the soap pump clicks like it should, and the rack's temperature label says pass. But the plates are dirty. When wash results go bad on a commercial dishwasher, it's rarely the heater and rarely the chemicals. Nine times out of ten our techs find something mechanical, and the diagnostic sequence is short.",
  sections: [
    {
      heading: "1. Confirm wash arm rotation and inspect the jets",
      body: [
        "Run an empty rack on a wash cycle, then open the door mid-cycle and watch. The upper and lower wash arms on a Hobart AM-15, Jackson Conserver XL, or CMA EST-44L should spin freely. 60 to 120 RPM is typical. A stalled or slow arm means either a clogged jet pulling the arm off-balance, a worn arm bearing, or low pump output.",
        "Pull the wash arms and look at each jet. South Florida water deposits lime scale around the jet exits in roughly 6 months on a busy dish line. Soak the arms in deliming solution for 30 minutes, then run a sewing needle through each jet. On a Hobart, the wash arm bearing's a $40 part. Fifteen minutes with a flathead and snap-ring pliers. I've done this swap in the middle of a Saturday dinner rush; it's that quick.",
      ],
    },
    {
      heading: "2. Pump impeller, motor amperage, and the pump intake screen",
      body: [
        "The wash pump on a Hobart AM-15 is a 1-HP single-phase or 3-phase Marathon motor driving an open impeller. Low wash pressure shows up as low pump amperage on a clamp meter (a healthy 1-HP single-phase pulls 8–12 amps under load). High amperage with low pressure usually means a damaged impeller — broken vanes from sucking a fork through the screen.",
        "Pull the intake screen at the bottom of the wash tank. Toothpicks, lemon seeds, and stray pieces of plastic-wrap end up there and starve the pump. Run the unit with the screen out and the pressure should jump immediately. A worn impeller on a Hobart costs $90 and 25 minutes labor.",
      ],
    },
    {
      heading: "3. Scale buildup on the heating elements and inside the tank",
      body: [
        "Inside a 6-month-old commercial dishwasher in Miami, mineral scale coats every heated surface. The booster heater on a Jackson Conserver, the wash tank immersion element on a CMA EST-44L, and the rinse manifold all collect calcium and silica. Scaled elements run hot, fail early, and waste the energy you're paying NextEra for.",
        "The descaling routine: drain the tank, fill with a deliming agent at manufacturer concentration (Ecolab Soilmaster or Auto-Chlor Defender at the listed dosage), run a 20-minute wash cycle, drain, and rinse with clear water for 10 minutes. Hobart specifies deliming on AM-15 series every 30 days under hard-water conditions. South Florida municipal water hits 250+ ppm hardness in some service areas, and that pushes descale frequency closer to every 2 or 3 weeks.",
      ],
    },
    {
      heading: "4. Rinse pressure, rinse manifold, and the booster",
      body: [
        "The final rinse on an NSF/ANSI 3 high-temp commercial dishwasher must hit 180°F at the manifold, sustained for the rinse cycle (typically 8–10 seconds on a door-type, 15–20 on a Jackson Conserver rack conveyor). The pressure-reducing valve in the supply line is set to 20 psi flowing on a Hobart spec sheet — too high and the rinse blows water through the wash, diluting the chemistry; too low and you fail temperature.",
        "Diagnostic: with a calibrated thermolabel on a rack, run a cycle. If the label fails to turn black, check the booster element resistance (a 6 kW 240V element reads about 9.6 ohms cold), check the booster thermostat setpoint, and confirm rinse-water inlet pressure on the gauge during rinse. Most low-rinse-pressure complaints are a clogged check valve or vacuum breaker, not the booster.",
      ],
    },
    {
      heading: "5. Chemical pumps, soap concentration, and air gaps",
      body: [
        "Detergent and rinse-aid pumps on a typical Auto-Chlor or Ecolab dispenser deliver a tuned ml/cycle dose. When tubing cracks at the suction barb or the pump head wears, dose drops and dishes return with residue. The fix is a visual inspection of the chemical lines — Berne techs carry replacement tubing and pump tubes on the truck.",
        "Confirm the air gap funnel on the drain line is intact and the rinse vacuum breaker is plumbed per Florida plumbing code. A backflow path here is both a health-code violation and a contamination route. The Florida DBPR inspector reading your rack temperature will also look for that air gap.",
      ],
    },
    {
      heading: "6. Drain valve, drain pump, and tank water turnover",
      body: [
        "If the wash tank holds soiled water cycle after cycle, the drain solenoid or drain pump is failing. A Hobart AM-15 uses a gravity drain with a mechanical drain valve; a CMA EST-44L conveyor uses a drain pump. When wash water carries food soils from rack to rack, the pre-rinse and pre-scrap routine has broken down. Usually that's a busy-night shortcut by the dish porter. Sometimes it's a failed pre-rinse spray nozzle on the disposer arm.",
        "The fix is policy plus parts. Replace the pre-rinse spray valve (a $45 T&S Brass replacement), brief the dish team, and verify the drain cycles fully between racks. A small Encore disposer mounted ahead of the wash, if your line has one, prevents 80 percent of the food-soil load that ruins wash chemistry.",
      ],
    },
    {
      heading: "7. NSF, health code, and what the inspector will check",
      body: [
        "NSF/ANSI 3 governs commercial spray-type dishwashers and sets the requirement: 180°F sustained rinse for high-temp, or chemical sanitizer at the listed concentration and contact time for low-temp. Florida DBPR inspectors carry a heat-sensitive thermolabel and run a rack themselves on routine visits. A failed thermolabel is an immediate priority finding, and product service may be suspended until corrected.",
        "Logged maintenance — date of last descale, rinse pressure test, booster element test — gives the inspector confidence and gives a corporate compliance team something to file. Every Berne Commercial visit produces a service ticket with measured wash-tank temp, rinse-manifold temp, and parts replaced.",
      ],
    },
    {
      heading: "When to repair, when to replace, and the cost reality",
      body: [
        "A Hobart AM-15 with a worn-out wash pump and a leaking tank seal at 12 years old is at the edge. Pump rebuild plus seal kit runs $450–$600 in parts. A new AM-15VLT lands at $7,800–$9,400 installed depending on plumbing and electrical. Anything over 15 years on a heavy-volume dish line is a replacement conversation.",
        "For a healthy 5–8 year old unit, the high-value moves are quarterly descale, a fresh set of wash arms ($120), and the chemical-pump tube replacement ($30). That is a $200 ticket that keeps the unit out of the replacement queue for another two years.",
        "On a Jackson Conserver conveyor running 800–1200 racks per day, the wash-tank pump seals get the heaviest load. Plan a seal kit at the 7-year mark and a pump rebuild at the 10-year mark. On a CMA EST-44L door-type running 150 racks a service, the door springs and the door switch wear before the pump does — a $90 spring kit at year 5 keeps the door snapping shut and stops a slow steam leak that warps the panel insulation. Building a multi-unit service plan around these milestones is the difference between a $200 quarterly bill and a $7,000 mid-shift failure.",
      ],
    },
    {
      heading: "Need a dish tech today?",
      body: [
        "Berne Commercial Repair runs same-day dispatch for Hobart, Jackson, CMA, and Champion commercial dishwashers across Miami-Dade, Broward, and Palm Beach. $89 commercial service call, applied to the approved repair. Call (305) 520-7833 or request service through our commercial appliance repair page. For residential dishwasher service — Bosch, Miele, KitchenAid — our sister site bernerepair.com covers those calls.",
      ],
    },
  ],
  internalLinks: [
    {
      label: "Commercial appliance repair",
      href: "/services/commercial-appliance-repair",
    },
    {
      label: "Commercial hood repair",
      href: "/services/commercial-hood-repair",
    },
    { label: "Request dispatch", href: "/request-dispatch" },
    { label: "Services overview", href: "/services" },
  ],
  relatedSlugs: [
    "ice-machine-not-making-ice-restaurant",
    "commercial-walk-in-cooler-temperature-issues",
  ],
}

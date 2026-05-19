import type { Article } from "../articles"

export const hobartDishwasherWashArms: Article = {
  slug: "hobart-dishwasher-wash-arms-not-spinning",
  title:
    "Hobart Dishwasher Wash Arms Not Spinning — 4-Minute Diagnostic",
  description:
    "A Hobart AM-15, CRS-66A, or LXi conveyor dishwasher pushes plates through but the wash arms aren't rotating. A four-step field test on the wash pump, jet inserts, and bearing — what a tech checks before parts go on order.",
  publishedAt: "2026-05-27",
  readingMinutes: 8,
  category: "Restaurant Equipment",
  tags: [
    "dishwashers",
    "Hobart",
    "AM-15",
    "CRS",
    "warewashing",
  ],
  lede: "A dish-pit lead at a North Miami banquet hall watches a rack of plates exit the Hobart AM-15 with food crust still glued to the rims. The temperatures read right, the detergent is dosing, but the wash arms above the rack are barely moving. Stationary or slow wash arms on a Hobart are a five-minute diagnostic that anyone in the kitchen can run before the tech arrives — and most of the time, the fix is on site.",
  sections: [
    {
      heading: "1. Pull the arms and inspect the jet inserts",
      body: [
        "Open the Hobart AM-15 hood and lift the upper and lower wash arms off their bearings. Each arm has stamped jets along the length. Flip the arm and look at the jets from underneath — those small slots get loaded up with food debris, bone fragments, and labels off bottles. A partially clogged arm doesn't rotate well because the unbalanced flow can't push it around.",
        "Take the arms to the prep sink, run hot water through them under the faucet, and physically pick out any debris. Bottle caps and silverware fragments are common — and on a CRS-66A conveyor, plastic ring-cuffs and napkin scraps. Reassemble and run an empty rack. If the arms spin, that was the problem. Keep this on the closing checklist and the wash arms will rarely fail again.",
      ],
    },
    {
      heading: "2. The wash pump and the impeller",
      body: [
        "If the arms are clean and still don't spin, the pump isn't delivering pressure. The Hobart AM-15 uses a 1 HP 208/240V single-phase wash pump with a stainless impeller. The pump should pull around 6 to 7 amps under load. Failure modes: a worn impeller (volute erosion drops output), a melted impeller (someone ran the pump dry), or a failed motor (a contactor weld or a winding short).",
        "Test: with the unit running on wash, clamp the pump leads. Under-spec amperage with the arms not spinning means the impeller is worn or stripped — pull the pump cover and look. Over-spec amperage with a humming motor means a seized bearing or a jammed impeller. A new Hobart impeller is a $90 part, a full pump assembly is around $480 with a 60-minute labor swap on the AM-15.",
      ],
    },
    {
      heading: "3. The wash arm bearings and the spinner sleeve",
      body: [
        "Wash arms ride on a stationary bearing — a brass or stainless sleeve that the arm rotates around. After thousands of cycles, the bearing wears oval, the arm wobbles, and the spray angle goes off enough to lose rotational thrust. On a Hobart LXi the bearing is a $40 part; on a CRS-66A conveyor wash, the bearings sit at each spray section and there are more of them to inspect.",
        "Spin the arm by hand with the machine off. It should rotate freely with no wobble. Wobble or grinding means bearing replacement. A 15-minute swap per arm. Check the upper and lower bearings on each visit because a bad upper bearing also takes out the lower arm by dropping debris through the manifold.",
      ],
    },
    {
      heading: "4. Pump screen, scrap basket, and the strainer at the float",
      body: [
        "Every Hobart commercial dishwasher has a scrap basket and a pump intake screen. Both load up by mid-shift and reduce flow to the pump. On the AM-15 the scrap basket sits at the front of the tank. The pump intake screen is at the rear, below the wash arms. Pull both, hose them clean, and look at the float switch in the tank for buildup.",
        "If the tank doesn't fill to the float line, the wash pump cavitates and the arms hang. Float switches scale up in South Florida hard water — confirm the float moves freely and trips at the correct depth. The fill solenoid (the one feeding the rinse manifold from the booster) is a separate part and a separate test.",
      ],
    },
    {
      heading: "5. Booster heater, final rinse, and why sanitizing matters",
      body: [
        "Wash arms are the cleaning side. The sanitizing side is the final rinse temperature, controlled by the booster heater. NSF/ANSI 3 and Florida DBPR food code require a final rinse at 180°F at the manifold or 165°F at the dish surface for hot-water sanitizing machines. A chemical-sanitizing version uses 160°F final rinse plus chlorine or quaternary at concentration.",
        "If the booster is undersized or scaled, the rinse temp drops and even a perfectly working wash cycle won't pass inspection. Hobart sells a CRS-66A with a built-in 70°F-rise booster — but the booster element scales in 18 months on city water without a softener. A descale on the booster takes 2 hours and pays back in rinse-temp stability and energy savings.",
      ],
    },
    {
      heading: "6. Detergent dispensing — Ecolab, Auto-Chlor, US Foods",
      body: [
        "The chemical side ties into the wash arms via the rinse-aid line. If the wash arms spin but plates come out spotty or filmy, the chemistry is wrong — under-dosed detergent, depleted rinse-aid, or wrong water hardness compensation. Most South Florida kitchens contract chemistry through Ecolab, Auto-Chlor, or US Foods.",
        "A working tech checks the chemistry concentration with test strips at the wash sump and the rinse manifold. If detergent reads under 800 ppm or rinse-aid reads under 50 ppm, the dispenser tubing is kinked, the pickup tube is out of the drum, or the chemical contract is overdue for a service call. Tag the dispenser case and call the chemical rep — that's not a parts-and-labor repair, it's a contract issue.",
      ],
    },
    {
      heading: "7. Conveyor speed, drive chain, and rack jam",
      body: [
        "On a CRS-66A conveyor, wash arms spinning slowly can look the same as racks moving through too fast. The conveyor is driven by a chain off a 1/4 HP gearmotor. If the chain stretches, the rack slows or stops, the dish-out side piles up, and the wash time per rack drops below the 70 to 90 seconds needed. Tighten the chain or replace it. A Hobart conveyor chain is $140 in parts and an hour of labor.",
        "Microswitches at the entry and exit detect rack presence and stop the conveyor at end of run. A stuck switch leaves the conveyor moving with no rack and dries out the arms. Test the switches with a multimeter — they should toggle when a rack passes. Stuck microswitches are common after grease accumulation.",
      ],
    },
    {
      heading: "Cost reality and call timing",
      body: [
        "Recent ticket prices from Berne Commercial dish-machine calls: wash arm bearing replacement on a Hobart AM-15, $135. Pump impeller swap, $245. Full wash pump replacement on a CRS-66A, $620. Booster heating-element descale and recalibrate, $290. Conveyor drive chain replacement, $310. New Auto-Chlor dispenser tubing kit, $85.",
        "A standing quarterly service on a Hobart — wash arm clean, pump screen flush, booster descale, gasket inspection — runs $190 and is the cheapest insurance against a Friday-night dish-pit shutdown.",
      ],
    },
    {
      heading: "Dish-machine tech, same day",
      body: [
        "Berne Commercial Repair runs same-day dispatch for Hobart, Champion, Jackson, and CMA commercial dishwashers across Miami-Dade, Broward, and Palm Beach. $89 commercial service call applied to the approved repair. Call (305) 520-7833 or request a tech through our commercial appliance repair page. For home dishwashers — Bosch, Miele, KitchenAid built-ins — bernerepair.com handles the residential side.",
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
    {
      label: "Commercial refrigeration repair",
      href: "/services/commercial-refrigeration-repair",
    },
    { label: "Request dispatch", href: "/request-dispatch" },
  ],
  relatedSlugs: [
    "commercial-dishwasher-low-pressure",
    "commercial-fryer-thermostat-issues",
  ],
}

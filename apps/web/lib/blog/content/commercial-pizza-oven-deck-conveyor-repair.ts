import type { Article } from "../articles"

export const commercialPizzaOvenDeckConveyor: Article = {
  slug: "commercial-pizza-oven-deck-conveyor-repair",
  title: "Commercial Pizza Oven Repair: Deck & Conveyor Field Guide",
  description:
    "A field tech's diagnostic on deck and conveyor pizza ovens — Middleby Marshall, Lincoln Impinger, Bakers Pride, Blodgett and Marsal. Deck recovery, gas burners and ignition, conveyor belts and bearings, air fingers, thermocouples and controllers.",
  publishedAt: "2026-06-27T09:00:00Z",
  readingMinutes: 10,
  category: "Cooking Equipment",
  tags: [
    "pizza oven",
    "deck oven",
    "conveyor oven",
    "Middleby Marshall",
    "Lincoln Impinger",
    "Bakers Pride",
    "Blodgett",
    "gas burner",
  ],
  lede: "A Miami pizzeria owner calls Tuesday morning: the Lincoln Impinger conveyor is baking pies dark on one side and raw on the other, and the Bakers Pride deck in the back takes 40 minutes to come up to temperature instead of 15. Two ovens, two completely different failures — and neither one is 'the oven is shot.' Deck and conveyor pizza ovens fail in predictable ways, and the diagnostic is always the same order: heat source, heat delivery, then controls.",
  sections: [
    {
      heading: "1. Deck vs conveyor — two machines, two diagnostics",
      body: [
        "A deck oven (Bakers Pride, Blodgett, Marsal, Wood Stone, Moretti Forni) bakes on a heated stone or refractory hearth. The pizza sits directly on the deck and bakes by conduction from below plus radiant heat from the chamber, usually 500 to 700°F. Recovery — how fast the deck reclaws back temperature after a cold pie is loaded — is the number that defines a healthy deck oven, and it's the first thing that suffers when a burner or element weakens.",
        "A conveyor oven (Middleby Marshall PS-series, Lincoln Impinger, XLT) bakes by impingement: a blower forces hot air through 'fingers' of slotted plenums above and below a wire belt that carries the pie through a tunnel. Bake quality depends on belt speed, air temperature and the air-finger pattern all being correct together. A deck problem and a conveyor problem look nothing alike under the hood, so step one is always knowing which machine you're working.",
      ],
    },
    {
      heading: "2. Gas burners, orifices and manifold pressure",
      body: [
        "Most commercial pizza ovens in South Florida are gas. The burner mixes gas and air and the manifold pressure has to be right — natural gas typically around 3.5 inches of water column, LP higher, set per the oven's data plate. A burner running low on pressure makes a lazy flame, long bakes and pale crust; the operator reads it as 'the oven is weak' when the real fault is a partially clogged orifice, a regulator drifting, or a gas-supply problem feeding several appliances off one undersized line.",
        "The diagnostic is a manometer on the manifold tap, not a guess. Verify incoming and manifold pressure with the oven firing, inspect the burner ports and orifices for grease and scale fouling, and look at flame color — a clean blue flame is right, yellow and sooting means a combustion or air-shutter problem. A gas smell, sooting or a persistently yellow flame is a stop-and-call safety issue, not a 'limp it through the weekend' situation. On a Middleby Marshall the burner and blower work together, so a combustion fault and an airflow fault can masquerade as each other.",
      ],
    },
    {
      heading: "3. Pilots, ignition and flame supervision",
      body: [
        "When a gas oven won't light or lights and drops out, the fault is in the ignition and flame-supervision chain. Standing-pilot ovens use a thermocouple that has to generate enough millivolts to hold the gas valve open; a weak or misaligned thermocouple lets the valve close and the pilot dies. Electronic-ignition ovens use a spark module, an igniter and a flame sensor — a dirty flame rod or a cracked igniter drops the burner on a safety lockout even though gas and spark are present.",
        "Work it in order: confirm the pilot or igniter is getting gas, check the thermocouple millivolt output or the flame-sensor microamp signal, then the gas valve itself. A Bakers Pride deck with a standing pilot that won't stay lit is usually a $40 thermocouple and 30 minutes, not a control board. Replacing a gas valve before checking the cheap upstream parts is a classic way to overcharge a customer for a problem a thermocouple swap would have solved.",
      ],
    },
    {
      heading: "4. Conveyor belt, drive motor and bearings",
      body: [
        "On a conveyor oven the wire belt is dragged through the tunnel by a drive motor and gearbox turning a sprocket shaft riding on bearings at each end. Those bearings live in the heat path and load-cycle all day, so they're a known wear point: they start to squeal, then bind, then seize, and a seized bearing stalls the belt mid-bake and backs up the whole line. A stretched belt skips teeth on the sprocket or jams against the tunnel; a worn drive motor or gearbox runs hot and slow.",
        "Listen and feel before you tear in. A squeal that tracks belt speed is a dry or failing bearing; a belt that surges and drags is usually tension or a worn drive component. The deeper teardown — pulling the sprocket shaft, pressing bearings, re-tensioning and re-linking a belt — is its own job, and we walk it in detail in our companion conveyor belt-and-bearing field guide. Catching a squealing bearing early on a Lincoln or Middleby Marshall conveyor is far cheaper than running it to seizure and taking out the drive motor with it.",
      ],
    },
    {
      heading: "5. Air fingers, blowers and uneven bake on conveyors",
      body: [
        "When a conveyor bakes uneven front-to-back or top-to-bottom, the air-delivery system is the suspect. The blower motor pressurizes a plenum that feeds removable 'fingers' with slotted plates aimed at the product. Fingers clog with baked-on flour and cheese, plates get installed in the wrong pattern after cleaning, or a blower motor weakens and drops air volume — any of which throws off the bake. Middleby Marshall and Lincoln both publish finger configurations, and the wrong setup bakes badly even with a perfect burner.",
        "Pull and inspect the fingers, confirm they're clean and in the documented pattern for that product, and verify the blower is moving full air. A blower motor that's worn or running on a tired capacitor turns down the airflow and the oven can't bake even though it's reaching temperature. Belt speed plays in too — a speed-control drift means the pie spends the wrong amount of time in the tunnel, so the controller and belt-speed calibration get checked alongside the air system.",
      ],
    },
    {
      heading: "6. Thermocouples, RTDs and controllers",
      body: [
        "Every pizza oven decides whether it's at temperature from a sensor — a thermocouple or an RTD — feeding a thermostat or a digital controller. When the oven over- or under-shoots its set point, a drifting or failed sensor is the usual cause: the controller is acting on a bad reading. A thermocouple degrades and reads low, the controller calls for more heat than it should, and you get scorched product or a runaway high-limit trip; an RTD that's drifted does the same quietly.",
        "Verify the sensor against a known reference before condemning the controller. On a digital Middleby or Blodgett control, the displayed temperature versus an independent probe tells you fast whether the sensor or the board is lying. Contactors on electric ovens are the other common control fault — a pitted contactor drops part of an element bank and creates dead zones in the deck. Sensors and contactors are inexpensive; a control board is not, so the cheap parts get ruled out first.",
      ],
    },
    {
      heading: "7. Electric decks, elements, doors and insulation",
      body: [
        "Electric deck ovens (some Bakers Pride, Blodgett and Marsal models) heat with element banks top and bottom, switched by contactors and protected by high-limits. A dead zone or weak deck usually traces to a burned-out element or a failed contactor, not the whole oven. The diagnostic is continuity and resistance on the elements and a check of the contactors and high-limit — methodical, and far cheaper than the replacement quote a panicked operator often expects.",
        "Heat retention is the quiet killer on both gas and electric decks. A door that won't seal, a sagged or torn door gasket, or degraded chamber insulation bleeds heat and tanks recovery time — the oven 'works' but can't keep up during a rush, and the gas or electric bill climbs. Worn deck stones that have cracked or pitted also bake unevenly. These are wear items that build up slowly, so a recovery complaint always gets a door, gasket, insulation and stone check before anyone blames the burner.",
      ],
    },
    {
      heading: "8. Calling for service and what to know first",
      body: [
        "When you call Berne Commercial at (754) 345-4515 about a pizza oven, the dispatcher will ask whether it's a deck or conveyor oven, the brand and model (Middleby Marshall, Lincoln Impinger, Bakers Pride, Blodgett, Marsal and the rest), whether it's gas or electric, and exactly what you're seeing — won't reach temperature, won't light, belt stalled, or bakes uneven. Those answers route the right tech with the right parts, and a model number off the data plate saves a parts trip.",
        "The $89 commercial service call covers the diagnostic and is free when you approve the repair — most burner, ignition, sensor and finger jobs close in one visit, while conveyor drive, bearing or element work may need a second trip with parts. We are an independent commercial service company, not a manufacturer-authorized agent, so in-warranty ovens should use the factory network first. For home and residential ovens, our sister site bernerepair.com covers the residential side.",
      ],
    },
  ],
  internalLinks: [
    { label: "Commercial Pizza Oven Repair", href: "/services/pizza-oven-repair" },
    { label: "Commercial oven repair", href: "/services/commercial-oven-repair" },
    { label: "Pizza prep table repair", href: "/services/pizza-prep-table-repair" },
    { label: "Request dispatch", href: "/request-dispatch" },
  ],
  relatedSlugs: [
    "pizza-conveyor-oven-belt-bearing",
    "combi-oven-buying-guide-south-florida",
  ],
}

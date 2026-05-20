import type { Article } from "../articles"

export const iceMachineNotMakingIce: Article = {
  slug: "ice-machine-not-making-ice-restaurant",
  title:
    "Restaurant Ice Machine Not Making Ice? 8 Things Your Tech Will Check",
  description:
    "A field-tested checklist for restaurant managers when a Hoshizaki, Manitowoc, or Scotsman ice machine stops producing — condenser, water filter, float switch, refrigerant temps, and harvest cycle.",
  publishedAt: "2026-05-08",
  readingMinutes: 9,
  category: "Refrigeration",
  tags: ["ice machines", "Hoshizaki", "Manitowoc", "Scotsman", "refrigeration"],
  lede: "It's 11:42 on a Friday in Brickell. The bar has a 100-person wait, the server station ice bin is half full, and the kitchen porter says the Hoshizaki KM-901MAJ in the back hasn't dropped a slab in three hours. The general manager looks at the rinse light, then at the phone. Before that call goes out, there are eight things a competent commercial refrigeration tech will check on site — and most of them you can stage in advance so the visit takes 45 minutes instead of three hours. Our techs see hollow-cube failures and low-water faults more than any other ice-machine issue across South Florida kitchens.",
  sections: [
    {
      heading: "1. Pull the model and serial, then read the diagnostic light",
      body: [
        "Every modern cuber — Hoshizaki KM and KMD series, Manitowoc Indigo NXT, Scotsman Prodigy Elite — runs a diagnostic LED or fault code on the control board. On a Hoshizaki KM, the green LED blink count maps to the freeze, harvest, and bin-full states. On a Manitowoc Indigo, a steady red on the Service light usually means a long cycle or temperature fault. A Scotsman Prodigy will flash a numbered code (8 flashes = high discharge temperature, 9 = low water).",
        "Have the model and serial photographed before the technician arrives. A Hoshizaki KM-901MAJ behaves nothing like a KMD-460MAH, and the parts on the truck differ. The serial dates the unit — anything over 8 years on a heavy-use bar machine is approaching the point where a recovery, evaporator swap, and refrigerant recharge costs more than a planned replacement.",
      ],
    },
    {
      heading: "2. Inspect the condenser coil and air clearance",
      body: [
        "Air-cooled cubers fail first at the condenser. South Florida kitchens push grease aerosol, flour dust, and line-cook lint through the rear intake all day. When the condenser fins clog, head pressure climbs, the high-pressure cutout trips, and the unit either shuts down on a code or runs a long, weak freeze cycle that makes thin slabs.",
        "The technician will pull the front louver, shine a light through the coil, and either brush or CO2-blast the fins. On a Manitowoc Indigo NXT with the AuCS auto-clean kit, the condenser still needs a manual clean every 90 days in a fryer-heavy line. Hoshizaki recommends quarterly. If the machine sits under a hot-line hood or against a wall with less than 6 inches of clearance, the airflow needs corrected before any refrigerant work means anything.",
      ],
    },
    {
      heading: "3. Check water supply, filter, and inlet solenoid",
      body: [
        "A clogged water filter is the single most common no-ice call in a Miami restaurant. The 3M Cuno CFS9112 or Everpure 7CB5 cartridges in your line have a 6-month rating under municipal water — South Florida hardness pushes that closer to 4 months on a busy bar.",
        "On a service call the technician will: read the inlet pressure (should be 20–80 psi, ideally 40–50), check the filter date, then pull the inlet solenoid on a Hoshizaki and verify it opens when 120 VAC is applied to the coil. A bad solenoid throws a Scotsman code 1, but on a Hoshizaki it just looks like a short, weak freeze. If the filter housing reads sub-15 psi inlet, swap the cartridge before chasing anything else.",
      ],
    },
    {
      heading: "4. Verify the float switch and reservoir water level",
      body: [
        "Hoshizaki uses a float switch on the reservoir; Manitowoc Indigo uses a water-level probe; Scotsman Prodigy uses a reservoir float plus a sump probe. Scale builds on these sensors in months, not years, in South Florida water.",
        "The diagnostic: with the unit on, watch the reservoir during a fill. Water should rise to the marked line and the freeze cycle should start. If water keeps filling and never triggers freeze, the float is stuck low (or the probe is scaled). If freeze starts on a dry reservoir, you will hear the pump cavitate inside 30 seconds — shut it down, because that is how pumps and seals fail. A vinegar-cycle descale is the first repair; replacement is the second.",
      ],
    },
    {
      heading: "5. Read freeze and harvest cycle temperatures",
      body: [
        "A working Hoshizaki KM-series should hit a final freeze suction temperature near 8–12°F and a harvest suction of 45–55°F. A Manitowoc Indigo NXT half-dice freeze runs longer than a full-dice, but a healthy 90-pound class machine should drop a slab in 18–22 minutes at a 70°F ambient with 50°F water.",
        "If the freeze stretches past 35 minutes, the tech will gauge the unit. Low suction superheat plus low head means low charge — a leak is somewhere, usually at a flare fitting or the evaporator return bend. High head with normal suction means a dirty condenser, a failing condenser fan motor, or a refrigerant overcharge from a previous bad service. EPA 608 certification is required for any refrigerant work; ask for it.",
      ],
    },
    {
      heading: "6. Test the harvest valve, hot-gas solenoid, and water pump",
      body: [
        "On a no-harvest fault, ice freezes onto the evaporator but never sheets off. The hot-gas solenoid (sometimes called the harvest valve) on a Hoshizaki KM is a 120 VAC coil — at 0 ohms or open, replace. On a Manitowoc Indigo, the harvest assist push-rod can stick; technicians check linkage before assuming a board fault.",
        "The water pump runs during freeze on flake and cube machines that cascade water over the evaporator. A failed pump leaves dry spots on the evaporator and produces hollow, weak cubes. Pull the pump, spin it by hand, and listen for a worn bearing.",
      ],
    },
    {
      heading: "7. Confirm bin level, bin thermostat, and curtain switch",
      body: [
        "More than one Friday-night emergency has been a curtain switch stuck in the bin-full position. The plastic curtain on a Manitowoc Indigo or Scotsman Prodigy flips a microswitch when ice piles up — the control reads bin-full and stops. A misaligned curtain after a recent cleaning, or a snapped magnet on the Manitowoc curtain, makes the machine refuse to start a fresh cycle even though the bin is empty.",
        "On Hoshizaki bin-storage configurations with a bin thermostat (BST), a scaled or shorted thermostat reads false-full. The technician will manually bypass the BST harness and confirm whether the machine starts a freeze. If it does, the BST gets replaced.",
      ],
    },
    {
      heading: "8. Pull the control board codes, check transformer voltage",
      body: [
        "The last check is the control board itself. A Hoshizaki KM control board failure shows up as random freeze-harvest cycling or stuck at one stage. Manitowoc Indigo NXT logs the last 10 fault codes in non-volatile memory; the tech reads them off the OLED.",
        "Board diagnosis requires the schematic glued inside the front panel and a true RMS meter. Check 24 VAC at the transformer secondary, 120 VAC at the contactor coil during a call-for-freeze, and continuity on the high-pressure and low-pressure cutouts. Boards are expensive — $400–$900 on a commercial cuber — and a misdiagnosis means that money walks out the door.",
      ],
    },
    {
      heading: "Health code, NSF, and what an inspector cares about",
      body: [
        "Beyond uptime, an out-of-spec ice machine is a health-inspector finding waiting to happen. NSF/ANSI 12 governs ice-making equipment and requires food-contact components be cleanable, non-corroding, and inspected. Florida DBPR food-service inspectors regularly cite scale on evaporator plates, slime in bin curtains, and missing water filters as priority violations. A scheduled descale on a Hoshizaki — Hoshizaki recommends every 6 months on KM-series, more often in our water — is cheap insurance against a 7-point inspection hit.",
        "Berne Commercial Repair logs every descale and filter change in a service record that property managers and corporate compliance teams can pull. That paper trail is what separates a vendor from a handyman when a chain runs an annual audit.",
      ],
    },
    {
      heading: "Need a tech on site today?",
      body: [
        "Berne Commercial Repair runs a $89 commercial service call across Miami-Dade, Broward, and Palm Beach — the diagnostic fee is applied to the approved repair. Our trucks stock Hoshizaki KM, Manitowoc Indigo, and Scotsman Prodigy parts, plus 3M Cuno and Everpure filter cartridges. Call dispatch at (754) 345-4515 or request service through our ice machine repair page.",
        "Restaurants that run a quarterly preventive program on ice equipment see roughly half the emergency calls of those running break-fix only. If you want a service contract built around your menu volume and ambient kitchen heat load, our team can write one to match. For residential ice maker work — undercounter Sub-Zero, KitchenAid, or U-Line — our sister site bernerepair.com handles those calls.",
      ],
    },
  ],
  internalLinks: [
    { label: "Ice machine repair", href: "/services/ice-machine-repair" },
    {
      label: "Commercial refrigeration repair",
      href: "/services/commercial-refrigeration-repair",
    },
    { label: "Walk-in cooler repair", href: "/services/walk-in-cooler-repair" },
    { label: "Request dispatch", href: "/request-dispatch" },
  ],
  relatedSlugs: [
    "commercial-walk-in-cooler-temperature-issues",
    "commercial-dishwasher-low-pressure",
  ],
}

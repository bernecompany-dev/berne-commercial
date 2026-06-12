import type { Article } from "../articles"

export const nsfInspectorFailedReachIn: Article = {
  slug: "nsf-inspector-failed-reach-in-recovery",
  title:
    "NSF Health Inspector Failed Your Reach-In? Quick Fixes for Recovery",
  description:
    "A Florida DBPR inspector wrote up your True T-49 or Beverage-Air HBR48 at 47°F — what to fix in 24 hours so the re-inspection passes and the kitchen doesn't lose its permit.",
  publishedAt: "2026-05-28",
  readingMinutes: 9,
  category: "Refrigeration",
  tags: [
    "reach-in cooler",
    "NSF",
    "DBPR",
    "True Refrigeration",
    "Beverage-Air",
    "compliance",
  ],
  lede: "A Florida DBPR inspector walks out of a Coral Gables bistro at 2:18 PM with a yellow copy stapled to a clipboard. The True T-49 line cooler under the prep table read 47°F on her probe — eight degrees over the 41°F maximum holding temperature. The kitchen manager has 24 to 48 hours to recover before the re-inspection, and the temptation is to dump ice on every shelf and hope. That isn't going to pass. Here's what to fix, in the order a working tech runs it, so the second visit ends with a green stamp. In ten-plus years of South Florida service calls, our techs see the same two or three failures account for most tickets.",
  sections: [
    {
      heading: "1. Pull the model and read what the inspector actually wrote",
      body: [
        "Florida Food Service Inspection Reports cite the specific violation code. 3-501.16(A)(2) is potentially hazardous food held above 41°F — that's the one you got. The corrective action listed on the form usually says \"unit must hold at or below 41°F before re-inspection\". The inspector doesn't care which part is broken. The inspector cares that the air temperature in the cabinet and the food temperature both read 41°F or below on the re-visit.",
        "Photograph the unit nameplate. A True T-49 reach-in, a Beverage-Air HBR48, a Continental 2RE, and a Traulsen G20010 all use different evaporator layouts and defrost schedules. The recovery plan changes per model. While you wait for the tech, move the perishables to a working unit or to ice baths in a 4-inch hotel pan with the food held in another shallow pan over the ice.",
      ],
    },
    {
      heading: "2. Condenser coil clean — the first thing that fixes 60 percent of failed inspections",
      body: [
        "A clogged condenser is the single most common cause of a borderline reach-in failing inspection in a South Florida kitchen. Grease aerosol from a flat-top six feet away coats the fins, head pressure climbs, the compressor short-cycles, and the cabinet drifts up two to four degrees on a hot afternoon. The inspector probes at the worst moment, and the unit fails.",
        "Pull the kickplate on a True T-49, vacuum the fins, then comb them with a Malco fin comb. On a Beverage-Air HBR48 the condenser sits on top — pop the louvered panel and CO2-blast the coil. If the kitchen runs a fryer line within 10 feet, this coil needs a quarterly clean to stay in spec. After cleaning, run the unit empty for two hours and probe the return-air temperature. If it doesn't pull below 38°F, the cleaning wasn't the only fault.",
      ],
    },
    {
      heading: "3. Door gaskets and the dollar-bill test",
      body: [
        "A blown gasket on a True T-49 leaks 70-degree kitchen air into the cabinet every time someone walks past. Inspectors don't usually cite the gasket directly, but they cite the temperature it caused. Close the door on a dollar bill at five points around the perimeter. If the bill pulls out with no resistance, that gasket is leaking.",
        "True OEM gasket part numbers: 810768 for the T-49 half-door, 810769 for the full door. Beverage-Air uses 712-012D-09 on the HBR48 half. Same-day replacement is a $90 part and 20 minutes of labor. If the gasket is curled at the corners or shows torn magnets, replace it before the re-inspection. Inspectors notice gaskets and they remember which units they wrote up before.",
      ],
    },
    {
      heading: "4. Evaporator coil ice, defrost timer, and the hidden cause",
      body: [
        "Pull the inside ceiling cover and look at the evaporator coil. A coil iced over from front to back means the defrost cycle isn't running, the defrost timer is stuck, or the evap fan motor has failed and isn't pushing air across the coil. On a True T-49 the defrost is off-cycle (compressor pauses, fan runs, ambient melts the coil). On a Beverage-Air HBR with electric defrost, a Paragon 8141-20 timer or a Robertshaw 9145 can stick.",
        "Listen during the run. Evap fan should hum continuously on most reach-ins. A silent evap fan with a frosted coil is a $45 motor and a 30-minute swap (EBM-Papst or Fasco — both common). After the swap, the coil clears in two hours and the cabinet returns to spec.",
      ],
    },
    {
      heading: "5. Refrigerant charge and the gauge readings that confirm it",
      body: [
        "If condenser is clean, gaskets seal, evap fan runs, and the box still drifts warm, gauge the unit. A True T-49 on R-134a should pull a suction pressure around 8–14 psi with a 40°F box temperature and a 90°F ambient. A Beverage-Air HBR48 on R-290 (newer propane refrigerant units) runs different numbers — confirm refrigerant type on the nameplate before connecting.",
        "Low suction with low head means undercharge — there's a leak somewhere, usually at a process tube, a flare, or a copper-aluminum joint at the evaporator. EPA 608 certification is required for any refrigerant handling. A Berne Commercial tech will leak-test with a Bacharach H-10 Pro or equivalent, repair the leak, evacuate to 500 microns, and recharge by weight. Topping off a leaking system is illegal under EPA Section 608 and is a fire-marshal finding when the leak repair isn't logged.",
      ],
    },
    {
      heading: "6. Temperature monitoring and the paper trail for re-inspection",
      body: [
        "The inspector will ask for the temperature log on the re-visit. If your kitchen doesn't keep one, start it today. A simple twice-daily handwritten log — opening probe reading, closing probe reading, initials — is what HACCP and the FDA Food Code want. Better: a wireless probe like a Cooper-Atkins WiFi sensor or a SensoScientific data logger sitting on the middle shelf, logging every 5 minutes to a dashboard.",
        "When the inspector comes back, having a 48-hour log showing the cabinet held 38–40°F across two service shifts is the strongest evidence the corrective action worked. It also protects you on the next routine inspection because you can show six months of in-spec history.",
      ],
    },
    {
      heading: "7. The conversations to have with the inspector and the staff",
      body: [
        "Inspectors don't want to shut a kitchen down. They want corrective action documented and a clean re-inspection. Call the DBPR field office before the re-visit and confirm the date. Have the service invoice ready — parts replaced, refrigerant weight, post-repair temperature reading, and the tech's EPA card on file. That paperwork makes the re-inspection a 10-minute visit instead of an hour of poking.",
        "Brief the staff: don't open the reach-in to get a single tomato. Stage prep so the door opens twice instead of twelve times. Don't pack food against the rear evaporator — leave 2 inches of clearance for airflow. These habits matter more than another temperature alarm.",
      ],
    },
    {
      heading: "Cost reality for a 24-hour recovery",
      body: [
        "Recent tickets from compliance-recovery calls: condenser deep clean and gasket replacement on a True T-49, $245. Defrost timer swap on a Beverage-Air HBR48, $185. Evap fan motor swap and coil thaw, $220. R-134a leak repair, evacuate, recharge, $480 with one pound of refrigerant. Full compressor replacement on an out-of-warranty Continental 2RE — $1,400, and at that point a replacement unit is the conversation.",
        "A standing quarterly preventive on reach-ins — coil clean, gasket check, temperature probe calibration, log review — runs $160 per unit and is the cheapest insurance against a failed inspection in a busy season.",
      ],
    },
    {
      heading: "Same-day inspection recovery dispatch",
      body: [
        "Berne Commercial Repair runs emergency same-day service for kitchens facing DBPR re-inspections across Miami-Dade, Broward, and Palm Beach. $89 commercial service call — free with an approved repair — and a service invoice formatted for inspector review. Call (754) 345-4515 or request a tech through our reach-in cooler repair page. For home or office reach-ins — Sub-Zero, Viking, residential built-ins — bernerepair.com runs the residential side.",
      ],
    },
  ],
  internalLinks: [
    { label: "Reach-in cooler repair", href: "/services/reach-in-cooler-repair" },
    {
      label: "Reach-in freezer repair",
      href: "/services/reach-in-freezer-repair",
    },
    {
      label: "Commercial refrigeration repair",
      href: "/services/commercial-refrigeration-repair",
    },
    { label: "Walk-in cooler repair", href: "/services/walk-in-cooler-repair" },
    { label: "Request dispatch", href: "/request-dispatch" },
  ],
  relatedSlugs: [
    "commercial-walk-in-cooler-temperature-issues",
    "ice-machine-not-making-ice-restaurant",
  ],
}

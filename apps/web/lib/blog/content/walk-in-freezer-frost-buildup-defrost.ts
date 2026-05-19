import type { Article } from "../articles"

export const walkInFreezerFrostBuildup: Article = {
  slug: "walk-in-freezer-frost-buildup-defrost",
  title:
    "Walk-In Freezer Frost Buildup — Diagnosing Defrost Timer vs Heater",
  description:
    "Your Heatcraft or Bohn walk-in freezer evaporator is a block of ice and product is thawing. A field tech's diagnostic on the Paragon timer, defrost termination thermostat, and the 240V heating element behind the frost.",
  publishedAt: "2026-06-24",
  readingMinutes: 9,
  category: "Refrigeration",
  tags: [
    "walk-in freezer",
    "Heatcraft",
    "Bohn",
    "defrost",
    "Paragon",
    "refrigeration",
  ],
  lede: "A property manager for a Doral hotel walks into the catering walk-in freezer at 6 AM and finds the Heatcraft evaporator coil packed solid with frost from face to back. The boxed seafood on the top shelf is at 28°F — soft, not solid — and the digital readout on the cabinet says -4°F because the thermostat probe is sitting in cold return air, not measuring the product. A frosted-over walk-in freezer evaporator is one of three failures: a defrost timer that won't initiate, a defrost heater that won't melt, or a termination thermostat that won't end the cycle. Knowing which gets the food saved.",
  sections: [
    {
      heading: "1. Read the evaporator nameplate and find the defrost type",
      body: [
        "Walk-in freezers below 0°F box temperature can't use off-cycle (compressor pause) defrost because there isn't enough ambient heat in a freezer to melt frost. They use electric defrost — a 240V heating element wired into the evaporator fins — or hot-gas defrost where compressor discharge is diverted through the evaporator to melt frost.",
        "Most South Florida walk-in freezers are electric defrost. The Heatcraft Bohn BHE or LET series, the Russell RL series, the Larkin LH series — all use electric heaters terminated by a klixon-style snap-disc thermostat and initiated by a Paragon 8141-20, 8141-00, or a Grasslin DTAV40 defrost timer. Read the nameplate, photograph it, and bring that information to the diagnostic.",
      ],
    },
    {
      heading: "2. The Paragon defrost timer — initiation side",
      body: [
        "The mechanical Paragon 8141 timer sits in the electrical panel on the evaporator side or in a control box near the condensing unit. It has a numbered dial that runs once every 24 hours and pin-set defrost cycles — typically 4 cycles a day at 30-minute maximums for a busy walk-in freezer.",
        "Open the cover and watch the dial turn. If it doesn't turn, the timer motor is dead — a $35 part and a 15-minute swap. If it turns but doesn't trip the defrost contactor at the set time, the cam pins are missing or the contacts inside have welded. Newer installs use a digital timer like the Heatcraft Beacon II — that one fails to a different mode, usually a board fault you read on the LED. Either way, the test is simple: at the scheduled defrost time, the compressor should stop, the heaters should energize, and the evap fan should pause. If any of those three doesn't happen, the timer is the suspect.",
      ],
    },
    {
      heading: "3. The defrost heating element and how to test it",
      body: [
        "Heatcraft uses tubular 240V incoloy heating elements clamped into the evaporator fins. A typical 6-fan evap has 4 to 8 elements wired in parallel. Each element draws around 6 to 10 amps at 240V. A failed element opens the circuit on that one, but the others still produce some heat — so the symptom is partial frost clearing, with ice still clinging to one section of the coil.",
        "Test sequence: kill power at the disconnect. Lock and tag it (NFPA 70E requires it). Pull the cover on the evaporator junction box, ohm each element across its terminals — 25 to 40 ohms is healthy, open is failed. Replace any failed element. Elements run $80 to $140 each and the labor is 30 to 45 minutes per element on a Heatcraft Bohn LET-series. Always replace failed elements as a matched pair on a long evaporator to keep the heat distribution even.",
      ],
    },
    {
      heading: "4. The defrost termination thermostat",
      body: [
        "Even with working heaters and a working timer, if the termination thermostat (sometimes called the defrost limit or X-thermostat) sticks open, the defrost cycle never engages the heaters. If it sticks closed, the heaters run too long, melt frost into water that refreezes on the drain line, and the next freeze cycle re-ices the coil from below.",
        "The Klixon or White-Rodgers snap-disc on a Heatcraft evap is typically set at 55°F close-on-rise and 25°F open-on-fall. Pull the disc, dip it in warm water at about 60°F, ohm across the terminals — should read closed. Pull it out, let it cool below 25°F in an icemaker bin or against a freezer evaporator face — should open. If the test fails, replace the disc. It's a $25 part and a 15-minute swap. A bad termination disc is the most-missed cause of a frosted-coil call because it's not on the wiring diagram people commonly read.",
      ],
    },
    {
      heading: "5. The defrost drain line and the heat tape",
      body: [
        "When the heaters do clear the frost, that water has to drain. Walk-in freezer evaporators have a drain pan with a heater under it (a drain pan heater) and a drain line that runs out of the box. In a freezer, that drain line has heat tape wrapped around it and a P-trap heater to keep the water flowing instead of freezing inside the drain.",
        "If the drain pan heater fails, water pools in the pan, refreezes during the next cycle, and slowly fills up until it lifts the evap fan blades out of the airstream. If the drain line heat tape fails, the trap freezes solid and water backs up into the box — you find frozen puddles on the floor. Test the heat tape with a clamp meter at the receptacle: should pull 0.5 to 1 amp depending on length. Open circuit means tape replacement, about $90 plus labor.",
      ],
    },
    {
      heading: "6. Door gaskets, sweep, and infiltration",
      body: [
        "All the defrost work in the world won't fix a walk-in freezer with a torn door gasket. Warm, humid Florida kitchen air leaks past the gasket, hits the cold evap coil, and dumps moisture as frost faster than the defrost cycle can clear it. A Kason 1238 strap-hinge replacement on a Kolpak walk-in is $180 in parts. A new sweep at the bottom of the door is $40. The plastic strip curtain inside the doorway is $120 and pays for itself in defrost-cycle frequency.",
        "Inspect the gasket on each visit. Look for tears at the bottom corners, crushed sections from a pallet jack, and missing magnets. Hold a lit incense stick at the perimeter when the unit is running — if the smoke pulls in toward the box, the seal is leaking warm air.",
      ],
    },
    {
      heading: "7. The compressor and the high-side after the defrost is fixed",
      body: [
        "Once the defrost works, watch the unit run a full cycle. If the box doesn't pull back down to -10 to -20°F box temperature on a 24-hour catch-up, the refrigeration side has a separate problem — a worn compressor, a TXV starving the evaporator, or a low charge. Gauge the unit: a typical low-temp Heatcraft on R-404A or R-448A runs suction around 10 to 18 psig and head around 220 to 280 psig depending on outdoor ambient.",
        "If the gauges read low-low, leak-test with a Bacharach H-10 PRO and weigh in fresh refrigerant per the nameplate charge. EPA 608 certification is required and the leak must be repaired and documented under EPA Section 608 phaseout rules — R-404A is being phased down and replacement charges are getting expensive. Most South Florida walk-ins are getting retrofitted to R-448A or R-449A on major service.",
      ],
    },
    {
      heading: "8. NSF, FDA, and DBPR — what the inspector wants",
      body: [
        "Walk-in freezers holding potentially hazardous food are subject to FDA Food Code 3-501.13 — the freezer must hold the food in a frozen state. A box drifting up to 28°F means thawed product, which means a critical violation on a Florida DBPR inspection. The fix is documentable repair, refreezing of any product within the safe window, and a 48-hour log showing the box back at -10°F or below.",
        "Berne Commercial techs file the service report with the refrigerant type, the parts replaced, the post-repair temperature, and the tech's EPA card on file. That packet is what a property-management compliance team or a corporate audit will look for on the next visit.",
      ],
    },
    {
      heading: "Same-day walk-in freezer service",
      body: [
        "Berne Commercial Repair runs emergency dispatch for walk-in freezer defrost failures across Miami-Dade, Broward, and Palm Beach. Our trucks stock Paragon timers, defrost heating elements, termination thermostats, and Heatcraft replacement evap fans. $89 commercial service call applied to the approved repair. Call (305) 520-7833 or request service through our walk-in freezer repair page. For residential standalone freezers — Sub-Zero, Viking, GE Profile — bernerepair.com handles the home side.",
      ],
    },
  ],
  internalLinks: [
    {
      label: "Walk-in freezer repair",
      href: "/services/walk-in-freezer-repair",
    },
    { label: "Walk-in cooler repair", href: "/services/walk-in-cooler-repair" },
    {
      label: "Commercial refrigeration repair",
      href: "/services/commercial-refrigeration-repair",
    },
    {
      label: "Reach-in freezer repair",
      href: "/services/reach-in-freezer-repair",
    },
    { label: "Request dispatch", href: "/request-dispatch" },
  ],
  relatedSlugs: [
    "commercial-walk-in-cooler-temperature-issues",
    "nsf-inspector-failed-reach-in-recovery",
  ],
}

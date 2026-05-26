import type { Article } from "../articles"

export const frymasterFilterPumpLockout: Article = {
  slug: "frymaster-filter-pump-lockout",
  title:
    "Frymaster Filter Pump Won't Engage — Lockout Reset Procedure",
  description:
    "Your Frymaster FPP3, FPGL230, or H50 with FilterQuick is throwing a filter-pump lockout. A field diagnostic on the float switches, drain valve sensors, and how to clear the M3000 controller fault.",
  publishedAt: "2026-07-13T09:00:00Z",
  readingMinutes: 9,
  category: "Restaurant Equipment",
  tags: [
    "fryer",
    "Frymaster",
    "filter pump",
    "FilterQuick",
    "M3000",
    "lockout",
  ],
  lede: "A QSR manager at a Kendall location calls Berne Commercial because the Frymaster FPGL230 with FilterQuick won't run a filter cycle. The M3000 controller flashes 'FILTER LOCKOUT' and the unit won't accept a filter request. Kitchen's blowing through fresh oil at twice the budget rate because the filter pad isn't cycling between drops. A FilterQuick filter-pump lockout is one of four sensor states out of sequence, and clearing it requires a specific reset procedure that isn't in the cook's manual.",
  sections: [
    {
      heading: "1. What FilterQuick actually checks before it runs",
      body: [
        "FilterQuick is Frymaster's built-in oil filtration system. The M3000 controller monitors four states before it allows a filter cycle: the oil temperature must be in the filter window (typically 350°F or set point minus 10), the drain valve has to be closed at start and open during drain, the return valve has to be closed at drain and open during return, and the filter pan float must be in the empty position at start and the full position during drain. Miss any one of those four checks and the controller throws a lockout.",
        "The lockout isn't a fault that clears on its own. The cook has to manually clear it by accessing the service menu, which most operations manuals don't include. The result is that a Frymaster running a sensor out of sync becomes useless for filtration until a tech arrives, and meanwhile the kitchen runs fresh oil through the unit because they can't filter the existing oil down.",
      ],
    },
    {
      heading: "2. The float switch in the filter pan",
      body: [
        "The filter pan float is a magnetic reed switch mounted in the pan-mounting bracket. When the pan slides into position with no oil, the float reads empty. As the drain cycle dumps oil into the pan, the float rises and reads full. If the float sticks (oil-coke buildup on the float arm is the usual cause), the controller sees an unchanging signal and locks out at the next attempt.",
        "Diagnostic: pull the filter pan, clean the float assembly with a hot-water-and-degreaser soak, and bench-test continuity across the reed switch with a multimeter while moving the float by hand. The switch should make and break cleanly. If it doesn't, replace the float assembly (Frymaster part 8261481, around $85) and re-test. A clean float plus a controller reset clears 60 percent of FilterQuick lockouts on the first visit.",
      ],
    },
    {
      heading: "3. The drain valve and return valve micro-switches",
      body: [
        "The drain valve on a Frymaster FPGL230 is a butterfly valve operated by an actuator with a position-feedback micro-switch. The switch tells the controller whether the valve is open or closed. After 5 to 7 years of cycling, the micro-switch gets oil residue inside the housing and the contacts intermittent. The controller reads valve-closed when the valve is actually still partially open, or vice versa, and the lockout fires.",
        "Test: with the unit in service mode, command an open valve and a closed valve while reading the switch state in the controller diagnostic screen (Menu > Service > I/O > Valve States). The switch should toggle within 2 seconds of the actuator command. If it doesn't, replace the switch (Frymaster 8074555, around $40) and verify. The same procedure applies to the return-valve switch.",
      ],
    },
    {
      heading: "4. The M3000 controller reset procedure",
      body: [
        "Clearing a lockout on an M3000 requires: hold the Menu button for 5 seconds to enter service mode, scroll to Service > Reset Filter Lockout, enter the service-tech code (default is documented in the Frymaster service manual, varies by software revision), and confirm the reset. The lockout clears and the controller returns to ready. If the underlying sensor problem hasn't been fixed, the lockout fires again on the next filter request.",
        "Operators who only have the manager code can't reset the lockout from the kitchen-side menu. That's deliberate — Frymaster doesn't want a cook clearing the lockout repeatedly while a sensor problem persists, which would damage the filter system. The right answer is a tech visit and a proper sensor diagnosis. Calling for service is the cheapest path. Bypassing the lockout repeatedly is how filter-pump motors burn out.",
      ],
    },
    {
      heading: "5. Filter pump motor and the polish-cycle interval",
      body: [
        "The filter pump motor on a FPGL230 is a 1/3 HP centrifugal pump driven by a contactor on the main control board. When the pump runs against a closed return valve or a clogged filter paper, motor amperage climbs and the thermal protector trips. Repeated thermal trips kill the motor over time. We see this on units where the kitchen has been ignoring 'CHANGE FILTER PAPER' alerts and the pump's been running through saturated paper for weeks.",
        "Polish-cycle interval on a heavy-volume QSR Frymaster: every 6 to 8 fry baskets of breaded product, or twice per day minimum, whichever comes first. Filter paper replacement at minimum twice daily on heavy-breading menus, daily on standard menus. Operations that skip the polish cycle to save labor end up paying for pump rebuilds and oil costs that dwarf the labor savings. Our service contracts include filter-pump testing at every visit.",
      ],
    },
    {
      heading: "6. NSF, food safety, and the oil-quality angle",
      body: [
        "NSF/ANSI 4 covers commercial fryer equipment. The standard speaks to oil-management capability as part of food-contact sanitation. Florida DBPR inspectors sometimes test oil quality with a polar-compound meter (Testo 270 is the common one). Polar compound readings above 27 percent are a violation under HACCP-based plans. Properly operating filtration keeps polar compounds below 18 to 22 percent in typical service.",
        "A Frymaster with a locked-out filter pump pushes oil polar compounds past spec inside 2 to 3 days of normal service. The food sticks to fried product, the flavor profile shifts, and the inspector or the chef notices. The lockout isn't just a controller annoyance. It directly affects food quality and compliance.",
      ],
    },
    {
      heading: "7. The oil-change schedule and how filtration extends it",
      body: [
        "A QSR Frymaster with FilterQuick running correctly extends oil life from a typical 5-day change interval to 10 to 14 days. The labor savings on oil changes plus the reduced oil cost adds up to roughly $2,400 to $3,600 per fryer per year against the baseline. That's the actual value FilterQuick delivers when it's operating as designed.",
        "Operations that let the FilterQuick stay locked out and run plain oil changes lose all of that savings. We've audited Frymaster fleets where the operator was changing oil every 4 days because the filter cycle hadn't worked correctly in 14 months. The cost of letting that situation persist was roughly $32,000 a year across the location's six fryers. The filter-pump repair would have cost $480. The math on getting filter-side service done is clear once the operator sees the numbers.",
      ],
    },
    {
      heading: "8. Calling for service and what to know first",
      body: [
        "When you call Berne Commercial at (754) 345-4515 about a Frymaster filter lockout, our dispatcher needs the model number, the controller type (M3000, M2000, or FootPrint Pro), and the specific lockout code if displayed. That information puts the right parts on the truck — float switches, valve micro-switches, controller test cables, and filter paper.",
        "Our $89 commercial service call covers the diagnostic and the lockout reset. Most filter-pump lockouts are resolved in a single visit. For chains running multiple Frymaster units across multiple locations, we offer route service that includes scheduled FilterQuick verification on every visit. For residential deep fryers (T-Fal, Hamilton Beach, Cuisinart) our sister site bernerepair.com handles those — totally different unit class but the same dispatch desk routes the call.",
      ],
    },
  ],
  internalLinks: [
    { label: "Fryer repair", href: "/services/fryer-repair" },
    { label: "Commercial range repair", href: "/services/commercial-range-repair" },
    { label: "Commercial oven repair", href: "/services/commercial-oven-repair" },
    { label: "Commercial appliance repair", href: "/services/commercial-appliance-repair" },
  ],
  relatedSlugs: [
    "commercial-fryer-thermostat-issues",
    "vulcan-range-pilot-wont-stay-lit",
  ],
}

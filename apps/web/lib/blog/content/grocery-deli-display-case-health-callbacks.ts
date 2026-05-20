import type { Article } from "../articles"

export const groceryDeliDisplayCaseHealthCallbacks: Article = {
  slug: "grocery-deli-display-case-health-callbacks",
  title:
    "Grocery Deli Display Case — What Triggers Health Inspector Callbacks",
  description:
    "A Hussmann or Hill Phoenix deli case running 42°F at the back top corner during a busy Saturday is the citation pattern most grocery managers don't catch until inspection. Here's what the inspector measures and how to prevent the callback.",
  publishedAt: "2026-10-27T09:00:00Z",
  readingMinutes: 9,
  category: "Compliance",
  tags: [
    "grocery",
    "deli case",
    "Hussmann",
    "Hill Phoenix",
    "health inspection",
  ],
  lede: "A Pinecrest independent grocer runs an 8-foot Hussmann curved-front deli case for sliced meats, cheeses, and prepared salads. Saturday afternoons the case is restocked four times during peak shopping. Inspector pulls the top-back-corner package temperature with a probe thermometer — 44°F. Above the 41°F spec. Citation written, callback scheduled in 10 days. The case had been running fine 90 percent of the time. The 10 percent the inspector caught was the busy-restocking heat-load condition. This is the pattern that catches grocery deli cases more than any other.",
  sections: [
    {
      heading: "1. The deli case heat-load challenge",
      body: [
        "Deli display cases are designed for steady-state operation at a sustained low ambient. Real grocery operation is dynamic — door opens, restocking, customer reaches, lighting cycles. Each event introduces heat into the case that the refrigeration must remove. A case operating near its thermal limit (which most cases do during peak hours) can drift 3 to 6°F above setpoint during restocking and take 30 to 90 minutes to recover.",
        "Inspectors don't measure at the cool steady-state moments. They measure during the busy moments — peak shopping, restocking, lunch hour — when temperature is most likely to be above spec. The deli case that reads 38°F at 10 AM and 43°F at 2 PM has a 5°F dynamic range that's invisible to the manager but obvious to the inspector with a probe.",
      ],
    },
    {
      heading: "2. The case types — Hussmann, Hill Phoenix, Tyler, Kysor Warren",
      body: [
        "Hussmann (Schaeffer brand) curved-front and flat-glass deli cases dominate Florida independent grocery — DSF, RLN, and similar. Hill Phoenix (Dover brand) makes the OPS and Eclipse lines common in regional chains. Tyler and Kysor Warren show up in older installations. All four manufacturers have similar architecture: refrigeration deck below the case, evaporator coil at the back of the case, air curtain at the front discharge.",
        "Cases come in self-contained (own compressor) and remote (refrigeration rack on the roof or in a mechanical room). Remote-rack cases are more efficient long-term but the failure mode propagates — a failed compressor at the rack takes down multiple cases simultaneously. Self-contained cases isolate failures.",
      ],
    },
    {
      heading: "3. The top-back corner — why it's always the hot spot",
      body: [
        "The case design pushes cold air down the back of the case, across the bottom, and up the front in an air curtain that separates case interior from store ambient. The top-back corner is the warmest point in the case because it's furthest from the cold supply and closest to the air curtain mixing zone where some store ambient infiltrates.",
        "When inspectors probe a case, they probe the top-back corner first. If that reads in spec, the rest of the case is in spec. If the top-back corner is warm, the case is operating outside its design parameters and the citation is written.",
      ],
    },
    {
      heading: "4. The common failure modes — and what causes top-back warming",
      body: [
        "Air curtain disruption: stocking carts blocking the discharge, signage hanging into the air curtain, customer reaches blocking the airflow. Every disruption breaks the curtain and admits store ambient. Train staff to keep the air curtain clear during stocking.",
        "Coil fouling: dust and packaging fiber build on the evaporator coil over months. The case can't move enough air across a fouled coil and the cold air flow degrades. Quarterly coil cleaning is the spec on most cases.",
        "Door gasket on stocking doors (rear access): the rear stocking door has its own gasket and that gasket gets ignored. A worn back-gasket admits ambient air directly into the back of the case where the evaporator is.",
        "Defrost cycle: case defrost varies by case type. Excessive defrost cycles raise case temperature for the cycle duration. Marginal defrost cycles leave coil frost that reduces capacity.",
      ],
    },
    {
      heading: "5. The dynamic operation check — what staff should do",
      body: [
        "Weekly: probe the top-back corner package temperature during a busy hour. Compare to morning steady-state reading. Difference over 5°F is a warning sign. Difference over 8°F means service is needed before the next inspection.",
        "Monthly: visual check of the air curtain (place a tissue at the air curtain discharge and observe the airflow — it should be smooth and downward, not tumbling or interrupted), evaporator fan check (open the rear panel briefly, confirm fans spinning), drain line check (clear, water flowing). Document these checks for the maintenance log.",
      ],
    },
    {
      heading: "6. The service interval — quarterly minimum",
      body: [
        "Coil cleaning quarterly for self-contained cases, semi-annual for remote-rack cases. Door gasket inspection quarterly. Refrigerant verification annually (superheat/subcool readings — EPA Section 608 work). Defrost cycle timing verification annually. Air curtain calibration annually.",
        "Service contracts for grocery: monthly preventive on deli, meat, and seafood cases makes sense for high-volume independents. The cost of monthly service is dwarfed by the cost of inspector-triggered callbacks and citation work.",
      ],
    },
    {
      heading: "7. The remote-rack failure mode",
      body: [
        "On a remote-rack installation (compressor and condenser on the roof or in a mechanical room, evaporators in the cases), a single compressor failure can drop multiple cases simultaneously. Most independent grocers don't have backup-compressor capacity on their rack systems, so a compressor failure means all the connected cases drift out of spec until repair.",
        "Refrigerant rack systems also have higher leak rates than self-contained cases — more piping, more joints, more thermal cycling. A slow refrigerant leak presents as gradual temperature drift across multiple cases. EPA Section 608 reporting kicks in when leak rates exceed 35 percent of charge annually for commercial refrigeration (35 percent for cases under 50 lbs charge, 20 percent for above 50 lbs). Documented leak inspections are part of the EPA compliance.",
      ],
    },
    {
      heading: "8. The pre-inspection audit for grocery deli",
      body: [
        "30 days before the next routine inspection: probe every case at the top-back corner during a peak hour. Document temperatures. Schedule service for any case reading above 41°F. Verify cleaning logs are current. Check refrigerant logs (rack systems). Verify Ansul/hood compliance for any hot deli component. Update vendor contact information so the inspector can verify documented service contractors.",
        "The 30-day window catches problems before the inspection, gives time for parts and scheduling, and ensures the inspection day finds compliant equipment with compliant documentation.",
      ],
    },
    {
      heading: "Same-day grocery refrigeration service",
      body: [
        "Berne Commercial Repair services Hussmann, Hill Phoenix, Tyler, Kysor Warren, and Migali deli/meat/seafood cases across Miami-Dade, Broward, and Palm Beach. Self-contained and remote-rack service. EPA Section 608 certified. $89 commercial service call applied to the approved repair. Call (754) 345-4515 or request through our commercial refrigeration repair page.",
      ],
    },
  ],
  internalLinks: [
    { label: "Commercial refrigeration repair", href: "/services/commercial-refrigeration-repair" },
    { label: "Grocery", href: "/industries/grocery" },
    { label: "Credentials", href: "/credentials" },
    { label: "Request dispatch", href: "/request-dispatch" },
  ],
  relatedSlugs: [
    "ice-machine-bacterial-buildup-health-code",
    "nsf-inspector-failed-reach-in-recovery",
  ],
}

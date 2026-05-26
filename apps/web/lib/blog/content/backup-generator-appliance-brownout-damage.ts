import type { Article } from "../articles"

export const backupGeneratorBrownoutDamage: Article = {
  slug: "backup-generator-appliance-brownout-damage",
  title:
    "Backup Generator + Appliance Brownout Damage — Commercial Coverage",
  description:
    "A marginal backup generator delivers dirty power that kills compressors and electronic controls slowly. Most insurance policies don't cover the cumulative damage unless it's documented. Here's the prevention and the claim path.",
  publishedAt: "2026-11-09T09:00:00Z",
  readingMinutes: 9,
  category: "Operations",
  tags: [
    "backup generator",
    "brownout",
    "appliance damage",
    "insurance",
    "power quality",
  ],
  lede: "A Doral hotel ran its 80 kW backup generator through a 14-hour outage in October. The generator started, took the load, and ran the property through the event. Looked like a success. Three weeks later the kitchen's main walk-in compressor failed prematurely. Five weeks later, the ice machine control board went. Seven weeks later, two reach-in compressors. The pattern wasn't coincidence — the generator had delivered marginal power quality (voltage swings, frequency drift) during the 14-hour run and the cumulative stress aged multiple electronics simultaneously. The hotel's insurance covered direct lightning/surge damage but not 'cumulative generator-quality degradation.' Documentation matters before, during, and after.",
  sections: [
    {
      heading: "1. What 'dirty power' actually means",
      body: [
        "Clean grid power: 208V or 240V at 60 Hz, sinusoidal waveform, voltage within ±5 percent of nominal, frequency within ±0.5 Hz. This is what utility power normally provides and what commercial appliances are designed for.",
        "Dirty backup-generator power: voltage swings as load changes (generator under-sized or governor poorly tuned), frequency drift (governor regulating wider than 0.5 Hz), harmonic distortion (some generators produce distorted waveforms, especially under load changes), brief over- and under-voltage transients during load steps. Commercial appliances tolerate brief excursions but cumulative exposure causes degradation.",
      ],
    },
    {
      heading: "2. What dirty power does to appliances",
      body: [
        "Compressors: voltage swings stress motor winding insulation. Under-voltage runs increase current draw which heats the windings. Repeated stress over hours of generator runtime ages the insulation faster than steady-state grid operation. Premature compressor failure typically shows up 2 to 12 weeks after the generator event.",
        "Electronic controls: control boards have voltage-regulation circuits that handle small swings, but repeated transients can damage capacitors, voltage regulators, and microcontrollers. Failure shows up as intermittent errors, controller resets, or eventually complete board failure. Time-to-failure: 4 to 16 weeks after the event.",
        "Refrigeration expansion valves and electronic devices: solenoid valves, expansion valves with electronic controls, and similar small electronics are sensitive to voltage spikes during generator load changes. Failure shows up as drift in operation, incorrect operation, or replacement-required failures.",
      ],
    },
    {
      heading: "3. The generator quality matters",
      body: [
        "Diesel generators with proper governors and automatic voltage regulators deliver clean enough power that appliance impact is minimal. Generac, Kohler, Caterpillar commercial-grade gensets in the 30 kW+ range with proper installation generally produce acceptable power quality.",
        "Smaller portable generators (5 to 15 kW units) often produce poor power quality. They're fine for emergency power to a walk-in cooler (a tolerant load) but problematic when powering electronics or multiple loads simultaneously. The generator that handled your residential emergency well may damage your commercial kitchen appliances if used in a hospitality context.",
      ],
    },
    {
      heading: "4. Pre-event preparation — generator maintenance",
      body: [
        "Annual maintenance on the backup generator: oil change, filter changes, coolant check, fuel filter, governor check, automatic voltage regulator check, load-bank test (running the generator at full rated load for 30 minutes to verify capacity and stability). The load-bank test reveals power-quality issues that idle running doesn't.",
        "Most commercial generators get oil-and-filter service annually but skip the load-bank test. Schedule it. Cost: $400 to $800 for a portable load-bank service. The test catches governor drift, AVR drift, and capacity loss before the next storm reveals the issue under actual load.",
      ],
    },
    {
      heading: "5. During-event documentation",
      body: [
        "If you have power monitoring (a Fluke 1748 power quality analyzer or building-mounted monitoring), capture data during the generator run. Voltage, frequency, harmonics over time. This data is the evidence that supports any subsequent insurance claim for appliance damage.",
        "Without continuous monitoring, document the basic facts: generator runtime in hours, peak load percentage, any noticeable lights flickering or appliance behavior anomalies, any audible generator irregularities (engine hunting, governor cycling). These observations become the narrative if appliance damage shows up post-event.",
      ],
    },
    {
      heading: "6. Post-event appliance assessment",
      body: [
        "First week post-event: function check on every electronic-control appliance. Read amperage on every compressor at steady state. Document any displayed error codes from prior month. Identify anything operating outside normal parameters.",
        "Berne Commercial offers post-event assessment as a single service visit covering all kitchen equipment. We document each unit's status, identify any unit showing immediate signs of stress, and create the baseline that supports later claims if delayed-failure damage occurs.",
      ],
    },
    {
      heading: "7. The insurance question — what's typically covered",
      body: [
        "Standard commercial property insurance covers direct damage from a specific covered event (lightning, surge, equipment breakdown). 'Equipment breakdown' coverage is the rider most relevant to appliance damage. Coverage typically includes mechanical breakdown caused by power-quality events but specifically excludes 'wear and tear' and 'gradual deterioration.'",
        "The line between 'covered event damage' and 'gradual wear' is the documentation. With pre-event power-quality records, during-event observation, and post-event diagnostic by a qualified technician, claims for appliance damage caused by generator-quality issues can be supported. Without documentation, claims are usually denied as 'wear and tear.'",
      ],
    },
    {
      heading: "8. Mitigation options",
      body: [
        "Surge protection: panel-mounted surge protectors at the main service entry and at appliance branch circuits reduce the impact of transients. Cost: $400 to $1,200 for whole-building protection. Worthwhile regardless of generator quality.",
        "Power conditioning: for critical electronic loads (ice machine controls, combi oven controls, walk-in cooler controls), a UPS or power conditioner provides a buffer against generator power quality. UPS cost: $300 to $1,200 per asset.",
        "Generator upgrade: if your generator is older or undersized, the upgrade cost ($15,000 to $60,000+ for commercial-grade) is significant but pays back over time on reduced appliance damage and operational uptime. Decision usually triggered by a multiple-asset failure event traced to the generator.",
      ],
    },
    {
      heading: "9. The annual review",
      body: [
        "Once a year, review: generator service history, any power events during the year, any appliance failures with possible connection to power events, insurance coverage adequacy. Adjust as needed. This is part of the annual operations review for hospitality properties with on-site backup power.",
      ],
    },
    {
      heading: "Same-day commercial dispatch",
      body: [
        "Berne Commercial Repair runs post-event diagnostic, generator-coordination service planning, and commercial dispatch across Miami-Dade, Broward, and Palm Beach. $89 commercial service call applied to the approved repair. Call (754) 345-4515 or request through our dispatch page.",
        "For residential appliances that took brownout damage on the same circuit (refrigerators, ovens, dishwashers), [Berne Appliance Repair](https://bernerepair.com) handles the home side of post-storm diagnostics.",
      ],
    },
  ],
  internalLinks: [
    { label: "Restaurants", href: "/industries/restaurants" },
    { label: "Hotels", href: "/industries/hotels" },
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Credentials", href: "/credentials" },
    { label: "Request dispatch", href: "/request-dispatch" },
  ],
  relatedSlugs: [
    "hurricane-season-prep-restaurant-kitchens",
    "restaurant-kitchen-downtime-cost-calculator",
  ],
}

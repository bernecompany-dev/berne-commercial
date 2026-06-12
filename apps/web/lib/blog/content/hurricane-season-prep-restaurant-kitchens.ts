import type { Article } from "../articles"

export const hurricaneSeasonPrepKitchens: Article = {
  slug: "hurricane-season-prep-restaurant-kitchens",
  title:
    "Hurricane Season Prep for Restaurant Kitchens — Power, Food, Equipment",
  description:
    "October is peak Atlantic hurricane month. A 48-hour power outage destroys $8k in walk-in product, kills marginal compressors on restart, and creates insurance-claim documentation work most operators aren't prepared for.",
  publishedAt: "2026-09-21T09:00:00Z",
  readingMinutes: 11,
  category: "Operations",
  tags: [
    "hurricane prep",
    "power outage",
    "food safety",
    "restaurant",
    "Miami",
  ],
  lede: "October is the peak Atlantic hurricane month statistically. Miami restaurants that didn't lose power in September often lose it in October. A 48-hour power outage on a typical 14-asset restaurant kitchen destroys $8,000 to $14,000 in walk-in product, stresses marginal compressors on restart, leaves staff without payroll continuity, and creates insurance-claim documentation work most operators aren't ready for. The prep is straightforward but specific. Done in early October, it pays off the first storm. Done after the storm forms, it's already too late.",
  sections: [
    {
      heading: "1. The 48 to 72 hour outage scenario",
      body: [
        "A Category 1 hurricane track 30 miles offshore typically knocks out grid power for 24 to 72 hours across affected Miami-Dade and Broward zones. FPL prioritizes critical infrastructure (hospitals, water plants, large commercial corridors) on restoration. Independent restaurants in mixed-use neighborhoods often see 36 to 60-hour outages.",
        "What happens during 48 hours without power: walk-in cooler product reaches ambient (mid-80s°F in Miami) within 12 to 18 hours and starts spoiling. Walk-in freezer product holds frozen for 24 to 36 hours if door discipline is maintained, then degrades. Ice melts within 12 hours. Refrigerated prep tables warm within 4 to 6 hours.",
      ],
    },
    {
      heading: "2. Generator strategy — and the realistic options",
      body: [
        "A full whole-building backup generator sized for restaurant load is $30,000 to $80,000 installed and requires a permitting process that takes 4 to 8 weeks. Most independent restaurants don't have one. Realistic alternatives: a portable generator sized to power the walk-in cooler and freezer only (5 to 8 kW, $1,200 to $2,800), plus a transfer-switch panel that can be safely tied into the building electrical ($800 to $1,400 plus install).",
        "Sizing math: a typical 8x10 walk-in cooler with a 2 HP compressor pulls roughly 1,800 to 2,400 watts running, with starting surge to 5,000 watts. A 7,500-watt portable generator handles the walk-in cooler plus the walk-in freezer with margin. Anything beyond that (line equipment, ice machines, kitchen lighting) needs a larger generator and a more permanent installation.",
      ],
    },
    {
      heading: "3. Pre-storm checklist — 72 hours out",
      body: [
        "Top-off propane tanks. Reduce walk-in cooler product inventory — buy as little as possible in the 48 hours before forecast landfall. Move freezer-only product from cooler to freezer if there's space (freezer holds longer). Stock dry ice if possible (limited supply during storm prep). Verify the generator runs (test under load for 15 minutes). Confirm fuel storage is adequate — 5 to 8 gallons of gasoline per 24 hours of generator operation.",
        "Photograph the inventory in each refrigerated unit. Date and time-stamp the photos. This is the insurance-claim documentation if product loss occurs. Most commercial insurance policies require photographic inventory documentation for spoilage claims.",
      ],
    },
    {
      heading: "4. During the storm — the restraint discipline",
      body: [
        "Don't open the walk-in cooler. Each door-open event during a power outage costs hours of holding temperature. If staff needs ice or product, plan one consolidated entry, take everything needed for 24 hours of operation, close the door. Same for the freezer.",
        "Move perishable product out of the walk-in cooler and into rotating ice/dry-ice coolers if the outage is forecast to extend beyond 24 hours. Ice cooler temperatures hold acceptable food-safety temps for 8 to 12 hours and can be replenished more easily than a walk-in once it loses charge.",
      ],
    },
    {
      heading: "5. Post-storm restart — the dangerous moment",
      body: [
        "Grid power returning after a 48 to 72-hour outage stresses commercial refrigeration equipment hard. Every compressor in the kitchen tries to start simultaneously, current draw is much higher than steady-state, and marginal compressors often fail at this moment. We've seen Traulsens, Beverage-Airs, and Trues fail on power restoration after hurricanes — not because of the storm, but because the compressor was already 80 percent worn and the restart current pushed it over.",
        "Restart procedure: power off every refrigerated unit before grid power returns. Once power is back and stable, restart units one at a time with 5 to 10 minutes between each. This staggers the compressor start surge across the kitchen's electrical service and reduces the simultaneous-start stress. Check refrigerant gauges and listen for unusual compressor sound at each restart.",
      ],
    },
    {
      heading: "6. The food-safety triage",
      body: [
        "FDA Food Code 3-501.16: TCS food held above 41°F for more than 4 hours must be discarded. After a multi-hour outage, the math is straightforward — discard, document, file the insurance claim. Don't try to salvage borderline product. The financial risk of a foodborne illness incident dwarfs the cost of replacement inventory.",
        "Document discards: photographs of the product, written log with quantities and estimated value, time-stamped to support the insurance claim. Most commercial policies cover spoilage with a deductible — typical Miami restaurant coverage is $5,000 to $25,000 in spoilage limits per incident with a $500 to $1,500 deductible.",
      ],
    },
    {
      heading: "7. Equipment damage assessment — week of restart",
      body: [
        "First week post-storm, run every refrigerated and cooking asset through a function check. Compressor amperage trending high indicates restart-stress damage. Walk-in temperatures slow to recover indicates capacity loss. Ice production below nominal indicates contaminated water (storm-affected supply lines often have higher sediment for 1 to 2 weeks). Cooking equipment with electronic controls may have lost calibration from power-event surges.",
        "Schedule a service tech for the kitchen audit during the first 7 to 10 days after restart if you have any equipment showing degraded function. Marginal equipment that survived the storm restart often fails within 30 days as the damage progresses. Better to find it scheduled than as a mid-service surprise.",
      ],
    },
    {
      heading: "8. The insurance claim — what we provide",
      body: [
        "Berne Commercial provides documentation for storm-related equipment damage claims: pre-storm function status if we serviced the unit recently, post-storm diagnostic with itemized findings, repair invoice with cause-of-failure narrative connecting damage to the storm event. Insurance adjusters typically require this level of detail to approve equipment damage claims separate from product loss claims.",
        "Lead time matters — call us within 7 to 14 days of restart for the damage assessment. After 30 days the connection to the storm event is harder to establish for insurance purposes.",
      ],
    },
    {
      heading: "9. The multi-property operator question",
      body: [
        "Hospitality groups with multiple Miami properties should have a documented storm-response plan: priority order for generator deployment, mutual-aid arrangements between properties, pre-arranged service contracts with response priorities, and pre-positioned generator fuel. Berne Commercial works with multi-property operators on these arrangements and we maintain priority response queues during storm-impact periods.",
      ],
    },
    {
      heading: "Same-day commercial dispatch",
      body: [
        "Berne Commercial Repair runs storm-response and same-day dispatch across Miami-Dade, Broward, and Palm Beach. Pre-storm equipment audits, post-storm damage assessments, generator coordination, and full diagnostic. $89 commercial service call, free with an approved repair. Call (754) 345-4515 or request through our dispatch page.",
        "Residential premium kitchens face the same hurricane prep checklist — [Berne's premium residential team](https://berne-repair.com) publishes the home-side preparation guidance for Sub-Zero, Wolf, and Viking installs.",
      ],
    },
  ],
  internalLinks: [
    { label: "Restaurants", href: "/industries/restaurants" },
    { label: "Hotels", href: "/industries/hotels" },
    { label: "Grocery", href: "/industries/grocery" },
    { label: "Credentials", href: "/credentials" },
    { label: "Request dispatch", href: "/request-dispatch" },
  ],
  relatedSlugs: [
    "pre-tourist-season-equipment-audit-miami",
    "restaurant-kitchen-downtime-cost-calculator",
  ],
}

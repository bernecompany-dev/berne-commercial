import type { Article } from "../articles"

export const restaurantKitchenDowntimeCalculator: Article = {
  slug: "restaurant-kitchen-downtime-cost-calculator",
  title:
    "Restaurant Kitchen Downtime Cost Calculator + Vendor SLA Template",
  description:
    "When your walk-in goes warm or the line range dies mid-service, the real number isn't the repair bill. It's the lost covers, the food spoilage, and the next-day reservations that don't book. A working operator's calculator.",
  publishedAt: "2026-08-03T09:00:00Z",
  readingMinutes: 11,
  category: "Operations",
  tags: [
    "downtime cost",
    "vendor SLA",
    "operations",
    "restaurant management",
    "food cost",
  ],
  lede: "A South Beach 180-cover Italian restaurant lost a six-burner Vulcan range on a Friday at 6:42 PM. The line ran on two induction burners for the next 90 minutes while the GM rebuilt the menu, the floor team comped 24 entrees, and the kitchen sent 11 tables out the door. The repair was $312 in parts and an hour of labor. The downtime cost was $4,800 in lost covers, $1,200 in comps, and an unknown number of OpenTable reviews that read 'won't be back.' Most operators track the repair invoice. The downtime cost runs 8x to 20x higher and never shows up on a P&L line. This is how to actually calculate it.",
  sections: [
    {
      heading: "1. The four components of true downtime cost",
      body: [
        "Downtime cost has four components and most operators only track one. The first is the direct repair invoice — parts, labor, service-call fee. This is visible and runs $200 to $2,400 per major incident. The second is food spoilage — measured by what's in the affected unit and the time the unit was out of temperature spec. The third is lost revenue — covers that didn't happen during the service window. The fourth is reputation cost — the OpenTable, Google, and Yelp reviews that follow a bad service night.",
        "Component one is on the invoice. Component two is on the inventory sheet if your staff is diligent (most aren't, in the moment). Component three is your average revenue per service hour times the downtime hours. Component four is unbookable in the short term and shows up in your reservation pacing two to four weeks later.",
      ],
    },
    {
      heading: "2. The calculator — line range or fryer failure",
      body: [
        "Cooking equipment downtime during dinner service costs roughly: average check × covers per hour × downtime hours × 0.6 substitution factor. Example: $48 average check, 22 covers per hour, 1.5 hour downtime, 0.6 substitution = $48 × 22 × 1.5 × 0.6 = $950 in lost direct revenue, plus comps for impacted tables (typically 8 to 15 percent of the affected covers).",
        "The 0.6 substitution factor accounts for the percentage of covers you save by switching to other cooking surfaces, sending modified menu items, and pushing tables to delayed service. Without aggressive line management, the factor drops to 0.3 and the loss doubles. Concept: a single 90-minute fryer outage at a 40-table restaurant during peak service is a $900 to $1,400 hit before the repair invoice.",
      ],
    },
    {
      heading: "3. The calculator — walk-in cooler or freezer failure",
      body: [
        "Walk-in failures are different. The product loss curve depends on how long until the unit is out of temperature spec and how packed the box was. A 8x10 walk-in cooler typically holds $1,800 to $3,400 in product. At 41°F+ for 4 hours, USDA Food Safety guidance requires discarding TCS (time/temperature control for safety) foods. A summer Miami walk-in can hit 50°F+ in 90 minutes once the compressor stops.",
        "Calculator: estimated product value × percentage of TCS food × spoilage probability based on hours-over-spec. For a typical Miami restaurant walk-in at $2,500 in product, 75 percent TCS, 4 hours over spec on a Saturday with no emergency service available — the realistic loss is $1,400 to $1,800 plus the repair bill plus the Monday cover loss as the kitchen rebuilds prep.",
      ],
    },
    {
      heading: "4. The reputation cost — the long tail",
      body: [
        "Reputation cost is the number most operators ignore because it doesn't bill until weeks later. A restaurant with a 4.6 Google rating that drops to 4.3 after two bad service nights loses roughly 8 to 12 percent of organic discovery. For a 180-cover restaurant doing $90,000 a week, that's $7,200 to $10,800 in weekly revenue impact, sustained until the rating recovers.",
        "The fix is two-fold: aggressive guest recovery on the impacted night (comp, follow-up call, return invitation) and operational discipline so the bad night doesn't repeat. Both depend on vendor SLA — a tech onsite in under 4 hours during peak service limits the reputation tail to one night. A tech onsite in 11 hours guarantees a multi-day rebuild.",
      ],
    },
    {
      heading: "5. The vendor SLA template — what to actually demand",
      body: [
        "A working SLA for a hospitality client should specify: response time on emergency dispatch (under 4 hours during business hours, under 8 hours after-hours), on-truck parts availability for the most common failures (gaskets, contactors, thermostats, expansion valves), labor rate with overtime clarity, COI minimums ($1M general liability, $1M auto, workers comp), and a documented per-asset service history.",
        "We provide a sample SLA template that operators can use as the starting point for vendor conversations. Key clauses: response-time guarantees with credit-back if missed, OEM parts unless customer approves alternate, post-repair documentation including refrigerant logs (EPA Section 608 compliance), and quarterly preventive visits with a written report.",
      ],
    },
    {
      heading: "6. The math on annual cost — preventive vs reactive",
      body: [
        "A typical 180-cover restaurant runs 14 to 22 commercial assets (walk-in, reach-ins, ice machine, dishwasher, fryers, ranges, oven, mixer, hood). Industry data suggests 2 to 4 major asset failures per year under a reactive model, with average downtime cost (all four components) of $3,200 to $5,800 per major incident. Annual unplanned cost: $6,400 to $23,200.",
        "A preventive maintenance program at $3,600 to $7,200 annually (varies by asset count) cuts major failures by 60 to 75 percent based on multi-year data we've tracked across our hospitality clients. The math: preventive program at $5,000 plus 1 unplanned event at $4,000 totals $9,000 — versus reactive at $14,000 plus the reputation tail. Preventive wins on TCO at scale.",
      ],
    },
    {
      heading: "7. The downtime cost worksheet — use this on every incident",
      body: [
        "Build a one-page incident worksheet for the GM to fill out after every equipment failure. Fields: asset ID, failure start time, failure end time, repair invoice, estimated lost covers, comp total for impacted tables, product loss in dollars, Google/Yelp review impact (if any). Run the numbers monthly. The pattern that emerges identifies which assets are costing you real money versus which assets are just costing you maintenance.",
        "After six months of data, the top-three cost assets get a hard look: replace versus continue repairing. The bottom-half assets get a preventive schedule. We provide this worksheet to clients and walk through the first quarterly review at no charge.",
      ],
    },
    {
      heading: "8. When to call us versus when to call corporate",
      body: [
        "For independent operators, call dispatch direct — Berne Commercial answers and a tech is en route within the response window. For franchise locations with mandated vendor lists, work with your facilities lead to add us as an approved vendor. We carry the COI levels most franchise groups require and we've worked through that approval process with Marriott, Publix, Petco, and similar groups before.",
      ],
    },
    {
      heading: "Same-day commercial dispatch",
      body: [
        "Berne Commercial Repair runs same-day dispatch across Miami-Dade, Broward, and Palm Beach for restaurants, hotels, and hospitality groups. $89 commercial service call applied to the approved repair. COI on file. Service contracts with documented SLA available for multi-asset operators. Call (754) 345-4515 or request a tech through our dispatch page.",
        "Restaurant operators who run premium kitchens at home can route the home-side dispatch to [Berne's premium residential operation](https://berne-repair.com) under the same back-office.",
      ],
    },
  ],
  internalLinks: [
    { label: "Restaurants", href: "/industries/restaurants" },
    { label: "Hotels", href: "/industries/hotels" },
    { label: "Credentials", href: "/credentials" },
    { label: "Commercial refrigeration repair", href: "/services/commercial-refrigeration-repair" },
    { label: "Request dispatch", href: "/request-dispatch" },
  ],
  relatedSlugs: [
    "property-management-multi-unit-refrigeration",
    "commercial-walk-in-cooler-temperature-issues",
  ],
}

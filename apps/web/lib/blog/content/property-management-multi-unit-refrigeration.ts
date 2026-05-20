import type { Article } from "../articles"

export const propertyManagementMultiUnit: Article = {
  slug: "property-management-multi-unit-refrigeration",
  title:
    "Property Management Multi-Unit Refrigeration — Service Contracts vs Per-Call",
  description:
    "Property managers running 8 to 40 commercial refrigeration units across multiple addresses see different total cost between service contracts and per-call work. A field tech's read on the math, the response time, and the documentation.",
  publishedAt: "2026-08-12T09:00:00Z",
  readingMinutes: 9,
  category: "Hospitality",
  tags: [
    "property management",
    "service contract",
    "preventive maintenance",
    "multi-unit",
    "refrigeration",
  ],
  lede: "A property manager for a Coral Gables hotel group calls Berne Commercial after the third compressor failure across four properties in two months. The previous vendor was working per-call. Average response time was 11 hours. Each emergency was a $1,400 to $2,100 ticket. The compliance audit flagged missing maintenance documentation on every refrigeration asset. The PM wants to know what a service contract would actually cost and whether the math works against the current bleed.",
  sections: [
    {
      heading: "1. The per-call cost model and where it hides expense",
      body: [
        "Per-call refrigeration work charges a service-call fee plus parts plus labor at an hourly rate. The hidden expense is response time. A walk-in cooler that goes warm at 4 PM on a Saturday and isn't repaired until Monday morning has lost product, missed service hours, and possibly triggered a DBPR re-inspection. The hourly labor on the actual repair is the smallest piece of the total cost.",
        "We've tracked this with several multi-unit clients. The per-call model averages roughly $4,800 per major refrigeration failure when product loss and service-hour loss are included. A property running 12 commercial refrigeration assets statistically sees 2 to 4 major failures per year. That's $9,600 to $19,200 annually in unplanned cost. Per-call is cheap on paper and expensive in reality.",
      ],
    },
    {
      heading: "2. The service contract structure that works",
      body: [
        "Our property-management contracts are built around three components: a scheduled visit cycle (typically 60 days for coastal, 90 days for inland), a documented asset list with service history per unit, and a priority dispatch commitment (4-hour response within Miami-Dade and Broward for any contract unit). The scheduled visits catch problems before they become emergencies. The priority dispatch caps response time on the failures that still happen.",
        "Pricing scales with asset count and location density. A property with 12 units across two addresses runs roughly $480 to $620 per month. A property with 30 units across five addresses runs $1,100 to $1,400 per month. Both compare against the per-call expense pattern documented above. The break-even for most multi-unit operations is around 6 to 8 refrigeration assets. Below that, per-call is reasonable. Above that, contracts pay for themselves on the first prevented emergency.",
      ],
    },
    {
      heading: "3. Documentation and what the audit team actually wants",
      body: [
        "Corporate compliance audits, insurance reviews, and DBPR inspections all ask the same baseline question: when was each refrigeration asset last serviced and what was found. A property running per-call work answers with stacks of work orders sorted by date, which is incomplete because per-call doesn't generate documentation between failures. A property running a contract has a per-unit service log with quarterly visit notes, temperature readings, and condition assessments.",
        "Our service-management software produces a monthly compliance report keyed to the property's asset list. Each unit has its last-visit date, last-service summary, refrigerant pressure readings, condenser condition, and any flagged items requiring follow-up. The report exports to PDF and goes directly to the PM and to the corporate compliance email. Audit teams are familiar with this format and ask for it by name on properties where we have contracts in place.",
      ],
    },
    {
      heading: "4. Response time and the value of priority dispatch",
      body: [
        "A 4-hour response commitment on a contract isn't free. We staff the trucks and the parts inventory to make it possible. Per-call work goes into the regular queue and responds when a truck is available — Monday morning if the call comes in Saturday afternoon. The 4-hour commitment on contracts means a Saturday-afternoon walk-in failure gets a tech on site before close of business and the food gets saved.",
        "Property managers don't always realize this until they've had a Saturday-night failure. The first emergency that gets resolved in 4 hours instead of 36 hours usually closes the conversation on whether the contract is worth signing. For chains with corporate liability concerns (foodservice insurance carriers have specific clauses on refrigeration-failure response times), priority dispatch is the difference between a documented response and a denied claim.",
      ],
    },
    {
      heading: "5. The asset list and the survey visit",
      body: [
        "Before any contract gets written, we run an asset survey. A tech walks every property, lists every refrigeration unit by make, model, serial, location, and age, photographs the nameplate, reads cabinet and ambient temperatures, and inspects condenser and gasket condition. The survey produces a baseline document that the contract terms reference.",
        "The survey often surfaces equipment the PM didn't know was on the books — a forgotten freezer in a basement storage room, a wine cooler at a property the previous PM acquired, an ice machine that's been broken for six months and ignored. The asset list becomes the documentation foundation for the entire service relationship and for any future capital-replacement planning the PM does.",
      ],
    },
    {
      heading: "6. NSF, FDA, and corporate-audit alignment",
      body: [
        "NSF/ANSI 7 covers commercial refrigeration. FDA Food Code requires food-temperature documentation, which depends on the refrigeration documentation maintained by the property. DBPR food-service inspections ask the manager when the last refrigeration service was performed; an answer of 'I don't know' is functionally a violation under sanitation-program documentation requirements.",
        "Hotel chains, restaurant groups, and senior-living facility chains all run corporate audits with refrigeration-service documentation requirements. A contract relationship with a single vendor consolidates the audit response. Per-call relationships with multiple vendors produce fragmented records that audit teams have to reconstruct, which is when problems get found and fines get assessed.",
      ],
    },
    {
      heading: "7. Capital planning and end-of-life forecasting",
      body: [
        "Service contracts produce a side benefit that per-call work doesn't: a per-unit history that supports capital-replacement forecasting. After 18 months of contract documentation, the PM has compressor-runtime data, refrigerant-pressure trends, and gasket-replacement history per unit. That data feeds into a capital-replacement schedule projecting which units will need replacement in the next 24 months, 36 months, and 60 months.",
        "A PM running a $2 million property portfolio with 40 refrigeration assets can budget capital expenditures on a 5-year horizon instead of reacting when units fail. The board or owner gets a forecast instead of an emergency. Insurance carriers and lenders both prefer documented maintenance and forecasting over reactive spending. The contract-driven documentation is the foundation for all of that planning.",
      ],
    },
    {
      heading: "8. Calling for a survey and contract quote",
      body: [
        "When you call Berne Commercial at (754) 345-4515 about a property-management service contract, ask for the survey appointment. The survey itself is at no cost for properties with 8 or more refrigeration assets. The survey takes 2 to 4 hours depending on property size and produces a written asset list plus a contract proposal within 5 business days.",
        "Per-call work still runs at our $89 commercial service call for properties that aren't ready for a contract. Most clients move to contract structure within 6 to 12 months of starting per-call work, usually after the first prevented emergency. For property management firms with mixed commercial and residential assets (executive housing, employee dormitories, condo-board common spaces), our sister site bernerepair.com runs the residential side and we coordinate documentation across both books.",
      ],
    },
  ],
  internalLinks: [
    { label: "Commercial refrigeration repair", href: "/services/commercial-refrigeration-repair" },
    { label: "Walk-in cooler repair", href: "/services/walk-in-cooler-repair" },
    { label: "Reach-in cooler repair", href: "/services/reach-in-cooler-repair" },
    { label: "Ice machine repair", href: "/services/ice-machine-repair" },
  ],
  relatedSlugs: [
    "hotel-banquet-refrigeration-service",
    "true-refrigeration-door-gasket-replacement",
  ],
}

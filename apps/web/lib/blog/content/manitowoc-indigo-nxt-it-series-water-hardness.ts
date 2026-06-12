import type { Article } from "../articles"

export const manitowocIndigoNxtIt: Article = {
  slug: "manitowoc-indigo-nxt-it-series-water-hardness",
  title:
    "Manitowoc Indigo NXT IT Series — Floridian Water Hardness Scale",
  description:
    "Miami municipal water runs 200 to 280 ppm hardness. Manitowoc Indigo NXT IT-series ice machines descale by AuCS automatic cleaning, but that doesn't reach the water-distribution tube and the float assembly. A field tech's interval map.",
  publishedAt: "2026-09-07T09:00:00Z",
  readingMinutes: 10,
  category: "Commercial Refrigeration",
  tags: [
    "Manitowoc",
    "Indigo NXT",
    "ice machine",
    "water hardness",
    "scale",
  ],
  lede: "A Coral Gables sushi restaurant runs a Manitowoc Indigo NXT IT-0500A ice machine on raw Miami municipal water. AuCS automatic cleaning runs nightly. By month 7 the production dropped from the nameplate 470 pounds per day to 312, the cycle time stretched from 24 minutes to 38, and the bin-fill alarms went silent for hours at a time. The AuCS cleaning had been running on schedule. The problem was scale — but not where the AuCS reaches. The water distribution tube, the float, and the inlet solenoid were all carrying calcium scale that AuCS doesn't touch. Here's the working interval and the manual procedure that AuCS doesn't cover.",
  sections: [
    {
      heading: "1. The Indigo NXT IT — what's in the box",
      body: [
        "The Manitowoc Indigo NXT IT-0500A, IT-0620A, and IT-0900A are the half-dice cube models in the 500 to 900 pound/day production range, dominant in mid-size restaurants and bars across South Florida. They use a horizontal-evaporator harvest system with a recirculating water pump, a water distribution tube that sprays water across the evaporator, and a freeze-and-harvest cycle controlled by Manitowoc's QuietQube electronics.",
        "The AuCS (Automatic Cleaning System) circulates a measured dose of Nu-Calgon Nickel-Safe ice machine cleaner through the water system on a programmable schedule (typically weekly or biweekly). AuCS is good — it reduces manual cleaning labor and extends component life — but it has limits. The cleaner concentration during AuCS is below the manual-clean dose and the contact time is shorter. AuCS slows scale accumulation. It does not prevent it.",
      ],
    },
    {
      heading: "2. What Florida water actually does",
      body: [
        "Miami-Dade municipal water averages 220 to 260 ppm total hardness measured as calcium carbonate. Broward County north of I-595 runs slightly higher, 240 to 290 ppm. Palm Beach County varies by service area, 180 to 280 ppm. By comparison, hard-water threshold is 120 ppm. Florida's coastal aquifer water is consistently in the very hard range.",
        "On an Indigo NXT IT producing 500 pounds of ice per day, the unit processes roughly 60 gallons of water daily. At 240 ppm hardness, that's about 0.12 pounds of calcium per day deposited as the water freezes and recirculates. Most of it goes out with the ice. The fraction that doesn't — the residual that builds on the distribution tube, the float chamber, the inlet valves, and the evaporator surface — accumulates measurably within weeks.",
      ],
    },
    {
      heading: "3. Where AuCS does and doesn't reach",
      body: [
        "AuCS circulates cleaner through the sump, the pump, the water distribution tube, and across the evaporator surface. It does a good job on the recirculating-water surfaces. It does not reach: the incoming water solenoid valve (cleaner is downstream of it), the float chamber on the cold-water inlet line (cleaner is recirculated, not flushed through), the condensate water line, or the bin float assembly. Each of these scales over time and produces specific symptoms.",
        "Scaled inlet solenoid: slow water fill, extended freeze cycles. Scaled float chamber: water level drift, harvest cycle errors. Scaled bin float: false 'bin full' alarms that shut production prematurely. Each of these needs manual descaling — AuCS won't touch them.",
      ],
    },
    {
      heading: "4. The interval map — by water profile",
      body: [
        "Raw municipal water (no softener): full manual descaling every 90 days, in addition to weekly AuCS. Water-treated installation (RO or softener, sub-80 ppm output): every 180 days. Water-treated to under 30 ppm: every 365 days. AuCS schedule stays weekly regardless of water profile.",
        "These intervals assume a typical 50 to 80 percent production load. Higher production load (heavily-used unit running 90+ percent of nameplate) compresses the interval by 25 percent. Lower production extends it. Mark the date on the unit at every cleaning so the next tech doesn't have to guess.",
      ],
    },
    {
      heading: "5. The manual descaling procedure",
      body: [
        "Power off, water off. Remove the front panel and the evaporator splash curtain. Pull the water distribution tube — on the Indigo NXT it lifts out after releasing two clips. Inspect for scale: a clean tube is bright stainless; a scaled tube shows white-grey crystalline deposits in the spray holes. Soak in Nu-Calgon Nickel-Safe (40 percent solution) for 20 minutes, rinse, reinstall.",
        "Pull the float chamber cover and inspect the float and the chamber walls. Scale here is the leading cause of mid-cycle water-level errors. Soak the float and chamber in cleaner solution. Inspect the inlet solenoid valve — if water flow is slow, the valve is the cause and either needs cleaning or replacement.",
      ],
    },
    {
      heading: "6. Water filtration — when it pays for itself",
      body: [
        "A 3M HF20-S or equivalent ice machine water filter cuts scale and chlorine, extends component life, and reduces manual cleaning frequency. The cartridge runs $90 to $140 and lasts 6 months on typical production. Compare to manual descaling labor (about $180 every 90 days without filtration, or $90 every 180 days with filtration). Filtration pays back in year one on the labor savings alone.",
        "For very hard water or for premium ice quality (sushi, premium spirits service), a full RO system upstream of the ice machine makes sense. RO systems install at $1,800 to $3,400 and produce sub-30-ppm water indefinitely with cartridge changes every 12 months. Production goes up on RO-fed ice machines because the freeze cycle is faster on cleaner water.",
      ],
    },
    {
      heading: "7. Health code — slime, biofilm, and ice safety",
      body: [
        "FDA Food Code treats ice as food. Ice machines must be cleaned and sanitized on a documented schedule. The Florida DBPR inspector will ask for the cleaning log and will pull samples from the bin if there's visible slime or off-color ice. The AuCS log plus the manual cleaning record satisfies the documentation requirement.",
        "Pink slime (Serratia marcescens) is the most common bin contamination in South Florida — humidity drives it. Manual cleaning every 90 days with a sanitizer like Manitowoc's Mn-Safe or equivalent handles it. AuCS alone doesn't reach the bin interior or the bin door seal.",
      ],
    },
    {
      heading: "8. When to call us versus DIY",
      body: [
        "Weekly AuCS cycles, periodic external cleaning, and basic descaling can be handled by a competent kitchen team. Full quarterly descaling, water-distribution tube service, and bin-system cleaning are bench-tech work and worth contracting. Anything involving refrigerant — superheat checks, leak repair, compressor work — requires EPA 608 certification and is not in scope for kitchen staff.",
        "Berne Commercial techs are Universal 608 certified and we keep Indigo NXT high-wear parts on the truck: water-distribution tubes, inlet solenoids, float assemblies, harvest probes. Same-day service on scheduled descaling and emergency dispatch on production loss.",
      ],
    },
    {
      heading: "Same-day Manitowoc service",
      body: [
        "Berne Commercial Repair services Manitowoc Indigo NXT IT, ID, IY, IB and the NEO series across Miami-Dade, Broward, and Palm Beach. Descaling, AuCS programming, water system service, and full refrigeration diagnostic. $89 commercial service call — waived when you approve the repair. Call (754) 345-4515 or request through our ice machine repair page.",
        "For residential ice makers facing the same South Florida water hardness profile (Sub-Zero ice columns, U-Line), [Berne's premium residential team](https://berne-repair.com) covers home-side scale management.",
      ],
    },
  ],
  internalLinks: [
    { label: "Ice machine repair", href: "/services/ice-machine-repair" },
    { label: "Manitowoc repair", href: "/brands/manitowoc" },
    { label: "Restaurants", href: "/industries/restaurants" },
    { label: "Hotels", href: "/industries/hotels" },
    { label: "Request dispatch", href: "/request-dispatch" },
  ],
  relatedSlugs: [
    "ice-machine-not-making-ice-restaurant",
    "hoshizaki-vs-manitowoc-vs-scotsman-south-florida",
  ],
}

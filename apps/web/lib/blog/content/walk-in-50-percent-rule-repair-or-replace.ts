import type { Article } from "../articles"

export const walkIn50PercentRule: Article = {
  slug: "walk-in-50-percent-rule-repair-or-replace",
  title:
    "The 50% Rule Is Wrong for Walk-Ins: Repair-or-Replace Math With Real South Florida Ticket Data",
  description:
    "The '50% rule' says replace when the repair costs half of new. Applied to walk-in coolers it gives the wrong answer in both directions — because a walk-in is two assets with two lifespans. The math, with real numbers.",
  publishedAt: "2026-06-23T09:00:00Z",
  readingMinutes: 8,
  category: "Operations",
  tags: [
    "walk-in cooler",
    "repair or replace",
    "50% rule",
    "equipment economics",
    "refrigeration",
  ],
  lede: "The quote arrives: $3,800 to replace the dead condensing unit on your twelve-year-old walk-in. Someone — usually the company that also sells walk-ins — points out that's 'almost half the cost of a new box' and invokes the 50% rule. Here is what that rule misses: the box and the refrigeration system are different assets with different lifespans, and our ticket data says the operators who learn that distinction save five figures per decision. We wrote a full decision guide on this; this post is the short version with the numbers up front.",
  sections: [
    {
      heading: "1. Where the 50% rule comes from — and why it fails here",
      body: [
        "The 50% rule is a fine heuristic for single-asset equipment: when a repair on an old reach-in or fryer costs half of new, replacement usually wins because every component is on the same aging clock. National service chains generalized it into a universal rule because it is easy to apply and — not incidentally — it sells equipment.",
        "A walk-in breaks the rule's core assumption. The insulated box (panels, door, floor) is a 20-30 year asset. The refrigeration system bolted to it (compressor, condenser, evaporator) is a 10-15 year asset that can be replaced in a day without touching the box. Comparing one repair quote against the whole-box replacement price compares assets on different clocks — which is why it errs in both directions.",
      ],
    },
    {
      heading: "2. The real numbers from our tickets",
      body: [
        "Routine walk-in repairs: door gaskets and sweeps $150-$350; defrost timers and heaters $250-$600; evaporator fan motors $200-$450; refrigerant leak repair and recharge $400-$1,200. Major mechanical: full condensing-unit replacement $2,500-$4,500 installed; evaporator coil $1,400-$2,600. Replacement: a typical 8x10 walk-in cooler runs $8,000-$15,000 installed, and demolition, slab, drain, and electrical work routinely add 30-60% on real South Florida projects.",
        "Run the 50% rule naively and a $4,000 condensing-unit replacement against an $8,000 panel quote says 'replace.' But that $4,000 buys 10-15 years of mechanical life on a box that already has 15 good years left — while the $12,000+ all-in replacement buys the same cooling plus panels you didn't need. Cost per remaining year, not quote versus quote, is the comparison that matters.",
      ],
    },
    {
      heading: "3. When repair wins (most of the time)",
      body: [
        "Dry, tight panels under 15 years old make almost any mechanical repair worth it. The textbook case: dead compressor, sound box → condensing-unit swap, one day of downtime with product in rental refrigeration, mechanical clock reset to zero for 30% of replacement money. We routinely service 25-year-old walk-ins running their second or third refrigeration system on original panels.",
        "Repair also wins on the downtime ledger: a system swap is a same-day or next-day job, while replacement means one to three weeks of demolition, assembly, inspection timing, and rental refrigeration trailers at $800-$2,500 per week — in an operating kitchen, the disruption cost can exceed the equipment delta by itself.",
      ],
    },
    {
      heading: "4. When replacement wins (and the box tells you)",
      body: [
        "The envelope decides it. Waterlogged panels (heavy walls that sweat or sag), a floor going soft under the racks, persistent ice ridges at the seams, a door that no longer squares, foam smell inside — that is failed insulation, and wet insulation never dries. A new system on a failed envelope runs continuously against heat infiltration, power bills climb 20-40%, and the new compressor ages at double speed: you pay for the repair AND the replacement within three years.",
        "The other replacement trigger is serial failure: three or more mechanical tickets in twelve months on a 12+ year system is a system dying in installments — stop paying per-incident. And R-22 systems with recurring leaks face $90-$150/lb refrigerant economics; one leak repair can be justified, the second funds a conversion or replacement instead.",
      ],
    },
    {
      heading: "5. The two-question test",
      body: [
        "Question one: are the panels sound? (Dry, tight seams, solid floor, square door — we assess this on every major walk-in diagnosis, included in the $89 service call.) Question two: what does each path cost per remaining year? A $4,000 system on a sound box ≈ $300-$400/year over its mechanical life. A $13,000 all-in replacement ≈ $500-$650/year over 25 years — worthwhile when the envelope is failing, waste when it isn't.",
        "Decide before the emergency. A panel assessment during annual maintenance costs nothing extra and converts the eventual decision from a 2 a.m. panic into a planned, off-season capital item — better pricing, better contractor availability, and a box specified for what your kitchen actually needs. The full framework, including buyer profiles for every scenario, is in our [walk-in repair-or-replace decision guide](/compare/walk-in-cooler-repair-or-replace).",
      ],
    },
    {
      heading: "Walk-in diagnostics with both numbers, honestly",
      body: [
        "Berne Commercial Repair services walk-in coolers and freezers daily across Miami-Dade, Broward, and Palm Beach. The $89 commercial service call covers the system diagnosis plus the panel assessment, with the repair quote and replacement math side by side — we make our living on repairs, and we will still tell you when a box is not worth our own invoice. Call (754) 345-4515 or request dispatch through our [walk-in cooler repair](/services/walk-in-cooler-repair) page.",
      ],
    },
  ],
  internalLinks: [
    { label: "Walk-in cooler: repair or replace (full guide)", href: "/compare/walk-in-cooler-repair-or-replace" },
    { label: "Walk-in cooler repair", href: "/services/walk-in-cooler-repair" },
    { label: "Walk-in freezer repair", href: "/services/walk-in-freezer-repair" },
    { label: "Kitchen downtime cost calculator", href: "/blog/restaurant-kitchen-downtime-cost-calculator" },
  ],
  relatedSlugs: [
    "walk-in-cooler-temperature-drift-call-or-wait",
    "restaurant-kitchen-downtime-cost-calculator",
  ],
}

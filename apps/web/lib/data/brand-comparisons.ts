/**
 * Commercial brand comparison data — content layer for /compare/[slug] pages.
 *
 * Long-form, balanced operator-decision content targeting "X vs Y" search
 * intent on commercial equipment ("Hobart vs Vulcan ranges",
 * "Manitowoc vs Hoshizaki ice machines", etc.).
 *
 * Voice: factory-trained service-tech voice. We repair every brand we
 * compare, so the comparisons are balanced — buyers trust a service shop
 * that does not pick favorites in marketing. Google rewards balanced
 * comparison content.
 *
 * Sizing target: 1500-2000+ words per comparison across intro, brands.about,
 * strengths, failureModes, buyerProfiles, ownership, bernePerspective, faqs.
 *
 * Wave-2 profiles (pairwise combi split + 8 new topics, 2026-06-10) live in
 * ./brand-comparisons-wave2.ts and are merged into the registry below.
 */

import { WAVE2_COMPARISONS } from "./brand-comparisons-wave2"

export type ComparisonBrand = {
  name: string
  /** Brand HQ / country — surfaces in Brand JSON-LD */
  hq?: string
  /** /brands/<slug> on this site, if we have a brand page */
  brandSlug?: string
  /** ~200 word brand summary */
  about: string
  /** 4-7 concrete strengths */
  strengths: { title: string; detail: string }[]
  /** Common failure modes from real tickets */
  failureModes: { title: string; detail: string }[]
  /** Parts/service economics summary */
  ownership: string
}

export type BuyerProfile = {
  /** "If you prioritize X" headline */
  headline: string
  /** Brand recommendation + reasoning */
  recommendation: string
}

export type ComparisonProfile = {
  slug: string
  /** H1 — full comparison headline */
  h1: string
  /** Meta title (≤60 chars target) */
  metaTitle: string
  /** Meta description (≤155 chars target) */
  metaDescription: string
  /** Short hero teaser */
  teaser: string
  /** 2-3 paragraph intro */
  intro: string
  /** TL;DR — 3-5 bullet verdict lines */
  tldr: string[]
  /** 2 or 3 brands being compared */
  brands: ComparisonBrand[]
  /** Buyer profiles — who picks which */
  buyerProfiles: BuyerProfile[]
  /** Cost-of-ownership notes across the comparison */
  ownershipNotes: string
  /** Berne's neutral-party perspective */
  bernePerspective: string
  /** 5-7 FAQ entries — using {q, a} to match site convention */
  faqs: { q: string; a: string }[]
  /**
   * ISO yyyy-mm-dd. Feeds Article datePublished (freshness signal on the
   * site's strongest organic earners) + honest sitemap lastmod.
   */
  datePublished: string
  /** ISO yyyy-mm-dd — set when content is materially revised. */
  dateModified?: string
  /**
   * Preferred cross-links for the "More comparisons" block. Lets the
   * rational-vs-combi umbrella act as a category hub pointing at its
   * pairwise children (and vice versa). Falls back to registry order.
   */
  related?: string[]
  /**
   * Decision guides ("repair or replace") compare options, not brands —
   * suppresses the Brand JSON-LD nodes that would otherwise be emitted.
   */
  isDecisionGuide?: boolean
}

// ---------------------------------------------------------------------------
// 1. Hobart vs Vulcan — commercial ranges
// ---------------------------------------------------------------------------

const HOBART_VS_VULCAN_RANGES: ComparisonProfile = {
  slug: "hobart-vs-vulcan-ranges",
  datePublished: "2026-05-18",
  dateModified: "2026-06-10",
  related: [
    "frymaster-vs-pitco-fryers",
    "rational-vs-combi",
    "true-vs-traulsen-refrigeration",
    "manitowoc-vs-hoshizaki-ice",
  ],
  h1: "Hobart vs Vulcan — Which Commercial Range Is Better for Your Kitchen?",
  // CTR pass 2026-06-11 — hook added, 47ch + " · Berne" suffix = 55 ≤ 60.
  metaTitle: "Hobart vs Vulcan Commercial Ranges: Which Wins?",
  metaDescription:
    "Hobart vs Vulcan commercial ranges compared by South Florida service techs. Burner output, oven design, parts ecosystem, real-world reliability on the line.",
  teaser:
    "Both Hobart and Vulcan are ITW Food Equipment Group brands — sister companies sharing a parts network — but the ranges are engineered differently. Vulcan is the volume commercial-range platform; Hobart cooking equipment is rarer in restaurants. Here is what we see in South Florida kitchens.",
  intro:
    "Vulcan ranges are everywhere in South Florida restaurants — they are the dominant commercial range platform in independent restaurants, hotel banquet kitchens, and country club back-of-house. Hobart, meanwhile, is best known for ware-washing (AM-15, CL44), mixers (A-200, HL662), and slicers (1612, 2812) — but the parent company ITW Food Equipment Group also sells a smaller cooking-equipment line that overlaps with Vulcan in some restaurant accounts.\n\nFor most operators choosing between the two, the real comparison is Vulcan vs Garland or Vulcan vs Wolf, because Hobart-branded ranges are uncommon. But for the operators who do have a choice — typically when both brands are presented through the same ITW dealer — there are meaningful differences. Berne services both daily across Miami-Dade, Broward, and Palm Beach. The comparison below is built from real field tickets, not catalog copy.\n\nThe short version: Vulcan is the safer commercial-range choice — broader parts network, stronger field-service ecosystem, more conservative engineering. Hobart cooking equipment is well-built but harder to source parts for in secondary markets. If both are available at competitive pricing, we lean Vulcan.",
  tldr: [
    "Vulcan wins on parts ecosystem — dominant commercial-range platform with the broadest dealer network and fastest South Florida parts arrival.",
    "Hobart cooking equipment is well-built but has thinner parts inventory in regional markets; expect 5-10 day waits on some components.",
    "Both are ITW Food Equipment Group — share the same parent and some sub-components, but field-service economics favor Vulcan.",
    "Vulcan VR Series ranges deliver 30,000 BTU on open burners; Hobart cooking platform is closer to 25,000 BTU on comparable burners.",
    "Operator decision is usually \"Vulcan vs Garland\" not \"Hobart vs Vulcan\" — Hobart's strength is ware-washing and food prep, not cooking.",
  ],
  brands: [
    {
      name: "Vulcan",
      hq: "Baltimore, Maryland (ITW Food Equipment Group)",
      brandSlug: "vulcan",
      about:
        "Vulcan is the dominant commercial-range brand in North America — owned by ITW Food Equipment Group (parent of Hobart, Traulsen, Berkel, Bonnet, and others) and manufactured at facilities in Baltimore, Maryland and other US locations. The brand builds open-burner and sealed-burner ranges, salamander broilers, charbroilers, griddles, fryers, and a full line of commercial cooking equipment. The VR Series and Endurance Series ranges are the volume products that show up in independent restaurants, hotel banquet kitchens, and institutional foodservice across South Florida. Vulcan's strengths are conservative engineering, broad parts availability, and a dense dealer network that means most service issues can be resolved within 48 hours regardless of market.",
      strengths: [
        {
          title: "30,000 BTU open burners (VR Series)",
          detail:
            "The VR Series open burners are rated 30,000 BTU each — higher than the residential Wolf 20,000 BTU dedicated power burner and high enough for serious wok cooking, deep-pan searing, and high-volume sauté. Vulcan ovens hold setpoint reliably and the burner-to-oven heat transfer is well-managed.",
        },
        {
          title: "Dominant commercial parts ecosystem",
          detail:
            "Vulcan parts move through the ITW commercial network with overnight availability in South Florida from Marcone and Reliable Parts. We routinely keep common Vulcan parts (igniters, thermocouples, oven safety valves, burner ring sets) on the truck — meaning most service calls resolve same-day.",
        },
        {
          title: "Endurance Series longevity",
          detail:
            "The Endurance Series is built for 20-year duty cycles in heavy commercial use. We see 1998-2005 Endurance ranges in operating South Florida restaurants today — most have had only routine maintenance (igniter, gas valve, oven thermostat) over two decades.",
        },
        {
          title: "Strong dealer support for warranty + post-warranty work",
          detail:
            "Vulcan's dealer network in South Florida is dense — every major foodservice dealer carries the brand and the warranty-claim process is straightforward. Post-warranty, Berne can source parts from any of three regional distribution warehouses.",
        },
      ],
      failureModes: [
        {
          title: "Pilot ignition failures on VR Series",
          detail:
            "Most common Vulcan range ticket — pilot thermocouple loses signal and the gas safety valve closes. Thermocouple is $30-$50 and a 25-minute swap. We carry these on the truck.",
        },
        {
          title: "Oven thermostat drift",
          detail:
            "After 8-12 years, the mechanical oven thermostat drifts 15-30F from setpoint. Operators notice baked items running over or under. Thermostat replacement is $180-$260 and a 45-minute job.",
        },
        {
          title: "Burner ring corrosion in coastal kitchens",
          detail:
            "Salt-air corrosion on the cast iron burner ring sets in coastal Miami-Dade kitchens — most visible 5-7 years in. Ring set replacement is $120-$180 per burner. Annual deep-clean prevents the worst.",
        },
        {
          title: "Spark module failures",
          detail:
            "On electric-ignition VR variants, the spark module develops continuous-clicking failures from shorted ignition switches. Module is $180-$240, swap is 30 minutes.",
        },
      ],
      ownership:
        "Vulcan parts arrive within 24-48 hours through the ITW commercial parts network. Out-of-warranty service averages $280-$520 on common tickets; major sealed-component work (e.g., oven cavity, full burner box replacement) lands $900-$1,800. Total 15-year ownership cost on a typical 6-burner VR range with daily commercial use is $4,800-$7,200 in service.",
    },
    {
      name: "Hobart (cooking equipment)",
      hq: "Troy, Ohio (ITW Food Equipment Group)",
      brandSlug: "hobart",
      about:
        "Hobart is the dominant North-American manufacturer of commercial ware-washing equipment (AM-15, CL44, FT-1000), planetary mixers (A-200, HL662), and food slicers (1612, 2812) — and a much smaller player in commercial cooking equipment under the same ITW Food Equipment Group umbrella. The Hobart cooking line shares some engineering disciplines with Vulcan (same parent, some shared sub-components) but is targeted more at institutional and specialty foodservice rather than the mainstream restaurant range market. In South Florida, we see Hobart cooking equipment primarily in hospital cafeterias, hotel back-of-house, and a few institutional accounts. Restaurant ranges are almost exclusively Vulcan, Garland, Wolf, or Imperial.",
      strengths: [
        {
          title: "Strong build quality (heavy steel construction)",
          detail:
            "Hobart cooking equipment is built with thicker steel than typical commercial ranges — the visible weight and the feel of the doors / drawers is closer to industrial than to typical foodservice. For institutional accounts that expect 20-year service life, that matters.",
        },
        {
          title: "Shared ITW parts with Vulcan",
          detail:
            "Some sub-components (thermostats, gas safety valves, ignition switches) are shared across the ITW commercial brand family. When Vulcan-specific parts are stocked, they often work on Hobart cooking equipment.",
        },
        {
          title: "Strong service network for ware-washing and food prep",
          detail:
            "If your kitchen is already a Hobart account (dishmachines, mixers, slicers), bringing the cooking equipment under the same service umbrella simplifies the vendor relationship.",
        },
        {
          title: "Institutional warranty terms",
          detail:
            "Hobart's institutional warranty (when sold through institutional channels) often includes 5-year sealed component coverage — longer than typical restaurant-channel sales of Vulcan.",
        },
      ],
      failureModes: [
        {
          title: "Parts sourcing delays in secondary markets",
          detail:
            "The single biggest issue with Hobart cooking equipment in South Florida is parts availability — components that are commodity on Vulcan can take 5-10 days to source on Hobart cooking. For an operating restaurant, that downtime is a real cost.",
        },
        {
          title: "Pilot thermocouple failures",
          detail:
            "Standard commercial-range failure mode — same as Vulcan. Thermocouple $30-$60, 25-minute job, but the part may not be stocked locally.",
        },
        {
          title: "Oven door hinge wear",
          detail:
            "Heavier doors put more load on the hinges over a 15-year horizon. Hinge replacement $220-$340 the pair.",
        },
        {
          title: "Electronic control board obsolescence",
          detail:
            "On Hobart cooking platforms built 2008-2014, the electronic control boards are gradually being phased out by ITW. We have had to source aftermarket boards in 2024-2025 for 12-year-old Hobart cooking units.",
        },
      ],
      ownership:
        "Hobart cooking equipment parts often require special-order from ITW, with 5-10 day lead times in South Florida. Out-of-warranty service averages $320-$580 on common tickets — comparable to Vulcan per-ticket but higher total ownership cost driven by extended downtime when parts are not immediately available.",
    },
  ],
  buyerProfiles: [
    {
      headline: "Independent restaurant or volume foodservice",
      recommendation:
        "Vulcan. The parts ecosystem and the dealer network alone justify the choice — when (not if) you need a part fast, Vulcan delivers in 24-48 hours. Hobart cooking equipment can leave you waiting 5-10 days.",
    },
    {
      headline: "Institutional account (hospital, school, large hotel)",
      recommendation:
        "Either works; lean Hobart if you already have a Hobart relationship for ware-washing and mixing. Vendor consolidation simplifies the service relationship and procurement is often easier through institutional channels.",
    },
    {
      headline: "High-volume cooking line (steakhouse, wok station)",
      recommendation:
        "Vulcan VR Series with 30,000 BTU open burners. Hobart cooking platform tops out lower on BTU and the parts delay risk is unacceptable on a high-volume line.",
    },
    {
      headline: "Country club or banquet kitchen",
      recommendation:
        "Vulcan Endurance Series for the 20-year duty cycle. Country club kitchens run heavy three months a year and light nine months — the Endurance Series handles that cycle better than any Hobart cooking platform.",
    },
    {
      headline: "Boutique restaurant with chef-driven cuisine",
      recommendation:
        "Neither — go Wolf, Garland, or Blue Star commercial. The Hobart vs Vulcan comparison is mostly a vendor-economics decision; for chef-driven kitchens, the choice should be driven by cooking style, not parts ecosystem.",
    },
  ],
  ownershipNotes:
    "Both Hobart and Vulcan qualify for the Berne $89 commercial service-call fee. Vulcan service tickets resolve faster (parts in stock locally on most common items); Hobart cooking equipment tickets often require special-order parts. Over a 15-year horizon, the per-ticket cost is comparable but Vulcan total ownership cost is meaningfully lower because of less downtime. For an operating restaurant, every day a range is down costs $800-$2,500 in lost revenue — that compounds the Vulcan advantage significantly.",
  bernePerspective:
    "If a client asks us between Hobart cooking equipment and Vulcan for a new South Florida restaurant build, we recommend Vulcan every time. The parts ecosystem alone justifies the choice. Hobart's real strength is in ware-washing (their AM-15 and CL44 dishmachines are best-in-class), mixing (A-200, HL662), and slicing (1612, 2812). For cooking equipment, Vulcan is the established commercial choice and Hobart is the also-ran. We service both daily — this is a balanced observation, not a brand-bias.",
  faqs: [
    {
      q: "Is Hobart actually a major commercial range brand?",
      a: "No. Hobart is the dominant commercial ware-washing, mixing, and slicing brand — those are the products that define the brand. Hobart-branded commercial ranges exist but represent a small share of the commercial range market in South Florida. Vulcan, Garland, Wolf, and Imperial dominate restaurant ranges.",
    },
    {
      q: "Are Hobart and Vulcan parts interchangeable?",
      a: "Some sub-components are shared (both are ITW Food Equipment Group brands) — thermostats, gas safety valves, and ignition switches sometimes cross over. But the major assemblies (burner boxes, oven cavities, control panels) are not interchangeable. Always order to the specific model.",
    },
    {
      q: "Which has better warranty?",
      a: "On standard channel sales, both offer 1-year full + 1-year limited warranty. Institutional channel sales of Hobart cooking equipment sometimes include 5-year sealed coverage; we don't see that on standard restaurant-channel sales of either brand.",
    },
    {
      q: "What's the typical service-call cost for either brand?",
      a: "Berne charges $89 for the commercial service call across both brands — free if you approve the repair, charged only if you decline. Out-of-warranty repair on common tickets runs $280-$520 on Vulcan and $320-$580 on Hobart cooking equipment — slightly higher on Hobart due to parts sourcing.",
    },
    {
      q: "Can Berne service both in South Florida?",
      a: "Yes — daily across Miami-Dade, Broward, and Palm Beach. We carry common Vulcan parts on the truck and source Hobart cooking parts from ITW's regional distribution. Same-day dispatch typical.",
    },
    {
      q: "Which is better for a high-BTU wok station?",
      a: "Vulcan VR Series — the 30,000 BTU open burners are the right tool. Hobart cooking platform tops out lower and the parts-delay risk on a high-volume line is unacceptable.",
    },
    {
      q: "Should I keep my Hobart cooking equipment or switch to Vulcan?",
      a: "If your existing Hobart cooking equipment is under 8 years old and running well, keep it. Beyond 12 years, plan for the next replacement to be Vulcan unless you have a specific Hobart relationship that demands consolidation.",
    },
  ],
}

// ---------------------------------------------------------------------------
// 2. Manitowoc vs Hoshizaki — commercial ice machines
// ---------------------------------------------------------------------------

const MANITOWOC_VS_HOSHIZAKI: ComparisonProfile = {
  slug: "manitowoc-vs-hoshizaki-ice",
  datePublished: "2026-05-18",
  dateModified: "2026-06-10",
  related: [
    "hoshizaki-vs-scotsman-ice",
    "true-vs-traulsen-refrigeration",
    "true-vs-turbo-air",
    "walk-in-cooler-repair-or-replace",
  ],
  h1: "Manitowoc vs Hoshizaki — Which Commercial Ice Machine Is Better?",
  metaTitle: "Manitowoc vs Hoshizaki Ice Machines",
  metaDescription:
    "Manitowoc vs Hoshizaki commercial ice machines compared by South Florida service techs. Production rate, ice quality, reliability, parts costs.",
  teaser:
    "Two ice-machine brands dominate North American commercial kitchens — Manitowoc and Hoshizaki. Each builds excellent equipment, but the ice shapes, the cleaning schedules, and the failure modes are different. Here is what eleven years of South Florida service calls actually show.",
  intro:
    "Manitowoc and Hoshizaki are the two ice-machine brands you will see in 90% of South Florida commercial kitchens — restaurants, hotels, bars, healthcare, grocery, country clubs. Both build full-cube and half-dice cubers, flake-ice machines, nugget machines, and modular self-contained units. Both deliver excellent ice quality. The differences are in ice shape, cleaning intervals, sensor design, and how each one fails.\n\nBerne services both brands daily across South Florida. We are not an authorized dealer for either; we have no incentive to push one over the other. The honest answer most operators want: Hoshizaki is the more reliable platform in absolute terms; Manitowoc has a denser dealer and parts network. For most operators, that translates to: Manitowoc is easier to maintain in a region with good dealer support (South Florida qualifies); Hoshizaki is the better long-haul investment in markets without strong dealer presence.\n\nIn South Florida specifically, both are excellent. The decision usually comes down to ice shape preference and existing service relationships.",
  tldr: [
    "Hoshizaki wins on absolute reliability — fewer service tickets per year on 10-year-old units.",
    "Manitowoc wins on parts ecosystem and dealer density — Marcone, Hi-Tech Foodservice, and others all stock Manitowoc in South Florida.",
    "Ice shape: Manitowoc produces full or half dice; Hoshizaki produces a flat, top-hat-shaped \"crescent\" cube that's distinctive.",
    "Hoshizaki's CycleSaver sensor design is more durable than Manitowoc's harvest sensor on 8+ year units.",
    "Both require quarterly cleaning regardless; ignoring it kills either platform in 4-6 years.",
  ],
  brands: [
    {
      name: "Manitowoc",
      hq: "Manitowoc, Wisconsin (Welbilt)",
      brandSlug: "manitowoc",
      about:
        "Manitowoc Ice is the legacy American commercial-ice brand — manufactured in Manitowoc, Wisconsin since 1964 and now part of the Welbilt foodservice equipment group. The platform produces full-dice and half-dice cubes (the IY-0900, IT-0900, and IB-1090 lines are common in South Florida bars and restaurants), modular self-contained units, and the QuietQube under-counter line. Manitowoc is the dominant commercial-ice platform in North American bars and restaurants — the dealer and parts network is denser than any competitor, which means fast service in any major market. The platform is well-engineered, the user interface is intuitive, and the cleaning schedule is straightforward. Reliability is good but not best-in-class.",
      strengths: [
        {
          title: "Dominant parts ecosystem in North America",
          detail:
            "Manitowoc parts move through Welbilt's commercial parts network with overnight availability from regional distribution. In South Florida, parts arrive 24 hours from Marcone or Hi-Tech Foodservice. We keep common Manitowoc parts (harvest valves, water pumps, ice sensors) on the truck.",
        },
        {
          title: "Strong dealer network for purchase and service",
          detail:
            "Every major foodservice dealer in South Florida sells Manitowoc — easy to source new machines, easy to source replacement units, easy to handle warranty claims. The dealer density is genuinely a competitive advantage in markets like ours.",
        },
        {
          title: "Wide product range (dice, half-dice, nugget, flake)",
          detail:
            "The full Manitowoc lineup covers every ice format restaurants and bars need. Cocktail-forward bars buy the IY-0900 (full dice for slow melt); high-volume restaurants buy the IT-0900 (half dice for fast cooling); healthcare buys the RNS series nugget for chewable patient ice.",
        },
        {
          title: "Easy operator interface",
          detail:
            "The Manitowoc front panel is more intuitive than Hoshizaki's — operators can run a basic cycle, initiate a cleaning, and read fault codes without a service tech. Less staff training needed.",
        },
      ],
      failureModes: [
        {
          title: "Harvest sensor failures (most common ticket)",
          detail:
            "The harvest sensor that detects ice maturity develops drift or fails outright after 5-8 years. Symptoms: machine runs continuously without harvesting, or harvests too early. Sensor is $80-$140 and a 30-minute job. We see this on most 8+ year Manitowoc units.",
        },
        {
          title: "Water inlet solenoid leaks",
          detail:
            "Inlet solenoid develops slow drip after 7-10 years. Detection is usually a water-pool under the machine. Valve is $90-$130, 20-minute swap.",
        },
        {
          title: "Condenser fan motor in coastal kitchens",
          detail:
            "Salt-air corrosion on the condenser fan motor is the dominant failure mode in coastal Miami-Dade and Broward bar accounts. Replacement $160-$240, 35-minute job. Annual condenser-clean extends life significantly.",
        },
        {
          title: "Float switch failures on IB-1090 modular",
          detail:
            "The water-level float switch on the IB-1090 modular cuber develops contamination issues from mineral buildup. Switch is $60-$90, but cleaning the float reservoir is the more important annual task.",
        },
      ],
      ownership:
        "Manitowoc parts arrive 24-48 hours through Welbilt's commercial parts network. Out-of-warranty service averages $260-$480 on common tickets; major component replacement (condenser, evaporator) lands $700-$1,400. Quarterly cleaning (essential, not optional) costs $180-$260 per visit through a service contract.",
    },
    {
      name: "Hoshizaki",
      hq: "Toyoake, Japan",
      brandSlug: "hoshizaki",
      about:
        "Hoshizaki is the Japanese commercial-ice manufacturer that has built ice machines in Toyoake (Aichi Prefecture) since 1947 — with North American operations based in Peachtree City, Georgia. The platform produces a distinctive crescent-shape ice cube (flat top, slightly domed bottom) that is unique to Hoshizaki and offers genuinely different melt behavior than dice cubes. The brand's reputation for reliability is well-earned: we see Hoshizaki KM Series machines installed in 2005-2008 still operating in South Florida bars today with only routine maintenance. The CycleSaver sensor design is more durable than Manitowoc's harvest sensor and the EverCheck self-diagnostic display catches issues earlier. The tradeoff is a slightly thinner parts ecosystem in secondary markets (South Florida is fine; smaller markets sometimes wait).",
      strengths: [
        {
          title: "Crescent cube — distinctive ice shape",
          detail:
            "Hoshizaki's signature crescent cube is flat-topped with a slightly domed bottom. The shape stacks differently in a glass and melts more slowly per surface area than a typical dice cube. Cocktail-forward bars often specifically prefer the Hoshizaki cube.",
        },
        {
          title: "Best-in-class reliability on 10+ year units",
          detail:
            "Hoshizaki KM Series machines from 2005-2008 are still in operation across South Florida. The CycleSaver sensor design is genuinely more durable than competitor sensors, the water pump and inlet valve assemblies hold up better, and the cabinet build quality is visible.",
        },
        {
          title: "EverCheck self-diagnostic display",
          detail:
            "The front-panel display surfaces fault codes more proactively than Manitowoc's interface — operators see early warnings of impending issues (mineral buildup, fan motor degradation) before they cause service tickets.",
        },
        {
          title: "Lower energy consumption per pound of ice",
          detail:
            "Hoshizaki's CycleSaver design uses 10-15% less energy per pound of ice than comparable Manitowoc on equivalent production. Over 10 years of operation, that energy delta funds a meaningful portion of the price premium.",
        },
      ],
      failureModes: [
        {
          title: "Scale buildup in evaporator (cleaning-dependent)",
          detail:
            "If quarterly cleaning is skipped, the evaporator plate develops mineral scale that reduces ice production and eventually requires acid descale. This is a maintenance failure, not a design flaw — happens on Manitowoc too if cleaning is skipped.",
        },
        {
          title: "Compressor start-relay failures (year 12-15)",
          detail:
            "The compressor start relay on KM Series develops contact welds after 12-15 years. Replacement relay $120-$180, 30-minute swap.",
        },
        {
          title: "Water pump impeller wear",
          detail:
            "Water circulation pump impeller starts hesitating on units past 10 years of daily operation. Pump $180-$240, 35-minute swap.",
        },
        {
          title: "Bin level sensor on KMD Series",
          detail:
            "The bin-fullness sensor on KMD Series (the unit on top of a bin) develops contamination issues. Sensor cleaning is straightforward; replacement $80-$110 if needed.",
        },
      ],
      ownership:
        "Hoshizaki parts arrive 2-4 days from Peachtree City, GA distribution in South Florida — slightly slower than Manitowoc's 24-48 hour ecosystem. Out-of-warranty service averages $240-$440 on common tickets — slightly cheaper than Manitowoc per-ticket because the platform fails less often. Major component replacement (compressor, evaporator) lands $700-$1,500.",
    },
  ],
  buyerProfiles: [
    {
      headline: "High-volume restaurant or bar (200+ lbs/day)",
      recommendation:
        "Manitowoc IT-0900 or IB-1090 — the dealer and parts ecosystem mean any failure resolves in 24-48 hours. Operating downtime is more expensive than the per-ticket cost delta.",
    },
    {
      headline: "Cocktail bar prioritizing slow melt",
      recommendation:
        "Manitowoc IY-0900 (full dice) or Hoshizaki KM Series (crescent). Both give you slow-melt cubes for premium cocktails. Choose on visual preference — full dice is more cube-like, crescent is more distinctive.",
    },
    {
      headline: "Long-hold operator buying for 12-15+ year ownership",
      recommendation:
        "Hoshizaki. The reliability profile on 10+ year units is genuinely better; total cost of ownership over 15 years favors Hoshizaki by a meaningful margin if quarterly cleaning is done.",
    },
    {
      headline: "Healthcare or chewable-ice account",
      recommendation:
        "Manitowoc RNS Series nugget. The Hoshizaki nugget machine (FS Series) is competitive but the Manitowoc RNS has stronger institutional adoption in South Florida hospitals and clinics.",
    },
    {
      headline: "Multi-location operator with central service contract",
      recommendation:
        "Manitowoc. The dealer density across multiple South Florida markets simplifies the service vendor relationship. Hoshizaki works fine for multi-location too, but Manitowoc has more dealer choice.",
    },
  ],
  ownershipNotes:
    "Both brands qualify for the $89 Berne commercial service-call fee. Quarterly cleaning is non-negotiable on both platforms — skipping it kills either brand in 4-6 years. Annual service contract through Berne covers cleaning + first-tier diagnostics for $720-$960 per machine per year. Total 15-year ownership including purchase + maintenance + repair: Manitowoc roughly $11,000-$13,500; Hoshizaki roughly $10,500-$13,000. The delta is small; choose on operational preference, not lifetime cost.",
  bernePerspective:
    "We service both brands and recommend both. For new South Florida builds where the operator does not have an existing preference, we slightly favor Manitowoc because the parts ecosystem reduces downtime risk. For long-hold operators (15+ years) who will maintain the machine properly, Hoshizaki has the better reliability profile. For cocktail bars, the ice-shape preference matters more than the brand — taste the ice in a cocktail before deciding. We do NOT recommend either brand if the operator will not commit to quarterly cleaning — both platforms die on the same timeline when cleaning is skipped, and the cleaning cost is small relative to the replacement cost.",
  faqs: [
    {
      q: "Which brand makes more ice per day?",
      a: "Both Manitowoc and Hoshizaki publish daily-production rates per model (typically 500-1,500 lbs/day on standard restaurant units). Production at any given ambient temperature is within 5-8% across comparable models — neither brand has a meaningful production advantage. Choose on what you need (slow-melt cube, fast-cooling dice, nugget) not on production rate.",
    },
    {
      q: "How often do these need cleaning?",
      a: "Quarterly. Both platforms develop mineral scale buildup that reduces production and eventually requires acid descale if quarterly cleaning is skipped. South Florida hard water makes this worse — we recommend a service contract that handles cleaning automatically.",
    },
    {
      q: "Is the Hoshizaki crescent cube better for cocktails?",
      a: "It's different — the flat-top crescent melts more slowly per surface area than a dice cube and has a distinctive look. Whether it's \"better\" depends on the cocktail program. Some bars love it; some prefer the standard dice cube from Manitowoc.",
    },
    {
      q: "Which brand has lower energy costs?",
      a: "Hoshizaki, by 10-15% per pound of ice on equivalent production. Over 10 years of daily operation, the energy delta lands around $1,200-$1,800 — meaningful but not transformative.",
    },
    {
      q: "What's the typical service-call cost for either brand?",
      a: "Berne charges $89 for the commercial service call across both brands; the fee is waived when you approve the repair and only applies if you do not proceed. Out-of-warranty repair averages $240-$440 on Hoshizaki and $260-$480 on Manitowoc — effectively tied per-ticket.",
    },
    {
      q: "Can Berne service both brands in South Florida?",
      a: "Yes, daily across Miami-Dade, Broward, and Palm Beach. Our technicians carry factory training across Manitowoc and Hoshizaki commercial ice. Same-day dispatch typical.",
    },
    {
      q: "Should I get a service contract or pay per visit?",
      a: "Service contract for any commercial ice machine running daily. The quarterly cleaning alone costs $720-$960/year through a contract — pay-per-visit ice machine cleaning lands $260-$340 per visit, plus the diagnostic risk on emergency calls. Service contracts pay for themselves the first emergency visit they prevent.",
    },
  ],
}

// ---------------------------------------------------------------------------
// 3. True vs Traulsen — commercial reach-in refrigeration
// ---------------------------------------------------------------------------

const TRUE_VS_TRAULSEN: ComparisonProfile = {
  slug: "true-vs-traulsen-refrigeration",
  datePublished: "2026-05-18",
  dateModified: "2026-06-10",
  related: [
    "true-vs-turbo-air",
    "walk-in-cooler-repair-or-replace",
    "manitowoc-vs-hoshizaki-ice",
    "hoshizaki-vs-scotsman-ice",
  ],
  h1: "True vs Traulsen — Which Commercial Reach-In Refrigerator Is Better?",
  // CTR pass 2026-06-11 — hook added, 51ch + " · Berne" suffix = 59 ≤ 60.
  metaTitle: "True vs Traulsen Refrigeration: Which Lasts Longer?",
  metaDescription:
    "True vs Traulsen commercial reach-in refrigeration compared. Temperature stability, build quality, parts ecosystem, failure modes in South Florida kitchens.",
  teaser:
    "Two brands dominate commercial reach-in refrigeration — True Manufacturing and Traulsen. Both build excellent stainless reach-ins; one is the volume leader, the other is the institutional standard. The decision is more interesting than it looks.",
  intro:
    "True and Traulsen are the two reach-in refrigerator brands you will see in most South Florida commercial kitchens. True Manufacturing (O'Fallon, Missouri) is the volume leader — most independent restaurants, bars, and food trucks run True T-Series and TG-Series reach-ins. Traulsen (Fort Worth, Texas, owned by ITW Food Equipment Group) is the institutional standard — most hospitals, large hotels, country clubs, and corporate dining run Traulsen RHF, RDT, and RBC platforms.\n\nBerne services both brands daily across South Florida. The honest comparison: True is the right choice for most restaurant operators because the price point, the dealer network, and the parts availability are all excellent. Traulsen is the right choice for institutional accounts and for operators who will keep the equipment 15-20+ years. The build-quality delta is real but modest; the price delta is significant.\n\nFor most operators, this is a $4,500-$6,000 True vs $7,500-$10,000 Traulsen decision on a typical 2-door reach-in. The 65-75% price difference funds a lot of operating cost.",
  tldr: [
    "True wins on price and dealer availability — $4,500-$6,000 typical for a 2-door reach-in vs Traulsen's $7,500-$10,000.",
    "Traulsen wins on absolute build quality and longevity — 20-year design life is realistic; True averages 10-15 years.",
    "Both deliver excellent temperature stability; the difference is in cabinet insulation longevity and door gasket retention.",
    "True parts are stocked at every South Florida foodservice dealer; Traulsen parts move through ITW network with comparable speed.",
    "Restaurant accounts: True is the right call. Institutional accounts (hospital, large hotel, corporate dining): Traulsen.",
  ],
  brands: [
    {
      name: "True Manufacturing",
      hq: "O'Fallon, Missouri",
      brandSlug: "true",
      about:
        "True Manufacturing has built commercial refrigeration in O'Fallon, Missouri since 1945 and is the dominant North American reach-in brand. The product line covers reach-ins (T-Series, TS-Series), glass-door merchandisers (TG-Series), undercounters (TUC-Series), worktops (TWT-Series), prep tables (TPP / TSSU), and walk-ins. The T-Series 2-door reach-in is the workhorse of South Florida restaurant back-of-house. True ships with the EnviroPak refrigeration system (the brand's name for a polyurethane-foam-insulated cabinet with a top-mounted hermetically sealed condenser) and a 5-year parts + 1-year labor warranty on most models. The platform is conservative, well-built, and supported by a dense dealer network. Reliability is good — not best-in-class — and the price-to-performance ratio is the strongest argument.",
      strengths: [
        {
          title: "Dominant dealer and parts network",
          detail:
            "Every major foodservice dealer in South Florida sells True. Parts arrive 24-48 hours through Marcone, Hi-Tech, and Reliable Parts distribution. We keep common True parts on the truck (door gaskets, hinge sets, thermostats, condenser fan motors).",
        },
        {
          title: "Best price-to-performance in commercial reach-in",
          detail:
            "A T-49 2-door reach-in lands $4,500-$5,500 typical. A comparable Traulsen RHF-32WUT-HHS lands $7,800-$9,500. The 70-80% price delta funds a lot of operating expense or equipment elsewhere in the kitchen.",
        },
        {
          title: "Wide product range",
          detail:
            "True's portfolio is the broadest in commercial reach-in — every cabinet configuration (1-door, 2-door, 3-door, half-door, glass-door, dual-temp, low-temp) is in stock at most dealers. Easier to source what you need.",
        },
        {
          title: "Lower energy use on TS-Series",
          detail:
            "The TS-Series (the newer ENERGY STAR-certified reach-in line) uses 25-35% less energy than the legacy T-Series. For multi-cabinet kitchens running 24/7, the energy delta over 10 years is real ($1,500-$3,000 per cabinet typical).",
        },
      ],
      failureModes: [
        {
          title: "Door gasket compression set (most common ticket)",
          detail:
            "After 5-8 years of daily use, the door gasket loses elasticity and the door no longer seals tight. Condensation forms around the door frame, the compressor runs longer, and the cabinet temperature drifts. Gasket replacement $80-$140, 25-minute job. We carry common True gaskets on the truck.",
        },
        {
          title: "Condenser fan motor failures (coastal accounts)",
          detail:
            "Salt-air corrosion on the top-mounted condenser fan motor is the dominant failure mode in coastal kitchens — most visible 4-6 years in. Replacement $120-$180, 30-minute swap. Annual condenser cleaning extends life by 2-3 years.",
        },
        {
          title: "Door hinge wear on heavy-use accounts",
          detail:
            "Heavy daily traffic (200+ door openings per shift) wears the hinge after 8-12 years. Door starts sagging, gasket compromises further. Hinge kit $180-$260, 45-minute job.",
        },
        {
          title: "Thermostat drift (older T-Series)",
          detail:
            "Mechanical thermostat on pre-2010 T-Series can drift 5-10F from setpoint after 10-12 years. Operators notice product holding above 41F. Thermostat replacement $80-$120, 30-minute swap.",
        },
      ],
      ownership:
        "True parts arrive 24-48 hours through the foodservice parts network. Out-of-warranty service averages $200-$380 on common tickets; major sealed-component work (compressor, condenser) lands $700-$1,200. Total 15-year ownership cost on a typical 2-door True T-49 is $5,000-$7,500 in service.",
    },
    {
      name: "Traulsen",
      hq: "Fort Worth, Texas (ITW Food Equipment Group)",
      brandSlug: "traulsen",
      about:
        "Traulsen has built institutional-grade commercial refrigeration in Fort Worth, Texas since 1938 and is the standard reach-in platform for healthcare, large hotel back-of-house, corporate dining, country clubs, and any account where 20-year service life is expected. Owned by ITW Food Equipment Group (parent of Hobart, Vulcan, Berkel), Traulsen ships RHF (reach-in), RDT (dual-temp), and RBC (blast chiller) platforms with conservative engineering, thicker cabinet insulation, and stronger door hardware than typical commercial reach-ins. The platform is over-built for restaurant use — but institutional accounts with 24/7 operation and high traffic value the longevity. Price tier is materially higher than True (typically 50-80% more on equivalent capacity), but the build-quality delta is visible.",
      strengths: [
        {
          title: "20-year design life on RHF Series",
          detail:
            "We see Traulsen RHF reach-ins from 1995-2002 still running in South Florida hospital cafeterias and corporate dining accounts. The cabinet insulation holds up materially better than competitor brands over 20-year horizons. Hinges, door gaskets, and cabinet seals all over-spec.",
        },
        {
          title: "Stronger door hardware",
          detail:
            "Traulsen doors are heavier, the hinges are over-built, and the door gaskets are deeper than typical commercial reach-ins. For high-traffic accounts (200+ openings per shift), the door hardware lasts noticeably longer.",
        },
        {
          title: "Institutional warranty terms",
          detail:
            "Traulsen's institutional channel sales often include 5-year parts + 2-year labor — longer than True's standard 5-year parts + 1-year labor. The warranty includes sealed-system components.",
        },
        {
          title: "Top-mount vs bottom-mount flexibility",
          detail:
            "Traulsen offers top-mount and bottom-mount condenser options on most RHF models — useful in kitchens with low ceiling heights or restricted condenser clearance. True's lineup is mostly top-mount only.",
        },
      ],
      failureModes: [
        {
          title: "Door gasket compression set (same as True)",
          detail:
            "Standard commercial reach-in failure mode. Gasket replacement $90-$160 (slightly more than True due to deeper profile), 25-minute job.",
        },
        {
          title: "Compressor start-capacitor failures",
          detail:
            "On RHF Series past 12 years, the start capacitor develops failures — symptoms are intermittent compressor start. Capacitor $30-$60, 20-minute swap.",
        },
        {
          title: "Defrost timer drift on RDT dual-temp",
          detail:
            "The defrost timer on RDT dual-temp models can drift after 10-12 years, causing freezer-side ice buildup. Timer replacement $120-$180, 35-minute swap.",
        },
        {
          title: "Door hinge spring tension loss (year 15+)",
          detail:
            "Even Traulsen's over-built door hinges eventually lose spring tension after 15+ years. Spring kit $120-$180, 45-minute job.",
        },
      ],
      ownership:
        "Traulsen parts move through ITW Food Equipment Group's commercial parts network — 24-72 hour arrival in South Florida. Out-of-warranty service averages $260-$460 on common tickets; major sealed work lands $900-$1,600. Total 15-year ownership cost on a typical 2-door RHF-32WUT is $6,500-$9,500 in service.",
    },
  ],
  buyerProfiles: [
    {
      headline: "Independent restaurant or food truck",
      recommendation:
        "True. The price-to-performance is the dominant argument and 10-15 year service life is sufficient for most restaurant ownership horizons. The dealer and parts ecosystem make ongoing service cheap and predictable.",
    },
    {
      headline: "Hotel back-of-house (mid-size, 100-300 rooms)",
      recommendation:
        "True for property-management kitchens; Traulsen for fine-dining onsite restaurants. The institutional channel relationship matters more than the brand choice — buy whatever the property's existing service contract supports.",
    },
    {
      headline: "Hospital cafeteria or healthcare foodservice",
      recommendation:
        "Traulsen. The 20-year design life, the institutional warranty terms, and the over-built door hardware are all important for 24/7 operation with strict food-safety compliance. Worth the price premium.",
    },
    {
      headline: "Country club or banquet kitchen",
      recommendation:
        "Traulsen for the banquet kitchen (heavy seasonal use, long ownership); True for support kitchens and prep areas (less intense, replace more often). Most country clubs run a mix.",
    },
    {
      headline: "Multi-unit operator with central capex",
      recommendation:
        "True. Standardizing on True simplifies the parts inventory, the service contract, and the procurement relationship across multiple units. Traulsen makes sense only when individual units have the budget and the longevity requirement.",
    },
  ],
  ownershipNotes:
    "Both brands qualify for the $89 Berne commercial service-call fee. True per-ticket service cost is slightly lower ($200-$380 vs Traulsen's $260-$460) but Traulsen tickets happen less often. Over 10 years, total ownership cost (purchase + service) favors True by $3,000-$5,000 on a typical 2-door cabinet. Over 20 years, the math reverses — Traulsen's longer life means you don't replace the cabinet, while True needs to be replaced at year 12-15. For operators who will keep the equipment beyond 15 years, Traulsen wins on total cost; under 15 years, True wins.",
  bernePerspective:
    "We see True in 70% of South Florida commercial kitchens we service and Traulsen in 30%. The True share is mostly restaurants; the Traulsen share is mostly institutional. We do not see operators regretting either choice when the choice fits the use case. The regrets come from buying True for a 24/7 hospital cafeteria (too short-lived) or buying Traulsen for a fast-casual restaurant on a 10-year lease (over-spent). Match the cabinet to the account.",
  faqs: [
    {
      q: "Is Traulsen really worth nearly double the price of True?",
      a: "For institutional accounts with 20-year ownership horizons, yes. For restaurant accounts with 10-15 year horizons, no. The price delta is real but the build-quality delta only earns out over long ownership.",
    },
    {
      q: "Which has better warranty?",
      a: "Standard channel: True is 5-year parts + 1-year labor; Traulsen is 3-year parts + 1-year labor on standard sales, with longer terms on institutional channels. The warranties cover similar components.",
    },
    {
      q: "Are True and Traulsen door gaskets interchangeable?",
      a: "No — the gasket profiles and dimensions differ. Order specifically to the brand and model. Both brands publish gasket sizing per model.",
    },
    {
      q: "Which is easier to service in South Florida?",
      a: "True, narrowly. The dealer network is denser and the parts inventory is broader in most South Florida foodservice distributors. Traulsen parts arrive almost as fast through ITW's network, but the dealer relationships are concentrated.",
    },
    {
      q: "Should I get a glass-door merchandiser (True TG) or a solid-door reach-in?",
      a: "Merchandisers for front-of-house or any cabinet where product visibility matters (bar, deli, grab-and-go). Solid doors for back-of-house storage. The glass-door costs $300-$600 more and has slightly higher energy use due to thermal transfer through glass.",
    },
    {
      q: "What's the typical service-call cost for either brand?",
      a: "Berne charges $89 for the commercial service call across both brands. Out-of-warranty repair averages $200-$380 on True and $260-$460 on Traulsen.",
    },
    {
      q: "Can Berne service both in South Florida?",
      a: "Yes, daily across Miami-Dade, Broward, and Palm Beach. We carry common parts for both brands on the truck. Same-day dispatch is typical.",
    },
  ],
}

// ---------------------------------------------------------------------------
// 4. Rational vs Combi (Alto-Shaam, Convotherm, etc.) — combi ovens
// ---------------------------------------------------------------------------

const RATIONAL_VS_COMBI: ComparisonProfile = {
  slug: "rational-vs-combi",
  datePublished: "2026-05-18",
  dateModified: "2026-06-10",
  // Category hub for the combi cluster — pairwise children first.
  related: [
    "rational-vs-unox",
    "rational-vs-convotherm",
    "rational-vs-alto-shaam",
    "hobart-vs-vulcan-ranges",
  ],
  h1: "Rational vs Other Combi Ovens — Which Is Right for Your Kitchen?",
  // CTR pass 2026-06-11 (GSC: 552 imp / 1 click / 0.2% at pos 10.2) — hook
  // added, keywords kept, 48ch + " · Berne" template suffix = 56 ≤ 60.
  metaTitle: "Rational vs Combi Ovens: A Repair Tech's Verdict",
  metaDescription:
    "Rational vs Alto-Shaam, Convotherm, Unox, and Henny Penny combi ovens compared. Cooking quality, parts ecosystem, operator interface, real failure modes.",
  teaser:
    "Rational is the German combi-oven brand that dominates premium commercial kitchens. But Alto-Shaam, Convotherm, Unox, Cleveland, and Henny Penny all make legitimate combi platforms at lower price points. The decision is not always Rational. Here is the honest comparison.",
  intro:
    "Rational is the German combi-oven brand — the iCombi Pro and SelfCookingCenter platforms are the gold standard in premium commercial kitchens worldwide, and most chefs who have used a Rational will tell you it is the best combi oven on the market. But Rational is also the most expensive combi platform: a Rational iCombi Pro 6-half lands $19,000-$24,000 installed, while a comparable Alto-Shaam, Convotherm, Unox, or Henny Penny combi can land $12,000-$17,000 for similar capacity and feature set.\n\nFor operators who can afford Rational and will train staff to use it properly, Rational is genuinely the right answer. For operators who need a combi but cannot justify the Rational price premium — or who run higher-volume / lower-precision cooking — the alternatives are legitimate. Berne services Rational, Alto-Shaam, Convotherm, Henny Penny, Unox, Cleveland, and several other combi platforms across South Florida. The comparison below is built from real field tickets, not marketing copy.\n\nThe short version: Rational delivers the most precise cooking, the best operator interface, and the strongest parts ecosystem (in major markets). Alto-Shaam and Convotherm deliver 80-85% of the Rational experience at 65-75% of the price. Unox and Henny Penny are strong specialized choices. None of them is a bad combi.",
  tldr: [
    "Rational wins on cooking precision, operator interface (iCombi Cloud, ConnectedCooking), and chef adoption — most respected combi brand globally.",
    "Alto-Shaam Combitherm wins on price-to-performance — 70-80% of Rational at 70% of the price. Strong North American parts network.",
    "Convotherm wins on legacy support and institutional adoption — common in hotel banquet kitchens and corporate dining.",
    "Unox wins on smaller-footprint combi for limited-space kitchens (cheftop MIND.Maps is genuinely good).",
    "Henny Penny is a chicken / institutional player — strong in QSR and fast-casual but less versatile than European combi.",
  ],
  brands: [
    {
      name: "Rational",
      hq: "Landsberg am Lech, Germany",
      brandSlug: "rational",
      about:
        "Rational AG has built combi ovens in Landsberg am Lech, Germany since 1973 and is the dominant premium combi brand worldwide. The current iCombi Pro platform (replaced the SelfCookingCenter in 2020) offers genuinely sophisticated cooking algorithms — iCookingSuite recipes that dynamically adjust temperature, humidity, and air speed throughout the cook based on probe data — and a touch-screen interface that is the best operator UX in commercial cooking. Build quality is German-engineered: thick stainless construction, precision-machined door hardware, and component longevity that supports 10-15 year service life under heavy use. The platform ships in 6-half-pan, 6-full-pan, 10-half, 10-full, 20-half, and 20-full configurations covering small bistro to high-volume institutional. ConnectedCooking provides cloud-based remote monitoring, software updates, and recipe sharing.",
      strengths: [
        {
          title: "iCookingSuite cooking precision",
          detail:
            "Rational's onboard cooking algorithms (iCookingSuite) actively adjust cook parameters in real-time based on temperature probe data. The result is genuinely better consistency than any competitor — for high-volume restaurants running the same dish hundreds of times, the consistency delta is real.",
        },
        {
          title: "Best-in-class operator interface",
          detail:
            "The iCombi Pro touchscreen is the most usable commercial cooking interface on the market. Chefs learn it in hours; competitor combi interfaces (Convotherm, Alto-Shaam) take days to learn fully.",
        },
        {
          title: "ConnectedCooking remote monitoring",
          detail:
            "Cloud-connected platform that allows remote diagnostics, software updates, recipe sharing across locations, and fleet management. Multi-unit operators value this more than the cooking quality itself.",
        },
        {
          title: "10-15 year service life on iCombi Pro",
          detail:
            "Rational ovens in good maintenance routinely run 10-15 years in commercial accounts. The CareControl auto-clean cycle, when run nightly, extends component life significantly.",
        },
      ],
      failureModes: [
        {
          title: "CareControl tablet pump failures",
          detail:
            "The self-clean tablet feeder pump develops failures after 5-7 years of nightly cleaning. Pump $280-$380, 60-minute swap. Most common Rational ticket overall.",
        },
        {
          title: "Steam-generator scale buildup",
          detail:
            "Hard water in South Florida accelerates scale on the steam generator. Descale every 3-6 months minimum; ignoring this kills the steam generator in 4-5 years. Descale service $260-$340 per visit.",
        },
        {
          title: "Door gasket compression set",
          detail:
            "After 8-10 years of daily auto-clean cycles, the door gasket loses elasticity. Replacement $180-$260, 35-minute job.",
        },
        {
          title: "Touch-screen calibration drift",
          detail:
            "Capacitive touchscreen on iCombi Pro can develop calibration drift after 6-8 years — operators see touch inputs landing on the wrong button. Recalibration is software-based; hardware replacement $1,200-$1,800 if recalibration fails.",
        },
      ],
      ownership:
        "Rational parts move through Rational USA's network with 24-72 hour arrival in major markets including South Florida. Out-of-warranty service averages $380-$680 on common tickets; major component replacement (steam generator, control board) lands $1,800-$3,500. ConnectedCooking subscription is included with the unit. Annual service contract through Berne (including descale, cleaning verification, and first-tier diagnostics) runs $1,800-$2,400 per oven per year.",
    },
    {
      name: "Alto-Shaam Combitherm",
      hq: "Menomonee Falls, Wisconsin",
      about:
        "Alto-Shaam is the American institutional cooking-equipment manufacturer based in Menomonee Falls, Wisconsin. The Combitherm CT PROformance combi platform is the brand's flagship combi product and competes directly with Rational at a meaningful price discount. The platform delivers convection, steam, and combination cooking with a touch-screen ChefLinc interface (cloud-connected, comparable to Rational's ConnectedCooking) and Halo Heat technology that distributes heat more evenly than competitor convection systems. Alto-Shaam's primary strength is in North American institutional accounts (large hotel banquet, corporate dining, healthcare) and the parts network through Marcone and Reliable Parts is dense in South Florida. Build quality is genuinely strong — not at the absolute Rational level but close.",
      strengths: [
        {
          title: "Strong price-to-performance",
          detail:
            "A Combitherm CT PROformance 6-half lands $12,500-$16,000 — meaningfully below comparable Rational iCombi Pro at $19,000-$24,000. For institutional accounts that need combi cooking but cannot justify Rational's premium, Combitherm delivers 80-85% of the experience at 70% of the price.",
        },
        {
          title: "Halo Heat even-cooking technology",
          detail:
            "Alto-Shaam's Halo Heat system distributes heat across the cavity more evenly than competitor convection — particularly visible on multi-rack roasting and large-batch protein cooks. Reduces hot-spot rotation requirements during cook.",
        },
        {
          title: "ChefLinc cloud connectivity",
          detail:
            "Cloud-based recipe management, remote monitoring, and software updates — directly comparable to Rational ConnectedCooking. Strong feature for multi-unit operators.",
        },
        {
          title: "Strong institutional adoption in North America",
          detail:
            "Alto-Shaam is the institutional combi standard in large North American hotel banquet kitchens, hospital cafeterias, and corporate dining. Procurement and warranty handling is well-established through institutional channels.",
        },
      ],
      failureModes: [
        {
          title: "Steam generator scale (same as Rational)",
          detail:
            "Hard water issues are universal across all combi platforms. Descale every 3-6 months. Skipped maintenance kills the steam generator.",
        },
        {
          title: "Convection fan motor failures",
          detail:
            "The Combitherm convection fan motor sees high duty cycle and develops failures after 10-12 years of daily use. Motor $480-$680, 90-minute swap.",
        },
        {
          title: "ChefLinc panel software issues",
          detail:
            "Software updates occasionally introduce UI regressions that require service-tech intervention. Less common than Rational touch-screen issues but worth noting.",
        },
        {
          title: "Door gasket compression set",
          detail:
            "Standard combi failure mode. Gasket $180-$260, 40-minute job.",
        },
      ],
      ownership:
        "Alto-Shaam parts move through the Alto-Shaam network and Marcone distribution — 24-72 hour arrival in South Florida. Out-of-warranty service averages $340-$580 on common tickets; major component lands $1,400-$2,800. Annual service contract through Berne runs $1,400-$1,900 per oven per year.",
    },
    {
      name: "Convotherm",
      hq: "Eglfing, Germany (Welbilt)",
      about:
        "Convotherm is the German combi brand owned by Welbilt (same group as Manitowoc, Garland, Frymaster, and others). The maxx pro and 4 series combi platforms compete directly with Rational in European markets and have meaningful North American institutional adoption. The platform is genuinely well-engineered (German manufacturing, conservative duty-cycle targets) and delivers cooking quality close to Rational. Where Convotherm trails Rational is in operator-interface refinement — the touchscreen is less intuitive than Rational's iCombi Pro, the cooking algorithms are less sophisticated, and the cloud-connectivity story is less developed. In North American markets including South Florida, Convotherm is most common in hotel banquet kitchens, institutional dining, and country club back-of-house. We see fewer Convotherm units in independent restaurants than Rational or Alto-Shaam.",
      strengths: [
        {
          title: "German engineering at sub-Rational price point",
          detail:
            "Convotherm 4 Series lands $14,000-$18,000 on 6-half configurations — between Alto-Shaam and Rational on price. Build quality is genuinely close to Rational; the price-to-performance is competitive.",
        },
        {
          title: "Strong cooking quality",
          detail:
            "Convotherm convection patterns and steam injection are well-developed. Multi-rack cooking quality lands within 5-10% of Rational on most tests — meaningful difference but not transformative.",
        },
        {
          title: "Welbilt parts network",
          detail:
            "Convotherm parts move through Welbilt's commercial parts network (same network that supports Manitowoc ice). 24-72 hour arrival in major markets including South Florida.",
        },
        {
          title: "Strong institutional warranty terms",
          detail:
            "Convotherm institutional channel sales often include 3-year parts + 2-year labor — comparable to Alto-Shaam, slightly better than Rational standard.",
        },
      ],
      failureModes: [
        {
          title: "Door interlock switch failures",
          detail:
            "The door interlock that prevents operation with the door open develops contact wear after 8-10 years. Switch $90-$140, 30-minute swap.",
        },
        {
          title: "Steam-generator scale (same universal issue)",
          detail:
            "Standard combi maintenance failure mode.",
        },
        {
          title: "Touch-screen response degradation",
          detail:
            "Convotherm touch-screens develop response lag after 6-8 years — operators report \"laggy\" input feel. Screen replacement $900-$1,300.",
        },
        {
          title: "Convection fan motor wear",
          detail:
            "Year 10-12 fan motor wear. Motor $520-$720.",
        },
      ],
      ownership:
        "Convotherm parts arrive 24-72 hours through Welbilt's network. Out-of-warranty service averages $360-$620 on common tickets; major component lands $1,500-$3,000. Annual service contract through Berne runs $1,500-$2,000 per oven per year.",
    },
  ],
  buyerProfiles: [
    {
      headline: "Fine-dining restaurant or precision-cooking kitchen",
      recommendation:
        "Rational iCombi Pro. The cooking precision and iCookingSuite algorithms are genuinely better than any competitor — chefs with sous-vide / immersion-circulator backgrounds adapt to Rational fastest because the precision philosophy matches.",
    },
    {
      headline: "Large hotel banquet kitchen (200+ covers per service)",
      recommendation:
        "Alto-Shaam Combitherm CT or Rational iCombi Pro 20-full. Alto-Shaam is the budget-conscious institutional choice; Rational is the premium choice. Both deliver excellent results at banquet scale.",
    },
    {
      headline: "Multi-unit operator with central recipe management",
      recommendation:
        "Rational (ConnectedCooking) or Alto-Shaam (ChefLinc). Both deliver strong cloud-based recipe management; choose on which platform the operator's chef leadership prefers.",
    },
    {
      headline: "Hospital cafeteria or institutional dining",
      recommendation:
        "Alto-Shaam Combitherm. The institutional adoption, the warranty terms, and the Halo Heat consistency are all good fits for high-volume institutional foodservice.",
    },
    {
      headline: "Small-format restaurant with limited kitchen footprint",
      recommendation:
        "Unox cheftop MIND.Maps (not detailed above but legitimate option) or Rational iCombi Pro 6-half. Both fit in compact kitchens. Unox is the budget choice; Rational the premium choice.",
    },
    {
      headline: "QSR / fast-casual chicken or fried-protein kitchen",
      recommendation:
        "Henny Penny combi (not detailed above but worth mentioning) — built specifically for high-volume chicken cooking and the strongest performer in that specific category. Not a versatile combi but the right tool for the use case.",
    },
  ],
  ownershipNotes:
    "All combi platforms require disciplined maintenance — descale every 3-6 months, cleaning verification monthly, parts on hand for the common service items. Annual service contracts are essentially mandatory on any combi running daily; cost varies $1,400-$2,400 per oven depending on brand. Total 15-year ownership including purchase, install, maintenance, and repair: Rational $52,000-$65,000; Alto-Shaam $42,000-$53,000; Convotherm $46,000-$58,000. The price delta is real and meaningful, but so is the cooking-quality and operator-experience delta.",
  bernePerspective:
    "We service all of these brands and the decision usually comes down to the chef's preference combined with the operator's budget. Rational is the default for premium kitchens with chefs who will use the platform's full capability. Alto-Shaam is the right answer for institutional and budget-conscious accounts. Convotherm is the right answer when the operator has an existing Welbilt vendor relationship (Manitowoc ice, Garland ranges, Frymaster fryers all under one service contract). Henny Penny and Unox are right answers for specific use cases. The wrong answer is to over-spec Rational for a kitchen that does not need its capability — the operator gets the same dish quality at lower cost on Combitherm.",
  faqs: [
    {
      q: "Is Rational actually worth the price premium over Alto-Shaam?",
      a: "For kitchens that will use the iCookingSuite algorithms and the ConnectedCooking platform fully, yes. For kitchens that will use the combi as a high-end steam oven, no — Alto-Shaam delivers 80-85% of the experience at 70% of the price.",
    },
    {
      q: "What about Unox? Is it a legitimate combi?",
      a: "Yes. Unox cheftop MIND.Maps is genuinely good and is the strongest small-footprint combi on the market. We service Unox across South Florida; the cooking quality is competitive with Convotherm at a lower price point.",
    },
    {
      q: "Do I need a water-treatment system for any combi?",
      a: "Yes, absolutely, for any combi running in South Florida. Hard water destroys steam generators on every brand. A reverse-osmosis or water-softener pre-treatment system is mandatory — costs $1,500-$3,500 to install and saves $4,000-$8,000 in steam-generator replacement over the life of the combi.",
    },
    {
      q: "How often does a combi need descaling?",
      a: "Every 3-6 months on any platform running daily in South Florida hard-water conditions. Skipping descale is the single most expensive maintenance mistake on commercial combi — it kills the steam generator and the repair lands $3,000-$5,000.",
    },
    {
      q: "What's the typical service-call cost for combi repairs?",
      a: "Berne charges $89 for the commercial service call across all combi brands — free with an approved repair; you pay it only if no work is authorized. Out-of-warranty repair averages $340-$680 on common tickets; major component lands $1,400-$3,500.",
    },
    {
      q: "Can Berne service all of these brands in South Florida?",
      a: "Yes. Our technicians carry factory training across Rational, Alto-Shaam, Convotherm, Henny Penny, Unox, and Cleveland combi platforms. Same-day commercial dispatch typical.",
    },
    {
      q: "Should I get an annual service contract?",
      a: "On any commercial combi: yes, mandatory. The contract covers descale verification, cleaning routine validation, and first-tier diagnostics. Cost varies by brand but ranges $1,400-$2,400 per oven per year — and pays for itself the first major component failure it prevents.",
    },
  ],
}

// ---------------------------------------------------------------------------
// Registry
// ---------------------------------------------------------------------------

export const BRAND_COMPARISONS: ComparisonProfile[] = [
  HOBART_VS_VULCAN_RANGES,
  MANITOWOC_VS_HOSHIZAKI,
  TRUE_VS_TRAULSEN,
  RATIONAL_VS_COMBI,
  ...WAVE2_COMPARISONS,
]

export const BRAND_COMPARISON_SLUGS = BRAND_COMPARISONS.map((c) => c.slug)

export function getBrandComparison(
  slug: string,
): ComparisonProfile | undefined {
  return BRAND_COMPARISONS.find((c) => c.slug === slug)
}

/**
 * Return all comparisons that include a given brand (matched by brandSlug).
 * Used by /brands/[slug] pages to cross-link to relevant comparison pages.
 */
export function getComparisonsForBrand(
  brandSlug: string,
): ComparisonProfile[] {
  return BRAND_COMPARISONS.filter((c) =>
    c.brands.some((b) => b.brandSlug === brandSlug),
  )
}

/**
 * Service-hub → comparison cross-links. /compare/* are the site's strongest
 * organic earners; this map gives them internal links from matching
 * /services/<slug> hubs (they were otherwise orphaned).
 */
const COMPARISONS_BY_SERVICE: Record<string, string[]> = {
  "commercial-range-repair": ["hobart-vs-vulcan-ranges"],
  "ice-machine-repair": [
    "manitowoc-vs-hoshizaki-ice",
    "hoshizaki-vs-scotsman-ice",
  ],
  "commercial-refrigeration-repair": [
    "true-vs-traulsen-refrigeration",
    "true-vs-turbo-air",
    "walk-in-cooler-repair-or-replace",
  ],
  "reach-in-cooler-repair": [
    "true-vs-traulsen-refrigeration",
    "true-vs-turbo-air",
  ],
  "reach-in-freezer-repair": [
    "true-vs-turbo-air",
    "true-vs-traulsen-refrigeration",
  ],
  "walk-in-cooler-repair": ["walk-in-cooler-repair-or-replace"],
  "walk-in-freezer-repair": ["walk-in-cooler-repair-or-replace"],
  "fryer-repair": ["frymaster-vs-pitco-fryers"],
  "commercial-oven-repair": [
    "rational-vs-combi",
    "rational-vs-unox",
    "rational-vs-convotherm",
    "rational-vs-alto-shaam",
  ],
  "steamer-repair": ["rational-vs-combi", "rational-vs-alto-shaam"],
  "commercial-laundry-repair": ["speed-queen-vs-continental-laundry"],
  "commercial-washer-repair": ["speed-queen-vs-continental-laundry"],
  "commercial-dryer-repair": ["speed-queen-vs-continental-laundry"],
}

export function getComparisonsForService(
  serviceSlug: string,
): ComparisonProfile[] {
  return (COMPARISONS_BY_SERVICE[serviceSlug] ?? [])
    .map((slug) => getBrandComparison(slug))
    .filter((c): c is ComparisonProfile => Boolean(c))
}

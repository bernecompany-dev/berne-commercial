import type { Article } from "../articles"

export const underbarRefrigerationFailure: Article = {
  slug: "restaurant-underbar-refrigeration-failure",
  title:
    "Restaurant Underbar Refrigeration — Why It Fails Faster Than You Think",
  description:
    "Underbar bottle coolers and beer-bottle stations have the harshest duty cycle in a restaurant. A field tech's read on True TBB-24, Perlick BC36, and Krowne underbar service intervals and failure modes.",
  publishedAt: "2026-07-31T09:00:00Z",
  readingMinutes: 9,
  category: "Beverage Equipment",
  tags: [
    "underbar",
    "True",
    "Perlick",
    "Krowne",
    "bottle cooler",
    "bar equipment",
  ],
  lede: "A bar manager at a Brickell rooftop calls Berne Commercial about the True TBB-24 underbar bottle cooler that's holding at 48°F during peak service. The compressor is running. The condenser was cleaned last month. But the bar lead's pouring lukewarm Coronas and the angry-customer count is climbing. Underbar refrigeration runs in the harshest duty cycle of any equipment in the building, and the failure modes are different from a reach-in or walk-in. Knowing the differences saves the unit and saves the service call.",
  sections: [
    {
      heading: "1. Why underbar is the hardest duty in the kitchen",
      body: [
        "An underbar bottle cooler sits beneath a bar top that's 90 to 95°F all night long. The condenser intake is at floor level where every spilled drink, every dropped lime, and every dust bunny from the speed-rail ends up. Doors open every 30 seconds during peak service. Bottles get loaded warm from delivery and slammed into the cabinet alongside already-cold inventory. The compressor never gets to rest.",
        "True TBB-24, Perlick BC36, and Krowne C-series all share the same architecture: small cabinet, top-mounted compressor, side-vented condenser, sliding doors at the face. The compressor on a TBB-24 is a fraction-horsepower hermetic unit, not the robust commercial compressor on a T-49 reach-in. That compressor is sized for a lighter duty cycle than the bar actually delivers, which is why underbar coolers fail at year 5 to 7 instead of year 12.",
      ],
    },
    {
      heading: "2. Door tracks and the seal-loss problem",
      body: [
        "Sliding glass doors on a True TBB-24 ride in plastic or stainless tracks at the top and bottom of the door opening. The tracks collect spilled drink residue, bar napkin scraps, and pieces of broken glass. The door doesn't seal correctly against the cabinet body when the track is fouled, warm air infiltrates, the compressor runs continuously, and the cabinet drifts warm.",
        "Service: pull each door off the tracks, wipe the tracks clean with hot soapy water, dry, and apply a small amount of food-grade silicone lubricant. The doors should slide freely with one finger of pressure. Check the door gasket where it meets the cabinet face — sliding-door gaskets wear out faster than swing-door gaskets because of the constant contact friction. Replace at the first sign of compression set.",
      ],
    },
    {
      heading: "3. The compressor short-cycle problem",
      body: [
        "Underbar coolers are notorious for compressor short-cycling. The cabinet's so small that pull-down happens fast, the thermostat satisfies, the compressor stops. Two minutes later a bartender opens the door, warm air rushes in, the thermostat calls for cool, and the compressor restarts. A hermetic compressor designed for 6 to 10 starts per hour runs 25 to 40 starts per hour in underbar service. The start winding burns out at year 4 to 6 instead of year 15.",
        "We can't change the duty cycle but we can slow the wear. A hard-start kit (a starter capacitor and a potential relay sized to the compressor) reduces start current and extends start-winding life. Adding a hard-start to a True TBB-24 at the 3-year service visit is roughly $85 in parts and 25 minutes labor. It buys 2 to 3 years of additional compressor life in most installations.",
      ],
    },
    {
      heading: "4. Condenser cleaning at the floor-level intake",
      body: [
        "The side-vented condenser on a Perlick BC36 or a Krowne C-series sits at floor level where everything ends up. Bar mat lint, bottle-cap fragments, lime pith, and human hair all pull into the intake screen. The screen plugs solid in 30 days of busy service. Once the screen blocks, head pressure climbs, the compressor short-cycles harder, and the cabinet drifts warm.",
        "Service interval: 30 days for high-volume bars, 60 days for slower operations. The cleaning is a quick visit — pull the side panel, vacuum the intake, brush the coil fins, hose the screen if it's removable. Twenty minutes per cabinet. We typically include underbar cleaning as part of the same visit as the dispatch-side bar work, so the operator isn't paying for two separate trips.",
      ],
    },
    {
      heading: "5. Warm-bottle loading and the duty-cycle math",
      body: [
        "When a bar-back stocks a case of 50°F beer into a cabinet holding 38°F inventory, the cabinet's heat load spikes. A True TBB-24 will recover in 25 to 35 minutes if the condenser is clean and the door stays mostly closed. During Friday rush, the door doesn't stay closed and the cabinet doesn't recover. The compressor runs continuously and the inventory averages 42 to 44°F all night.",
        "Best practice for underbar inventory: a separate walk-in or reach-in serves as the bottle staging area, with product pulled out 30 minutes before service to chill. Bottles transfer to underbar at 38°F instead of 50°F. The underbar compressor only has to maintain temperature, not pull it down, and the duty cycle drops by half. This is workflow more than equipment, but it's the single biggest factor in underbar reliability.",
      ],
    },
    {
      heading: "6. NSF, DBPR, and the underbar inspection angle",
      body: [
        "Florida DBPR inspectors typically check underbar refrigeration for product temperature and surface cleanliness. NSF/ANSI 2 covers underbar equipment specifically — food-contact surfaces must be smooth, non-corroding, and cleanable. A cabinet with bottle-cap rust streaks, mold in the gaskets, or biofilm in the drain pan is a priority violation.",
        "Berne Commercial cleans drain pans, sanitizes the cabinet interior, and inspects the gasket condition at every underbar service call. The work order documents condition and any required follow-up. For bars running corporate compliance audits, that documentation produces the per-unit history that audit teams ask for.",
      ],
    },
    {
      heading: "7. The capital-replacement cycle on underbar coolers",
      body: [
        "A True TBB-24 in a busy bar isn't a 15-year asset. Plan replacement at year 6 to 8. The compressor will fail. The door tracks will be worn past repair. The cabinet face will have impact damage from speed-rail collisions. Trying to keep the original cabinet running past year 9 costs more in repairs than the replacement unit would. Bars that don't budget for this end up running broken units that affect service quality.",
        "Our quarterly bar-service contracts include a per-unit condition assessment that flags units approaching end-of-life 12 to 18 months in advance. The PM or owner can plan the capital purchase, schedule the swap during a slow season, and avoid the emergency-replacement scenario where the cabinet dies on a Friday and the only available replacement is whatever the supply house has in stock that afternoon. Planning beats reacting every time on underbar equipment.",
      ],
    },
    {
      heading: "8. Calling for service and what to know first",
      body: [
        "When you call Berne Commercial at (754) 345-4515 about underbar refrigeration, our dispatcher will ask for the unit model, the cabinet temperature reading, the door type (sliding or hinged), and the install date. That information loads the truck — door gaskets, door track lubricant, hard-start kits, and a service-grade vacuum for condenser work.",
        "Our $89 commercial service call covers the diagnostic and the cleaning. Most underbar problems are resolved in a single visit. For bars running multiple underbar cabinets across multiple locations, we offer route-service contracts at 30-day intervals. For residential outdoor bars (Sub-Zero outdoor coolers, Lynx, Hestan beverage centers) our sister site bernerepair.com handles those — same dispatch desk routes the call to the right technician.",
      ],
    },
  ],
  internalLinks: [
    { label: "Reach-in cooler repair", href: "/services/reach-in-cooler-repair" },
    { label: "Commercial refrigeration repair", href: "/services/commercial-refrigeration-repair" },
    { label: "Margarita machine repair", href: "/services/margarita-machine-repair" },
    { label: "Ice machine repair", href: "/services/ice-machine-repair" },
  ],
  relatedSlugs: [
    "beer-system-glycol-chiller-issues",
    "true-refrigeration-door-gasket-replacement",
  ],
}

import type { Article } from "../articles"

export const hotelBanquetRefrigeration: Article = {
  slug: "hotel-banquet-refrigeration-service",
  title:
    "Hotel Banquet Catering Equipment — Common Refrigeration Service Calls",
  description:
    "Hotel banquet kitchens stress refrigeration in ways that 24/7 restaurants don't. A working tech's read on Traulsen G-Series, Continental DL2R, and walk-in service calls in event-cycle catering operations.",
  publishedAt: "2026-06-25T09:00:00Z",
  readingMinutes: 9,
  category: "Hospitality",
  tags: [
    "hotel banquet",
    "catering",
    "Traulsen",
    "Continental",
    "refrigeration",
    "hospitality",
  ],
  lede: "A banquet chef at a Miami Beach convention hotel calls Berne Commercial at 4:50 PM, an hour before a 400-cover plated dinner. The Traulsen G20010 in the banquet prep line is reading 48°F and the chilled appetizer plates are warming on the lower shelf. Banquet refrigeration fails differently than restaurant refrigeration. The duty cycle is event-driven. Doors hold open for 20 minutes during plating. Product gets piled and then emptied. The compressor either short-cycles all day or runs flat-out for four hours. Here's what our techs see most often on hotel banquet calls.",
  sections: [
    {
      heading: "1. The event-cycle duty pattern and why it's hard on compressors",
      body: [
        "A restaurant reach-in opens and closes maybe 200 times a day on a steady cycle. A banquet reach-in opens 20 times in the prep period, stays closed for hours, then opens 60 times in 90 minutes during plating, sometimes with the door held open by a server's hip. The compressor doesn't get the consistent duty cycle it was designed for. Short-cycling during prep, then long-runtime under peak load, both stress the same components in different ways.",
        "Traulsen G-Series reach-ins (G20010, G21010, G24010) handle this duty pattern better than most. The compressor is sized aggressively and the evaporator coil is oversized for the cabinet volume. Continental DL2R and Hoshizaki CR2A are also strong in this duty pattern. The unit that struggles the most in banquet service is the budget reach-in — anything without a real commercial-grade compressor doesn't last more than 3 years on a banquet line.",
      ],
    },
    {
      heading: "2. Door-open infiltration during plating",
      body: [
        "When a server holds the door open for 90 seconds to pull six plates, the cabinet loses 30 to 40 percent of its cold air. The evaporator pulls back down in 4 to 6 minutes if the unit is healthy. Multiply that by 60 plate-pulls in a 90-minute service window and the cabinet never recovers. Product temperature climbs from 38°F to 44°F by the end of service, and the unit can't catch up until well after the event ends.",
        "The fix isn't more compressor capacity. It's workflow. A pass-through reach-in (Traulsen RH-series, Continental DL2RX) with hot-line servers on one side and pantry on the other cuts door-open time in half. Banquet kitchens that retrofit for pass-through configurations see immediate temperature stability during service. If a retrofit isn't in the budget, scheduling plate-pulls in batches and using insulated plate covers buys back 3 to 4 degrees.",
      ],
    },
    {
      heading: "3. Walk-in compressor short-cycling on event days",
      body: [
        "A banquet walk-in cooler that holds 60 cases of product for a 600-cover wedding runs the compressor on a different cycle than the same walk-in holding daily restaurant prep. Door-traffic spikes 300 percent during event setup, the compressor never gets to satisfy and rest, and the suction-line frosting that develops can stress the TXV and the receiver. Our techs see walk-in TXV failures at hotels disproportionately often relative to standalone restaurants.",
        "Diagnostic: pull gauges during a known event day. If suction pressure is bouncing wildly because the TXV is hunting, the valve needs adjustment or replacement. A Sporlan SHF or Parker RBV is typical, $180 in parts, 90 minutes labor, and brazing requires recovery and a fresh charge. EPA 608 certification is required for any refrigerant work. Ask the tech to show the card.",
      ],
    },
    {
      heading: "4. Banquet ice — staging and demand spikes",
      body: [
        "A 600-cover banquet needs roughly 200 pounds of ice for water-glass service, another 200 pounds for the bar setup, and 80 pounds for the buffet ice troughs. Hotel ice machines (typically Hoshizaki KM-901MAJ or Manitowoc Indigo NXT IDT0900) are sized for the daily average, not the event peak. The unit can't make 480 pounds in the four hours between lunch service and the event call.",
        "The fix is staging. Use a 700-pound storage bin (Hoshizaki B-700SF or Manitowoc D-570) and a bin-thermostat schedule that runs the machine through the night to stockpile. Pull from storage during the event. We've fielded enough banquet ice calls during a Saturday wedding to know that a bin upgrade pays for itself in three events.",
      ],
    },
    {
      heading: "5. Banquet pre-action and the post-event reset",
      body: [
        "The 24 hours after a large banquet are when small problems become big ones. The walk-in's been opened constantly during cleanup, the reach-in line is half-empty and overcompensating, the ice machine just dropped 400 pounds and is rebuilding inventory. If anything was marginal going into the event, the post-event period is when it shows. Property managers who walk the equipment list at 10 AM the morning after a big event catch 70 percent of failures before they affect the next service.",
        "Our techs work with banquet kitchens on a pre-event and post-event verification list. Pre-event: condenser cleanings, door gasket checks, ice machine cleanout, drain line flush, and refrigerant pressure verification. Post-event: temperature scan, drain check, and a 10-minute look at anything that ran hot during the service. That schedule keeps the equipment running through a season of 20 to 30 events.",
      ],
    },
    {
      heading: "6. NSF, Florida DBPR, and hotel-specific code",
      body: [
        "Hotel banquet kitchens are inspected by both Florida DBPR and (for hotel restaurants) the local county health department. NSF/ANSI 7 governs commercial refrigeration. The two priority violations that show up most often on banquet inspections: product holding above 41°F and condensate buildup on evaporator coils. Both come from the duty-cycle stress described above. Both are preventable with the right service interval.",
        "Berne Commercial logs every banquet service call with cabinet temperature, evaporator temperature, suction and discharge pressures, and the date of the last condenser clean. That record stays on file and produces a quarterly compliance report for the hotel's F&B director. For corporate-owned hotel chains running a service-vendor matrix, the report format matches what corporate compliance teams expect.",
      ],
    },
    {
      heading: "7. Catering-side mobile refrigeration and event setups",
      body: [
        "Hotels that run off-property catering events also use mobile refrigeration: insulated transport carts, portable reach-ins on event-floor setups, and rented refrigerated trailers for outdoor receptions. Each adds a refrigeration asset to the catering operation, and each fails in its own way. A Cambro UPCH800 holding cart on a six-hour Miami beach reception isn't going to keep product at safe temperature without ice replenishment and shade.",
        "The catering team needs a refrigeration plan per event, not per unit. We work with hotel banquet managers on event-specific pre-call walkthroughs for any setup outside the kitchen building. The pre-call covers ambient temperature expectations, ice supply, generator capacity if applicable, and product staging timeline. That walkthrough avoids the on-site emergency call during the wedding reception when something inevitable goes wrong.",
      ],
    },
    {
      heading: "8. Service calls and what to know first",
      body: [
        "When you call Berne Commercial at (754) 345-4515 about hotel banquet refrigeration, our dispatcher needs the event calendar. If a unit is running warm two days before a 400-cover dinner, that call gets priority dispatch. If the unit is warm on a Tuesday with no event for a week, we schedule for the next morning. Both calls run the same $89 commercial service call, but the urgency differs.",
        "For hotel residential operations (executive housing, long-stay suites with kitchenettes), the residential team at bernerepair.com handles in-room reach-ins, ice makers, and dishwashers. The commercial team works banquet, restaurant, lobby bar, and back-of-house. Two trucks, two specialties, one umbrella for the property manager to call.",
      ],
    },
  ],
  internalLinks: [
    {
      label: "Commercial refrigeration repair",
      href: "/services/commercial-refrigeration-repair",
    },
    {
      label: "Walk-in cooler repair",
      href: "/services/walk-in-cooler-repair",
    },
    {
      label: "Reach-in cooler repair",
      href: "/services/reach-in-cooler-repair",
    },
    {
      label: "Ice machine repair",
      href: "/services/ice-machine-repair",
    },
  ],
  relatedSlugs: [
    "commercial-walk-in-cooler-temperature-issues",
    "nsf-inspector-failed-reach-in-recovery",
  ],
}

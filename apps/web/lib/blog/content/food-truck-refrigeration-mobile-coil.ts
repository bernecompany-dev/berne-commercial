import type { Article } from "../articles"

export const foodTruckRefrigeration: Article = {
  slug: "food-truck-refrigeration-mobile-coil",
  title:
    "Food Truck Refrigeration Service — Mobile Coil Cleaning in Heat",
  description:
    "A food truck reach-in or undercounter unit faces ambient temperatures restaurant equipment never sees. A field tech's read on True TUC-27F, Atosa MGF8401, and Beverage-Air UCR27 service intervals in mobile use.",
  publishedAt: "2026-07-15T09:00:00Z",
  readingMinutes: 9,
  category: "Mobile Food Service",
  tags: [
    "food truck",
    "mobile refrigeration",
    "True",
    "Atosa",
    "Beverage-Air",
    "preventive maintenance",
  ],
  lede: "A food-truck operator at a Wynwood event calls Berne Commercial mid-shift on a 94-degree Saturday because the True TUC-27F under the prep window is creeping past 45°F with a full lunch load. The condenser is running, the door's been opening every 30 seconds, and the ambient inside the truck is somewhere north of 100°F. Mobile refrigeration faces conditions that a restaurant unit never sees, and the service schedule has to match the operating environment. Here's what we've learned from two years of food-truck route work in South Florida.",
  sections: [
    {
      heading: "1. The ambient-temperature math no spec sheet shows",
      body: [
        "Refrigeration capacity charts assume 75 to 90°F ambient air entering the condenser. Inside a working food truck at noon in July, ambient at the condenser intake is routinely 105 to 115°F. The compressor is rejecting heat into air that's barely cooler than the condenser coil itself, head pressure climbs, and the suction temperature can't pull down enough to cycle off.",
        "A True TUC-27F, Atosa MGF8401, or Beverage-Air UCR27 specced for restaurant use will hold 41°F in that environment if the condenser is clean, the door is closed, and the unit isn't loaded with warm prep. Add any one variable (dirty condenser, frequent door cycling, prep that came out of an iced cooler at 50°F) and the unit can't catch up. Most food-truck refrigeration failures are environmental, not mechanical.",
      ],
    },
    {
      heading: "2. Condenser cleaning interval — 30 days, not 90",
      body: [
        "Restaurant condensers in fixed kitchens get cleaned every 90 days. Mobile units running event circuits hit that level of fouling in 30 days. Dust from gravel parking lots, smoke from neighboring trucks, beach salt at coastal events, and pollen all blow through the condenser intake. The intake screen plugs solid in two weeks of busy service.",
        "Our truck-route service runs a 30-day condenser cleaning on every mobile refrigeration unit we maintain. A foaming coil cleaner (Nu-Calgon Evap Pow'r), a soft brush, and a low-pressure rinse. Twenty minutes per unit on a typical food truck with two reach-ins and an undercounter. The operator schedules this during off-event days. Skip it for two cycles and the compressor pays the price.",
      ],
    },
    {
      heading: "3. Vibration, road shock, and the components most likely to fail",
      body: [
        "A food truck driving over Florida road expansion joints transmits vibration through the body and into every appliance. Compressor mounting feet (typically rubber grommets) crack and lose damping after 18 to 24 months. The capillary tube on a Beverage-Air UCR27 can work-harden at the bends and develop a slow leak. Door hinges on a True TUC-27F loosen against the gasket seal and the unit infiltrates warm air during transit.",
        "Our pre-event inspection runs a 5-minute checklist: compressor mount integrity, capillary tube routing (any rub points get protected with vibration tape), door hinge tightness, gasket continuity, and the drain line routing. Drain lines especially — a clogged drain on a moving truck floods the cabinet within a couple of stops. We catch this at scheduled service before the operator sees water on the prep floor.",
      ],
    },
    {
      heading: "4. Generator power and the voltage envelope",
      body: [
        "A food truck running on a 7,500-watt portable generator (Honda EU7000iS, Champion 100165) delivers voltage that swings between 105 and 130 VAC under load changes. Refrigeration compressors tolerate roughly 108 to 132 VAC. A weak generator running at 100 VAC under load won't start the compressor. The unit reads 'off' on the thermostat because the relay can't pull in.",
        "Test: a clamp meter on the supply leg during startup. If voltage drops below 105 VAC when the compressor tries to start, the generator is undersized or running rough. Often the fix is a tune-up on the generator, not anything in the refrigeration itself. We've spent two hours diagnosing a compressor that turned out to be perfectly fine — the operator's generator had carbon-fouled spark plugs and couldn't make rated output. Check the generator first.",
      ],
    },
    {
      heading: "5. Refrigerant charge on R290 mobile units",
      body: [
        "Most current food-truck-sized reach-ins use R290 propane refrigerant. The factory charge is small (typically 1.5 to 3 ounces) and the system is critically charged. There's no service port on most R290 units. A leak repair requires a fresh evaporator-and-condenser swap or a brazed-and-recharged repair using R290-rated tooling and ventilation.",
        "R290 is flammable. EPA 608 with Section 608 Type II is required, and most service shops won't touch R290 because of the equipment and training cost. We do. Our trucks carry R290-rated recovery machines, brazing torches, and ventilation fans. If a food-truck unit needs refrigerant work, the operator needs a vendor who's actually set up for it. Ask the question on the phone before scheduling.",
      ],
    },
    {
      heading: "6. NSF, mobile-vendor permits, and DBPR mobile rules",
      body: [
        "Florida Mobile Food Dispensing Vehicle (MFDV) permits, issued by DBPR Division of Hotels and Restaurants, require refrigeration capable of holding food at or below 41°F. Inspections occur at commissary check-in and at random event sites. A unit running warm at an event triggers an immediate hold-and-correct order, and the truck stops serving.",
        "Mobile vendors who run scheduled preventive service have roughly half the violation rate of break-fix vendors. The math is clear: a $145 condenser cleaning every 30 days is cheaper than a single shut-down at a Wynwood Art Walk Saturday event. Berne Commercial logs every service with cabinet temperature, ambient temperature, condenser condition, and gasket condition. The log produces a monthly compliance document the operator can hand to the inspector on request.",
      ],
    },
    {
      heading: "7. Insulation, ventilation, and the truck-build itself",
      body: [
        "The way a food truck is built has more impact on refrigeration reliability than the refrigeration units themselves. A truck with insulated walls (R-13 minimum), a properly sized roof vent or exhaust fan, and the refrigeration units mounted away from the cooking line will run 20 to 30 degrees cooler at the condenser intake than a truck where the reach-in sits next to the flat-top grill.",
        "When a new operator asks us about equipment selection, we ask first about the truck layout. A reach-in mounted under the prep window with the grill 6 feet away on the same side of the truck is fighting a losing battle from day one. Moving the unit to the opposite wall, adding a partition baffle, and ducting the condenser exhaust through a roof vent will save more equipment life than upgrading from a $1,200 reach-in to a $2,400 one. The mechanical design of the truck cabin is the foundation. Better to spend on insulation and ventilation than on premium reach-ins that fail in the same hot air.",
      ],
    },
    {
      heading: "8. Calling for service and route scheduling",
      body: [
        "When you call Berne Commercial at (754) 345-4515 about food-truck refrigeration, our dispatcher needs the truck location (commissary or roving), the unit model, and the symptom. If the truck's at an event, we run a mobile service call within 90 minutes within Miami-Dade and Broward. The $89 commercial service call applies.",
        "For operators running multiple trucks, we offer a route-service program that hits each truck on a 30-day cycle at the commissary during off-event hours. Pricing scales with fleet size. Our food-truck book and our restaurant book are the same techs and the same trucks — refrigeration is refrigeration. For residential operators running side businesses out of home garages (catering trailers, mobile bars), our sister site bernerepair.com covers residential-class units.",
      ],
    },
  ],
  internalLinks: [
    {
      label: "Commercial refrigeration repair",
      href: "/services/commercial-refrigeration-repair",
    },
    {
      label: "Reach-in cooler repair",
      href: "/services/reach-in-cooler-repair",
    },
    {
      label: "Ice machine repair",
      href: "/services/ice-machine-repair",
    },
    {
      label: "Commercial appliance repair",
      href: "/services/commercial-appliance-repair",
    },
  ],
  relatedSlugs: [
    "beverage-air-condenser-cleaning-coastal",
    "nsf-inspector-failed-reach-in-recovery",
  ],
}

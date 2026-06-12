import type { Article } from "../articles"

export const vulcanRangePilot: Article = {
  slug: "vulcan-range-pilot-wont-stay-lit",
  title:
    "Vulcan Range Pilot Won't Stay Lit — Thermocouple vs Gas Valve",
  description:
    "Your Vulcan V24F-6BN or VC44 keeps dropping pilot during dinner service. A field diagnostic on the thermocouple voltage, pilot gas pressure, and Honeywell safety valve sequence.",
  publishedAt: "2026-06-29T09:00:00Z",
  readingMinutes: 9,
  category: "Restaurant Equipment",
  tags: [
    "ranges",
    "Vulcan",
    "thermocouple",
    "gas equipment",
    "pilot",
  ],
  lede: "A line cook at a Doral steakhouse lights the front-left pilot on the Vulcan V24F-6BN, holds the safety valve in for the usual 30 seconds, lets go, and watches the pilot die for the fourth time tonight. The grill side's running fine. Two burners on the right are running fine. But that one pilot won't hold past the moment the cook's finger leaves the valve. A range pilot that won't stay lit is one of three failures, and the diagnostic order saves an hour of guessing and a wrong part order.",
  sections: [
    {
      heading: "1. What's actually happening when you hold the valve",
      body: [
        "On a standing-pilot range like the Vulcan V24F-6BN or the older Vulcan SX24, pressing and holding the safety valve manually opens the pilot gas line. Once the pilot lights, the flame heats a thermocouple bulb. That bulb generates roughly 25 to 30 millivolts of DC voltage by the time you've held the valve for 30 seconds. That voltage holds an electromagnet inside the safety valve open. When you release the valve, the magnet stays pulled in because the thermocouple is still hot.",
        "If the pilot dies the moment your finger releases, three things could be wrong: the thermocouple isn't generating enough voltage, the safety valve magnet has failed, or the pilot flame isn't sitting on the thermocouple correctly. The fourth possibility (often missed) is that the pilot gas pressure has dropped because something upstream got dirty.",
      ],
    },
    {
      heading: "2. Test the thermocouple with a millivolt meter",
      body: [
        "Pull the thermocouple lead off the safety valve. The lead has a knurled nut, a 3/8-inch open-end wrench breaks it loose. Light the pilot and hold the manual valve in. After 30 seconds, touch a multimeter set to DC millivolts across the thermocouple tip and the threaded body. A healthy thermocouple reads 25 to 35 mV. Anything under 18 mV won't hold the safety valve magnet, and the pilot drops the moment the magnet de-energizes.",
        "Thermocouples on a Vulcan V24F are a Honeywell Q309 or equivalent universal 18-inch model, around $18 in parts and a 10-minute swap. Carry a couple on the truck. They fail open after 3 to 5 years of duty cycle in a busy kitchen. Don't replace the safety valve until the thermocouple's been ruled out — a Robertshaw 7000BMVR safety valve runs $185 and changing it without ruling out the $18 part is how you lose money on a service call.",
      ],
    },
    {
      heading: "3. Inspect the pilot flame — color, height, and contact",
      body: [
        "A correctly burning pilot is a blue cone an inch tall with maybe a 1/4-inch yellow tip. The tip of the flame should envelop the thermocouple bulb. If the flame's yellow, weak, or split, the pilot orifice is dirty or the air shutter is misadjusted. If the flame's an inch off the thermocouple bulb because the pilot bracket got bent during a cleaning, voltage drops and the pilot drops.",
        "Pull the pilot assembly, blow it out with compressed air or pass a thin wire through the orifice. The Vulcan pilot orifice is a Honeywell or Maxitrol 0.014-inch drilling. Don't drill it bigger to make the flame more aggressive — that's how a downstream tech finds a soot-loaded pilot and a thermocouple bulb coated in carbon, and the same problem repeats in two weeks.",
      ],
    },
    {
      heading: "4. Pilot gas pressure and the regulator on the manifold",
      body: [
        "The Vulcan V24F is supplied at 7 inches water column for natural gas, 11 inches for LP. The manifold regulator sets pilot pressure inside that envelope. A failing regulator drops pilot pressure during high demand — when both ovens fire, the manifold pressure dips, and the pilot starves. Cook lights the pilot at 10 AM with no other burners on. Pilot holds. Dinner service starts, everything's firing, and that one pilot drops because manifold pressure went from 7 down to 5 inches WC.",
        "The diagnostic: a manometer plugged into the test port on the manifold. Read static pressure (no burners firing) and full-fire pressure (all burners on high). The delta should be under 0.5 inch WC. If you see a 2-inch drop, the gas line into the unit is undersized or the regulator is failing. Both are corrected before chasing thermocouples or safety valves.",
      ],
    },
    {
      heading: "5. The Honeywell safety valve and the magnet test",
      body: [
        "If thermocouple voltage is healthy (28+ mV under load) and the pilot flame is correctly positioned, the safety valve's electromagnet is the failure. The magnet's a $40 sub-assembly inside the Robertshaw 7000BMVR or Honeywell V8200 safety valve, but most techs replace the whole valve because the rebuild kit takes longer to install than a fresh valve.",
        "Test: pull the thermocouple, jumper a 9-volt battery through a 10-ohm resistor to the magnet terminals briefly (a few seconds maximum to avoid burning the coil), and listen for the magnet to click open. If it doesn't click, the magnet's gone. We see this on Vulcan units around year 8 to 10, often after the kitchen has run an oven-cleaning chemical that crept into the safety valve mounting and pitted the seat.",
      ],
    },
    {
      heading: "6. NSF, code, and what an inspector cares about",
      body: [
        "A range with an intermittent pilot is technically a code violation under NFPA 54 because the safety lockout isn't reliably preventing gas flow during a pilot outage. Florida DBPR inspectors don't typically test pilots, but the local fire marshal does on commercial kitchen inspections. A documented pilot-drop history with no repair ticket is the kind of finding that holds up a renewal.",
        "Berne Commercial logs every gas service call with manifold pressure readings, thermocouple voltage, and the gas valve serial. That record stays on file for the property and shows up in the annual fire inspection packet. For a chain operator running multiple Vulcan units across South Florida, this is documentation the corporate safety officer can actually use.",
      ],
    },
    {
      heading: "7. The high-limit switch and the auto-relight option",
      body: [
        "A separate high-limit safety on a Vulcan V24F-6BN protects against runaway temperature in the oven. If the high-limit trips and opens the safety circuit, the pilot won't relight even with a healthy thermocouple. The high-limit is a manual-reset Klixon snap-disc usually accessible by removing a side panel. A reset clears the lock. If the high-limit trips repeatedly, the oven thermostat is overshooting and the calibration needs corrected before the next attempt.",
        "Newer Vulcan installations sometimes spec the auto-relight (or 'spark ignition') option that eliminates the standing pilot entirely. These units use a hot-surface igniter and a flame-rectification sensor. They're not immune to pilot-equivalent failures — the igniter cracks, the sensor fouls — but the failure modes are different and the diagnostic tools are different. A Bryant or Honeywell hot-surface igniter runs about $45 and 20 minutes labor.",
      ],
    },
    {
      heading: "8. Calling for service and what to have ready",
      body: [
        "When you call Berne Commercial at (754) 345-4515 about a Vulcan pilot that won't hold, our dispatcher will ask for the model number off the back nameplate, the gas type (natural or LP), and whether the issue is on one burner or all burners. That information loads the truck correctly — thermocouples, a Honeywell safety valve, pilot orifices, and a manometer set.",
        "Our $89 commercial service call covers the on-site diagnostic. Most pilot failures are corrected the same visit. For residential ranges (Wolf, Viking, Thermador with similar standing-pilot designs) our sister site bernerepair.com handles those calls. We don't cross-staff trucks — the commercial techs run code-rated parts and the residential techs run UL-listed consumer parts, and you want the right one on each call.",
      ],
    },
  ],
  internalLinks: [
    { label: "Commercial range repair", href: "/services/commercial-range-repair" },
    { label: "Commercial oven repair", href: "/services/commercial-oven-repair" },
    { label: "Fryer repair", href: "/services/fryer-repair" },
    { label: "Request dispatch", href: "/request-dispatch" },
  ],
  relatedSlugs: [
    "commercial-fryer-thermostat-issues",
    "commercial-convection-oven-even-bake-failure",
  ],
}

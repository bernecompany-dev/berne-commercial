import type { Article } from "../articles"

export const hoshizakiKmWaterInletFlicker: Article = {
  slug: "hoshizaki-km-water-inlet-flicker-diagnosis",
  title:
    "Hoshizaki KM Series — Water Inlet Flicker Patterns and What They Mean",
  description:
    "A Hoshizaki KM-901MAJ flashing alarm code A1 or 3F isn't always the obvious cause. The flicker pattern, the inlet valve, the float switch, and the water-pressure regulator each tell a different diagnostic story.",
  publishedAt: "2026-09-10T09:00:00Z",
  readingMinutes: 10,
  category: "Commercial Refrigeration",
  tags: [
    "Hoshizaki",
    "KM series",
    "ice machine",
    "alarm codes",
    "diagnostics",
  ],
  lede: "A South Beach hotel pool bar Hoshizaki KM-901MAJ throws an A1 alarm at 11:47 AM on a Friday. The tech on duty resets the unit. It runs for 18 minutes, then alarms again. He resets again. By 1 PM the unit is alarming every 6 minutes and the bar is buying bagged ice from a Publix two blocks away. The flicker pattern of the alarm — how fast the LED is cycling, what code is flashing, what state the freeze cycle is in when it alarms — is the diagnostic key. Hoshizaki's KM series has four distinct water-inlet failure modes and the resolution for each is different. Most techs treat all four the same and get one right by accident.",
  sections: [
    {
      heading: "1. The Hoshizaki KM series — what alarm A1 actually means",
      body: [
        "The Hoshizaki KM-901MAJ, KM-1100MAJ, KM-1340MAJ and similar large-capacity models use vertical evaporators with a recirculating water spray, cleared by a hot-gas harvest cycle. The control board monitors water level via a float switch, water flow via the inlet valve cycle time, and freeze completion via a thermistor on the evaporator. Alarm A1 indicates 'no water detected' during freeze fill — but the cause underlying A1 has four possibilities.",
        "Cause one: inlet solenoid valve failure. Cause two: float switch failure. Cause three: low incoming water pressure. Cause four: scale obstruction in the water-distribution tube preventing the recirculating water from reaching the sensor. Each looks identical at the alarm panel. The flicker pattern and the cycle state where the alarm occurs tell you which one.",
      ],
    },
    {
      heading: "2. Reading the flicker pattern",
      body: [
        "Hoshizaki KM control boards display alarm codes via an LED sequence. A1 is one long flash, one short. The cycle state — visible by a separate LED on the control board — tells you whether the alarm fired during initial fill, during freeze, or during harvest. If A1 fires during initial fill and the inlet valve is audibly clicking but no water flows: solenoid failure. If A1 fires during initial fill and the inlet valve isn't clicking: float switch stuck closed (the board thinks water is present and never opens the valve).",
        "If A1 fires mid-freeze (the LED was on the freeze indicator before the alarm): water-distribution tube scale or pump failure preventing recirculation. If A1 fires during harvest with no water making it to the evaporator splash zone: inlet pressure issue or partial valve obstruction. Reading the LED state at the moment of alarm is the highest-value diagnostic data point.",
      ],
    },
    {
      heading: "3. Inlet solenoid — testing and replacement",
      body: [
        "Hoshizaki KM inlet solenoid: part 4A0455-01 on most KM series, $58 to $82 OEM. Test: power off, water off, lock and tag. Disconnect the solenoid leads. Test for continuity across the coil — should read 200 to 400 ohms. Open is a failed coil. Visual: pull the solenoid valve, look at the diaphragm — torn or scaled diaphragms cause partial flow that the board reads as 'no fill' because the level doesn't reach the sensor in time.",
        "Replacement is straightforward — water off, disconnect the supply line (3/8-inch flare), unscrew the solenoid body, install the new unit, reconnect. 30-minute job. Run a leak check after restoring water. Most KM solenoid failures we see in South Florida are scale-related diaphragm damage after 4 to 7 years of service on raw municipal water.",
      ],
    },
    {
      heading: "4. Float switch — the most-missed failure",
      body: [
        "The Hoshizaki KM float switch is a magnetic reed switch in a small chamber on the side of the sump. The float rises with water level and the magnet trips the reed switch. Two failure modes: switch stuck closed (always reads 'water present' — unit never refills) or switch stuck open (always reads 'no water' — unit fills continuously and overflows).",
        "Test: power off, pull the float chamber cover, observe the float. Lift it manually and watch for the reed switch click — should be audible with the cover off. If the float is sticky in the chamber (scale buildup on the float or the chamber wall), clean with Nu-Calgon Nickel-Safe and reinstall. If the reed switch doesn't click on float motion, the switch is failed. Part 2A1010-01, $42 OEM, 20-minute replacement.",
      ],
    },
    {
      heading: "5. Water pressure — the building issue, not the unit issue",
      body: [
        "Hoshizaki KM minimum water inlet pressure is 20 PSI. Below that, the inlet solenoid opens but the fill rate is slow enough that the board times out and alarms A1. Common cause: building water pressure dropped because of an upstream demand (a chef running multiple sinks during prep, an irrigation cycle on the hotel grounds, a maintenance crew flushing a riser).",
        "Diagnose by installing a pressure gauge on the inlet line and watching it during the fill cycle. Pressure dropping below 20 PSI when the fill solenoid opens is the diagnosis. Fix is either a pressure regulator/booster or a schedule adjustment (don't run the ice machine fill cycle simultaneously with the dishwasher final rinse on the same supply line). Not a unit problem. A plumbing-and-scheduling problem.",
      ],
    },
    {
      heading: "6. Water distribution tube scale",
      body: [
        "On a KM series unit, the recirculating water sprays across the evaporator via a horizontal distribution tube with 24 to 32 holes (depending on the model). Scale narrows the holes over time. The board doesn't directly measure spray pressure, but with the spray pattern degraded the freeze cycle takes longer to complete, the harvest cycle initiates late, and the next-fill float reading is off-timing — which the board interprets as a sensor or fill problem.",
        "Pull the distribution tube every 90 days on raw water (180 days on filtered). Soak in Nu-Calgon Nickel-Safe at full strength for 30 minutes. Inspect each hole with a fine pick. Reinstall and run a freeze cycle to verify even spray across the evaporator. This is the maintenance step that most ice machine techs skip and most A1 alarms trace back to.",
      ],
    },
    {
      heading: "7. The diagnostic flowchart we actually use",
      body: [
        "Step 1: power-cycle the unit and observe the alarm. If it doesn't return within 30 minutes, log it as an intermittent and recheck filter and water pressure. Step 2: if the alarm returns, watch which LED state the board is in at the moment of alarm. Step 3: based on the state, run the specific test — solenoid continuity, float function, pressure gauge, or distribution tube inspection. Step 4: confirm the fix by running 3 consecutive cycles to completion without alarm.",
        "This flowchart resolves about 90 percent of KM A1 alarms in a single visit. The remaining 10 percent involve control-board issues, thermistor failures, or refrigeration-side issues that mimic water-inlet symptoms. Those require deeper diagnostic.",
      ],
    },
    {
      heading: "8. NSF compliance and the cleaning log",
      body: [
        "NSF/ANSI 12 governs commercial ice machines. The Florida DBPR inspector will ask for the cleaning log and will inspect for visible scale, slime, or contamination. A KM series with documented quarterly descaling, monthly filter checks, and a clean bin passes inspection without comment. A unit with visible scale on the spray bar or biofilm in the bin gets cited.",
        "Berne Commercial documents every service visit including the alarm history, the diagnostic actions taken, the parts replaced, and the next-due cleaning date. The log goes to the kitchen manager and stays in our dispatch system for the next visit.",
      ],
    },
    {
      heading: "Same-day Hoshizaki service",
      body: [
        "Berne Commercial Repair services Hoshizaki KM, KMD, DCM, F-series, and FD-series ice machines across Miami-Dade, Broward, and Palm Beach. Alarm diagnostics, descaling, parts replacement, and full refrigeration service. $89 commercial service call applied to the approved repair. Call (754) 345-4515 or request through our ice machine repair page.",
      ],
    },
  ],
  internalLinks: [
    { label: "Ice machine repair", href: "/services/ice-machine-repair" },
    { label: "Hoshizaki repair", href: "/brands/hoshizaki" },
    { label: "Restaurants", href: "/industries/restaurants" },
    { label: "Hotels", href: "/industries/hotels" },
    { label: "Request dispatch", href: "/request-dispatch" },
  ],
  relatedSlugs: [
    "hoshizaki-vs-manitowoc-vs-scotsman-south-florida",
    "manitowoc-indigo-nxt-it-series-water-hardness",
  ],
}

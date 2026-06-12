import type { Article } from "../articles"

export const manitowocErrorCodesFieldGuide: Article = {
  slug: "manitowoc-error-codes-field-guide",
  title:
    "Manitowoc Ice Machine Error Codes: What You Can Clear Yourself vs What Needs a Tech",
  description:
    "A field guide to Manitowoc Indigo/Indigo NXT and i-Series fault codes — which alarms an operator can safely clear, which mean stop-and-call, and what each repair typically costs in South Florida.",
  publishedAt: "2026-06-25T09:00:00Z",
  readingMinutes: 9,
  category: "Commercial Refrigeration",
  tags: [
    "Manitowoc",
    "ice machine",
    "error codes",
    "Indigo NXT",
    "troubleshooting",
  ],
  lede: "A Wynwood bar manager texted us a photo of his Manitowoc Indigo NXT display at 11pm on a Friday: 'Long Freeze Cycle' alarm, machine stopped, bar packed. He had already power-cycled it twice — the alarm came back both times, because the alarm was doing its job: the machine had a real problem (a scaled evaporator, it turned out) and was protecting itself. Manitowoc's diagnostics are among the best in commercial ice, but only if you know which codes are operator-clearable housekeeping and which are the machine telling you to stop. Here is the field guide we wish every account had taped inside the bin door.",
  sections: [
    {
      heading: "1. How Manitowoc diagnostics work",
      body: [
        "Modern Manitowoc machines (Indigo, Indigo NXT, i-Series, and the NEO undercounters) run continuous self-diagnostics and surface faults on the front display — full text on Indigo NXT touchscreens, code numbers on older panels. Every fault is also logged with a timestamp, which matters: the event history tells a tech whether your 'one-time alarm' has actually fired thirty times this month.",
        "The golden rule: clearing an alarm does not fix its cause. Some alarms are transient (a door left open, a brief water outage) and clear legitimately. Repeating alarms are the machine reporting a developing failure, and repeated power-cycling to silence them is how a $150 repair becomes a $900 one.",
      ],
    },
    {
      heading: "2. Operator-clearable: check these before calling anyone",
      body: [
        "Water-related alarms ('Water System', 'No Water', long water-fill times): check that the water supply valve is open, the filter isn't overdue (a clogged filter throttles fill flow), and there hasn't been a building water interruption. Restore water, clear the alarm once, and watch the next cycle. Bin-related stops: the machine pausing with a full bin is normal operation, not a fault — but if it stops with the bin half empty, the bin-level sensor (a $60-$140 part) may be fouled; wiping it clean per the manual is fair game.",
        "Cleaning reminders: Indigo platforms track time-since-cleaning and will nag — and eventually derate — when cleaning is overdue. Running the cleaning cycle with Manitowoc-approved cleaner is absolutely an operator task (your staff can do it, or it rides in a service contract). High ambient warnings in summer: check that the air filter and condenser intake aren't blocked by boxes before assuming the worst.",
      ],
    },
    {
      heading: "3. Stop-and-call: codes that mean a real failure",
      body: [
        "'Long Freeze Cycle' / 'Freeze Time Exceeded': the classic scaled-evaporator or low-refrigerant signature. The machine is working too hard to make a batch; running it harder finishes off the evaporator. Typical fixes: professional descale ($180-$260) up to refrigerant leak diagnosis ($400-$900). 'Long Harvest' / 'Harvest Failure': ice isn't releasing — harvest sensor drift ($80-$180), a stuck hot-gas valve ($200-$380), or scale again.",
        "'High Discharge Temperature' / condenser alarms: fouled condenser coil or dead fan motor ($120-$260) — in coastal South Florida accounts, salt-corroded fan motors dominate this code. Compressor-related faults and repeated trips of any kind: stop the machine and call. A compressor protecting itself on thermal overload is days from not protecting itself anymore, and compressor replacement runs $700-$1,400 against a $120-$180 start-component fix caught early.",
      ],
    },
    {
      heading: "4. The South Florida modifier: scale accelerates everything",
      body: [
        "Most Manitowoc fault codes in our market trace back to one root cause: hard-water scale. Scale on the evaporator slows freeze cycles (Long Freeze alarms), distorts harvest release (Long Harvest), and fouls the water-level probes and bin sensors that trigger half the nuisance alarms operators clear daily. Manitowoc's own water-quality guidance is not optional advice here — it is the difference between a 7-year and a 14-year machine.",
        "The fix stack: a proper water filter changed on schedule ($40-$90 per change), quarterly professional cleaning ($180-$260 per visit or $720-$960/year on contract), and a hard look at the [Manitowoc vs Hoshizaki](/compare/manitowoc-vs-hoshizaki-ice) evaporator differences if you are choosing your next machine — see also our [Indigo NXT water-hardness deep dive](/blog/manitowoc-indigo-nxt-it-series-water-hardness).",
      ],
    },
    {
      heading: "5. What NOT to do",
      body: [
        "Don't power-cycle past a repeating alarm more than once — the event log will tell our tech everything, but the compressor you cooked in the meantime will not uncook. Don't run vinegar or generic descaler through the machine; nickel-plated evaporators require nickel-safe cleaner, and the wrong chemical voids what's left of your warranty along with the plating. Don't bypass or tape over the bin switch to 'keep it making ice' — that bin switch is the only thing standing between you and a flooded floor.",
        "And don't ignore a machine that 'fixed itself.' Faults that disappear in cool overnight hours and return every afternoon are heat-load problems announcing themselves on a schedule.",
      ],
    },
    {
      heading: "6. The 15-minute weekly habit that prevents most calls",
      body: [
        "Once a week, have a manager do four things: look at the display (any logged alarms?), look at the ice (full cubes or thin/cloudy?), look at the air filter and condenser intake (clear?), and look under the machine (dry?). Thin ice, new noises, longer cycles, and small leaks are all pre-failure symptoms a week or three ahead of the alarm — and a scheduled $89 service call beats an emergency Friday-night one every time.",
        "Accounts on our quarterly contracts get this check done professionally with the cleaning — most of them haven't had an emergency ice call in years. That is not luck; ice machines are the most maintenance-predictable equipment we service.",
      ],
    },
    {
      heading: "Same-day Manitowoc service in South Florida",
      body: [
        "Berne Commercial Repair services Manitowoc ice machines daily across Miami-Dade, Broward, and Palm Beach — Indigo, Indigo NXT, i-Series, NEO, and legacy platforms, with harvest sensors, water valves, fan motors, and start components on the trucks. $89 commercial service call, free when you approve the repair. Call (754) 345-4515 or request dispatch through our [ice machine repair](/services/ice-machine-repair) page, and see the full [Manitowoc brand page](/brands/manitowoc) for platform coverage.",
      ],
    },
  ],
  internalLinks: [
    { label: "Ice machine repair", href: "/services/ice-machine-repair" },
    { label: "Manitowoc brand coverage", href: "/brands/manitowoc" },
    { label: "Manitowoc vs Hoshizaki comparison", href: "/compare/manitowoc-vs-hoshizaki-ice" },
    { label: "Request dispatch", href: "/request-dispatch" },
  ],
  relatedSlugs: [
    "manitowoc-indigo-nxt-it-series-water-hardness",
    "ice-machine-not-making-ice-restaurant",
  ],
}

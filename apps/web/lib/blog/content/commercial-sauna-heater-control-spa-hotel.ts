import type { Article } from "../articles"

export const commercialSaunaHeaterControl: Article = {
  slug: "commercial-sauna-heater-control-spa-hotel",
  title:
    "Commercial Sauna Heater & Controls Repair for Spas & Hotels",
  description:
    "A spa sauna that won't heat or a steam room that won't make steam. A field tech's diagnostic on Tylö/Helo, Amerec, Finnleo and Mr.Steam — three-phase heater elements, contactors, high-limits, digital controls and the steam-generator descale South Florida demands.",
  publishedAt: "2026-06-28T09:00:00Z",
  readingMinutes: 10,
  category: "Wellness & Spa",
  tags: [
    "commercial sauna",
    "steam room",
    "Tylo",
    "Amerec",
    "Mr.Steam",
    "spa equipment",
  ],
  lede: "A spa director at a Bal Harbour hotel calls on a Saturday: the men's locker-room sauna is cold and the Tylö heater 'just won't come on,' while the adjacent steam room is barely fogging. Members are already asking the front desk for comps. The control panel is lit, so it isn't a dead main — and a commercial sauna heater that quits with a live panel is almost always a contactor, a high-limit, or one open phase on the element bank, not the whole heater. The steam room next door is a different machine entirely, and in South Florida the answer there is usually scale.",
  sections: [
    {
      heading: "1. Commercial sauna heaters are three-phase, and that changes everything",
      body: [
        "A home sauna heater is a 4 to 6kW single-phase unit. A commercial sauna heater — Tylö, Helo, Finnleo, Amerec, Saunacore — is typically a 6 to 18kW three-phase load wired to a contactor, because the controls can't switch that current directly. That contactor pulls in every time the heater calls for heat, all day, every day, in a hot room, and it's the single most common failure on a commercial heater. A welded or dropped contactor leg leaves one phase of the element bank dead, so the heater warms weakly or not at all while the panel still reads 'on.'",
        "The diagnostic is a meter on all three phases at the heater terminals with the unit calling for heat. Full voltage on all three legs and a cold cavity points at the elements; a missing leg points at the contactor or its coil circuit. A commercial sauna contactor runs $80 to $220 and is a 30 to 45 minute swap once the heater is locked out. Never bridge a contactor to 'test' a commercial heater hot — these are 30 to 50 amp circuits and they will hurt you.",
      ],
    },
    {
      heading: "2. Heater elements and the one-leg-open tell",
      body: [
        "Sauna heater elements are resistance rods packed in a stack under the stones, and they fail open with age and thermal cycling. On a three-phase bank, one failed element usually opens one phase, and the giveaway is a heater that runs but takes forever to reach temperature, or heats unevenly with one bank of stones noticeably cooler. Measure resistance across each element leg cold and compare to the manufacturer's spec — an open element reads infinite, a degraded one reads high.",
        "Elements run $60 to $180 each and a commercial heater stacks several, so a full re-element on an aging 15kW unit can reach $400 to $900 in parts. That's where the repair-vs-replace conversation starts: a heater that's losing elements one after another and is past ten years of spa-duty service is often better replaced than chased. We give you that math straight, because as an independent we have no reason to sell you elements one month and a new heater the next. Always pull and inspect the stones too — packed wrong or fused together, they trap heat against the elements and shorten their life.",
      ],
    },
    {
      heading: "3. High-limits, thermostats and digital controls",
      body: [
        "Every commercial sauna has a high-limit (over-temp) cutoff, usually a capillary-bulb thermostat mounted in the cavity, that kills the heater if it runs away. These trip from a genuine overheat, a blocked sensor, or just fatigue, and a tripped high-limit presents exactly like a dead heater. Check it before condemning anything expensive — a high-limit thermostat is a $40 to $120 part. The operating thermostat or temperature sensor is separate; on older Finnleo and Amerec units it's an analog capillary stat, on modern Tylö (Pure, Elite) and Helo it's a digital sensor reporting to a control panel.",
        "Digital control boards — Tylö CC and Pure panels, Helo, Amerec AK/Club controls — are the modern expensive failure at $150 to $760. A panel that's dark, frozen, or throwing a sensor fault gets diagnosed by proving the sensor and its wiring first, because a corroded sensor connector in a hot, humid room mimics a dead board and cleans up in minutes. A good tech rules out the $50 sensor before quoting the $600 board. Polar HMI and similar timer-based commercial controls add a duty timer that has to be proven too — a member-safety feature that shuts the room down after a set run time.",
      ],
    },
    {
      heading: "4. Steam rooms are a separate machine: the generator",
      body: [
        "A steam room is not a wet sauna — it runs off a dedicated electric steam generator (Mr.Steam, Amerec, Tylö steam) mounted in a nearby mechanical space, plumbed to the room. Inside that generator is a heating element, a fill solenoid valve, water-level probes, a drain valve, and a control board. When a steam room makes weak steam or no steam, the generator is where you look, and in South Florida the first suspect is scale. Our hard water furs the element and coats the probe rods so the generator misreads its own water level.",
        "Scaled probes are the classic fault: coated in mineral, they tell the board the tank is full when it's low (so the element runs dry and the high-limit trips) or empty when it's full (so the solenoid floods to the drain). Descaling the tank, cleaning or replacing the probe rods, and proving the fill-and-drain cycle restores steam most of the time. A generator element runs $120 to $400, a fill solenoid $60 to $160, probe rods $30 to $90. A generator that auto-drains correctly after every use scales far slower — a stuck auto-drain that leaves hot mineral-laden water sitting in the tank is its own slow killer.",
      ],
    },
    {
      heading: "5. GFCI, grounding and why we never jumper a safety",
      body: [
        "Saunas and steam rooms are wet, high-current environments serving the public, so code is not optional: GFCI protection on the circuit, proper equipment grounding, and a working high-limit are what stand between a member and a shock or a burn. When a commercial sauna or steam circuit nuisance-trips the breaker or GFCI, the lazy 'fix' is to swap to a non-GFCI breaker or bridge the high-limit. We don't do that, and any company that does is handing the facility a liability claim.",
        "A heater that trips a GFCI almost always has an element with a ground fault — moisture has wicked into the magnesium-oxide insulation inside a rod, and it leaks current to ground when hot. The fix is the failed element, not a different breaker. In steam rooms, moisture-damaged wiring at the generator and corroded terminals are the other common trip sources. We find the actual leakage path, repair it, and leave every safety in the circuit working, then verify the GFCI still trips on test as it should.",
      ],
    },
    {
      heading: "6. Infrared rooms are a third category",
      body: [
        "A growing number of spas and recovery gyms run far-infrared (FAR-IR) rooms instead of, or alongside, a traditional sauna. These have no stove, no stones, and no steam — they heat with FAR-IR emitter panels (carbon or ceramic) driven by relays or a low-voltage controller. The failure modes are different: a single dark panel is usually a failed emitter or its driver/relay, while a whole room that won't warm points at the main control or a power-supply fault.",
        "IR emitter panels run $120 to $400 each and are usually a straightforward panel-and-connector swap once the dead one is identified by elimination. The trap is assuming an IR room and a Finnish sauna are serviced the same way — they share almost no parts. When you call, telling the dispatcher whether the room is a traditional rock sauna, an infrared room, or a steam room routes the right parts to the truck and saves a second trip.",
      ],
    },
    {
      heading: "7. Doors, benches, ventilation and the things members notice",
      body: [
        "Beyond the heater and the controls, a commercial wellness room has wear items that hit the member experience before they hit the inspection. Door seals and gaskets degrade in the heat and humidity, and a room that won't reach temperature or holds it unevenly often has a door that no longer seals at the threshold. Bench and duckboard wood (Western red cedar, hemlock, abachi) splinters, loosens and discolors with heavy use, and a loose bench board is a liability waiting to happen.",
        "Ventilation is the quiet one. A sauna needs its intake-and-exhaust airflow to circulate heat and keep the room safe; a blocked or painted-over vent makes a room that's hot near the stove and cold on the far bench, and members read that as a broken heater. We check the door seal, the bench hardware and the vent path on a full service visit because the call may say 'heater problem' when the real complaint is an even, comfortable room — and that's a system, not just a stove.",
      ],
    },
    {
      heading: "8. Calling for service and what to know first",
      body: [
        "When you call Berne Commercial at (754) 345-4515 about a sauna or steam room, the dispatcher will ask the brand and model (Tylö, Helo, Finnleo, Amerec, Saunacore, Harvia, Mr.Steam), whether it's a traditional sauna, an infrared room or a steam room, and the symptom — won't heat, weak heat, no steam, or tripping a breaker. The room type and the trip detail decide what parts ride out: contactors and elements for a dead sauna, probe rods and a solenoid for a weak steam room.",
        "The $89 commercial service call covers the diagnostic, and it's free when you approve the repair. Many sauna and steam fixes — contactor, high-limit, sensor, probe, descale — close in one visit because those parts are on the truck; a control board or a full re-element may need a second trip with parts ordered. We're an independent commercial service company, not an authorized Tylö, Helo or Mr.Steam agent, so in-warranty equipment should use the factory network first. For residential home saunas and steam showers, our sister site bernerepair.com handles the home side.",
      ],
    },
  ],
  internalLinks: [
    {
      label: "Commercial Sauna Repair",
      href: "/services/commercial-sauna-repair",
    },
    {
      label: "Commercial Pool Heater Repair",
      href: "/services/commercial-pool-heater-repair",
    },
    {
      label: "Commercial Cold Plunge Repair",
      href: "/services/commercial-cold-plunge-repair",
    },
    { label: "Request dispatch", href: "/request-dispatch" },
  ],
  relatedSlugs: [
    "hotel-banquet-refrigeration-service",
    "pre-tourist-season-equipment-audit-miami",
  ],
}

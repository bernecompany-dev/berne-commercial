import { Wrench, Zap, Snowflake, Flame, Droplets, Cpu, Cog, CircuitBoard } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const ICON_PATTERNS: { match: RegExp; icon: LucideIcon }[] = [
  { match: /compressor|condenser|refrigerant|coil|defrost|evaporat|freezer|cooler|refriger|frost/i, icon: Snowflake },
  { match: /heating|burner|ignition|gas valve|flame|element|warming|warmer|warming/i, icon: Flame },
  { match: /electric|electronic|control board|controller|wiring|sensor|relay|switch|circuit/i, icon: CircuitBoard },
  { match: /water|pump|leak|drain|inlet|carbonator|valve|line|descal/i, icon: Droplets },
  { match: /motor|fan|drive|belt|bearing|auger|gearbox|drum/i, icon: Cog },
  { match: /thermostat|temperature|harvest|cycle|controller/i, icon: Cpu },
  { match: /power|cord|outlet|breaker/i, icon: Zap },
]

function iconFor(text: string): LucideIcon {
  for (const p of ICON_PATTERNS) {
    if (p.match.test(text)) return p.icon
  }
  return Wrench
}

export function ServiceBullets({ items }: { items: string[] }) {
  if (!items.length) return null
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const Icon = iconFor(item)
        return (
          <div
            key={item}
            className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
          >
            <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
              <Icon className="size-4" />
            </span>
            <span className="text-sm leading-snug text-foreground/85">
              {item}
            </span>
          </div>
        )
      })}
    </div>
  )
}

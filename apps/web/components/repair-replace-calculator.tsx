"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Calculator, Wrench, RefreshCw, AlertTriangle } from "lucide-react"
import { Card } from "@workspace/ui/components/card"
import { cn } from "@workspace/ui/lib/utils"
import { LinkButton } from "@/components/link-button"
import {
  COST_GROUPS,
  repairOrReplace,
  type Verdict,
} from "@/lib/data/repair-cost-guide"

/**
 * Repair-vs-replace calculator — pure React, no external dependencies.
 *
 * Inputs: equipment type (maps to a published lifespan + an approximate
 * installed replacement cost), age in years, and the repair quote. Output: a
 * repair / lean-replace / replace verdict from the shared repairOrReplace()
 * logic (the same 50%-rule + age-vs-lifespan framework documented on the page).
 *
 * Deliberately client-only and self-contained so it can be the page's
 * interactive hook for editorial + LLM links. No form submit, no network.
 */

const TONE: Record<
  Verdict["tone"],
  { ring: string; badge: string; icon: typeof Wrench; label: string }
> = {
  repair: {
    ring: "border-emerald-500/40 bg-emerald-500/5",
    badge: "bg-emerald-600 text-white",
    icon: Wrench,
    label: "text-emerald-700 dark:text-emerald-400",
  },
  "lean-replace": {
    ring: "border-amber-500/40 bg-amber-500/5",
    badge: "bg-amber-500 text-black",
    icon: AlertTriangle,
    label: "text-amber-700 dark:text-amber-400",
  },
  replace: {
    ring: "border-red-500/40 bg-red-500/5",
    badge: "bg-red-600 text-white",
    icon: RefreshCw,
    label: "text-red-700 dark:text-red-400",
  },
}

export function RepairReplaceCalculator() {
  const [groupKey, setGroupKey] = useState(COST_GROUPS[0]!.key)
  const [age, setAge] = useState("")
  const [repair, setRepair] = useState("")

  const group = useMemo(
    () => COST_GROUPS.find((g) => g.key === groupKey) ?? COST_GROUPS[0]!,
    [groupKey],
  )

  const ageNum = Number(age)
  const repairNum = Number(repair)
  const valid =
    age !== "" &&
    repair !== "" &&
    Number.isFinite(ageNum) &&
    Number.isFinite(repairNum) &&
    ageNum >= 0 &&
    repairNum > 0

  const verdict = valid ? repairOrReplace(group, ageNum, repairNum) : null
  const tone = verdict ? TONE[verdict.tone] : null
  const VerdictIcon = tone?.icon

  return (
    <Card className="gap-6 p-6 sm:p-8">
      <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
        <Calculator className="size-4" /> Repair-or-replace calculator
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium">Equipment type</span>
          <select
            value={groupKey}
            onChange={(e) => setGroupKey(e.target.value)}
            className="h-10 rounded-md border border-input bg-background px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {COST_GROUPS.map((g) => (
              <option key={g.key} value={g.key}>
                {g.label}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium">Age of unit (years)</span>
          <input
            type="number"
            inputMode="numeric"
            min={0}
            max={60}
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="e.g. 9"
            className="h-10 rounded-md border border-input bg-background px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium">Repair quote ($)</span>
          <input
            type="number"
            inputMode="numeric"
            min={0}
            value={repair}
            onChange={(e) => setRepair(e.target.value)}
            placeholder="e.g. 850"
            className="h-10 rounded-md border border-input bg-background px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </label>
      </div>

      <p className="text-xs text-muted-foreground">
        Typical life: <span className="font-medium text-foreground">{group.lifespan}</span>
        {" · "}Approx. installed replacement (for the 50% rule):{" "}
        <span className="font-medium text-foreground">
          ${group.replacementUSD.toLocaleString()}
        </span>{" "}
        <span aria-hidden>—</span> an estimate, not a quote.
      </p>

      <div aria-live="polite">
        {verdict && tone ? (
          <div className={cn("rounded-xl border p-5", tone.ring)}>
            <div className="flex items-center gap-2">
              {VerdictIcon ? (
                <VerdictIcon className={cn("size-5", tone.label)} />
              ) : null}
              <span
                className={cn(
                  "rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide",
                  tone.badge,
                )}
              >
                {verdict.label}
              </span>
              <span className="text-sm text-muted-foreground">
                Repair is {verdict.pctOfNew}% of a new unit
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-foreground">
              {verdict.explanation}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <LinkButton href={`/request-dispatch`} size="sm">
                Get a firm quote from a tech
              </LinkButton>
              <Link
                href={group.serviceLink.href}
                className="inline-flex items-center text-sm font-medium text-primary underline-offset-2 hover:underline"
              >
                {group.serviceLink.label} →
              </Link>
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5 text-sm text-muted-foreground">
            Pick an equipment type, enter the unit&apos;s age and the repair
            quote you were given. We&apos;ll apply the 50% rule against its
            typical lifespan and tell you whether to repair or replace.
          </div>
        )}
      </div>

      <p className="text-xs text-muted-foreground">
        Guidance only — a free on-site diagnosis ($89, waived with an approved
        repair) gives you the firm number. The replacement estimate is an
        approximate South Florida installed average used solely to apply the 50%
        rule; your actual quote will vary by brand, parts and access.
      </p>
    </Card>
  )
}

import { cn } from "@workspace/ui/lib/utils"

type BrandMarkProps = {
  className?: string
  variant?: "full" | "mark"
  tone?: "dark" | "light"
}

export function BrandMark({
  className,
  variant = "full",
  tone = "dark",
}: BrandMarkProps) {
  const stroke = tone === "dark" ? "currentColor" : "currentColor"
  const fill = tone === "dark" ? "currentColor" : "currentColor"

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5",
        tone === "dark" ? "text-foreground" : "text-background",
        className,
      )}
      aria-label="Berne Commercial Repair"
    >
      <svg
        viewBox="0 0 40 40"
        width="32"
        height="32"
        className="size-8 shrink-0"
        aria-hidden
        focusable="false"
      >
        <rect
          x="1.25"
          y="1.25"
          width="37.5"
          height="37.5"
          rx="9"
          fill="none"
          stroke={stroke}
          strokeWidth="1.5"
        />
        <path
          d="M12 11 H22 a5 5 0 0 1 0 10 H12 Z"
          fill="none"
          stroke={stroke}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M12 21 H24 a5 5 0 0 1 0 10 H12 Z"
          fill="none"
          stroke={stroke}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="29" cy="11" r="1.5" fill={fill} />
      </svg>
      {variant === "full" ? (
        <span className="flex flex-col leading-none">
          <span className="text-[15px] font-semibold tracking-tight">
            Berne
          </span>
          <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Commercial
          </span>
        </span>
      ) : null}
    </span>
  )
}

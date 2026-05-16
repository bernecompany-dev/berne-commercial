import Image from "next/image"
import fs from "node:fs"
import path from "node:path"
import { cn } from "@workspace/ui/lib/utils"

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

function fileExists(slug: string): string | null {
  const exts = ["svg", "png", "jpg", "webp"]
  const baseDir = path.join(process.cwd(), "public", "brands")
  for (const ext of exts) {
    const file = path.join(baseDir, `${slug}.${ext}`)
    try {
      if (fs.existsSync(file)) return `/brands/${slug}.${ext}`
    } catch {
      // ignore
    }
  }
  return null
}

export function BrandLogo({
  name,
  className,
  tone = "muted",
}: {
  name: string
  className?: string
  tone?: "muted" | "primary"
}) {
  const slug = slugify(name)
  const src = fileExists(slug)

  if (src) {
    return (
      <span
        className={cn(
          "relative inline-flex h-9 w-28 items-center justify-center",
          tone === "muted" ? "text-foreground/70" : "text-primary",
          className,
        )}
        title={name}
      >
        <Image
          src={src}
          alt={name}
          fill
          sizes="112px"
          className="object-contain"
        />
      </span>
    )
  }

  // Typographic wordmark fallback (original — no third-party logo content)
  return (
    <span
      className={cn(
        "inline-flex h-9 items-center rounded-md border border-border bg-card px-3 font-semibold tracking-tight",
        tone === "muted"
          ? "text-foreground/75"
          : "border-primary/30 bg-primary/5 text-primary",
        className,
      )}
      style={{
        fontFamily:
          "var(--font-sans), Inter, system-ui, -apple-system, Segoe UI, sans-serif",
        fontFeatureSettings: '"ss01", "cv11"',
      }}
      title={name}
    >
      <span className="text-[13px]">{name}</span>
    </span>
  )
}

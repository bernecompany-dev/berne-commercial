import Link from "next/link"
import { buttonVariants } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import type { ComponentProps } from "react"
import type { VariantProps } from "class-variance-authority"

type Variants = VariantProps<typeof buttonVariants>

export function LinkButton({
  href,
  className,
  variant,
  size,
  ...rest
}: ComponentProps<typeof Link> & Variants) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size }), className)}
      {...rest}
    />
  )
}

export function AnchorButton({
  className,
  variant,
  size,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & Variants) {
  return (
    <a
      className={cn(buttonVariants({ variant, size }), className)}
      {...rest}
    />
  )
}

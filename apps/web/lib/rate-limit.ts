// Simple in-memory rate limiter keyed by IP. Sufficient for current traffic;
// swap for a durable store (Upstash/Redis) before horizontal scaling.

type Bucket = { count: number; resetAt: number }

const BUCKETS = new Map<string, Bucket>()

export type RateLimitResult = {
  ok: boolean
  remaining: number
  resetAt: number
  retryAfterSeconds: number
}

export function rateLimit(
  key: string,
  opts: { limit: number; windowMs: number },
): RateLimitResult {
  const now = Date.now()
  const existing = BUCKETS.get(key)

  if (!existing || existing.resetAt <= now) {
    const resetAt = now + opts.windowMs
    BUCKETS.set(key, { count: 1, resetAt })
    return {
      ok: true,
      remaining: opts.limit - 1,
      resetAt,
      retryAfterSeconds: Math.ceil(opts.windowMs / 1000),
    }
  }

  existing.count += 1
  const remaining = Math.max(0, opts.limit - existing.count)
  const retryAfterSeconds = Math.max(
    1,
    Math.ceil((existing.resetAt - now) / 1000),
  )
  if (existing.count > opts.limit) {
    return {
      ok: false,
      remaining: 0,
      resetAt: existing.resetAt,
      retryAfterSeconds,
    }
  }
  return {
    ok: true,
    remaining,
    resetAt: existing.resetAt,
    retryAfterSeconds,
  }
}

export function clientIpFrom(req: Request): string {
  const xff = req.headers.get("x-forwarded-for")
  if (xff) {
    const first = xff.split(",")[0]?.trim()
    if (first) return first
  }
  const real = req.headers.get("x-real-ip")
  if (real) return real.trim()
  return "unknown"
}

// Sweep stale buckets occasionally to keep the map bounded.
let lastSweep = 0
export function sweepIfNeeded(now = Date.now()) {
  if (now - lastSweep < 60_000) return
  lastSweep = now
  for (const [k, v] of BUCKETS) {
    if (v.resetAt <= now) BUCKETS.delete(k)
  }
}

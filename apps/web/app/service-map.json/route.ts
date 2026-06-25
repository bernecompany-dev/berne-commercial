// Edge-cached proxy for the shared service-map dataset.
//
// The data is a single source of truth on bernerepair.com (regenerated weekly
// by the Miami cron). This route fetches it and serves it with a long
// s-maxage so Vercel's edge caches the ~500KB payload and the origin is hit
// at most once per revalidation window — instead of the old bare rewrite that
// re-proxied the full file from origin on EVERY map view (the dominant source
// of Vercel "Fast Origin Transfer").
//
// `revalidate` makes the fetch + this route ISR-cached; the explicit
// Cache-Control/CDN headers keep it warm at the edge and in browsers.

const SOURCE =
  "https://bernerepair.com/wp-content/uploads/data/service-map.json"

// Revalidate daily — the underlying data only changes weekly (Sunday cron),
// so once/day is plenty fresh and collapses origin transfer to near zero.
export const revalidate = 86400

export async function GET() {
  try {
    const upstream = await fetch(SOURCE, { next: { revalidate } })
    if (!upstream.ok) {
      return new Response("[]", {
        status: 200,
        headers: { "content-type": "application/json", "cache-control": "public, max-age=300" },
      })
    }
    const body = await upstream.text()
    return new Response(body, {
      status: 200,
      headers: {
        "content-type": "application/json",
        // Browser + Vercel edge caching. s-maxage governs the shared edge cache;
        // stale-while-revalidate serves the cached copy while refreshing.
        "cache-control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800",
      },
    })
  } catch {
    // Source unreachable → empty dataset, map renders empty (graceful, same as before).
    return new Response("[]", {
      status: 200,
      headers: { "content-type": "application/json", "cache-control": "public, max-age=300" },
    })
  }
}

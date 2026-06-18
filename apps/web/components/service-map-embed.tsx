"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Lazy, lightweight map embed for GEO / city pages.
 *
 * Performance contract:
 *  - Renders ONLY a fixed-height placeholder on first paint — nothing heavy,
 *    so it never touches LCP.
 *  - maplibre-gl (and its CSS) are not imported or initialized until the
 *    container scrolls into view (IntersectionObserver → dynamic import).
 *  - Reuses the cached /service-map.json fetch and draws only the "dots" pin
 *    layer (same OpenFreeMap style as the full ServiceMap), centered on the
 *    city — no fitBounds, no KPIs, no Pins/Heatmap toggle.
 */

type MapData = { points: [number, number][] }

export function ServiceMapEmbed({
  center,
  zoom,
  heightClass = "h-[360px]",
}: {
  center: [number, number]
  zoom: number
  heightClass?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [err, setErr] = useState(false)

  // Defer everything until the placeholder scrolls into view.
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin: "200px" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    let map: any
    let cancelled = false
    ;(async () => {
      try {
        if (!document.getElementById("maplibre-css")) {
          const l = document.createElement("link")
          l.id = "maplibre-css"
          l.rel = "stylesheet"
          l.href = "https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.css"
          document.head.appendChild(l)
        }
        const data: MapData = await (await fetch("/service-map.json")).json()
        if (cancelled) return
        const maplibregl: any = (await import("maplibre-gl")).default
        if (cancelled || !ref.current) return
        map = new maplibregl.Map({
          container: ref.current,
          style: "https://tiles.openfreemap.org/styles/liberty",
          center,
          zoom,
        })
        map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right")
        map.on("load", () => {
          map.addSource("pts", {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: data.points.map((p) => ({
                type: "Feature",
                geometry: { type: "Point", coordinates: p },
                properties: {},
              })),
            },
          })
          map.addLayer({
            id: "dots",
            type: "circle",
            source: "pts",
            paint: {
              "circle-radius": ["interpolate", ["linear"], ["zoom"], 8, 2, 11, 3.2, 15, 5],
              "circle-color": "#f97316",
              "circle-opacity": 0.55,
              "circle-stroke-color": "#c2410c",
              "circle-stroke-width": 0.4,
            },
          })
        })
      } catch {
        if (!cancelled) setErr(true)
      }
    })()
    return () => {
      cancelled = true
      if (map) map.remove()
    }
    // center/zoom are stable per page render; intentionally keyed on `visible`.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible])

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/60 shadow-sm">
      <div
        ref={ref}
        className={`${heightClass} w-full bg-accent/30`}
        aria-label="Map of completed appliance repairs in this area"
      />
      {err ? (
        <div className="absolute inset-0 flex items-center justify-center bg-background/90 p-6 text-center text-sm text-muted-foreground">
          Map unavailable right now. Coverage spans Miami-Dade, Broward and Palm Beach.
        </div>
      ) : null}
    </div>
  )
}

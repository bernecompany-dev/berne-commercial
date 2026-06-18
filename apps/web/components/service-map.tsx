"use client"

import { useEffect, useRef, useState } from "react"

type Kpis = {
  completed: number
  totalJobs: number
  citiesServed: string | number
  zipsCovered: number
  avgTicketUsd: number
  repeatCustomers: number
  customers: number
  sinceYear: string
  lastMonthCount: number | null
}
type MapData = {
  kpis: Kpis
  cities: { name: string; count: number }[]
  zipMarkers: { zip: string; count: number; lat: number; lng: number; city?: string }[]
  points: [number, number][]
}

const fmt = (n: number) => n.toLocaleString("en-US")

function Kpi({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-border/60 bg-background p-5 text-center shadow-sm">
      <div className="text-3xl font-semibold tracking-tight text-primary">{value}</div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  )
}

export function ServiceMap() {
  const ref = useRef<HTMLDivElement>(null)
  const [d, setD] = useState<MapData | null>(null)
  const [err, setErr] = useState<string | null>(null)

  useEffect(() => {
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
        setD(data)
        const maplibregl: any = (await import("maplibre-gl")).default
        if (cancelled || !ref.current) return
        map = new maplibregl.Map({
          container: ref.current,
          style: "https://tiles.openfreemap.org/styles/liberty",
          center: [-80.2, 26.05],
          zoom: 8.4,
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
            id: "heat",
            type: "heatmap",
            source: "pts",
            maxzoom: 14,
            paint: {
              "heatmap-weight": 0.6,
              "heatmap-intensity": ["interpolate", ["linear"], ["zoom"], 8, 1, 14, 3],
              "heatmap-radius": ["interpolate", ["linear"], ["zoom"], 8, 12, 14, 30],
              "heatmap-opacity": ["interpolate", ["linear"], ["zoom"], 8, 0.85, 13.5, 0.4],
              "heatmap-color": [
                "interpolate",
                ["linear"],
                ["heatmap-density"],
                0, "rgba(0,0,0,0)",
                0.2, "#fde68a",
                0.4, "#fb923c",
                0.6, "#f97316",
                0.8, "#ea580c",
                1, "#c2410c",
              ],
            },
          })
          map.addSource("zips", {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: data.zipMarkers.map((z) => ({
                type: "Feature",
                geometry: { type: "Point", coordinates: [z.lng, z.lat] },
                properties: { count: z.count, zip: z.zip, city: z.city || "" },
              })),
            },
          })
          map.addLayer({
            id: "zipc",
            type: "circle",
            source: "zips",
            minzoom: 8.5,
            paint: {
              "circle-radius": ["interpolate", ["linear"], ["get", "count"], 50, 7, 800, 28],
              "circle-color": "#ea580c",
              "circle-opacity": 0.85,
              "circle-stroke-color": "#ffffff",
              "circle-stroke-width": 1.5,
            },
          })
          const popup = new maplibregl.Popup({ closeButton: false })
          map.on("click", "zipc", (e: any) => {
            const f = e.features[0]
            const p = f.properties
            popup
              .setLngLat(f.geometry.coordinates)
              .setHTML(
                `<div style="font:13px/1.4 system-ui"><strong>${p.city || ("ZIP " + p.zip)}</strong><br>${fmt(Number(p.count))} services · ZIP ${p.zip}</div>`,
              )
              .addTo(map)
          })
          map.on("mouseenter", "zipc", () => (map.getCanvas().style.cursor = "pointer"))
          map.on("mouseleave", "zipc", () => (map.getCanvas().style.cursor = ""))
        })
      } catch (e: any) {
        if (!cancelled) setErr(String(e?.message || e))
      }
    })()
    return () => {
      cancelled = true
      if (map) map.remove()
    }
  }, [])

  const k = d?.kpis

  return (
    <section className="bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          <Kpi value={k ? fmt(k.completed) + "+" : "—"} label="Repairs completed" />
          <Kpi value={k ? String(k.citiesServed) : "—"} label="Cities served" />
          <Kpi value={k ? String(k.zipsCovered) + "+" : "—"} label="ZIP codes covered" />
          <Kpi value={k ? fmt(k.repeatCustomers) : "—"} label="Repeat customers" />
          <Kpi value={k ? "$" + fmt(k.avgTicketUsd) : "—"} label="Avg. repair ticket" />
        </div>

        <div className="relative mt-8 overflow-hidden rounded-2xl border border-border/60 shadow-sm">
          <div ref={ref} className="h-[460px] w-full sm:h-[560px]" aria-label="Map of completed appliance repairs across South Florida" />
          {err ? (
            <div className="absolute inset-0 flex items-center justify-center bg-background/90 p-6 text-center text-sm text-muted-foreground">
              Map failed to load ({err}). Coverage spans Miami-Dade, Broward and Palm Beach.
            </div>
          ) : null}
        </div>

        <p className="mt-3 text-xs text-muted-foreground">
          Each glow marks where our technicians have completed jobs. Locations are
          approximated to the neighborhood level for customer privacy — no exact
          addresses are shown. Counts reflect completed jobs since {k?.sinceYear || "2022"}.
        </p>
      </div>
    </section>
  )
}

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
  const mapRef = useRef<any>(null)
  const [d, setD] = useState<MapData | null>(null)
  const [err, setErr] = useState<string | null>(null)
  const [mode, setMode] = useState<"pins" | "heat">("pins")

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
          center: [-80.22, 26.05],
          zoom: 8.6,
        })
        mapRef.current = map
        map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right")
        map.on("load", () => {
          const fc = {
            type: "FeatureCollection",
            features: data.points.map((p) => ({
              type: "Feature",
              geometry: { type: "Point", coordinates: p },
              properties: {},
            })),
          }
          map.addSource("pts", { type: "geojson", data: fc })

          // PINS — thousands of individual service locations (the "swarm")
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

          // HEATMAP — hidden by default; toggled on
          map.addLayer({
            id: "heat",
            type: "heatmap",
            source: "pts",
            maxzoom: 15,
            layout: { visibility: "none" },
            paint: {
              "heatmap-weight": 0.5,
              "heatmap-intensity": ["interpolate", ["linear"], ["zoom"], 8, 1, 15, 3],
              "heatmap-radius": ["interpolate", ["linear"], ["zoom"], 8, 14, 15, 34],
              "heatmap-opacity": ["interpolate", ["linear"], ["zoom"], 8, 0.85, 14, 0.5],
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

          // Frame ALL coverage (South FL + Tampa/Sarasota/West coast), not a fixed center.
          if (data.points.length) {
            let minX = 180, minY = 90, maxX = -180, maxY = -90
            for (const [x, y] of data.points) {
              if (x < minX) minX = x
              if (x > maxX) maxX = x
              if (y < minY) minY = y
              if (y > maxY) maxY = y
            }
            map.fitBounds([[minX, minY], [maxX, maxY]], { padding: 50, duration: 0, maxZoom: 11 })
          }
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

  // toggle layer visibility
  useEffect(() => {
    const map = mapRef.current
    if (!map || !map.getLayer || !map.getLayer("dots")) return
    try {
      map.setLayoutProperty("dots", "visibility", mode === "pins" ? "visible" : "none")
      map.setLayoutProperty("heat", "visibility", mode === "heat" ? "visible" : "none")
    } catch {}
  }, [mode, d])

  const k = d?.kpis

  return (
    <section className="bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          <Kpi value={k ? fmt(k.completed) + "+" : "—"} label="Repairs completed" />
          <Kpi value={k && k.lastMonthCount != null ? fmt(k.lastMonthCount) : "—"} label="Last 30 days" />
          <Kpi value={k ? String(k.citiesServed) : "—"} label="Cities served" />
          <Kpi value={k ? String(k.zipsCovered) : "—"} label="ZIP codes covered" />
          <Kpi value={k ? fmt(k.repeatCustomers) : "—"} label="Repeat customers" />
          <Kpi value={k ? "$" + fmt(k.avgTicketUsd) : "—"} label="Avg. repair ticket" />
        </div>

        <div className="mt-8">
          <div className="mb-3 inline-flex rounded-lg border border-border/60 bg-background p-1 text-sm shadow-sm">
            <button
              type="button"
              onClick={() => setMode("pins")}
              className={`rounded-md px-4 py-1.5 font-medium transition ${mode === "pins" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              Pins
            </button>
            <button
              type="button"
              onClick={() => setMode("heat")}
              className={`rounded-md px-4 py-1.5 font-medium transition ${mode === "heat" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              Heatmap
            </button>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-border/60 shadow-sm">
            <div
              ref={ref}
              className="h-[480px] w-full sm:h-[600px]"
              aria-label="Map of completed appliance repairs across South Florida"
            />
            {err ? (
              <div className="absolute inset-0 flex items-center justify-center bg-background/90 p-6 text-center text-sm text-muted-foreground">
                Map failed to load ({err}). Coverage spans Miami-Dade, Broward and Palm Beach.
              </div>
            ) : null}
          </div>
        </div>

        <p className="mt-3 text-xs text-muted-foreground">
          Each pin marks a completed job, offset to the neighborhood level for customer
          privacy — no exact addresses are shown. {k ? fmt(k.completed) + "+ repairs since " + (k.sinceYear || "2022") + "." : ""}
        </p>
      </div>
    </section>
  )
}

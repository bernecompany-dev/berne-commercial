import { ImageResponse } from "next/og"

export const alt = "954 Appliance Repair — Same-Day Service in Broward County"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #1b1c1e 0%, #2a2c30 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 40 }}>
          <div
            style={{
              background: "#e8541e",
              color: "#fff",
              fontSize: 56,
              fontWeight: 800,
              padding: "8px 24px",
              borderRadius: 16,
            }}
          >
            954
          </div>
          <div style={{ color: "#fff", fontSize: 40, fontWeight: 700 }}>
            Appliance Repair
          </div>
        </div>
        <div style={{ color: "#fff", fontSize: 68, fontWeight: 800, lineHeight: 1.1, maxWidth: 900 }}>
          Same-day appliance repair in Broward County
        </div>
        <div style={{ color: "#ffd9c7", fontSize: 34, marginTop: 28 }}>
          Fridge · Washer · Dryer · Dishwasher · Oven · Range
        </div>
      </div>
    ),
    { ...size },
  )
}

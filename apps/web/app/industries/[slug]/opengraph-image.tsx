import { ImageResponse } from "next/og"
import { notFound } from "next/navigation"
import {
  INDUSTRY_PROFILE_SLUGS,
  getIndustryProfile,
} from "@/lib/data/industry-profiles"
import { site } from "@/lib/site"

export const alt = "Berne Commercial Repair — industry specialists"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const slate900 = "#0f172a"
const slate700 = "#334155"
const slate600 = "#475569"
const slate400 = "#94a3b8"
const slate200 = "#e2e8f0"
const slate50 = "#f8fafc"
const primary = "#3b5b9a"
const primarySoft = "#eef1f7"

export function generateStaticParams() {
  return INDUSTRY_PROFILE_SLUGS.map((slug) => ({ slug }))
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const profile = getIndustryProfile(slug)
  if (!profile) notFound()

  // headline = "Restaurant Equipment Repair." etc — derive from industryTitle
  const headline = `${profile.industryTitle} Equipment Repair.`
  const chips = profile.equipment
    .slice(0, 5)
    .map((c) => c.name)
    .filter(Boolean)

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: slate50,
          padding: "80px",
          fontFamily: "Inter, system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 80% -10%, rgba(59,91,154,0.10), transparent 60%)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              border: `2px solid ${slate900}`,
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              padding: 8,
              gap: 4,
            }}
          >
            <div
              style={{
                width: 28,
                height: 8,
                borderRadius: 3,
                background: slate900,
                display: "flex",
              }}
            />
            <div
              style={{
                width: 32,
                height: 8,
                borderRadius: 3,
                background: slate900,
                display: "flex",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: 26,
                color: slate900,
                fontWeight: 600,
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              Berne
            </span>
            <span
              style={{
                fontSize: 14,
                color: slate600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                marginTop: 6,
              }}
            >
              Commercial
            </span>
          </div>
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: primary,
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Industry Dispatch · South Florida
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              color: slate900,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              maxWidth: 1040,
            }}
          >
            {headline}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: slate700,
              lineHeight: 1.35,
              maxWidth: 980,
              marginTop: 4,
            }}
          >
            {profile.hero}
          </div>
        </div>

        <div
          style={{
            marginTop: 40,
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          {chips.map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                fontSize: 20,
                padding: "10px 18px",
                border: `1px solid ${slate200}`,
                background: primarySoft,
                color: slate700,
                borderRadius: 999,
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: slate400,
            fontSize: 20,
          }}
        >
          <span>{site.domain}</span>
          <span>Same-day · {site.serviceCall} service call</span>
        </div>
      </div>
    ),
    { ...size },
  )
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  // Core Web Vitals — let next/image deliver AVIF / WebP via Accept-content
  // negotiation. ~30-50% bandwidth savings vs JPEG/PNG on team headshots
  // and brand logos. Mirrors the my-site (berne-repair.com) config.
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  // Old placeholder back-office profile URLs (pre real dispatch-team roster,
  // June 2026) → /team. Real profiles now live at /team/bogdan etc.
  async redirects() {
    return [
      {
        source: "/team/back-office-:n(\\d{1})",
        destination: "/team",
        permanent: true,
      },
    ]
  },
  // S14: site-wide Permissions-Policy. Disable browser features we never
  // need so embedded scripts/iframes cannot request them. Mirrors the
  // header set on the bernerepair.com WP site.
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Permissions-Policy",
            value:
              "geolocation=(), microphone=(), camera=(), browsing-topics=()",
          },
        ],
      },
    ]
  },
}

export default nextConfig

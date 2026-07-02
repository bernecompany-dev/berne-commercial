/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standalone micro-brand. No transpiled workspace packages, no shared UI —
  // deliberately a different technical footprint from the Berne properties.
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "geolocation=(), microphone=(), camera=()",
          },
        ],
      },
    ]
  },
}

export default nextConfig

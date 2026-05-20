/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui"],
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

/**
 * Deployment-environment helpers.
 *
 * `isProductionDeployment` — true only on the production Vercel deployment
 * (or a plain `next build && next start` outside Vercel). Used to gate
 * analytics (GA4 / Meta Pixel / Clarity) so localhost dev and Vercel preview
 * deployments stop polluting the GA4 property with non-production traffic.
 *
 * On Vercel, VERCEL_ENV is "production" | "preview" | "development" and is
 * available at build time — all pages are statically prerendered, so this
 * resolves once at build, not per-request (keeps prerendering intact).
 */
const vercelEnv = process.env.VERCEL_ENV ?? process.env.NEXT_PUBLIC_VERCEL_ENV

export const isProductionDeployment = vercelEnv
  ? vercelEnv === "production"
  : process.env.NODE_ENV === "production"

import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import { test } from "node:test"

test("robots omits the unsupported Host directive", async () => {
  const source = await readFile("app/robots.ts", "utf8")
  assert.doesNotMatch(source, /\bhost\s*:/)
  assert.match(source, /sitemap:/)
})

test("Google Ads shares the single GA gtag network loader", async () => {
  const [analytics, ads] = await Promise.all([
    readFile("components/google-analytics.tsx", "utf8"),
    readFile("components/google-ads-tag.tsx", "utf8"),
  ])
  assert.match(analytics, /googletagmanager\.com\/gtag\/js/)
  assert.doesNotMatch(ads, /googletagmanager\.com\/gtag\/js/)
  assert.match(ads, /phone_conversion_number/)
})

test("sitewide accessibility contracts stay in source", async () => {
  const [brand, navbar, serviceAreas, cookie] = await Promise.all([
    readFile("components/brand-mark.tsx", "utf8"),
    readFile("components/site-navbar.tsx", "utf8"),
    readFile("components/service-areas-links.tsx", "utf8"),
    readFile("components/cookie-banner.tsx", "utf8"),
  ])
  assert.doesNotMatch(brand, /aria-label="Berne Commercial Repair"/)
  assert.doesNotMatch(navbar, /aria-label=\{site\.name\}/)
  assert.match(brand, /text-background\/80/)
  assert.match(serviceAreas, /min-h-6/)
  assert.match(cookie, /Cookie details/)
  assert.doesNotMatch(cookie, />\s*Learn more\s*</)
})

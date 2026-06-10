import type { MetadataRoute } from "next"
import { site } from "@/lib/site"

/**
 * AI/LLM crawler allowlist (GEO) — explicit Allow for the answer-engine
 * bots, mirroring berne-repair.com/robots.txt. The wildcard rule already
 * permits them; the explicit rules are a signal of intent and survive any
 * future wildcard tightening.
 */
const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "CCBot",
  "cohere-ai",
  "DuckAssistBot",
  "Amazonbot",
  "Bytespider",
  "MistralAI-User",
  "Meta-ExternalAgent",
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  }
}

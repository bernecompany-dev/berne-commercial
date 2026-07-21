import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import { test } from "node:test"

test("date-gated blog links are filtered from both article surfaces", async () => {
  const [page, articles] = await Promise.all([
    readFile("app/blog/[slug]/page.tsx", "utf8"),
    readFile("lib/blog/articles.ts", "utf8"),
  ])

  assert.match(articles, /export function isPublishedBlogHref/)
  assert.match(articles, /getArticle\(slug\)/)
  assert.match(articles, /isPublished\(article, now\)/)
  assert.match(page, /else if \(isPublishedBlogHref\(url\)\)/)
  assert.match(page, /availableInternalLinks = a\.internalLinks\.filter/)
  assert.match(page, /availableInternalLinks\.map/)
})

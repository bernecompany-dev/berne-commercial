import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import { test } from "node:test"
import { submitDispatchLead } from "../lib/lead-analytics.ts"

function runtimeRecorder() {
  const calls = {
    gtag: [],
    fbq: [],
    oaiq: [],
    uetq: [],
  }
  const runtime = {
    location: { pathname: "/services/commercial-dishwasher-repair" },
    gtag: (...args) => calls.gtag.push(args),
    fbq: (...args) => calls.fbq.push(args),
    oaiq: (...args) => calls.oaiq.push(args),
    uetq: { push: (...args) => calls.uetq.push(args) },
  }
  return { calls, runtime }
}

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  })
}

function assertNoConversions(calls) {
  assert.equal(calls.gtag.length, 0)
  assert.equal(calls.fbq.length, 0)
  assert.equal(calls.oaiq.length, 0)
  assert.equal(calls.uetq.length, 0)
}

test("honeypot noop keeps success contract but emits zero conversions", async () => {
  const { calls, runtime } = runtimeRecorder()
  const result = await submitDispatchLead({
    payload: { website_url: "bot.example" },
    formName: "dispatch",
    runtime,
    fetchImpl: async () =>
      jsonResponse({
        ok: true,
        delivered: false,
        lead_id: "lead-noop",
        transport: "noop",
      }),
  })

  assert.equal(result.delivered, false)
  assert.equal(result.lead_id, "lead-noop")
  assertNoConversions(calls)
})

test("Resend failure rejects and emits zero conversions", async () => {
  const { calls, runtime } = runtimeRecorder()

  await assert.rejects(
    submitDispatchLead({
      payload: { contact: "Test", phone: "7543454515" },
      formName: "dispatch",
      runtime,
      fetchImpl: async () =>
        jsonResponse(
          {
            ok: false,
            delivered: false,
            lead_id: "lead-failed",
            error: "Email transport failed",
          },
          502,
        ),
    }),
    /Email transport failed/,
  )
  assertNoConversions(calls)
})

test("delivered response emits one conversion package with one server lead_id", async () => {
  const { calls, runtime } = runtimeRecorder()
  const result = await submitDispatchLead({
    payload: { contact: "Test", phone: "7543454515" },
    formName: "quick_lead",
    context: { urgency: "urgent" },
    runtime,
    fetchImpl: async () =>
      jsonResponse({
        ok: true,
        delivered: true,
        lead_id: "lead-delivered",
        transport: "resend",
        id: "resend-message-id",
      }),
  })

  assert.equal(result.lead_id, "lead-delivered")
  assert.equal(calls.gtag.length, 2)
  assert.equal(calls.fbq.length, 1)
  assert.equal(calls.oaiq.length, 1)
  assert.equal(calls.uetq.length, 1)
  assert.deepEqual(calls.gtag[0]?.slice(0, 2), ["event", "generate_lead"])
  assert.deepEqual(calls.gtag[1]?.slice(0, 2), ["event", "conversion"])
  assert.deepEqual(calls.fbq[0]?.slice(0, 2), ["track", "Lead"])
  assert.deepEqual(calls.oaiq[0]?.slice(0, 2), ["measure", "lead_created"])
  assert.deepEqual(calls.uetq[0]?.slice(0, 2), ["event", "submit_lead"])

  for (const call of [
    calls.gtag[0],
    calls.fbq[0],
    calls.oaiq[0],
    calls.uetq[0],
  ]) {
    assert.equal(call?.[2].lead_id, "lead-delivered")
    assert.equal(call?.[2].site_id, "berne-commercial")
  }
})

test("tel proxy uses call_click schema and never emits Meta/OpenAI Lead", async () => {
  const [ga, meta, openai, bing] = await Promise.all([
    readFile("components/google-analytics.tsx", "utf8"),
    readFile("components/meta-pixel.tsx", "utf8"),
    readFile("components/openai-pixel.tsx", "utf8"),
    readFile("components/microsoft-uet-tag.tsx", "utf8"),
  ])

  for (const source of [ga, bing]) {
    assert.match(source, /'call_click'/)
    assert.match(source, /site_id/)
    assert.match(source, /page_path/)
    assert.match(source, /link_location/)
    assert.match(source, /tracking_number/)
    assert.doesNotMatch(source, /'phone_call'/)
    assert.doesNotMatch(source, /'phone_click'/)
  }
  assert.match(meta, /'call_click'/)
  assert.doesNotMatch(meta, /fbq\('track', 'Lead'/)
  assert.doesNotMatch(openai, /oaiq\('measure', 'lead_created'/)
})

test("both forms share the delivered-lead helper and have no direct conversions", async () => {
  const [dispatchForm, quickLead] = await Promise.all([
    readFile("components/dispatch-form.tsx", "utf8"),
    readFile("components/quick-lead-popup.tsx", "utf8"),
  ])

  for (const source of [dispatchForm, quickLead]) {
    assert.match(source, /submitDispatchLead/)
    assert.doesNotMatch(source, /window\.gtag/)
    assert.doesNotMatch(source, /window\.fbq/)
    assert.doesNotMatch(source, /window\.oaiq/)
    assert.doesNotMatch(source, /submit_lead/)
  }
})

test("dispatch phone field avoids a browser-invalid HTML pattern", async () => {
  const source = await readFile("components/dispatch-form.tsx", "utf8")
  const start = source.indexOf('name="phone"')
  const phoneField = source.slice(start, start + 700)

  assert.match(phoneField, /minLength=\{7\}/)
  assert.doesNotMatch(phoneField, /pattern=/)
})

/**
 * submitIntake — actual outbound delivery for the contact + get-started forms.
 *
 * Three-step pipeline, each step is a real side-effect (not a console.log):
 *
 *   1. If `import.meta.env.VITE_INTAKE_URL` is set, POST the form as JSON
 *      with `Accept: application/json`. Designed for Formspree / Netlify Forms /
 *      any CORS-friendly JSON endpoint that accepts a POST body.
 *
 *   2. Otherwise, fall back to opening the user's mail client with a fully
 *      pre-filled `mailto:` link — subject + body contain every field, so even
 *      without a backend the inquiry reaches a human.
 *
 *   3. Either way, also persist the submission in localStorage under
 *      `voxalixa.intake` (capped at 20 entries). If both delivery paths fail
 *      (offline + no mail client), the user still has a local record they can
 *      copy from devtools.
 *
 * Returns `{ ok, channel, error }` so callers can render a meaningful toast.
 */

const STORAGE_KEY = 'voxalixa.intake'
const MAX_STORED = 20

export function readStoredIntake() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function persist({ kind, values, at, channel }) {
  try {
    const list = readStoredIntake()
    list.unshift({ kind, values, at, channel })
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list.slice(0, MAX_STORED)))
    return true
  } catch {
    return false
  }
}

function buildMailto({ kind, values }) {
  const TO = 'hello@voxalixa.io'
  const SUBJECT = `[Voxalixa] ${kind} — ${values.name || values.email || 'New inquiry'}`
  const LINES = [
    `Source: ${kind} form on voxalixa.io`,
    `Submitted: ${new Date().toISOString()}`,
    '',
    '— Reply to —',
    `Name:    ${values.name || ''}`,
    `Email:   ${values.email || ''}`,
    ...(values.interest ? [`Interest: ${values.interest}`] : []),
    ...(values.plan ? [`Plan:     ${values.plan}`] : []),
    ...(values.budget ? [`Budget:   ${values.budget}`] : []),
    '',
    '— Brief —',
    values.message || values.brief || '(empty)'
  ]
  const body = LINES.join('\r\n')
  const params = new URLSearchParams({ subject: SUBJECT, body })
  return `mailto:${TO}?${params.toString()}`
}

async function postToEndpoint(url, payload) {
  const ctrl = new AbortController()
  const t = setTimeout(() => ctrl.abort(), 6000)
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(payload),
      signal: ctrl.signal
    })
    if (!res.ok) {
      return { ok: false, error: `HTTP ${res.status}` }
    }
    return { ok: true }
  } catch (err) {
    return { ok: false, error: err?.name === 'AbortError' ? 'timeout' : (err?.message || 'network error') }
  } finally {
    clearTimeout(t)
  }
}

/**
 * @param {{ kind: 'contact'|'get-started', values: Record<string, any> }} input
 * @returns {Promise<{ ok: boolean, channel: 'endpoint'|'mailto'|'local', error?: string }>}
 */
export async function submitIntake({ kind, values }) {
  const payload = { kind, values, at: new Date().toISOString() }
  const endpoint = import.meta.env.VITE_INTAKE_URL

  if (endpoint) {
    const r = await postToEndpoint(endpoint, payload)
    persist({ ...payload, channel: 'endpoint' })
    if (r.ok) return { ok: true, channel: 'endpoint' }
    // fall through to mailto on error
  }

  // Mailto fallback. Anchor.click() in a same-origin handler is the safe way to
  // open external protocols without being blocked by popup blockers.
  try {
    const href = buildMailto(payload)
    const link = document.createElement('a')
    link.href = href
    link.rel = 'noopener'
    link.style.display = 'none'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    persist({ ...payload, channel: 'mailto' })
    return { ok: true, channel: 'mailto' }
  } catch (err) {
    // local-only fallback
    persist({ ...payload, channel: 'local' })
    return { ok: false, channel: 'local', error: err?.message || 'no mail client' }
  }
}
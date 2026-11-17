const initialDelay = 750
const maximumDelay = 30_000

function waitForRetry(signal, delay) {
  return new Promise((resolve, reject) => {
    const cancel = () => {
      clearTimeout(timer)
      reject(signal.reason)
    }
    const timer = setTimeout(() => {
      signal.removeEventListener('abort', cancel)
      resolve()
    }, delay)
    signal.addEventListener('abort', cancel, { once: true })
  })
}

// Retry failed transfers while the same avatar is wanted. Parsing happens only after the
// download succeeds, so a model the device cannot render does not keep getting downloaded.
export async function downloadAvatar(url, signal) {
  let delay = initialDelay
  for (;;) {
    signal.throwIfAborted()
    let response
    try {
      response = await fetch(url, { signal })
      if (response.ok) return await response.arrayBuffer()
    } catch (error) {
      // Fetch can also fail midway through reading the body.
      if (error instanceof RangeError) throw error
    }
    if (response && !response.ok) {
      response.body?.cancel().catch(() => {})
      const { status } = response
      if (status < 500 && ![404, 408, 425, 429].includes(status)) throw new Error(`HTTP ${status}`)
    }
    signal.throwIfAborted()
    await waitForRetry(signal, delay)
    delay = Math.min(maximumDelay, delay * 2)
  }
}

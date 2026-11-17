const initialDelay = 750
const maximumDelay = 30_000
const transferLimit = 2
const waitingTransfers = []
let activeTransfers = 0

function acquireTransfer(signal) {
  signal.throwIfAborted()
  if (activeTransfers < transferLimit) {
    activeTransfers++
    return
  }
  return new Promise((resolve, reject) => {
    const start = () => {
      signal.removeEventListener('abort', cancel)
      resolve()
    }
    const cancel = () => {
      waitingTransfers.splice(waitingTransfers.indexOf(start), 1)
      reject(signal.reason)
    }
    waitingTransfers.push(start)
    signal.addEventListener('abort', cancel, { once: true })
  })
}

function releaseTransfer() {
  const next = waitingTransfers.shift()
  if (next) next()
  else activeTransfers--
}

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

function glbLength(chunk) {
  if (chunk.byteLength < 12) return null
  const header = new DataView(chunk.buffer, chunk.byteOffset, chunk.byteLength)
  if (header.getUint32(0, true) !== 0x46546c67 || header.getUint32(4, true) !== 2) return null
  const length = header.getUint32(8, true)
  return length >= Math.max(20, chunk.byteLength) ? length : null
}

async function readTransfer(response, onProgress) {
  if (!response.body) return response.arrayBuffer()
  const reader = response.body.getReader()
  let received = 0
  let reportedAt = performance.now()
  try {
    const first = await reader.read()
    if (first.done) return new ArrayBuffer(0)
    // The GLB length describes decoded bytes and stays accurate if a proxy compresses the response.
    const total = glbLength(first.value)
    const count = (chunk) => {
      received += chunk.byteLength
      const now = performance.now()
      if (received === chunk.byteLength || now - reportedAt >= 100) {
        onProgress?.({ received, total })
        reportedAt = now
      }
    }
    if (total !== null) {
      // Copy each chunk directly into the final buffer instead of keeping a second copy of the model.
      const bytes = new Uint8Array(total)
      let chunk = first
      while (!chunk.done) {
        if (received + chunk.value.byteLength > total) throw new TypeError('Invalid avatar length')
        bytes.set(chunk.value, received)
        count(chunk.value)
        chunk = await reader.read()
      }
      if (received !== total) throw new TypeError('Incomplete avatar transfer')
      return bytes.buffer
    }
    // A first chunk shorter than the header can still arrive from a streaming connection.
    count(first.value)
    const stream = new ReadableStream({
      start(controller) { controller.enqueue(first.value) },
      async pull(controller) {
        const { done, value } = await reader.read()
        if (done) controller.close()
        else {
          count(value)
          controller.enqueue(value)
        }
      },
    })
    return await new Response(stream).arrayBuffer()
  } finally {
    reader.cancel().catch(() => {})
    reader.releaseLock()
  }
}

// Retry failed transfers while the same avatar is wanted. Parsing happens only after the
// download succeeds, so a model the device cannot render does not keep getting downloaded.
export async function downloadAvatar(url, signal, onProgress) {
  let delay = initialDelay
  for (;;) {
    const waiting = acquireTransfer(signal)
    if (waiting) await waiting
    let response
    let bytes
    try {
      signal.throwIfAborted()
      onProgress?.({ received: 0, total: null })
      response = await fetch(url, { signal })
      if (response.ok) bytes = await readTransfer(response, onProgress)
      else response.body?.cancel().catch(() => {})
    } catch (error) {
      // Fetch can also fail midway through reading the body.
      if (error instanceof RangeError) throw error
    } finally {
      releaseTransfer()
    }
    signal.throwIfAborted()
    if (bytes) {
      onProgress?.({ received: bytes.byteLength, total: bytes.byteLength })
      return bytes
    }
    if (response && !response.ok) {
      const { status } = response
      if (status < 500 && ![404, 408, 425, 429].includes(status)) throw new Error(`HTTP ${status}`)
    }
    await waitForRetry(signal, delay)
    delay = Math.min(maximumDelay, delay * 2)
  }
}

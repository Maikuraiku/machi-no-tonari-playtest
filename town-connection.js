export const TOWN_TIMEOUT = 12_000

export async function withDeadline(task, milliseconds, parent) {
  const cancelled = () => parent?.reason ?? new DOMException('接続を中止しました。', 'AbortError')
  if (parent?.aborted) throw cancelled()
  const controller = new AbortController()
  let reason
  const abort = (error) => {
    if (controller.signal.aborted) return
    reason = error
    controller.abort(error)
  }
  const cancel = () => abort(cancelled())
  parent?.addEventListener('abort', cancel, { once: true })
  let rejectAborted
  const aborted = new Promise((resolve, reject) => { rejectAborted = reject })
  const stop = () => rejectAborted(reason)
  controller.signal.addEventListener('abort', stop, { once: true })
  const timer = setTimeout(() => abort(new DOMException(
    '街から応答がありませんでした。もう一度お試しください。', 'TimeoutError',
  )), milliseconds)
  try {
    const result = await Promise.race([Promise.resolve().then(() => task(controller.signal)), aborted])
    if (controller.signal.aborted) throw reason
    return result
  } catch (error) {
    throw controller.signal.aborted ? reason : error
  } finally {
    clearTimeout(timer)
    parent?.removeEventListener('abort', cancel)
    controller.signal.removeEventListener('abort', stop)
  }
}

export function connectionMessage(error) {
  if (error instanceof TypeError) return '街に接続できませんでした。もう一度お試しください。'
  if (error instanceof SyntaxError) return '街からの応答を読み込めませんでした。もう一度お試しください。'
  return error?.message ?? '街に接続できませんでした。もう一度お試しください。'
}

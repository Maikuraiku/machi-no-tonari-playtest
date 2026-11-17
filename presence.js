export function connectPresence({ url, token, read, write, legacyWrite, onFrame, onUnauthorized }) {
  const socketURL = new URL(url);
  socketURL.protocol = socketURL.protocol === "https:" ? "wss:" : "ws:";
  const source = globalThis.crypto?.randomUUID?.();
  let sentAt = 0;
  let socket;
  let ready = false;
  let stopped = false;
  let legacy = false;
  let reconnectDelay = 500;
  let reconnectTimer;
  let connectTimer;
  let pollTimer;
  let poll;
  let latest;
  let pending;
  const writes = new Set();
  let writeTimer;

  function scheduleWrite(delay) {
    if (writeTimer) return;
    writeTimer = setTimeout(() => {
      writeTimer = null;
      flush();
    }, delay);
  }

  async function flush() {
    if (stopped || !pending) return;
    if (ready && socket?.readyState === WebSocket.OPEN) {
      if (socket.bufferedAmount > 1024) {
        scheduleWrite(33);
        return;
      }
      socket.send(JSON.stringify(pending));
      pending = null;
      return;
    }
    // Modern servers use the source sequence to discard a pose that arrives out of order.
    // Let the newest pose start while one HTTP request is still waiting for its reply.
    if (writes.size >= (source && !legacy ? 2 : 1) || (!legacy && !poll)) return;
    const next = pending;
    pending = null;
    const request = new AbortController();
    writes.add(request);
    const timeout = setTimeout(() => request.abort(), 3500);
    try {
      if (legacy) await legacyWrite(next, request.signal);
      else {
        const frame = await write(next, request.signal);
        if (!stopped && !ready) onFrame(frame);
      }
    } catch (error) {
      if (!stopped && !ready) {
        if (error.status === 401) onUnauthorized();
        else if (next === latest) {
          pending = next;
          scheduleWrite(350);
        }
      }
    } finally {
      clearTimeout(timeout);
      writes.delete(request);
      if (!writeTimer) flush();
    }
  }

  async function pollFrames() {
    if (poll || legacy || stopped || ready) return;
    const controller = new AbortController();
    poll = controller;
    flush();
    let after;
    try {
      while (!controller.signal.aborted) {
        const timeout = setTimeout(() => controller.abort(), 22_000);
        let frame;
        try {
          frame = await read(after, controller.signal);
        } finally {
          clearTimeout(timeout);
        }
        if (controller.signal.aborted) break;
        onFrame(frame);
        after = frame.motion;
      }
    } catch (error) {
      if (!controller.signal.aborted && error.status === 404) {
        legacy = true;
        for (const request of writes) request.abort();
        clearTimeout(reconnectTimer);
        socket?.close();
        flush();
      } else if (error.status === 401 && !controller.signal.aborted) onUnauthorized();
    } finally {
      if (poll === controller) poll = null;
      if (!stopped && !ready && !legacy) {
        clearTimeout(pollTimer);
        pollTimer = setTimeout(pollFrames, 1000);
      }
    }
  }

  function connect() {
    if (stopped || legacy) return;
    let connection;
    try {
      connection = new WebSocket(socketURL);
    } catch {
      pollFrames();
      return;
    }
    socket = connection;
    connectTimer = setTimeout(() => connection.close(), 4500);
    connection.addEventListener("open", () => {
      if (!stopped) connection.send(JSON.stringify({ token }));
    });
    connection.addEventListener("message", ({ data }) => {
      if (stopped || connection !== socket) return;
      let frame;
      try {
        frame = JSON.parse(data);
      } catch {
        return;
      }
      if (!Array.isArray(frame?.players) || !Number.isSafeInteger(frame.motion)) return;
      if (!ready) {
        ready = true;
        reconnectDelay = 500;
        clearTimeout(connectTimer);
        poll?.abort();
        poll = null;
        for (const request of writes) request.abort();
        pending = latest;
      }
      onFrame(frame);
      flush();
    });
    connection.addEventListener("close", ({ code }) => {
      if (stopped || connection !== socket) return;
      clearTimeout(connectTimer);
      ready = false;
      socket = null;
      if (code === 4401) onUnauthorized();
      if (legacy) return;
      pollFrames();
      reconnectTimer = setTimeout(connect, reconnectDelay);
      reconnectDelay = Math.min(10_000, reconnectDelay * 2);
    });
  }

  if (typeof WebSocket === "function") connect();
  else pollFrames();
  return {
    push(move) {
      latest = pending = source ? { ...move, source, sentAt: ++sentAt } : move;
      if (!writeTimer) flush();
    },
    close() {
      stopped = true;
      clearTimeout(connectTimer);
      clearTimeout(reconnectTimer);
      clearTimeout(pollTimer);
      clearTimeout(writeTimer);
      poll?.abort();
      for (const request of writes) request.abort();
      socket?.close();
    },
  };
}

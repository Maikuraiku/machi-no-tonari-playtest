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
  let writing = false;
  let writeTimer;
  let writeRequest;

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
      if (socket.bufferedAmount > 2048) {
        scheduleWrite(50);
        return;
      }
      socket.send(JSON.stringify(pending));
      pending = null;
      return;
    }
    if (writing || (!legacy && !poll)) return;
    const next = pending;
    pending = null;
    writing = true;
    const request = new AbortController();
    writeRequest = request;
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
        else {
          pending ??= next;
          scheduleWrite(350);
        }
      }
    } finally {
      clearTimeout(timeout);
      writeRequest = null;
      writing = false;
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
        writeRequest?.abort();
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
        writeRequest?.abort();
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
      writeRequest?.abort();
      socket?.close();
    },
  };
}

export function connectPresence({ url, token, read, write, fallback, allowLegacy = true, legacyWrite, onFrame, onUnauthorized }) {
  const routes = [{ url, read, write }, ...(fallback ? [fallback] : [])];
  const initialReconnectDelay = fallback ? 250 : 500;
  let routeIndex = 0;
  let routeVersion = 0;
  const source = globalThis.crypto?.randomUUID?.();
  let sentAt = 0;
  let socket;
  let ready = false;
  let stopped = false;
  let legacy = false;
  let reconnectDelay = initialReconnectDelay;
  let reconnectTimer;
  let connectTimer;
  let pollTimer;
  let poll;
  let latest;
  let pending;
  const writes = new Set();
  let writeTimer;

  function stopHttp() {
    clearTimeout(pollTimer);
    poll?.abort();
    poll = null;
    for (const request of writes) request.abort();
  }

  function changeRoute() {
    if (routes.length < 2) return;
    routeIndex = (routeIndex + 1) % routes.length;
    routeVersion++;
    stopHttp();
    pending = latest;
  }

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
    const version = routeVersion;
    writes.add(request);
    const timeout = setTimeout(() => request.abort(), 3500);
    try {
      if (legacy) await legacyWrite(next, request.signal);
      else {
        const frame = await routes[routeIndex].write(next, request.signal);
        if (!stopped && !ready && version === routeVersion) onFrame(frame);
      }
    } catch (error) {
      if (!stopped && !ready && version === routeVersion) {
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
    const route = routes[routeIndex];
    poll = controller;
    flush();
    let after;
    try {
      while (!controller.signal.aborted) {
        const timeout = setTimeout(() => controller.abort(), 22_000);
        let frame;
        try {
          frame = await route.read(after, controller.signal);
        } finally {
          clearTimeout(timeout);
        }
        if (controller.signal.aborted) break;
        onFrame(frame);
        after = frame.motion;
      }
    } catch (error) {
      if (!controller.signal.aborted && error.status === 404 && allowLegacy && route === routes[routes.length - 1]) {
        legacy = true;
        stopHttp();
        clearTimeout(reconnectTimer);
        socket?.close();
        flush();
      } else if (error.status === 401 && !controller.signal.aborted) onUnauthorized();
    } finally {
      const wasCurrent = poll === controller;
      if (wasCurrent) poll = null;
      if (wasCurrent && !stopped && !ready && !legacy) {
        if (!socket && !reconnectTimer) changeRoute();
        clearTimeout(pollTimer);
        pollTimer = setTimeout(pollFrames, 1000);
      }
    }
  }

  function connect() {
    if (stopped || legacy) return;
    const socketURL = new URL(routes[routeIndex].url);
    socketURL.protocol = socketURL.protocol === "https:" ? "wss:" : "ws:";
    let connection;
    try {
      connection = new WebSocket(socketURL);
    } catch {
      pollFrames();
      return;
    }
    let previousFrame;
    const players = new Map();
    socket = connection;
    connectTimer = setTimeout(() => connection.close(), 4500);
    connection.addEventListener("open", () => {
      if (!stopped) connection.send(JSON.stringify({ token, delta: true }));
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
      if (frame.delta) {
        if (!previousFrame || frame.layout !== previousFrame.layout || frame.epoch !== previousFrame.epoch) {
          connection.close(4000);
          return;
        }
        if (frame.motion <= previousFrame.motion) return;
        for (const player of frame.players) players.set(player.id, player);
        frame = { ...frame, players: [...players.values()] };
      } else {
        players.clear();
        for (const player of frame.players) players.set(player.id, player);
      }
      previousFrame = frame;
      if (!ready) {
        ready = true;
        reconnectDelay = initialReconnectDelay;
        clearTimeout(connectTimer);
        stopHttp();
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
      if (code !== 4401) changeRoute();
      pollFrames();
      reconnectTimer = setTimeout(() => {
        reconnectTimer = null;
        connect();
      }, reconnectDelay);
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
      clearTimeout(writeTimer);
      stopHttp();
      socket?.close();
    },
  };
}

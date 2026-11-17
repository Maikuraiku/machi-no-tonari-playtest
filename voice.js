export function createVoice({ signal, notify }) {
  const peers = new Map();
  let stream = null;
  let enabled = false;
  let me = null;
  let eligible = new Map();
  let silenced = new Set();
  // How far a voice carries outdoors, in town tiles (one tile is about 8 m).
  const hearing = 3.5;
  let audioContext = null;
  const meters = new Map();

  const distance = (player) => Math.hypot(me.x - player.x, me.z - player.z);

  // Listens to a stream's loudness so that the speaker's avatar can move its mouth.
  function meter(id, source) {
    try {
      audioContext ??= new (window.AudioContext || window.webkitAudioContext)();
      if (audioContext.state === "suspended") audioContext.resume().catch(() => {});
      meters.get(id)?.input.disconnect();
      const input = audioContext.createMediaStreamSource(source);
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;
      input.connect(analyser);
      meters.set(id, { input, analyser, samples: new Uint8Array(analyser.fftSize) });
    } catch {
      // Lip sync is a nicety; voice chat works without it.
    }
  }

  function unmeter(id) {
    meters.get(id)?.input.disconnect();
    meters.delete(id);
  }

  function loudness({ analyser, samples }) {
    analyser.getByteTimeDomainData(samples);
    let sum = 0;
    for (const sample of samples) sum += ((sample - 128) / 128) ** 2;
    const level = Math.sqrt(sum / samples.length) * 6;
    return level < 0.06 ? 0 : Math.min(1, level);
  }

  function disconnect(id) {
    const peer = peers.get(id);
    if (!peer) return;
    peer.connection.close();
    peer.audio.srcObject = null;
    peers.delete(id);
    unmeter(id);
  }

  function adjustVolume(peer, player) {
    const volume = me.area === "town" ? Math.max(0, 1 - distance(player) / hearing) : 1;
    peer.audio.volume = silenced.has(player.id) ? 0 : volume;
  }

  function connect(id, caller) {
    if (peers.has(id)) return peers.get(id);
    const connection = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
    });
    const audio = new Audio();
    audio.autoplay = true;
    const peer = { connection, audio, candidates: [], started: Date.now() };
    peers.set(id, peer);
    connection.ontrack = (event) => {
      audio.srcObject = event.streams[0] ?? new MediaStream([event.track]);
      meter(id, audio.srcObject);
      if (eligible.has(id)) adjustVolume(peer, eligible.get(id));
      audio.play().catch(() => notify("音声を再生するには、画面の「ボイス」を押してください。"));
    };
    connection.onicecandidate = ({ candidate }) => {
      if (candidate && peers.get(id) === peer) {
        signal(id, { candidate: candidate.toJSON() }).catch(() => {});
      }
    };
    connection.onconnectionstatechange = () => {
      if (connection.connectionState === "failed") disconnect(id);
    };
    if (caller) {
      const transceiver = connection.addTransceiver("audio", { direction: "sendrecv" });
      Promise.resolve(transceiver.sender.replaceTrack(track())).then(async () => {
        if (peers.get(id) !== peer) return;
        await connection.setLocalDescription(await connection.createOffer());
        await signal(id, { description: connection.localDescription.toJSON() });
      }).catch(() => disconnect(id));
    }
    return peer;
  }

  function track() {
    return enabled ? stream?.getAudioTracks()[0] ?? null : null;
  }

  async function setEnabled(value) {
    if (value && !stream) {
      if (!navigator.mediaDevices?.getUserMedia || !window.RTCPeerConnection) {
        throw new Error("ボイスチャットには HTTPS または localhost が必要です。");
      }
      stream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: true, noiseSuppression: true },
      });
    }
    enabled = value;
    if (value && stream) meter("self", stream);
    else unmeter("self");
    for (const audioTrack of stream?.getAudioTracks() ?? []) audioTrack.enabled = value;
    for (const { connection, audio } of peers.values()) {
      connection.getTransceivers()[0]?.sender.replaceTrack(track()).catch(() => {});
      if (audio.srcObject) audio.play().catch(() => {});
    }
  }

  function sync(current, players) {
    if (!window.RTCPeerConnection) return;
    if (me?.id !== current.id || me?.area !== current.area) {
      for (const id of peers.keys()) disconnect(id);
    }
    me = current;
    eligible = new Map(players.filter((player) => player.id !== me.id && player.online &&
      player.area === me.area && (!player.muted || enabled) &&
      (me.area !== "town" || distance(player) <= hearing)).map((player) => [player.id, player]));
    for (const [id, peer] of peers) {
      if (!eligible.has(id)) disconnect(id);
      else adjustVolume(peer, eligible.get(id));
    }
    for (const [id] of eligible) {
      if (!peers.has(id) && me.id < id) connect(id, true);
    }
  }

  async function receive({ from, data }) {
    if (!eligible.has(from) || !data) return;
    const peer = connect(from, false);
    const connection = peer.connection;
    try {
      if (data.description) {
        await connection.setRemoteDescription(data.description);
        for (const candidate of peer.candidates.splice(0)) await connection.addIceCandidate(candidate);
        if (data.description.type === "offer") {
          const transceiver = connection.getTransceivers()[0];
          if (transceiver) {
            transceiver.direction = "sendrecv";
            await transceiver.sender.replaceTrack(track());
          }
          await connection.setLocalDescription(await connection.createAnswer());
          await signal(from, { description: connection.localDescription.toJSON() });
        }
      } else if (data.candidate) {
        if (connection.remoteDescription) await connection.addIceCandidate(data.candidate);
        else peer.candidates.push(data.candidate);
      }
    } catch {
      if (connection.connectionState === "failed") disconnect(from);
    }
  }

  function togglePlayer(id) {
    if (silenced.has(id)) silenced.delete(id);
    else silenced.add(id);
    const player = eligible.get(id);
    if (player && peers.has(id)) adjustVolume(peers.get(id), player);
  }

  function reset() {
    for (const id of peers.keys()) disconnect(id);
    unmeter("self");
    eligible = new Map();
    silenced = new Set();
    for (const audioTrack of stream?.getTracks() ?? []) audioTrack.stop();
    enabled = false;
    stream = null;
    me = null;
  }

  return {
    sync, receive, setEnabled, togglePlayer, reset,
    enabled: () => enabled,
    // Loudness from 0 to 1 for everyone who can be heard, keyed by resident id.
    levels(selfId) {
      const result = new Map();
      for (const [id, entry] of meters) {
        if (id === "self") result.set(selfId, enabled ? loudness(entry) : 0);
        else if (!silenced.has(id)) result.set(id, loudness(entry));
      }
      return result;
    },
    silenced: (id) => silenced.has(id),
  };
}

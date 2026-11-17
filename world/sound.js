// Sounds made in code (there are no sound files to ship): the chime of a lift, the melody
// before a train leaves, the beep of a ticket gate. Announcements are spoken by the voice the
// browser itself has; recorded ones can take their place later without anything else changing.

// Notes as [frequency in Hz, when it starts in seconds, how long it rings, wave].
const TUNES = {
  // A lift arriving: one ピンポーン on its way up, two on its way down.
  'lift-up': [[784, 0, 0.7], [659.3, 0.3, 1.2]],
  'lift-down': [[784, 0, 0.45], [659.3, 0.24, 0.7], [784, 0.72, 0.45], [659.3, 0.96, 1.1]],
  // The doors of a train: ピンポン、ピンポン.
  door: [[987.8, 0, 0.28], [784, 0.19, 0.42], [987.8, 0.6, 0.28], [784, 0.79, 0.5]],
  // A card touched on a ticket gate, and a button pressed.
  gate: [[2093, 0, 0.1, 'square']],
  button: [[1318.5, 0, 0.08, 'triangle']],
  // A train is coming.
  approach: [[523.3, 0, 0.5], [659.3, 0.22, 0.5], [784, 0.44, 0.5], [1046.5, 0.66, 0.9], [784, 1.1, 0.5], [1046.5, 1.32, 1.1]],
  // The melody before the doors close.
  depart: [[659.3, 0, 0.3], [784, 0.2, 0.3], [1046.5, 0.4, 0.3], [987.8, 0.6, 0.3], [784, 0.8, 0.3], [880, 1.0, 0.3], [1046.5, 1.2, 0.3],
    [1174.7, 1.4, 0.3], [1046.5, 1.6, 0.9]],
}

export function createSound() {
  const wanted = { sound: true, voice: true }
  let context = null
  let master = null
  let voice = null

  // Browsers only let a page make sound once its visitor has done something on it.
  function wake() {
    const Audio = window.AudioContext ?? window.webkitAudioContext
    if (!Audio) return null
    if (!context) {
      context = new Audio()
      master = context.createGain()
      master.gain.value = 0.55
      master.connect(context.destination)
    }
    if (context.state === 'suspended') context.resume().catch(() => {})
    return context
  }
  const onGesture = () => wake()
  window.addEventListener('pointerdown', onGesture, { passive: true })
  window.addEventListener('keydown', onGesture, { passive: true })

  // A note that is struck and rings out, as a small bell does.
  function note(frequency, at, length, volume, wave = 'sine') {
    const tone = context.createOscillator()
    const gain = context.createGain()
    tone.type = wave
    tone.frequency.value = frequency
    gain.gain.setValueAtTime(0.0001, at)
    gain.gain.linearRampToValueAtTime(volume, at + 0.012)
    gain.gain.exponentialRampToValueAtTime(0.0006, at + length)
    tone.connect(gain).connect(master)
    tone.start(at)
    tone.stop(at + length + 0.05)
    if (wave !== 'sine') return
    // (An overtone two octaves up gives it the ring of metal.)
    const ring = context.createOscillator()
    const high = context.createGain()
    ring.frequency.value = frequency * 4
    high.gain.setValueAtTime(0.0001, at)
    high.gain.linearRampToValueAtTime(volume * 0.12, at + 0.008)
    high.gain.exponentialRampToValueAtTime(0.0005, at + length * 0.4)
    ring.connect(high).connect(master)
    ring.start(at)
    ring.stop(at + length * 0.4 + 0.05)
  }

  return {
    // Plays one of the tunes above. `volume` is how loud it is where the listener stands (0 to 1).
    play(name, volume = 1) {
      if (!wanted.sound || volume < 0.03 || !TUNES[name]) return false
      const audio = wake()
      if (!audio || audio.state !== 'running') return false
      const start = audio.currentTime + 0.03
      for (const [frequency, at, length, wave] of TUNES[name]) note(frequency, start + at, length, 0.2 * Math.min(1, volume), wave)
      return true
    },
    // Says something in Japanese. What was waiting to be said is dropped: news that is out of
    // date is worse than none.
    say(text, { volume = 1, rate = 1, pitch = 1.08 } = {}) {
      if (!wanted.voice || volume < 0.05 || !('speechSynthesis' in window)) return false
      try {
        const line = new SpeechSynthesisUtterance(text)
        line.lang = 'ja-JP'
        line.rate = rate
        line.pitch = pitch
        line.volume = Math.min(1, volume)
        voice ??= speechSynthesis.getVoices().find((entry) => entry.lang?.toLowerCase().startsWith('ja')) ?? null
        if (voice) line.voice = voice
        if (speechSynthesis.pending) speechSynthesis.cancel()
        speechSynthesis.speak(line)
        return true
      } catch {
        return false
      }
    },
    set(options = {}) {
      if (typeof options.sound === 'boolean') wanted.sound = options.sound
      if (typeof options.voice === 'boolean') wanted.voice = options.voice
      if (!wanted.voice && 'speechSynthesis' in window) speechSynthesis.cancel()
    },
    dispose() {
      window.removeEventListener('pointerdown', onGesture)
      window.removeEventListener('keydown', onGesture)
      if ('speechSynthesis' in window) speechSynthesis.cancel()
      context?.close().catch(() => {})
    },
  }
}

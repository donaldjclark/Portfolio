import React from "react"
import './App.css'
import { ParallaxBoard } from "./components/ui/ParallaxBoard"
import { motion } from "framer-motion"
import {
  Github,
  Mail,
  Music2,
  Sparkles,
  ArrowRight,
  Download,
  Linkedin,
  ExternalLink,
  MapPin,
  Play,
  Pause,
} from "lucide-react"
import { Button } from "./components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import { Badge } from "./components/ui/badge"

const PROFILE = {
  name: "Donald J. Clark",
  tag: "audio engineer • producer • repair & systems",
  location: "Greenville, SC",
  about:
    "I design, fix, and tune the paths sound takes—from singer to stage to stereo. I’m an audio engineer, producer, and repair tech who solves real problems for artists and small venues: noisy chains, muddy rooms, lifeless mixes, cranky synths. My toolkit is ears, solder, and systems thinking: fewer clicks, better gain structure, musical outcomes. Serious about results, relaxed about process.",
}

const LINKS = {
  github: "https://github.com/donaldjclark",
  linkedin: "https://www.linkedin.com/in/donaldjoeclark/",
  email: "mailto:donaldjclark@gmail.com",
  resume: "/resume.pdf",
  bandcamp: "https://tearsofheck.bandcamp.com/track/resting-place",
}

const PROJECTS = [
  {
    title: "Upstate Sound & Repair",
    blurb:
      "Boutique audio service for musicians, studios, and small venues. Fault‑find and fix mixers, preamps, tape machines, pedals, amps, and vintage synths. Documented repairs, stable signal flow, and practical consulting so your rig just works.",
    tags: ["repair", "live sound", "consulting"],
    href: "https://upstatesound.co/",
  },
  {
    title: "Tiny Room Sessions",
    blurb:
      "Minimal‑mic live recordings with intent. Fast setups, disciplined gain before faders, and mixes that keep the room’s character without the mud. Built for honesty and replay value.",
    tags: ["live", "recording", "mixing"],
    href: "#",
  },
]

const SECTIONS = [
  {
    title: "Now",
    items: [
      "Booking fall mixes, PA tune-ups, and synth/outboard repair slots in Greenville.",
      "Designing non-preset signal chains for a 10-song LP—hands-on textures, no templates.",
      "Building tiny utilities that remove friction from sessions and live changeovers.",
    ],
  },
  {
    title: "Services",
    items: [
      "Studio & Gear Repair — Mixers, preamps, tape machines, amps, pedals; fault‑finding, recapping, calibration.",
      "Synth & Drum Machine Repair — Vintage keys, membranes, tact switches, power, voices, keybeds.",
      "Music Production — Pre‑pro, arrangement, tracking, mixing, and delivery built for translation.",
      "Podcast Production — Recording, edit, cleanup, leveling, and painless publishing.",
      "Live Sound — Small rooms to warehouse sets: loud, clean, feedback‑free, with sane load‑ins.",
    ],
  },
]

const WAVEFORM = Array.from({ length: 144 }, (_, i) => {
  const t = i / 143
  const envelope = Math.sin(Math.PI * t)
  const toneA = Math.sin(4.8 * Math.PI * t)
  const toneB = Math.sin(1.6 * Math.PI * t)
  const shimmer = Math.sin(13 * Math.PI * t) * 0.1
  const sample = Math.abs(envelope * (toneA + toneB * 0.6 + shimmer))
  return 0.18 + Math.min(1, sample) * 0.82
})

function createHallImpulseResponse(context, duration = 3.6, decay = 4.5) {
  const sampleRate = context.sampleRate
  const length = sampleRate * duration
  const impulse = context.createBuffer(2, length, sampleRate)
  for (let channel = 0; channel < impulse.numberOfChannels; channel++) {
    const channelData = impulse.getChannelData(channel)
    for (let i = 0; i < length; i++) {
      const t = i / length
      const damp = Math.pow(1 - t, decay)
      const noise = Math.random() * 2 - 1
      channelData[i] = noise * damp
    }
  }
  return impulse
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00"
  const total = Math.floor(seconds)
  const mins = Math.floor(total / 60)
  const secs = String(total % 60).padStart(2, "0")
  return `${mins}:${secs}`
}

function describeMediaError(mediaError) {
  if (!mediaError) return "Audio playback failed. Check your audio file."
  switch (mediaError.code) {
    case mediaError.MEDIA_ERR_ABORTED:
      return "Playback stopped before it finished loading."
    case mediaError.MEDIA_ERR_NETWORK:
      return "Network error while loading audio."
    case mediaError.MEDIA_ERR_DECODE:
      return "Audio file is corrupt or in an unsupported format."
    case mediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
      return "Audio source not found. Place an MP3 at public/audio/resting-place.mp3 to enable playback."
    default:
      return "Audio playback failed. Check your audio file."
  }
}

function GlowOrb({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute aspect-square w-[50vw] rounded-full blur-3xl opacity-30 mix-blend-screen ${className}`}
      style={{
        background:
          "radial-gradient(circle at 30% 30%, rgba(56,189,248,0.35), rgba(167,139,250,0.25) 40%, rgba(244,114,182,0.15) 70%, transparent 75%)",
      }}
    />
  )
}

function Header() {
  return (
    <header className="relative z-10">
      <nav className="mx-auto flex w-full items-center justify-between px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3"
        >
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-sky-400/70 via-fuchsia-400/70 to-violet-500/70 shadow-lg shadow-fuchsia-500/20" />
          <span className="font-semibold tracking-tight text-zinc-100">
            donclark.dev
          </span>
        </motion.div>
        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            className="rounded-xl"
            href={LINKS.resume}
            target="_blank"
            rel="noreferrer"
          >
            <span className="inline-flex items-center">
              <Download className="mr-2 h-4 w-4" /> Resume
            </span>
          </Button>
          <Button className="rounded-xl" href={LINKS.email}>
            <span className="inline-flex items-center">
              <Mail className="mr-2 h-4 w-4" /> Contact
            </span>
          </Button>
        </div>
      </nav>
    </header>
  )
}

function Hero({ tilt = 1 }) {
  return (
    <section className="relative z-10 mx-auto mt-4 w-full px-6">
      <ParallaxBoard className="overflow-hidden p-8 md:p-14" tilt={tilt}>
        <div className="absolute -right-6 -top-6 hidden h-28 w-28 animate-pulse rounded-3xl bg-gradient-to-br from-cyan-400/40 to-fuchsia-500/40 blur-xl md:block" />
        <Badge className="mb-6 gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-3 py-1 text-white">
          <Sparkles className="h-4 w-4" /> available for projects
        </Badge>
        <h1 className="hero-title translate-y-2 opacity-90 transition-[transform,opacity] duration-500 text-balance text-4xl font-bold tracking-tight text-zinc-50 md:text-6xl">
          {PROFILE.name}
        </h1>
        <p className="mt-3 text-lg text-zinc-300 md:text-xl">{PROFILE.tag}</p>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-zinc-400">
          <MapPin className="h-4 w-4" /> {PROFILE.location}
        </div>
        <p className="mt-6 max-w-3xl text-pretty text-zinc-300">
          {PROFILE.about}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            variant="secondary"
            className="rounded-xl"
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
          >
            <span className="inline-flex items-center">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </span>
          </Button>
          <Button
            variant="secondary"
            className="rounded-xl"
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <span className="inline-flex items-center">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </span>
          </Button>
          <Button
            variant="secondary"
            className="rounded-xl"
            href={LINKS.bandcamp}
            target="_blank"
            rel="noreferrer"
          >
            <span className="inline-flex items-center">
              <Music2 className="mr-2 h-4 w-4" /> Bandcamp
            </span>
          </Button>
        </div>
      </ParallaxBoard>
    </section>
  )
}

function ProjectCard({ title, blurb, tags, href, tilt = 0.85 }) {
  return (
    <ParallaxBoard tilt={tilt} className="group">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="block focus:outline-none"
      >
        <Card className="relative h-full overflow-hidden rounded-3xl border-transparent bg-transparent shadow-none backdrop-blur transition-all duration-300 group-hover:-translate-y-0.5">
          <CardHeader>
            <CardTitle className="flex items-center justify-between gap-4 text-zinc-100">
              <span>{title}</span>
              <ExternalLink className="h-4 w-4 opacity-60 transition-opacity group-hover:opacity-100" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-300">{blurb}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((t) => (
                <Badge key={t} className="rounded-full bg-white/5 text-zinc-300">
                  {t}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </a>
    </ParallaxBoard>
  )
}

function Projects({ tilt = 1 }) {
  return (
    <section className="relative z-10 mx-auto w-full px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 md:text-3xl">
          Selected Work
        </h2>
        <div className="text-sm text-zinc-400">built messy, shipped anyway</div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} {...p} tilt={tilt} />
        ))}
      </div>
    </section>
  )
}

function StackedList({ tilt = 0.7 }) {
  return (
    <section className="relative z-10 mx-auto w-full px-6 pb-20">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {SECTIONS.map((section) => (
          <ParallaxBoard key={section.title} tilt={tilt} className="rounded-3xl">
            <Card className="rounded-3xl border-transparent bg-transparent shadow-none backdrop-blur">
              <CardHeader>
                <CardTitle className="text-zinc-100">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-zinc-300">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </ParallaxBoard>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative z-10 mx-auto w-full px-6 pb-16 text-sm text-zinc-500">
      <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
        <div>
          © {new Date().getFullYear()} {PROFILE.name}. Made with chaotic kindness.
        </div>
        <div className="flex gap-4">
          <a className="hover:text-zinc-300" href={LINKS.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="hover:text-zinc-300" href={LINKS.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="hover:text-zinc-300" href={LINKS.email}>
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const [playing, setPlaying] = React.useState(false)
  const [playbackRate, setPlaybackRate] = React.useState(1)
  const [reverbEnabled, setReverbEnabled] = React.useState(false)
  const [reverbMix, setReverbMix] = React.useState(0.65)
  const [reverbTail, setReverbTail] = React.useState(3.6)
  const [currentTime, setCurrentTime] = React.useState(0)
  const [duration, setDuration] = React.useState(0)
  const [progress, setProgress] = React.useState(0)
  const [audioError, setAudioError] = React.useState(null)
  const tilt = 0.5 // global wobble intensity (50% calmer)

  const playbackRatePercent = React.useMemo(
    () => Math.min(100, Math.max(0, ((playbackRate - 0.7) / 0.6) * 100)),
    [playbackRate],
  )
  const playbackRateLabel = React.useMemo(() => playbackRate.toFixed(2), [playbackRate])
  const reverbMixPercent = React.useMemo(
    () => Math.min(100, Math.max(0, reverbMix * 100)),
    [reverbMix],
  )
  const reverbTailPercent = React.useMemo(
    () => Math.min(100, Math.max(0, ((reverbTail - 1.2) / (6 - 1.2)) * 100)),
    [reverbTail],
  )
  const reverbTailLabel = React.useMemo(() => reverbTail.toFixed(1), [reverbTail])
  const waveformDisabled = Boolean(audioError) || !Number.isFinite(duration) || duration <= 0
  const reverbControlsDisabled = Boolean(audioError) || !reverbEnabled || waveformDisabled
  const audioSrc = React.useMemo(() => `${import.meta.env.BASE_URL}audio/resting-place.mp3`, [])

  // Cursor-follow background: updates CSS vars --x/--y on the container
  const containerRef = React.useRef(null)
  const audioRef = React.useRef(null)
  const audioContextRef = React.useRef(null)
  const sourceNodeRef = React.useRef(null)
  const wetGainRef = React.useRef(null)
  const dryGainRef = React.useRef(null)
  const convolverRef = React.useRef(null)
  const seekingRef = React.useRef(false)
  const waveformRef = React.useRef(null)
  const progressRafRef = React.useRef(0)
  const setPos = React.useCallback((x, y) => {
    const el = containerRef.current
    if (!el) return
    const rx0 = Math.max(0, Math.min(1, x / window.innerWidth))
    const ry0 = Math.max(0, Math.min(1, y / window.innerHeight))
    // Reduce amplitude 25% (scale around center)
    const scale = 0.75
    const rx = 0.5 + (rx0 - 0.5) * scale
    const ry = 0.5 + (ry0 - 0.5) * scale
    // percentage for the glow
    const gxGlow = (rx0 * 100).toFixed(2) + '%'
    const gyGlow = (ry0 * 100).toFixed(2) + '%'
    el.style.setProperty('--x', gxGlow)
    el.style.setProperty('--y', gyGlow)
    // normalized -0.5..0.5 for parallax translation
    el.style.setProperty('--px', (rx0 - 0.5).toFixed(4))
    el.style.setProperty('--py', (ry0 - 0.5).toFixed(4))
    // background position for the moving palette
    const bgx = (100 - rx * 100).toFixed(2) + '%'
    const bgy = (100 - ry * 100).toFixed(2) + '%'
    el.style.setProperty('--bgx', bgx)
    el.style.setProperty('--bgy', bgy)
    // slight angle shift via gradient angle, no element rotation
    const angle = 135 + (rx0 - 0.5) * 6 // base 135deg ±3deg
    el.style.setProperty('--angle', angle.toFixed(2) + 'deg')
  }, [])
  const onPointerMove = React.useCallback((e) => {
    if ('touches' in e && e.touches[0]) {
      setPos(e.touches[0].clientX, e.touches[0].clientY)
    } else {
      setPos(e.clientX, e.clientY)
    }
  }, [setPos])
  React.useEffect(() => {
    // initial position a bit above center for a pleasing highlight
    setPos(window.innerWidth * 0.35, window.innerHeight * 0.28)
    const winMove = (ev) => {
      if ('touches' in ev && ev.touches && ev.touches[0]) {
        setPos(ev.touches[0].clientX, ev.touches[0].clientY)
      } else if ('clientX' in ev) {
        setPos(ev.clientX, ev.clientY)
      }
    }
    window.addEventListener('pointermove', winMove, { passive: true })
    window.addEventListener('touchmove', winMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', winMove)
      window.removeEventListener('touchmove', winMove)
    }
  }, [setPos])

  const ensureAudioGraph = React.useCallback(() => {
    const audioEl = audioRef.current
    if (!audioEl) return null
    if (typeof window === 'undefined') return null
    if (audioError) return null
    const AudioCtx = window.AudioContext || window.webkitAudioContext
    if (!AudioCtx) return null
    let ctx = audioContextRef.current
    if (!ctx) {
      ctx = new AudioCtx()
      audioContextRef.current = ctx
    }
    if (!sourceNodeRef.current) {
      const source = ctx.createMediaElementSource(audioEl)
      const dryGain = ctx.createGain()
      const wetGain = ctx.createGain()
      const convolver = ctx.createConvolver()
      convolver.buffer = createHallImpulseResponse(ctx, reverbTail, reverbTail * 1.5)
      sourceNodeRef.current = source
      dryGainRef.current = dryGain
      wetGainRef.current = wetGain
      convolverRef.current = convolver
      wetGain.gain.value = 0
      dryGain.gain.value = 1
      source.connect(dryGain)
      source.connect(convolver)
      convolver.connect(wetGain)
      dryGain.connect(ctx.destination)
      wetGain.connect(ctx.destination)
    }
    return ctx
  }, [audioError, reverbTail])

  const toggleReverb = React.useCallback(() => {
    if (audioError) return
    const ctx = ensureAudioGraph()
    if (!ctx) return
    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {})
    }
    setReverbEnabled((prev) => {
      const next = !prev
      const now = ctx.currentTime
      const wetTarget = next ? reverbMix : 0
      const dryTarget = next ? Math.max(0, 1 - reverbMix * 0.4) : 1
      if (wetGainRef.current) {
        wetGainRef.current.gain.setTargetAtTime(wetTarget, now, 0.05)
      }
      if (dryGainRef.current) {
        dryGainRef.current.gain.setTargetAtTime(dryTarget, now, 0.05)
      }
      return next
    })
  }, [audioError, ensureAudioGraph, reverbMix])

  const applyProgressToWaveform = React.useCallback((pct) => {
    if (waveformRef.current) {
      waveformRef.current.style.setProperty('--progress', `${(pct * 100).toFixed(3)}%`)
    }
  }, [])

  const handleWaveformPosition = React.useCallback(
    (clientX, target) => {
      if (waveformDisabled) return
      const el = audioRef.current
      if (!el || !duration) return
      const rect = target.getBoundingClientRect()
      const relative = Math.min(Math.max(clientX - rect.left, 0), rect.width)
      const pct = rect.width ? relative / rect.width : 0
      const nextTime = pct * duration
      el.currentTime = nextTime
      setCurrentTime(nextTime)
      setProgress(pct)
      applyProgressToWaveform(pct)
    },
    [applyProgressToWaveform, duration, waveformDisabled],
  )

  const onWaveformPointerDown = React.useCallback(
    (e) => {
      if (waveformDisabled) return
      const target = e.currentTarget
      seekingRef.current = true
      if (target.setPointerCapture) {
        try {
          target.setPointerCapture(e.pointerId)
        } catch {
          // ignore if pointer capture fails
        }
      }
      handleWaveformPosition(e.clientX, target)
    },
    [handleWaveformPosition, waveformDisabled],
  )

  const onWaveformPointerMove = React.useCallback(
    (e) => {
      if (!seekingRef.current) return
      handleWaveformPosition(e.clientX, e.currentTarget)
    },
    [handleWaveformPosition],
  )

  const endSeeking = React.useCallback((target, pointerId) => {
    if (!seekingRef.current) return
    seekingRef.current = false
    if (target.releasePointerCapture) {
      try {
        target.releasePointerCapture(pointerId)
      } catch {
        // ignore if release fails
      }
    }
  }, [])

  const onWaveformPointerUp = React.useCallback(
    (e) => {
      endSeeking(e.currentTarget, e.pointerId)
    },
    [endSeeking],
  )

  const onWaveformPointerCancel = React.useCallback(
    (e) => {
      endSeeking(e.currentTarget, e.pointerId)
    },
    [endSeeking],
  )

  const onWaveformKeyDown = React.useCallback(
    (e) => {
      if (waveformDisabled) return
      const el = audioRef.current
      if (!el || !duration) return
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault()
        const delta = e.key === 'ArrowRight' ? 5 : -5
        const next = Math.min(duration, Math.max(0, el.currentTime + delta))
        el.currentTime = next
        setCurrentTime(next)
        setProgress(duration ? next / duration : 0)
      } else if (e.key === 'Home') {
        e.preventDefault()
        el.currentTime = 0
        setCurrentTime(0)
        setProgress(0)
      } else if (e.key === 'End') {
        e.preventDefault()
        el.currentTime = duration
        setCurrentTime(duration)
        setProgress(1)
      }
    },
    [duration, waveformDisabled],
  )

  // Sync play/pause with the hidden audio element
  React.useEffect(() => {
    const el = audioRef.current
    if (!el) return
    if (playing) {
      const ctx = audioContextRef.current
      if (ctx && ctx.state === 'suspended') {
        ctx.resume().catch(() => {})
      }
      const playPromise = el.play()
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => setPlaying(false))
      }
    } else {
      el.pause()
    }
  }, [playing])

  // Keep the playback rate in sync with the slider
  React.useEffect(() => {
    const el = audioRef.current
    if (!el) return
    if ('preservesPitch' in el) {
      el.preservesPitch = false
    }
    if ('mozPreservesPitch' in el) {
      el.mozPreservesPitch = false
    }
    if ('webkitPreservesPitch' in el) {
      el.webkitPreservesPitch = false
    }
    el.playbackRate = playbackRate
  }, [playbackRate])

  React.useEffect(() => {
    const ctx = audioContextRef.current
    const wet = wetGainRef.current
    const dry = dryGainRef.current
    if (!ctx || !wet || !dry) return
    const now = ctx.currentTime
    const wetTarget = reverbEnabled ? reverbMix : 0
    const dryTarget = reverbEnabled ? Math.max(0, 1 - reverbMix * 0.4) : 1
    wet.gain.setTargetAtTime(wetTarget, now, 0.05)
    dry.gain.setTargetAtTime(dryTarget, now, 0.05)
  }, [reverbEnabled, reverbMix])

  React.useEffect(() => {
    const ctx = audioContextRef.current
    const convolver = convolverRef.current
    if (!ctx || !convolver) return
    convolver.buffer = createHallImpulseResponse(ctx, reverbTail, reverbTail * 1.5)
  }, [reverbTail])

  const updateProgressAnimation = React.useCallback(() => {
    const el = audioRef.current
    const waveformEl = waveformRef.current
    if (!el || !waveformEl || !duration) {
      progressRafRef.current = requestAnimationFrame(updateProgressAnimation)
      return
    }
    const pct = Math.min(1, Math.max(0, el.currentTime / duration))
    waveformEl.style.setProperty('--progress', `${(pct * 100).toFixed(3)}%`)
    progressRafRef.current = requestAnimationFrame(updateProgressAnimation)
  }, [duration])

  React.useEffect(() => {
    if (playing) {
      progressRafRef.current = requestAnimationFrame(updateProgressAnimation)
      return () => {
        if (progressRafRef.current) {
          cancelAnimationFrame(progressRafRef.current)
          progressRafRef.current = 0
        }
      }
    }
    if (progressRafRef.current) {
      cancelAnimationFrame(progressRafRef.current)
      progressRafRef.current = 0
    }
  }, [playing, updateProgressAnimation])

  React.useEffect(() => {
    if (!playing) {
      applyProgressToWaveform(progress)
    }
  }, [applyProgressToWaveform, playing, progress])

  React.useEffect(() => {
    const el = audioRef.current
    if (!el) return
    const updateDuration = () => {
      if (Number.isFinite(el.duration) && el.duration > 0) {
        setDuration(el.duration)
      }
    }
    const onTimeUpdate = () => {
      const time = el.currentTime || 0
      setCurrentTime(time)
      if (!Number.isFinite(el.duration) || el.duration <= 0) {
        setProgress(0)
        return
      }
      const pct = Math.min(1, Math.max(0, time / el.duration))
      setProgress(pct)
    }
    const onEnded = () => {
      setPlaying(false)
      setProgress(0)
      setCurrentTime(0)
    }
    const onRateChange = () => setPlaybackRate(el.playbackRate)
    const onError = () => {
      const message = describeMediaError(el.error)
      setAudioError(message)
      setPlaying(false)
      setProgress(0)
      setCurrentTime(0)
      setDuration(0)
    }
    el.addEventListener('loadedmetadata', updateDuration)
    el.addEventListener('durationchange', updateDuration)
    el.addEventListener('timeupdate', onTimeUpdate)
    el.addEventListener('ended', onEnded)
    el.addEventListener('ratechange', onRateChange)
    el.addEventListener('error', onError)
    if (el.readyState >= 1) {
      updateDuration()
      onTimeUpdate()
    }
    return () => {
      el.removeEventListener('loadedmetadata', updateDuration)
      el.removeEventListener('durationchange', updateDuration)
      el.removeEventListener('timeupdate', onTimeUpdate)
      el.removeEventListener('ended', onEnded)
      el.removeEventListener('ratechange', onRateChange)
      el.removeEventListener('error', onError)
    }
  }, [])

  React.useEffect(() => {
    if (audioError) {
      setPlaying(false)
    }
  }, [audioError])

  React.useEffect(() => {
    if (duration > 0) {
      setAudioError(null)
    }
  }, [duration])

  React.useEffect(() => {
    return () => {
      const ctx = audioContextRef.current
      if (ctx) {
        ctx.close().catch(() => {})
      }
      sourceNodeRef.current = null
      dryGainRef.current = null
      wetGainRef.current = null
      convolverRef.current = null
      if (progressRafRef.current) {
        cancelAnimationFrame(progressRafRef.current)
        progressRafRef.current = 0
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="app-container" onPointerMove={onPointerMove} onTouchMove={onPointerMove}>
      {/* Background gradient that subtly shifts with cursor */}
      <div className="bg-shift" aria-hidden />
      {/* Cursor glow highlight following pointer */}
      <div className="cursor-glow" aria-hidden />
      <Header />
      <Hero tilt={tilt} />
      {/* Now Playing */}
      <section className="relative z-10 mx-auto w-full px-6">
        {/* Hidden audio element. Put your file at public/audio/resting-place.mp3 */}
        <audio ref={audioRef} src={audioSrc} preload="metadata" playsInline />
        <ParallaxBoard tilt={tilt} className="mt-8 overflow-hidden rounded-3xl p-0">
          <Card className="border-transparent bg-transparent shadow-none">
            <CardContent className="flex flex-col gap-6 p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 flex-shrink-0 rounded-3xl bg-gradient-to-br from-indigo-500/50 via-fuchsia-500/40 to-cyan-400/40 shadow-inner shadow-fuchsia-500/20" />
                  <div>
                    <div className="text-xs uppercase tracking-[0.28em] text-zinc-500">
                      Now Playing
                    </div>
                    <div className="font-medium text-zinc-100">
                      Resting Place — Tears of Heck
                    </div>
                    <div className="text-sm text-zinc-400">
                      Tape-saturated live capture
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-start gap-2 md:justify-end">
                  <Button
                    variant="secondary"
                    className="rounded-xl"
                    onClick={() => setPlaying((p) => !p)}
                    disabled={Boolean(audioError)}
                  >
                    {playing ? (
                      <Pause className="mr-2 h-4 w-4" />
                    ) : (
                      <Play className="mr-2 h-4 w-4" />
                    )}
                    {playing ? "Pause" : "Preview"}
                  </Button>
                  <Button
                    variant="secondary"
                    className={`rounded-xl transition-shadow ${
                      reverbEnabled
                        ? 'border-fuchsia-400/60 bg-fuchsia-500/20 text-fuchsia-100 shadow-[0_0_25px_rgba(232,121,249,0.35)]'
                        : ''
                    }`}
                    onClick={toggleReverb}
                    type="button"
                    aria-pressed={reverbEnabled}
                    disabled={Boolean(audioError)}
                  >
                    <Sparkles className="mr-2 h-4 w-4" />
                    {reverbEnabled ? "Hall Reverb On" : "Hall Reverb"}
                  </Button>
                  <Button className="rounded-xl" href={LINKS.bandcamp} target="_blank" rel="noreferrer">
                    <ArrowRight className="mr-2 h-4 w-4" /> Full Session
                  </Button>
                </div>
              </div>
              {audioError ? (
                <div className="rounded-2xl border border-rose-400/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-100/80 shadow-inner shadow-rose-900/30">
                  {audioError}
                </div>
              ) : null}
              <div className="space-y-3">
                <div
                  className="waveform"
                  ref={waveformRef}
                  role="slider"
                  tabIndex={0}
                  aria-label="Scrub playback"
                  aria-valuemin={0}
                  aria-valuemax={Number.isFinite(duration) ? Number(duration.toFixed(2)) : 0}
                  aria-valuenow={Number(currentTime.toFixed(2))}
                  aria-disabled={waveformDisabled}
                  onPointerDown={onWaveformPointerDown}
                  onPointerMove={onWaveformPointerMove}
                  onPointerUp={onWaveformPointerUp}
                  onPointerCancel={onWaveformPointerCancel}
                  onKeyDown={onWaveformKeyDown}
                >
                  <div className="waveform-layer waveform-layer--base" aria-hidden>
                    {WAVEFORM.map((value, idx) => (
                      <span
                        key={`wf-base-${idx}`}
                        className="waveform-bar"
                        style={{ height: `${value * 100}%` }}
                      />
                    ))}
                  </div>
                  <div
                    className="waveform-layer waveform-layer--progress"
                    aria-hidden
                  >
                    {WAVEFORM.map((value, idx) => (
                      <span
                        key={`wf-progress-${idx}`}
                        className="waveform-bar"
                        style={{ height: `${value * 100}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex w-full flex-col gap-2 lg:max-w-sm">
                  <label htmlFor="playbackRate" className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
                    Playback Speed
                    <span className="ml-2 text-zinc-300">{playbackRateLabel}×</span>
                  </label>
                  <input
                    id="playbackRate"
                    type="range"
                    min="0.7"
                    max="1.3"
                    step="0.01"
                    value={playbackRate}
                    onChange={(e) => setPlaybackRate(Number(e.target.value))}
                    className="playback-slider"
                    style={{ '--slider-progress': `${playbackRatePercent}%` }}
                    disabled={waveformDisabled}
                  />
                </div>
                <div className="flex flex-col gap-1 text-xs text-zinc-500 sm:flex-row sm:items-center sm:gap-3">
                  <span className="uppercase tracking-[0.28em] text-zinc-500">Pitch follows tempo</span>
                  <span className="text-zinc-400">Speed it up for a higher key—drag the waveform or use ← → to jump 5s</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex w-full flex-col gap-2 lg:max-w-sm">
                  <label htmlFor="reverbMix" className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
                    Reverb Mix
                    <span className="ml-2 text-zinc-300">{Math.round(reverbMix * 100)}%</span>
                  </label>
                  <input
                    id="reverbMix"
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={reverbMix}
                    onChange={(e) => setReverbMix(Number(e.target.value))}
                    className="playback-slider"
                    style={{ '--slider-progress': `${reverbMixPercent}%` }}
                    disabled={reverbControlsDisabled}
                  />
                </div>
                <div className="flex w-full flex-col gap-2 lg:max-w-sm">
                  <label htmlFor="reverbTail" className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
                    Tail Length
                    <span className="ml-2 text-zinc-300">{reverbTailLabel}s</span>
                  </label>
                  <input
                    id="reverbTail"
                    type="range"
                    min="1.2"
                    max="6"
                    step="0.1"
                    value={reverbTail}
                    onChange={(e) => setReverbTail(Number(e.target.value))}
                    className="playback-slider"
                    style={{ '--slider-progress': `${reverbTailPercent}%` }}
                    disabled={reverbControlsDisabled}
                  />
                </div>
                <div className="flex flex-col gap-1 text-xs text-zinc-500 sm:w-40">
                  <span className="uppercase tracking-[0.28em] text-zinc-500">Room profile</span>
                  <span className="text-zinc-400">
                    Enable Hall Reverb, then dial the blend and how long the tail lingers.
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </ParallaxBoard>
      </section>
      <Projects tilt={tilt} />
      <StackedList tilt={tilt} />
      <Footer />
    </div>
  )
}

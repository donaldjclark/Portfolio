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
      "Booking fall mixes, PA tune‑ups, and synth/outboard repair slots in Greenville.",
      "Designing non‑preset signal chains for a 10‑song LP—hands‑on textures, no templates.",
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
          <Sparkles className="h-4 w-4" /> hireable human with taste
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
  const tilt = 0.5 // global wobble intensity (50% calmer)

  // Cursor-follow background: updates CSS vars --x/--y on the container
  const containerRef = React.useRef(null)
  const audioRef = React.useRef(null)
  // Build a base-aware path for GitHub Pages or any subpath deployment
  const audioSrc = `${import.meta.env.BASE_URL}audio/resting-place.mp3`
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

  // Sync play/pause with the hidden audio element
  React.useEffect(() => {
    const el = audioRef.current
    if (!el) return
    if (playing) {
      const p = el.play()
      if (p && typeof p.catch === 'function') p.catch(() => setPlaying(false))
    } else {
      el.pause()
    }
  }, [playing])

  React.useEffect(() => {
    const el = audioRef.current
    if (!el) return
    const onEnded = () => setPlaying(false)
    el.addEventListener('ended', onEnded)
    return () => {
      el.removeEventListener('ended', onEnded)
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
            <CardContent className="flex flex-col items-start justify-between gap-4 p-6 md:flex-row md:items-center">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 flex-shrink-0 rounded-2xl bg-gradient-to-br from-indigo-500/40 to-fuchsia-500/40" />
                <div>
                  <div className="text-sm uppercase tracking-wider text-zinc-400">
                    Now Playing
                  </div>
                  <div className="font-medium text-zinc-100">
                    Resting Place — Tears of Heck
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="secondary"
                  className="rounded-xl"
                  onClick={() => setPlaying((p) => !p)}
                >
                  {playing ? (
                    <Pause className="mr-2 h-4 w-4" />
                  ) : (
                    <Play className="mr-2 h-4 w-4" />
                  )}
                  {playing ? "Pause" : "Preview"}
                </Button>
                <Button className="rounded-xl" href={LINKS.bandcamp} target="_blank" rel="noreferrer">
                  <ArrowRight className="mr-2 h-4 w-4" /> Full Session
                </Button>
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

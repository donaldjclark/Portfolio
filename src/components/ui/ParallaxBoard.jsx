import * as React from "react"
import {
  Github,
  Linkedin,
  Music2,
  Sparkles,
  MapPin,
} from "lucide-react"

import { Button } from "./button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card"
import { Badge } from "./badge"

// Profile data
const PROFILE = {
  name: "Donald J. Clark",
  tag: "audio engineer, producer",
  location: "Greenville, SC",
  bio:
    "I keep Greenville’s sound machines honest. I’m an audio engineer, live-sound tech, and gear repair whisperer—equal parts soldering iron, fresh ears, and workflow triage. I consult for venues, help artists capture what they actually hear in their heads, and resurrecting archaic synthesizers and studio hardware so the music can flow. Serious about results, not uptight about the process.",
}

const LINKS = {
  github: "https://github.com/donaldjclark",
  linkedin: "https://www.linkedin.com/in/donaldjoeclark/",
  bandcamp: "https://tearsofheck.bandcamp.com/track/resting-place",
  soundcloud: "https://soundcloud.com/true_faith/tracks",
}

const NOW_PLAYING = {
  title: "Resting Place — Tears of Joy",
  url: ""
}

const PROJECTS = [
  {
    title: "Upstate Sound & Repair",
    blurb:
      "Boutique audio service for musicians, studios, and small venues. I diagnose and repair mixers, preamps, tape machines, pedals, amps, and vintage synths—bringing stubborn circuits back to life and eliminating the weak links in your chain. On time, no drama, documented fixes.",
    tags: ["live", "repair", "consulting"],
    href: "https://upstatesound.co",
  },
  {
    title: "Appalachian Mountaingaze EP",
    blurb:
      "Guitar-forward recordings with weight and motion—small-room tracking, intentional noise, and mixes built for night driving. Hands-on production from arrangement to master.",
    tags: ["music", "production", "mixing"],
    href: "PASTE_RELEASE_LINK",
  },
  {
    title: "Tiny Room Sessions",
    blurb:
      "Honest, minimal-mic live takes—fast setup, controlled gain before the faders, and mixes that keep the room’s character without the mud.",
    tags: ["live", "recording"],
    href: "PASTE_SESSION_LINK",
  },
]

const SECTIONS = [
  {
    title: "Now",
    items: [
      "Booking fall mixes, PA tune-ups, and synth/outboard repair slots in Greenville.",
      "Building custom patches and non-preset signal chains for a 10-song LP—everything handcrafted.",
      "Shipping small, useful tools and workflows that keep sessions moving.",
    ],
  },
  {
    title: "Services",
    items: [
      "Studio & Gear Repair — Mixers, preamps, tape machines, amps, pedals; fault-finding, part replacement, and calibration.",
      "Synth & Audio Gear Repair — Vintage synths, drum machines, samplers, and outboard restoration; from cracked membranes to caps and keybeds.",
      "Music Production — Pre-production, arrangement, recording, mixing, and mastering; collaboration > templates.",
      "Podcast Production — Recording, editing, cleanup, leveling, and delivery that sounds pro without sounding sterile.",
      "Live Sound Engineering — Small rooms to warehouse sets; clean, loud, feedback-free, with load-in help and cable discipline.",
    ],
  },
]

function Profile() {
  return (
    <section className="max-w-3xl mx-auto mt-12">
      <Badge className="mb-6 gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-3 py-1 text-white">
        <Sparkles className="h-4 w-4" /> available for projects
      </Badge>
      <h1 className="mb-4 text-4xl font-bold text-zinc-100 sm:text-5xl">{PROFILE.name}</h1>
      <p className="mb-2 text-lg text-zinc-400">{PROFILE.tag}</p>
      <div className="mt-2 flex flex-wrap items-center gap-2 text-zinc-400">
        <MapPin className="h-4 w-4" /> {PROFILE.location}
      </div>
      <p className="mt-6 text-pretty text-zinc-300">{PROFILE.bio}</p>
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
        <Button
          variant="secondary"
          className="rounded-xl"
          href={LINKS.soundcloud}
          target="_blank"
          rel="noreferrer"
        >
          <span className="inline-flex items-center">
            <Music2 className="mr-2 h-4 w-4" /> SoundCloud
          </span>
        </Button>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-zinc-100">Projects</h2>
      <div className="text-sm text-zinc-400">recent work</div>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {PROJECTS.map(({ title, blurb, tags, href }) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{blurb}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mt-2 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
              <a href={href} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm text-cyan-400 hover:underline">
                Learn more
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

function NowPlaying() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Now Playing</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="font-medium text-zinc-100">{NOW_PLAYING.title}</div>
        <div className="mt-4 flex flex-wrap gap-2">
          {LINKS.bandcamp && (
            <a
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition bg-white/10 text-zinc-100 hover:bg-white/20 border border-white/10"
              href={LINKS.bandcamp}
              target="_blank"
              rel="noreferrer"
            >
              Listen on Bandcamp
            </a>
          )}
          {LINKS.soundcloud && (
            <a
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition bg-white/10 text-zinc-100 hover:bg-white/20 border border-white/10"
              href={LINKS.soundcloud}
              target="_blank"
              rel="noreferrer"
            >
              Open SoundCloud
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

function Sections() {
  return (
    <>
      {SECTIONS.map(({ title, items }) => (
        <section key={title} className="mb-8 max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold text-zinc-100">{title}</h2>
          <ul className="list-disc list-inside text-zinc-400">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </>
  )
}

/**
 * ParallaxBoard
 * - tilts toward cursor (rotateX/Y)
 * - gradient follows cursor (via CSS vars --x/--y)
 * - `tilt` prop controls wobble intensity (default = 1)
 */
export function ParallaxBoard({ className = "", children, tilt = 1 }) {
  const ref = React.useRef(null)
  const rafRef = React.useRef(0)
  const target = React.useRef({ rx: 0, ry: 0, x: "50%", y: "50%" })
  const state = React.useRef({ rx: 0, ry: 0 })
  const lerp = (a, b, t) => a + (b - a) * t

  const raf = React.useCallback(() => {
    const el = ref.current
    if (!el) return
    state.current.rx = lerp(state.current.rx, target.current.rx, 0.12)
    state.current.ry = lerp(state.current.ry, target.current.ry, 0.12)
    el.style.transform = `rotateX(${state.current.rx}deg) rotateY(${state.current.ry}deg)`
    el.style.setProperty("--x", target.current.x)
    el.style.setProperty("--y", target.current.y)
    const done =
      Math.abs(state.current.rx - target.current.rx) <= 0.01 &&
      Math.abs(state.current.ry - target.current.ry) <= 0.01
    if (!done) {
      rafRef.current = requestAnimationFrame(raf)
    } else {
      rafRef.current = 0
    }
  }, [])

  // Global pointer tracking so all cards move in unison
  React.useEffect(() => {
    const move = (e) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      const clientX = 'touches' in e && e.touches?.[0] ? e.touches[0].clientX : e.clientX
      const clientY = 'touches' in e && e.touches?.[0] ? e.touches[0].clientY : e.clientY
      const dx = (clientX - cx) / window.innerWidth   // -0.5..0.5
      const dy = (clientY - cy) / window.innerHeight  // -0.5..0.5
      // Lean TOWARD the cursor and 25% less dramatic
      target.current.rx = -dy * 12 * tilt
      target.current.ry =  dx * 14 * tilt
      // Keep vars in case of custom effects; not used for per-card glow anymore
      const px = Math.min(100, Math.max(0, (clientX / window.innerWidth) * 100))
      const py = Math.min(100, Math.max(0, (clientY / window.innerHeight) * 100))
      target.current.x = `${px}%`
      target.current.y = `${py}%`
      if (!rafRef.current) raf()
    }
    const leave = () => {
      target.current = { rx: 0, ry: 0, x: '50%', y: '50%' }
      if (!rafRef.current) raf()
    }
    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('touchmove', move, { passive: true })
    window.addEventListener('pointerleave', leave)
    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('touchmove', move)
      window.removeEventListener('pointerleave', leave)
    }
  }, [tilt, raf])

  return (
    <div className="relative [perspective:1100px]">
      <div
        ref={ref}
        className={`relative will-change-transform rounded-[24px] border border-white/10 bg-zinc-900/40 backdrop-blur shadow-2xl ${className}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* your custom linear gradient + cursor highlight */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[24px] opacity-80"
          style={{
            backgroundImage: `linear-gradient(51.3087deg, rgba(243,72,104,1) -4.47%, rgba(244,72,104,1) -4.47%, rgba(239,70,106,1) -2.13%, rgba(138,35,171,1) 45.55%, rgba(36,0,236,1) 93.33%, rgba(36,0,237,1) 93.33%)`,
            mixBlendMode: "screen",
            filter: "blur(4px)",
          }}
        />
        {/* softening veil */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[24px]"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(0,0,0,0.08))",
          }}
        />
        {/* content layer */}
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  )
}

export default function VibePortfolio() {
  return (
    <main className="p-6 text-zinc-300">
      <Profile />
      <div className="mt-12 max-w-3xl">
        <NowPlaying />
      </div>
      <div className="mt-12 max-w-3xl">
        <Projects />
      </div>
      <div className="mt-12 max-w-3xl">
        <Sections />
      </div>
    </main>
  )
}

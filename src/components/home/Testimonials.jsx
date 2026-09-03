import { useEffect, useRef, useState } from 'react'
import { Play } from 'lucide-react'
import { testimonials } from '../../data/siteContent'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'
import SectionHeading from '../ui/SectionHeading'
import { prefersReducedMotion } from '../../lib/gsap'

const AUTO_MS = 3000

function TestimonialVideoCard({ item }) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const play = () => {
    const video = videoRef.current
    if (!video) return
    const run = video.play()
    if (run?.catch) run.catch(() => {})
    setPlaying(true)
  }

  const stop = () => {
    const video = videoRef.current
    if (video) {
      video.pause()
      video.currentTime = 0
    }
    setPlaying(false)
  }

  return (
    <article
      data-card
      className="group relative aspect-[3/4] w-[min(86vw,360px)] shrink-0 snap-start overflow-hidden rounded-[1.75rem] sm:w-[340px] md:w-[380px]"
      onMouseEnter={play}
      onMouseLeave={stop}
    >
      <img
        src={item.avatar}
        alt=""
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
          playing ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
          playing ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src={item.video} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50" />

      <span
        className={`pointer-events-none absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/20 backdrop-blur-sm transition-opacity duration-300 md:h-[4.5rem] md:w-[4.5rem] ${
          playing ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Play size={28} className="ml-0.5 fill-white text-white" />
      </span>

      <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-7">
        <p className="line-clamp-4 text-base leading-relaxed text-white md:text-lg">“{item.quote}”</p>
        <div className="mt-5 flex items-end justify-between gap-3">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/85 md:text-[13px]">{item.name}</p>
          <p className="gold-text text-right text-xs font-bold uppercase tracking-[0.16em] md:text-[13px]">{item.role}</p>
        </div>
      </div>
    </article>
  )
}

export default function Testimonials() {
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = testimonials.length

  const scrollToIndex = (index) => {
    const el = trackRef.current
    const card = el?.querySelector('[data-card]')
    if (!el || !card) return
    const styles = window.getComputedStyle(el)
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 16
    el.scrollTo({ left: index * (card.getBoundingClientRect().width + gap), behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToIndex(activeIndex)
  }, [activeIndex])

  useEffect(() => {
    if (prefersReducedMotion || paused || count < 2) return
    const id = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % count)
    }, AUTO_MS)
    return () => clearTimeout(id)
  }, [activeIndex, paused, count])

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <RouteBackground />
      <div className="container-px relative mx-auto max-w-container">
        <Reveal stagger={0} className="max-w-xl">
          <span className="eyebrow gold-text">Client Testimonial</span>
          <SectionHeading weight="bold" className="mt-3">
            What Our Partners Are Saying
          </SectionHeading>
        </Reveal>
      </div>

      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <Reveal
          as="div"
          stagger={0.08}
          ref={trackRef}
          className="container-px mx-auto mt-10 flex max-w-container snap-x snap-mandatory gap-4 overflow-x-auto pb-2 scrollbar-hide md:mt-14 md:gap-5"
        >
          {testimonials.map((item) => (
            <TestimonialVideoCard key={item.name + item.role} item={item} />
          ))}
        </Reveal>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="flex items-center gap-2 rounded-full bg-[#f4f1ea] px-3 py-2 dark:bg-white/10">
          {testimonials.map((item, i) => {
            const active = i === activeIndex
            return (
              <button
                key={item.name + item.role}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setActiveIndex(i)}
                className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                  active ? 'h-2.5 w-10' : 'h-2.5 w-2.5'
                } bg-gold-deep/25`}
              >
                {active && (
                  <span
                    className="testimonial-progress-fill absolute inset-y-0 left-0 w-full origin-left bg-gold-gradient"
                    style={{
                      animation: `testimonial-progress ${AUTO_MS}ms linear forwards`,
                      animationPlayState: paused ? 'paused' : 'running',
                    }}
                  />
                )}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

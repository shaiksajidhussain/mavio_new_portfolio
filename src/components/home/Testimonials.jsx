import { useEffect, useRef, useState } from 'react'
import { Quote, Ship, Star } from 'lucide-react'
import { testimonials } from '../../data/siteContent'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'

export default function Testimonials() {
  const [role, setRole] = useState('buyer')
  const items = testimonials[role]
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const updateActive = () => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('[data-card]')
    if (!card) return
    const cardWidth = card.getBoundingClientRect().width + 20
    setActiveIndex(Math.round(el.scrollLeft / cardWidth))
  }

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    el.scrollTo({ left: 0 })
    setActiveIndex(0)
    el.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive)
    return () => {
      el.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [role])

  const scrollToIndex = (i) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('[data-card]')
    const amount = card ? card.getBoundingClientRect().width + 20 : 0
    el.scrollTo({ left: i * amount, behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden container-px mx-auto max-w-container py-16 md:py-24">
      <RouteBackground />
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1fr)_2fr] md:gap-8">
        <Reveal stagger={0}>
          <div className="flex items-center gap-2 text-gold-deep">
            <span className="h-px w-6 bg-gold-deep" />
            <span className="eyebrow">Client Testimonial</span>
            <Ship size={14} />
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-navy dark:text-white md:text-4xl">
            What Our Partners{' '}
            <span className="text-gold-gradient underline decoration-gold-deep/40 underline-offset-4">
              Are Saying
            </span>
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted md:text-base">
            Real feedback from the buyers and suppliers we work with, shipment after shipment.
          </p>

          <div className="mt-7 inline-flex rounded-full border border-line bg-bg-muted p-1">
            {['buyer', 'supplier'].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRole(r)}
                className={`rounded-full px-5 py-2 text-sm font-medium capitalize transition-colors ${
                  role === r ? 'bg-navy text-white' : 'text-muted hover:text-ink'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="relative min-w-0">
          <Reveal
            key={role}
            as="div"
            stagger={0.1}
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-8 pr-1 scrollbar-hide"
          >
            {items.map((t) => (
              <figure
                key={t.name + t.role}
                data-card
                className="relative flex w-[85vw] shrink-0 snap-start flex-col rounded-2xl border border-line bg-surface p-6 pb-9 shadow-card sm:w-[60%] md:w-[calc(50%-10px)]"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt=""
                    className="h-14 w-14 shrink-0 rounded-full border-2 border-gold-deep object-cover"
                  />
                  <div>
                    <p className="font-display text-base font-bold text-ink">{t.name}</p>
                    <p className="eyebrow text-gold-deep">{t.role}</p>
                  </div>
                  <Quote size={20} className="ml-auto shrink-0 text-gold-deep/40" />
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  “{t.quote}”
                </blockquote>

                <div className="absolute -bottom-4 left-6 flex items-center gap-1 rounded-full bg-gold-gradient px-4 py-1.5 shadow-card">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={11} className="fill-navy-deep text-navy-deep" />
                  ))}
                </div>
              </figure>
            ))}
          </Reveal>

          <div className="mt-6 flex items-center justify-center gap-2 md:absolute md:right-0 md:top-1/2 md:mt-0 md:-translate-y-1/2 md:flex-col">
            {items.map((t, i) => (
              <button
                key={t.name + t.role}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full border-2 transition-colors ${
                  activeIndex === i ? 'border-gold-deep bg-gold-deep' : 'border-line bg-transparent'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

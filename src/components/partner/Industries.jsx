import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Ship } from 'lucide-react'
import { partnerPage } from '../../data/siteContent'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const { eyebrow, heading, cta, items } = partnerPage.industries

export default function Industries() {
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const updateActive = () => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('[data-card]')
    if (!card) return
    const cardWidth = card.getBoundingClientRect().width + 16
    setActiveIndex(Math.round(el.scrollLeft / cardWidth))
  }

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    el.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive)
    return () => {
      el.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [])

  const scrollToIndex = (i) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('[data-card]')
    const amount = card ? card.getBoundingClientRect().width + 16 : 0
    el.scrollTo({ left: i * amount, behavior: 'smooth' })
  }

  return (
    <section className="bg-bg-muted py-16 themeblack:bg-black md:py-24">
      <div className="container-px mx-auto max-w-container">
        <Reveal
          as="div"
          stagger={0.1}
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <div className="flex items-center gap-2 text-gold-deep">
              <span className="h-px w-6 bg-gold-deep" />
              <span className="eyebrow">{eyebrow}</span>
              <Ship size={14} />
            </div>
            <SectionHeading as="h2" className="mt-3 max-w-lg">
              {heading}
            </SectionHeading>
          </div>

          <Button to={cta.to} variant="primary" className="w-fit shrink-0">
            {cta.label}
            <ArrowRight size={16} />
          </Button>
        </Reveal>

        <Reveal
          as="div"
          stagger={0.08}
          delay={0.1}
          ref={trackRef}
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 scrollbar-hide"
        >
          {items.map((item) => (
            <div
              key={item.name}
              data-card
              className="group relative aspect-[3/4] w-[62vw] shrink-0 snap-start overflow-hidden rounded-2xl sm:w-[38vw] md:w-[26vw] lg:w-[19vw]"
            >
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="eyebrow text-gold">{item.tag}</p>
                <h3 className="mt-1 font-display text-sm font-bold leading-tight text-white sm:text-base">
                  {item.name}
                </h3>
                <span className="mt-2.5 block h-0.5 w-6 bg-gold-deep transition-all duration-300 group-hover:w-10 group-hover:bg-gold" />
              </div>
            </div>
          ))}
        </Reveal>

        <div className="mt-6 flex items-center justify-center gap-2">
          {items.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to ${item.name}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === i ? 'w-6 bg-gold-gradient' : 'w-2 bg-line hover:bg-gold-deep/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

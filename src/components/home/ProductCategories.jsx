import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, FlaskConical, Gem, Package, Ship, Wheat } from 'lucide-react'
import { productCategories } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'

const icons = {
  spices: Package,
  seafood: Ship,
  'fresh-produce': Wheat,
  chemicals: FlaskConical,
  minerals: Gem,
  'industrial-metals': Package,
}

export default function ProductCategories() {
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
    const amount = card ? card.getBoundingClientRect().width + 20 : 0
    el.scrollTo({ left: i * amount, behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <RouteBackground />
      <div className="container-px mx-auto max-w-container text-center">
        <Reveal stagger={0}>
          <div className="flex items-center justify-center gap-2 text-gold-deep">
            <span className="h-px w-6 bg-gold-deep" />
            <span className="eyebrow">Product Categories</span>
            <Package size={14} />
          </div>
          <h2 className="mx-auto mt-3 max-w-xl font-display text-3xl font-semibold text-navy dark:text-white md:text-4xl">
            What Do We{' '}
            <span className="text-gold-gradient underline decoration-gold-deep/40 underline-offset-4">
              Trade?
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-muted md:text-base">
            Here are the categories we work with closely — checked, handled, and ready to move.
          </p>
        </Reveal>
      </div>

      <Reveal
        as="div"
        stagger={0.1}
        ref={trackRef}
        className="container-px mx-auto mt-14 flex max-w-container snap-x snap-mandatory gap-5 overflow-x-auto pb-4 scrollbar-hide"
      >
        {productCategories.map((cat) => {
          const Icon = icons[cat.slug] || Package
          return (
            <Link
              key={cat.slug}
              data-card
              to={`/products/${cat.slug}`}
              className="group w-[78vw] shrink-0 snap-start sm:w-[46vw] md:w-[30vw] lg:w-[22vw]"
            >
              <div className="relative h-56 overflow-hidden rounded-t-full">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="relative -mt-7 flex flex-col items-center rounded-2xl border border-line bg-surface px-5 pb-6 pt-11 text-center shadow-card">
                <span className="absolute -top-7 flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-navy-deep shadow-card">
                  <Icon size={22} />
                </span>
                <h3 className="font-display text-lg font-bold text-ink">{cat.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{cat.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-deep">
                  Read More
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="mt-5 h-1 w-10 rounded-full bg-gold-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </Link>
          )
        })}
      </Reveal>

      <div className="mt-8 flex items-center justify-center gap-2">
        {productCategories.map((cat, i) => (
          <button
            key={cat.slug}
            type="button"
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to ${cat.name}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === i ? 'w-6 bg-gold-gradient' : 'w-2 bg-line hover:bg-gold-deep/50'
            }`}
          />
        ))}
      </div>

      <p className="container-px mx-auto mt-10 max-w-container text-center text-sm text-muted">
        We’ve shipped one product today, another tomorrow, and something new the day after.{' '}
        <br className="hidden sm:block" />
        So if you don’t see yours here,{' '}
        <Link to="/contact" className="font-semibold text-gold-deep hover:underline">
          why not tell us what you need?
        </Link>
      </p>
    </section>
  )
}

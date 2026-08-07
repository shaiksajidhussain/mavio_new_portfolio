import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { productCategories } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'

export default function ProductCategories() {
  const trackRef = useRef(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const updateArrows = () => {
    const el = trackRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 4)
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }

  useEffect(() => {
    updateArrows()
    const el = trackRef.current
    if (!el) return
    el.addEventListener('scroll', updateArrows, { passive: true })
    window.addEventListener('resize', updateArrows)
    return () => {
      el.removeEventListener('scroll', updateArrows)
      window.removeEventListener('resize', updateArrows)
    }
  }, [])

  const scrollByCard = (dir) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('[data-card]')
    const amount = card ? card.getBoundingClientRect().width + 20 : el.clientWidth * 0.8
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container-px mx-auto flex max-w-container items-end justify-between">
        <Reveal stagger={0}>
          <SectionLabel>Product Categories</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy dark:text-white md:text-4xl">
            What we export
          </h2>
        </Reveal>

        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={!canPrev}
            aria-label="Previous"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors disabled:opacity-30 enabled:hover:border-gold enabled:hover:text-gold"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={!canNext}
            aria-label="Next"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white transition-colors disabled:opacity-30 enabled:hover:bg-gold enabled:hover:text-navy-deep dark:bg-gold dark:text-navy-deep"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <Reveal
        as="div"
        stagger={0.1}
        ref={trackRef}
        className="container-px mx-auto mt-10 flex max-w-container snap-x snap-mandatory gap-5 overflow-x-auto pb-2 scrollbar-hide"
      >
        {productCategories.map((cat) => (
          <Link
            key={cat.slug}
            data-card
            to={`/products/${cat.slug}`}
            className="group relative aspect-[3/4] w-[78vw] shrink-0 snap-start overflow-hidden rounded-2xl shadow-card sm:w-[46vw] md:w-[30vw] lg:w-[22vw]"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/85 via-navy-deep/15 to-transparent" />

            <div className="relative flex h-full flex-col justify-between p-5">
              <div>
                <p className="eyebrow text-gold">{cat.name}</p>
                <h3 className="mt-2 font-display text-xl font-bold leading-tight text-white">
                  {cat.tagline}
                </h3>
              </div>
              <ArrowUpRight
                size={20}
                className="self-end text-white/80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold"
              />
            </div>
          </Link>
        ))}
      </Reveal>
    </section>
  )
}

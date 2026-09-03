import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { productCatalogue, productCategories } from '../../data/siteContent'
import { gsap, ScrollTrigger, prefersReducedMotion } from '../../lib/gsap'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import SectionLabel from '../ui/SectionLabel'
import { productsForCategory, productHref } from '../products/layouts/shared'
import { Link } from 'react-router-dom'

function ProductImage({ items, active, slug }) {
  const containerRef = useRef(null)
  const cursorRef = useRef(null)
  const [showCursor, setShowCursor] = useState(false)
  const activeItem = items[active]
  const href = activeItem ? productHref(activeItem, slug) : '/products'

  const onMove = useCallback((e) => {
    const el = cursorRef.current
    if (!el) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
  }, [])

  return (
    <Link
      to={href}
      ref={containerRef}
      className="group relative block overflow-hidden rounded-2xl"
      style={{ cursor: 'none' }}
      onMouseEnter={(e) => { setShowCursor(true); onMove(e) }}
      onMouseMove={onMove}
      onMouseLeave={() => setShowCursor(false)}
    >
      <div className="relative h-72 w-full sm:h-[26rem] lg:h-[560px]">
        {items.map((item, i) =>
          Math.abs(active - i) <= 1 || i === active ? (
            <img
              key={item.name}
              src={item.image}
              alt={item.name}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                active === i ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ) : null
        )}
      </div>

      <div
        ref={cursorRef}
        className={`pointer-events-none absolute left-0 top-0 z-50 flex h-20 w-20 items-center justify-center rounded-full bg-gold-gradient shadow-lg transition-opacity duration-200 ${
          showCursor ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="text-center text-[11px] font-bold uppercase leading-tight tracking-wide text-navy-deep">
          View<br />Product
        </span>
      </div>
    </Link>
  )
}

export default function ProductCatalogue() {
  const pinRef = useRef(null)
  const triggerRef = useRef(null)
  const suppressScrollSyncRef = useRef(false)
  const [slug, setSlug] = useState('spices')
  const [active, setActive] = useState(0)
  const items = productsForCategory(slug)
  const count = items.length

  useLayoutEffect(() => {
    if (prefersReducedMotion) return
    const pin = pinRef.current
    if (!pin) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 1024px)', () => {
        const st = ScrollTrigger.create({
          trigger: pin,
          start: 'top 88px',
          end: () => {
            const h = pin.offsetHeight
            return `+=${h}`
          },
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          pinType: 'transform',
          onUpdate: (self) => {
            if (suppressScrollSyncRef.current) return
            const next = Math.min(count - 1, Math.floor(self.progress * count + 0.0001))
            setActive((prev) => (prev === next ? prev : next))
          },
        })
        triggerRef.current = st
        return () => {
          triggerRef.current = null
        }
      })
    }, pin)

    const refresh = () => ScrollTrigger.refresh()
    const imgs = pin.querySelectorAll('img')
    imgs.forEach((img) => {
      if (!img.complete) img.addEventListener('load', refresh, { once: true })
    })
    const raf = requestAnimationFrame(refresh)

    return () => {
      cancelAnimationFrame(raf)
      triggerRef.current = null
      ctx.revert()
    }
  }, [count, slug])

  const goTo = (index) => {
    setActive(index)
    const st = triggerRef.current
    if (!st) return
    suppressScrollSyncRef.current = true
    st.scroll(st.start + (st.end - st.start) * ((index + 0.5) / count))
    requestAnimationFrame(() => {
      suppressScrollSyncRef.current = false
    })
  }

  const handleCategory = (s) => {
    if (s === slug) return
    const st = triggerRef.current
    if (st) {
      suppressScrollSyncRef.current = true
      st.scroll(st.start + 1)
    }
    setSlug(s)
    setActive(0)
    requestAnimationFrame(() => {
      ScrollTrigger.refresh()
      requestAnimationFrame(() => {
        suppressScrollSyncRef.current = false
      })
    })
  }

  return (
    <section ref={pinRef} className="relative z-20 bg-bg pb-10 pt-10 md:pb-14 md:pt-14">
      <div className="container-px mx-auto max-w-container">
        <Reveal stagger={0} className="text-center">
          <SectionLabel>What We Trade</SectionLabel>
          <SectionHeading className="mx-auto mt-3">{productCatalogue.heading}</SectionHeading>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted md:text-base">{productCatalogue.intro}</p>
        </Reveal>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:mt-10">
          {productCategories.map((cat) => {
            const isActive = cat.slug === slug
            return (
              <button
                key={cat.slug}
                type="button"
                onClick={() => handleCategory(cat.slug)}
                aria-pressed={isActive}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'bg-gold-gradient text-navy-deep'
                    : 'border border-line bg-surface text-muted hover:border-gold/50 hover:text-navy'
                }`}
              >
                {cat.name}
              </button>
            )
          })}
        </div>

        <div className="mt-8 md:mt-10">
          <div className="grid w-full gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start lg:gap-10">
            <ProductImage items={items} active={active} slug={slug} />

            <div className="divide-y divide-line border-y border-line">
              {items.map((item, i) => {
                const isOpen = active === i
                return (
                  <div key={item.name}>
                    <button
                      type="button"
                      onClick={() => goTo(i)}
                      className="flex w-full items-start gap-4 py-4 text-left md:py-5"
                    >
                      <span className="font-mono text-xs text-gold-deep">{String(i + 1).padStart(2, '0')}</span>
                      <span
                        className={`flex-1 font-display text-xl font-semibold md:text-2xl ${
                          isOpen ? 'text-navy dark:text-white' : 'text-navy/55 dark:text-white/50'
                        }`}
                      >
                        {item.name}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`mt-1 shrink-0 text-gold-deep transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-5 pl-10 text-sm leading-relaxed text-muted md:text-[0.95rem]">{item.body}</p>
                        <div className="pb-5 pl-10">
                          <Link
                            to="/contact"
                            className="inline-block rounded-full border border-line px-4 py-1.5 text-xs font-medium text-muted transition hover:border-gold/50 hover:text-navy"
                          >
                            Enquire
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

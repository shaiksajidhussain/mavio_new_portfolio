import { useLayoutEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { productCatalogue } from '../../../data/siteContent'
import { gsap, ScrollTrigger, prefersReducedMotion } from '../../../lib/gsap'
import Reveal from '../../ui/Reveal'
import SectionHeading from '../../ui/SectionHeading'
import SectionLabel from '../../ui/SectionLabel'

const { spices } = productCatalogue

export default function EditorialMix() {
  const pinRef = useRef(null)
  const triggerRef = useRef(null)
  const [active, setActive] = useState(0)
  const count = spices.products.length

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
          end: () => `+=${Math.round(window.innerHeight * 1.1)}`,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          pinType: 'transform',
          onUpdate: (self) => {
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
  }, [count])

  const goTo = (index) => {
    setActive(index)
    const st = triggerRef.current
    if (!st) return
    st.scroll(st.start + (st.end - st.start) * ((index + 0.5) / count))
  }

  return (
    <div ref={pinRef} className="container-px mx-auto max-w-container">
      <Reveal stagger={0} className="text-center">
        <SectionLabel>What We Trade</SectionLabel>
        <SectionHeading className="mx-auto mt-3">{productCatalogue.heading}</SectionHeading>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-muted md:text-base">{productCatalogue.intro}</p>
      </Reveal>

      <div className="mt-8 grid w-full gap-8 md:mt-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start lg:gap-10">
        <div className="overflow-hidden rounded-2xl">
          <div className="relative h-72 w-full sm:h-[26rem] lg:h-[560px]">
            {spices.products.map((item, i) =>
              Math.abs(active - i) <= 1 || i === active ? (
                <img
                  key={item.name}
                  src={item.image}
                  alt=""
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                    active === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ) : null
            )}
          </div>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {spices.products.map((item, i) => {
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
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

import { useLayoutEffect, useRef, useState } from 'react'
import { aboutPage } from '../../data/siteContent'
import { gsap, ScrollTrigger, prefersReducedMotion } from '../../lib/gsap'

const { whyChoose } = aboutPage
const slides = whyChoose.slides

export default function AboutWhyChoose() {
  const rootRef = useRef(null)
  const triggerRef = useRef(null)
  const [active, setActive] = useState(0)
  const count = slides.length

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 768px)', () => {
        if (prefersReducedMotion) return

        const progress = root.querySelector('[data-why-progress]')
        const copy = root.querySelector('[data-why-copy]')

        const st = ScrollTrigger.create({
          trigger: root,
          start: 'top 72px',
          end: () => `+=${Math.round(window.innerHeight * (count * 0.55 + 0.8))}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const next = Math.min(count - 1, Math.floor(self.progress * count + 0.0001))
            setActive((prev) => (prev === next ? prev : next))
            if (progress) gsap.set(progress, { scaleX: self.progress })
          },
        })
        triggerRef.current = st

        gsap.from(copy, {
          y: 50,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: root, start: 'top 78%', once: true },
        })

        return () => {
          triggerRef.current = null
        }
      })

      mm.add('(max-width: 767px)', () => {
        if (prefersReducedMotion) return
        gsap.utils.toArray('[data-why-mobile]').forEach((el) => {
          gsap.from(el, {
            y: 36,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          })
        })
      })
    }, root)

    const refresh = () => ScrollTrigger.refresh()
    const imgs = root.querySelectorAll('img')
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

  const current = slides[active]

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-[calc(100svh-72px)] items-end overflow-hidden bg-navy-deep"
    >
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <img
            key={slide.title}
            src={slide.image}
            alt=""
            data-no-dim
            className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ease-out ${
              active === i ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container-px relative mx-auto flex w-full max-w-container flex-col justify-end py-16 md:min-h-[calc(100svh-72px)] md:py-24">
        <div className="h-[2px] w-full origin-left overflow-hidden bg-white/15">
          <div data-why-progress className="h-full w-full origin-left bg-gold-gradient" style={{ transform: 'scaleX(0)' }} />
        </div>

        <div data-why-copy className="mt-10 hidden max-w-3xl md:mt-14 md:block">
          <p className="gold-text eyebrow">{whyChoose.eyebrow}</p>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white md:text-5xl">
            {current.title}
          </h2>
          <p className="mt-5 text-lg font-semibold leading-relaxed text-white drop-shadow-[0_2px_18px_rgba(2,16,40,0.85)] md:text-2xl">
            {current.body}
          </p>
        </div>

        <div className="mt-10 hidden gap-2 md:flex">
          {slides.map((slide, i) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => goTo(i)}
              aria-label={slide.title}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                active === i ? 'w-10 bg-gold-gradient' : 'w-3 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        <div className="mt-10 space-y-8 md:hidden">
          <p className="gold-text eyebrow">{whyChoose.eyebrow}</p>
          {slides.map((slide) => (
            <article key={slide.title} data-why-mobile>
              <p className="gold-text eyebrow">{slide.title}</p>
              <p className="mt-3 text-base font-semibold leading-relaxed text-white">{slide.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

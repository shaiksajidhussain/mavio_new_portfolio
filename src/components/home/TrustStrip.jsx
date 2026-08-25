import { useEffect, useRef } from 'react'
import { homeTrustBar } from '../../data/siteContent'
import { gsap, prefersReducedMotion } from '../../lib/gsap'
import Reveal from '../ui/Reveal'

function IconGlobe({ className }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <circle cx="32" cy="33" r="20" fill="#3d8fd9" />
      <ellipse cx="32" cy="33" rx="8" ry="20" fill="#2b6fad" />
      <path d="M14 26c6 2 12 3 18 1s12-2 18-1" fill="none" stroke="#7dce6e" strokeWidth="5" strokeLinecap="round" />
      <path d="M16 40c5-3 11-4 16-2s12 3 16 1" fill="none" stroke="#5bb85a" strokeWidth="4" strokeLinecap="round" />
      <path d="M28 14l2 6-5 1z" fill="#e24b4b" />
      <circle cx="28" cy="14" r="3.2" fill="#ef5b5b" />
      <path d="M46 22l2 6-5 1z" fill="#e08a2c" />
      <circle cx="46" cy="22" r="3.2" fill="#f0a03a" />
      <path d="M38 42l2 6-5 1z" fill="#e24b4b" />
      <circle cx="38" cy="42" r="3.2" fill="#ef5b5b" />
    </svg>
  )
}

function IconFactory({ className }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <rect x="8" y="34" width="48" height="22" rx="2" fill="#2f6fb3" />
      <path d="M12 34V18h8v6l8-6v6l8-6v16" fill="#3d8fd9" />
      <rect x="14" y="10" width="6" height="10" rx="1" fill="#c9d4e0" />
      <rect x="16" y="6" width="3" height="6" rx="1" fill="#9aabbd" />
      <rect x="12" y="34" width="18" height="8" fill="#e08a2c" />
      <rect x="34" y="34" width="18" height="8" fill="#d4781c" />
      <rect x="14" y="44" width="6" height="7" rx="0.8" fill="#f4c56a" />
      <rect x="23" y="44" width="6" height="7" rx="0.8" fill="#f4c56a" />
      <rect x="36" y="44" width="6" height="7" rx="0.8" fill="#f4c56a" />
      <rect x="45" y="44" width="6" height="7" rx="0.8" fill="#f4c56a" />
    </svg>
  )
}

function IconInspectedTruck({ className }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <rect x="6" y="24" width="34" height="22" rx="3" fill="#3fae62" />
      <path d="M40 30h10l6 8v8H40V30z" fill="#2f964e" />
      <rect x="42" y="32" width="8" height="6" rx="1" fill="#bfe7ff" />
      <circle cx="18" cy="50" r="6" fill="#2c3340" />
      <circle cx="18" cy="50" r="2.6" fill="#d5dbe3" />
      <circle cx="46" cy="50" r="6" fill="#2c3340" />
      <circle cx="46" cy="50" r="2.6" fill="#d5dbe3" />
      <circle cx="22" cy="32" r="9" fill="#fff" />
      <path d="M18 32.2l2.6 2.6 5.2-5.4" fill="none" stroke="#3fae62" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconCargo({ className }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <rect x="8" y="28" width="22" height="16" rx="1.5" fill="#d4781c" />
      <rect x="10" y="30" width="18" height="3" fill="#f0a03a" />
      <rect x="10" y="36" width="18" height="3" fill="#f0a03a" />
      <rect x="34" y="22" width="22" height="16" rx="1.5" fill="#2f6fb3" />
      <rect x="36" y="24" width="18" height="3" fill="#5aa0e0" />
      <rect x="36" y="30" width="18" height="3" fill="#5aa0e0" />
      <rect x="22" y="38" width="22" height="16" rx="1.5" fill="#0b2442" />
      <rect x="24" y="40" width="18" height="3" fill="#3d6a96" />
      <rect x="24" y="46" width="18" height="3" fill="#3d6a96" />
      <path d="M6 56h52" stroke="#c9a24c" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

const statIcons = [IconGlobe, IconFactory, IconInspectedTruck, IconCargo]

export default function TrustStrip() {
  const sectionRef = useRef(null)
  const numberRefs = useRef([])

  useEffect(() => {
    if (prefersReducedMotion) {
      numberRefs.current.forEach((el, i) => {
        if (el) el.textContent = Number(homeTrustBar[i].value).toLocaleString('en-US')
      })
      return
    }
    const ctx = gsap.context(() => {
      numberRefs.current.forEach((el, i) => {
        if (!el) return
        const target = Number(homeTrustBar[i].value)
        const counter = { val: 0 }
        gsap.to(counter, {
          val: target,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 90%', once: true },
          onUpdate: () => {
            el.textContent = Math.round(counter.val).toLocaleString('en-US')
          },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative z-20 -mt-14 px-4 sm:-mt-16 md:-mt-20">
      <div className="container-px mx-auto max-w-container">
        <Reveal
          as="div"
          stagger={0}
          className="grid grid-cols-2 overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-[0_24px_60px_-24px_rgba(2,16,35,0.35)] md:grid-cols-4 md:rounded-[2rem]"
        >
          {homeTrustBar.map((stat, i) => {
            const Icon = statIcons[i]
            const last = i === homeTrustBar.length - 1
            return (
              <div
                key={stat.label}
                className={[
                  'flex min-h-[6.5rem] items-center gap-3 px-5 py-6 sm:min-h-[7.5rem] sm:gap-4 sm:px-6 md:min-h-[8.25rem] md:px-7 md:py-8',
                  i % 2 === 0 ? 'border-r border-line' : '',
                  i < 2 ? 'border-b border-line md:border-b-0' : '',
                  !last ? 'md:border-r md:border-line' : '',
                ].join(' ')}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center sm:h-14 sm:w-14">
                  <Icon className="h-full w-full" />
                </span>
                <div>
                  <p className="font-display text-xl font-bold tracking-tight text-navy dark:text-white sm:text-2xl md:text-[1.65rem]">
                    <span ref={(el) => (numberRefs.current[i] = el)}>0</span>
                    {stat.suffix}
                  </p>
                  <p className="mt-0.5 text-[11px] leading-snug text-muted sm:text-xs md:text-sm">{stat.label}</p>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}

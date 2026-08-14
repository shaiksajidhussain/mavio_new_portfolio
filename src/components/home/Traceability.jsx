import { useEffect, useRef } from 'react'
import { ShoppingCart, Store, Truck } from 'lucide-react'
import { traceability } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

const icons = { Buyer: ShoppingCart, Seller: Store, Logistics: Truck }
const positions = [16.5, 50, 83.5]

function RoleCard({ role }) {
  const Icon = icons[role.role]
  return (
    <>
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-deep/15 text-gold-deep">
        <Icon size={18} />
      </span>
      <p className="mt-3 font-display text-base font-bold text-ink">{role.role}</p>
      <p className="mt-1.5 text-xs leading-relaxed text-muted">{role.description}</p>
    </>
  )
}

export default function Traceability() {
  const sectionRef = useRef(null)
  const diagramRef = useRef(null)
  const pathsRef = useRef([])

  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      pathsRef.current.forEach((path, i) => {
        if (!path) return
        gsap.fromTo(
          path,
          { strokeDashoffset: 150 },
          {
            strokeDashoffset: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: diagramRef.current,
              start: `top ${95 - i * 6}%`,
              end: `top ${35 - i * 6}%`,
              scrub: 0.4,
            },
          }
        )
      })

      gsap.fromTo(
        '[data-hub]',
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(2)',
          scrollTrigger: { trigger: diagramRef.current, start: 'top 95%', once: true, fastScrollEnd: true },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden container-px mx-auto max-w-container py-16 md:py-24">
      <RouteBackground flip />
      <Reveal stagger={0}>
        <SectionLabel>Traceability</SectionLabel>
        <h2 className="mt-3 font-display text-3xl font-semibold text-navy dark:text-white md:text-4xl">
          {traceability.heading}
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted md:text-base">{traceability.description}</p>
      </Reveal>

      <div ref={diagramRef} className="relative mt-20 hidden pb-8 lg:block" style={{ height: 300 }}>
        <svg
          viewBox="0 0 100 60"
          preserveAspectRatio="none"
          className="absolute inset-0 h-[240px] w-full overflow-visible"
        >
          {positions.map((x, i) => (
            <path
              key={x}
              ref={(el) => (pathsRef.current[i] = el)}
              d={`M 50 8 Q ${(50 + x) / 2} 26 ${x} 44`}
              fill="none"
              stroke="#e0b05a"
              strokeOpacity="0.5"
              strokeWidth="0.4"
              strokeDasharray="150"
              strokeDashoffset="150"
            />
          ))}
        </svg>

        <div
          data-hub
          className="absolute left-1/2 top-0 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-gold-gradient text-center shadow-card"
        >
          <span className="font-display text-[10px] font-bold leading-tight text-navy-deep">
            MAVIO
          </span>
        </div>

        {traceability.roles.map((r, i) => (
          <div
            key={r.role}
            className="absolute top-[190px] w-60 -translate-x-1/2 rounded-2xl border border-line bg-surface p-5 shadow-card"
            style={{ left: `${positions[i]}%` }}
          >
            <RoleCard role={r} />
          </div>
        ))}
      </div>

      <Reveal as="div" stagger={0.1} className="mt-10 grid gap-5 sm:grid-cols-3 lg:hidden">
        {traceability.roles.map((r) => (
          <div key={r.role} className="rounded-2xl border border-line bg-surface p-5 shadow-card">
            <RoleCard role={r} />
          </div>
        ))}
      </Reveal>
    </section>
  )
}

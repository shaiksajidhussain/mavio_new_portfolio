import { useEffect, useRef, useState } from 'react'
import { Globe2, Handshake, Plane, Repeat, Ship, ShieldCheck, Truck } from 'lucide-react'
import { testimonials, trustStats, whyChooseMavio } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

const pointIcons = [Globe2, ShieldCheck, Truck, Repeat, Handshake]

const sideImage = {
  src: 'https://images.unsplash.com/photo-1759272840538-ae4b07214c71?auto=format&fit=crop&w=1000&q=80',
  alt: 'Shipping containers stacked at port during golden hour',
}

const countriesStat = trustStats.find((s) => s.label === 'Countries Served')
const avatars = [...testimonials.buyer.slice(0, 2), ...testimonials.supplier.slice(0, 2)].map((t) => t.avatar)

function splitPoint(p) {
  const idx = p.indexOf(':')
  if (idx === -1) return { title: p, description: '' }
  return { title: p.slice(0, idx).trim(), description: p.slice(idx + 1).trim() }
}

export default function WhyChooseMavio() {
  const [role, setRole] = useState('buyer')
  const panelRef = useRef(null)
  const content = whyChooseMavio[role]

  useEffect(() => {
    if (prefersReducedMotion || !panelRef.current) return
    gsap.fromTo(
      panelRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
    )
  }, [role])

  return (
    <section className="relative overflow-hidden container-px mx-auto max-w-container py-16 md:py-20">
      <SectionLabel>Why Choose Mavio</SectionLabel>

      <Reveal
        as="div"
        stagger={0}
        className="mt-6 overflow-hidden rounded-3xl border border-line shadow-card md:grid md:grid-cols-2"
      >
        <div className="relative flex flex-col overflow-hidden bg-navy-deep p-8 md:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: 'radial-gradient(rgb(255 255 255) 1px, transparent 1px)',
              backgroundSize: '22px 22px',
            }}
          />

          <div className="relative">
            <div className="flex items-center gap-2 text-gold">
              <span className="h-px w-6 bg-gold" />
              <span className="eyebrow">Why Choose Us</span>
              <Plane size={14} />
            </div>

            <div className="mt-6 inline-flex rounded-full border border-white/15 bg-white/5 p-1">
              {['buyer', 'supplier'].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRole(r)}
                  className={`rounded-full px-5 py-2 text-sm font-medium capitalize transition-colors ${
                    role === r ? 'bg-gold-gradient text-navy-deep' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>

            <h3 ref={panelRef} className="mt-6 font-display text-3xl font-bold leading-tight text-white md:text-4xl">
              {content.heading}
            </h3>

            {countriesStat && (
              <div className="mt-9 flex items-center gap-4 border-l-2 border-gold pl-5">
                <div className="flex -space-x-3">
                  {avatars.map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      className="h-10 w-10 rounded-full border-2 border-navy-deep object-cover"
                    />
                  ))}
                </div>
                <div>
                  <p className="font-display text-3xl font-black text-white">
                    {countriesStat.value}
                    {countriesStat.suffix}
                  </p>
                  <p className="text-sm text-white/60">Countries Served</p>
                </div>
              </div>
            )}
          </div>

          <div className="relative my-8 hidden flex-1 overflow-hidden rounded-2xl md:block md:min-h-[140px]">
            <img src={sideImage.src} alt={sideImage.alt} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-navy-deep/45" />

            <span className="pointer-events-none absolute -right-3 -top-3 flex h-11 w-11 items-center justify-center rounded-full bg-gold-gradient text-navy-deep shadow-card animate-float-slow">
              <Ship size={18} />
            </span>
            <span className="pointer-events-none absolute bottom-4 left-4 animate-float text-gold" style={{ '--float-rotate': '-8deg' }}>
              <Truck size={20} />
            </span>
          </div>

          <div className="relative hidden md:block">
            <svg aria-hidden viewBox="0 0 220 70" className="h-14 w-52 text-gold/50">
              <path
                d="M4 10 C 55 2, 80 34, 130 30 C 155 28, 150 46, 172 44 C 186 43, 182 34, 196 36"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 5"
                strokeLinecap="round"
              />
            </svg>
            <Plane size={18} className="absolute -bottom-1 left-0 animate-float-fast text-gold" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden bg-line sm:grid-cols-2">
          {content.points.map((p, i) => {
            const { title, description } = splitPoint(p)
            const Icon = pointIcons[i % pointIcons.length]
            return (
              <div
                key={p}
                className={`bg-surface p-5 ${i === content.points.length - 1 ? 'sm:col-span-2' : ''}`}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-deep/15 text-gold-deep">
                  <Icon size={16} />
                </span>
                <p className="mt-2.5 font-display text-sm font-bold text-ink">{title}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted">{description}</p>
              </div>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}

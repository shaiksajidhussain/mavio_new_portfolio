import { useEffect, useRef } from 'react'
import {
  Box,
  FileCheck2,
  Handshake,
  Search,
  ShieldCheck,
  Ship,
} from 'lucide-react'
import { partnerPage } from '../../data/siteContent'
import { usePartnerRole } from '../../context/PartnerRoleContext'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'
import { gsap, prefersReducedMotion } from '../../lib/gsap'
import { pressCard, tiltCard, untiltCard } from '../../lib/cardTilt'
import SectionHeading from '../ui/SectionHeading'

const { heading, complexWay } = partnerPage.commitment

const stepIcons = [Search, Handshake, ShieldCheck, FileCheck2, Ship, Box]

const EASE = 'cubic-bezier(0.23, 1, 0.32, 1)'

function RoleToggle() {
  const { role, setRole } = usePartnerRole()
  const tabRefs = useRef([])
  const indicatorRef = useRef(null)

  const moveIndicator = (index, animate = true) => {
    const btn = tabRefs.current[index]
    const indicator = indicatorRef.current
    if (!btn || !indicator) return
    const { offsetLeft, offsetWidth } = btn
    if (animate && !prefersReducedMotion) {
      gsap.to(indicator, { left: offsetLeft, width: offsetWidth, duration: 0.35, ease: 'power3.out' })
    } else {
      indicator.style.left = `${offsetLeft}px`
      indicator.style.width = `${offsetWidth}px`
    }
  }

  useEffect(() => {
    moveIndicator(role === 'buyer' ? 0 : 1, false)
    const onResize = () => moveIndicator(role === 'buyer' ? 0 : 1, false)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="relative mt-6 inline-flex rounded-full border border-line bg-bg-muted p-1">
      <span ref={indicatorRef} className="pointer-events-none absolute bottom-1 top-1 rounded-full bg-gold-gradient" />
      {['buyer', 'supplier'].map((r, i) => (
        <button
          key={r}
          ref={(el) => (tabRefs.current[i] = el)}
          type="button"
          onClick={() => {
            setRole(r)
            moveIndicator(i)
          }}
          className={`relative z-10 rounded-full px-6 py-2.5 text-sm font-semibold capitalize transition-[color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] ${
            role === r ? 'text-navy-deep' : 'text-muted hover:text-ink'
          }`}
        >
          {r}
        </button>
      ))}
    </div>
  )
}

function BuyerScene() {
  return (
    <svg viewBox="0 0 160 140" className="mx-auto h-28 w-auto text-navy transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/actor:scale-105 md:h-32" aria-hidden>
      <circle cx="118" cy="28" r="18" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.35" className="origin-center transition-opacity duration-300 group-hover/actor:opacity-70" />
      <path
        d="M106 28c0-6.6 5.4-12 12-12s12 5.4 12 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.55"
      />
      <path d="M112 28h12M118 22v12" stroke="currentColor" strokeWidth="1.2" opacity="0.45" />
      <rect x="104" y="48" width="28" height="34" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <path d="M108 56h20M108 64h14M108 72h18" stroke="currentColor" strokeWidth="1.2" opacity="0.45" />
      <ellipse cx="58" cy="118" rx="36" ry="6" fill="currentColor" opacity="0.08" />
      <rect x="28" y="78" width="72" height="8" rx="2" fill="currentColor" opacity="0.12" />
      <rect x="34" y="62" width="44" height="28" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <rect x="38" y="66" width="36" height="18" rx="1.5" fill="currentColor" opacity="0.08" />
      <circle cx="70" cy="40" r="14" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M62 40c0-4.4 3.6-8 8-8s8 3.6 8 8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M52 78c2-16 10-24 18-24s16 8 18 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M48 78h44v22H48z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M58 100v10M80 100v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function SupplierScene() {
  return (
    <svg viewBox="0 0 160 140" className="mx-auto h-28 w-auto text-navy transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/actor:scale-105 md:h-32" aria-hidden>
      <rect x="96" y="46" width="48" height="52" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.45" />
      <path d="M96 58h48M106 66v24M118 66v24M130 66v24" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
      <path d="M108 46V34M132 46V30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.35" className="transition-opacity duration-300 group-hover/actor:opacity-70" />
      <circle cx="128" cy="72" r="14" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
      <path d="M128 62v20M118 72h20" stroke="currentColor" strokeWidth="1.2" opacity="0.35" />
      <ellipse cx="58" cy="118" rx="36" ry="6" fill="currentColor" opacity="0.08" />
      <circle cx="58" cy="36" r="16" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M46 36h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="58" cy="42" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M40 78c2-16 10-24 18-24s16 8 18 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M36 78h44v26H36z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <rect x="78" y="70" width="22" height="28" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M82 78h14M82 84h10M82 90h12" stroke="currentColor" strokeWidth="1.2" opacity="0.55" />
      <path d="M46 104v10M70 104v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function MavioHub() {
  const hubRef = useRef(null)

  return (
    <div
      ref={hubRef}
      className="relative mx-auto flex h-[7.5rem] w-[7.5rem] cursor-default items-center justify-center md:h-36 md:w-36"
      onPointerEnter={() => {
        if (prefersReducedMotion || !hubRef.current) return
        gsap.to(hubRef.current.querySelector('[data-hub]'), {
          scale: 1.06,
          duration: 0.35,
          ease: 'power3.out',
        })
        gsap.to(hubRef.current.querySelector('[data-glow]'), {
          opacity: 0.55,
          scale: 1.15,
          duration: 0.4,
          ease: 'power3.out',
        })
        gsap.to(hubRef.current.querySelector('[data-ship]'), {
          rotate: -8,
          duration: 0.35,
          ease: 'power3.out',
        })
      }}
      onPointerLeave={() => {
        if (!hubRef.current) return
        gsap.to(hubRef.current.querySelector('[data-hub]'), {
          scale: 1,
          duration: 0.45,
          ease: 'power3.out',
        })
        gsap.to(hubRef.current.querySelector('[data-glow]'), {
          opacity: 0.25,
          scale: 1,
          duration: 0.45,
          ease: 'power3.out',
        })
        gsap.to(hubRef.current.querySelector('[data-ship]'), {
          rotate: 0,
          duration: 0.45,
          ease: 'power3.out',
        })
      }}
      onPointerDown={() => pressCard(hubRef.current?.querySelector('[data-hub]'), true)}
      onPointerUp={() => pressCard(hubRef.current?.querySelector('[data-hub]'), false)}
      onPointerCancel={() => pressCard(hubRef.current?.querySelector('[data-hub]'), false)}
    >
      <div
        data-glow
        className="absolute inset-0 rounded-[28%] bg-gold-gradient opacity-25 blur-xl will-change-transform"
        aria-hidden
      />
      <div
        data-hub
        className="relative flex h-full w-full flex-col items-center justify-center border-2 border-navy bg-surface text-center shadow-[0_16px_40px_-20px_rgba(11,36,66,0.45)] will-change-transform"
        style={{ clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)' }}
      >
        <span
          data-ship
          className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-gradient text-navy-deep will-change-transform md:h-10 md:w-10"
        >
          <Ship size={18} strokeWidth={2.2} />
        </span>
        <p className="mt-1.5 px-3 font-display text-[10px] font-bold uppercase leading-tight tracking-[0.12em] text-navy md:text-[11px]">
          Mavio
          <br />
          Global
        </p>
      </div>
    </div>
  )
}

function FlowArrow({ vertical = false }) {
  if (vertical) {
    return (
      <div className="flex justify-center py-1 text-navy/50 sm:hidden" aria-hidden>
        <svg viewBox="0 0 24 40" className="h-10 w-6 overflow-visible" fill="none">
          <line x1="12" y1="2" x2="12" y2="30" stroke="currentColor" strokeWidth="1.4" opacity="0.3" />
          <line
            className="flow-arrow-dash-vertical"
            x1="12"
            y1="2"
            x2="12"
            y2="30"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeDasharray="5 7"
            strokeLinecap="round"
          />
          {prefersReducedMotion ? (
            <circle cx="12" cy="16" r="2.4" fill="#d4a24c" />
          ) : (
            <circle r="2.4" fill="#d4a24c">
              <animateMotion dur="1.5s" repeatCount="indefinite" path="M12,4 L12,28" />
            </circle>
          )}
          <path
            d="M7 28 L12 34 L17 28"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    )
  }

  return (
    <div
      className="group/arrow hidden items-center text-navy/50 transition-colors duration-200 hover:text-gold-deep sm:flex"
      aria-hidden
    >
      <svg viewBox="0 0 80 28" className="h-7 w-[4.5rem] overflow-visible md:w-24" fill="none">
        <line x1="2" y1="14" x2="62" y2="14" stroke="currentColor" strokeWidth="1.4" opacity="0.28" />
        <line
          className="flow-arrow-dash"
          x1="2"
          y1="14"
          x2="62"
          y2="14"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeDasharray="6 8"
          strokeLinecap="round"
        />
        {prefersReducedMotion ? (
          <circle cx="32" cy="14" r="2.5" fill="#d4a24c" />
        ) : (
          <circle r="2.5" fill="#d4a24c">
            <animateMotion dur="1.5s" repeatCount="indefinite" path="M4,14 L58,14" />
          </circle>
        )}
        <path
          className="flow-arrow-head"
          d="M58 7 L70 14 L58 21"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

function ActorCard({ label, children, accent }) {
  const cardRef = useRef(null)

  return (
    <div className="group/actor flex flex-col items-center text-center">
      <div
        ref={cardRef}
        onPointerMove={(e) => tiltCard(cardRef.current, e)}
        onPointerLeave={() => untiltCard(cardRef.current)}
        onPointerDown={() => pressCard(cardRef.current, true)}
        onPointerUp={() => pressCard(cardRef.current, false)}
        onPointerCancel={() => pressCard(cardRef.current, false)}
        className={`relative flex h-36 w-full max-w-[11rem] items-end justify-center rounded-2xl border px-2 pb-2 pt-3 will-change-transform transition-[border-color,box-shadow,background-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] md:h-40 ${
          accent
            ? 'border-gold-deep/35 bg-gold-deep/[0.06] hover:border-gold-deep/60 hover:shadow-[0_18px_36px_-20px_rgba(212,162,76,0.55)]'
            : 'border-line bg-white/70 hover:border-navy/25 hover:shadow-[0_18px_36px_-20px_rgba(11,36,66,0.35)]'
        }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
      </div>
      <span
        className={`mt-3 rounded-full border bg-surface px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-navy transition-[transform,border-color,background-color,color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/actor:-translate-y-0.5 group-hover/actor:border-gold-deep/40 group-hover/actor:bg-gold-deep/10 ${
          accent ? 'border-gold-deep/30' : 'border-line'
        }`}
      >
        {label}
      </span>
    </div>
  )
}

function StepCard({ step, Icon }) {
  const cardRef = useRef(null)
  const iconRef = useRef(null)

  return (
    <div
      ref={cardRef}
      onPointerMove={(e) => tiltCard(cardRef.current, e)}
      onPointerLeave={() => {
        untiltCard(cardRef.current)
        if (iconRef.current && !prefersReducedMotion) {
          gsap.to(iconRef.current, { y: 0, scale: 1, duration: 0.35, ease: 'power3.out' })
        }
      }}
      onPointerEnter={() => {
        if (iconRef.current && !prefersReducedMotion) {
          gsap.to(iconRef.current, { y: -3, scale: 1.08, duration: 0.3, ease: 'power3.out' })
        }
      }}
      onPointerDown={() => pressCard(cardRef.current, true)}
      onPointerUp={() => pressCard(cardRef.current, false)}
      onPointerCancel={() => pressCard(cardRef.current, false)}
      className="group/step relative rounded-2xl border border-white/80 bg-surface px-3 pb-4 pt-5 text-center shadow-[0_10px_24px_-16px_rgba(11,36,66,0.35)] will-change-transform transition-[border-color,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-gold-deep/35 hover:shadow-[0_18px_36px_-18px_rgba(11,36,66,0.4)]"
      style={{ transformStyle: 'preserve-3d', transitionTimingFunction: EASE }}
    >
      <span className="absolute -top-3 left-1/2 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-navy text-[11px] font-bold text-white transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/step:scale-110 group-hover/step:bg-gold-deep group-hover/step:text-navy-deep">
        {step.n}
      </span>
      <span
        ref={iconRef}
        className="mx-auto flex h-10 w-10 items-center justify-center text-navy will-change-transform"
      >
        <Icon size={22} strokeWidth={1.7} />
      </span>
      <p className="mt-2 text-[12px] font-semibold leading-snug text-navy transition-colors duration-200 group-hover/step:text-navy-deep">
        {step.title}
      </p>
    </div>
  )
}

function ProcurementDiagram({ role }) {
  const diagramRef = useRef(null)
  const buyerFirst = role !== 'supplier'

  useEffect(() => {
    if (prefersReducedMotion || !diagramRef.current) return
    gsap.fromTo(
      diagramRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' }
    )
  }, [role])

  const left = buyerFirst
    ? { label: 'Buyer', scene: <BuyerScene /> }
    : { label: 'Supplier', scene: <SupplierScene /> }
  const right = buyerFirst
    ? { label: 'Supplier', scene: <SupplierScene /> }
    : { label: 'Buyer', scene: <BuyerScene /> }

  return (
    <div
      ref={diagramRef}
      className="overflow-hidden rounded-3xl border border-[#c5d3e8] bg-[#e8eef7] p-5 shadow-card md:p-8"
    >
      <div className="grid grid-cols-1 items-center gap-1 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:gap-2 md:gap-4">
        <ActorCard label={left.label} accent={buyerFirst}>
          {left.scene}
        </ActorCard>
        <div className="flex justify-center">
          <FlowArrow vertical />
          <FlowArrow />
        </div>
        <div className="group/hub flex flex-col items-center">
          <MavioHub />
          <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-navy/60 transition-colors duration-200 group-hover/hub:text-gold-deep">
            Direct path
          </p>
        </div>
        <div className="flex justify-center">
          <FlowArrow vertical />
          <FlowArrow />
        </div>
        <ActorCard label={right.label} accent={!buyerFirst}>
          {right.scene}
        </ActorCard>
      </div>

      <div className="relative mt-8 md:mt-10">
        <svg
          className="pointer-events-none absolute left-[8%] right-[8%] top-5 hidden h-16 w-[84%] text-navy/30 sm:block"
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0 0 V28 H100 V0"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="3 3"
            opacity="0.45"
          />
          <path
            className="flow-arrow-dash"
            d="M0 0 V28 H100 V0"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.9"
            strokeDasharray="4 5"
            strokeLinecap="round"
          />
        </svg>

        <div className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6" style={{ perspective: 800 }}>
          {complexWay.steps.map((step, i) => {
            const Icon = stepIcons[i]
            return <StepCard key={step.title} step={step} Icon={Icon} />
          })}
        </div>

        <div className="mt-5 flex justify-center">
          <span className="rounded-full border border-navy/15 bg-surface px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-navy/70 transition-[transform,border-color,background-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-0.5 hover:border-gold-deep/40 hover:bg-gold-deep/10 md:text-[11px]">
            {complexWay.label}
          </span>
        </div>
      </div>

      <p className="mt-5 text-center text-xs text-navy/55 md:text-sm">
        Mavio replaces the long chain below with one accountable partner above.
      </p>
    </div>
  )
}

export default function Commitment() {
  const { role } = usePartnerRole()
  const activeRole = role === 'supplier' ? 'supplier' : 'buyer'
  const { subheading } = partnerPage.commitment[activeRole]

  return (
    <section className="relative overflow-hidden container-px mx-auto max-w-container py-16 md:py-24">
      <RouteBackground flip />
      <Reveal stagger={0}>
        <SectionLabel>Our Commitment To Every Procurement</SectionLabel>
        <SectionHeading className="mt-3">{heading}</SectionHeading>
        <p className="mt-2 max-w-xl text-sm text-muted md:text-base">{subheading}</p>
        <RoleToggle />
      </Reveal>

      <Reveal as="div" stagger={0} delay={0.08} className="mt-10 md:mt-14">
        <ProcurementDiagram role={activeRole} />
      </Reveal>
    </section>
  )
}

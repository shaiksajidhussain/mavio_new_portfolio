import { useEffect, useRef, useState } from 'react'
import { gsap, prefersReducedMotion } from '../../lib/gsap'
import SectionLabel from '../ui/SectionLabel'
import SectionHeading from '../ui/SectionHeading'

/* ------------------------------------------------------------------ *
 * Export-process steps. Icons are inline (Lucide-style) line paths.  *
 * Text mirrors exportLogisticsPage.process.steps in ../../data/siteContent. *
 * ------------------------------------------------------------------ */
const steps = [
  {
    n: '01',
    title: 'Requirement Confirmation',
    desc: 'Confirm product specifications, quantities, timelines, and destination requirements before booking.',
    icon: (
      <>
        <rect x="8" y="3" width="8" height="4" rx="1" />
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
        <path d="m9 14 2 2 4-4" />
      </>
    ),
  },
  {
    n: '02',
    title: 'Product Preparation',
    desc: 'Prepare, inspect, pack, and label goods according to export requirements.',
    icon: (
      <>
        <path d="M21 8 12 3 3 8l9 5 9-5Z" />
        <path d="M3 8v8l9 5 9-5V8" />
        <path d="M12 13v8" />
      </>
    ),
  },
  {
    n: '03',
    title: 'Export Documentation',
    desc: 'Complete invoices, packing lists, certificates, and customs documents for shipment.',
    icon: (
      <>
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
        <path d="M14 3v5h5" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="13" y2="17" />
      </>
    ),
  },
  {
    n: '04',
    title: 'Customs & Dispatch',
    desc: 'Coordinate customs clearance, carrier handover, and final shipment departure smoothly.',
    icon: (
      <>
        <path d="M3 7h11v8H3z" />
        <path d="M14 10h4l3 3v2h-7z" />
        <circle cx="7" cy="18" r="1.6" />
        <circle cx="17" cy="18" r="1.6" />
      </>
    ),
  },
  {
    n: '05',
    title: 'Freight Booking',
    desc: 'We secure ideal shipping routes and schedule timely vessel loading.',
    icon: (
      <>
        <path d="M3 17.5 4.6 12h14.8L21 17.5" />
        <path d="M2.5 17.5c1.3 1.2 2.4 1.2 3.7 0 1.3 1.2 2.4 1.2 3.7 0 1.3 1.2 2.4 1.2 3.7 0 1.3 1.2 2.4 1.2 3.7 0" />
        <path d="M6.5 12V8h9l2 4" />
        <path d="M11 8V5" />
      </>
    ),
  },
  {
    n: '06',
    title: 'Shipment Tracking',
    desc: 'Track shipment progress and share updates until successful delivery.',
    icon: (
      <>
        <path d="M22 2 11 13" />
        <path d="M22 2 15 22l-4-9-9-4Z" />
      </>
    ),
  },
]

/* ---- tuning constants (safe to tweak) ---------------------------- */
const H = 640
const TOP_PAD = 66
const BASE_X_RATIO = 0.5 // arc sits further right so step copy has room
const BULGE = 58
const TEXT_W = 400 // wider right-side titles + descriptions
const CIRCLE_X_RATIO = 0.26 // hub closer to center of left half

function smoothPath(pts) {
  if (pts.length < 2) return ''
  let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i]
    const p1 = pts[i]
    const p2 = pts[i + 1]
    const p3 = pts[i + 2] || p2
    const c1x = p1.x + (p2.x - p0.x) / 6
    const c1y = p1.y + (p2.y - p0.y) / 6
    const c2x = p2.x - (p3.x - p1.x) / 6
    const c2y = p2.y - (p3.y - p1.y) / 6
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)} ${c2x.toFixed(1)} ${c2y.toFixed(1)} ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`
  }
  return d
}

export default function LogisticsFlow() {
  const sectionRef = useRef(null)
  const arcRef = useRef(null)
  const arcPathRef = useRef(null)
  const orbitRef = useRef(null)
  const coreRef = useRef(null)
  const [geo, setGeo] = useState(null)
  const playedRef = useRef(false)

  useEffect(() => {
    const build = () => {
      const el = arcRef.current
      if (!el) return
      const W = el.offsetWidth
      if (!W) return
      const n = steps.length
      const usable = H - TOP_PAD * 2
      const nodeX = (t) => W * BASE_X_RATIO + BULGE * Math.sin(Math.PI * t)
      const yAt = (t) => TOP_PAD + t * usable

      const nodes = steps.map((s, i) => {
        const t = i / (n - 1)
        return { ...s, x: nodeX(t), y: yAt(t), t }
      })

      const pathPts = [-0.16, ...nodes.map((nd) => nd.t), 1.16].map((t) => ({
        x: nodeX(t),
        y: yAt(t),
      }))

      const r = Math.min(132, W * 0.13)
      setGeo({
        W,
        H,
        nodes,
        arc: smoothPath(pathPts),
        circle: { cx: W * CIRCLE_X_RATIO, cy: H / 2, r },
      })
    }

    build()
    window.addEventListener('resize', build)
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(build) : null
    if (ro && arcRef.current) ro.observe(arcRef.current)
    const t = setTimeout(build, 250)
    return () => {
      window.removeEventListener('resize', build)
      if (ro) ro.disconnect()
      clearTimeout(t)
    }
  }, [])

  useEffect(() => {
    if (!geo || prefersReducedMotion) return

    const ctx = gsap.context(() => {
      const path = arcPathRef.current
      if (path) {
        const len = path.getTotalLength()
        if (!playedRef.current) {
          gsap.set(path, { strokeDasharray: len, strokeDashoffset: len })
          gsap.to(path, {
            strokeDashoffset: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: arcRef.current,
              start: 'top 80%',
              end: 'top 28%',
              scrub: 0.45,
            },
          })
        } else {
          gsap.set(path, { strokeDasharray: len, strokeDashoffset: 0 })
        }
      }

      if (orbitRef.current) {
        gsap.to(orbitRef.current, {
          rotation: 360,
          duration: 28,
          ease: 'none',
          repeat: -1,
          svgOrigin: `${geo.circle.cx} ${geo.circle.cy}`,
        })
      }

      if (playedRef.current) return

      gsap.fromTo(
        '[data-flow-core-label]',
        { opacity: 0, xPercent: -50, yPercent: -50, scale: 0.96 },
        {
          opacity: 1,
          xPercent: -50,
          yPercent: -50,
          scale: 1,
          duration: 0.5,
          ease: 'power3.out',
          scrollTrigger: { trigger: arcRef.current, start: 'top 72%', once: true },
        }
      )

      if (coreRef.current) {
        gsap.fromTo(
          coreRef.current,
          { scale: 0.95, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.55,
            ease: 'power3.out',
            transformOrigin: '50% 50%',
            scrollTrigger: { trigger: arcRef.current, start: 'top 72%', once: true },
          }
        )
      }

      gsap.fromTo(
        '[data-flow-label]',
        { opacity: 0, xPercent: -100, yPercent: -50, x: -12 },
        {
          opacity: 1,
          xPercent: -100,
          yPercent: -50,
          x: 0,
          duration: 0.45,
          stagger: 0.06,
          ease: 'power3.out',
          scrollTrigger: { trigger: arcRef.current, start: 'top 70%', once: true },
        }
      )
      gsap.fromTo(
        '[data-flow-icon]',
        { opacity: 0, xPercent: -50, yPercent: -50, scale: 0.95 },
        {
          opacity: 1,
          xPercent: -50,
          yPercent: -50,
          scale: 1,
          duration: 0.45,
          stagger: 0.06,
          ease: 'power3.out',
          scrollTrigger: { trigger: arcRef.current, start: 'top 70%', once: true },
        }
      )
      gsap.fromTo(
        '[data-flow-copy]',
        { opacity: 0, yPercent: -50, y: 10 },
        {
          opacity: 1,
          yPercent: -50,
          y: 0,
          duration: 0.45,
          stagger: 0.06,
          ease: 'power3.out',
          scrollTrigger: { trigger: arcRef.current, start: 'top 70%', once: true },
        }
      )
      gsap.fromTo(
        '[data-flow-dot]',
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.35,
          stagger: 0.05,
          ease: 'power3.out',
          transformOrigin: '50% 50%',
          scrollTrigger: { trigger: arcRef.current, start: 'top 70%', once: true },
        }
      )

      playedRef.current = true
    }, sectionRef)

    return () => ctx.revert()
  }, [geo])

  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-flow-head]',
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 82%', once: true },
        }
      )
      gsap.fromTo(
        '[data-flow-mobile]',
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', once: true },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-bg py-16 themeblack:bg-black md:py-24">
      <div className="container-px mx-auto max-w-[1600px]">
        <div data-flow-head>
          <SectionLabel>Our Export Process</SectionLabel>
        </div>
        <div data-flow-head>
          <SectionHeading className="mt-3">Our Export Process</SectionHeading>
        </div>
        <p data-flow-head className="mt-3 max-w-[52ch] text-sm leading-relaxed text-muted md:text-base">
          Every stage between booking and final delivery, coordinated end to end.
        </p>

        {/* ================= DESKTOP: arc layout ================= */}
        <div ref={arcRef} className="relative mx-auto mt-12 hidden md:block" style={{ height: H }}>
          {geo && (
            <>
              <svg
                className="pointer-events-none absolute inset-0 text-line"
                width={geo.W}
                height={geo.H}
                viewBox={`0 0 ${geo.W} ${geo.H}`}
              >
                <path
                  ref={arcPathRef}
                  d={geo.arc}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />

                <g className="text-line">
                  <circle
                    cx={geo.circle.cx}
                    cy={geo.circle.cy}
                    r={geo.circle.r + 30}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.7"
                  />
                  <circle
                    cx={geo.circle.cx}
                    cy={geo.circle.cy}
                    r={geo.circle.r + 16}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                  <g ref={orbitRef}>
                    {[35, 120, 210, 300].map((deg, i) => {
                      const rad = (deg * Math.PI) / 180
                      const rr = geo.circle.r + (i % 2 ? 30 : 16)
                      return (
                        <circle
                          key={deg}
                          cx={geo.circle.cx + rr * Math.cos(rad)}
                          cy={geo.circle.cy + rr * Math.sin(rad)}
                          r={i % 2 ? 3 : 4.5}
                          className={i % 2 ? 'fill-gold-deep' : 'fill-navy dark:fill-gold'}
                        />
                      )
                    })}
                  </g>
                  <circle
                    ref={coreRef}
                    cx={geo.circle.cx}
                    cy={geo.circle.cy}
                    r={geo.circle.r}
                    className="fill-navy-deep dark:fill-navy"
                  />
                </g>

                {geo.nodes.map((nd) => (
                  <circle data-flow-dot key={nd.n} cx={nd.x} cy={nd.y} r="4" className="fill-gold-deep" />
                ))}
              </svg>

              <div
                data-flow-core-label
                className="absolute flex flex-col items-center justify-center text-center"
                style={{
                  left: geo.circle.cx,
                  top: geo.circle.cy,
                  width: geo.circle.r * 2,
                  transform: 'translate(-50%,-50%)',
                }}
              >
                <span className="text-[13px] font-medium uppercase tracking-[3px] text-gold">Export</span>
                <span className="text-[26px] font-bold leading-tight text-white">Process</span>
              </div>

              {geo.nodes.map((nd) => (
                <div key={nd.n}>
                  <div
                    data-flow-label
                    className="absolute text-right"
                    style={{
                      left: nd.x - 42,
                      top: nd.y,
                      width: 140,
                      transform: 'translate(-100%,-50%)',
                    }}
                  >
                    <span className="text-[12px] font-semibold uppercase tracking-[1.5px] text-muted">Step</span>
                    <span className="ml-1 text-[15px] font-bold text-gold-deep">{nd.n}</span>
                  </div>

                  <div
                    data-flow-icon
                    className="absolute flex h-11 w-11 items-center justify-center rounded-full bg-gold-gradient shadow-[0_8px_18px_-8px_rgba(198,154,68,0.9)]"
                    style={{ left: nd.x, top: nd.y, transform: 'translate(-50%,-50%)' }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 text-navy-deep"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {nd.icon}
                    </svg>
                  </div>

                  <div
                    data-flow-copy
                    className="absolute"
                    style={{
                      left: nd.x + 44,
                      top: nd.y,
                      width: TEXT_W,
                      transform: 'translateY(-50%)',
                    }}
                  >
                    <h3 className="text-[17px] font-bold tracking-tight text-ink md:text-[18px]">{nd.title}</h3>
                    <p className="mt-1.5 max-w-[38ch] text-[13px] leading-relaxed text-muted md:text-[14px]">{nd.desc}</p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* ================= MOBILE: stacked list ================= */}
        <div className="mt-10 space-y-7 md:hidden">
          {steps.map((s) => (
            <div key={s.n} data-flow-mobile className="flex gap-4">
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gold-gradient">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-navy-deep"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {s.icon}
                </svg>
              </div>
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-muted">Step</span>
                  <span className="text-[14px] font-bold text-gold-deep">{s.n}</span>
                </div>
                <h3 className="text-[16px] font-bold tracking-tight text-ink">{s.title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-muted">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

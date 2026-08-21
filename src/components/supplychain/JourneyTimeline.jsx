import { useEffect, useRef, useState } from 'react'

/* ------------------------------------------------------------------ */
/* Step data — kept local because the icons are JSX (siteContent.js    */
/* is plain JS). Text mirrors supplyChainSteps in ../../data/siteContent. */
/* accent: 'gold' -> gold gradient tab | 'dark' -> navy tab            */
/* ------------------------------------------------------------------ */
const steps = [
  {
    n: 1,
    tab: 'Origin',
    accent: 'gold',
    title: 'Sourcing',
    kicker: 'Selected from reliable origins.',
    desc: 'We carefully select products from reliable origins, keeping quality and specifications in mind from the start.',
    icon: (
      <>
        <path d="M12 21s-6-5.686-6-10a6 6 0 1 1 12 0c0 4.314-6 10-6 10z" />
        <circle cx="12" cy="11" r="2" />
      </>
    ),
  },
  {
    n: 2,
    tab: 'Grading',
    accent: 'dark',
    title: 'Sorting & Grading',
    kicker: 'Sorted for consistent quality.',
    desc: 'Each lot is carefully sorted and graded by size, quality, and specifications to maintain consistency.',
    icon: (
      <>
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="18" x2="20" y2="18" />
        <circle cx="9" cy="6" r="2" />
        <circle cx="15" cy="12" r="2" />
        <circle cx="8" cy="18" r="2" />
      </>
    ),
  },
  {
    n: 3,
    tab: 'Lab QC',
    accent: 'gold',
    title: 'Lab Testing',
    kicker: 'Checked before dispatch.',
    desc: 'Products undergo the necessary quality and safety checks to ensure they meet the required standards before dispatch.',
    icon: (
      <>
        <path d="M9 3h6" />
        <path d="M10 3v6l-5.5 9.3A1.5 1.5 0 0 0 5.8 21h12.4a1.5 1.5 0 0 0 1.3-2.3L14 9V3" />
        <line x1="8" y1="15" x2="16" y2="15" />
      </>
    ),
  },
  {
    n: 4,
    tab: 'Packing',
    accent: 'dark',
    title: 'Packing',
    kicker: 'Packed to specification.',
    desc: 'Each product is packed to its required specifications, keeping it secure and well-preserved in transit.',
    icon: (
      <>
        <path d="M21 8 12 3 3 8l9 5 9-5Z" />
        <path d="M3 8v8l9 5 9-5V8" />
        <path d="M12 13v8" />
      </>
    ),
  },
  {
    n: 5,
    tab: 'Docs',
    accent: 'gold',
    title: 'Documentation',
    kicker: 'Aligned to each shipment.',
    desc: 'Trade and shipping documents are prepared, reviewed, and aligned with the requirements of each shipment.',
    icon: (
      <>
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
        <path d="M14 3v5h5" />
        <path d="m9 14 2 2 4-4" />
      </>
    ),
  },
  {
    n: 6,
    tab: 'Freight',
    accent: 'dark',
    title: 'Shipping',
    kicker: 'Tracked to destination port.',
    desc: 'Every shipment is monitored throughout its journey, with key updates tracked from dispatch to the destination port.',
    icon: (
      <>
        <path d="M3 17.5 4.6 12h14.8L21 17.5" />
        <path d="M2.5 17.5c1.3 1.2 2.4 1.2 3.7 0 1.3 1.2 2.4 1.2 3.7 0 1.3 1.2 2.4 1.2 3.7 0 1.3 1.2 2.4 1.2 3.7 0" />
        <path d="M6.5 12V8h9l2 4" />
        <path d="M11 8V5" />
      </>
    ),
  },
]

const GOLD_GRADIENT = 'linear-gradient(180deg,#f6e4a8,#d9b45a 55%,#a9822f)'

export default function JourneyTimeline() {
  const journeyRef = useRef(null)
  const cardRefs = useRef([])
  const [paths, setPaths] = useState([])
  const [dims, setDims] = useState({ w: 0, h: 0 })

  useEffect(() => {
    const R = 16
    const INSET = 40

    const draw = () => {
      const journey = journeyRef.current
      if (!journey) return
      const W = journey.offsetWidth
      const H = journey.offsetHeight
      const cards = cardRefs.current.filter(Boolean)
      const next = []

      for (let i = 0; i < cards.length - 1; i++) {
        const a = cards[i]
        const b = cards[i + 1]
        const aLeft = a.dataset.side === 'left'
        const bLeft = b.dataset.side === 'left'

        // exit from the inner-bottom corner of a, enter the inner-top corner of b
        const ex = aLeft ? a.offsetLeft + a.offsetWidth - INSET : a.offsetLeft + INSET
        const ey = a.offsetTop + a.offsetHeight
        const enx = bLeft ? b.offsetLeft + b.offsetWidth - INSET : b.offsetLeft + INSET
        const eny = b.offsetTop

        const midY = (ey + eny) / 2
        const dir = enx > ex ? 1 : -1

        next.push(
          `M ${ex} ${ey}` +
            ` L ${ex} ${midY - R}` +
            ` Q ${ex} ${midY} ${ex + dir * R} ${midY}` +
            ` L ${enx - dir * R} ${midY}` +
            ` Q ${enx} ${midY} ${enx} ${midY + R}` +
            ` L ${enx} ${eny}`
        )
      }

      setDims({ w: W, h: H })
      setPaths(next)
    }

    draw()
    window.addEventListener('resize', draw)
    const ro =
      typeof ResizeObserver !== 'undefined' ? new ResizeObserver(draw) : null
    if (ro && journeyRef.current) ro.observe(journeyRef.current)
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(draw)
    const t = setTimeout(draw, 300)

    return () => {
      window.removeEventListener('resize', draw)
      if (ro) ro.disconnect()
      clearTimeout(t)
    }
  }, [])

  return (
    <section className="container-px mx-auto max-w-container bg-white py-16 md:py-24">
      {/* ---------- header ---------- */}
      <span
        className="inline-block rounded-full px-5 py-2 text-[13px] font-semibold tracking-wide text-[#231803] shadow-[0_8px_22px_-10px_rgba(217,180,90,0.75)]"
        style={{ background: GOLD_GRADIENT }}
      >
        Supply Chain
      </span>

      <h2 className="mt-6 max-w-[16ch] text-[clamp(30px,4.6vw,50px)] font-bold leading-[1.06] tracking-tight text-[#0a1020]">
        End-to-End Supply Chain{' '}
        <span className="text-gold-gradient underline decoration-gold-deep decoration-[3px] underline-offset-[6px]">
          Journey
        </span>
      </h2>

      <div className="mt-6 max-w-[52ch]">
        <p className="text-[14.5px] leading-relaxed text-[#5b6472]">
          From primary origin to the final destination port, we manage every stage
          of the commodity journey — securing quality, compliance, and reliable
          delivery across borders.
        </p>
      </div>

      {/* ---------- journey / zigzag ---------- */}
      <div ref={journeyRef} className="relative mt-14">
        {/* connector overlay (hidden on mobile; a dashed spine is shown instead) */}
        <svg
          className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full md:block"
          width={dims.w}
          height={dims.h}
          viewBox={`0 0 ${dims.w} ${dims.h}`}
          preserveAspectRatio="none"
        >
          {paths.map((d, i) => (
            <path
              key={i}
              d={d}
              fill="none"
              stroke="rgba(217,180,90,0.6)"
              strokeWidth="2"
              strokeDasharray="5 6"
              strokeLinecap="round"
            />
          ))}
        </svg>

        {/* mobile dashed spine */}
        <div className="pointer-events-none absolute bottom-2.5 left-[29px] top-2.5 border-l-2 border-dashed border-[#d9b45a]/50 md:hidden" />

        {steps.map((s, i) => {
          const side = i % 2 === 0 ? 'left' : 'right'
          const gold = s.accent === 'gold'
          return (
            <div
              key={s.n}
              ref={(el) => (cardRefs.current[i] = el)}
              data-side={side}
              className={[
                'relative z-[1] mb-[34px] flex w-full overflow-hidden rounded-[22px] border shadow-[0_22px_46px_-30px_rgba(15,25,20,0.35)] last:mb-0 md:w-[46%]',
                side === 'left' ? 'md:mr-auto' : 'md:ml-auto',
                gold
                  ? 'border-[#efe6cf] bg-[#fdfbf4]'
                  : 'border-[#e7e9ee] bg-[#f7f8fa]',
              ].join(' ')}
            >
              {/* vertical tab */}
              <div
                className={[
                  'm-1.5 flex flex-[0_0_46px] items-center justify-center rounded-[18px]',
                  gold ? '' : 'border border-[#0a1020]/25 bg-[#0a1020]',
                ].join(' ')}
                style={gold ? { background: GOLD_GRADIENT } : undefined}
              >
                <span
                  className={[
                    'text-[11px] font-semibold uppercase tracking-[1.5px]',
                    gold ? 'text-[#231803]' : 'text-[#e8cd85]',
                  ].join(' ')}
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  {s.tab}
                </span>
              </div>

              {/* body */}
              <div className="flex-1 px-6 pb-6 pt-5">
                <div className="flex items-center gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[22px] w-[22px] flex-[0_0_22px] text-[#b8892f]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {s.icon}
                  </svg>
                  <span className="text-[18px] font-bold text-[#c9a24a]">{s.n}</span>
                  <span className="text-[18px] font-semibold tracking-tight text-[#0a1020]">
                    {s.title}
                  </span>
                </div>
                <p className="mb-1.5 mt-3 text-[13px] font-medium text-[#b8892f]">
                  {s.kicker}
                </p>
                <p className="text-[13.5px] leading-relaxed text-[#3d4658]">
                  {s.desc}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* footer sparkle */}
      <div className="mt-10 flex justify-center">
        <div className="flex h-11 w-[150px] items-center justify-center rounded-2xl border border-[#efe6cf] bg-[#fdfbf4] shadow-[0_14px_30px_-22px_rgba(15,25,20,0.5)]">
          <svg viewBox="0 0 24 24" className="h-5 w-5">
            <defs>
              <linearGradient id="scj-spark" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#f6e4a8" />
                <stop offset="1" stopColor="#a9822f" />
              </linearGradient>
            </defs>
            <path
              fill="url(#scj-spark)"
              d="M12 2c.5 3.8 2.2 5.5 6 6-3.8.5-5.5 2.2-6 6-.5-3.8-2.2-5.5-6-6 3.8-.5 5.5-2.2 6-6Z"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

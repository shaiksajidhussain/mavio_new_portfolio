import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqPage } from '../../data/siteContent'
import { useFaqRole } from '../../context/FaqRoleContext'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

const roleLabels = {
  buyer: "Buyer's Perspective",
  supplier: "Supplier's Perspective",
}

export default function FaqList() {
  const { role } = useFaqRole()
  const items = faqPage[role]
  const [openIndex, setOpenIndex] = useState(0)
  const listRef = useRef(null)

  useEffect(() => {
    setOpenIndex(0)
    if (prefersReducedMotion || !listRef.current) return
    gsap.fromTo(listRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' })
  }, [role])

  return (
    <section className="relative overflow-hidden bg-bg-muted py-16 themeblack:bg-black md:py-24">
      <RouteBackground flip />
      <div className="container-px relative mx-auto max-w-container">
        <Reveal stagger={0}>
          <SectionLabel>{roleLabels[role]}</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy dark:text-white md:text-4xl">
            Frequently asked questions
          </h2>
        </Reveal>

        <div ref={listRef} className="relative mt-10 space-y-3">
          {items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.q} className="overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-ink md:text-base"
                >
                  {item.q}
                  <ChevronDown
                    size={16}
                    className={`shrink-0 text-gold-deep transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div className="grid transition-all duration-300 ease-out" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm leading-relaxed text-muted">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

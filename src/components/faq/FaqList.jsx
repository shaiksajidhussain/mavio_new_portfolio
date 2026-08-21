import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqPage } from '../../data/siteContent'
import { useFaqRole } from '../../context/FaqRoleContext'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'
import { gsap, prefersReducedMotion } from '../../lib/gsap'
import SectionHeading from '../ui/SectionHeading'

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
          <SectionHeading className="mt-3">
            Frequently asked questions
          </SectionHeading>
        </Reveal>

        <div ref={listRef} className="relative mt-10 space-y-3">
          {items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.q} className="overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold transition-colors md:text-base ${
                    isOpen ? 'text-navy dark:text-gold' : 'text-ink hover:text-navy dark:hover:text-gold'
                  }`}
                >
                  <span>
                    <span className="mr-2 font-bold text-gold-deep">Q.</span>
                    {item.q}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`shrink-0 text-gold-deep transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div className="grid transition-all duration-300 ease-out" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                  <div className="overflow-hidden">
                    <div className="border-t border-line/70 bg-bg-muted/60 px-5 py-4 dark:bg-white/[0.03]">
                      <p className="text-sm leading-relaxed text-muted md:text-[15px]">
                        <span className="mr-2 font-semibold text-navy/55 dark:text-white/45">A.</span>
                        {item.a}
                      </p>
                    </div>
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

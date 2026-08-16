import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import SectionHeading from '../ui/SectionHeading'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div>
      <SectionLabel>FAQ</SectionLabel>
      <SectionHeading size="medium" className="mt-3">
        Common questions
      </SectionHeading>

      <div className="mt-6 space-y-3">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div key={item.q} className="overflow-hidden rounded-2xl border border-line bg-surface">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-ink"
              >
                {item.q}
                <ChevronDown
                  size={16}
                  className={`shrink-0 text-gold-deep transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className="grid transition-all duration-300 ease-out"
                style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-4 text-sm leading-relaxed text-muted">{item.a}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

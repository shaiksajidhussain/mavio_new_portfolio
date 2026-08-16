import { useState } from 'react'
import { FileCheck2, Globe, Leaf, ShieldCheck } from 'lucide-react'
import { supplyChainVisibilityPage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'
import SectionHeading from '../ui/SectionHeading'

const icons = { FileCheck2, Globe, Leaf, ShieldCheck }
const { heading, subheading, documents } = supplyChainVisibilityPage.documentation

export default function DocumentationCompliance() {
  const [flipped, setFlipped] = useState(() => new Set())

  const toggle = (i) => {
    setFlipped((prev) => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  }

  return (
    <section className="relative overflow-hidden bg-bg-muted py-16 themeblack:bg-black md:py-24">
      <RouteBackground />
      <div className="container-px mx-auto max-w-container">
        <Reveal stagger={0}>
          <SectionLabel>Documentation & Compliance</SectionLabel>
          <SectionHeading className="mt-3">{heading}</SectionHeading>
          <p className="mt-2 max-w-xl text-sm text-muted md:text-base">{subheading}</p>
        </Reveal>

        <Reveal as="div" stagger={0.1} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {documents.map((doc, i) => {
            const Icon = icons[doc.icon]
            const isFlipped = flipped.has(i)
            return (
              <button
                key={doc.title}
                type="button"
                onClick={() => toggle(i)}
                aria-label={`Flip to see details for ${doc.title}`}
                className="group h-56 w-full text-left [perspective:1000px]"
              >
                <div
                  className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
                  style={isFlipped ? { transform: 'rotateY(180deg)' } : undefined}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-line bg-surface p-6 text-center shadow-card [backface-visibility:hidden]">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-deep/15 text-gold-deep">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-4 font-display text-base font-bold text-ink">{doc.title}</h3>
                    <p className="mt-2 text-xs text-muted">Tap or hover to flip</p>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-navy-deep p-6 text-center shadow-card [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <p className="text-sm leading-relaxed text-white/85">{doc.back}</p>
                  </div>
                </div>
              </button>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}

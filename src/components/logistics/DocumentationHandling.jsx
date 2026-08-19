import { useRef } from 'react'
import { BadgeCheck, FileCheck2, FlaskConical, Globe, Leaf, ShieldCheck } from 'lucide-react'
import { exportLogisticsPage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import RouteBackground from '../ui/RouteBackground'
import SectionHeading from '../ui/SectionHeading'
import { pressCard, tiltCard, untiltCard } from '../../lib/cardTilt'

const icons = { FileCheck2, Globe, ShieldCheck, Leaf, BadgeCheck, FlaskConical }
const { heading, subheading, documents } = exportLogisticsPage.documentation

export default function DocumentationHandling() {
  const cardsRef = useRef([])

  return (
    <section className="relative overflow-hidden bg-bg-muted py-16 themeblack:bg-black md:py-24">
      <RouteBackground />
      <div className="container-px relative mx-auto max-w-container">
        <Reveal stagger={0}>
          <SectionLabel>Documentation & Compliance</SectionLabel>
          <SectionHeading className="mt-3">{heading}</SectionHeading>
          <p className="mt-2 max-w-2xl text-sm text-muted md:text-base">{subheading}</p>
        </Reveal>

        <Reveal as="div" stagger={0.05} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {documents.map((doc, i) => {
            const Icon = icons[doc.icon]
            return (
              <div key={doc.title} style={{ perspective: 700 }}>
                <div
                  ref={(el) => (cardsRef.current[i] = el)}
                  onPointerMove={(e) => tiltCard(cardsRef.current[i], e)}
                  onPointerLeave={() => untiltCard(cardsRef.current[i])}
                  onPointerDown={() => pressCard(cardsRef.current[i], true)}
                  onPointerUp={() => pressCard(cardsRef.current[i], false)}
                  onPointerCancel={() => pressCard(cardsRef.current[i], false)}
                  className="rounded-2xl border border-line bg-surface p-6 shadow-card will-change-transform"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-deep/15 text-gold-deep">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">{doc.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{doc.description}</p>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}

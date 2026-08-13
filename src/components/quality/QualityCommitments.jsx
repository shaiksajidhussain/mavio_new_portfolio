import { useRef } from 'react'
import { qualityCompliancePage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'

const { heading, body } = qualityCompliancePage.qualityCommitments

export default function QualityCommitments() {
  const gridRef = useRef(null)

  return (
    <section className="bg-bg-muted py-16 themeblack:bg-black md:py-24">
      <div className="container-px mx-auto max-w-container" ref={gridRef}>
        <Reveal stagger={0}>
          <SectionLabel>Our Quality Commitments</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy dark:text-white md:text-4xl">
            {heading}
          </h2>
        </Reveal>

        <Reveal stagger={0} delay={0.08}>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted md:text-base">{body}</p>
        </Reveal>
      </div>
    </section>
  )
}

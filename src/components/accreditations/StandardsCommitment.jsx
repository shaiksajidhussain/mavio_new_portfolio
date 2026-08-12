import { useEffect, useRef } from 'react'
import { accreditationsPage } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

const { heading, body } = accreditationsPage.commitment
const words = heading.split(' ')

export default function StandardsCommitment() {
  const sectionRef = useRef(null)
  const wordsRef = useRef([])

  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordsRef.current,
        { opacity: 0, y: '60%', filter: 'blur(10px)' },
        {
          opacity: 1,
          y: '0%',
          filter: 'blur(0px)',
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
          delay: 0.1,
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="container-px mx-auto max-w-container pb-16 pt-16 md:pb-24 md:pt-24">
      <Reveal stagger={0}>
        <SectionLabel>Accreditations & Certifications</SectionLabel>
      </Reveal>

      <h1 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-navy dark:text-white md:text-4xl">
        {words.map((w, i) => (
          <span key={i} className="mr-[0.28em] inline-block overflow-hidden pb-1 align-top">
            <span ref={(el) => (wordsRef.current[i] = el)} className="inline-block">
              {w}
            </span>
          </span>
        ))}
      </h1>

      <Reveal stagger={0} delay={0.7}>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{body}</p>
      </Reveal>
    </section>
  )
}

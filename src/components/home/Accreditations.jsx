import { useLayoutEffect, useRef } from 'react'
import { ShieldCheck } from 'lucide-react'
import { accreditations } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import RouteBackground from '../ui/RouteBackground'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

const COPIES = 3

export default function Accreditations() {
  const trackRef = useRef(null)
  const setRef = useRef(null)

  useLayoutEffect(() => {
    const track = trackRef.current
    const firstSet = setRef.current
    if (!track || !firstSet || prefersReducedMotion) return

    const play = () => {
      const width = firstSet.offsetWidth
      if (!width) return null
      gsap.set(track, { x: 0 })
      return gsap.to(track, {
        x: -width,
        duration: width / 55,
        ease: 'none',
        repeat: -1,
      })
    }

    let tween = play()
    const onResize = () => {
      tween?.kill()
      tween = play()
    }
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      tween?.kill()
    }
  }, [])

  return (
    <section className="relative border-y border-line bg-bg-muted py-10">
      <RouteBackground />
      <div className="container-px mx-auto mb-5 max-w-container">
        <SectionLabel>Accreditations</SectionLabel>
      </div>
      <div className="overflow-hidden">
        <div ref={trackRef} className="flex w-max will-change-transform">
          {Array.from({ length: COPIES }, (_, copy) => (
            <div
              key={copy}
              ref={copy === 0 ? setRef : undefined}
              className="flex shrink-0"
              aria-hidden={copy > 0}
            >
              {accreditations.map((a) => (
                <span
                  key={`${copy}-${a}`}
                  className="mr-4 flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium text-ink shadow-card"
                >
                  <ShieldCheck size={15} className="text-gold-deep" />
                  {a}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { aboutPage } from '../../data/siteContent'
import { gsap, ScrollTrigger, prefersReducedMotion } from '../../lib/gsap'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import SmartImage from '../ui/SmartImage'

const beliefWords = aboutPage.belief.body.split(' ')

export default function AboutJourney() {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      const hero = root.querySelector('[data-hero]')
      const heroImg = root.querySelector('[data-hero-img]')
      const heroCopy = root.querySelector('[data-hero-copy]')
      const belief = root.querySelector('[data-belief]')
      const beliefImg = root.querySelector('[data-belief-img]')
      const beliefWordsEls = root.querySelectorAll('[data-belief-word]')
      const beliefLabel = root.querySelector('[data-belief-label]')

      if (!prefersReducedMotion) {
        gsap.fromTo(heroImg, { scale: 1.12 }, { scale: 1, duration: 1.6, ease: 'power2.out' })
        gsap.from(heroCopy?.children || [], { y: 48, opacity: 0, duration: 1, stagger: 0.12, delay: 0.25, ease: 'power3.out' })
        gsap.to(heroImg, {
          yPercent: 18,
          ease: 'none',
          scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
        })

        gsap.utils.toArray('[data-story-img]').forEach((img) => {
          gsap.fromTo(
            img,
            { scale: 1.18 },
            {
              scale: 1,
              duration: 1.35,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: img,
                start: 'top 85%',
                once: true,
              },
            }
          )
        })
      }

      const mm = gsap.matchMedia()

      mm.add('(min-width: 768px)', () => {
        if (prefersReducedMotion) return

        const beliefTl = gsap.timeline({
          scrollTrigger: {
            trigger: belief,
            start: 'top top',
            end: '+=140%',
            pin: true,
            scrub: 0.7,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
        beliefTl
          .fromTo(beliefImg, { scale: 1.28 }, { scale: 1, duration: 1, ease: 'none' }, 0)
          .from(beliefLabel, { y: 20, opacity: 0, duration: 0.25, ease: 'none' }, 0.08)
          .from(beliefWordsEls, { y: 70, opacity: 0, rotateX: 40, stagger: 0.04, duration: 0.45, ease: 'none' }, 0.12)
      })
    }, root)

    const refresh = () => ScrollTrigger.refresh()
    const imgs = root.querySelectorAll('img')
    imgs.forEach((img) => {
      if (!img.complete) img.addEventListener('load', refresh, { once: true })
    })
    const raf = requestAnimationFrame(refresh)

    return () => {
      cancelAnimationFrame(raf)
      ctx.revert()
    }
  }, [])

  const { hero, story, storyImages, visionMission, belief } = aboutPage
  const panels = [visionMission.vision, visionMission.mission]

  return (
    <div ref={rootRef}>
      <section data-hero className="relative -mt-[4.5rem] flex min-h-[100svh] items-end overflow-hidden">
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <img
            data-hero-img
            src={hero.image}
            alt=""
            data-no-dim
            fetchPriority="high"
            decoding="async"
            className="h-[120%] w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-black/45" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep via-transparent to-black/30" />
        <div className="container-px relative mx-auto w-full max-w-container pb-20 pt-[8rem] md:pb-24">
          <div data-hero-copy className="max-w-4xl">
            <p className="gold-text eyebrow">About Us</p>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              A connected journey
              <span className="block">for global buyers</span>
              <span className="gold-text">sourcing from India.</span>
            </h1>
            <div className="mt-8 flex items-center gap-2 text-sm text-white/70">
              <Link to="/" className="font-medium text-gold hover:text-gold-bright">
                Home
              </Link>
              <ArrowRight size={14} />
              <span className="text-white">About Us</span>
            </div>
          </div>
        </div>
      </section>

      <section data-story className="bg-bg py-16 md:py-24">
        <div className="container-px mx-auto max-w-container">
          <Reveal stagger={0.14} y={36} scale={0.98} className="mb-10 max-w-2xl md:mb-14">
            <p className="gold-text eyebrow">Our Story</p>
            <SectionHeading className="mt-3">
              From fragmented trade to one connected journey
            </SectionHeading>
          </Reveal>

          <div className="space-y-10 md:space-y-16">
            {story.map((paragraph, i) => {
              const imageLeft = i % 2 === 0
              return (
                <article
                  key={paragraph.slice(0, 32)}
                  className={`grid items-center gap-6 md:grid-cols-2 md:gap-10 lg:gap-14 ${
                    imageLeft ? '' : 'md:[&>*:first-child]:order-2'
                  }`}
                >
                  <Reveal y={48} scale={0.96} delay={0.05}>
                    <div className="group relative aspect-[16/11] overflow-hidden rounded-[1.5rem] md:rounded-[1.75rem]">
                      <SmartImage
                        data-story-img
                        src={storyImages[i] || storyImages[0]}
                        alt=""
                        data-no-dim
                        className="h-full w-full origin-center object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/75 transition-colors duration-500 group-hover:bg-black/60" />
                    </div>
                  </Reveal>
                  <Reveal
                    stagger={0.16}
                    y={28}
                    scale={1}
                    delay={0.12}
                    className={imageLeft ? 'md:pl-2' : 'md:pr-2'}
                  >
                    <span className="inline-block font-display text-[11px] tracking-[0.22em] text-gold-deep">
                      {String(i + 1).padStart(2, '0')} — {i === 0 ? 'The problem' : 'Our response'}
                    </span>
                    <p className="mt-4 text-base leading-relaxed text-ink md:text-lg">{paragraph}</p>
                  </Reveal>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative bg-bg py-16 md:py-24">
        <div className="container-px mx-auto grid w-full max-w-container gap-5 md:grid-cols-2 md:gap-8 lg:gap-10">
          {panels.map((panel) => (
            <article key={panel.title} className="group relative overflow-hidden rounded-[1.75rem] md:rounded-[2rem]">
              <div className="relative h-[240px] overflow-hidden md:h-[280px]">
                <SmartImage
                  src={panel.image}
                  alt=""
                  data-no-dim
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 transition-colors duration-500 group-hover:bg-black/35" />
              </div>
              <div className="bg-navy-deep p-7 text-white md:p-9">
                <p className="gold-text eyebrow">{panel.title}</p>
                <p className="mt-4 font-display text-xl font-semibold leading-snug md:text-2xl">{panel.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section data-belief className="relative flex min-h-[100svh] items-center overflow-hidden">
        <SmartImage
          data-belief-img
          src={belief.image}
          alt=""
          data-no-dim
          className="absolute inset-0 h-full w-full scale-110 object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container-px relative mx-auto max-w-4xl py-24 text-center">
          <p data-belief-label className="gold-text eyebrow">
            {belief.title}
          </p>
          <p className="mt-8 font-display text-3xl font-semibold leading-[1.2] text-white sm:text-5xl md:text-6xl">
            {beliefWords.map((word, i) => (
              <span key={`${word}-${i}`} data-belief-word className="mr-[0.28em] inline-block">
                {word}
              </span>
            ))}
          </p>
        </div>
      </section>
    </div>
  )
}

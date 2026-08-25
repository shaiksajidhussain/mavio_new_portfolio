import { aboutPage } from '../../data/siteContent'
import Reveal from '../ui/Reveal'

function PhotoCard({ src, className = '' }) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt=""
        data-no-dim
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/10" />
    </div>
  )
}

export default function AboutStory() {
  const { story, storyImages, visionMission, belief } = aboutPage
  const [origin, port, aerial] = storyImages
  const panels = [visionMission.mission, visionMission.vision]

  return (
    <>
      <section className="container-px mx-auto max-w-container py-16 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <Reveal stagger={0.08} className="grid grid-cols-2 gap-3 sm:gap-4">
            <PhotoCard src={origin} className="col-span-2 h-[240px] rounded-[1.75rem] sm:h-[320px] lg:h-[380px]" />
            <PhotoCard src={port} className="h-[160px] rounded-[1.5rem] sm:h-[220px]" />
            <PhotoCard src={aerial} className="h-[160px] rounded-[1.5rem] sm:h-[220px]" />
          </Reveal>

          <Reveal stagger={0} className="lg:pl-2">
            <div className="space-y-6 border-l-2 border-gold-deep pl-6">
              {story.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-muted md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-muted py-16 md:py-24">
        <div className="container-px mx-auto grid max-w-container gap-4 sm:gap-5 md:grid-cols-2 md:gap-6">
          {panels.map((panel) => (
            <Reveal
              key={panel.title}
              stagger={0}
              className="group relative min-h-[360px] overflow-hidden rounded-[1.75rem] md:min-h-[480px] md:rounded-[2rem]"
            >
              <img
                src={panel.image}
                alt=""
                data-no-dim
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/55 to-black/20 transition-colors duration-500 group-hover:from-navy-deep/90" />
              <div className="relative flex h-full min-h-[360px] flex-col justify-end p-7 md:min-h-[480px] md:p-10">
                <p className="gold-text eyebrow">{panel.title}</p>
                <p className="mt-4 font-display text-xl font-semibold leading-snug text-white md:text-2xl">
                  {panel.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        <img
          src={belief.image}
          alt=""
          data-no-dim
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="container-px relative mx-auto flex min-h-[420px] max-w-container items-center py-20 md:min-h-[520px] md:py-28">
          <Reveal stagger={0} className="max-w-3xl">
            <p className="gold-text eyebrow">{belief.title}</p>
            <p className="mt-6 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
              {belief.body}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}

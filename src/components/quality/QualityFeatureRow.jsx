import { Plane, Ship } from 'lucide-react'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function QualityFeatureRow({ index, icon: Icon, heading, body, image, imageAlt, reverse = false }) {
  return (
    <div className="relative">
      {/* floating dotted-route texture: flight path + dock/ship, matching the site's trade motif */}
      <span
        className={`pointer-events-none absolute -top-5 z-10 hidden sm:block ${reverse ? 'left-8' : 'right-8'}`}
        aria-hidden
      >
        <Plane
          size={26}
          strokeWidth={1.5}
          className="animate-float-slow text-gold-deep/60"
          style={{ '--float-rotate': reverse ? '-30deg' : '35deg' }}
        />
      </span>
      <svg
        aria-hidden
        viewBox="0 0 60 60"
        className={`pointer-events-none absolute -bottom-6 z-10 hidden h-14 w-14 animate-float text-gold-deep/25 sm:block ${
          reverse ? 'right-10' : 'left-10'
        }`}
      >
        <circle cx="30" cy="30" r="26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 5" />
      </svg>
      <span
        className={`pointer-events-none absolute bottom-6 z-10 hidden sm:block ${reverse ? 'left-1/2' : 'right-1/2'}`}
        aria-hidden
      >
        <Ship
          size={22}
          strokeWidth={1.5}
          className="animate-float-fast text-gold-deep/50"
          style={{ '--float-rotate': '-4deg' }}
        />
      </span>

      <Reveal
        as="div"
        stagger={0}
        className={`group relative grid overflow-hidden border border-line bg-surface shadow-card md:grid-cols-2 ${
          reverse
            ? 'rounded-tr-3xl rounded-bl-3xl md:rounded-tr-[3rem] md:rounded-bl-[3rem]'
            : 'rounded-tl-3xl rounded-br-3xl md:rounded-tl-[3rem] md:rounded-br-[3rem]'
        }`}
      >
      <div className={`flex flex-col justify-center p-8 md:p-12 ${reverse ? 'md:order-2' : 'md:order-1'}`}>
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-deep/40 text-gold-deep">
          <Icon size={20} />
        </span>
        <p className="mt-4 text-xs font-semibold tracking-wide text-muted">{String(index).padStart(2, '0')}</p>
        <SectionHeading size="medium" weight="bold" className="mt-2">
          {heading}
        </SectionHeading>
        <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">{body}</p>
      </div>

        <div className={`relative min-h-[260px] overflow-hidden md:min-h-[420px] ${reverse ? 'md:order-1' : 'md:order-2'}`}>
          <img
            src={image}
            alt={imageAlt}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            loading="lazy"
          />
        </div>
      </Reveal>
    </div>
  )
}

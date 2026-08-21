import { Link } from 'react-router-dom'
import { MessagesSquare } from 'lucide-react'
import { footer } from '../../data/siteContent'

export default function SecondaryFooter() {
  const { talkToUs } = footer

  return (
    <section className="relative isolate mt-8 text-white md:mt-12" aria-labelledby="footer-cta-heading">
      {/* Soft upward curve into the page above */}
      <svg
        className="pointer-events-none relative z-10 -mb-px block h-14 w-full text-navy-deep md:h-20 lg:h-24"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0 120 V72 C240 8 480 -12 720 18 C960 48 1200 28 1440 72 V120 Z"
        />
      </svg>

      <div className="relative z-10 bg-navy-deep">
        <div className="container-px mx-auto max-w-container px-6 pb-12 pt-2 text-center md:pb-14 md:pt-4">
          <span className="mx-auto flex h-14 w-14 items-center justify-center text-gold-deep">
            <MessagesSquare size={32} strokeWidth={1.5} />
          </span>
          <h2
            id="footer-cta-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            {talkToUs.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
            {talkToUs.body}
          </p>
          <Link
            to={talkToUs.cta.to}
            className="mt-8 inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold hover:text-navy-deep"
          >
            {talkToUs.cta.label}
          </Link>
        </div>
      </div>
    </section>
  )
}

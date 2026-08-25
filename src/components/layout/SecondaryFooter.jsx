import { Link } from 'react-router-dom'
import { footer } from '../../data/siteContent'
import SocialGallery from './SocialGallery'

export default function SecondaryFooter() {
  const { talkToUs } = footer

  return (
    <section className="container-px mx-auto max-w-container py-10 md:py-14" aria-labelledby="footer-cta-heading">
      <div className="relative isolate overflow-hidden rounded-[1.75rem] md:rounded-[2.25rem]">
        <img
          src={talkToUs.image}
          alt=""
          data-no-dim
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative flex min-h-[280px] flex-col items-center justify-center gap-8 px-6 py-16 text-center sm:min-h-[340px] md:min-h-[400px] md:gap-10 md:py-20">
          <h2
            id="footer-cta-heading"
            className="max-w-3xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            {talkToUs.heading}{' '}
            <Link to={talkToUs.cta.to} className="gold-text transition-opacity hover:opacity-90">
              {talkToUs.cta.label}
            </Link>
          </h2>
          <Link
            to={talkToUs.cta.to}
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-navy-deep transition-transform duration-200 hover:scale-[1.04] active:scale-[0.97] md:px-10 md:text-base"
          >
            Contact
          </Link>
        </div>
      </div>

      <SocialGallery />
    </section>
  )
}

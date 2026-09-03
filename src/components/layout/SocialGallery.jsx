import { useRef } from 'react'
import { footer } from '../../data/siteContent'
import { gsap, prefersReducedMotion } from '../../lib/gsap'
import wordmark from '../../assets/logo-mavio-wordmark.svg'
import SmartImage from '../ui/SmartImage'

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-11 w-11 fill-white md:h-12 md:w-12">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.8 15.5v-7l6.2 3.5-6.2 3.5Z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-11 w-11 fill-white md:h-12 md:w-12">
      <path d="M14.5 8.5V6.8c0-.7.5-1 1.2-1H17V3h-2.4C11.9 3 11 5 11 6.6v1.9H9v2.7h2V21h3.2v-9.8h2.3l.5-2.7h-2.5Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-11 w-11 fill-white md:h-12 md:w-12">
      <path d="M12 7.2A4.8 4.8 0 1 0 16.8 12 4.8 4.8 0 0 0 12 7.2Zm0 7.9A3.1 3.1 0 1 1 15.1 12 3.1 3.1 0 0 1 12 15.1Zm6.1-8.2a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1ZM12 3.2c-2.4 0-2.7 0-3.7.1a5.9 5.9 0 0 0-2 .4 3.9 3.9 0 0 0-2.2 2.2 5.9 5.9 0 0 0-.4 2c-.1 1-.1 1.3-.1 3.7s0 2.7.1 3.7a5.9 5.9 0 0 0 .4 2 3.9 3.9 0 0 0 2.2 2.2 5.9 5.9 0 0 0 2 .4c1 .1 1.3.1 3.7.1s2.7 0 3.7-.1a5.9 5.9 0 0 0 2-.4 3.9 3.9 0 0 0 2.2-2.2 5.9 5.9 0 0 0 .4-2c.1-1 .1-1.3.1-3.7s0-2.7-.1-3.7a5.9 5.9 0 0 0-.4-2 3.9 3.9 0 0 0-2.2-2.2 5.9 5.9 0 0 0-2-.4c-1-.1-1.3-.1-3.7-.1Zm0 1.6c2.4 0 2.6 0 3.6.1a4.3 4.3 0 0 1 1.4.3 2.3 2.3 0 0 1 1.3 1.3 4.3 4.3 0 0 1 .3 1.4c.1 1 .1 1.2.1 3.6s0 2.6-.1 3.6a4.3 4.3 0 0 1-.3 1.4 2.3 2.3 0 0 1-1.3 1.3 4.3 4.3 0 0 1-1.4.3c-1 .1-1.2.1-3.6.1s-2.6 0-3.6-.1a4.3 4.3 0 0 1-1.4-.3 2.3 2.3 0 0 1-1.3-1.3 4.3 4.3 0 0 1-.3-1.4c-.1-1-.1-1.2-.1-3.6s0-2.6.1-3.6a4.3 4.3 0 0 1 .3-1.4 2.3 2.3 0 0 1 1.3-1.3 4.3 4.3 0 0 1 1.4-.3c1-.1 1.2-.1 3.6-.1Z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-11 w-11 fill-white md:h-12 md:w-12">
      <path d="M20.4 3H3.6A1.6 1.6 0 0 0 2 4.6v14.8A1.6 1.6 0 0 0 3.6 21h16.8a1.6 1.6 0 0 0 1.6-1.6V4.6A1.6 1.6 0 0 0 20.4 3ZM8.3 18.3H5.7V10h2.6Zm-1.3-9.5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5ZM18.3 18.3h-2.6v-4c0-1 0-2.2-1.4-2.2s-1.6 1-1.6 2.1v4.1h-2.6V10h2.5v1.1h.1a2.7 2.7 0 0 1 2.5-1.4c2.6 0 3.1 1.7 3.1 4Z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-10 w-10 fill-white md:h-11 md:w-11">
      <path d="M18.2 3h3.2l-7 8 8.2 10h-6.4l-5-6.6L5.6 21H2.3l7.5-8.6L1.8 3h6.6l4.5 6Zm-1.1 16.2h1.8L7 4.7H5.1Z" />
    </svg>
  )
}

const ICONS = {
  YouTube: YouTubeIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
  X: XIcon,
}

function SocialCard({ item }) {
  const imgRef = useRef(null)
  const overlayRef = useRef(null)
  const iconRef = useRef(null)
  const logoRef = useRef(null)
  const Icon = ICONS[item.label] || InstagramIcon

  const enter = () => {
    if (prefersReducedMotion) return
    gsap.set(imgRef.current, { transformOrigin: 'center center' })
    gsap.to(imgRef.current, {
      scale: 1.08,
      duration: 0.75,
      ease: 'power3.out',
    })
    gsap.to(overlayRef.current, { opacity: 0.22, duration: 0.4, ease: 'power2.out' })
    gsap.to(iconRef.current, { scale: 1.12, y: -6, duration: 0.45, ease: 'back.out(1.7)' })
    if (logoRef.current) gsap.to(logoRef.current, { y: -4, opacity: 1, duration: 0.4, ease: 'power2.out' })
  }

  const leave = () => {
    gsap.to(imgRef.current, {
      scale: 1,
      duration: 0.6,
      ease: 'power3.out',
    })
    gsap.to(overlayRef.current, { opacity: 0.52, duration: 0.4, ease: 'power2.out' })
    gsap.to(iconRef.current, { scale: 1, y: 0, duration: 0.4, ease: 'power2.out' })
    if (logoRef.current) gsap.to(logoRef.current, { y: 0, opacity: 0.95, duration: 0.35, ease: 'power2.out' })
  }

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Mavio Global on ${item.label}`}
      onMouseEnter={enter}
      onMouseLeave={leave}
      onFocus={enter}
      onBlur={leave}
      className="group relative isolate aspect-square min-w-[68%] overflow-hidden rounded-[1.35rem] outline-none ring-0 transition-[box-shadow,transform] duration-300 snap-center focus-visible:ring-2 focus-visible:ring-white/70 sm:min-w-[42%] md:min-w-0 md:rounded-[1.6rem] hover:shadow-[0_18px_40px_rgba(0,0,0,0.28)] hover:-translate-y-1"
    >
      <SmartImage
        ref={imgRef}
        src={item.image}
        alt=""
        data-no-dim
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: 'grayscale(0.45) sepia(0.18) brightness(0.72)' }}
      />
      <div ref={overlayRef} className="absolute inset-0 bg-black" style={{ opacity: 0.52 }} />

      <span ref={iconRef} className="absolute inset-0 z-10 flex items-center justify-center drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]">
        <Icon />
      </span>

      {item.showLogo ? (
        <span
          ref={logoRef}
          className="absolute inset-x-4 bottom-4 z-10 mx-auto block h-4 w-[78%] max-w-[11rem] bg-gold-gradient sm:bottom-5"
          style={{
            WebkitMaskImage: `url(${wordmark})`,
            maskImage: `url(${wordmark})`,
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskSize: 'contain',
            maskSize: 'contain',
            WebkitMaskPosition: 'center',
            maskPosition: 'center',
          }}
          aria-hidden="true"
        />
      ) : null}
    </a>
  )
}

export default function SocialGallery() {
  const { socialGallery } = footer

  return (
    <div className="pt-6 md:pt-8" aria-label="Follow Mavio Global">
      <div className="flex gap-3 overflow-x-auto pb-1 snap-x snap-mandatory scrollbar-hide sm:gap-4 md:grid md:grid-cols-5 md:overflow-visible md:pb-0 lg:gap-5">
        {socialGallery.map((item) => (
          <SocialCard key={item.label} item={item} />
        ))}
      </div>
    </div>
  )
}

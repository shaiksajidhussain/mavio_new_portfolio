import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ChevronDown, Instagram, Linkedin, Menu, X } from 'lucide-react'
import { nav, secondaryHeader } from '../../data/siteContent'
import Button from '../ui/Button'
import ThemeToggle from '../ui/ThemeToggle'
import FontSwitcher from '../ui/FontSwitcher'
import { ScrollTrigger } from '../../lib/gsap'
import logoMavio from '../../assets/logo-mavio.svg'
const socialIcons = { LinkedIn: Linkedin, Instagram: Instagram }

const SHADE_BLUE =
  'linear-gradient(90deg, #0e2d4f 0%, #0b2442 48%, #071b32 78%, #021023 100%)'

export default function PrimaryHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const closeTimer = useRef(null)

  useEffect(() => {
    const st = ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        setProgress(self.progress)
        setScrolled(self.scroll() > 60)
      },
    })
    return () => st.kill()
  }, [])

  const openMenu = (label) => {
    clearTimeout(closeTimer.current)
    setOpenDropdown(label)
  }
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120)
  }

  return (
    <header
      className={`transition-shadow duration-300 ${
        scrolled || mobileOpen ? 'shadow-lg shadow-black/25' : ''
      }`}
    >
      <div className="flex flex-col" style={{ background: SHADE_BLUE }}>
        {/* Top row — full-width utility (Logistiq-style bar) */}
        <div className="hidden h-11 items-center justify-between gap-4 border-b border-white/10 px-4 sm:flex md:px-6">
          <div className="flex min-w-0 items-center gap-4">
            <p className="whitespace-nowrap text-[11px] font-medium tracking-wide text-white/70">
              {secondaryHeader.countriesText}
            </p>
            <p className="hidden truncate text-[11px] font-semibold italic tracking-wide text-gold md:block">
              {secondaryHeader.usp}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {secondaryHeader.socials.map((s) => {
              const Icon = socialIcons[s.label]
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-7 items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-2.5 text-white/75 transition-colors hover:border-gold/50 hover:text-gold"
                >
                  <Icon size={12} />
                  <span className="hidden text-[10px] font-medium xl:inline">{s.label}</span>
                </a>
              )
            })}
          </div>
        </div>

        {/* Bottom row — navy plate, opposite slant, drop-shadow follows the cut */}
        <div className="relative flex h-[4.5rem] items-stretch sm:h-20">
          <Link
            to="/"
            aria-label="Mavio Global home"
            className="relative z-20 flex shrink-0 items-center bg-navy-deep pl-5 pr-12 sm:pl-7 sm:pr-16 md:min-w-[17rem] md:pl-9 md:pr-[4.5rem] lg:min-w-[19rem]"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 3.25rem) 0, 100% 100%, 0 100%)',
              filter:
                'drop-shadow(10px 0 0 rgba(224, 176, 90, 0.55)) drop-shadow(18px 6px 18px rgba(0, 0, 0, 0.55))',
            }}
          >
            <img
              src={logoMavio}
              alt="Mavio Global"
              className="h-10 w-auto sm:h-12 md:h-14"
            />
          </Link>

          <div className="relative flex min-w-0 flex-1 items-center justify-between gap-3 py-0 pl-3 pr-3 sm:pl-4 sm:pr-4 md:pl-6 md:pr-6">
            <nav className="hidden min-w-0 items-center gap-5 xl:gap-7 lg:flex">
              {nav.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => openMenu(item.label)}
                    onMouseLeave={scheduleClose}
                  >
                    <button
                      type="button"
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                      className={`flex items-center gap-1 text-[14px] font-semibold transition-[color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-gold active:scale-[0.97] xl:text-[15px] ${
                        openDropdown === item.label ? 'text-gold' : 'text-white/90'
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        strokeWidth={2.5}
                        className={`transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute left-0 top-full z-30 pt-2">
                        <div className="min-w-[12.5rem] overflow-hidden rounded-xl border border-line bg-surface py-1.5 shadow-[0_12px_32px_-12px_rgba(2,16,35,0.35)]">
                          {item.children.map((c) => (
                            <NavLink
                              key={c.to}
                              to={c.to}
                              onClick={() => setOpenDropdown(null)}
                              className={({ isActive }) =>
                                [
                                  'mx-1.5 block whitespace-nowrap rounded-lg px-3 py-2 text-[13px] font-medium transition-colors duration-150',
                                  isActive
                                    ? 'bg-gold-deep/12 text-navy dark:bg-gold-deep/20 dark:text-gold'
                                    : 'text-ink/85 hover:bg-bg-muted hover:text-navy dark:hover:text-gold',
                                ].join(' ')
                              }
                            >
                              {c.label}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `text-[14px] font-semibold transition-colors hover:text-gold xl:text-[15px] ${
                        isActive ? 'text-gold' : 'text-white/90'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )
              )}
            </nav>

            <div className="ml-auto flex items-center gap-2 sm:gap-3">
              <FontSwitcher tone="light" className="hidden lg:flex" />
              <ThemeToggle tone="light" className="hidden sm:flex" />
              <Button
                to="/partner-with-us"
                variant="primary"
                className="hidden rounded-full sm:inline-flex"
              >
                Partner With Us
              </Button>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-colors lg:hidden"
                onClick={() => setMobileOpen((o) => !o)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>

            <div
              className="pointer-events-none absolute bottom-0 left-0 h-[2px] bg-gold-gradient"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-navy px-5 py-4 lg:hidden">
          <div className="mb-3 flex items-center justify-between gap-3 border-b border-white/10 pb-3 sm:hidden">
            <p className="text-[11px] font-medium tracking-wide text-white/70">
              {secondaryHeader.countriesText}
            </p>
            <div className="flex items-center gap-2">
              {secondaryHeader.socials.map((s) => {
                const Icon = socialIcons[s.label]
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-white/75"
                  >
                    <Icon size={12} />
                  </a>
                )
              })}
            </div>
          </div>

          <nav className="flex flex-col gap-1">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="py-1">
                  <p className="eyebrow px-2 py-2 text-white/45">{item.label}</p>
                  <div className="space-y-0.5">
                    {item.children.map((c) => (
                      <NavLink
                        key={c.to}
                        to={c.to}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          `block rounded-lg px-3 py-2.5 text-sm font-medium ${
                            isActive ? 'bg-white/10 text-gold' : 'text-white/90 hover:bg-white/10'
                          }`
                        }
                      >
                        {c.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2.5 text-sm font-semibold ${
                      isActive ? 'bg-white/10 text-gold' : 'text-white/90 hover:bg-white/10'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>
          <div className="mt-4 flex items-center gap-3">
            <ThemeToggle tone="light" />
            <FontSwitcher tone="light" />
            <Button to="/partner-with-us" variant="primary" className="rounded-full" onClick={() => setMobileOpen(false)}>
              Partner With Us
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

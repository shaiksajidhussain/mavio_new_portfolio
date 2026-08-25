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
const NAV_BG = '#021528'

const linkClass = ({ isActive }) =>
  `whitespace-nowrap text-[13px] font-medium tracking-wide transition-colors duration-150 xl:text-sm ${
    isActive ? 'text-gold' : 'text-white hover:text-gold'
  }`

export default function PrimaryHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileSection, setMobileSection] = useState(null)
  const closeTimer = useRef(null)

  useEffect(() => {
    const st = ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => setScrolled(self.scroll() > 40),
    })
    return () => st.kill()
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    if (!mobileOpen) setMobileSection(null)
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const openMenu = (label) => {
    clearTimeout(closeTimer.current)
    setOpenDropdown(label)
  }
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120)
  }

  const filled = scrolled || mobileOpen

  return (
    <header className={`transition-shadow duration-300 ${filled ? 'shadow-lg shadow-black/30' : ''}`}>
      <div className="relative">
        <div
          className={`pointer-events-none absolute inset-0 -z-10 transition-opacity duration-300 ${
            filled ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ background: NAV_BG }}
          aria-hidden
        />

        <div className="container-px mx-auto flex h-16 max-w-container items-center justify-between gap-6 sm:h-[4.5rem]">
          <Link to="/" className="relative z-20 shrink-0" aria-label="Mavio Global home">
            <img
              src={logoMavio}
              alt="Mavio Global"
              className="h-9 w-auto sm:h-10 md:h-11"
            />
          </Link>

          <div className="flex min-w-0 items-center gap-5 lg:gap-8">
            <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
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
                      className={`flex items-center gap-1 text-[13px] font-medium tracking-wide transition-colors duration-150 xl:text-sm ${
                        openDropdown === item.label ? 'text-gold' : 'text-white hover:text-gold'
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={13}
                        strokeWidth={2}
                        className={`transition-transform duration-200 ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute right-0 top-full z-30 pt-3">
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
                  <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass}>
                    {item.label}
                  </NavLink>
                )
              )}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <FontSwitcher tone="light" className="hidden lg:flex" />
              <ThemeToggle tone="light" className="hidden sm:flex" />
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-colors lg:hidden"
                onClick={() => setMobileOpen((o) => !o)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-white/10 px-5 py-4 sm:max-h-[calc(100dvh-4.5rem)] lg:hidden"
          style={{ background: NAV_BG }}
        >
          <div className="mb-3 flex items-center justify-between gap-3 border-b border-white/10 pb-3 sm:hidden">
            <p className="text-[11px] font-medium tracking-wide text-white/70">{secondaryHeader.countriesText}</p>
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
                <div key={item.label} className="py-0.5">
                  <button
                    type="button"
                    aria-expanded={mobileSection === item.label}
                    onClick={() => setMobileSection((s) => (s === item.label ? null : item.label))}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-semibold ${
                      mobileSection === item.label ? 'bg-white/10 text-gold' : 'text-white/90 hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      strokeWidth={2}
                      className={`transition-transform duration-200 ${
                        mobileSection === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {mobileSection === item.label && (
                    <div className="mt-0.5 space-y-0.5 pb-1 pl-2">
                      {item.children.map((c) => (
                        <NavLink
                          key={c.to}
                          to={c.to}
                          onClick={() => setMobileOpen(false)}
                          className={({ isActive }) =>
                            `block rounded-lg px-3 py-2.5 text-sm font-medium ${
                              isActive ? 'bg-white/10 text-gold' : 'text-white/80 hover:bg-white/10'
                            }`
                          }
                        >
                          {c.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
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
          <div className="mt-4 flex items-center gap-3 pb-2">
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

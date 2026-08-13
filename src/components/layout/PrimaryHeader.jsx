import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { nav } from '../../data/siteContent'
import Button from '../ui/Button'
import ThemeToggle from '../ui/ThemeToggle'
import { ScrollTrigger } from '../../lib/gsap'

export default function PrimaryHeader() {
  const { pathname } = useLocation()
  const isProductDetail = /^\/products\/[^/]+\/[^/]+$/.test(pathname)
  const hasDarkHero =
    [
      '/',
      '/about',
      '/contact',
      '/partner-with-us',
      '/capabilities/quality-compliance',
      '/capabilities/supply-chain-visibility',
    ].includes(pathname) || isProductDetail
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const closeTimer = useRef(null)

  const transparent = hasDarkHero && !scrolled && !mobileOpen

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
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150)
  }

  return (
    <header
      className={`transition-colors duration-300 ${
        transparent
          ? 'bg-transparent'
          : scrolled || mobileOpen
            ? 'border-b border-line bg-bg/90 backdrop-blur-md'
            : 'bg-bg/60 backdrop-blur-sm'
      }`}
    >
      <div className="relative">
        <div className="container-px mx-auto flex h-20 max-w-container items-center justify-between">
          <Link to="/" className="shrink-0">
            <img
              src="https://www.mavioglobal.com/assets/SVG_Logo-header-CTSoE-ST.svg"
              alt="Mavio Global"
              className="h-10 w-auto md:h-11"
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => openMenu(item.label)}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-gold ${
                      transparent ? 'text-white/90' : 'text-ink dark:hover:text-gold'
                    }`}
                  >
                    {item.label}
                    <ChevronDown size={14} />
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute left-0 top-full z-20 w-64 rounded-xl border border-line bg-surface p-2 shadow-card">
                      {item.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          className="block rounded-lg px-3 py-2 text-sm text-ink transition-colors hover:bg-bg-muted hover:text-navy dark:hover:text-gold"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-gold ${
                      isActive
                        ? 'text-gold'
                        : transparent
                          ? 'text-white/90'
                          : 'text-ink dark:hover:text-gold'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle tone={transparent ? 'light' : 'default'} className="hidden sm:flex" />
            <Button to="/partner-with-us" variant="primary" className="hidden sm:inline-flex">
              Partner With Us
            </Button>
            <button
              className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors lg:hidden ${
                transparent ? 'border-white/30 text-white' : 'border-line text-ink'
              }`}
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-[2px] bg-gold-gradient" style={{ width: `${progress * 100}%` }} />
      </div>

      {mobileOpen && (
        <div className="border-t border-line bg-bg px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="py-1">
                  <p className="eyebrow py-2 text-muted">{item.label}</p>
                  {item.children.map((c) => (
                    <Link
                      key={c.to}
                      to={c.to}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-2 py-2 text-sm text-ink hover:bg-bg-muted"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-2 py-2 text-sm font-medium text-ink hover:bg-bg-muted"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
          <div className="mt-4 flex items-center gap-3">
            <ThemeToggle />
            <Button to="/partner-with-us" variant="primary" onClick={() => setMobileOpen(false)}>
              Partner With Us
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { nav } from '../../data/siteContent'
import Button from '../ui/Button'
import ThemeToggle from '../ui/ThemeToggle'
import FontSwitcher from '../ui/FontSwitcher'
import { ScrollTrigger } from '../../lib/gsap'

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
      className={`bg-navy-deep transition-shadow duration-300 ${
        scrolled || mobileOpen ? 'shadow-lg shadow-black/20' : ''
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
                    type="button"
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="true"
                    className={`flex items-center gap-1 text-[15px] font-semibold transition-[color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-gold active:scale-[0.97] ${
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
                    `text-[15px] font-semibold transition-colors hover:text-gold ${
                      isActive ? 'text-gold' : 'text-white/90'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="flex items-center gap-4 border-l border-white/15 pl-4">
            <FontSwitcher tone="light" className="hidden lg:flex" />
            <ThemeToggle tone="light" className="hidden sm:flex" />
            <Button to="/partner-with-us" variant="primary" className="hidden sm:inline-flex">
              Partner With Us
            </Button>
            <button
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-colors lg:hidden"
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
        <div className="border-t border-white/10 bg-navy-deep px-5 py-4 lg:hidden">
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
            <Button to="/partner-with-us" variant="primary" onClick={() => setMobileOpen(false)}>
              Partner With Us
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

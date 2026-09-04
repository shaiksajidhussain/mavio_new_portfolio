import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

const SHOW_AFTER = 360

export default function ScrollToTop({ lenis }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (lenis) {
      const onScroll = ({ scroll }) => setVisible(scroll > SHOW_AFTER)
      lenis.on('scroll', onScroll)
      onScroll({ scroll: lenis.scroll })
      return () => lenis.off('scroll', onScroll)
    }

    const onWin = () => setVisible(window.scrollY > SHOW_AFTER)
    window.addEventListener('scroll', onWin, { passive: true })
    onWin()
    return () => window.removeEventListener('scroll', onWin)
  }, [lenis])

  const goTop = () => {
    if (lenis) lenis.scrollTo(0, { duration: 1.1 })
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={goTop}
      className={`fixed bottom-5 left-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gold-gradient text-navy-deep shadow-[0_10px_24px_-8px_rgba(212,162,76,0.7)] transition-[opacity,transform] duration-300 md:bottom-8 md:left-8 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
      }`}
    >
      <ChevronUp size={22} strokeWidth={2.5} />
    </button>
  )
}

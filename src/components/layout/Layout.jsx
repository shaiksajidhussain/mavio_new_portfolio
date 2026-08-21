import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import PrimaryHeader from './PrimaryHeader'
import SecondaryFooter from './SecondaryFooter'
import PrimaryFooter from './PrimaryFooter'
import CustomCursor from '../ui/CustomCursor'
import EnquiryModal from '../products/EnquiryModal'
import { EnquiryModalProvider } from '../../context/EnquiryModalContext'
import { gsap, ScrollTrigger, prefersReducedMotion } from '../../lib/gsap'

export default function Layout() {
  const location = useLocation()
  const mainRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const id = requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => cancelAnimationFrame(id)
  }, [location.pathname])

  useEffect(() => {
    if (!mainRef.current || prefersReducedMotion) return
    gsap.fromTo(mainRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power2.out' })
  }, [location.pathname])

  return (
    <EnquiryModalProvider>
      <CustomCursor />

      <div className="fixed inset-x-0 top-0 z-50">
        <PrimaryHeader />
      </div>

      {/* Mobile: ~72px; sm+: utility 44px + nav 80px */}
      <main ref={mainRef} className="pt-[4.5rem] sm:pt-[7.75rem]">
        <Outlet />
      </main>
      <SecondaryFooter />
      <PrimaryFooter />
      <EnquiryModal />
    </EnquiryModalProvider>
  )
}

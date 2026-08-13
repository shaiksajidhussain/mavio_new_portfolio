import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import SecondaryHeader from './SecondaryHeader'
import PrimaryHeader from './PrimaryHeader'
import Footer from './Footer'
import CustomCursor from '../ui/CustomCursor'
import EnquiryModal from '../products/EnquiryModal'
import { EnquiryModalProvider } from '../../context/EnquiryModalContext'
import { useSmoothScroll } from '../../hooks/useSmoothScroll'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

export default function Layout() {
  useSmoothScroll()
  const location = useLocation()
  const mainRef = useRef(null)

  useEffect(() => {
    if (!mainRef.current || prefersReducedMotion) return
    gsap.fromTo(mainRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power2.out' })
  }, [location.pathname])

  return (
    <EnquiryModalProvider>
      <CustomCursor />

      <div className="fixed inset-x-0 top-0 z-50">
        <SecondaryHeader />
        <PrimaryHeader />
      </div>

      <main ref={mainRef} className="pt-20 sm:pt-[7.25rem]">
        <Outlet />
      </main>
      <Footer />
      <EnquiryModal />
    </EnquiryModalProvider>
  )
}

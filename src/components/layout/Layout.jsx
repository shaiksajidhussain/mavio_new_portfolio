import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import PrimaryHeader from './PrimaryHeader'
import SecondaryFooter from './SecondaryFooter'
import PrimaryFooter from './PrimaryFooter'
import EnquiryModal from '../products/EnquiryModal'
import SmoothScroll from './SmoothScroll'
import { EnquiryModalProvider } from '../../context/EnquiryModalContext'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

export default function Layout() {
  const location = useLocation()
  const mainRef = useRef(null)

  useEffect(() => {
    if (!mainRef.current || prefersReducedMotion) return
    gsap.fromTo(mainRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power2.out' })
  }, [location.pathname])

  return (
    <EnquiryModalProvider>
      <SmoothScroll>
        <div className="fixed inset-x-0 top-0 z-50">
          <PrimaryHeader />
        </div>

        {/* Slim overlay header: 64px / 72px */}
        <main ref={mainRef} className="pt-16 sm:pt-[4.5rem]">
          <Outlet />
        </main>
        <SecondaryFooter />
        <PrimaryFooter />
        <EnquiryModal />
      </SmoothScroll>
    </EnquiryModalProvider>
  )
}

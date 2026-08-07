import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import PrimaryHeader from './PrimaryHeader'
import Footer from './Footer'
import CustomCursor from '../ui/CustomCursor'
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
    <>
      <CustomCursor />

      <div className="fixed inset-x-0 top-0 z-50">
        <PrimaryHeader />
      </div>

      <main ref={mainRef} className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

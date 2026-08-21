import Hero from '../components/home/Hero'
import TrustStrip from '../components/home/TrustStrip'
import ProductCategories from '../components/home/ProductCategories'
import SupplyChainShowcase from '../components/home/SupplyChainShowcase'
import Traceability from '../components/home/Traceability'
import AboutTeaser from '../components/home/AboutTeaser'
import WhyChooseMavio from '../components/home/WhyChooseMavio'
import Accreditations from '../components/home/Accreditations'
import Testimonials from '../components/home/Testimonials'
import GlobalMap from '../components/home/GlobalMap'
import FAQ from '../components/home/FAQ'
import LeadForm from '../components/home/LeadForm'
// import OperationsGallery from '../components/home/OperationsGallery'
// import CTABanner from '../components/home/CTABanner'
// import TradeCapabilities from '../components/home/TradeCapabilities'
import Reveal from '../components/ui/Reveal'
import RouteBackground from '../components/ui/RouteBackground'

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Quantified Trust Strip */}
      <TrustStrip />

      {/* 3. Product Categories */}
      <ProductCategories />

      {/* 4. Supply Chain Showcase */}
      <SupplyChainShowcase />

      {/* 5. Traceability Section */}
      <Traceability />

      {/* 6. About (indirect title) */}
      {/* <AboutTeaser /> */}

      {/* 7. Why Choose Mavio — toggle */}
      <WhyChooseMavio />

      {/* 8. Accreditations Strip */}
      <Accreditations />

      {/* 9. Testimonials */}
      <Testimonials />

      {/* 10. Global Collaboration Map */}
      <GlobalMap />

      {/* 11 & 12. FAQ + Dynamic Lead Form */}
      <section className="relative overflow-hidden container-px mx-auto max-w-container py-16 md:py-24">
        <RouteBackground flip />
        <Reveal as="div" stagger={0.15} className="grid gap-8 lg:grid-cols-2">
          <FAQ />
          <LeadForm />
        </Reveal>
      </section>

      {/* 13. Secondary Footer + 14. Primary Footer are rendered globally in Layout.jsx */}

      {/* Not part of the approved 14-section flow — commented out for now, kept for later use */}
      {/* <OperationsGallery /> */}
      {/* <CTABanner /> */}
      {/* <TradeCapabilities /> */}
    </>
  )
}

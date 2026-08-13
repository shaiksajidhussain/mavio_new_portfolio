import Hero from '../components/home/Hero'
import ProductCategories from '../components/home/ProductCategories'
import OperationsGallery from '../components/home/OperationsGallery'
import CTABanner from '../components/home/CTABanner'
import SupplyChainShowcase from '../components/home/SupplyChainShowcase'
import Traceability from '../components/home/Traceability'
import AboutTeaser from '../components/home/AboutTeaser'
import WhyChooseMavio from '../components/home/WhyChooseMavio'
import TradeCapabilities from '../components/home/TradeCapabilities'
import Accreditations from '../components/home/Accreditations'
import Testimonials from '../components/home/Testimonials'
import GlobalMap from '../components/home/GlobalMap'
import FAQ from '../components/home/FAQ'
import LeadForm from '../components/home/LeadForm'
import Reveal from '../components/ui/Reveal'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <ProductCategories />
      <OperationsGallery />
      <CTABanner />

      <Traceability />
      <SupplyChainShowcase />
      <TradeCapabilities />
      <WhyChooseMavio />
      
      <Testimonials />
      <Accreditations />
      <GlobalMap />

      <section className="container-px mx-auto max-w-container py-16 md:py-24">
        <Reveal as="div" stagger={0.15} className="grid gap-8 lg:grid-cols-2">
          <FAQ />
          <LeadForm />
        </Reveal>
      </section>
    </>
  )
}

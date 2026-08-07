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
import Reveal from '../components/ui/Reveal'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ProductCategories />
     
      <Traceability />
       <SupplyChainShowcase />
      <AboutTeaser />
      <WhyChooseMavio />
      
      <Accreditations />
      <Testimonials />
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

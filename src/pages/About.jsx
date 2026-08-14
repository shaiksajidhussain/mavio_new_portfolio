import AboutHero from '../components/about/AboutHero'
import OurCompany from '../components/about/OurCompany'
import VisionMission from '../components/about/VisionMission'
import GlobalNetwork from '../components/about/GlobalNetwork'
import Accreditations from '../components/home/Accreditations'
// import OurServices from '../components/about/OurServices'
// import AboutGallery from '../components/about/AboutGallery'
// import Milestones from '../components/about/Milestones'
// import AboutTestimonial from '../components/about/AboutTestimonial'

export default function About() {
  return (
    <>
      {/* 1. Hero */}
      <AboutHero />

      {/* 2. Our Story — "The Story Behind Mavio" */}
      <OurCompany />

      {/* 3. Vision & Mission */}
      <VisionMission />

      {/* 4. Global footprint — map placeholder */}
      <GlobalNetwork />

      {/* 5. Milestones — skipped per doc, needs more depth info */}
      {/* <Milestones /> */}

      {/* 6. Accreditations */}
      <Accreditations />

      {/* Not part of the approved doc — commented out for now, kept for later use */}
      {/* <OurServices /> */}
      {/* <AboutGallery /> */}
      {/* <AboutTestimonial /> */}
    </>
  )
}

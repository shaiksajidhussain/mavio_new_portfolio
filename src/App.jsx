import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import PlaceholderPage from './pages/PlaceholderPage'

const placeholderRoutes = [
  { path: '/about', title: 'About Mavio Global', blurb: 'Our full company story, leadership and timeline — page in progress.' },
  { path: '/products', title: 'Products', blurb: 'A browsable catalogue of every category we export — page in progress.' },
  { path: '/products/:slug', title: 'Product Category', blurb: 'Detailed specs, grades and origin info for this category — page in progress.' },
  { path: '/partner-with-us', title: 'Partner With Us', blurb: 'How to start a buyer or supplier relationship with Mavio — page in progress.' },
  { path: '/capabilities/why-mavio', title: 'Why Mavio', blurb: 'What sets our sourcing and export process apart — page in progress.' },
  { path: '/capabilities/quality-compliance', title: 'Quality & Compliance', blurb: 'Our QC process and certification standards — page in progress.' },
  { path: '/capabilities/supply-chain-visibility', title: 'Supply Chain Visibility', blurb: 'How buyers and suppliers track shipments end to end — page in progress.' },
  { path: '/capabilities/export-logistics', title: 'Export & Logistics', blurb: 'Ports, carriers and documentation handling — page in progress.' },
  { path: '/resources/faq', title: 'FAQ', blurb: 'Answers to common sourcing and export questions — page in progress.' },
  { path: '/resources/accreditations', title: 'Accreditations & Certifications', blurb: 'Full certification documentation — page in progress.' },
  { path: '/resources/download-centre', title: 'Download Centre', blurb: 'Brochures, spec sheets and compliance documents — page in progress.' },
  { path: '/sustainability', title: 'Sustainability', blurb: 'Our approach to farm-level and environmental sustainability — page in progress.' },
  { path: '/contact', title: 'Contact', blurb: 'Reach the Mavio Global team directly — page in progress.' },
]

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        {placeholderRoutes.map((r) => (
          <Route key={r.path} path={r.path} element={<PlaceholderPage title={r.title} blurb={r.blurb} />} />
        ))}
      </Route>
    </Routes>
  )
}

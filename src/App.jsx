import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import PartnerWithUs from './pages/PartnerWithUs'
import QualityCompliance from './pages/QualityCompliance'
import SupplyChainVisibility from './pages/SupplyChainVisibility'
import ExportLogistics from './pages/ExportLogistics'
import Faq from './pages/Faq'
import Accreditations from './pages/Accreditations'
import DownloadCentre from './pages/DownloadCentre'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Sustainability from './pages/Sustainability'
import Contact from './pages/Contact'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/partner-with-us" element={<PartnerWithUs />} />
        <Route path="/capabilities/quality-compliance" element={<QualityCompliance />} />
        <Route path="/capabilities/supply-chain-visibility" element={<SupplyChainVisibility />} />
        <Route path="/capabilities/export-logistics" element={<ExportLogistics />} />
        <Route path="/resources/faq" element={<Faq />} />
        <Route path="/resources/accreditations" element={<Accreditations />} />
        <Route path="/resources/download-centre" element={<DownloadCentre />} />
        <Route path="/resources/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:categorySlug" element={<Products />} />
        <Route path="/products/:categorySlug/:productSlug" element={<ProductDetail />} />
      </Route>
    </Routes>
  )
}

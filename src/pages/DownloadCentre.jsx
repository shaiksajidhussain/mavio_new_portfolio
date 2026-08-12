import { DownloadSearchProvider } from '../context/DownloadSearchContext'
import DownloadHero from '../components/download/DownloadHero'
import FeaturedDownloads from '../components/download/FeaturedDownloads'
import ResourceCategories from '../components/download/ResourceCategories'
import NeedDocument from '../components/download/NeedDocument'

export default function DownloadCentre() {
  return (
    <DownloadSearchProvider>
      <DownloadHero />
      <FeaturedDownloads />
      <ResourceCategories />
      <NeedDocument />
    </DownloadSearchProvider>
  )
}

import { Search } from 'lucide-react'
import { qualityCompliancePage } from '../../data/siteContent'
import RouteBackground from '../ui/RouteBackground'
import QualityFeatureRow from './QualityFeatureRow'

const { heading, body, image, imageAlt } = qualityCompliancePage.inspectionTesting

export default function InspectionTesting() {
  return (
    <section className="relative overflow-hidden bg-bg-muted py-16 themeblack:bg-black md:py-24">
      <RouteBackground />
      <div className="container-px relative mx-auto max-w-container">
        <QualityFeatureRow
          index={3}
          icon={Search}
          heading={heading}
          body={body}
          image={image}
          imageAlt={imageAlt}
          reverse={false}
        />
      </div>
    </section>
  )
}

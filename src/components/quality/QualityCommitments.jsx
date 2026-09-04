import { ClipboardList } from 'lucide-react'
import { qualityCompliancePage } from '../../data/siteContent'
import RouteBackground from '../ui/RouteBackground'
import QualityFeatureRow from './QualityFeatureRow'

const { heading, body, image, imageAlt } = qualityCompliancePage.qualityCommitments

export default function QualityCommitments() {
  return (
    <section className="relative overflow-hidden bg-bg-muted py-16 md:py-24">
      <RouteBackground />
      <div className="container-px relative mx-auto max-w-container">
        <QualityFeatureRow
          index={1}
          icon={ClipboardList}
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

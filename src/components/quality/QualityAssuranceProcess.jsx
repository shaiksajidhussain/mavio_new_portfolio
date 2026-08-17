import { FlaskConical } from 'lucide-react'
import { qualityCompliancePage } from '../../data/siteContent'
import RouteBackground from '../ui/RouteBackground'
import QualityFeatureRow from './QualityFeatureRow'

const { heading, body, image, imageAlt } = qualityCompliancePage.qualityAssurance

export default function QualityAssuranceProcess() {
  return (
    <section className="relative overflow-hidden bg-bg py-16 themeblack:bg-black md:py-24">
      <RouteBackground flip />
      <div className="container-px relative mx-auto max-w-container">
        <QualityFeatureRow
          index={2}
          icon={FlaskConical}
          heading={heading}
          body={body}
          image={image}
          imageAlt={imageAlt}
          reverse
        />
      </div>
    </section>
  )
}

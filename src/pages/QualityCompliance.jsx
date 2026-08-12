import QualityHero from '../components/quality/QualityHero'
import QualityCommitments from '../components/quality/QualityCommitments'
import QualityAssuranceProcess from '../components/quality/QualityAssuranceProcess'
import InspectionTesting from '../components/quality/InspectionTesting'
import ComplianceDocuments from '../components/quality/ComplianceDocuments'
import StandardsCertifications from '../components/quality/StandardsCertifications'

export default function QualityCompliance() {
  return (
    <>
      <QualityHero />
      <QualityCommitments />
      <QualityAssuranceProcess />
      <InspectionTesting />
      <ComplianceDocuments />
      <StandardsCertifications />
    </>
  )
}

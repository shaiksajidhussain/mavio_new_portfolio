import StandardsCommitment from '../components/accreditations/StandardsCommitment'
import CertificationBenefits from '../components/accreditations/CertificationBenefits'
import QualityFramework from '../components/accreditations/QualityFramework'
import EthicalTrade from '../components/accreditations/EthicalTrade'
import AccreditationsGrid from '../components/accreditations/AccreditationsGrid'

export default function Accreditations() {
  return (
    <>
      <StandardsCommitment />
      <CertificationBenefits />
      <QualityFramework />
      <EthicalTrade />
      <AccreditationsGrid />
    </>
  )
}

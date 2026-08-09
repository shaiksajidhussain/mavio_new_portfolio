import { PartnerRoleProvider } from '../context/PartnerRoleContext'
import PartnerHero from '../components/partner/PartnerHero'
import WhyPartner from '../components/partner/WhyPartner'
import CompetitiveAdvantage from '../components/partner/CompetitiveAdvantage'
import Industries from '../components/partner/Industries'
import Commitment from '../components/partner/Commitment'
import PartnerCTA from '../components/partner/PartnerCTA'

export default function PartnerWithUs() {
  return (
    <PartnerRoleProvider>
      <PartnerHero />
      <WhyPartner />
      <CompetitiveAdvantage />
      <Industries />
      <Commitment />
      <PartnerCTA />
    </PartnerRoleProvider>
  )
}

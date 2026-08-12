import VisibilityHero from '../components/supplychain/VisibilityHero'
import JourneyTimeline from '../components/supplychain/JourneyTimeline'
import LogisticsCoordination from '../components/supplychain/LogisticsCoordination'
import CommunicationTouchpoints from '../components/supplychain/CommunicationTouchpoints'
import TrustStats from '../components/supplychain/TrustStats'
import DocumentationCompliance from '../components/supplychain/DocumentationCompliance'

export default function SupplyChainVisibility() {
  return (
    <>
      <VisibilityHero />
      <JourneyTimeline />
      <LogisticsCoordination />
      <CommunicationTouchpoints />
      <TrustStats />
      <DocumentationCompliance />
    </>
  )
}

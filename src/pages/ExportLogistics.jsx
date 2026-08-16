import LogisticsHero from '../components/logistics/LogisticsHero'
import LogisticsFlow from '../components/logistics/LogisticsFlow'
import LogisticsCapabilities from '../components/logistics/LogisticsCapabilities'
import DocumentationHandling from '../components/logistics/DocumentationHandling'
import LogisticsStats from '../components/logistics/LogisticsStats'

export default function ExportLogistics() {
  return (
    <>
      <LogisticsHero />
      <LogisticsFlow />
      <LogisticsCapabilities />
      <DocumentationHandling />
      <LogisticsStats />
    </>
  )
}

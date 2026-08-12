import LogisticsFlow from '../components/logistics/LogisticsFlow'
import LogisticsCapabilities from '../components/logistics/LogisticsCapabilities'
import DocumentationHandling from '../components/logistics/DocumentationHandling'
import LogisticsStats from '../components/logistics/LogisticsStats'

export default function ExportLogistics() {
  return (
    <>
      <LogisticsFlow />
      <LogisticsCapabilities />
      <DocumentationHandling />
      <LogisticsStats />
    </>
  )
}

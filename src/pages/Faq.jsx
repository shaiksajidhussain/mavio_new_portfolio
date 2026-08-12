import { FaqRoleProvider } from '../context/FaqRoleContext'
import FaqHero from '../components/faq/FaqHero'
import FaqList from '../components/faq/FaqList'

export default function Faq() {
  return (
    <FaqRoleProvider>
      <FaqHero />
      <FaqList />
    </FaqRoleProvider>
  )
}

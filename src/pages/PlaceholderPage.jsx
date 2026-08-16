import { ArrowLeft } from 'lucide-react'
import SectionLabel from '../components/ui/SectionLabel'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'

export default function PlaceholderPage({ title, blurb }) {
  return (
    <section className="container-px mx-auto flex min-h-[50vh] max-w-container flex-col items-start justify-center py-20">
      <SectionLabel tone="pill">Coming soon</SectionLabel>
      <SectionHeading as="h1" className="mt-4">
        {title}
      </SectionHeading>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted md:text-base">{blurb}</p>
      <Button to="/" variant="outline" className="mt-6">
        <ArrowLeft size={16} /> Back to home
      </Button>
    </section>
  )
}

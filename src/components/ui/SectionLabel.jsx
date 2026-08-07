export default function SectionLabel({ children, tone = 'default', className = '' }) {
  const tones = {
    default: 'text-navy dark:text-gold',
    onDark: 'text-gold',
    pill: 'bg-gold-gradient text-navy-deep px-3 py-1 rounded-full',
  }

  return <span className={`eyebrow ${tones[tone]} ${className}`}>{children}</span>
}

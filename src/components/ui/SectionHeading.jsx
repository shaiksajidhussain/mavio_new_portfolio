import { forwardRef } from 'react'

export function splitHeadingHighlight(text) {
  const trimmed = text.trim()
  const lastSpace = trimmed.lastIndexOf(' ')
  if (lastSpace <= 0) {
    return { prefix: null, highlight: trimmed }
  }
  return {
    prefix: trimmed.slice(0, lastSpace),
    highlight: trimmed.slice(lastSpace + 1),
  }
}

const sizeClasses = {
  section: 'text-3xl md:text-4xl',
  hero: 'text-4xl sm:text-5xl',
  medium: 'text-2xl md:text-3xl',
  small: 'text-xl md:text-2xl',
  compact: 'text-3xl md:text-4xl',
}

const weightClasses = {
  semibold: 'font-semibold',
  bold: 'font-bold',
}

const SectionHeading = forwardRef(function SectionHeading(
  {
    children,
    as: Tag = 'h2',
    tone = 'default',
    size = 'section',
    weight = 'semibold',
    className = '',
  },
  ref
) {
  const text = typeof children === 'string' ? children : null

  if (!text) {
    return (
      <Tag
        ref={ref}
        className={`font-display leading-tight tracking-tight ${sizeClasses[size]} ${weightClasses[weight]} ${className}`}
      >
        {children}
      </Tag>
    )
  }

  const { prefix, highlight } = splitHeadingHighlight(text)
  const mainTone = tone === 'onDark' ? 'text-white' : 'text-navy dark:text-white'
  const highlightClasses =
    'text-gold-gradient underline decoration-gold-deep decoration-[3px] underline-offset-[6px]'

  return (
    <Tag
      ref={ref}
      className={`font-display leading-tight tracking-tight ${sizeClasses[size]} ${weightClasses[weight]} ${className}`}
    >
      {prefix ? (
        <>
          <span className={mainTone}>{prefix} </span>
          <span className={highlightClasses}>{highlight}</span>
        </>
      ) : (
        <span className={highlightClasses}>{highlight}</span>
      )}
    </Tag>
  )
})

export default SectionHeading

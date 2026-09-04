import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

export default function ThemeToggle({ className = '', tone = 'default' }) {
  const { theme, cycleTheme } = useTheme()
  const Icon = theme === 'light' ? Sun : Moon

  const toneClasses =
    tone === 'light'
      ? 'border-white/30 text-white hover:border-gold hover:text-gold'
      : 'border-line text-ink hover:border-gold hover:text-gold'

  return (
    <button
      type="button"
      onClick={cycleTheme}
      aria-label={theme === 'light' ? 'Theme: white. Click for blue' : 'Theme: blue. Click for white'}
      className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${toneClasses} ${className}`}
    >
      <Icon size={16} />
    </button>
  )
}

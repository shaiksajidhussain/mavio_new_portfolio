import { Moon, MoonStar, Sun } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

const icons = { light: Sun, dark: Moon, black: MoonStar }
const labels = { light: 'light', dark: 'dark (navy)', black: 'dark (black)' }

export default function ThemeToggle({ className = '', tone = 'default' }) {
  const { theme, cycleTheme } = useTheme()
  const Icon = icons[theme]

  const toneClasses =
    tone === 'light'
      ? 'border-white/30 text-white hover:border-gold hover:text-gold'
      : 'border-line text-ink hover:border-gold hover:text-gold'

  return (
    <button
      type="button"
      onClick={cycleTheme}
      aria-label={`Theme: ${labels[theme]} — click to switch`}
      className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${toneClasses} ${className}`}
    >
      <Icon size={16} />
    </button>
  )
}

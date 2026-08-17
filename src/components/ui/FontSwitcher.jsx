import { FONT_OPTIONS, useFont } from '../../context/FontContext'

export default function FontSwitcher({ className = '', tone = 'default' }) {
  const { font, setFont } = useFont()

  const toneClasses =
    tone === 'light'
      ? 'border-white/30 bg-transparent text-white hover:border-gold'
      : 'border-line bg-transparent text-ink hover:border-gold'

  return (
    <select
      value={font}
      onChange={(e) => setFont(e.target.value)}
      aria-label="Preview site font (testing only)"
      className={`h-9 rounded-full border px-3 text-xs font-medium transition-colors focus:outline-none ${toneClasses} ${className}`}
    >
      {FONT_OPTIONS.map((f) => (
        <option key={f.name} value={f.name} className="text-ink">
          {f.name}
        </option>
      ))}
    </select>
  )
}

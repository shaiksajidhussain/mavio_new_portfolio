import { createContext, useContext, useEffect, useState } from 'react'

const FontContext = createContext(null)

// 'DM Sans' is the site's current default — kept first so it stays the fallback.
// Calisto MT, Futura Std, and Segoe UI Variable are licensed system fonts with no
// free CDN source; they only render on devices that already have them installed
// (Segoe UI Variable ships with Windows 11), otherwise the browser silently falls
// back to the next font in the stack.
export const FONT_OPTIONS = [
  { name: 'DM Sans', stack: `'DM Sans', sans-serif` },
  { name: 'Albert Sans', stack: `'Albert Sans', sans-serif` },
  { name: 'Alegreya', stack: `'Alegreya', serif` },
  { name: 'Calisto MT', stack: `'Calisto MT', 'Bookman Old Style', Georgia, serif` },
  { name: 'Futura Std', stack: `'Futura Std', Futura, 'Century Gothic', sans-serif` },
  { name: 'Segoe UI Variable', stack: `'Segoe UI Variable Text', 'Segoe UI Variable', 'Segoe UI', sans-serif` },
]

function getInitialFont() {
  if (typeof window === 'undefined') return FONT_OPTIONS[0].name
  const stored = window.localStorage.getItem('mavio-font')
  if (FONT_OPTIONS.some((f) => f.name === stored)) return stored
  return FONT_OPTIONS[0].name
}

export function FontProvider({ children }) {
  const [font, setFont] = useState(getInitialFont)

  useEffect(() => {
    const option = FONT_OPTIONS.find((f) => f.name === font) ?? FONT_OPTIONS[0]
    document.documentElement.style.setProperty('--font-family', option.stack)
    window.localStorage.setItem('mavio-font', font)
  }, [font])

  return <FontContext.Provider value={{ font, setFont }}>{children}</FontContext.Provider>
}

export function useFont() {
  const ctx = useContext(FontContext)
  if (!ctx) throw new Error('useFont must be used within FontProvider')
  return ctx
}

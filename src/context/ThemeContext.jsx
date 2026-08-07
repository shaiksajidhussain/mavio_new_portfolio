import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

const THEMES = ['light', 'dark', 'black']

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'
  const stored = window.localStorage.getItem('mavio-theme')
  if (THEMES.includes(stored)) return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark' || theme === 'black')
    root.classList.toggle('theme-black', theme === 'black')
    window.localStorage.setItem('mavio-theme', theme)
  }, [theme])

  const cycleTheme = () => setTheme((t) => THEMES[(THEMES.indexOf(t) + 1) % THEMES.length])

  return (
    <ThemeContext.Provider value={{ theme, cycleTheme }}>{children}</ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}

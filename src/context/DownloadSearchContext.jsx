import { createContext, useContext, useState } from 'react'

const DownloadSearchContext = createContext(null)

export function DownloadSearchProvider({ children }) {
  const [query, setQuery] = useState('')
  return <DownloadSearchContext.Provider value={{ query, setQuery }}>{children}</DownloadSearchContext.Provider>
}

export function useDownloadSearch() {
  const ctx = useContext(DownloadSearchContext)
  if (!ctx) throw new Error('useDownloadSearch must be used within DownloadSearchProvider')
  return ctx
}

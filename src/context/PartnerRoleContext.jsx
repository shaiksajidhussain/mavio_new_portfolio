import { createContext, useContext, useState } from 'react'

const PartnerRoleContext = createContext(null)

export function PartnerRoleProvider({ children }) {
  const [role, setRole] = useState('buyer')
  return (
    <PartnerRoleContext.Provider value={{ role, setRole }}>{children}</PartnerRoleContext.Provider>
  )
}

export function usePartnerRole() {
  const ctx = useContext(PartnerRoleContext)
  if (!ctx) throw new Error('usePartnerRole must be used within PartnerRoleProvider')
  return ctx
}

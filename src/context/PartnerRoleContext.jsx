import { createContext, useContext, useState } from 'react'

const PartnerRoleContext = createContext(null)

const typeToLabel = {
  producer: 'Producer',
  manufacturer: 'Manufacturer',
  sourcing: 'Sourcing Partner',
  logistics: 'Logistics Specialist',
}

export function PartnerRoleProvider({ children }) {
  const [role, setRole] = useState('supplier')
  const [partnerType, setPartnerType] = useState('')

  const selectPartnerType = (id) => {
    setPartnerType(typeToLabel[id] || id)
  }

  return (
    <PartnerRoleContext.Provider value={{ role, setRole, partnerType, setPartnerType, selectPartnerType }}>
      {children}
    </PartnerRoleContext.Provider>
  )
}

export function usePartnerRole() {
  const ctx = useContext(PartnerRoleContext)
  if (!ctx) throw new Error('usePartnerRole must be used within PartnerRoleProvider')
  return ctx
}

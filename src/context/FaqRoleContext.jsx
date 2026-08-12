import { createContext, useContext, useState } from 'react'

const FaqRoleContext = createContext(null)

export function FaqRoleProvider({ children }) {
  const [role, setRole] = useState('supplier')
  return <FaqRoleContext.Provider value={{ role, setRole }}>{children}</FaqRoleContext.Provider>
}

export function useFaqRole() {
  const ctx = useContext(FaqRoleContext)
  if (!ctx) throw new Error('useFaqRole must be used within FaqRoleProvider')
  return ctx
}

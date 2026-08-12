import { createContext, useContext, useState } from 'react'

const EnquiryModalContext = createContext(null)

export function EnquiryModalProvider({ children }) {
  const [product, setProduct] = useState(null)

  const openEnquiry = (p) => setProduct(p)
  const closeEnquiry = () => setProduct(null)

  return (
    <EnquiryModalContext.Provider value={{ product, openEnquiry, closeEnquiry }}>
      {children}
    </EnquiryModalContext.Provider>
  )
}

export function useEnquiryModal() {
  const ctx = useContext(EnquiryModalContext)
  if (!ctx) throw new Error('useEnquiryModal must be used within EnquiryModalProvider')
  return ctx
}

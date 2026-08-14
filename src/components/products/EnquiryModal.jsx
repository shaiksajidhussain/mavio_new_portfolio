import { useEffect, useState } from 'react'
import { CheckCircle2, X } from 'lucide-react'
import { useEnquiryModal } from '../../context/EnquiryModalContext'
import Button from '../ui/Button'

const incoterms = ['FOB', 'CIF', 'CFR', 'EXW', 'DDP']

export default function EnquiryModal() {
  const { product, closeEnquiry } = useEnquiryModal()
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)
  const [success, setSuccess] = useState(false)
  const [form, setForm] = useState({ moq: '', incoterm: '', details: '', name: '', email: '' })

  useEffect(() => {
    if (product) {
      setMounted(true)
      setSuccess(false)
      setForm({ moq: '', incoterm: '', details: '', name: '', email: '' })
      const raf = requestAnimationFrame(() => setVisible(true))
      return () => cancelAnimationFrame(raf)
    }
    if (mounted) {
      setVisible(false)
      const t = setTimeout(() => setMounted(false), 250)
      return () => clearTimeout(t)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product])

  useEffect(() => {
    if (!mounted) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && closeEnquiry()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted])

  if (!mounted) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Mavio product enquiry', { product, ...form })
    setSuccess(true)
  }

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center p-4 transition-opacity duration-250 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="absolute inset-0 bg-navy-deep/70 backdrop-blur-sm" onClick={closeEnquiry} />

      <div
        className={`relative w-full max-w-lg rounded-3xl border border-line bg-surface p-8 shadow-card transition-all duration-250 ${
          visible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-95 opacity-0'
        }`}
      >
        <button
          type="button"
          onClick={closeEnquiry}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:text-ink"
        >
          <X size={16} />
        </button>

        {success ? (
          <div className="flex flex-col items-start gap-3 py-6">
            <CheckCircle2 className="text-bay" size={32} />
            <p className="font-display text-xl font-semibold text-ink">Enquiry sent</p>
            <p className="text-sm text-muted">
              Our team will get back to you about {product?.name} shortly.
            </p>
            <Button variant="outline" onClick={closeEnquiry} className="mt-2">
              Close
            </Button>
          </div>
        ) : (
          <>
            <p className="eyebrow text-gold-deep">Enquire</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink">{product?.name}</h2>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-muted">Product Name</label>
                  <input
                    type="text"
                    value={product?.name || ''}
                    readOnly
                    className="mt-1.5 w-full rounded-xl border border-line bg-bg-muted px-3 py-2.5 text-sm text-ink"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted">HS Code</label>
                  <input
                    type="text"
                    value={product?.hsCode || ''}
                    readOnly
                    className="mt-1.5 w-full rounded-xl border border-line bg-bg-muted px-3 py-2.5 text-sm text-ink"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-ink">Estimated MOQ</label>
                <input
                  type="text"
                  value={form.moq}
                  onChange={(e) => setForm({ ...form, moq: e.target.value })}
                  placeholder="e.g. 1 FCL"
                  className="mt-1.5 w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink focus:border-gold focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-ink">Preferred Incoterm</label>
                <select
                  value={form.incoterm}
                  onChange={(e) => setForm({ ...form, incoterm: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink focus:border-gold focus:outline-none"
                >
                  <option value="">Select an option</option>
                  {incoterms.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-ink">Other enquiry details</label>
                <textarea
                  value={form.details}
                  onChange={(e) => setForm({ ...form, details: e.target.value })}
                  placeholder="Packaging, destination port, timeline…"
                  rows={3}
                  className="mt-1.5 w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink focus:border-gold focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium text-ink">Your name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Full name"
                    className="mt-1.5 w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink focus:border-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-ink">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@company.com"
                    className="mt-1.5 w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink focus:border-gold focus:outline-none"
                  />
                </div>
              </div>

              <Button type="submit" variant="primary" className="mt-2 w-full">
                Send Enquiry
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

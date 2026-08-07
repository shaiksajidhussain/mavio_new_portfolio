import { useEffect, useRef, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { leadFormConfig } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import Button from '../ui/Button'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

const fieldsByRole = {
  Buyer: [
    { key: 'category', label: 'Which product category are you sourcing?', type: 'select', options: leadFormConfig.buyerCategories },
    { key: 'quantity', label: 'Estimated order quantity / frequency', type: 'text', placeholder: 'e.g. 1 FCL / month' },
    { key: 'name', label: 'Your name', type: 'text', placeholder: 'Full name' },
    { key: 'email', label: 'Work email', type: 'email', placeholder: 'you@company.com' },
    { key: 'company', label: 'Company', type: 'text', placeholder: 'Company name' },
  ],
  Supplier: [
    { key: 'category', label: 'Which product category do you supply?', type: 'select', options: leadFormConfig.supplierCategories },
    { key: 'origin', label: 'Origin / region', type: 'text', placeholder: 'e.g. Idukki, Kerala' },
    { key: 'certifications', label: 'Certifications held (if any)', type: 'text', placeholder: 'e.g. ISO 22000, Organic' },
    { key: 'name', label: 'Your name', type: 'text', placeholder: 'Full name' },
    { key: 'email', label: 'Contact email', type: 'email', placeholder: 'you@company.com' },
  ],
  Other: [
    { key: 'name', label: 'Your name', type: 'text', placeholder: 'Full name' },
    { key: 'email', label: 'Email', type: 'email', placeholder: 'you@company.com' },
    { key: 'message', label: 'How can we help?', type: 'textarea', placeholder: 'Tell us a bit about your query' },
  ],
}

export default function LeadForm() {
  const [role, setRole] = useState(null)
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [draft, setDraft] = useState('')
  const [success, setSuccess] = useState(false)
  const fieldRef = useRef(null)

  const fields = role ? fieldsByRole[role] : []
  const currentField = fields[step]

  useEffect(() => {
    if (prefersReducedMotion || !fieldRef.current) return
    gsap.fromTo(fieldRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' })
  }, [role, step])

  const selectRole = (r) => {
    setRole(r)
    setStep(0)
    setAnswers({})
    setDraft('')
    setSuccess(false)
  }

  const advance = () => {
    if (!draft.trim()) return
    const nextAnswers = { ...answers, [currentField.key]: draft.trim() }
    setAnswers(nextAnswers)
    setDraft('')
    if (step + 1 < fields.length) {
      setStep(step + 1)
    } else {
      // Stubbed submit — no backend wired up yet.
      console.log('Mavio lead form submission', { role, ...nextAnswers })
      setSuccess(true)
    }
  }

  const reset = () => {
    setRole(null)
    setStep(0)
    setAnswers({})
    setDraft('')
    setSuccess(false)
  }

  return (
    <div className="rounded-3xl border border-line bg-surface p-8 shadow-card md:p-10">
      <SectionLabel>Dynamic Lead Form</SectionLabel>
      <h2 className="mt-3 font-display text-2xl font-semibold text-navy dark:text-white md:text-3xl">
        Tell us what you need
      </h2>

      {success ? (
        <div className="mt-8 flex flex-col items-start gap-3 rounded-2xl border border-line bg-bg-muted p-6">
          <CheckCircle2 className="text-bay" size={28} />
          <p className="font-display text-lg font-semibold text-ink">Thanks — we’ve got it.</p>
          <p className="text-sm text-muted">
            Our team will reach out to {answers.email || 'you'} shortly.
          </p>
          <Button variant="outline" onClick={reset} className="mt-2">
            Start over
          </Button>
        </div>
      ) : (
        <>
          <div className="mt-6">
            <p className="eyebrow text-muted">Step 1 — Select role</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {leadFormConfig.roles.map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => selectRole(r)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                    role === r ? 'bg-navy text-white' : 'border border-line text-muted hover:text-ink'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {role && (
            <div className="mt-8">
              <p className="eyebrow text-muted">
                Step 2 — {step + 1} of {fields.length}
              </p>

              {Object.entries(answers).length > 0 && (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {Object.entries(answers).map(([k, v]) => (
                    <li key={k} className="rounded-full bg-bg-muted px-3 py-1 text-xs text-muted">
                      {v}
                    </li>
                  ))}
                </ul>
              )}

              <div ref={fieldRef} className="mt-4">
                <label className="text-sm font-medium text-ink">{currentField.label}</label>

                {currentField.type === 'select' ? (
                  <select
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink focus:border-gold focus:outline-none"
                  >
                    <option value="">Select an option</option>
                    {currentField.options.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                ) : currentField.type === 'textarea' ? (
                  <textarea
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    placeholder={currentField.placeholder}
                    rows={3}
                    className="mt-2 w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink focus:border-gold focus:outline-none"
                  />
                ) : (
                  <input
                    type={currentField.type}
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    placeholder={currentField.placeholder}
                    className="mt-2 w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink focus:border-gold focus:outline-none"
                  />
                )}

                <Button variant="primary" onClick={advance} className="mt-4">
                  {step + 1 < fields.length ? 'Next' : 'Submit'}
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

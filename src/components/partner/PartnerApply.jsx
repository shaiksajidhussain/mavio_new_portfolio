import { useState } from 'react'
import { CheckCircle2, MessageCircle } from 'lucide-react'
import { contactPage, footer, partnerPage } from '../../data/siteContent'
import Button from '../ui/Button'

const { applyForm } = partnerPage
const emptyValues = Object.fromEntries(applyForm.fields.map((f) => [f.key, '']))

const fieldClass =
  'w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-gold-deep'

export default function PartnerApply() {
  const [values, setValues] = useState(emptyValues)
  const [success, setSuccess] = useState(false)

  const onChange = (key, value) => {
    setValues((prev) => ({ ...prev, [key]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('Mavio partner application', values)
    setSuccess(true)
  }

  const reset = () => {
    setValues(emptyValues)
    setSuccess(false)
  }

  return (
    <section id="become-a-partner" className="relative scroll-mt-28 bg-bg py-16 md:py-24">
      <div className="container-px mx-auto grid max-w-container gap-10 lg:grid-cols-[0.9fr_1.35fr] lg:gap-14">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="gold-text eyebrow">{applyForm.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {partnerPage.hero.close[0].replace(/\.$/, '')}
            <span className="gold-text">.</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">{partnerPage.hero.close[1]}</p>

          <div className="mt-8 space-y-3 border-t border-line pt-8 text-sm text-muted">
            <p>
              <span className="block text-xs uppercase tracking-[0.14em] text-gold-deep">Email</span>
              <a href={`mailto:${footer.contact.email}`} className="mt-1 inline-block text-ink hover:text-gold-deep">
                {footer.contact.email}
              </a>
            </p>
            <p>
              <span className="block text-xs uppercase tracking-[0.14em] text-gold-deep">Phone</span>
              <a href={`tel:${footer.contact.phone.replace(/\s/g, '')}`} className="mt-1 inline-block text-ink hover:text-gold-deep">
                {footer.contact.phone}
              </a>
            </p>
            <p>
              <span className="block text-xs uppercase tracking-[0.14em] text-gold-deep">WhatsApp</span>
              <a href={footer.contact.whatsapp} target="_blank" rel="noreferrer" className="mt-1 inline-block text-ink hover:text-gold-deep">
                {footer.contact.phone}
              </a>
            </p>
            <p>
              <span className="block text-xs uppercase tracking-[0.14em] text-gold-deep">Website</span>
              <a href={footer.contact.website} target="_blank" rel="noreferrer" className="mt-1 inline-block text-ink hover:text-gold-deep">
                www.mavioglobal.com
              </a>
            </p>
            <p>
              <span className="block text-xs uppercase tracking-[0.14em] text-gold-deep">Base</span>
              <a
                href={footer.contact.maps}
                target="_blank"
                rel="noreferrer"
                className="mt-1 block max-w-sm text-ink hover:text-gold-deep"
              >
                {footer.contact.address}
              </a>
            </p>
          </div>

          <a
            href={contactPage.whatsapp.href}
            target="_blank"
            rel="noreferrer"
            className="mt-10 flex items-start gap-4 rounded-[1.5rem] bg-navy-deep p-6 text-white transition-transform duration-200 hover:scale-[1.01]"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-navy-deep">
              <MessageCircle size={20} />
            </span>
            <span>
              <span className="block font-display text-lg font-semibold">{contactPage.whatsapp.heading}</span>
              <span className="mt-1 block text-sm text-white/70">{contactPage.whatsapp.body}</span>
              <span className="gold-text mt-3 inline-block text-sm font-semibold">{contactPage.whatsapp.label}</span>
            </span>
          </a>
        </aside>

        <div className="rounded-[1.75rem] border border-line bg-surface p-6 md:p-10">
          {success ? (
            <div className="flex min-h-[28rem] flex-col items-start justify-center gap-4 py-8">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-navy-deep">
                <CheckCircle2 size={28} />
              </span>
              <p className="gold-text eyebrow">Received</p>
              <h3 className="max-w-xl font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                {applyForm.confirmation}
              </h3>
              <Button variant="outline" onClick={reset} className="mt-4">
                Submit another application
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                {applyForm.fields.map((field) => {
                  const span = field.full || field.key === 'partnerType' ? 'sm:col-span-2' : ''
                  return (
                    <label key={field.key} className={`block ${span}`}>
                      <span className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-muted">
                        {field.label}
                        {field.required ? <span className="text-gold-deep"> *</span> : null}
                      </span>

                      {field.type === 'textarea' ? (
                        <textarea
                          name={field.key}
                          rows={5}
                          required={field.required}
                          placeholder={field.placeholder}
                          value={values[field.key]}
                          onChange={(e) => onChange(field.key, e.target.value)}
                          className={`${fieldClass} resize-y`}
                        />
                      ) : field.type === 'select' ? (
                        <select
                          name={field.key}
                          required={field.required}
                          value={values[field.key]}
                          onChange={(e) => onChange(field.key, e.target.value)}
                          className={fieldClass}
                        >
                          <option value="">{field.placeholder}</option>
                          {field.options.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.type}
                          name={field.key}
                          required={field.required}
                          placeholder={field.placeholder}
                          value={values[field.key]}
                          onChange={(e) => onChange(field.key, e.target.value)}
                          className={fieldClass}
                        />
                      )}
                    </label>
                  )
                })}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
                <p className="text-xs text-muted">We typically respond within one business day.</p>
                <Button type="submit" variant="primary" className="!px-8">
                  {applyForm.submitLabel}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

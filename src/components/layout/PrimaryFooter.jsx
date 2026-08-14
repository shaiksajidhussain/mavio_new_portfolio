import { brand } from '../../data/siteContent'

export default function PrimaryFooter() {
  return (
    <div className="border-t border-white/10 bg-navy-deep">
      <div className="container-px mx-auto flex max-w-container flex-col items-center justify-between gap-2 py-5 text-xs text-white/40 sm:flex-row">
        <span>© {new Date().getFullYear()} {brand.name}. All rights reserved.</span>
        <span>Est. {brand.founded} · {brand.hq}</span>
      </div>
    </div>
  )
}

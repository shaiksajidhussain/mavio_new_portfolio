import { Plane, MapPin } from 'lucide-react'

export default function RouteBackground({ flip = false, className = '' }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-[0.06] dark:opacity-0 ${
        flip ? 'scale-x-[-1]' : ''
      } ${className}`}
    >
      <svg viewBox="0 0 1000 500" preserveAspectRatio="none" className="h-full w-full">
        <defs>
          <pattern id="route-dots" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1.4" cy="1.4" r="1.4" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="1000" height="500" fill="url(#route-dots)" className="text-ink" />
        <path
          d="M30 430 C 210 390, 300 210, 480 190 C 620 175, 690 270, 870 130"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="6 9"
          strokeLinecap="round"
          className="text-navy"
        />
        <path
          d="M110 70 C 250 100, 330 50, 510 100 C 650 140, 750 70, 950 160"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="6 9"
          strokeLinecap="round"
          className="text-navy"
        />
      </svg>

      <Plane size={22} strokeWidth={1.5} className="absolute left-[46%] top-[33%] -rotate-45 text-navy" />
      <Plane size={18} strokeWidth={1.5} className="absolute left-[87%] top-[24%] rotate-[25deg] text-navy" />
      <Plane size={16} strokeWidth={1.5} className="absolute left-[9%] top-[78%] -rotate-[15deg] text-navy" />
      <MapPin size={20} strokeWidth={1.5} className="absolute left-[64%] top-[70%] text-navy" />
      <MapPin size={16} strokeWidth={1.5} className="absolute left-[30%] top-[14%] text-navy" />
    </div>
  )
}

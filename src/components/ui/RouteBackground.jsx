import { Plane, MapPin, Ship, Truck } from 'lucide-react'

export default function RouteBackground({ flip = false, className = '' }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-[0.06] dark:opacity-[0.08] ${
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
          className="text-navy dark:text-white"
        />
        <path
          d="M110 70 C 250 100, 330 50, 510 100 C 650 140, 750 70, 950 160"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="6 9"
          strokeLinecap="round"
          className="text-navy dark:text-white"
        />
      </svg>

      <Plane
        size={22}
        strokeWidth={1.5}
        className="absolute left-[46%] top-[33%] animate-float text-navy dark:text-white"
        style={{ '--float-rotate': '-45deg' }}
      />
      <Plane
        size={18}
        strokeWidth={1.5}
        className="absolute left-[87%] top-[24%] animate-float-slow text-navy dark:text-white"
        style={{ '--float-rotate': '25deg' }}
      />
      <Plane
        size={16}
        strokeWidth={1.5}
        className="absolute left-[9%] top-[78%] animate-float-fast text-navy dark:text-white"
        style={{ '--float-rotate': '-15deg' }}
      />
      <MapPin size={20} strokeWidth={1.5} className="absolute left-[64%] top-[70%] text-navy dark:text-white" />
      <MapPin size={16} strokeWidth={1.5} className="absolute left-[30%] top-[14%] text-navy dark:text-white" />
      <Ship
        size={19}
        strokeWidth={1.5}
        className="absolute left-[18%] top-[50%] animate-float-slow text-navy dark:text-white"
        style={{ '--float-rotate': '-6deg' }}
      />
      <Truck
        size={18}
        strokeWidth={1.5}
        className="absolute left-[73%] top-[86%] animate-float-fast text-navy dark:text-white"
        style={{ '--float-rotate': '0deg' }}
      />
    </div>
  )
}

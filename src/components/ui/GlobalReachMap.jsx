import { useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { MapPin, Plane, Ship } from 'lucide-react'
import { brand, originCoords, regions } from '../../data/siteContent'
import { useTheme } from '../../context/ThemeContext'
import Button from './Button'
import Reveal from './Reveal'

const geoUrl = 'https://unpkg.com/world-atlas@2/countries-110m.json'

const palettes = {
  light: { card: '#ffffff', country: '#dbe1e8', hover: '#c7cfda', stroke: '#ffffff', text: '#0b2442' },
  dark: { card: '#0f2e52', country: '#1c3f66', hover: '#254c79', stroke: '#0f2e52', text: '#ffffff' },
  black: { card: '#0a0a0a', country: '#1e1e1e', hover: '#292929', stroke: '#0a0a0a', text: '#ffffff' },
}

const markers = [
  { name: `${brand.hq} · HQ`, coordinates: [originCoords.lng, originCoords.lat], isHq: true },
  ...regions.map((r) => ({ name: `${r.flag} ${r.name}`, coordinates: [r.lng, r.lat], isHq: false })),
]

export default function GlobalReachMap({ className = '' }) {
  const { theme } = useTheme()
  const [hovered, setHovered] = useState(null)
  const p = palettes[theme] ?? palettes.light

  return (
    <Reveal as="div" stagger={0} y={40} className={`relative ${className}`}>
      <span className="pointer-events-none absolute -right-4 -top-7 z-30 hidden sm:block">
        <Plane
          aria-hidden
          size={30}
          strokeWidth={1.5}
          className="animate-float-slow text-gold-deep/60"
          style={{ '--float-rotate': '35deg' }}
        />
      </span>
      <svg
        aria-hidden
        viewBox="0 0 60 60"
        className="pointer-events-none absolute -right-8 top-8 z-20 hidden h-14 w-14 animate-float text-gold-deep/30 sm:block"
      >
        <circle cx="30" cy="30" r="26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 5" />
      </svg>
      <span className="pointer-events-none absolute -left-5 bottom-16 z-30 hidden -scale-x-100 sm:block">
        <Plane
          aria-hidden
          size={24}
          strokeWidth={1.5}
          className="animate-float text-gold-deep/50"
          style={{ '--float-rotate': '-25deg' }}
        />
      </span>
      <span className="pointer-events-none absolute -bottom-5 right-10 z-30 hidden sm:block">
        <Ship
          aria-hidden
          size={26}
          strokeWidth={1.5}
          className="animate-float-slow text-gold-deep/50"
          style={{ '--float-rotate': '-4deg' }}
        />
      </span>

      <div className="relative overflow-hidden rounded-3xl border border-line shadow-card" style={{ backgroundColor: p.card }}>
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 z-10 h-40 w-[140%] -translate-x-1/2 rounded-[50%]"
          style={{ backgroundColor: p.card }}
        />

        <div className="absolute left-1/2 top-6 z-20 -translate-x-1/2">
          <Button
            to="/capabilities/export-logistics"
            variant="navy"
            className="!px-6 !py-2.5 !text-xs shadow-lg"
          >
            View Global Reach
          </Button>
        </div>

        <ComposableMap
          projection="geoEqualEarth"
          projectionConfig={{ scale: 150 }}
          width={800}
          height={430}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={p.country}
                  stroke={p.stroke}
                  strokeWidth={0.6}
                  style={{
                    default: { outline: 'none', transition: 'fill 0.25s ease' },
                    hover: { outline: 'none', fill: p.hover, transition: 'fill 0.25s ease' },
                    pressed: { outline: 'none', fill: p.hover, transition: 'fill 0.25s ease' },
                  }}
                />
              ))
            }
          </Geographies>

          {markers.map((m) => {
            const isHovered = hovered === m.name
            return (
              <Marker
                key={m.name}
                coordinates={m.coordinates}
                onMouseEnter={() => setHovered(m.name)}
                onMouseLeave={() => setHovered(null)}
                style={{ default: { cursor: 'pointer' } }}
              >
                <g
                  style={{
                    transform: isHovered ? 'scale(1.35) translateY(-2px)' : 'scale(1)',
                    transformOrigin: '0px 0px',
                    transition: 'transform 0.25s ease',
                  }}
                >
                  <ellipse cx={0} cy={2} rx={5} ry={1.6} fill="#000" opacity={0.18} />
                  <path
                    d="M0,0 C-6,-9 -6,-17 0,-17 C6,-17 6,-9 0,0 Z"
                    fill={isHovered ? '#ffbf00' : m.isHq ? '#ffbf00' : '#d4a24c'}
                    stroke="#0b2442"
                    strokeWidth={1}
                    style={{ transition: 'fill 0.2s ease' }}
                  />
                  <circle cx={0} cy={-12} r={3} fill="#0b2442" />
                </g>
                {isHovered && (
                  <text textAnchor="middle" y={-26} fontSize={10} fontWeight={600} fill={p.text}>
                    {m.name}
                  </text>
                )}
              </Marker>
            )
          })}
        </ComposableMap>

        <div className="flex items-center justify-between px-6 py-4 sm:px-8">
          <div className="flex items-center gap-2 text-xs font-medium" style={{ color: p.text }}>
            <MapPin size={14} className="text-gold-deep" fill="#d4a24c" />
            Markets we serve
          </div>
          <p className="text-xs" style={{ color: p.text, opacity: 0.6 }}>
            {regions.length} regions · {brand.marketsCount} countries
          </p>
        </div>

        <div className="h-1 w-full bg-gold-gradient" />
      </div>
    </Reveal>
  )
}

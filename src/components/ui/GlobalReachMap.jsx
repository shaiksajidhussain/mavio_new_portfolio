import { useMemo, useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { MapPin, Plane, Ship } from 'lucide-react'
import { brand, countryLeaders, regions } from '../../data/siteContent'
import { useTheme } from '../../context/ThemeContext'
import Button from './Button'
import Reveal from './Reveal'

const geoUrl = 'https://unpkg.com/world-atlas@2/countries-110m.json'

const palettes = {
  light: {
    card: '#ffffff',
    country: '#e4e9ef',
    served: '#c5d0de',
    active: '#d4a24c',
    stroke: '#ffffff',
    text: '#0b2442',
    line: '#0b2442',
  },
  dark: {
    card: '#0f2e52',
    country: '#1a3558',
    served: '#2a4f78',
    active: '#d4a24c',
    stroke: '#0f2e52',
    text: '#ffffff',
    line: '#ffd27a',
  },
  black: {
    card: '#0a0a0a',
    country: '#1a1a1a',
    served: '#2a2a2a',
    active: '#d4a24c',
    stroke: '#0a0a0a',
    text: '#ffffff',
    line: '#ffd27a',
  },
}

function normalizeId(id) {
  if (id == null) return ''
  return String(id).padStart(3, '0')
}

function PlaceCallout({ place, color, textColor }) {
  const [dx, dy] = place.label ?? [1, 0]
  const len = 34
  const endX = dx * len
  const endY = dy * len
  const midX = endX * 0.55
  const midY = endY * 0.55
  const textAnchor = endX >= 0 ? 'start' : 'end'
  const textX = endX + (endX >= 0 ? 5 : -5)

  return (
    <Marker coordinates={[place.lng, place.lat]}>
      <g style={{ pointerEvents: 'none' }}>
        <circle r={3.2} fill={color} stroke="#fff" strokeWidth={1} />
        <path
          d={`M 0 0 L ${midX} ${midY} L ${endX} ${endY}`}
          fill="none"
          stroke={color}
          strokeWidth={1.15}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx={endX} cy={endY} r={1.6} fill={color} />
        <text
          x={textX}
          y={endY + 3.5}
          textAnchor={textAnchor}
          fontSize={9.5}
          fontWeight={600}
          fill={textColor}
          style={{ letterSpacing: '0.02em' }}
        >
          {place.name}
        </text>
      </g>
    </Marker>
  )
}

function getPopupPos(x, y, width, height) {
  const popupSize = 144
  const edge = popupSize / 2 + 12
  const clampedX = Math.min(Math.max(x, edge), width - edge)
  const clampedY = Math.min(Math.max(y, edge), height - edge)
  const placement = clampedY < popupSize + 24 ? 'below' : 'above'

  return { x: clampedX, y: clampedY, placement }
}

function LeaderPopup({ leader, x, y, placement = 'above' }) {
  const [imgFailed, setImgFailed] = useState(false)
  const above = placement === 'above'

  return (
    <div
      className={`pointer-events-none absolute z-50 -translate-x-1/2 ${above ? '-translate-y-full' : 'translate-y-2'}`}
      style={{ left: x, top: y }}
    >
      {!above ? (
        <span
          aria-hidden
          className="mx-auto mb-1 block h-2 w-2 rotate-45 border-l-2 border-t-2 border-gold-deep/60 bg-surface"
        />
      ) : null}
      <div className="animate-leader-pop overflow-hidden rounded-2xl border-2 border-gold-deep/60 bg-surface shadow-[0_20px_48px_-10px_rgba(2,16,40,0.45)]">
        {!imgFailed ? (
          <img
            src={leader.image}
            alt=""
            data-no-dim
            className="block h-32 w-32 object-cover object-top sm:h-36 sm:w-36"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="flex h-32 w-32 items-center justify-center bg-gold-gradient sm:h-36 sm:w-36">
            <span className="font-display text-2xl font-bold text-navy-deep">
              {leader.name
                .split(' ')
                .slice(0, 2)
                .map((w) => w[0])
                .join('')}
            </span>
          </div>
        )}
      </div>
      {above ? (
        <span
          aria-hidden
          className="mx-auto mt-1 block h-2 w-2 rotate-45 border-b-2 border-r-2 border-gold-deep/60 bg-surface"
        />
      ) : null}
    </div>
  )
}

export default function GlobalReachMap({ className = '' }) {
  const { theme } = useTheme()
  const indiaRegion = useMemo(() => regions.find((r) => r.name === 'India') ?? null, [])
  const [activeRegion, setActiveRegion] = useState(indiaRegion)
  const [hoveredLeader, setHoveredLeader] = useState(null)
  const [popupPos, setPopupPos] = useState({ x: 0, y: 0, placement: 'above' })
  const p = palettes[theme] ?? palettes.light

  const countryToRegion = useMemo(() => {
    const map = new Map()
    regions.forEach((region) => {
      region.countryIds?.forEach((id) => {
        map.set(normalizeId(id), region)
      })
    })
    return map
  }, [])

  const marketRegions = regions.filter((r) => !r.isOrigin)
  const shown = activeRegion

  const clearHover = () => {
    setActiveRegion(indiaRegion)
    setHoveredLeader(null)
  }

  const showLeader = (leader, e) => {
    const stage = e.currentTarget.closest('[data-map-stage]')
    const rect = stage?.getBoundingClientRect()
    if (!rect) return
    setPopupPos(getPopupPos(e.clientX - rect.left, e.clientY - rect.top, rect.width, rect.height))
    setHoveredLeader(leader)
  }

  const moveLeader = (leader, e) => {
    const stage = e.currentTarget.closest('[data-map-stage]')
    const rect = stage?.getBoundingClientRect()
    if (!rect) return
    setPopupPos(getPopupPos(e.clientX - rect.left, e.clientY - rect.top, rect.width, rect.height))
    if (leader) setHoveredLeader(leader)
  }

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

        <div className="relative" data-map-stage onMouseLeave={clearHover}>
          {hoveredLeader ? (
            <LeaderPopup
              key={hoveredLeader.country}
              leader={hoveredLeader}
              x={popupPos.x}
              y={popupPos.y}
              placement={popupPos.placement}
            />
          ) : null}

          <ComposableMap
            projection="geoEqualEarth"
            projectionConfig={{ scale: 150 }}
            width={800}
            height={430}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const id = normalizeId(geo.id)
                  const region = countryToRegion.get(id)
                  const leader = countryLeaders[id] || null
                  const isActive = shown && region?.name === shown.name
                  const isServed = Boolean(region)
                  const fill = isActive ? p.active : isServed ? p.served : p.country

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={fill}
                      stroke={p.stroke}
                      strokeWidth={0.55}
                      onMouseEnter={(e) => {
                        if (region) setActiveRegion(region)
                        if (leader) showLeader(leader, e)
                        else setHoveredLeader(null)
                      }}
                      onMouseMove={(e) => {
                        if (leader) moveLeader(leader, e)
                      }}
                      onClick={() => {
                        if (!region) return
                        setActiveRegion(region)
                      }}
                      style={{
                        default: {
                          outline: 'none',
                          cursor: isServed ? 'pointer' : 'default',
                          transition: 'fill 0.25s ease, filter 0.25s ease',
                          filter: isActive ? 'drop-shadow(0 6px 10px rgba(10,16,32,0.28))' : 'none',
                        },
                        hover: {
                          outline: 'none',
                          fill: isServed ? p.active : p.country,
                          cursor: isServed ? 'pointer' : 'default',
                        },
                        pressed: {
                          outline: 'none',
                          fill: isServed ? p.active : p.country,
                        },
                      }}
                    />
                  )
                })
              }
            </Geographies>

            {shown?.places?.map((place) => (
              <PlaceCallout
                key={`${shown.name}-${place.name}`}
                place={place}
                color={p.active}
                textColor={p.text}
              />
            ))}
          </ComposableMap>
        </div>

        <div className="flex items-center justify-between px-6 py-4 sm:px-8">
          <div className="flex items-center gap-2 text-xs font-medium" style={{ color: p.text }}>
            <MapPin size={14} className="text-gold-deep" fill="#d4a24c" />
            Markets we serve
          </div>
          <p className="text-xs" style={{ color: p.text, opacity: 0.6 }}>
            {marketRegions.length} regions · {brand.marketsCount} countries
          </p>
        </div>

        <div className="h-1 w-full bg-gold-gradient" />
      </div>
    </Reveal>
  )
}

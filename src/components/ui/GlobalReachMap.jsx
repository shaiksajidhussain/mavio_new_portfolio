import { useMemo, useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { MapPin, Plane, Ship } from 'lucide-react'
import { brand, countryLeaders, regions } from '../../data/siteContent'
import { useTheme } from '../../context/ThemeContext'
import Reveal from './Reveal'

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

export const MAP_STYLES = [
  { id: 'classic', n: '01', name: 'Classic' },
  { id: 'choropleth', n: '02', name: 'Growth' },
]

/** ISO numeric → short map label + centroid for choropleth callouts */
const countryMeta = {
  '356': { code: 'IN', label: 'India', lat: 21.5, lng: 78.5, tier: 'home' },
  '784': { code: 'AE', label: 'UAE', lat: 24.5, lng: 54.5, tier: 'core' },
  '682': { code: 'SA', label: 'KSA', lat: 23.5, lng: 45, tier: 'core' },
  '512': { code: 'OM', label: 'Oman', lat: 21, lng: 57, tier: 'core' },
  '634': { code: 'QA', label: 'Qatar', lat: 25.3, lng: 51.2, tier: 'core' },
  '276': { code: 'DE', label: 'Germany', lat: 51.2, lng: 10.5, tier: 'strong' },
  '528': { code: 'NL', label: 'Netherlands', lat: 52.2, lng: 5.3, tier: 'strong' },
  '826': { code: 'GB', label: 'UK', lat: 54, lng: -2.5, tier: 'strong' },
  '056': { code: 'BE', label: 'Belgium', lat: 50.5, lng: 4.5, tier: 'strong' },
  '250': { code: 'FR', label: 'France', lat: 46.5, lng: 2.5, tier: 'strong' },
  '380': { code: 'IT', label: 'Italy', lat: 42.5, lng: 12.5, tier: 'strong' },
  '840': { code: 'US', label: 'USA', lat: 39.5, lng: -98.5, tier: 'core' },
  '124': { code: 'CA', label: 'Canada', lat: 56, lng: -96, tier: 'strong' },
  '702': { code: 'SG', label: 'Singapore', lat: 1.35, lng: 103.8, tier: 'core' },
  '458': { code: 'MY', label: 'Malaysia', lat: 4.2, lng: 102, tier: 'core' },
  '704': { code: 'VN', label: 'Vietnam', lat: 16, lng: 108, tier: 'core' },
  '360': { code: 'ID', label: 'Indonesia', lat: -2, lng: 118, tier: 'core' },
  '156': { code: 'CN', label: 'China', lat: 35, lng: 105, tier: 'core' },
  '392': { code: 'JP', label: 'Japan', lat: 36.5, lng: 138, tier: 'strong' },
  '410': { code: 'KR', label: 'S. Korea', lat: 36.5, lng: 128, tier: 'strong' },
  '344': { code: 'HK', label: 'Hong Kong', lat: 22.3, lng: 114.2, tier: 'strong' },
  '404': { code: 'KE', label: 'Kenya', lat: 0.5, lng: 38, tier: 'growth' },
  '818': { code: 'EG', label: 'Egypt', lat: 26.5, lng: 30, tier: 'growth' },
  '710': { code: 'ZA', label: 'S. Africa', lat: -29, lng: 25, tier: 'growth' },
  '036': { code: 'AU', label: 'Australia', lat: -25, lng: 134, tier: 'growth' },
  '554': { code: 'NZ', label: 'N. Zealand', lat: -41, lng: 174, tier: 'growth' },
}

const classicPalettes = {
  light: {
    card: '#ffffff',
    country: '#e8edf3',
    served: '#c5d0de',
    active: '#d4a24c',
    stroke: '#ffffff',
    text: '#0b2442',
  },
  dark: {
    card: '#0f2e52',
    country: '#1a3558',
    served: '#2a4f78',
    active: '#d4a24c',
    stroke: '#0f2e52',
    text: '#ffffff',
  },
  black: {
    card: '#0a0a0a',
    country: '#1a1a1a',
    served: '#2a2a2a',
    active: '#d4a24c',
    stroke: '#0a0a0a',
    text: '#ffffff',
  },
}

/** Theme chrome (card / strokes / text) */
const choroplethChrome = {
  light: {
    card: '#ffffff',
    stroke: '#ffffff',
    text: '#334155',
    label: '#0b2442',
    outline: '#0b2442',
  },
  dark: {
    card: '#0f2e52',
    stroke: '#0f2e52',
    text: '#cbd5e1',
    label: '#ffffff',
    outline: '#021023',
  },
  black: {
    card: '#0a0a0a',
    stroke: '#0a0a0a',
    text: '#cbd5e1',
    label: '#ffffff',
    outline: '#000000',
  },
}

/** Pickable market-focus color schemes (brand-first defaults) */
export const GROWTH_COLOR_SCHEMES = [
  {
    id: 'gold',
    name: 'Gold',
    home: '#d4a24c',
    core: '#0b2442',
    strong: '#1a4a7a',
    growth: '#7a93b0',
    none: '#d5dde8',
  },
  {
    id: 'navy',
    name: 'Navy',
    home: '#e0b05a',
    core: '#021023',
    strong: '#0b2442',
    growth: '#3d5a80',
    none: '#cfd8e6',
  },
  {
    id: 'ocean',
    name: 'Ocean',
    home: '#d4a24c',
    core: '#0e4d6e',
    strong: '#1a7a9e',
    growth: '#6bb3c9',
    none: '#d2e4ea',
  },
  {
    id: 'forest',
    name: 'Forest',
    home: '#e08a2c',
    core: '#1f7a45',
    strong: '#4fad6e',
    growth: '#9fd4a8',
    none: '#d5dde8',
  },
  {
    id: 'sand',
    name: 'Sand',
    home: '#c9892e',
    core: '#5c4a32',
    strong: '#8a7355',
    growth: '#c4b49a',
    none: '#e8e2d8',
  },
]

function fillForTier(tier, scheme) {
  if (tier === 'home') return scheme.home
  if (tier === 'core') return scheme.core
  if (tier === 'strong') return scheme.strong
  if (tier === 'growth') return scheme.growth
  return scheme.none
}

function normalizeId(id) {
  if (id == null) return ''
  return String(id).padStart(3, '0')
}

function getPopupPos(x, y, width, height, size = 144) {
  const edge = size / 2 + 12
  const clampedX = Math.min(Math.max(x, edge), width - edge)
  const clampedY = Math.min(Math.max(y, edge), height - edge)
  const placement = clampedY < size + 24 ? 'below' : 'above'
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

function CountryLabel({ meta, color, hideHomeLabel = false }) {
  const isHome = meta.tier === 'home'
  if (isHome && hideHomeLabel) return null
  return (
    <Marker coordinates={[meta.lng, meta.lat]}>
      <g style={{ pointerEvents: 'none' }}>
        {isHome ? (
          <>
            <text
              textAnchor="middle"
              y={-6}
              fontSize={11}
              fontWeight={700}
              fill={color}
              style={{ letterSpacing: '0.02em' }}
            >
              India
            </text>
            <text textAnchor="middle" y={8} fontSize={9} fontWeight={600} fill={color} opacity={0.9}>
              Home Country
            </text>
          </>
        ) : (
          <text textAnchor="middle" y={3} fontSize={8} fontWeight={600} fill={color} opacity={0.85}>
            {meta.code}
          </text>
        )}
      </g>
    </Marker>
  )
}

const tierTitles = {
  home: 'Home Country',
  core: 'Core market',
  strong: 'Strong market',
  growth: 'Growth market',
}

function GrowthTitlePopup({ title, subtitle, x, y, placement = 'above', accent = '#d4a24c' }) {
  const above = placement === 'above'
  return (
    <div
      className={`pointer-events-none absolute z-50 -translate-x-1/2 ${above ? '-translate-y-full' : 'translate-y-2'}`}
      style={{ left: x, top: y }}
    >
      <div className="min-w-[148px] rounded-md border border-line bg-surface px-3.5 py-2.5 text-center shadow-[0_8px_24px_-6px_rgba(2,16,40,0.28)]">
        <p className="text-sm font-bold leading-tight" style={{ color: accent }}>
          {title}
        </p>
        {subtitle ? <p className="mt-0.5 text-[11px] font-medium text-muted">{subtitle}</p> : null}
      </div>
    </div>
  )
}

function useMapHover(indiaRegion) {
  const [activeRegion, setActiveRegion] = useState(indiaRegion)
  const [hoveredLeader, setHoveredLeader] = useState(null)
  const [popupPos, setPopupPos] = useState({ x: 0, y: 0, placement: 'above' })

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

  return {
    activeRegion,
    setActiveRegion,
    hoveredLeader,
    setHoveredLeader,
    popupPos,
    clearHover,
    showLeader,
    moveLeader,
  }
}

function ClassicMap({ countryToRegion, marketRegions, indiaRegion }) {
  const { theme } = useTheme()
  const p = classicPalettes[theme] ?? classicPalettes.light
  const {
    activeRegion,
    setActiveRegion,
    hoveredLeader,
    setHoveredLeader,
    popupPos,
    clearHover,
    showLeader,
    moveLeader,
  } = useMapHover(indiaRegion)
  const shown = activeRegion

  return (
    <>
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
    </>
  )
}

function ChoroplethMap({ countryToRegion, marketRegions }) {
  const { theme } = useTheme()
  const chrome = choroplethChrome[theme] ?? choroplethChrome.light
  const [schemeId, setSchemeId] = useState('gold')
  const scheme = useMemo(() => {
    const base = GROWTH_COLOR_SCHEMES.find((s) => s.id === schemeId) ?? GROWTH_COLOR_SCHEMES[0]
    const noneByTheme = {
      light: base.none,
      dark: '#1a3558',
      black: '#1f1f1f',
    }
    return { ...base, none: noneByTheme[theme] ?? base.none }
  }, [schemeId, theme])

  const [hoveredId, setHoveredId] = useState(null)
  const [hoveredGeo, setHoveredGeo] = useState(null)
  const [hoveredFill, setHoveredFill] = useState(null)
  const [titleTip, setTitleTip] = useState(null)
  const [popupPos, setPopupPos] = useState({ x: 0, y: 0, placement: 'above' })

  const labeledCountries = useMemo(
    () =>
      Object.entries(countryMeta).map(([id, meta]) => ({
        id,
        ...meta,
        region: countryToRegion.get(id),
      })),
    [countryToRegion]
  )

  const legend = [
    { color: scheme.home, label: 'Home country' },
    { color: scheme.core, label: 'Core markets' },
    { color: scheme.strong, label: 'Strong markets' },
    { color: scheme.growth, label: 'Growth markets' },
    { color: scheme.none, label: 'No data' },
  ]

  const countryFill = (id) => {
    const meta = countryMeta[id]
    return meta ? fillForTier(meta.tier, scheme) : scheme.none
  }

  const updatePopupPos = (e) => {
    const stage = e.currentTarget.closest('[data-map-stage]')
    const rect = stage?.getBoundingClientRect()
    if (!rect) return
    setPopupPos(getPopupPos(e.clientX - rect.left, e.clientY - rect.top, rect.width, rect.height, 96))
  }

  const clearHover = () => {
    setHoveredId(null)
    setHoveredGeo(null)
    setHoveredFill(null)
    setTitleTip(null)
  }

  const onCountryEnter = (geo, e) => {
    const id = normalizeId(geo.id)
    const meta = countryMeta[id]
    const region = countryToRegion.get(id)
    const fill = countryFill(id)
    const name = meta?.label || geo.properties?.name || 'Country'
    const subtitle = meta ? tierTitles[meta.tier] : region ? `Market · ${region.name}` : 'No data'

    setHoveredId(id)
    setHoveredGeo(geo)
    setHoveredFill(fill)
    setTitleTip({ title: name, subtitle })
    updatePopupPos(e)
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-line shadow-card" style={{ backgroundColor: chrome.card }}>
      <div className="flex flex-wrap items-end justify-between gap-3 px-5 pt-5 pr-16 sm:px-7 sm:pt-6 sm:pr-20">
        <div>
          <p className="text-xs font-medium" style={{ color: chrome.text }}>
            Color-coded by market focus · Shipping from {brand.ports.join(' & ')}
          </p>
        </div>
        <p className="text-xs" style={{ color: chrome.text, opacity: 0.55 }}>
          {marketRegions.length} regions · {brand.marketsCount} countries
        </p>
      </div>

      {/* Side color scheme picker */}
      <div className="absolute right-3 top-16 z-20 flex flex-col items-center gap-2 sm:right-4 sm:top-20">
        <p className="mb-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-muted">Color</p>
        {GROWTH_COLOR_SCHEMES.map((item) => {
          const active = schemeId === item.id
          return (
            <button
              key={item.id}
              type="button"
              title={item.name}
              aria-label={`${item.name} color scheme`}
              aria-pressed={active}
              onClick={() => setSchemeId(item.id)}
              className={`relative h-7 w-7 rounded-full border-2 transition-transform duration-150 ${
                active ? 'scale-110 border-navy shadow-md dark:border-gold' : 'border-white/80 hover:scale-105'
              }`}
              style={{
                background: `linear-gradient(135deg, ${item.home} 0 38%, ${item.core} 38% 68%, ${item.strong} 68% 100%)`,
              }}
            />
          )
        })}
      </div>

      <div className="relative" data-map-stage onMouseLeave={clearHover}>
        {titleTip ? (
          <GrowthTitlePopup
            title={titleTip.title}
            subtitle={titleTip.subtitle}
            x={popupPos.x}
            y={popupPos.y}
            placement={popupPos.placement}
            accent={scheme.home}
          />
        ) : null}

        <ComposableMap
          projection="geoEqualEarth"
          projectionConfig={{ scale: 168, center: [10, 6] }}
          width={920}
          height={460}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) => (
              <>
                {geographies.map((geo) => {
                  const id = normalizeId(geo.id)
                  const isHovered = hoveredId === id
                  const fill = countryFill(id)

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={fill}
                      stroke={isHovered ? chrome.outline : chrome.stroke}
                      strokeWidth={isHovered ? 1.6 : 0.45}
                      onMouseEnter={(e) => onCountryEnter(geo, e)}
                      onMouseMove={updatePopupPos}
                      style={{
                        default: {
                          outline: 'none',
                          cursor: 'pointer',
                          transition: 'stroke-width 0.15s ease',
                        },
                        hover: { outline: 'none', cursor: 'pointer' },
                        pressed: { outline: 'none' },
                      }}
                    />
                  )
                })}

                {hoveredGeo && hoveredFill ? (
                  <Geography
                    geography={hoveredGeo}
                    fill={hoveredFill}
                    stroke={chrome.outline}
                    strokeWidth={1.85}
                    style={{
                      default: { outline: 'none', pointerEvents: 'none' },
                      hover: { outline: 'none', pointerEvents: 'none' },
                      pressed: { outline: 'none', pointerEvents: 'none' },
                    }}
                  />
                ) : null}
              </>
            )}
          </Geographies>

          {labeledCountries.map((item) => (
            <CountryLabel
              key={item.id}
              meta={item}
              color={chrome.label}
              hideHomeLabel={hoveredId === '356'}
            />
          ))}
        </ComposableMap>
      </div>

      <div className="border-t border-line px-5 py-4 sm:px-7">
        <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: chrome.text }}>
          Market focus
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {legend.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="h-3.5 w-3.5 rounded-sm" style={{ backgroundColor: item.color }} />
              <span className="text-xs" style={{ color: chrome.text }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function GlobalReachMap({ className = '' }) {
  const [style, setStyle] = useState('classic')
  const indiaRegion = useMemo(() => regions.find((r) => r.name === 'India') ?? null, [])
  const marketRegions = regions.filter((r) => !r.isOrigin)

  const countryToRegion = useMemo(() => {
    const map = new Map()
    regions.forEach((region) => {
      region.countryIds?.forEach((id) => {
        map.set(normalizeId(id), region)
      })
    })
    return map
  }, [])

  return (
    <Reveal as="div" stagger={0} y={40} className={`relative ${className}`}>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        {MAP_STYLES.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setStyle(item.id)}
            aria-pressed={style === item.id}
            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 ${
              style === item.id
                ? 'bg-gold-gradient text-navy-deep'
                : 'border border-line bg-surface text-muted hover:border-gold/50 hover:text-navy'
            }`}
          >
            {item.n} {item.name}
          </button>
        ))}
      </div>

      {style === 'choropleth' ? (
        <ChoroplethMap countryToRegion={countryToRegion} marketRegions={marketRegions} />
      ) : (
        <ClassicMap
          countryToRegion={countryToRegion}
          marketRegions={marketRegions}
          indiaRegion={indiaRegion}
        />
      )}
    </Reveal>
  )
}

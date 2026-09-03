import { useEffect, useMemo, useRef, useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker, useMapContext } from 'react-simple-maps'
import { brand, countryLeaders, regions } from '../../data/siteContent'
import { useTheme } from '../../context/ThemeContext'
import { gsap, prefersReducedMotion } from '../../lib/gsap'
import Reveal from './Reveal'

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'
const GOLD = '#d4a24c'

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

const goldScheme = {
  light: {
    home: GOLD,
    served: '#c5d0de',
    none: '#e8edf3',
  },
  dark: {
    home: GOLD,
    served: '#3d4d61',
    none: '#1a3558',
  },
  black: {
    home: GOLD,
    served: '#2a2a2a',
    none: '#1a1a1a',
  },
}

function fillForCountry(id, scheme) {
  const meta = countryMeta[id]
  if (!meta) return scheme.none
  if (meta.tier === 'home') return scheme.home
  return scheme.served
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
            className="block h-32 w-32 bg-bg-muted object-cover object-top sm:h-36 sm:w-36"
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

const INDIA_ORIGIN = [78.5, 21.5]

function projectLngLat(projection, lng, lat) {
  const pt = projection([lng, lat])
  if (!pt || Number.isNaN(pt[0]) || Number.isNaN(pt[1])) return null
  return { x: pt[0], y: pt[1] }
}

/** Aceternity WorldMap-style quadratic arc that always bows upward on screen. */
function createCurvedPath(start, end) {
  const dist = Math.hypot(end.x - start.x, end.y - start.y)
  const lift = Math.min(72, Math.max(32, dist * 0.22))
  const midX = (start.x + end.x) / 2
  const midY = Math.max(10, Math.min(start.y, end.y) - lift)
  return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`
}

function TradeWires({ destinations, color }) {
  const { projection } = useMapContext()
  const start = projectLngLat(projection, INDIA_ORIGIN[0], INDIA_ORIGIN[1])
  if (!start) return null

  return (
    <g data-trade-routes style={{ pointerEvents: 'none' }}>
      <defs>
        <linearGradient id="growth-wire-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0" />
          <stop offset="12%" stopColor={color} stopOpacity="1" />
          <stop offset="88%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      {destinations.map((item) => {
        const end = projectLngLat(projection, item.lng, item.lat)
        if (!end) return null
        return (
          <g key={item.id}>
            <path
              d={createCurvedPath(start, end)}
              fill="none"
              stroke="url(#growth-wire-grad)"
              strokeWidth={1.45}
              strokeLinecap="round"
              pathLength={1}
              strokeDasharray={1}
              strokeDashoffset={1}
            />
            <circle cx={end.x} cy={end.y} r={5.5} fill={color} opacity={0} data-wire-glow />
            <circle cx={end.x} cy={end.y} r={2.2} fill={color} opacity={0} data-wire-dot />
          </g>
        )
      })}
      <circle cx={start.x} cy={start.y} r={6.5} fill={color} opacity={0} data-wire-glow />
      <circle cx={start.x} cy={start.y} r={2.6} fill={color} opacity={0} data-wire-dot />
    </g>
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

function ChoroplethMap({ countryToRegion, marketRegions }) {
  const { theme } = useTheme()
  const chrome = choroplethChrome[theme] ?? choroplethChrome.light
  const scheme = goldScheme[theme] ?? goldScheme.light
  const stageRef = useRef(null)

  const [hoveredId, setHoveredId] = useState(null)
  const [hoveredGeo, setHoveredGeo] = useState(null)
  const [hoveredLeader, setHoveredLeader] = useState(null)
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

  const routeDestinations = useMemo(
    () => labeledCountries.filter((item) => item.id !== '356'),
    [labeledCountries]
  )

  const hoveredRegion = hoveredId ? countryToRegion.get(hoveredId) : null

  const legend = [
    { color: scheme.home, label: 'Home country' },
    { color: scheme.served, label: 'Markets we serve' },
    { color: scheme.none, label: 'No data' },
  ]

  const countryFill = (id) => fillForCountry(id, scheme)

  const updatePopupPos = (e, size = 144) => {
    const stage = e.currentTarget.closest('[data-map-stage]')
    const rect = stage?.getBoundingClientRect()
    if (!rect) return
    setPopupPos(getPopupPos(e.clientX - rect.left, e.clientY - rect.top, rect.width, rect.height, size))
  }

  const clearHover = () => {
    setHoveredId(null)
    setHoveredGeo(null)
    setHoveredLeader(null)
    setTitleTip(null)
  }

  const onCountryEnter = (geo, e) => {
    const id = normalizeId(geo.id)
    const region = countryToRegion.get(id)
    const leader = countryLeaders[id] || null
    if (!region || !leader) {
      clearHover()
      return
    }

    setHoveredId(id)
    setHoveredGeo(geo)
    setHoveredLeader(leader)
    setTitleTip(null)
    updatePopupPos(e, 144)
  }

  useEffect(() => {
    if (prefersReducedMotion) return
    const host = stageRef.current
    if (!host) return

    let ctx
    let cancelled = false
    let frame = 0
    let attempts = 0

    const play = () => {
      const routes = host.querySelector('[data-trade-routes]')
      const paths = [...host.querySelectorAll('[data-trade-routes] path')]
      if (!routes || !paths.length) return false

      const dots = host.querySelectorAll('[data-trade-routes] [data-wire-dot]')
      const glows = host.querySelectorAll('[data-trade-routes] [data-wire-glow]')

      ctx = gsap.context(() => {
        gsap.set(paths, { attr: { 'stroke-dasharray': 1, 'stroke-dashoffset': 1 }, opacity: 1 })
        gsap.set(dots, { opacity: 0 })
        gsap.set(glows, { opacity: 0 })

        const draw = 1.05
        const stagger = 0.07
        const fadeAt = draw + stagger * Math.max(paths.length - 1, 0) + 0.75

        const tl = gsap.timeline({
          paused: true,
        })

        tl.to(paths, {
          attr: { 'stroke-dashoffset': 0 },
          duration: draw,
          stagger,
          ease: 'power2.out',
        })
          .to(
            glows,
            { opacity: 0.32, duration: 0.4, stagger: 0.05, ease: 'power2.out' },
            0.28
          )
          .to(
            dots,
            { opacity: 1, duration: 0.4, stagger: 0.05, ease: 'power2.out' },
            0.28
          )
          .to(
            [paths, dots, glows],
            { opacity: 0, duration: 0.9, ease: 'power2.inOut' },
            fadeAt
          )

        gsap.timeline({
          scrollTrigger: {
            trigger: host,
            start: 'top 78%',
            end: 'bottom 20%',
            onEnter: () => tl.restart(),
            onEnterBack: () => tl.restart(),
            onLeave: () => {
              tl.pause()
              gsap.set(paths, { attr: { 'stroke-dashoffset': 1 }, opacity: 1 })
              gsap.set(dots, { opacity: 0 })
              gsap.set(glows, { opacity: 0 })
            },
            onLeaveBack: () => {
              tl.pause()
              gsap.set(paths, { attr: { 'stroke-dashoffset': 1 }, opacity: 1 })
              gsap.set(dots, { opacity: 0 })
              gsap.set(glows, { opacity: 0 })
            },
          },
        })
      }, host)
      return true
    }

    const tryPlay = () => {
      if (cancelled) return
      attempts += 1
      if (play() || attempts > 16) return
      frame = requestAnimationFrame(tryPlay)
    }
    frame = requestAnimationFrame(tryPlay)

    return () => {
      cancelled = true
      cancelAnimationFrame(frame)
      ctx?.revert()
    }
  }, [])

  return (
    <div className="relative overflow-hidden rounded-3xl border border-line shadow-card" style={{ backgroundColor: chrome.card }}>
      <div className="flex flex-wrap items-end justify-between gap-3 px-5 pt-5 sm:px-7 sm:pt-6">
        <div>
          <p className="text-xs font-medium" style={{ color: chrome.text }}>
            Color-coded by market focus · Shipping from {brand.ports.join(' & ')}
          </p>
        </div>
        <p className="text-xs" style={{ color: chrome.text, opacity: 0.55 }}>
          {marketRegions.length} regions · {brand.marketsCount} countries
        </p>
      </div>

      <div ref={stageRef} className="relative" data-map-stage onMouseLeave={clearHover}>
        {hoveredLeader ? (
          <LeaderPopup
            key={hoveredLeader.country}
            leader={hoveredLeader}
            x={popupPos.x}
            y={popupPos.y}
            placement={popupPos.placement}
          />
        ) : titleTip ? (
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
                  const isHome = countryMeta[id]?.tier === 'home'
                  const interactive = Boolean(countryToRegion.get(id) && countryLeaders[id])
                  const fill = isHome || isHovered ? scheme.home : countryFill(id)
                  const hoverFill = interactive || isHome ? scheme.home : countryFill(id)

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      data-iso={id}
                      fill={fill}
                      stroke={isHovered ? chrome.outline : chrome.stroke}
                      strokeWidth={isHovered ? 1.6 : 0.45}
                      onMouseEnter={(e) => onCountryEnter(geo, e)}
                      onMouseMove={(e) => {
                        if (hoveredLeader) updatePopupPos(e, 144)
                      }}
                      style={{
                        default: {
                          outline: 'none',
                          cursor: interactive ? 'pointer' : 'default',
                          transition: 'fill 0.25s ease, filter 0.25s ease, stroke-width 0.15s ease',
                          filter:
                            isHome || isHovered ? 'drop-shadow(0 6px 10px rgba(10,16,32,0.28))' : 'none',
                        },
                        hover: {
                          outline: 'none',
                          cursor: interactive ? 'pointer' : 'default',
                          fill: hoverFill,
                        },
                        pressed: { outline: 'none', fill: hoverFill },
                      }}
                    />
                  )
                })}

                {hoveredGeo ? (
                  <Geography
                    geography={hoveredGeo}
                    fill={scheme.home}
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

          <TradeWires destinations={routeDestinations} color={scheme.home} />

          {hoveredRegion?.places?.map((place) => (
            <PlaceCallout
              key={`${hoveredRegion.name}-${place.name}`}
              place={place}
              color={scheme.home}
              textColor={chrome.label}
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
      <ChoroplethMap countryToRegion={countryToRegion} marketRegions={marketRegions} />
    </Reveal>
  )
}

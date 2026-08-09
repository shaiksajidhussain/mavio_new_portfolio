import { useEffect, useMemo, useRef } from 'react'
import DottedMap from 'dotted-map/without-countries'
import worldMapData from '../../data/worldMap.json'
import { brand, originCoords, regions } from '../../data/siteContent'
import Reveal from './Reveal'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

export default function WorldMapVisual({ className = '' }) {
  const sectionRef = useRef(null)
  const pathsRef = useRef([])

  const { svgDataUri, width, height, origin, points } = useMemo(() => {
    const map = new DottedMap({ map: worldMapData })

    const originPoint = map.addPin({
      lat: originCoords.lat,
      lng: originCoords.lng,
      svgOptions: { color: '#ffbf00', radius: 0.7 },
    })

    const regionPoints = regions.map((r) =>
      map.addPin({ lat: r.lat, lng: r.lng, svgOptions: { color: '#e0b05a', radius: 0.55 } })
    )

    const svg = map.getSVG({
      radius: 0.22,
      color: '#ffffff26',
      shape: 'circle',
      backgroundColor: 'transparent',
    })

    return {
      svgDataUri: `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`,
      width: map.image.width,
      height: map.image.height,
      origin: originPoint,
      points: regions.map((r, i) => ({ ...r, ...regionPoints[i] })),
    }
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      pathsRef.current.forEach((path, i) => {
        if (!path) return
        const length = path.getTotalLength()
        gsap.fromTo(
          path,
          { strokeDasharray: length, strokeDashoffset: length },
          {
            strokeDashoffset: 0,
            duration: 1.1,
            delay: i * 0.12,
            ease: 'power2.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', once: true, fastScrollEnd: true },
          }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <Reveal
      ref={sectionRef}
      as="div"
      stagger={0}
      y={40}
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-navy ${className}`}
    >
      <img src={svgDataUri} alt="World map" className="block w-full" />

      <svg viewBox={`0 0 ${width} ${height}`} className="absolute inset-0 h-full w-full">
        {points.map((p, i) => (
          <path
            key={p.name}
            ref={(el) => (pathsRef.current[i] = el)}
            d={`M ${origin.x} ${origin.y} Q ${(origin.x + p.x) / 2} ${Math.min(origin.y, p.y) - height * 0.18} ${p.x} ${p.y}`}
            fill="none"
            stroke="#e0b05a"
            strokeOpacity="0.6"
            strokeWidth="0.35"
          />
        ))}

        <circle cx={origin.x} cy={origin.y} r="1" fill="#ffbf00" />
        {points.map((p) => (
          <circle key={p.name} cx={p.x} cy={p.y} r="0.8" fill="#e0b05a" />
        ))}
      </svg>

      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-gold-gradient px-3 py-1 text-[10px] font-bold text-navy-deep"
        style={{ left: `${(origin.x / width) * 100}%`, top: `${(origin.y / height) * 100}%`, marginTop: '14px' }}
      >
        {brand.hq} &middot; HQ
      </div>

      {points.map((p) => (
        <div
          key={p.name}
          className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm"
          style={{ left: `${(p.x / width) * 100}%`, top: `${(p.y / height) * 100}%`, marginTop: '10px' }}
        >
          {p.flag} {p.name}
        </div>
      ))}
    </Reveal>
  )
}

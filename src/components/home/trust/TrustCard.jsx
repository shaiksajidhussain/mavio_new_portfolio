import { useRef, useState } from 'react'
import SmartImage from '../../ui/SmartImage'

export default function TrustCard({ step, className = '' }) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const play = () => {
    const video = videoRef.current
    if (!video) return
    const run = video.play()
    if (run?.catch) run.catch(() => {})
    setPlaying(true)
  }

  const stop = () => {
    const video = videoRef.current
    if (video) {
      video.pause()
      video.currentTime = 0
    }
    setPlaying(false)
  }

  return (
    <article
      className={`group relative overflow-hidden rounded-[1.75rem] ${className}`}
      onMouseEnter={play}
      onMouseLeave={stop}
      onFocus={play}
      onBlur={stop}
    >
      <SmartImage
        src={step.image}
        alt=""
        className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ease-out group-hover:scale-105 ${
          playing ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ease-out group-hover:scale-105 ${
          playing ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src={step.video} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50 transition-colors duration-500 group-hover:bg-black/28" />
      <div className="relative flex h-full flex-col justify-end p-5 md:p-6">
        <p className="font-display text-[11px] tracking-[0.22em] text-gold transition-colors duration-300 group-hover:text-gold-bright">
          STEP {String(step.step).padStart(2, '0')}
        </p>
        <h3 className="mt-2 font-display text-xl font-bold text-white md:text-2xl">{step.label}</h3>
        <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-white/80 transition-[max-height] duration-300 ease-out group-hover:max-h-40 group-focus-within:max-h-40">
          {step.description}
        </p>
      </div>
    </article>
  )
}

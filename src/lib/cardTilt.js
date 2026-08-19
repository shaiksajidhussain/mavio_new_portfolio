import { gsap, prefersReducedMotion } from './gsap'

function canTilt() {
  return (
    !prefersReducedMotion &&
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches
  )
}

export function tiltCard(card, event) {
  if (!card || !canTilt()) return
  const rect = card.getBoundingClientRect()
  const px = (event.clientX - rect.left) / rect.width
  const py = (event.clientY - rect.top) / rect.height
  if (!card._rx) {
    gsap.set(card, { transformPerspective: 700 })
    card._rx = gsap.quickTo(card, 'rotateX', { duration: 0.35, ease: 'power3.out' })
    card._ry = gsap.quickTo(card, 'rotateY', { duration: 0.35, ease: 'power3.out' })
  }
  card._rx((py - 0.5) * -12)
  card._ry((px - 0.5) * 12)
}

export function untiltCard(card) {
  if (!card) return
  gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5, ease: 'power3.out' })
}

export function pressCard(card, down) {
  if (!card || prefersReducedMotion) return
  gsap.to(card, { scale: down ? 0.97 : 1, duration: 0.12, ease: 'power3.out' })
}

let instance = null

export function setLenisInstance(lenis) {
  instance = lenis
}

export function stopLenis() {
  instance?.stop()
}

export function startLenis() {
  instance?.start()
}

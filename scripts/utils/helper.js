export function manualDelay (ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve(null), ms)
  })
}
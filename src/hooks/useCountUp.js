import { useEffect, useRef, useState } from 'react'

/**
 * Honour `prefers-reduced-motion: reduce` by skipping the animation and snapping
 * straight to the final value. (CSS already handles visual transitions; this
 * stops the rAF loop from spinning at all for users who opted out of motion.)
 */
function prefersReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** Animate a numeric counter from 0 to target when the returned ref enters the viewport. */
export function useCountUp(target, { duration = 1400, suffix = '', prefix = '' } = {}) {
  const ref = useRef(null)
  const [value, setValue] = useState('0' + suffix)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setValue(prefix + target + suffix)
      return
    }
    if (prefersReducedMotion()) {
      setValue(prefix + target + suffix)
      return
    }
    let raf
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const start = performance.now()
          const tick = (now) => {
            const t = Math.min(1, (now - start) / duration)
            // easeOutCubic
            const eased = 1 - Math.pow(1 - t, 3)
            const current = Math.round(target * eased)
            setValue(prefix + current + suffix)
            if (t < 1) raf = requestAnimationFrame(tick)
          }
          raf = requestAnimationFrame(tick)
          obs.unobserve(el)
        }
      },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => {
      obs.disconnect()
      if (raf) cancelAnimationFrame(raf)
    }
  }, [target, duration, prefix, suffix])

  return [ref, value]
}
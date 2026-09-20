import { useEffect, useRef } from 'react'

/**
 * Reveal a node once it enters the viewport.
 * Adds an `is-visible` class when intersecting (one-shot).
 * Pass `as` to wrap children in a custom element.
 */
export function useReveal({ threshold = 0.15, rootMargin = '0px 0px -80px 0px' } = {}) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      // SSR / very old browser fallback — show immediately
      if (el) el.classList.add('is-visible')
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          obs.unobserve(el)
        }
      },
      { threshold, rootMargin }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold, rootMargin])
  return ref
}
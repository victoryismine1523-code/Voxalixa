import React, { useEffect, useState } from 'react'

/** Top-of-page scroll progress bar. Tracks window.scrollY / (scrollHeight - clientHeight). */
export default function ScrollProgress() {
  const [p, setP] = useState(0)

  useEffect(() => {
    let raf = 0
    const update = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      setP(max > 0 ? Math.min(1, window.scrollY / max) : 0)
    }
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        update()
      })
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="vx-scroll-progress" aria-hidden="true">
      <div className="vx-scroll-progress__bar" style={{ transform: `scaleX(${p})` }} />
      <style>{`
        .vx-scroll-progress {
          position: fixed;
          top: 0; left: 0; right: 0;
          height: 3px;
          z-index: 1000;
          background: transparent;
          pointer-events: none;
        }
        .vx-scroll-progress__bar {
          height: 100%;
          width: 100%;
          background: linear-gradient(90deg, #7B3DFF 0%, #A855F7 100%);
          box-shadow: 0 0 12px rgba(168, 85, 247, 0.6);
          transform-origin: left center;
          transition: transform 0.12s ease-out;
        }
      `}</style>
    </div>
  )
}
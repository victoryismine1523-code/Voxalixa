import React, { useEffect, useState } from 'react'
import { ArrowUpOutlined } from '@ant-design/icons'

/** Floating back-to-top button. Fades in after the user scrolls past the fold. */
export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      setVisible(window.scrollY > 480)
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const goTop = () => {
    const reduced = typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    <button
      className={`vx-back-to-top ${visible ? 'is-visible' : ''}`}
      onClick={goTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUpOutlined />
      <style>{`
        .vx-back-to-top {
          position: fixed;
          right: 28px;
          bottom: 28px;
          width: 48px;
          height: 48px;
          border-radius: 999px;
          background: linear-gradient(135deg, #A855F7, #7B3DFF);
          color: #F8F8FF;
          border: 0;
          font-size: 18px;
          cursor: pointer;
          display: grid;
          place-items: center;
          z-index: 900;
          opacity: 0;
          transform: translateY(20px) scale(0.9);
          pointer-events: none;
          transition: opacity 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 10px 30px rgba(123, 61, 255, 0.35);
        }
        .vx-back-to-top.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }
        .vx-back-to-top:hover {
          transform: translateY(-3px) scale(1);
          box-shadow: 0 14px 36px rgba(123, 61, 255, 0.55);
        }
        .vx-back-to-top:active {
          transform: translateY(0) scale(0.95);
        }
        @media (max-width: 720px) {
          .vx-back-to-top { right: 16px; bottom: 16px; width: 44px; height: 44px; font-size: 16px; }
        }
      `}</style>
    </button>
  )
}
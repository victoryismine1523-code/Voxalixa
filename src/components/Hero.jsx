import React, { useEffect, useRef } from 'react'
import { Button } from 'antd'
import { ArrowRightOutlined, PlayCircleOutlined } from '@ant-design/icons'
import { brandGradient } from '../theme.js'
import { useCountUp } from '../hooks/useCountUp.js'
import { useModals } from './modals/ModalsProvider.jsx'

const stats = [
  { target: 100, suffix: '+', label: 'Happy Clients' },
  { target: 150, suffix: '+', label: 'Projects Completed' },
  { target: 5,   suffix: '\u2605', label: 'Client Satisfaction' }
]

function CounterStat({ target, suffix, label, delay }) {
  const [ref, value] = useCountUp(target, { duration: 1500, suffix })
  return (
    <div className="vx-hero__stat" ref={ref} style={{ transitionDelay: `${delay}ms` }}>
      <div className="vx-hero__stat-value">{value}</div>
      <div className="vx-hero__stat-label">{label}</div>
    </div>
  )
}

export default function Hero() {
  const bgRef = useRef(null)
  const { open } = useModals()

  const scrollToServices = () => {
    const el = document.getElementById('services')
    if (el) {
      const reduced = typeof window !== 'undefined' && window.matchMedia
        ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
        : false
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: reduced ? 'auto' : 'smooth' })
    }
  }

  // Parallax background — translate the image as the user scrolls.
  // Skip entirely under prefers-reduced-motion: reduce.
  useEffect(() => {
    const mq = typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)')
      : null
    if (mq && mq.matches) return
    const el = bgRef.current
    if (!el) return
    let raf = 0
    const update = () => {
      raf = 0
      const y = Math.min(window.scrollY * 0.35, 320)
      el.style.transform = `translate3d(0, ${y}px, 0) scale(${1 + Math.min(window.scrollY, 600) * 0.00018})`
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="vx-hero" id="top">
      <div className="vx-hero__bg" ref={bgRef}>
        <div className="vx-hero__bg-grad" />
        {/*
          LCP element. <picture> with WebP + JPEG fallback so modern browsers
          pull ~118 kB instead of 193 kB, and mobile gets a 33 kB variant.
          fetchpriority="high" + the <link rel="preload"> in index.html get it
          on screen fast; intrinsic width/height reserve the box (zero CLS).
          Note: actual image is 1536x768 (2:1), not 1920x1080 as previously
          declared — the mismatch was masked by object-fit: cover but wasted
          a bit of layout budget. Fixed.
        */}
        <picture>
          <source
            media="(max-width: 720px)"
            srcSet="/hero-bg-mobile.webp"
            type="image/webp"
          />
          <source
            srcSet="/hero-bg.webp"
            type="image/webp"
          />
          <img
            src="/hero-bg.jpeg"
            alt=""
            className="vx-hero__bg-img"
            width="1536"
            height="768"
            fetchpriority="high"
            decoding="async"
          />
        </picture>
      </div>

      <div className="vx-hero__container">
        <div className="vx-hero__left">
          <span className="eyebrow reveal is-visible" data-delay="0">Creative Digital Agency</span>

          <h1 className="vx-hero__title gradient-text vx-shimmer reveal is-visible" data-delay="1">Voxalixa</h1>

          <div className="vx-hero__flow reveal is-visible" data-delay="2">
            <span>IDEAS</span>
            <ArrowRightOutlined className="vx-hero__arrow" />
            <span>DESIGN</span>
            <ArrowRightOutlined className="vx-hero__arrow" />
            <span>DEVELOP</span>
            <ArrowRightOutlined className="vx-hero__arrow" />
            <span>GROW</span>
          </div>

          <p className="vx-hero__desc reveal is-visible" data-delay="3">
            We build stunning visuals, powerful websites, immersive games<br />
            and animated wallpapers — turning your ideas into digital reality.
          </p>

          <div className="vx-hero__cta reveal is-visible" data-delay="4">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              className="vx-cta-pill"
              onClick={scrollToServices}
            >
              Explore Our Services
            </Button>
            <Button
              size="large"
              icon={<PlayCircleOutlined />}
              className="vx-cta-ghost"
              onClick={() => open('video')}
            >
              Watch Intro
            </Button>
          </div>
        </div>

        <div className="vx-hero__right">
          <div className="vx-hero__vertical vx-float-slow">
            <span>MORE</span>
            <span>THAN</span>
            <span>DESIGN</span>
          </div>

          <div className="vx-hero__stats">
            {stats.map((s, i) => (
              <CounterStat key={s.label} {...s} delay={i * 120} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .vx-hero {
          position: relative;
          min-height: 100vh;
          padding: 140px 64px 64px;
          overflow: hidden;
          isolation: isolate;
        }
        .vx-hero__bg {
          position: absolute;
          inset: -10%;
          z-index: -1;
          overflow: hidden;
          will-change: transform;
        }
        .vx-hero__bg-img {
          position: absolute;
          inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center right;
          opacity: 0.95;
          will-change: transform;
        }
        .vx-hero__bg-grad {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(11,11,15,0.95) 0%, rgba(11,11,15,0.65) 45%, rgba(11,11,15,0.35) 75%, rgba(11,11,15,0.55) 100%),
            linear-gradient(180deg, rgba(11,11,15,0.4) 0%, rgba(11,11,15,0.85) 100%);
        }

        .vx-hero__container {
          max-width: 1440px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 40px;
          align-items: center;
          min-height: calc(100vh - 200px);
        }

        .vx-hero__title {
          font-size: 156px;
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.05em;
          margin: 12px 0 28px;
          text-shadow: 0 8px 60px rgba(123, 61, 255, 0.35);
        }
        /* Animated gradient shimmer sweeping the hero title */
        .vx-shimmer {
          background: linear-gradient(110deg,
            #C9B8FF 0%, #F8F8FF 25%, #A855F7 50%, #F8F8FF 75%, #7B3DFF 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          animation: vx-shimmer 7s linear infinite;
        }

        .vx-hero__flow {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 22px;
          font-weight: 700;
          letter-spacing: 0.18em;
          font-size: 15px;
          color: #F8F8FF;
        }
        .vx-hero__arrow {
          color: #A855F7;
          font-size: 13px;
        }

        .vx-hero__desc {
          font-size: 16px;
          line-height: 1.7;
          color: #C8C8D6;
          max-width: 520px;
          margin: 0 0 36px;
        }

        .vx-hero__cta {
          display: flex;
          gap: 14px;
          align-items: center;
        }
        .vx-cta-pill {
          padding: 0 28px !important;
          height: 52px !important;
          font-weight: 600 !important;
          animation: vx-glow 3.4s ease-in-out infinite;
        }
        .vx-cta-ghost {
          height: 52px !important;
          padding: 0 22px !important;
          background: rgba(255,255,255,0.04) !important;
          border: 1px solid rgba(255,255,255,0.18) !important;
          color: #F8F8FF !important;
          backdrop-filter: blur(8px);
          font-weight: 600 !important;
        }
        .vx-cta-ghost:hover {
          border-color: #A855F7 !important;
          color: #A855F7 !important;
          background: rgba(168, 85, 247, 0.08) !important;
        }

        .vx-hero__right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: space-between;
          gap: 36px;
          min-height: 100%;
        }
        .vx-hero__vertical {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.6em;
          color: rgba(255,255,255,0.85);
          text-align: right;
          display: flex;
          gap: 18px;
          margin-top: 6px;
        }
        .vx-float-slow {
          animation: vx-float-slow 6s ease-in-out infinite;
        }
        .vx-hero__stats {
          display: flex;
          gap: 28px;
          padding: 20px 24px;
          background: rgba(11, 11, 15, 0.55);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(123, 61, 255, 0.18);
          border-radius: 18px;
        }
        .vx-hero__stat {
          min-width: 110px;
          padding: 4px 8px;
          position: relative;
          transition: transform 0.3s ease;
        }
        .vx-hero__stat:hover {
          transform: translateY(-2px);
        }
        .vx-hero__stat + .vx-hero__stat {
          border-left: 1px solid rgba(123, 61, 255, 0.2);
          padding-left: 24px;
        }
        .vx-hero__stat-value {
          font-size: 32px;
          font-weight: 800;
          letter-spacing: -0.02em;
          background: ${brandGradient};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-variant-numeric: tabular-nums;
        }
        .vx-hero__stat-label {
          font-size: 12px;
          color: #9CA3AF;
          letter-spacing: 0.08em;
          margin-top: 2px;
        }

        @media (max-width: 1100px) {
          .vx-hero { padding: 120px 32px 48px; }
          .vx-hero__container { grid-template-columns: 1fr; }
          .vx-hero__title { font-size: 96px; }
          .vx-hero__right { align-items: flex-start; }
          .vx-hero__vertical { writing-mode: horizontal-tb; transform: none; flex-direction: row; }
        }
        @media (max-width: 640px) {
          .vx-hero { padding: 110px 20px 40px; }
          .vx-hero__title { font-size: 64px; }
          .vx-hero__flow { font-size: 13px; gap: 10px; flex-wrap: wrap; }
          .vx-hero__cta { flex-direction: column; align-items: stretch; }
          .vx-hero__stats { flex-wrap: wrap; gap: 16px; padding: 16px; }
          .vx-hero__stat + .vx-hero__stat { border-left: 0; padding-left: 8px; }
        }
      `}</style>
    </section>
  )
}
import React from 'react'
import { Button } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import { brandGradient } from '../theme.js'
import { useReveal } from '../hooks/useReveal.js'
import { useModals } from './modals/ModalsProvider.jsx'

const projects = [
  {
    title: 'Branding & Logo Design',
    tag: 'Visual identity for modern brands',
    copy: 'We built a complete brand system from the ground up — logo, color palette, typography and a full social kit that stays consistent across every touchpoint.',
    stats: [
      { value: '3 wks', label: 'Timeline' },
      { value: '40+', label: 'Assets' },
      { value: '100%', label: 'Source files' }
    ],
    hue: 'linear-gradient(135deg, #2A1B4D 0%, #4C2A8C 60%, #7B3DFF 100%)',
    accent: 'logo'
  },
  {
    title: 'Website Development',
    tag: 'Fast • Modern • Responsive',
    copy: 'A marketing site rebuilt for speed and conversion. React front-end, CMS-driven content, and a Lighthouse performance score we are happy to put our name on.',
    stats: [
      { value: '98', label: 'Lighthouse' },
      { value: '0.9s', label: 'Load time' },
      { value: '5', label: 'Pages' }
    ],
    hue: 'linear-gradient(135deg, #1B1F3D 0%, #2D3470 60%, #5B5EE0 100%)',
    accent: 'browser'
  },
  {
    title: 'Game Development',
    tag: '2D • 3D • PC & Mobile',
    copy: 'A 2D platformer with hand-painted environments, custom physics and controller support — shipped to desktop and mobile from a single codebase.',
    stats: [
      { value: '3', label: 'Platforms' },
      { value: '24', label: 'Levels' },
      { value: '60fps', label: 'Target' }
    ],
    hue: 'linear-gradient(135deg, #2D0B3D 0%, #5A1E7A 60%, #A855F7 100%)',
    accent: 'game'
  },
  {
    title: 'Animated Wallpapers',
    tag: 'Live • 4K • HD',
    copy: 'A pack of seamless looping wallpapers — cosmic scenes, particle fields and ambient gradients — exported in 4K for desktop, tablet and mobile.',
    stats: [
      { value: '4K', label: 'Resolution' },
      { value: '12', label: 'Scenes' },
      { value: 'Loop', label: 'Seamless' }
    ],
    hue: 'linear-gradient(135deg, #0B0B3D 0%, #2A1E6E 60%, #6E3DD8 100%)',
    accent: 'wall'
  }
]

export default function Portfolio() {
  const revealRef = useReveal()
  const { open } = useModals()
  return (
    <section className="section section--panel vx-portfolio" id="portfolio">
      <div className="split vx-reveal-parent" ref={revealRef}>
        <div className="vx-portfolio__intro">
          <span className="eyebrow reveal" data-delay="0">Portfolio</span>
          <h2 className="section-title reveal" data-delay="1">Our Latest Work</h2>
          <p className="section-sub reveal" data-delay="2">
            Creative designs, powerful websites, immersive games and dynamic wallpapers —
            crafted for brands that want to stand out.
          </p>
          <Button
            size="large"
            icon={<ArrowRightOutlined />}
            iconPosition="end"
            className="vx-view-all reveal"
            data-delay="3"
            onClick={() => open('project', projects[0])}
          >
            View Portfolio
          </Button>
        </div>

        <div className="vx-portfolio__grid">
          {projects.map((p, i) => (
            <article
              className="vx-portfolio-card reveal"
              data-delay={i + 1}
              key={p.title}
              onClick={() => open('project', p)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open('project', p) } }}
            >
              <div className="vx-portfolio-card__media" style={{ background: p.hue }}>
                <ProjectVisual variant={p.accent} />
                <div className="vx-portfolio-card__overlay">
                  <span>View Project</span>
                  <ArrowRightOutlined />
                </div>
              </div>
              <div className="vx-portfolio-card__body">
                <h3>{p.title}</h3>
                <p>{p.tag}</p>
                <ArrowRightOutlined className="vx-portfolio-card__arrow" />
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .vx-portfolio__intro { padding-top: 8px; }

        .vx-portfolio__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .vx-portfolio-card {
          background: linear-gradient(180deg, rgba(20,20,26,0.95) 0%, rgba(14,14,20,0.95) 100%);
          border: 1px solid rgba(123, 61, 255, 0.12);
          border-radius: 18px;
          overflow: hidden;
          transition: all 0.3s ease;
          position: relative;
          cursor: pointer;
          outline: none;
        }
        .vx-portfolio-card:focus-visible {
          border-color: #A855F7;
          box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.3);
        }
        .vx-portfolio-card:hover {
          border-color: rgba(168, 85, 247, 0.4);
          transform: translateY(-3px);
          box-shadow: 0 18px 40px -20px rgba(123, 61, 255, 0.5);
        }
        .vx-portfolio-card__media {
          aspect-ratio: 16 / 11;
          position: relative;
          overflow: hidden;
          display: grid;
          place-items: center;
        }
        .vx-portfolio-card__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(11,11,15,0) 0%, rgba(11,11,15,0.85) 100%);
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          padding: 16px;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          color: #F8F8FF;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .vx-portfolio-card:hover .vx-portfolio-card__overlay { opacity: 1; }

        .vx-portfolio-card__body {
          padding: 18px 20px;
        }
        .vx-portfolio-card__body h3 {
          font-size: 16px;
          font-weight: 700;
          margin: 0 0 4px;
          padding-right: 32px;
          color: #F8F8FF;
          letter-spacing: -0.01em;
        }
        .vx-portfolio-card__body p {
          font-size: 13px;
          color: #9CA3AF;
          margin: 0;
          padding-right: 32px;
        }
        .vx-portfolio-card__arrow {
          position: absolute;
          right: 20px;
          bottom: 18px;
          color: #9CA3AF;
          font-size: 14px;
          transition: all 0.2s;
        }
        .vx-portfolio-card:hover .vx-portfolio-card__arrow {
          color: #A855F7;
          transform: translateX(3px);
        }

        @media (max-width: 720px) {
          .vx-portfolio__grid { grid-template-columns: 1fr; }
        }

        /* ---- In-card visuals ---- */
        .vx-vis {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px;
          overflow: hidden;
        }

        /* Logo card */
        .vx-vis--logo {
          color: #fff;
        }
        .vx-vis__logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 800;
          font-size: 28px;
          letter-spacing: -0.02em;
          text-shadow: 0 4px 30px rgba(168, 85, 247, 0.5);
        }
        .vx-vis__logo-mark {
          width: 38px; height: 38px;
          border-radius: 10px;
          display: grid; place-items: center;
          background: linear-gradient(135deg, #A855F7, #7B3DFF);
          color: #fff;
          font-weight: 800;
          font-size: 22px;
          box-shadow: 0 6px 24px rgba(123, 61, 255, 0.6);
        }
        .vx-vis__logo-word {
          background: linear-gradient(180deg, #FFFFFF 0%, #C9B8FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .vx-vis__sub {
          margin-top: 8px;
          font-size: 11px;
          letter-spacing: 0.4em;
          color: rgba(255,255,255,0.85);
          font-weight: 600;
        }
        .vx-vis__sparkle {
          position: absolute;
          width: 4px; height: 4px;
          border-radius: 50%;
          background: rgba(255,255,255,0.85);
          box-shadow: 0 0 12px rgba(255,255,255,0.9);
          animation: vx-pulse 2.4s ease-in-out infinite;
        }

        /* Browser card */
        .vx-vis--browser {
          background: rgba(0,0,0,0.35);
          padding: 14px;
          justify-content: stretch;
        }
        .vx-vis__chrome {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          background: rgba(255,255,255,0.06);
          border-radius: 8px 8px 0 0;
        }
        .vx-vis__chrome > span:not(.vx-vis__url) {
          width: 10px; height: 10px;
          border-radius: 50%;
          background: rgba(255,255,255,0.18);
        }
        .vx-vis__chrome > span:nth-child(1) { background: #FF5F57; }
        .vx-vis__chrome > span:nth-child(2) { background: #FFBD2E; }
        .vx-vis__chrome > span:nth-child(3) { background: #28C840; }
        .vx-vis__url {
          margin-left: 12px;
          flex: 1;
          font-size: 10px;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.6);
          padding: 4px 12px;
          background: rgba(255,255,255,0.06);
          border-radius: 6px;
          text-align: center;
        }
        .vx-vis__chrome-body {
          flex: 1;
          padding: 18px;
          background: linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
          border-radius: 0 0 8px 8px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .vx-vis__chrome-nav {
          display: flex; gap: 6px;
        }
        .vx-vis__pill {
          width: 60px; height: 8px;
          border-radius: 4px;
          background: rgba(255,255,255,0.18);
        }
        .vx-vis__chrome-hero {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .vx-vis__chrome-bar {
          height: 10px;
          border-radius: 4px;
          background: linear-gradient(90deg, rgba(255,255,255,0.4), rgba(255,255,255,0.1));
        }
        .vx-vis__chrome-cta {
          height: 16px;
          width: 90px;
          border-radius: 8px;
          background: linear-gradient(135deg, #A855F7, #7B3DFF);
          margin-top: 4px;
          box-shadow: 0 4px 16px rgba(123, 61, 255, 0.45);
        }
        .vx-vis__chrome-grid {
          display: flex; gap: 8px;
        }
        .vx-vis__chrome-grid > span {
          flex: 1;
          height: 36px;
          border-radius: 6px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.06);
        }

        /* Game card */
        .vx-vis--game {
          flex-direction: row;
          gap: 16px;
          padding: 0;
        }
        .vx-vis__pad {
          width: 86px; height: 86px;
          background: rgba(0,0,0,0.35);
          border: 1px solid rgba(168, 85, 247, 0.35);
          border-radius: 18px;
          position: relative;
        }
        .vx-vis__pad--r { transform: rotate(180deg); }
        .vx-vis__btn {
          position: absolute;
          width: 12px; height: 12px;
          border-radius: 50%;
          background: linear-gradient(135deg, #A855F7, #7B3DFF);
          box-shadow: 0 2px 8px rgba(168, 85, 247, 0.5);
        }
        .vx-vis__pad .vx-vis__btn:nth-of-type(1) { top: 14px; left: 14px; }
        .vx-vis__pad .vx-vis__btn:nth-of-type(2) { top: 14px; right: 14px; }
        .vx-vis__stick {
          position: absolute;
          bottom: 14px; left: 50%;
          transform: translateX(-50%);
          width: 26px; height: 26px;
          border-radius: 50%;
          background: radial-gradient(circle at 40% 40%, #C9B8FF, #7B3DFF);
          box-shadow: 0 4px 14px rgba(168, 85, 247, 0.5);
        }
        .vx-vis__game-tag {
          position: absolute;
          bottom: 18px;
          font-size: 11px;
          letter-spacing: 0.4em;
          color: rgba(255,255,255,0.85);
          font-weight: 700;
        }

        /* Wallpaper card */
        .vx-vis--wall {
          background: radial-gradient(circle at 50% 35%, rgba(123,61,255,0.55) 0%, rgba(11,11,15,0.95) 65%);
        }
        .vx-vis__orb {
          position: absolute;
          width: 140px; height: 140px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #C9B8FF 0%, #7B3DFF 50%, #2A1B4D 100%);
          box-shadow: 0 0 60px rgba(168, 85, 247, 0.5);
          top: 20%; left: 50%;
          transform: translateX(-50%);
          animation: vx-float 6s ease-in-out infinite;
        }
        .vx-vis__orb--2 {
          width: 80px; height: 80px;
          background: radial-gradient(circle at 30% 30%, #FFFFFF 0%, #A855F7 60%, #2A1B4D 100%);
          top: auto;
          bottom: 18%;
          left: 28%;
          animation-delay: -3s;
          opacity: 0.85;
        }
        .vx-vis__star {
          position: absolute;
          width: 3px; height: 3px;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 0 6px #fff;
          animation: vx-twinkle 2s ease-in-out infinite;
        }
        .vx-vis__star--s { top: 25%; right: 22%; width: 2px; height: 2px; animation-delay: -0.6s; }
        .vx-vis__star--t { top: 60%; right: 14%; animation-delay: -1.2s; }
        .vx-vis__star--f { top: 18%; left: 24%; animation-delay: -1.8s; }

        @keyframes vx-pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
        }
        @keyframes vx-float {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-8px); }
        }
        @keyframes vx-twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  )
}

/* In-card visuals (pure CSS, no external assets) */
function ProjectVisual({ variant }) {
  if (variant === 'logo') {
    return (
      <div className="vx-vis vx-vis--logo">
        <span className="vx-vis__sparkle" style={{ top: '20%', left: '18%' }} />
        <span className="vx-vis__sparkle" style={{ top: '70%', right: '22%' }} />
        <div className="vx-vis__logo">
          <span className="vx-vis__logo-mark">V</span>
          <span className="vx-vis__logo-word">Voxalixa</span>
        </div>
        <div className="vx-vis__sub">IDEAS · DESIGN · DIGITAL</div>
      </div>
    )
  }
  if (variant === 'browser') {
    return (
      <div className="vx-vis vx-vis--browser">
        <div className="vx-vis__chrome">
          <span /><span /><span />
          <div className="vx-vis__url">voxalixa.io</div>
        </div>
        <div className="vx-vis__chrome-body">
          <div className="vx-vis__chrome-nav">
            <span className="vx-vis__pill" />
            <span className="vx-vis__pill" />
          </div>
          <div className="vx-vis__chrome-hero">
            <span className="vx-vis__chrome-bar" style={{ width: '70%' }} />
            <span className="vx-vis__chrome-bar" style={{ width: '50%' }} />
            <span className="vx-vis__chrome-cta" />
          </div>
          <div className="vx-vis__chrome-grid">
            <span /><span /><span />
          </div>
        </div>
      </div>
    )
  }
  if (variant === 'game') {
    return (
      <div className="vx-vis vx-vis--game">
        <div className="vx-vis__pad">
          <span className="vx-vis__btn" />
          <span className="vx-vis__btn" />
          <div className="vx-vis__stick" />
        </div>
        <div className="vx-vis__pad vx-vis__pad--r">
          <span className="vx-vis__btn" />
          <span className="vx-vis__btn" />
          <div className="vx-vis__stick" />
        </div>
        <div className="vx-vis__game-tag">2D · 3D</div>
      </div>
    )
  }
  // wall
  return (
    <div className="vx-vis vx-vis--wall">
      <div className="vx-vis__orb" />
      <div className="vx-vis__orb vx-vis__orb--2" />
      <div className="vx-vis__star" />
      <div className="vx-vis__star vx-vis__star--s" />
      <div className="vx-vis__star vx-vis__star--t" />
      <div className="vx-vis__star vx-vis__star--f" />
    </div>
  )
}
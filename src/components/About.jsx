import React from 'react'
import { Button } from 'antd'
import { ArrowRightOutlined, BulbOutlined, ThunderboltOutlined, TeamOutlined, TrophyOutlined } from '@ant-design/icons'
import { useReveal } from '../hooks/useReveal.js'
import { useModals } from './modals/ModalsProvider.jsx'

const values = [
  {
    icon: <BulbOutlined />,
    title: 'Creative Excellence',
    desc: 'Award-worthy work that turns heads and tells stories.'
  },
  {
    icon: <ThunderboltOutlined />,
    title: 'Fast Delivery',
    desc: 'Tight timelines without cutting corners. Ship in days, not months.'
  },
  {
    icon: <TeamOutlined />,
    title: 'Client-Focused',
    desc: 'You’re a partner, not a ticket. We obsess over your goals.'
  },
  {
    icon: <TrophyOutlined />,
    title: 'Quality First',
    desc: 'Pixel-perfect. Type-tested. Performance-checked. Always.'
  }
]

export default function About() {
  const revealRef = useReveal()
  const { open } = useModals()
  return (
    <section className="section section--dark vx-about" id="about">
      <div className="split vx-reveal-parent" ref={revealRef}>
        <div className="vx-about__intro">
          <span className="eyebrow reveal" data-delay="0">About Us</span>
          <h2 className="section-title reveal" data-delay="1">Who We Are</h2>
          <p className="section-sub reveal" data-delay="2">
            Voxalixa is a collective of designers, developers and dreamers crafting
            digital experiences that move people. From brand systems to immersive
            games, we turn ambitious ideas into reality.
          </p>
          <Button
            size="large"
            icon={<ArrowRightOutlined />}
            iconPosition="end"
            className="vx-view-all reveal"
            data-delay="3"
            onClick={() => open('getStarted')}
          >
            Our Story
          </Button>
        </div>

        <div className="vx-about__grid">
          {values.map((v, i) => (
            <div className="vx-about-card reveal" data-delay={i + 1} key={v.title}>
              <div className="vx-about-card__icon">{v.icon}</div>
              <h3 className="vx-about-card__title">{v.title}</h3>
              <p className="vx-about-card__desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .vx-about__intro { padding-top: 8px; }
        .vx-about__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }
        .vx-about-card {
          background: linear-gradient(180deg, rgba(20,20,26,0.95) 0%, rgba(14,14,20,0.95) 100%);
          border: 1px solid rgba(123, 61, 255, 0.12);
          border-radius: 18px;
          padding: 26px 24px;
          transition: all 0.3s ease;
          min-height: 200px;
          display: flex;
          flex-direction: column;
        }
        .vx-about-card:hover {
          border-color: rgba(168, 85, 247, 0.4);
          transform: translateY(-3px);
          box-shadow: 0 18px 40px -20px rgba(123, 61, 255, 0.5);
        }
        .vx-about-card__icon {
          width: 52px; height: 52px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.18) 0%, rgba(123, 61, 255, 0.12) 100%);
          border: 1px solid rgba(168, 85, 247, 0.25);
          color: #A855F7;
          display: grid; place-items: center;
          font-size: 22px;
          margin-bottom: 20px;
        }
        .vx-about-card__title {
          font-size: 20px;
          font-weight: 700;
          margin: 0 0 8px;
          letter-spacing: -0.01em;
          color: #F8F8FF;
        }
        .vx-about-card__desc {
          font-size: 14px;
          line-height: 1.6;
          color: #9CA3AF;
          margin: 0;
        }
        @media (max-width: 720px) {
          .vx-about__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
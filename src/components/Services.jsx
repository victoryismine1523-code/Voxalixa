import React from 'react'
import { Button } from 'antd'
import { ArrowRightOutlined, EditOutlined, CodeOutlined, DesktopOutlined, PictureOutlined } from '@ant-design/icons'
import { useReveal } from '../hooks/useReveal.js'
import { useModals } from './modals/ModalsProvider.jsx'

const services = [
  {
    icon: <EditOutlined />,
    title: 'Graphic Design',
    desc: 'Logos, posters, social media posts, branding & more.',
    deliverables: [
      'Logo design & brand marks',
      'Complete brand / visual identity kit',
      'Social media post templates & banners',
      'Posters, flyers & print-ready artwork',
      'Editable source files (AI, PSD, Figma)'
    ],
    timeline: '3 — 7 days',
    starting: '$499'
  },
  {
    icon: <DesktopOutlined />,
    title: 'Game Development',
    desc: '2D/3D games, mobile & PC, custom game solutions.',
    deliverables: [
      '2D & 3D gameplay prototypes',
      'Full game builds for PC, mobile or web',
      'Custom characters, levels & environments',
      'Gameplay programming & physics',
      'Publishing-ready builds & store assets'
    ],
    timeline: '4 — 12 weeks',
    starting: '$2,500'
  },
  {
    icon: <CodeOutlined />,
    title: 'Website Development',
    desc: 'Modern, responsive & SEO friendly websites.',
    deliverables: [
      'Responsive marketing & landing pages',
      'Modern React / Next.js front-end builds',
      'CMS integration & content setup',
      'SEO, analytics & performance tuning',
      'Hosting, deployment & handover docs'
    ],
    timeline: '2 — 5 weeks',
    starting: '$1,299'
  },
  {
    icon: <PictureOutlined />,
    title: 'Animated Wallpapers',
    desc: 'Stunning animated wallpapers for your screen.',
    deliverables: [
      'Live animated desktop wallpapers',
      '4K & HD resolutions for any screen',
      'Loop-ready seamless animations',
      'Mobile & tablet variants',
      'Wallpaper Engine & video exports'
    ],
    timeline: '2 — 6 days',
    starting: '$299'
  }
]

export default function Services() {
  const revealRef = useReveal()
  const { open } = useModals()
  return (
    <section className="section section--dark vx-services" id="services">
      <div className="split vx-reveal-parent" ref={revealRef}>
        <div className="vx-services__intro">
          <span className="eyebrow reveal" data-delay="0">Our Services</span>
          <h2 className="section-title reveal" data-delay="1">What We Do</h2>
          <p className="section-sub reveal" data-delay="2">
            End-to-end digital solutions for your brand, business or personal projects.
            From concept to launch — we handle the entire creative pipeline.
          </p>
          <Button
            size="large"
            icon={<ArrowRightOutlined />}
            iconPosition="end"
            className="vx-view-all reveal"
            data-delay="3"
            onClick={() => open('getStarted', { interest: 'Graphic Design' })}
          >
            View All Services
          </Button>
        </div>

        <div className="vx-services__grid">
          {services.map((s, i) => (
            <div
              className="vx-service-card reveal"
              data-delay={i + 1}
              key={s.title}
              onClick={() => open('service', s)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open('service', s) } }}
            >
              <div className="vx-service-card__icon">{s.icon}</div>
              <h3 className="vx-service-card__title">{s.title}</h3>
              <p className="vx-service-card__desc">{s.desc}</p>
              <a className="vx-service-card__more">
                <ArrowRightOutlined />
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .vx-services__intro { padding-top: 8px; }

        .vx-view-all {
          height: 50px !important;
          padding: 0 26px !important;
          background: transparent !important;
          border: 1px solid rgba(123, 61, 255, 0.5) !important;
          color: #F8F8FF !important;
          border-radius: 999px !important;
          font-weight: 600 !important;
        }
        .vx-view-all:hover {
          border-color: #A855F7 !important;
          background: rgba(168, 85, 247, 0.08) !important;
          color: #A855F7 !important;
        }

        .vx-services__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .vx-service-card {
          background: linear-gradient(180deg, rgba(20,20,26,0.95) 0%, rgba(14,14,20,0.95) 100%);
          border: 1px solid rgba(123, 61, 255, 0.12);
          border-radius: 18px;
          padding: 28px 26px;
          position: relative;
          transition: all 0.3s ease;
          min-height: 220px;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          outline: none;
        }
        .vx-service-card:focus-visible {
          border-color: #A855F7;
          box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.3);
        }
        .vx-service-card:hover {
          border-color: rgba(168, 85, 247, 0.4);
          transform: translateY(-3px);
          box-shadow: 0 18px 40px -20px rgba(123, 61, 255, 0.5);
        }
        .vx-service-card__icon {
          width: 52px; height: 52px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.18) 0%, rgba(123, 61, 255, 0.12) 100%);
          border: 1px solid rgba(168, 85, 247, 0.25);
          color: #A855F7;
          display: grid; place-items: center;
          font-size: 22px;
          margin-bottom: 22px;
        }
        .vx-service-card__title {
          font-size: 22px;
          font-weight: 700;
          margin: 0 0 10px;
          letter-spacing: -0.01em;
          color: #F8F8FF;
        }
        .vx-service-card__desc {
          font-size: 14px;
          line-height: 1.6;
          color: #9CA3AF;
          margin: 0;
          flex: 1;
        }
        .vx-service-card__more {
          margin-top: 18px;
          align-self: flex-start;
          width: 36px; height: 36px;
          border-radius: 10px;
          background: rgba(168, 85, 247, 0.1);
          color: #A855F7;
          display: grid; place-items: center;
          transition: all 0.2s;
          font-size: 13px;
        }
        .vx-service-card:hover .vx-service-card__more {
          background: linear-gradient(135deg, #A855F7, #7B3DFF);
          color: #fff;
          transform: translateX(2px);
        }

        @media (max-width: 720px) {
          .vx-services__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
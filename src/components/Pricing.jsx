import React from 'react'
import { Button } from 'antd'
import { ArrowRightOutlined, CheckCircleFilled, StarFilled } from '@ant-design/icons'
import { useReveal } from '../hooks/useReveal.js'
import { useModals } from './modals/ModalsProvider.jsx'

const plans = [
  {
    name: 'Starter',
    price: '$499',
    cadence: 'one-time',
    blurb: 'For individuals & small projects.',
    features: [
      '1 design concept',
      '2 revision rounds',
      'Basic support',
      '5-7 day delivery',
      'Source files included'
    ],
    featured: false,
    cta: 'Get Started'
  },
  {
    name: 'Professional',
    price: '$1,299',
    cadence: 'per project',
    blurb: 'For growing brands that need impact.',
    features: [
      '3 design concepts',
      'Unlimited revisions',
      'Priority support',
      '3-5 day delivery',
      'Brand guidelines included',
      'Multi-platform delivery'
    ],
    featured: true,
    cta: 'Choose Professional'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: 'tailored to scope',
    blurb: 'For large teams & complex builds.',
    features: [
      'Dedicated creative team',
      'Custom workflow',
      '24 / 7 priority support',
      'Ongoing maintenance',
      'Full brand system',
      'SLA & NDA on request'
    ],
    featured: false,
    cta: 'Contact Sales'
  }
]

export default function Pricing() {
  const headRef = useReveal()
  const gridRef = useReveal()
  const { open } = useModals()
  return (
    <section className="section section--panel vx-pricing" id="pricing">
      <div className="vx-pricing__head vx-reveal-parent" ref={headRef}>
        <span className="eyebrow reveal" data-delay="0">Pricing</span>
        <h2 className="section-title reveal" data-delay="1">Simple, Transparent Pricing</h2>
        <p className="vx-pricing__sub reveal" data-delay="2">
          Pick a plan that fits, or talk to us for a custom quote.
          Every tier includes the same level of craft.
        </p>
      </div>

      <div className="vx-pricing__grid vx-reveal-parent" ref={gridRef}>
        {plans.map((p, i) => (
          <div
            className={`vx-price-card reveal ${p.featured ? 'vx-price-card--featured' : ''}`}
            data-delay={i + 1}
            key={p.name}
          >
            {p.featured && (
              <div className="vx-price-card__badge">
                <StarFilled /> Most Popular
              </div>
            )}
            <h3 className="vx-price-card__name">{p.name}</h3>
            <p className="vx-price-card__blurb">{p.blurb}</p>

            <div className="vx-price-card__price">
              <span className="vx-price-card__amount">{p.price}</span>
              <span className="vx-price-card__cadence">{p.cadence}</span>
            </div>

            <ul className="vx-price-card__features">
              {p.features.map(f => (
                <li key={f}>
                  <CheckCircleFilled className="vx-price-card__check" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <Button
              type={p.featured ? 'primary' : 'default'}
              size="large"
              block
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              className="vx-price-card__cta"
              onClick={() => open('getStarted', { plan: p.name.toLowerCase() })}
            >
              {p.cta}
            </Button>
          </div>
        ))}
      </div>

      <style>{`
        .vx-pricing__head {
          max-width: 720px;
          margin: 0 auto 56px;
          text-align: center;
        }
        .vx-pricing__sub {
          font-size: 17px;
          line-height: 1.6;
          color: #9CA3AF;
          max-width: 560px;
          margin: 0 auto;
          font-weight: 400;
        }
        .vx-pricing__grid {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          align-items: stretch;
        }
        .vx-price-card {
          position: relative;
          background: linear-gradient(180deg, rgba(20,20,26,0.95) 0%, rgba(14,14,20,0.95) 100%);
          border: 1px solid rgba(123, 61, 255, 0.14);
          border-radius: 22px;
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
        }
        .vx-price-card:hover {
          transform: translateY(-4px);
          border-color: rgba(168, 85, 247, 0.4);
          box-shadow: 0 20px 50px -25px rgba(123, 61, 255, 0.55);
        }
        .vx-price-card--featured {
          border-color: rgba(168, 85, 247, 0.55);
          background:
            radial-gradient(120% 100% at 50% 0%, rgba(123, 61, 255, 0.18) 0%, rgba(20,20,26,0.95) 60%),
            linear-gradient(180deg, rgba(20,20,26,0.95) 0%, rgba(14,14,20,0.95) 100%);
          box-shadow: 0 24px 60px -28px rgba(123, 61, 255, 0.65);
          transform: translateY(-6px);
        }
        .vx-price-card--featured:hover {
          transform: translateY(-10px);
        }
        .vx-price-card__badge {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #A855F7, #7B3DFF);
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 8px 20px rgba(123, 61, 255, 0.5);
        }
        .vx-price-card__name {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #A855F7;
          margin: 0 0 8px;
        }
        .vx-price-card__blurb {
          font-size: 14px;
          color: #9CA3AF;
          margin: 0 0 24px;
        }
        .vx-price-card__price {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 24px;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(123, 61, 255, 0.12);
        }
        .vx-price-card__amount {
          font-size: 44px;
          font-weight: 800;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, #FFFFFF 0%, #C9B8FF 50%, #A855F7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .vx-price-card__cadence {
          font-size: 13px;
          color: #9CA3AF;
        }
        .vx-price-card__features {
          list-style: none;
          padding: 0;
          margin: 0 0 28px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }
        .vx-price-card__features li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: #C8C8D6;
        }
        .vx-price-card__check {
          color: #A855F7;
          font-size: 14px;
        }
        .vx-price-card__cta {
          height: 48px !important;
          font-weight: 600 !important;
          border-radius: 999px !important;
        }
        .vx-price-card:not(.vx-price-card--featured) .vx-price-card__cta {
          background: transparent !important;
          border: 1px solid rgba(123, 61, 255, 0.5) !important;
          color: #F8F8FF !important;
        }
        .vx-price-card:not(.vx-price-card--featured) .vx-price-card__cta:hover {
          border-color: #A855F7 !important;
          background: rgba(168, 85, 247, 0.08) !important;
          color: #A855F7 !important;
        }
        @media (max-width: 960px) {
          .vx-pricing__grid { grid-template-columns: 1fr; max-width: 460px; }
          .vx-price-card--featured { transform: none; }
        }
      `}</style>
    </section>
  )
}
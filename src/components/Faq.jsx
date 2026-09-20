import React from 'react'
import { Button } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import { useReveal } from '../hooks/useReveal.js'
import { useModals } from './modals/ModalsProvider.jsx'

/**
 * FAQ section.
 *
 * IMPORTANT: the question/answer strings below MUST stay byte-identical to the
 * FAQPage JSON-LD block in index.html. Google cross-checks visible content
 * against structured data and will discount (or penalise) mismatched FAQ markup.
 */
const faqs = [
  {
    q: 'What services does Voxalixa offer?',
    a: 'Voxalixa offers graphic design and brand identity, website design and development, game development, and animated or live wallpapers. Every engagement includes source files and a structured handover.'
  },
  {
    q: 'How much does a project cost?',
    a: 'Starter projects begin at $499 one-time, the Professional tier is $1,299 per project, and Enterprise engagements are quoted to scope. Every tier includes the same level of craft.'
  },
  {
    q: 'How long does a project take?',
    a: 'Most design engagements deliver in 5 to 7 days with two revision rounds. Larger website and game builds run 3 to 6 weeks depending on scope. Timelines are agreed before work starts.'
  },
  {
    q: 'Do you work with clients outside India?',
    a: 'Yes. Voxalixa is based in Indiranagar, Bengaluru and works with clients across India, the United States, the United Kingdom, the UAE and worldwide, remotely and asynchronously.'
  },
  {
    q: 'Do I own the final files?',
    a: 'Yes. You receive full ownership of all deliverables including source files, exports and any brand guidelines produced during the project.'
  },
  {
    q: 'How do I start a project with Voxalixa?',
    a: 'Send a short brief through the contact form or the Get Started popup. You get a reply within 24 hours with ideas, a timeline and a clear next step.'
  }
]

export default function Faq() {
  const revealRef = useReveal()
  const { open } = useModals()

  return (
    <section className="section section--panel vx-faq" id="faq">
      <div className="vx-faq__inner vx-reveal-parent" ref={revealRef}>
        <div className="vx-faq__head">
          <span className="eyebrow reveal" data-delay="0">FAQ</span>
          <h2 className="section-title reveal" data-delay="1">
            Questions, answered
          </h2>
          <p className="vx-faq__sub reveal" data-delay="2">
            Everything people usually ask before starting a project. Still unsure?
            Ask us directly — we answer within 24 hours.
          </p>
        </div>

        {/* Native <details> keeps this crawlable and accessible with zero JS cost,
            and the content stays in the DOM for Google to match against FAQPage. */}
        <div className="vx-faq__list">
          {faqs.map((item, i) => (
            <details key={item.q} className="vx-faq__item reveal" data-delay={(i % 4) + 3}>
              <summary className="vx-faq__q">
                <h3>{item.q}</h3>
                <span className="vx-faq__chevron" aria-hidden="true">+</span>
              </summary>
              <div className="vx-faq__a">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="vx-faq__cta reveal" data-delay="5">
          <Button
            type="primary"
            size="large"
            icon={<ArrowRightOutlined />}
            iconPosition="end"
            className="vx-cta-pill"
            onClick={() => open('getStarted')}
          >
            Ask Us Anything
          </Button>
        </div>
      </div>

      <style>{`
        .vx-faq__inner { max-width: 900px; margin: 0 auto; }
        .vx-faq__head { text-align: center; margin-bottom: 44px; }
        .vx-faq__sub {
          font-size: 17px;
          line-height: 1.6;
          color: #9CA3AF;
          max-width: 560px;
          margin: 12px auto 0;
        }
        .vx-faq__list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .vx-faq__item {
          background: linear-gradient(180deg, rgba(20,20,26,0.95) 0%, rgba(14,14,20,0.95) 100%);
          border: 1px solid rgba(123, 61, 255, 0.14);
          border-radius: 16px;
          overflow: hidden;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .vx-faq__item[open] {
          border-color: rgba(168, 85, 247, 0.45);
        }
        .vx-faq__item:hover { border-color: rgba(168, 85, 247, 0.3); }
        .vx-faq__q {
          list-style: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 20px 24px;
          user-select: none;
        }
        .vx-faq__q::-webkit-details-marker { display: none; }
        .vx-faq__q h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
          color: #F8F8FF;
          letter-spacing: -0.01em;
          line-height: 1.4;
        }
        .vx-faq__chevron {
          flex-shrink: 0;
          width: 26px; height: 26px;
          border-radius: 8px;
          display: grid;
          place-items: center;
          background: rgba(123, 61, 255, 0.12);
          border: 1px solid rgba(123, 61, 255, 0.28);
          color: #A855F7;
          font-size: 17px;
          font-weight: 700;
          line-height: 1;
          transition: transform 0.2s ease;
        }
        .vx-faq__item[open] .vx-faq__chevron { transform: rotate(45deg); }
        .vx-faq__a {
          padding: 0 24px 22px;
        }
        .vx-faq__a p {
          margin: 0;
          font-size: 15px;
          line-height: 1.7;
          color: #9CA3AF;
          max-width: 720px;
        }
        .vx-faq__cta {
          margin-top: 36px;
          text-align: center;
        }
        @media (max-width: 720px) {
          .vx-faq__q { padding: 16px 18px; }
          .vx-faq__q h3 { font-size: 15px; }
          .vx-faq__a { padding: 0 18px 18px; }
        }
      `}</style>
    </section>
  )
}
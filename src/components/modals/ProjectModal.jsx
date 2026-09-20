import React from 'react'
import { Modal } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import { useModals } from './ModalsProvider.jsx'

export default function ProjectModal({ open, payload, onClose }) {
  const { open: openOther } = useModals()
  if (!payload) return null

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={780}
      centered
      destroyOnClose
      className="vx-modal vx-modal--project"
      title={null}
      closable={false}
    >
      <div className="vx-modal__inner">
        <button className="vx-modal__close" onClick={onClose} aria-label="Close">×</button>
        <div className="vx-modal__media" style={{ background: payload.hue }}>
          <ProjectPreview variant={payload.accent} />
        </div>
        <div className="vx-modal__body">
          <span className="vx-modal__tag">{payload.tag}</span>
          <h2 className="vx-modal__title">{payload.title}</h2>
          <p className="vx-modal__copy">{payload.copy || payload.tag}</p>

          <div className="vx-modal__stats">
            {(payload.stats || []).map(s => (
              <div className="vx-modal__stat" key={s.label}>
                <div className="vx-modal__stat-value">{s.value}</div>
                <div className="vx-modal__stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          <button
            className="vx-modal__cta"
            onClick={() => { onClose(); setTimeout(() => openOther('getStarted', { interest: payload.title }), 200) }}
          >
            Start a similar project <ArrowRightOutlined />
          </button>
        </div>
      </div>

      <style>{`
        .vx-modal--project .ant-modal-content {
          background: linear-gradient(180deg, rgba(20,20,26,0.98) 0%, rgba(14,14,20,0.98) 100%) !important;
          border: 1px solid rgba(123, 61, 255, 0.25) !important;
          border-radius: 22px !important;
          padding: 0 !important;
          box-shadow: 0 30px 80px -20px rgba(123, 61, 255, 0.45) !important;
          overflow: hidden;
        }
        .vx-modal--project .ant-modal-body { padding: 0 !important; }
        .vx-modal__inner {
          display: grid;
          grid-template-columns: 0.9fr 1fr;
          position: relative;
          min-height: 380px;
        }
        .vx-modal__close {
          position: absolute;
          top: 14px; right: 16px;
          width: 32px; height: 32px;
          border-radius: 10px;
          border: 1px solid rgba(123, 61, 255, 0.3);
          background: rgba(11, 11, 15, 0.75);
          color: #F8F8FF;
          font-size: 20px;
          line-height: 1;
          cursor: pointer;
          z-index: 5;
          transition: all 0.2s;
        }
        .vx-modal__close:hover {
          background: rgba(123, 61, 255, 0.4);
        }
        .vx-modal__media {
          position: relative;
          display: grid;
          place-items: center;
          overflow: hidden;
          min-height: 100%;
        }
        .vx-modal__body {
          padding: 36px 32px 32px;
          display: flex;
          flex-direction: column;
        }
        .vx-modal__tag {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #A855F7;
          margin-bottom: 12px;
        }
        .vx-modal__title {
          font-size: 28px;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin: 0 0 12px;
          color: #F8F8FF;
        }
        .vx-modal__copy {
          font-size: 14px;
          line-height: 1.7;
          color: #9CA3AF;
          margin: 0 0 22px;
        }
        .vx-modal__stats {
          display: flex;
          gap: 18px;
          margin-bottom: 22px;
        }
        .vx-modal__stat {
          padding: 12px 16px;
          background: rgba(11, 11, 15, 0.5);
          border: 1px solid rgba(123, 61, 255, 0.18);
          border-radius: 10px;
        }
        .vx-modal__stat-value {
          font-size: 18px;
          font-weight: 800;
          background: linear-gradient(135deg, #A855F7, #7B3DFF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .vx-modal__stat-label {
          font-size: 11px;
          color: #9CA3AF;
          letter-spacing: 0.08em;
          margin-top: 2px;
        }
        .vx-modal__cta {
          margin-top: auto;
          height: 48px;
          background: linear-gradient(135deg, #A855F7, #7B3DFF);
          color: #fff;
          border: 0;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 10px 30px rgba(123, 61, 255, 0.4);
          transition: all 0.2s;
        }
        .vx-modal__cta:hover { transform: translateY(-2px); box-shadow: 0 14px 36px rgba(123, 61, 255, 0.55); }
        @media (max-width: 720px) {
          .vx-modal__inner { grid-template-columns: 1fr; }
          .vx-modal__media { min-height: 220px; }
          .vx-modal__body { padding: 24px 22px; }
          .vx-modal__title { font-size: 22px; }
        }
      `}</style>
    </Modal>
  )
}

/* Inline visuals matching the portfolio cards */
function ProjectPreview({ variant }) {
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
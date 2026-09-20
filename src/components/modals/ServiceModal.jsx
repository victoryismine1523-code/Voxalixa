import React from 'react'
import { Modal } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import { brandGradient } from '../../theme.js'
import { useModals } from './ModalsProvider.jsx'

export default function ServiceModal({ open, payload, onClose }) {
  const { open: openOther } = useModals()
  if (!payload) return null

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={640}
      centered
      destroyOnClose
      className="vx-modal vx-modal--service"
      title={null}
      closable={false}
    >
      <div className="vx-modal__inner">
        <button className="vx-modal__close" onClick={onClose} aria-label="Close">×</button>
        <div className="vx-modal__icon">{payload.icon}</div>
        <h2 className="vx-modal__title">{payload.title}</h2>
        <p className="vx-modal__sub">{payload.desc}</p>

        <div className="vx-modal__divider" />

        <h3 className="vx-modal__h3">What we deliver</h3>
        <ul className="vx-modal__list">
          {(payload.deliverables || []).map(d => <li key={d}>{d}</li>)}
        </ul>

        <div className="vx-modal__divider" />

        <div className="vx-modal__meta">
          <div>
            <div className="vx-modal__meta-label">Typical timeline</div>
            <div className="vx-modal__meta-value">{payload.timeline || '3 — 7 days'}</div>
          </div>
          <div>
            <div className="vx-modal__meta-label">Starting at</div>
            <div className="vx-modal__meta-value" style={{ background: brandGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {payload.starting || '$499'}
            </div>
          </div>
        </div>

        <button
          className="vx-modal__cta"
          onClick={() => { onClose(); setTimeout(() => openOther('getStarted', { interest: payload.title }), 200) }}
        >
          Start a {payload.title} project <ArrowRightOutlined />
        </button>
      </div>

      <style>{`
        .vx-modal .ant-modal-content {
          background: linear-gradient(180deg, rgba(20,20,26,0.98) 0%, rgba(14,14,20,0.98) 100%) !important;
          border: 1px solid rgba(123, 61, 255, 0.25) !important;
          border-radius: 22px !important;
          padding: 0 !important;
          box-shadow: 0 30px 80px -20px rgba(123, 61, 255, 0.45) !important;
        }
        .vx-modal .ant-modal-body { padding: 0 !important; }
        .vx-modal__inner {
          padding: 40px 40px 36px;
          position: relative;
        }
        .vx-modal__close {
          position: absolute;
          top: 16px; right: 18px;
          width: 32px; height: 32px;
          border-radius: 10px;
          border: 1px solid rgba(123, 61, 255, 0.25);
          background: rgba(11, 11, 15, 0.6);
          color: #C8C8D6;
          font-size: 20px;
          line-height: 1;
          cursor: pointer;
          transition: all 0.2s;
        }
        .vx-modal__close:hover {
          background: rgba(123, 61, 255, 0.18);
          color: #F8F8FF;
          border-color: #A855F7;
        }
        .vx-modal__icon {
          width: 64px; height: 64px;
          border-radius: 18px;
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(123, 61, 255, 0.12) 100%);
          border: 1px solid rgba(168, 85, 247, 0.3);
          color: #A855F7;
          display: grid; place-items: center;
          font-size: 26px;
          margin-bottom: 22px;
        }
        .vx-modal__title {
          font-size: 30px;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin: 0 0 8px;
          color: #F8F8FF;
        }
        .vx-modal__sub {
          font-size: 15px;
          color: #9CA3AF;
          margin: 0;
          line-height: 1.6;
        }
        .vx-modal__divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(123, 61, 255, 0.25), transparent);
          margin: 28px 0;
        }
        .vx-modal__h3 {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #A855F7;
          margin: 0 0 14px;
        }
        .vx-modal__list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .vx-modal__list li {
          position: relative;
          padding-left: 26px;
          font-size: 14px;
          color: #C8C8D6;
          line-height: 1.5;
        }
        .vx-modal__list li::before {
          content: '';
          position: absolute;
          left: 0; top: 7px;
          width: 14px; height: 14px;
          border-radius: 4px;
          background: linear-gradient(135deg, #A855F7, #7B3DFF);
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.5);
        }
        .vx-modal__meta {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          padding: 20px 22px;
          background: rgba(11, 11, 15, 0.5);
          border: 1px solid rgba(123, 61, 255, 0.14);
          border-radius: 14px;
        }
        .vx-modal__meta-label {
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #9CA3AF;
          margin-bottom: 4px;
        }
        .vx-modal__meta-value {
          font-size: 20px;
          font-weight: 700;
          color: #F8F8FF;
        }
        .vx-modal__cta {
          margin-top: 24px;
          width: 100%;
          height: 50px;
          background: linear-gradient(135deg, #A855F7, #7B3DFF);
          color: #fff;
          border: 0;
          border-radius: 999px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 10px 30px rgba(123, 61, 255, 0.4);
          transition: all 0.2s;
        }
        .vx-modal__cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 36px rgba(123, 61, 255, 0.55);
        }
        @media (max-width: 520px) {
          .vx-modal__inner { padding: 32px 22px 28px; }
          .vx-modal__title { font-size: 24px; }
        }
      `}</style>
    </Modal>
  )
}
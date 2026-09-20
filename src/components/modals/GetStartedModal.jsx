import React, { useEffect, useState } from 'react'
import { Modal, Form, Input, Select, Button } from 'antd'
import { App as AntApp } from 'antd'
import { ArrowRightOutlined, CheckCircleFilled } from '@ant-design/icons'
import { submitIntake } from '../../lib/submitIntake.js'

const { TextArea } = Input

const interestOptions = [
  { value: 'graphic',    label: 'Graphic Design' },
  { value: 'website',    label: 'Website Development' },
  { value: 'game',       label: 'Game Development' },
  { value: 'wallpaper',  label: 'Animated Wallpapers' },
  { value: 'brand',      label: 'Brand System' },
  { value: 'other',      label: 'Something else' }
]

const budgetOptions = [
  { value: 'under-1k',     label: 'Under $1k' },
  { value: '1k-3k',        label: '$1k – $3k' },
  { value: '3k-10k',       label: '$3k – $10k' },
  { value: '10k-plus',     label: '$10k +' },
  { value: 'not-sure',     label: 'Not sure yet' }
]

export default function GetStartedModal({ open, payload, onClose }) {
  const { message } = AntApp.useApp()
  const [form] = Form.useForm()
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  // Pre-fill when payload is provided (e.g., from a pricing card)
  useEffect(() => {
    if (!open) return
    setSent(false)
    const next = {}
    if (payload?.interest) {
      const i = interestOptions.find(o => o.label.toLowerCase() === String(payload.interest).toLowerCase())
      if (i) next.interest = i.value
    }
    if (payload?.plan) next.budget = payload.plan === 'starter' ? 'under-1k' : payload.plan === 'professional' ? '1k-3k' : '10k-plus'
    form.setFieldsValue(next)
  }, [open, payload, form])

  const onFinish = async (values) => {
    setSending(true)
    try {
      const r = await submitIntake({ kind: 'get-started', values })
      if (r.channel === 'endpoint') {
        message.success('Request sent — we’ll reply within 24 hours.')
      } else if (r.channel === 'mailto') {
        message.success('Your mail client is opening — finish sending from there.')
      } else {
        message.warning('Saved locally — could not reach mail client or endpoint.')
      }
      setSent(true)
      form.resetFields()
      setTimeout(() => { onClose(); setSent(false) }, 1800)
    } finally {
      setSending(false)
    }
  }

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={620}
      centered
      destroyOnClose
      className="vx-modal vx-modal--getstarted"
      title={null}
      closable={false}
    >
      <div className="vx-modal__inner">
        <button className="vx-modal__close" onClick={onClose} aria-label="Close">×</button>
        <span className="vx-modal__eyebrow">Start a project</span>
        <h2 className="vx-modal__title">Tell us what you need.</h2>
        <p className="vx-modal__sub">
          A short brief is enough. The bigger the ask, the more we love it.
        </p>

        <Form form={form} layout="vertical" onFinish={onFinish} className="vx-modal__form" requiredMark={false}>
          <div className="vx-modal__row">
            <Form.Item name="name" label="Your name" rules={[{ required: true, message: 'Please tell us your name' }]}>
              <Input size="large" placeholder="Ada Lovelace" />
            </Form.Item>
            <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email', message: 'A valid email please' }]}>
              <Input size="large" placeholder="you@brand.com" />
            </Form.Item>
          </div>

          <div className="vx-modal__row">
            <Form.Item name="interest" label="What do you need?" initialValue="website">
              <Select size="large" options={interestOptions} />
            </Form.Item>
            <Form.Item name="budget" label="Budget" initialValue="1k-3k">
              <Select size="large" options={budgetOptions} />
            </Form.Item>
          </div>

          <Form.Item name="brief" label="A short brief" rules={[{ required: true, min: 12, message: 'A few sentences (12+ chars)' }]}>
            <TextArea rows={4} placeholder="Goals, timeline, references — anything that helps." />
          </Form.Item>

          <Button type="primary" htmlType="submit" size="large" block loading={sending} disabled={sending} icon={<ArrowRightOutlined />} iconPosition="end" className="vx-modal__cta">
            {sending ? 'Sending…' : 'Send Request'}
          </Button>

          {sent && (
            <div className="vx-modal__success">
              <CheckCircleFilled /> Request received. We’ll be in touch.
            </div>
          )}
        </Form>
      </div>

      <style>{`
        .vx-modal--getstarted .ant-modal-content {
          background: linear-gradient(180deg, rgba(20,20,26,0.98) 0%, rgba(14,14,20,0.98) 100%) !important;
          border: 1px solid rgba(123, 61, 255, 0.25) !important;
          border-radius: 22px !important;
          padding: 0 !important;
        }
        .vx-modal--getstarted .ant-modal-body { padding: 0 !important; }
        .vx-modal__inner { padding: 36px 36px 28px; position: relative; }
        .vx-modal__close {
          position: absolute; top: 14px; right: 16px;
          width: 32px; height: 32px;
          border-radius: 10px;
          border: 1px solid rgba(123, 61, 255, 0.25);
          background: rgba(11, 11, 15, 0.6);
          color: #C8C8D6;
          font-size: 20px; line-height: 1;
          cursor: pointer;
        }
        .vx-modal__close:hover { background: rgba(123, 61, 255, 0.2); }
        .vx-modal__eyebrow {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #A855F7;
        }
        .vx-modal__title {
          font-size: 28px;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin: 8px 0 6px;
          color: #F8F8FF;
        }
        .vx-modal__sub {
          font-size: 14px;
          color: #9CA3AF;
          margin: 0 0 22px;
        }
        .vx-modal__row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .vx-modal__form .ant-form-item-label > label {
          color: #C8C8D6 !important;
          font-weight: 600 !important;
          font-size: 11px !important;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .vx-modal__form .ant-input,
        .vx-modal__form .ant-input-affix-wrapper,
        .vx-modal__form .ant-select-selector {
          background: rgba(11, 11, 15, 0.6) !important;
          border: 1px solid rgba(123, 61, 255, 0.18) !important;
          color: #F8F8FF !important;
          border-radius: 10px !important;
        }
        .vx-modal__form .ant-input::placeholder { color: rgba(156, 163, 175, 0.6) !important; }
        .vx-modal__form .ant-input:focus,
        .vx-modal__form .ant-input-affix-wrapper:focus,
        .vx-modal__form .ant-input-affix-wrapper-focused,
        .vx-modal__form .ant-select-focused .ant-select-selector {
          border-color: #A855F7 !important;
          box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.15) !important;
        }
        .vx-modal__form .ant-select-selection-item { color: #F8F8FF !important; }
        .vx-modal__cta {
          height: 48px !important;
          border-radius: 999px !important;
          font-weight: 600 !important;
          margin-top: 4px;
        }
        .vx-modal__success {
          margin-top: 14px;
          padding: 10px 14px;
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.14), rgba(123, 61, 255, 0.08));
          border: 1px solid rgba(168, 85, 247, 0.4);
          border-radius: 10px;
          color: #F8F8FF;
          font-size: 14px;
          display: flex; align-items: center; gap: 8px;
        }
        .vx-modal__success .anticon { color: #A855F7; }

        /* Dropdown options — make selected option readable on the purple highlight */
        .vx-modal .ant-select-dropdown,
        .vx-contact__form .ant-select-dropdown {
          background: rgba(11, 11, 15, 0.98) !important;
          border: 1px solid rgba(123, 61, 255, 0.25) !important;
          box-shadow: 0 20px 50px -10px rgba(0,0,0,0.6) !important;
        }
        .vx-modal .ant-select-item,
        .vx-contact__form .ant-select-item {
          color: #C8C8D6 !important;
          background: transparent !important;
        }
        .vx-modal .ant-select-item-option-active:not(.ant-select-item-option-disabled),
        .vx-contact__form .ant-select-item-option-active:not(.ant-select-item-option-disabled) {
          background: rgba(123, 61, 255, 0.12) !important;
          color: #F8F8FF !important;
        }
        .vx-modal .ant-select-item-option-selected:not(.ant-select-item-option-disabled),
        .vx-contact__form .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.4), rgba(123, 61, 255, 0.3)) !important;
          color: #FFFFFF !important;
          font-weight: 700 !important;
        }
        .vx-modal .ant-select-item-option-selected .ant-select-item-option-state,
        .vx-contact__form .ant-select-item-option-selected .ant-select-item-option-state {
          color: #FFFFFF !important;
        }

        @media (max-width: 520px) {
          .vx-modal__inner { padding: 28px 22px 22px; }
          .vx-modal__row { grid-template-columns: 1fr; }
          .vx-modal__title { font-size: 22px; }
        }
      `}</style>
    </Modal>
  )
}
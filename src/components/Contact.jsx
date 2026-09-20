import React, { useState } from 'react'
import { Form, Input, Button, Select } from 'antd'
import { App as AntApp } from 'antd'
import {
  ArrowRightOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  CheckCircleFilled
} from '@ant-design/icons'
import { useReveal } from '../hooks/useReveal.js'
import { submitIntake } from '../lib/submitIntake.js'

const { TextArea } = Input

const channels = [
  { icon: <MailOutlined />,        label: 'Email',  value: 'hello@voxalixa.io',        href: 'mailto:hello@voxalixa.io' },
  { icon: <PhoneOutlined />,       label: 'Phone',  value: '+1 (555) 234-9012',        href: 'tel:+15552349012' },
  { icon: <EnvironmentOutlined />, label: 'Studio', value: 'Indiranagar, Bengaluru KA', href: 'https://maps.google.com/?q=Indiranagar+Bengaluru' },
  { icon: <ClockCircleOutlined />, label: 'Hours',  value: 'Mon – Fri  ·  9:00 – 18:00 IST', href: null }
]

const interests = [
  { value: 'graphic',    label: 'Graphic Design' },
  { value: 'website',    label: 'Website Development' },
  { value: 'game',       label: 'Game Development' },
  { value: 'wallpaper',  label: 'Animated Wallpapers' },
  { value: 'other',      label: 'Something else' }
]

export default function Contact() {
  const { message } = AntApp.useApp()
  const [form] = Form.useForm()
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const revealRef = useReveal()

  const onFinish = async (values) => {
    setSending(true)
    try {
      const r = await submitIntake({ kind: 'contact', values })
      if (r.channel === 'endpoint') {
        message.success('Message sent — we’ll reply within 24 hours.')
      } else if (r.channel === 'mailto') {
        message.success('Your mail client is opening — finish sending from there.')
      } else {
        message.warning('Saved locally — could not reach mail client or endpoint.')
      }
      setSent(true)
      form.resetFields()
      setTimeout(() => setSent(false), 4500)
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="section section--dark vx-contact" id="contact">
      <div className="split vx-reveal-parent" ref={revealRef}>
        <div className="vx-contact__intro">
          <span className="eyebrow reveal" data-delay="0">Contact</span>
          <h2 className="section-title reveal" data-delay="1">Let’s Build Something</h2>
          <p className="section-sub reveal" data-delay="2">
            Tell us about your project and we’ll come back with ideas,
            timelines and a clear next step. No hard sell, just craft.
          </p>

          <ul className="vx-contact__channels">
            {channels.map((c, i) => {
                const inner = (
                  <>
                    <span className="vx-contact__channel-icon">{c.icon}</span>
                    <div>
                      <div className="vx-contact__channel-label">{c.label}</div>
                      <div className="vx-contact__channel-value">{c.value}</div>
                    </div>
                  </>
                )
                return (
                  <li key={c.label} className="reveal" data-delay={i + 3}>
                    {c.href ? (
                      <a
                        className="vx-contact__channel-link"
                        href={c.href}
                        {...(c.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="vx-contact__channel-link vx-contact__channel-link--static">{inner}</div>
                    )}
                  </li>
                )
              })}
          </ul>
        </div>

        <div className="vx-contact__form-wrap reveal" data-delay="2">
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            className="vx-contact__form"
            requiredMark={false}
          >
            <div className="vx-contact__row">
              <Form.Item
                name="name"
                label="Your name"
                rules={[{ required: true, message: 'Please tell us your name' }]}
              >
                <Input size="large" placeholder="Ada Lovelace" />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: 'We’ll need an email to reply' },
                  { type: 'email', message: 'That doesn’t look like a valid email' }
                ]}
              >
                <Input size="large" placeholder="you@brand.com" />
              </Form.Item>
            </div>

            <Form.Item
              name="interest"
              label="What can we help with?"
              initialValue="website"
            >
              <Select size="large" options={interests} />
            </Form.Item>

            <Form.Item
              name="message"
              label="Tell us about your project"
              rules={[{ required: true, min: 12, message: 'A few sentences will do (12+ chars)' }]}
            >
              <TextArea
                size="large"
                rows={5}
                placeholder="Goals, timeline, references — anything that helps us get it."
              />
            </Form.Item>

            <Button
              type="primary"
              size="large"
              htmlType="submit"
              block
              loading={sending}
              disabled={sending}
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              className="vx-contact__cta"
            >
              {sending ? 'Sending…' : 'Send Message'}
            </Button>

            {sent && (
              <div className="vx-contact__success">
                <CheckCircleFilled /> Message received. We’ll be in touch shortly.
              </div>
            )}
          </Form>
        </div>
      </div>

      <style>{`
        .vx-contact__intro { padding-top: 8px; }
        .vx-contact__channels {
          list-style: none;
          padding: 0;
          margin: 24px 0 0;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .vx-contact__channels li {
          display: flex;
          gap: 14px;
          align-items: center;
        }
        .vx-contact__channel-link {
          display: flex;
          gap: 14px;
          align-items: center;
          text-decoration: none;
          border-radius: 12px;
          padding: 4px 6px;
          margin: -4px -6px;
          transition: background 0.2s ease;
        }
        .vx-contact__channel-link:hover { background: rgba(168, 85, 247, 0.08); }
        .vx-contact__channel-link:hover .vx-contact__channel-value { color: #A855F7; }
        .vx-contact__channel-link--static { cursor: default; }
        .vx-contact__channel-link--static:hover { background: transparent; }
        .vx-contact__channel-icon {
          width: 44px; height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.18) 0%, rgba(123, 61, 255, 0.12) 100%);
          border: 1px solid rgba(168, 85, 247, 0.25);
          color: #A855F7;
          display: grid; place-items: center;
          font-size: 17px;
          flex-shrink: 0;
        }
        .vx-contact__channel-label {
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #9CA3AF;
          font-weight: 600;
          margin-bottom: 2px;
        }
        .vx-contact__channel-value {
          font-size: 15px;
          color: #F8F8FF;
          font-weight: 500;
        }
        .vx-contact__form-wrap {
          background: linear-gradient(180deg, rgba(20,20,26,0.95) 0%, rgba(14,14,20,0.95) 100%);
          border: 1px solid rgba(123, 61, 255, 0.14);
          border-radius: 22px;
          padding: 32px;
        }
        .vx-contact__row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .vx-contact__form .ant-form-item-label > label {
          color: #C8C8D6 !important;
          font-weight: 600 !important;
          font-size: 12px !important;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .vx-contact__form .ant-input,
        .vx-contact__form .ant-input-affix-wrapper,
        .vx-contact__form .ant-select-selector {
          background: rgba(11, 11, 15, 0.6) !important;
          border: 1px solid rgba(123, 61, 255, 0.18) !important;
          color: #F8F8FF !important;
          border-radius: 12px !important;
        }
        .vx-contact__form .ant-input::placeholder { color: rgba(156, 163, 175, 0.6) !important; }
        .vx-contact__form .ant-input:focus,
        .vx-contact__form .ant-input-affix-wrapper:focus,
        .vx-contact__form .ant-input-affix-wrapper-focused,
        .vx-contact__form .ant-select-focused .ant-select-selector {
          border-color: #A855F7 !important;
          box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.15) !important;
        }
        .vx-contact__form .ant-select-selection-item {
          color: #F8F8FF !important;
        }
        .vx-contact__cta {
          height: 50px !important;
          border-radius: 999px !important;
          font-weight: 600 !important;
        }
        .vx-contact__success {
          margin-top: 18px;
          padding: 12px 16px;
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.12), rgba(123, 61, 255, 0.08));
          border: 1px solid rgba(168, 85, 247, 0.4);
          border-radius: 12px;
          color: #F8F8FF;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .vx-contact__success .anticon { color: #A855F7; }
        @media (max-width: 720px) {
          .vx-contact__row { grid-template-columns: 1fr; }
          .vx-contact__form-wrap { padding: 22px; }
        }
      `}</style>
    </section>
  )
}
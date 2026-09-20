import React from 'react'
import {
  InstagramOutlined,
  YoutubeOutlined,
  DiscordOutlined,
  DribbbleOutlined,
  XOutlined
} from '@ant-design/icons'
import { brandGradient } from '../theme.js'

const nav = [
  { label: 'Home', href: '#top' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' }
]

const socials = [
  { icon: <InstagramOutlined />, label: 'Instagram', href: 'https://instagram.com/voxalixa' },
  { icon: <YoutubeOutlined />,   label: 'YouTube',   href: 'https://youtube.com/@voxalixa' },
  { icon: <DiscordOutlined />,   label: 'Discord',   href: 'https://discord.gg/voxalixa' },
  { icon: <DribbbleOutlined />,  label: 'Dribbble',  href: 'https://dribbble.com/voxalixa' },
  { icon: <XOutlined />,         label: 'X',         href: 'https://x.com/voxalixa' }
]

export default function Footer() {
  const go = (e, href) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const el = id === 'top' ? document.body : document.getElementById(id)
    if (el) {
      const y = id === 'top' ? 0 : el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <footer className="vx-footer">
      <div className="vx-footer__inner">
        <div className="vx-footer__brand">
          <div className="vx-logo">
            <span className="vx-logo__mark" style={{ background: brandGradient }}>V</span>
            <span className="vx-logo__word">Voxalixa</span>
          </div>
          <p className="vx-footer__tagline">
            CREATE <span>•</span> DEVELOP <span>•</span> INSPIRE
          </p>
        </div>

        <nav className="vx-footer__nav">
          {nav.map(n => (
            <a key={n.label} href={n.href} onClick={(e) => go(e, n.href)}>{n.label}</a>
          ))}
        </nav>

        <div className="vx-footer__socials">
          {socials.map(s => (
            <a
              key={s.label}
              className="vx-footer__social"
              aria-label={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.icon}
            </a>
          ))}
        </div>

        <div className="vx-footer__copy">
          © 2026 Voxalixa. All rights reserved.
        </div>
      </div>

      <style>{`
        .vx-footer {
          padding: 56px 64px 40px;
          background: #0B0B0F;
          border-top: 1px solid rgba(123, 61, 255, 0.12);
          color: #F8F8FF;
        }
        .vx-footer__inner {
          max-width: 1440px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: auto 1fr auto auto;
          align-items: center;
          gap: 48px;
        }
        .vx-logo {
          display: flex; align-items: center; gap: 10px;
          font-weight: 800;
          font-size: 22px;
          letter-spacing: -0.02em;
        }
        .vx-logo__mark {
          width: 32px; height: 32px;
          border-radius: 8px;
          display: grid; place-items: center;
          color: #fff;
          font-weight: 800;
          font-size: 18px;
          box-shadow: 0 6px 20px rgba(123, 61, 255, 0.45);
        }
        .vx-logo__word { color: #F8F8FF; }
        .vx-footer__tagline {
          margin: 12px 0 0;
          font-size: 11px;
          letter-spacing: 0.32em;
          color: #9CA3AF;
          font-weight: 600;
        }
        .vx-footer__tagline span { color: #7B3DFF; padding: 0 6px; }
        .vx-footer__nav {
          display: flex;
          gap: 32px;
          justify-content: center;
        }
        .vx-footer__nav a {
          font-size: 14px;
          font-weight: 500;
          color: #C8C8D6;
          transition: color 0.2s;
        }
        .vx-footer__nav a:hover { color: #A855F7; }
        .vx-footer__socials {
          display: flex;
          gap: 14px;
        }
        .vx-footer__social {
          width: 36px; height: 36px;
          border-radius: 10px;
          border: 1px solid rgba(123, 61, 255, 0.18);
          display: grid; place-items: center;
          color: #C8C8D6;
          font-size: 16px;
          transition: all 0.2s;
        }
        .vx-footer__social:hover {
          background: linear-gradient(135deg, #A855F7, #7B3DFF);
          color: #fff;
          border-color: transparent;
          transform: translateY(-2px);
        }
        .vx-footer__copy {
          font-size: 13px;
          color: #9CA3AF;
          white-space: nowrap;
        }

        @media (max-width: 1100px) {
          .vx-footer { padding: 48px 24px 32px; }
          .vx-footer__inner { grid-template-columns: 1fr; gap: 28px; text-align: center; justify-items: center; }
          .vx-footer__nav { flex-wrap: wrap; justify-content: center; }
        }
      `}</style>
    </footer>
  )
}
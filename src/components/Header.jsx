import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import { MenuOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { brandGradient } from '../theme.js'
import { useModals } from './modals/ModalsProvider.jsx'

const navItems = [
  { key: 'home', label: 'Home' },
  { key: 'services', label: 'Services' },
  { key: 'portfolio', label: 'Portfolio' },
  { key: 'about', label: 'About' },
  { key: 'pricing', label: 'Pricing' },
  { key: 'faq', label: 'FAQ' },
  { key: 'contact', label: 'Contact' }
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)
  const { open } = useModals()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (key) => {
    setActive(key)
    setMobileOpen(false)
    const id = key === 'home' ? 'top' : key
    const el = id === 'top' ? document.body : document.getElementById(id)
    if (el) {
      const y = id === 'top' ? 0 : el.getBoundingClientRect().top + window.scrollY - 80
      const reduced = typeof window !== 'undefined' && window.matchMedia
        ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
        : false
      window.scrollTo({ top: y, behavior: reduced ? 'auto' : 'smooth' })
    }
  }

  return (
    <header className={`vx-header ${scrolled ? 'vx-header--scrolled' : ''}`}>
      <div className="vx-header__inner">
        <a className="vx-logo" onClick={() => go('home')}>
          <span className="vx-logo__mark" style={{ background: brandGradient }}>V</span>
          <span className="vx-logo__word">Voxalixa</span>
        </a>

        <nav className="vx-nav">
          {navItems.map(item => (
            <a
              key={item.key}
              className={`vx-nav__item ${active === item.key ? 'vx-nav__item--active' : ''}`}
              onClick={() => go(item.key)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="vx-header__cta">
          <Button
            type="primary"
            size="large"
            icon={<ArrowRightOutlined />}
            iconPosition="end"
            className="vx-cta-pill"
            onClick={() => open('getStarted')}
          >
            Get Started
          </Button>
        </div>

        <button
          className="vx-burger"
          aria-label="Menu"
          onClick={() => setMobileOpen(v => !v)}
        >
          <MenuOutlined />
        </button>
      </div>

      {mobileOpen && (
        <div className="vx-mobile-menu">
          {navItems.map(item => (
            <a
              key={item.key}
              className="vx-mobile-menu__item"
              onClick={() => go(item.key)}
            >
              {item.label}
            </a>
          ))}
          <Button type="primary" block size="large" icon={<ArrowRightOutlined />} iconPosition="end">
            Get Started
          </Button>
        </div>
      )}

      <style>{`
        .vx-header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 20px 64px;
          transition: all 0.3s ease;
          background: transparent;
        }
        .vx-header--scrolled {
          background: rgba(11, 11, 15, 0.78);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(123, 61, 255, 0.12);
          padding: 14px 64px;
        }
        .vx-header__inner {
          max-width: 1440px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 40px;
        }
        .vx-logo {
          display: flex; align-items: center; gap: 10px;
          cursor: pointer;
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
        .vx-logo__word {
          color: #F8F8FF;
        }
        .vx-nav {
          margin-left: 32px;
          display: flex;
          gap: 32px;
        }
        .vx-nav__item {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #F8F8FF;
          opacity: 0.75;
          cursor: pointer;
          transition: opacity 0.2s, color 0.2s;
          position: relative;
          padding: 4px 0;
        }
        .vx-nav__item:hover { opacity: 1; color: #A855F7; }
        .vx-nav__item--active {
          opacity: 1;
          color: #A855F7;
        }
        .vx-nav__item--active::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: -6px;
          height: 2px;
          background: #A855F7;
          border-radius: 2px;
        }
        .vx-header__cta {
          margin-left: auto;
        }
        .vx-cta-pill {
          padding: 0 26px !important;
          height: 44px !important;
          font-weight: 600 !important;
        }
        .vx-burger {
          display: none;
          margin-left: auto;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.18);
          color: #F8F8FF;
          padding: 8px 12px;
          border-radius: 10px;
          cursor: pointer;
        }
        .vx-mobile-menu {
          display: none;
          padding: 18px 64px 24px;
          background: rgba(11,11,15,0.95);
          backdrop-filter: blur(14px);
          border-top: 1px solid rgba(123,61,255,0.12);
        }
        .vx-mobile-menu__item {
          display: block;
          padding: 14px 0;
          color: #F8F8FF;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          cursor: pointer;
        }

        @media (max-width: 1100px) {
          .vx-header, .vx-header--scrolled { padding: 16px 24px; }
          .vx-nav, .vx-header__cta { display: none; }
          .vx-burger { display: inline-flex; }
          .vx-mobile-menu { display: block; padding: 16px 24px 24px; }
        }
      `}</style>
    </header>
  )
}
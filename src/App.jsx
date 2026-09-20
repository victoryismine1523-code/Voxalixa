import React, { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Portfolio from './components/Portfolio.jsx'
import About from './components/About.jsx'
import Pricing from './components/Pricing.jsx'
import Contact from './components/Contact.jsx'
import Faq from './components/Faq.jsx'
import Footer from './components/Footer.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import BackToTop from './components/BackToTop.jsx'
import ModalsProvider from './components/modals/ModalsProvider.jsx'
import ServiceModal from './components/modals/ServiceModal.jsx'
import ProjectModal from './components/modals/ProjectModal.jsx'
import GetStartedModal from './components/modals/GetStartedModal.jsx'
import VideoModal from './components/modals/VideoModal.jsx'

const modals = [
  { type: 'service',    component: ServiceModal },
  { type: 'project',    component: ProjectModal },
  { type: 'getStarted', component: GetStartedModal },
  { type: 'video',      component: VideoModal }
]

export default function App() {
  // Honor in-page anchors (e.g. /#services) on initial load and on hashchange
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.replace('#', '')
      if (!id || id === 'top') return
      const el = document.getElementById(id)
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80
        window.scrollTo({ top: y, behavior: 'auto' })
      }
    }
    // Wait one frame so sections are mounted
    requestAnimationFrame(scrollToHash)
    window.addEventListener('hashchange', scrollToHash)
    return () => window.removeEventListener('hashchange', scrollToHash)
  }, [])

  return (
    <ModalsProvider modals={modals}>
      <div className="app">
        <ScrollProgress />
        {/* Skip link — accessibility + lets crawlers reach #main immediately */}
        <a className="vx-skip-link" href="#main">Skip to main content</a>
        <Header />
        {/*
          Semantic landmarks: <main> wraps the unique page content so assistive
          tech and crawlers can skip straight to it. Header/Footer are already
          <header>/<footer> elements.
        */}
        <main id="main">
          <ErrorBoundary><Hero /></ErrorBoundary>
          <ErrorBoundary><Services /></ErrorBoundary>
          <ErrorBoundary><Portfolio /></ErrorBoundary>
          <ErrorBoundary><About /></ErrorBoundary>
          <ErrorBoundary><Pricing /></ErrorBoundary>
          <ErrorBoundary><Faq /></ErrorBoundary>
          <ErrorBoundary><Contact /></ErrorBoundary>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ModalsProvider>
  )
}
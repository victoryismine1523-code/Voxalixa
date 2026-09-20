import React from 'react'

/**
 * Lightweight React error boundary. If a child throws during render, this shows
 * a recoverable message instead of letting the whole tree die into a blank DOM.
 *
 * An antd-style dark card keeps it visually consistent with the rest of the site.
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    // Logged but never user-facing — let the on-page card handle the message.
    // eslint-disable-next-line no-console
    console.error('Voxalixa render error', error, info)
  }

  reset = () => this.setState({ error: null })

  render() {
    if (!this.state.error) return this.props.children
    return (
      <div className="vx-error" role="alert" aria-live="assertive">
        <div className="vx-error__card">
          <div className="vx-error__eyebrow">Something went wrong</div>
          <h2 className="vx-error__title">A piece of the page failed to load.</h2>
          <p className="vx-error__sub">
            The rest of the site is still working — try reloading this section to recover.
          </p>
          <button className="vx-error__btn" onClick={this.reset}>Try again</button>
        </div>
        <style>{`
          .vx-error {
            display: grid;
            place-items: center;
            padding: 80px 24px;
          }
          .vx-error__card {
            max-width: 520px;
            background: linear-gradient(180deg, rgba(20,20,26,0.95), rgba(14,14,20,0.95));
            border: 1px solid rgba(168, 85, 247, 0.45);
            border-radius: 18px;
            padding: 32px 28px;
            text-align: center;
          }
          .vx-error__eyebrow {
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.22em;
            text-transform: uppercase;
            color: #A855F7;
            margin-bottom: 10px;
          }
          .vx-error__title {
            font-size: 22px;
            font-weight: 800;
            color: #F8F8FF;
            margin: 0 0 8px;
            letter-spacing: -0.02em;
          }
          .vx-error__sub {
            font-size: 15px;
            color: #9CA3AF;
            margin: 0 0 22px;
            line-height: 1.5;
          }
          .vx-error__btn {
            background: linear-gradient(135deg, #A855F7, #7B3DFF);
            color: #F8F8FF;
            border: 0;
            padding: 11px 22px;
            border-radius: 999px;
            font-weight: 600;
            font-size: 14px;
            cursor: pointer;
          }
          .vx-error__btn:hover { transform: translateY(-1px); }
        `}</style>
      </div>
    )
  }
}
import React, { useMemo } from 'react'
import { Modal } from 'antd'
import { PlayCircleFilled } from '@ant-design/icons'

/**
 * Detects what kind of URL was passed and returns an embed descriptor.
 *  - YouTube watch / youtu.be → `{ kind: 'youtube', src }`
 *  - Vimeo                              → `{ kind: 'vimeo', src }`
 *  - .mp4 / .webm / .ogg                → `{ kind: 'file', src, type }`
 *  - anything else / blank              → `{ kind: 'placeholder' }`
 */
function describe(url) {
  if (!url || typeof url !== 'string') return { kind: 'placeholder' }
  const u = url.trim()
  // youtu.be/<id>
  const ytShort = u.match(/^https?:\/\/youtu\.be\/([\w-]{6,})/i)
  // youtube.com/watch?v=<id>  /  youtube.com/embed/<id>  /  youtube.com/shorts/<id>
  const ytLong = u.match(/^https?:\/\/(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|embed\/|shorts\/)([\w-]{6,})/i)
  const ytId = (ytShort && ytShort[1]) || (ytLong && ytLong[1])
  if (ytId) {
    return { kind: 'youtube', id: ytId, src: `https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1` }
  }
  const vimeo = u.match(/^https?:\/\/(?:www\.)?vimeo\.com\/(\d+)/i)
  if (vimeo) {
    return { kind: 'vimeo', id: vimeo[1], src: `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1&title=0&byline=0&portrait=0` }
  }
  if (/\.(mp4|webm|ogg)(\?|$)/i.test(u)) {
    const ext = (u.match(/\.(mp4|webm|ogg)/i) || [])[0].toLowerCase()
    const type = ext === '.mp4' ? 'video/mp4' : ext === '.webm' ? 'video/webm' : 'video/ogg'
    return { kind: 'file', src: u, type }
  }
  // Heuristic: if it looks like an embed URL we don't recognise, treat it as iframe
  if (/^https?:\/\//i.test(u)) return { kind: 'iframe', src: u }
  return { kind: 'placeholder' }
}

export default function VideoModal({ open, onClose }) {
  const env = import.meta.env.VITE_VIDEO_URL || ''
  const player = useMemo(() => describe(env), [env])

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={920}
      centered
      destroyOnClose
      className="vx-modal vx-modal--video"
      title={null}
      closable={false}
    >
      <div className="vx-modal__inner">
        <button className="vx-modal__close" onClick={onClose} aria-label="Close">×</button>
        <div className="vx-modal__player">
          {player.kind === 'placeholder' && (
            <>
              <div className="vx-modal__player-glow" />
              <PlayCircleFilled className="vx-modal__play-icon" aria-hidden="true" />
              <div className="vx-modal__player-text">
                <div className="vx-modal__player-eyebrow">Showreel · 2026</div>
                <div className="vx-modal__player-title">Voxalixa in motion</div>
                <div className="vx-modal__player-sub">A 90-second walkthrough of how we work — from brief to ship.</div>
              </div>
              <div className="vx-modal__player-progress">
                <div className="vx-modal__player-progress-bar" />
                <div className="vx-modal__player-progress-time">00:00 / 01:30</div>
              </div>
              <div className="vx-modal__player-note">
                Add <code>VITE_VIDEO_URL</code> to <code>.env.local</code> to drop in a YouTube / Vimeo / .mp4 link.
              </div>
            </>
          )}

          {player.kind === 'youtube' && (
            <iframe
              className="vx-modal__embed"
              src={player.src}
              title="Voxalixa showreel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}

          {player.kind === 'vimeo' && (
            <iframe
              className="vx-modal__embed"
              src={player.src}
              title="Voxalixa showreel"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          )}

          {player.kind === 'iframe' && (
            <iframe
              className="vx-modal__embed"
              src={player.src}
              title="Voxalixa showreel"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          )}

          {player.kind === 'file' && (
            <video
              className="vx-modal__embed vx-modal__embed--video"
              src={player.src}
              controls
              autoPlay
              playsInline
              preload="metadata"
            >
              <source src={player.src} type={player.type} />
              Your browser doesn’t support embedded video.
            </video>
          )}
        </div>
      </div>

      <style>{`
        .vx-modal--video .ant-modal-content {
          background: #0B0B0F !important;
          border: 1px solid rgba(123, 61, 255, 0.25) !important;
          border-radius: 18px !important;
          padding: 0 !important;
          overflow: hidden;
        }
        .vx-modal--video .ant-modal-body { padding: 0 !important; }
        .vx-modal__inner {
          padding: 18px;
          position: relative;
        }
        .vx-modal__close {
          position: absolute;
          top: 14px; right: 16px;
          width: 32px; height: 32px;
          border-radius: 10px;
          border: 1px solid rgba(123, 61, 255, 0.3);
          background: rgba(11, 11, 15, 0.75);
          color: #F8F8FF;
          font-size: 20px; line-height: 1;
          cursor: pointer;
          z-index: 5;
        }
        .vx-modal__player {
          aspect-ratio: 16 / 9;
          background:
            radial-gradient(120% 100% at 50% 0%, rgba(123, 61, 255, 0.35) 0%, rgba(11, 11, 15, 0.9) 60%),
            linear-gradient(135deg, #0B0B0F 0%, #1A0E33 100%);
          position: relative;
          display: grid;
          place-items: center;
          border-radius: 12px;
          overflow: hidden;
        }
        .vx-modal__player-glow {
          position: absolute;
          inset: -20%;
          background: radial-gradient(closest-side, rgba(168, 85, 247, 0.25), transparent 70%);
          animation: vx-glow-pulse 4s ease-in-out infinite;
          pointer-events: none;
        }
        .vx-modal__play-icon {
          font-size: 84px;
          color: rgba(255,255,255,0.95);
          filter: drop-shadow(0 0 24px rgba(168, 85, 247, 0.7));
          position: relative;
          z-index: 2;
          transition: transform 0.2s;
        }
        .vx-modal__player-text {
          position: absolute;
          top: 32px; left: 32px;
          text-align: left;
          z-index: 2;
        }
        .vx-modal__player-eyebrow {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #A855F7;
          margin-bottom: 6px;
        }
        .vx-modal__player-title {
          font-size: 24px;
          font-weight: 800;
          color: #F8F8FF;
          letter-spacing: -0.01em;
        }
        .vx-modal__player-sub {
          font-size: 13px;
          color: #9CA3AF;
          margin-top: 4px;
          max-width: 320px;
        }
        .vx-modal__player-progress {
          position: absolute;
          left: 32px; right: 32px;
          bottom: 50px;
          z-index: 2;
        }
        .vx-modal__player-progress-bar {
          height: 3px;
          background: linear-gradient(90deg, #7B3DFF, #A855F7);
          width: 0%;
          border-radius: 3px;
        }
        .vx-modal__player-progress-time {
          font-size: 11px;
          color: #9CA3AF;
          margin-top: 6px;
          letter-spacing: 0.08em;
        }
        .vx-modal__player-note {
          position: absolute;
          right: 32px;
          bottom: 22px;
          font-size: 10px;
          color: #6B7280;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          z-index: 2;
          max-width: 280px;
          text-align: right;
          line-height: 1.4;
        }
        .vx-modal__player-note code {
          background: rgba(123, 61, 255, 0.12);
          border: 1px solid rgba(123, 61, 255, 0.22);
          border-radius: 4px;
          padding: 1px 5px;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 10px;
          color: #C8B8FF;
        }

        .vx-modal__embed {
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
          background: #000;
        }
        .vx-modal__embed--video {
          object-fit: contain;
        }

        @keyframes vx-glow-pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        @media (max-width: 720px) {
          .vx-modal__player-text { top: 18px; left: 18px; right: 18px; }
          .vx-modal__player-title { font-size: 18px; }
          .vx-modal__player-progress { left: 18px; right: 18px; bottom: 50px; }
        }
      `}</style>
    </Modal>
  )
}
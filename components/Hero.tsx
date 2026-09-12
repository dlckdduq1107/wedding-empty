import React from 'react'
import config from '../config.json'

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='1000'%3E%3Crect fill='%23e8e4e0' width='800' height='1000'/%3E%3Ctext x='50%25' y='50%25' font-size='28' fill='%23aaa' text-anchor='middle' dy='.3em' font-family='sans-serif'%3EMain Photo%3C/text%3E%3C/svg%3E"

export default function Hero() {
  const { groom, bride, wedding, hero } = config

  const dateLabel = `${wedding.year} ${String(wedding.month).padStart(2, '0')} ${String(
    wedding.day
  ).padStart(2, '0')}`

  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 5', overflow: 'hidden', background: '#e8e4e0' }}>
      <img
        src={hero.image}
        alt="wedding main"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        onError={(e) => {
          e.currentTarget.src = PLACEHOLDER
        }}
      />

      {/* top-right menu dots */}
      <div
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          background: 'rgba(0,0,0,0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3px'
        }}
      >
        <span style={{ width: 3, height: 3, borderRadius: '50%', background: '#fff' }} />
        <span style={{ width: 3, height: 3, borderRadius: '50%', background: '#fff' }} />
        <span style={{ width: 3, height: 3, borderRadius: '50%', background: '#fff' }} />
      </div>

      {/* bottom overlay text */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: '1.75rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.6rem'
        }}
      >
        <span
          style={{
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            color: '#fff',
            background: 'rgba(0,0,0,0.4)',
            padding: '0.3rem 0.9rem',
            borderRadius: '999px'
          }}
        >
          {hero.tag}
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{ width: 1, height: '14px', background: 'rgba(255,255,255,0.6)' }} />
          <span
            style={{
              fontFamily: "'Cormorant Garamond', 'Noto Serif KR', serif",
              fontSize: '1.4rem',
              fontWeight: 600,
              color: '#fff',
              letterSpacing: '0.02em'
            }}
          >
            {groom.nameEn} · {bride.nameEn}
          </span>
          <span style={{ width: 1, height: '14px', background: 'rgba(255,255,255,0.6)' }} />
        </div>

        <span style={{ fontSize: '0.65rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.85)' }}>
          {dateLabel} {wedding.dayOfWeekLabel.split(' ')[0]}, {String(wedding.hour % 12 === 0 ? 12 : wedding.hour % 12).padStart(2, '0')}:{String(wedding.minute).padStart(2, '0')}
          {wedding.hour < 12 ? 'AM' : 'PM'}
        </span>
      </div>
    </div>
  )
}

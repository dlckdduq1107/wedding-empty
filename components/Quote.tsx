import React from 'react'
import config from '../config.json'

export default function Quote() {
  const { quote } = config

  return (
    <section className="section" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <p
        className="whitespace-pre-line"
        style={{
          fontFamily: "'Cormorant Garamond', 'Noto Serif KR', serif",
          fontSize: '1.6rem',
          fontWeight: 600,
          color: '#333',
          lineHeight: 1.3,
          marginBottom: '2rem'
        }}
      >
        {quote.title}
      </p>

      <div style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {quote.lines.map((l, i) => (
          <p key={i} className="whitespace-pre-line">
            {l}
          </p>
        ))}
      </div>

      <p style={{ fontSize: '0.78rem', color: '#aaa', marginTop: '1.5rem' }}>{quote.source}</p>
    </section>
  )
}

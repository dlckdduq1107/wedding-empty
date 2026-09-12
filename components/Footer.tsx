import React from 'react'
import config from '../config.json'

export default function Footer() {
  return (
    <footer
      style={{
        padding: '2rem 1rem',
        borderTop: `1px solid ${config.theme.accentColor}`,
        textAlign: 'center',
        fontSize: '0.875rem',
        borderColor: config.theme.accentColor,
        backgroundColor: config.theme.accentColor + '20',
        color: config.theme.textColor
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <p style={{ fontFamily: 'serif', fontSize: '1.125rem', color: config.theme.primaryColor }}>
          {config.groom.name} & {config.bride.name}
        </p>
        <p>
          {config.wedding.date} {config.wedding.dayOfWeek} {config.wedding.time}
        </p>
        <p style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Made with ♥ using Next.js
        </p>
      </div>
    </footer>
  )
}

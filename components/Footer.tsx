import React from 'react'
import config from '../config.json'

export default function Footer() {
  return (
    <footer style={{ background: '#fafafa', padding: '2.5rem 1.75rem', textAlign: 'center' }}>
      <p style={{ fontSize: '0.7rem', color: '#bbb' }}>
        Copyright ⓒ {config.wedding.year}. {config.groom.name} · {config.bride.name}. All rights reserved.
      </p>
    </footer>
  )
}

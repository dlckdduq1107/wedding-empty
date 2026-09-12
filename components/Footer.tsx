import React from 'react'
import config from '../config.json'

export default function Footer() {
  return (
    <footer style={{ background: '#fafafa', padding: '2.5rem 1.75rem', textAlign: 'center' }}>
      <a
        href="#"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          background: '#fee500',
          color: '#3c1e1e',
          borderRadius: '999px',
          padding: '0.6rem 1.4rem',
          fontSize: '0.8rem',
          fontWeight: 600,
          marginBottom: '1.5rem'
        }}
      >
        💬 카카오톡으로 청첩장 보내기
      </a>

      <p style={{ fontSize: '0.7rem', color: '#bbb' }}>
        Copyright ⓒ {config.wedding.year}. {config.groom.name} · {config.bride.name}. All rights reserved.
      </p>
    </footer>
  )
}

import React from 'react'
import config from '../config.json'

export default function Header() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '384px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundImage: `linear-gradient(135deg, ${config.theme.accentColor} 0%, ${config.theme.primaryColor} 100%)`,
    }}>
      <div style={{ textAlign: 'center', color: 'white', zIndex: 10, padding: '0 1rem' }}>
        <div style={{ fontSize: '3.5rem', fontFamily: 'serif', fontWeight: 'bold', marginBottom: '1rem' }}>
          {config.groom.name} <span style={{ fontSize: '2rem' }}>♥</span> {config.bride.name}
        </div>
        <div style={{ fontSize: '1.125rem', fontWeight: 300 }}>
          {config.wedding.date}
        </div>
      </div>

      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '1rem',
        left: '1rem',
        width: '64px',
        height: '64px',
        border: '2px solid white',
        opacity: 0.3,
        borderRadius: '50%'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '1rem',
        right: '1rem',
        width: '48px',
        height: '48px',
        border: '2px solid white',
        opacity: 0.2
      }} />
    </div>
  )
}

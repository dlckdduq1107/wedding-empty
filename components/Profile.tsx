import React from 'react'
import config from '../config.json'

const PLACEHOLDER = (label: string) =>
  `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23e8e4e0' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='22' fill='%23aaa' text-anchor='middle' dy='.3em' font-family='sans-serif'%3E${label}%3C/text%3E%3C/svg%3E`

export default function Profile() {
  const { groom, bride } = config

  const people = [
    { label: '신랑', ...groom },
    { label: '신부', ...bride }
  ]

  return (
    <section className="section" style={{ background: '#fafafa' }}>
      <p className="eyebrow">Profile</p>
      <h2 className="section-title">두 사람을 소개합니다.</h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', maxWidth: '360px', margin: '0 auto' }}>
        {people.map((p) => (
          <div key={p.label}>
            <div
              style={{
                width: '100%',
                aspectRatio: '1',
                borderRadius: '0.75rem',
                overflow: 'hidden',
                background: '#e8e4e0',
                marginBottom: '0.75rem'
              }}
            >
              <img
                src={p.photo}
                alt={p.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  e.currentTarget.src = PLACEHOLDER(p.label)
                }}
              />
            </div>
            <p style={{ fontSize: '0.9rem', color: '#333', marginBottom: '0.35rem' }}>
              <span style={{ color: '#999', marginRight: '0.35rem' }}>{p.label}</span>
              <strong>{p.name}</strong>
            </p>
            <p style={{ fontSize: '0.78rem', color: '#999', marginBottom: '0.6rem' }}>🎂 {p.birthday}</p>
            <div style={{ fontSize: '0.72rem', color: '#b98a9a', lineHeight: 1.6 }}>
              {p.hashtags.map((h) => (
                <p key={h}>{h}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

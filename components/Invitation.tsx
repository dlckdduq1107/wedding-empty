import React, { useState } from 'react'
import config from '../config.json'

export default function Invitation() {
  const { groom, bride, invitation } = config
  const [showContact, setShowContact] = useState(false)

  return (
    <section className="section">
      <p className="eyebrow">Invitation</p>
      <h2 className="section-title">소중한 분들을 초대합니다</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem', color: '#444', fontSize: '0.9rem', lineHeight: 1.8 }}>
        <p className="whitespace-pre-line">{invitation.lead}</p>
        {invitation.paragraphs.map((p, i) => (
          <p key={i} className="whitespace-pre-line">
            {p}
          </p>
        ))}
      </div>

      <div style={{ width: '28px', height: '1px', background: '#ddd', margin: '2.25rem auto' }} />

      <div style={{ fontSize: '0.88rem', color: '#444', lineHeight: 1.9, marginBottom: '1.75rem' }}>
        <p>
          {groom.father} · {groom.mother}의 아들 <strong>{groom.name}</strong>
        </p>
        <p>
          {bride.father} · {bride.mother}의 딸 <strong>{bride.name}</strong>
        </p>
      </div>

      <button
        onClick={() => setShowContact((v) => !v)}
        style={{
          border: '1px solid #e2b9c4',
          color: config.theme.primaryColor,
          background: '#fff',
          borderRadius: '999px',
          padding: '0.6rem 1.6rem',
          fontSize: '0.82rem'
        }}
      >
        ☎ 연락하기
      </button>

      {showContact && (
        <div
          style={{
            marginTop: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.6rem',
            fontSize: '0.82rem',
            color: '#555',
            background: '#fbf7f8',
            borderRadius: '0.5rem',
            padding: '1rem',
            maxWidth: '280px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          <a href={`tel:${groom.phone}`} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>신랑 {groom.name}</span>
            <span style={{ color: config.theme.primaryColor }}>{groom.phone}</span>
          </a>
          <a href={`tel:${bride.phone}`} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>신부 {bride.name}</span>
            <span style={{ color: config.theme.primaryColor }}>{bride.phone}</span>
          </a>
        </div>
      )}
    </section>
  )
}

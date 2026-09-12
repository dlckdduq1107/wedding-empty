import React, { useState } from 'react'
import config from '../config.json'

export default function Rsvp() {
  const { rsvp } = config
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <section className="section">
        <p className="eyebrow">R.S.V.P</p>
        <h2 className="section-title">참석 의사 전달</h2>

        <p className="whitespace-pre-line" style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          {rsvp.description}
        </p>

        <button
          onClick={() => setSubmitted(true)}
          style={{
            border: '1px solid #e2b9c4',
            color: config.theme.primaryColor,
            background: '#fff',
            borderRadius: '999px',
            padding: '0.6rem 1.6rem',
            fontSize: '0.82rem'
          }}
        >
          {submitted ? '전달 완료 ✓' : '✔ 참석의사 전달하기'}
        </button>
      </section>

      <div style={{ padding: '0 1.75rem 3rem', background: '#fff' }}>
        <a
          href={`tel:${config.wedding.phone}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: '1px solid #eee',
            borderRadius: '0.6rem',
            padding: '1rem 1.1rem',
            textAlign: 'left'
          }}
        >
          <div>
            <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#333', marginBottom: '0.2rem' }}>축하 화환 보내기</p>
            <p style={{ fontSize: '0.75rem', color: '#999' }}>축하하는 마음을 전해보세요.</p>
          </div>
          <span style={{ fontSize: '1.5rem' }}>💐</span>
        </a>
      </div>
    </>
  )
}

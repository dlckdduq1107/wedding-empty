import React, { useState } from 'react'
import config from '../config.json'

export default function PhotoShare() {
  const { photoShare } = config
  const [uploaded, setUploaded] = useState(false)

  return (
    <section className="section" style={{ background: '#fafafa' }}>
      <p className="eyebrow">Capture Our Moments</p>
      <h2 className="section-title">축하 사진 공유</h2>

      <div style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.8, marginBottom: '1.5rem' }}>
        <p className="whitespace-pre-line" style={{ marginBottom: '1rem' }}>
          {photoShare.description}
        </p>
        <p className="whitespace-pre-line" style={{ marginBottom: '1rem' }}>
          {photoShare.sub}
        </p>
        <p>{photoShare.closing}</p>
      </div>

      <label
        style={{
          display: 'inline-block',
          border: '1px solid #e2b9c4',
          color: config.theme.primaryColor,
          background: '#fff',
          borderRadius: '999px',
          padding: '0.6rem 1.6rem',
          fontSize: '0.82rem',
          cursor: 'pointer'
        }}
      >
        {uploaded ? '업로드 완료 ✓' : '사진 업로드'}
        <input
          type="file"
          accept="image/*"
          multiple
          style={{ display: 'none' }}
          onChange={() => setUploaded(true)}
        />
      </label>

      <p style={{ fontSize: '0.72rem', color: '#aaa', marginTop: '1rem' }}>
        {photoShare.startDate} <br /> {photoShare.note}
      </p>
    </section>
  )
}

import React from 'react'
import config from '../config.json'

function InfoBlock({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
      <p style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.75rem', color: '#333' }}>{title}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        {lines.map((l, i) => (
          <p key={i} style={{ fontSize: '0.82rem', color: '#666', lineHeight: 1.6 }}>
            • {l}
          </p>
        ))}
      </div>
    </div>
  )
}

export default function Location() {
  const { wedding, location } = config
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(wedding.mapQuery)}&output=embed`

  return (
    <section className="section" style={{ background: '#fafafa' }}>
      <p className="eyebrow">Location</p>
      <h2 className="section-title">오시는 길</h2>

      <div style={{ marginBottom: '1.75rem' }}>
        <p style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.4rem' }}>{wedding.venue}</p>
        <p style={{ fontSize: '0.82rem', color: '#666', marginBottom: '0.3rem' }}>{wedding.address}</p>
        <p style={{ fontSize: '0.82rem', color: '#666' }}>Tel. {wedding.phone}</p>
      </div>

      <div style={{ width: '100%', aspectRatio: '4 / 3', borderRadius: '0.5rem', overflow: 'hidden', marginBottom: '1.25rem' }}>
        <iframe
          src={mapSrc}
          style={{ width: '100%', height: '100%', border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="wedding location map"
        />
      </div>

      <a
        href={`https://maps.google.com/?q=${encodeURIComponent(wedding.mapQuery)}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          border: '1px solid #ddd',
          borderRadius: '999px',
          padding: '0.6rem 1.6rem',
          fontSize: '0.82rem',
          color: '#555',
          marginBottom: '2.5rem'
        }}
      >
        🗺 지도 이미지 보기
      </a>

      <InfoBlock title="버스 이용 시" lines={location.bus} />
      <InfoBlock title="지하철 이용 시" lines={location.subway} />
      <InfoBlock title="자가용 이용 시" lines={location.car} />
      <InfoBlock title="주차 안내" lines={location.parking} />
    </section>
  )
}

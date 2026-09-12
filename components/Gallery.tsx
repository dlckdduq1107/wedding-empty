import React, { useState } from 'react'
import config from '../config.json'

const PLACEHOLDER = (n: number) =>
  `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23e8e4e0' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='%23aaa' text-anchor='middle' dy='.3em' font-family='sans-serif'%3EPhoto ${n}%3C/text%3E%3C/svg%3E`

const INITIAL_COUNT = 9

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [expanded, setExpanded] = useState(false)

  const photos = expanded ? config.gallery : config.gallery.slice(0, INITIAL_COUNT)

  return (
    <section className="section">
      <p className="eyebrow">Gallery</p>
      <h2 className="section-title">웨딩 갤러리</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.4rem' }}>
        {photos.map((image, idx) => (
          <div
            key={idx}
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '1',
              backgroundColor: '#e8e4e0',
              overflow: 'hidden',
              cursor: 'pointer'
            }}
            onClick={() => setSelectedImage(idx)}
          >
            <img
              src={image}
              alt={`Wedding photo ${idx + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                e.currentTarget.src = PLACEHOLDER(idx + 1)
              }}
            />
          </div>
        ))}
      </div>

      {config.gallery.length > INITIAL_COUNT && (
        <button
          onClick={() => setExpanded((v) => !v)}
          style={{ marginTop: '1.25rem', fontSize: '0.82rem', color: '#888' }}
        >
          {expanded ? '접기 ^' : '더보기 ˅'}
        </button>
      )}

      {selectedImage !== null && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            zIndex: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div style={{ position: 'relative', maxWidth: '480px', width: '100%' }} onClick={(e) => e.stopPropagation()}>
            <img
              src={config.gallery[selectedImage]}
              alt={`Wedding photo ${selectedImage + 1}`}
              style={{ width: '100%', height: 'auto', borderRadius: '0.25rem' }}
              onError={(e) => {
                e.currentTarget.src = PLACEHOLDER(selectedImage + 1)
              }}
            />
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '-2.25rem',
                right: 0,
                color: '#fff',
                fontSize: '1.25rem'
              }}
            >
              ✕
            </button>
            {selectedImage > 0 && (
              <button
                onClick={() => setSelectedImage(selectedImage - 1)}
                style={{ position: 'absolute', left: '0.5rem', top: '50%', transform: 'translateY(-50%)', color: '#fff', fontSize: '1.75rem' }}
              >
                ‹
              </button>
            )}
            {selectedImage < config.gallery.length - 1 && (
              <button
                onClick={() => setSelectedImage(selectedImage + 1)}
                style={{ position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)', color: '#fff', fontSize: '1.75rem' }}
              >
                ›
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

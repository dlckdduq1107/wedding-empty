import React, { useState } from 'react'
import config from '../config.json'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
        {config.gallery.map((image, idx) => (
          <div
            key={idx}
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '1',
              backgroundColor: '#e5e7eb',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              cursor: 'pointer',
              opacity: 1,
              transition: 'opacity 0.3s'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9' }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
            onClick={() => setSelectedImage(idx)}
          >
            <img
              src={image}
              alt={`Wedding photo ${idx + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23e0e0e0' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='%23999' text-anchor='middle' dy='.3em'%3EPhoto ${idx + 1}%3C/text%3E%3C/svg%3E`
              }}
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '800px',
              width: '100%'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={config.gallery[selectedImage]}
              alt={`Wedding photo ${selectedImage + 1}`}
              style={{ width: '100%', height: 'auto', borderRadius: '0.5rem' }}
              onError={(e) => {
                e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23444' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' font-size='40' fill='%23fff' text-anchor='middle' dy='.3em'%3EPhoto ${selectedImage + 1}%3C/text%3E%3C/svg%3E`
              }}
            />
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                backgroundColor: 'white',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                fontWeight: 'bold',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              ✕
            </button>
            {/* Navigation */}
            {selectedImage > 0 && (
              <button
                onClick={() => setSelectedImage(selectedImage - 1)}
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1.25rem'
                }}
              >
                ‹
              </button>
            )}
            {selectedImage < config.gallery.length - 1 && (
              <button
                onClick={() => setSelectedImage(selectedImage + 1)}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1.25rem'
                }}
              >
                ›
              </button>
            )}
          </div>
        </div>
      )}

      <div style={{ textAlign: 'center', fontSize: '0.875rem', color: config.theme.textColor }}>
        <p>사진을 클릭하면 큰 이미지로 볼 수 있습니다</p>
      </div>
    </div>
  )
}

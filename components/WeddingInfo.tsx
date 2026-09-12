import React from 'react'
import config from '../config.json'

export default function WeddingInfo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* 신랑 정보 */}
      <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', padding: '1.5rem', borderTop: `4px solid ${config.theme.primaryColor}` }}>
        <h2 style={{ fontSize: '1.25rem', fontFamily: 'serif', fontWeight: 'bold', marginBottom: '1rem', color: config.theme.primaryColor }}>신랑</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: config.theme.textColor }}>{config.groom.name}</p>
          <p style={{ fontSize: '0.875rem', color: config.theme.textColor }}>{config.groom.parents}</p>
          <p style={{ fontSize: '0.75rem', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: `1px solid ${config.theme.accentColor}`, color: config.theme.textColor }}>
            <span>문의 </span>
            <a href={`tel:${config.contact.groomPhone}`} style={{ fontWeight: 'semibold', textDecoration: 'none', color: 'inherit' }}>
              {config.contact.groomPhone}
            </a>
          </p>
        </div>
      </div>

      {/* 신부 정보 */}
      <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', padding: '1.5rem', borderTop: `4px solid ${config.theme.primaryColor}` }}>
        <h2 style={{ fontSize: '1.25rem', fontFamily: 'serif', fontWeight: 'bold', marginBottom: '1rem', color: config.theme.primaryColor }}>신부</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: config.theme.textColor }}>{config.bride.name}</p>
          <p style={{ fontSize: '0.875rem', color: config.theme.textColor }}>{config.bride.parents}</p>
          <p style={{ fontSize: '0.75rem', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: `1px solid ${config.theme.accentColor}`, color: config.theme.textColor }}>
            <span>문의 </span>
            <a href={`tel:${config.contact.bridePhone}`} style={{ fontWeight: 'semibold', textDecoration: 'none', color: 'inherit' }}>
              {config.contact.bridePhone}
            </a>
          </p>
        </div>
      </div>

      {/* 결혼식 정보 */}
      <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', padding: '1.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontFamily: 'serif', fontWeight: 'bold', marginBottom: '1.5rem', color: config.theme.primaryColor }}>결혼식 안내</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ fontSize: '1.125rem', color: config.theme.primaryColor }}>📅</div>
            <div>
              <p style={{ fontSize: '0.875rem', color: config.theme.textColor }}>일시</p>
              <p style={{ fontWeight: 'semibold', color: config.theme.textColor }}>
                {config.wedding.date} {config.wedding.dayOfWeek}
              </p>
              <p style={{ fontSize: '1.125rem', fontWeight: 'bold', color: config.theme.primaryColor }}>
                {config.wedding.time}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ fontSize: '1.125rem', color: config.theme.primaryColor }}>📍</div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '0.875rem', color: config.theme.textColor }}>장소</p>
              <p style={{ fontWeight: 'semibold', color: config.theme.textColor }}>
                {config.wedding.venue}
              </p>
              <p style={{ fontSize: '0.875rem', color: config.theme.textColor }}>
                {config.wedding.address}
              </p>
              <a
                href={config.wedding.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.875rem',
                  marginTop: '0.5rem',
                  display: 'inline-block',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '0.25rem',
                  backgroundColor: config.theme.accentColor,
                  color: config.theme.textColor,
                  textDecoration: 'none'
                }}
              >
                지도 보기
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 팁 */}
      <div style={{ backgroundColor: '#fef3c7', borderRadius: '0.5rem', padding: '1.5rem' }}>
        <h3 style={{ fontWeight: 'semibold', marginBottom: '0.5rem', color: config.theme.textColor }}>
          💡 Tip
        </h3>
        <p style={{ fontSize: '0.875rem', color: config.theme.textColor }}>
          지도 보기 버튼을 클릭하여 현재 위치에서 결혼식장까지의 길을 확인할 수 있습니다.
        </p>
      </div>
    </div>
  )
}

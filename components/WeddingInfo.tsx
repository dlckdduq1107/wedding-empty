import React from 'react'
import config from '../config.json'

export default function WeddingInfo() {
  return (
    <div className="space-y-6">
      {/* 신랑 정보 */}
      <div className="bg-white rounded-lg p-6" style={{ borderTop: `4px solid ${config.theme.primaryColor}` }}>
        <h2 className="text-xl font-serif font-bold mb-4" style={{ color: config.theme.primaryColor }}>신랑</h2>
        <div className="space-y-2">
          <p className="text-2xl font-bold" style={{ color: config.theme.textColor }}>{config.groom.name}</p>
          <p className="text-sm" style={{ color: config.theme.textColor }}>{config.groom.parents}</p>
          <p className="text-xs mt-3 pt-3" style={{ color: config.theme.textColor, borderTopColor: config.theme.accentColor, borderTopWidth: '1px' }}>
            <span>문의 </span>
            <a href={`tel:${config.contact.groomPhone}`} className="font-semibold hover:underline">
              {config.contact.groomPhone}
            </a>
          </p>
        </div>
      </div>

      {/* 신부 정보 */}
      <div className="bg-white rounded-lg p-6" style={{ borderTop: `4px solid ${config.theme.primaryColor}` }}>
        <h2 className="text-xl font-serif font-bold mb-4" style={{ color: config.theme.primaryColor }}>신부</h2>
        <div className="space-y-2">
          <p className="text-2xl font-bold" style={{ color: config.theme.textColor }}>{config.bride.name}</p>
          <p className="text-sm" style={{ color: config.theme.textColor }}>{config.bride.parents}</p>
          <p className="text-xs mt-3 pt-3" style={{ color: config.theme.textColor, borderTopColor: config.theme.accentColor, borderTopWidth: '1px' }}>
            <span>문의 </span>
            <a href={`tel:${config.contact.bridePhone}`} className="font-semibold hover:underline">
              {config.contact.bridePhone}
            </a>
          </p>
        </div>
      </div>

      {/* 결혼식 정보 */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-serif font-bold mb-6" style={{ color: config.theme.primaryColor }}>결혼식 안내</h2>
        
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="text-lg" style={{ color: config.theme.primaryColor }}>📅</div>
            <div>
              <p className="text-sm" style={{ color: config.theme.textColor }}>일시</p>
              <p className="font-semibold" style={{ color: config.theme.textColor }}>
                {config.wedding.date} {config.wedding.dayOfWeek}
              </p>
              <p className="text-lg font-bold" style={{ color: config.theme.primaryColor }}>
                {config.wedding.time}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-lg" style={{ color: config.theme.primaryColor }}>📍</div>
            <div className="flex-1">
              <p className="text-sm" style={{ color: config.theme.textColor }}>장소</p>
              <p className="font-semibold" style={{ color: config.theme.textColor }}>
                {config.wedding.venue}
              </p>
              <p className="text-sm" style={{ color: config.theme.textColor }}>
                {config.wedding.address}
              </p>
              <a
                href={config.wedding.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm mt-2 inline-block px-3 py-1 rounded"
                style={{ backgroundColor: config.theme.accentColor, color: config.theme.textColor }}
              >
                지도 보기
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 오시는 길 안내 (선택사항) */}
      <div className="bg-wedding-light rounded-lg p-6">
        <h3 className="font-semibold mb-2" style={{ color: config.theme.textColor }}>
          💡 Tip
        </h3>
        <p className="text-sm" style={{ color: config.theme.textColor }}>
          지도 보기 버튼을 클릭하여 현재 위치에서 결혼식장까지의 길을 확인할 수 있습니다.
        </p>
      </div>
    </div>
  )
}

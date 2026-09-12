import React, { useState } from 'react'
import Image from 'next/image'
import config from '../config.json'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {config.gallery.map((image, idx) => (
          <div
            key={idx}
            className="relative w-full aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setSelectedImage(idx)}
          >
            <img
              src={image}
              alt={`Wedding photo ${idx + 1}`}
              className="w-full h-full object-cover"
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
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={config.gallery[selectedImage]}
              alt={`Wedding photo ${selectedImage + 1}`}
              className="w-full h-auto rounded-lg"
              onError={(e) => {
                e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23444' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' font-size='40' fill='%23fff' text-anchor='middle' dy='.3em'%3EPhoto ${selectedImage + 1}%3C/text%3E%3C/svg%3E`
              }}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold"
            >
              ✕
            </button>
            {/* Navigation */}
            {selectedImage > 0 && (
              <button
                onClick={() => setSelectedImage(selectedImage - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center"
              >
                ‹
              </button>
            )}
            {selectedImage < config.gallery.length - 1 && (
              <button
                onClick={() => setSelectedImage(selectedImage + 1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center"
              >
                ›
              </button>
            )}
          </div>
        </div>
      )}

      <div className="text-center text-sm" style={{ color: config.theme.textColor }}>
        <p>사진을 클릭하면 큰 이미지로 볼 수 있습니다</p>
      </div>
    </div>
  )
}

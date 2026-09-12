import React from 'react'
import config from '../config.json'

export default function Header() {
  return (
    <div className="relative w-full h-96 bg-gradient-to-b flex items-center justify-center overflow-hidden" style={{
      backgroundImage: `linear-gradient(135deg, ${config.theme.accentColor} 0%, ${config.theme.primaryColor} 100%)`,
    }}>
      <div className="text-center text-white z-10 px-4">
        <div className="text-5xl md:text-6xl font-serif font-bold mb-4">
          {config.groom.name} <span className="text-3xl md:text-4xl">♥</span> {config.bride.name}
        </div>
        <div className="text-lg md:text-xl font-light">
          {config.wedding.date}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white opacity-30 rounded-full" />
      <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-white opacity-20" />
    </div>
  )
}

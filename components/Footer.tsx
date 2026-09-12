import React from 'react'
import config from '../config.json'

export default function Footer() {
  return (
    <footer
      className="py-8 px-4 border-t text-center text-sm"
      style={{
        borderColor: config.theme.accentColor,
        backgroundColor: config.theme.accentColor + '20',
        color: config.theme.textColor
      }}
    >
      <div className="max-w-2xl mx-auto space-y-4">
        <p className="font-serif text-lg" style={{ color: config.theme.primaryColor }}>
          {config.groom.name} & {config.bride.name}
        </p>
        <p>
          {config.wedding.date} {config.wedding.dayOfWeek} {config.wedding.time}
        </p>
        <p className="text-xs opacity-70">
          Made with ♥ using Next.js
        </p>
      </div>
    </footer>
  )
}

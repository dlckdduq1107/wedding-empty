import React, { useEffect, useState } from 'react'
import config from '../config.json'

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토']

function getCalendarGrid(year: number, month: number) {
  const firstDay = new Date(year, month - 1, 1)
  const lastDate = new Date(year, month, 0).getDate()
  const startWeekday = firstDay.getDay()

  const cells: (number | null)[] = []
  for (let i = 0; i < startWeekday; i++) cells.push(null)
  for (let d = 1; d <= lastDate; d++) cells.push(d)
  while (cells.length % 7 !== 0) cells.push(null)

  const rows: (number | null)[][] = []
  for (let i = 0; i < cells.length; i += 7) rows.push(cells.slice(i, i + 7))
  return rows
}

function useCountdown(targetDate: Date) {
  const [diff, setDiff] = useState(0)

  useEffect(() => {
    const tick = () => setDiff(Math.max(0, targetDate.getTime() - Date.now()))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [targetDate])

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  return { days, hours, minutes, seconds }
}

export default function DateCountdown() {
  const { wedding, groom, bride } = config
  const rows = getCalendarGrid(wedding.year, wedding.month)
  const target = new Date(wedding.year, wedding.month - 1, wedding.day, wedding.hour, wedding.minute)
  const { days, hours, minutes, seconds } = useCountdown(target)

  const hour12 = wedding.hour % 12 === 0 ? 12 : wedding.hour % 12
  const ampm = wedding.hour < 12 ? '오전' : '오후'

  return (
    <section className="section">
      <p style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.02em', marginBottom: '0.35rem' }}>
        {wedding.year}.{String(wedding.month).padStart(2, '0')}.{String(wedding.day).padStart(2, '0')}
      </p>
      <p style={{ fontSize: '0.85rem', color: '#888', marginBottom: '1.75rem' }}>
        {wedding.dayOfWeekLabel.split(' ')[0]} {ampm} {hour12}시
      </p>

      <div style={{ maxWidth: '320px', margin: '0 auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem' }}>
          <thead>
            <tr>
              {WEEKDAYS.map((w, i) => (
                <th
                  key={w}
                  style={{
                    padding: '0.5rem 0',
                    fontWeight: 500,
                    color: i === 0 ? '#e08a9e' : '#999'
                  }}
                >
                  {w}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri}>
                {row.map((d, ci) => {
                  const isWeddingDay = d === wedding.day
                  return (
                    <td key={ci} style={{ padding: '0.45rem 0', textAlign: 'center', color: ci === 0 ? '#e08a9e' : '#333' }}>
                      {d && (
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '26px',
                            height: '26px',
                            borderRadius: '50%',
                            background: isWeddingDay ? config.theme.primaryColor : 'transparent',
                            color: isWeddingDay ? '#fff' : undefined
                          }}
                        >
                          {d}
                        </span>
                      )}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', margin: '2rem 0 1.25rem' }}>
        {[
          ['DAYS', days],
          ['HOUR', hours],
          ['MIN', minutes],
          ['SEC', seconds]
        ].map(([label, value]) => (
          <div key={label as string} style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.25rem', fontWeight: 700, color: '#333' }}>{String(value).padStart(2, '0')}</p>
            <p style={{ fontSize: '0.65rem', color: '#aaa', letterSpacing: '0.05em' }}>{label as string}</p>
          </div>
        ))}
      </div>

      <p style={{ fontSize: '0.85rem', color: '#666' }}>
        {groom.name}, {bride.name}의 결혼식이 <strong style={{ color: config.theme.primaryColor }}>{days}</strong>일 남았습니다.
      </p>
    </section>
  )
}

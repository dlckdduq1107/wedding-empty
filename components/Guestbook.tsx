import React, { useState } from 'react'
import config from '../config.json'

interface Entry {
  author: string
  date: string
  message: string
}

export default function Guestbook() {
  const [entries, setEntries] = useState<Entry[]>(config.guestbook)
  const [showAll, setShowAll] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const visible = showAll ? entries : entries.slice(0, 2)

  const handleSubmit = () => {
    if (!name.trim() || !message.trim()) return
    const today = new Date()
    const dateStr = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`
    setEntries([{ author: name, date: dateStr, message }, ...entries])
    setName('')
    setMessage('')
    setShowForm(false)
  }

  const removeEntry = (idx: number) => {
    setEntries(entries.filter((_, i) => i !== idx))
  }

  return (
    <section className="section">
      <p className="eyebrow">Guestbook</p>
      <h2 className="section-title">방명록</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '1.25rem' }}>
        {visible.map((entry, idx) => (
          <div
            key={idx}
            style={{
              position: 'relative',
              textAlign: 'left',
              background: '#fdf6f8',
              borderRadius: '0.6rem',
              padding: '1.1rem',
              fontSize: '0.8rem',
              color: '#555',
              lineHeight: 1.6
            }}
          >
            <button
              onClick={() => removeEntry(idx)}
              style={{ position: 'absolute', top: '0.6rem', right: '0.6rem', color: '#bbb', fontSize: '0.75rem' }}
            >
              ✕
            </button>
            <p style={{ marginBottom: '0.6rem' }}>{entry.message}</p>
            <p style={{ fontSize: '0.72rem', color: '#b98a9a', textAlign: 'right' }}>
              - {entry.author} -<br />
              {entry.date}
            </p>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', fontSize: '0.8rem', color: '#888', marginBottom: showForm ? '1.25rem' : 0 }}>
        <button onClick={() => setShowForm((v) => !v)} style={{ color: config.theme.primaryColor }}>
          작성하기
        </button>
        {entries.length > 2 && (
          <button onClick={() => setShowAll((v) => !v)}>{showAll ? '접기' : '전체보기'}</button>
        )}
      </div>

      {showForm && (
        <div style={{ maxWidth: '320px', margin: '0 auto', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름"
            style={{ border: '1px solid #eee', borderRadius: '0.4rem', padding: '0.55rem 0.75rem', fontSize: '0.82rem' }}
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="축하 메시지를 남겨주세요"
            rows={3}
            style={{ border: '1px solid #eee', borderRadius: '0.4rem', padding: '0.55rem 0.75rem', fontSize: '0.82rem', resize: 'none' }}
          />
          <button
            onClick={handleSubmit}
            style={{
              alignSelf: 'flex-end',
              background: config.theme.primaryColor,
              color: '#fff',
              borderRadius: '999px',
              padding: '0.45rem 1.25rem',
              fontSize: '0.78rem'
            }}
          >
            등록
          </button>
        </div>
      )}
    </section>
  )
}

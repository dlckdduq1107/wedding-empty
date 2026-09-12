import React, { useState } from 'react'
import config from '../config.json'

interface Account {
  role: string
  bank: string
  accountHolder: string
  accountNumber: string
}

function AccountGroup({ title, accounts }: { title: string; accounts: Account[] }) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = (num: string) => {
    navigator.clipboard?.writeText(num)
    setCopied(num)
    setTimeout(() => setCopied(null), 1500)
  }

  return (
    <div style={{ border: '1px solid #eee', borderRadius: '0.5rem', marginBottom: '0.75rem', overflow: 'hidden' }}>
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          width: '100%',
          padding: '0.9rem 1.1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.88rem',
          fontWeight: 600,
          color: '#333'
        }}
      >
        <span>{title}</span>
        <span style={{ color: '#bbb', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>⌄</span>
      </button>

      {open && (
        <div style={{ padding: '0 1.1rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {accounts.map((a) => (
            <div key={a.accountNumber} style={{ background: '#fafafa', borderRadius: '0.4rem', padding: '0.75rem 0.9rem', textAlign: 'left' }}>
              <p style={{ fontSize: '0.72rem', color: '#999', marginBottom: '0.2rem' }}>
                {a.role} · {a.bank}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
                <p style={{ fontSize: '0.82rem', fontWeight: 600, color: '#333' }}>{a.accountNumber}</p>
                <button
                  onClick={() => handleCopy(a.accountNumber)}
                  style={{
                    fontSize: '0.7rem',
                    padding: '0.3rem 0.65rem',
                    borderRadius: '0.3rem',
                    background: copied === a.accountNumber ? config.theme.primaryColor : '#eee',
                    color: copied === a.accountNumber ? '#fff' : '#666'
                  }}
                >
                  {copied === a.accountNumber ? '복사됨' : '복사'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function AccountInfo() {
  const { account } = config

  return (
    <section className="section" style={{ background: '#fafafa' }}>
      <p className="eyebrow">Account</p>
      <h2 className="section-title">마음 전하실 곳</h2>

      <p className="whitespace-pre-line" style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.8, marginBottom: '1.75rem' }}>
        {account.intro}
      </p>

      <div style={{ maxWidth: '360px', margin: '0 auto' }}>
        <AccountGroup title="신랑측" accounts={account.groom} />
        <AccountGroup title="신부측" accounts={account.bride} />
      </div>
    </section>
  )
}

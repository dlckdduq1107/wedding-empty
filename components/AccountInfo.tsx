import React, { useState } from 'react'
import config from '../config.json'

interface Account {
  bank: string
  accountHolder: string
  accountNumber: string
}

const AccountCard: React.FC<{ title: string; accounts: Account[]; color: string }> = ({ title, accounts, color }) => {
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = (accountNumber: string) => {
    navigator.clipboard.writeText(accountNumber)
    setCopied(accountNumber)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', padding: '1.5rem', marginBottom: '1rem', borderLeft: `4px solid ${color}` }}>
      <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '1rem', color }}>{title}</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {accounts.map((account, idx) => (
          <div key={idx} style={{ backgroundColor: '#f9fafb', padding: '1rem', borderRadius: '0.25rem' }}>
            <p style={{ fontSize: '0.75rem', marginBottom: '0.25rem', color: config.theme.textColor }}>
              {account.bank} · {account.accountHolder}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
              <p style={{ fontSize: '0.875rem', fontFamily: 'monospace', fontWeight: 'bold', color: config.theme.textColor }}>
                {account.accountNumber}
              </p>
              <button
                onClick={() => handleCopy(account.accountNumber)}
                style={{
                  fontSize: '0.75rem',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '0.25rem',
                  border: 'none',
                  backgroundColor: copied === account.accountNumber ? config.theme.primaryColor : config.theme.accentColor,
                  color: copied === account.accountNumber ? 'white' : config.theme.textColor,
                  cursor: 'pointer'
                }}
              >
                {copied === account.accountNumber ? '복사됨' : '복사'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function AccountInfo() {
  const groomAccounts = [config.account.groom]
  const brideAccounts = [config.account.bride]
  const groomParentsAccounts = [config.account.groomParents]
  const brideParentsAccounts = [config.account.brideParents]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ backgroundColor: '#dbeafe', borderLeft: '4px solid #60a5fa', padding: '1rem', borderRadius: '0.25rem' }}>
        <p style={{ fontSize: '0.875rem', color: config.theme.textColor }}>
          💬 축의금 계좌는 개인정보 보호를 위해 안전하게 보관됩니다.
        </p>
      </div>

      <AccountCard
        title={`신랑 ${config.groom.name}`}
        accounts={groomAccounts}
        color={config.theme.primaryColor}
      />

      <AccountCard
        title={`신부 ${config.bride.name}`}
        accounts={brideAccounts}
        color={config.theme.primaryColor}
      />

      <div style={{ marginTop: '1.5rem', borderTop: `2px solid ${config.theme.accentColor}` }} />

      <AccountCard
        title="신랑 측 부모님"
        accounts={groomParentsAccounts}
        color="#4b7bec"
      />

      <AccountCard
        title="신부 측 부모님"
        accounts={brideParentsAccounts}
        color="#f368e0"
      />

      <div style={{ backgroundColor: '#fef3c7', borderLeft: '4px solid #fbbf24', padding: '1rem', borderRadius: '0.25rem' }}>
        <p style={{ fontSize: '0.75rem', fontWeight: 'semibold', marginBottom: '0.5rem', color: config.theme.textColor }}>💡 축의금 전송 팁</p>
        <ul style={{ fontSize: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.25rem', color: config.theme.textColor }}>
          <li>• 계좌 번호를 복사 버튼으로 복사하세요</li>
          <li>• 개별 계좌로 직접 이체하실 수 있습니다</li>
          <li>• 우편 또는 직접 전달도 가능합니다</li>
        </ul>
      </div>
    </div>
  )
}

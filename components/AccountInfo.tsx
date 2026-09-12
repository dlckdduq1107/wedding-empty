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
    <div className="bg-white rounded-lg p-6 mb-4" style={{ borderLeft: `4px solid ${color}` }}>
      <h3 className="text-lg font-bold mb-4" style={{ color }}>{title}</h3>
      <div className="space-y-3">
        {accounts.map((account, idx) => (
          <div key={idx} className="bg-gray-50 p-4 rounded">
            <p className="text-xs mb-1" style={{ color: config.theme.textColor }}>
              {account.bank} · {account.accountHolder}
            </p>
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-mono font-bold" style={{ color: config.theme.textColor }}>
                {account.accountNumber}
              </p>
              <button
                onClick={() => handleCopy(account.accountNumber)}
                className="text-xs px-2 py-1 rounded transition-colors"
                style={{
                  backgroundColor: copied === account.accountNumber ? config.theme.primaryColor : config.theme.accentColor,
                  color: copied === account.accountNumber ? 'white' : config.theme.textColor,
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
    <div className="space-y-6">
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
        <p className="text-sm" style={{ color: config.theme.textColor }}>
          💬 축의금 계좌는 개인정보 보호를 위해 암호화되어 안전하게 보관됩니다.
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

      <div className="my-6" style={{ borderTop: `2px solid ${config.theme.accentColor}` }} />

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

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
        <p className="text-xs font-semibold mb-2" style={{ color: config.theme.textColor }}>💡 축의금 전송 팁</p>
        <ul className="text-xs space-y-1" style={{ color: config.theme.textColor }}>
          <li>• 계좌 번호를 길게 눌러 복사하세요</li>
          <li>• 개별 계좌로 직접 이체하실 수 있습니다</li>
          <li>• 우편 또는 직접 전달도 가능합니다</li>
        </ul>
      </div>
    </div>
  )
}

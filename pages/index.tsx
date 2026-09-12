import React, { useState } from 'react'
import Head from 'next/head'
import config from '../config.json'
import Header from '../components/Header'
import WeddingInfo from '../components/WeddingInfo'
import AccountInfo from '../components/AccountInfo'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

export default function Home() {
  const [activeTab, setActiveTab] = useState('info')

  return (
    <>
      <Head>
        <title>{config.groom.name} ♥ {config.bride.name} 결혼합니다</title>
        <meta name="description" content={`${config.groom.name}와 ${config.bride.name}의 결혼식 청장입니다.`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&family=Noto+Serif+KR:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <main style={{ minHeight: '100vh', backgroundColor: config.theme.backgroundColor }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Header with Hero Image */}
          <Header />

          {/* Main Content */}
          <div style={{ padding: '2rem 1rem' }}>
            {/* Title */}
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h1 style={{ fontSize: '2rem', fontFamily: 'serif', fontWeight: 'bold', marginBottom: '0.5rem', color: config.theme.textColor }}>
                {config.groom.name} <span style={{ color: config.theme.primaryColor }}>♥</span> {config.bride.name}
              </h1>
              <p style={{ color: config.theme.textColor }}>결혼합니다</p>
            </div>

            {/* Tab Navigation */}
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => setActiveTab('info')}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  backgroundColor: activeTab === 'info' ? config.theme.primaryColor : config.theme.accentColor,
                  color: activeTab === 'info' ? 'white' : config.theme.textColor,
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
              >
                청장
              </button>
              <button
                onClick={() => setActiveTab('account')}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  backgroundColor: activeTab === 'account' ? config.theme.primaryColor : config.theme.accentColor,
                  color: activeTab === 'account' ? 'white' : config.theme.textColor,
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
              >
                축의금
              </button>
              <button
                onClick={() => setActiveTab('gallery')}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  backgroundColor: activeTab === 'gallery' ? config.theme.primaryColor : config.theme.accentColor,
                  color: activeTab === 'gallery' ? 'white' : config.theme.textColor,
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
              >
                갤러리
              </button>
            </div>

            {/* Content */}
            {activeTab === 'info' && <WeddingInfo />}
            {activeTab === 'account' && <AccountInfo />}
            {activeTab === 'gallery' && <Gallery />}
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </>
  )
}

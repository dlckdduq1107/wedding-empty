import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import QRCode from 'qrcode.react'
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

      <main className="min-h-screen bg-wedding-bg" style={{ backgroundColor: config.theme.backgroundColor }}>
        <div className="max-w-2xl mx-auto">
          {/* Header with Hero Image */}
          <Header />

          {/* Main Content */}
          <div className="px-4 py-8">
            {/* Title */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2" style={{ color: config.theme.textColor }}>
                {config.groom.name} <span style={{ color: config.theme.primaryColor }}>♥</span> {config.bride.name}
              </h1>
              <p className="text-sm md:text-base" style={{ color: config.theme.textColor }}>결혼합니다</p>
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-2 justify-center mb-6 sticky top-0 bg-wedding-bg z-10 py-4">
              <button
                onClick={() => setActiveTab('info')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'info'
                    ? 'text-white'
                    : 'text-wedding-text'
                }`}
                style={{
                  backgroundColor: activeTab === 'info' ? config.theme.primaryColor : config.theme.accentColor,
                }}
              >
                청장
              </button>
              <button
                onClick={() => setActiveTab('account')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'account'
                    ? 'text-white'
                    : 'text-wedding-text'
                }`}
                style={{
                  backgroundColor: activeTab === 'account' ? config.theme.primaryColor : config.theme.accentColor,
                }}
              >
                축의금
              </button>
              <button
                onClick={() => setActiveTab('gallery')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'gallery'
                    ? 'text-white'
                    : 'text-wedding-text'
                }`}
                style={{
                  backgroundColor: activeTab === 'gallery' ? config.theme.primaryColor : config.theme.accentColor,
                }}
              >
                갤러리
              </button>
            </div>

            {/* Content */}
            {activeTab === 'info' && <WeddingInfo />}
            {activeTab === 'account' && <AccountInfo />}
            {activeTab === 'gallery' && <Gallery />}

            {/* QR Code */}
            {config.qrCode.enabled && (
              <div className="flex flex-col items-center gap-4 my-8 pt-8 border-t" style={{ borderColor: config.theme.accentColor }}>
                <p className="text-sm" style={{ color: config.theme.textColor }}>이 페이지를 공유해주세요</p>
                <div className="bg-white p-4 rounded-lg">
                  <QRCode value={config.qrCode.url} size={150} />
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </>
  )
}

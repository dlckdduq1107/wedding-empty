import React from 'react'
import Head from 'next/head'
import config from '../config.json'
import Hero from '../components/Hero'
import Invitation from '../components/Invitation'
import Profile from '../components/Profile'
import Gallery from '../components/Gallery'
import DateCountdown from '../components/DateCountdown'
import Location from '../components/Location'
import AccountInfo from '../components/AccountInfo'
import Quote from '../components/Quote'
import Footer from '../components/Footer'

export default function Home() {
  const title = `${config.wedding.month}월 ${config.wedding.day}일 ${config.groom.name} ♥ ${config.bride.name} 결혼합니다.`
  const description = `${config.groom.name}와 ${config.bride.name}의 결혼식에 초대합니다.`
  const ogImage = `${config.site.url}${config.hero.image}`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />

        {/* Open Graph / 카카오톡, 문자 등 링크 공유 미리보기 */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />

        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&family=Noto+Serif+KR:wght@400;700&family=Cormorant+Garamond:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main style={{ minHeight: '100vh', background: '#f4f4f4' }}>
        <div style={{ maxWidth: '480px', margin: '0 auto', background: '#fff', boxShadow: '0 0 24px rgba(0,0,0,0.06)' }}>
          <Hero />
          <Invitation />
          <Profile />
          <Gallery />
          <DateCountdown />
          <Location />
          <AccountInfo />
          <Quote />
          <Footer />
        </div>
      </main>
    </>
  )
}

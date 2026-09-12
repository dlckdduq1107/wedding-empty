# 웨딩 카드 - Next.js 템플릿

결혼식 청장을 간편하게 만들고 배포할 수 있는 Next.js 템플릿입니다.

## 🎉 주요 기능

- ✨ **예쁜 UI**: 반응형 디자인으로 모든 기기에서 완벽하게 표시
- 🎨 **커스터마이징**: `config.json`에서 색상, 정보 모두 수정 가능
- 📱 **모바일 최적화**: 스마트폰에서 부드러운 경험
- 🖼️ **갤러리**: 결혼식 사진을 멋지게 전시
- 💰 **축의금 계좌**: 계좌 정보를 안전하게 공유
- 🔗 **QR 코드**: 페이지를 쉽게 공유
- 📍 **지도 연동**: 결혼식장 위치 자동 연동

## 🚀 시작하기

### 1. 설치

```bash
# 프로젝트 클론
git clone <repository-url>
cd wedding-card

# 의존성 설치
npm install
```

### 2. 정보 수정

`config.json` 파일을 열어서 다음 정보를 수정하세요:

```json
{
  "groom": {
    "name": "신랑 이름",
    "parents": "신랑 부모 이름"
  },
  "bride": {
    "name": "신부 이름",
    "parents": "신부 부모 이름"
  },
  "wedding": {
    "date": "2024년 10월 3일",
    "time": "오후 2시",
    "venue": "결혼식장 이름",
    "address": "주소",
    "mapUrl": "구글맵 URL"
  },
  // ... 더 많은 설정들
}
```

### 3. 사진 추가

`public/images/` 폴더에 사진을 추가하고, `config.json`의 `gallery` 배열에 경로를 추가하세요:

```json
"gallery": [
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  "/images/photo3.jpg",
  "/images/photo4.jpg"
]
```

### 4. 로컬에서 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:3000` 을 열어서 확인하세요.

## 🌐 배포

### Vercel (추천)

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

### Netlify

```bash
# Netlify CLI 설치
npm i -g netlify-cli

# 빌드
npm run build

# 배포
netlify deploy --prod --dir=.next
```

### GitHub Pages

```bash
# next.config.js에서 export 설정 추가 후
npm run build

# out 폴더의 내용을 gh-pages 브랜치에 푸시
```

## 🎨 커스터마이징

### 색상 변경

`config.json`의 `theme` 섹션에서 색상을 변경하세요:

```json
"theme": {
  "primaryColor": "#d4a574",      // 주색상
  "backgroundColor": "#faf9f7",   // 배경색
  "textColor": "#333333",         // 텍스트 색
  "accentColor": "#e8d5c4"        // 강조색
}
```

### 폰트 변경

`tailwind.config.js`의 `fontFamily` 섹션을 수정하세요.

### 추가 페이지

`pages/` 폴더에 새로운 파일을 추가하면 자동으로 라우트가 생성됩니다.

예: `pages/about.tsx` → `/about`

## 📦 프로젝트 구조

```
wedding-card/
├── pages/              # Next.js 페이지
├── components/         # React 컴포넌트
├── styles/            # CSS 파일
├── public/            # 정적 파일 (이미지 등)
├── config.json        # 설정 파일 (중요!)
├── package.json       # 의존성
└── tsconfig.json      # TypeScript 설정
```

## 💡 팁

- **QR 코드**: `config.json`의 `qrCode.url`을 배포 후 실제 도메인으로 변경하세요
- **지도**: Google Maps 링크를 `wedding.mapUrl`에 설정하면 됩니다
- **계좌 정보**: 실제 계좌 정보를 입력하면 방문객들이 복사할 수 있습니다

## 🛠️ 기술 스택

- **Next.js 14**: React 프레임워크
- **TypeScript**: 타입 안정성
- **Tailwind CSS**: 유틸리티 CSS 프레임워크
- **QRCode.react**: QR 코드 생성

## 📝 라이선스

이 템플릿은 자유롭게 사용, 수정, 배포할 수 있습니다.

## 🤝 지원

질문이나 문제가 있으시면 이슈를 등록해주세요.

---

행복한 결혼 축하합니다! 🎊

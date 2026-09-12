# 배포 가이드

이 문서는 웨딩 카드를 다양한 플랫폼에 배포하는 방법을 설명합니다.

## Vercel 배포 (가장 쉬움) ⭐

### 1단계: GitHub에 업로드

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/wedding-card.git
git push -u origin main
```

### 2단계: Vercel에 연결

1. [Vercel](https://vercel.com)에 방문
2. GitHub 계정으로 로그인
3. "New Project" 클릭
4. `wedding-card` 레포지토리 선택
5. Deploy 클릭

**자동 배포**: GitHub에 푸시할 때마다 자동으로 배포됩니다!

### 3단계: 도메인 설정

1. Vercel 대시보드에서 프로젝트 선택
2. "Settings" → "Domains"
3. 원하는 도메인 추가
4. DNS 설정 완료

---

## Netlify 배포

### 1단계: 빌드

```bash
npm run build
```

### 2단계: Netlify에 배포

```bash
npm i -g netlify-cli
netlify deploy --prod --dir=.next
```

또는 Netlify 웹사이트에서:

1. [Netlify](https://netlify.com)에 방문
2. "New site from Git" 클릭
3. GitHub 계정 연결
4. 레포지토리 선택
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Deploy

---

## GitHub Pages 배포

### 1단계: next.config.js 수정

```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

### 2단계: GitHub Actions 설정

`.github/workflows/deploy.yml` 생성:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - run: npm install
      - run: npm run build
      
      - uses: actions/upload-artifact@v3
        with:
          name: build
          path: out/
      
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

### 3단계: GitHub Pages 활성화

1. Repository Settings
2. Pages
3. Branch: `gh-pages` 선택
4. Save

---

## 커스텀 서버에 배포 (VPS)

### 1단계: 서버 준비

```bash
# Node.js 설치
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# PM2 설치 (프로세스 관리)
sudo npm install -g pm2
```

### 2단계: 앱 배포

```bash
# 레포지토리 클론
git clone https://github.com/YOUR_USERNAME/wedding-card.git
cd wedding-card

# 의존성 설치
npm install --production

# 빌드
npm run build

# PM2로 시작
pm2 start "npm start" --name "wedding-card"
pm2 startup
pm2 save
```

### 3단계: Nginx 설정

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## config.json 수정 후 배포

배포 후 `config.json`을 수정했다면:

### Vercel/Netlify
자동으로 다시 배포되거나, 수동으로:
```bash
git add config.json
git commit -m "Update wedding info"
git push
```

### GitHub Pages
```bash
npm run build
git add out/
git commit -m "Update website"
git push
```

### 커스텀 서버
```bash
git pull
npm run build
pm2 restart wedding-card
```

---

## 도메인 연결

### Vercel
Vercel 대시보드 → Settings → Domains

### Netlify
Netlify 대시보드 → Domain settings

### 커스텀 도메인 + 무료 HTTPS
[Let's Encrypt](https://letsencrypt.org) + Certbot 사용:

```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

---

## 문제 해결

### 이미지가 안 보임
- `public/images/` 폴더 확인
- 파일 경로 확인 (대소문자 주의)

### 스타일이 깨짐
```bash
npm run build
rm -rf .next
npm run dev
```

### 배포 후 업데이트 안 됨
```bash
# 캐시 삭제 후 재배포
npm run build
git add .
git commit -m "Force update"
git push
```

---

축하합니다! 🎊

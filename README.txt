Vercel 배포용 청첩장 수정본

원본 링크:
https://w.theirmood.com/card/JuDhccipUH

수정 사항:
- 신부 어머님 이름: 김은희
- 연락하기: 신랑/신부 측 이름과 전화번호를 펼쳐서 표시
- 웨딩 갤러리: 더보기 버튼 제거
- D-day 숫자 카운트다운 및 '동현, 은비의 결혼식이 21일 남았습니다.' 문구 제거
- 약도 이미지 보기 버튼 제거
- 방명록 제거
- 계좌번호: 펼쳐진 상태로 표시
- 신부 어머님 계좌 제거
- 참석 의사 전달 제거
- 축하 화환 보내기 제거
- 축하 사진 공유 제거
- 마지막 '카카오톡으로 초대장 보내기' 제거
- 원본 themood SPA 런타임 제거하여 Vercel에서 정적 HTML로 표시

배포 구조:
/
├─ index.html
├─ vercel.json
└─ card/
   └─ JuDhccipUH/
      └─ index.html

Vercel 설정:
- Framework Preset: Other
- Build Command: blank
- Output Directory: .
- Install Command: blank
- Root Directory: ./

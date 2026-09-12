# 이미지 넣는 곳

이 폴더에 실제 사진 파일을 넣어주세요. 파일명을 아래와 똑같이 맞추면
config.json 수정 없이 바로 반영됩니다. (다른 이름을 쓰고 싶으면
config.json의 경로 값만 바꿔주면 됩니다.)

| 용도 | 파일명 | config.json 위치 |
|---|---|---|
| 메인 커버 사진 (세로 4:5 비율 권장) | hero.jpg | hero.image |
| 신랑 프로필 사진 (정사각형 권장) | groom.jpg | groom.photo |
| 신부 프로필 사진 (정사각형 권장) | bride.jpg | bride.photo |
| 갤러리 사진 1~12 | photo1.jpg ~ photo12.jpg | gallery |

- 사진을 안 넣으면 회색 placeholder 박스가 대신 표시됩니다.
- 갤러리는 9장까지 기본 노출되고 "더보기"를 누르면 나머지가 펼쳐집니다.
  (사진이 12장보다 적으면 config.json의 gallery 배열에서 없는 줄을 지우면 됩니다.)

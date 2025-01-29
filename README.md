# 💻melodypalette
## 🚀 소개
### 프로젝트 소개
음악 스트리밍 서비스가 보편화되면서 개인 맞춤형 음악 추천에 대한 사용자 기대가 높아지고 있습니다. 특히, 사용자가 쉽게 좋아하는 장르나 아티스트에 접근하고, 실시간 인기 곡을 빠르게 파악할 수 있는 플랫폼의 수요가 늘고 있습니다. Melodypalette는 이러한 음악 소비 트렌드를 반영하여 사용자에게 직관적인 UI와 맞춤형 추천을 통해 한층 향상된 음악 탐색 경험을 제공합니다. 

### 개발기간
2024.05.28 - 2024.11.12

### 주요 기능
1. 로그인(Spotify OAuth 2.0 인증 방식)
- 사용자가 Spotify 계정으로 Melodypalette에 로그인하여 개인화된 음악 추천 및 저장 기능을 사용할 수 있도록 합니다.
- 별도의 회원가입은 없으며, Spotify 계정으로 연결
- 인증 토큰 관리: 사용자 세션을 유지하기 위해 Access Token 및 Refresh Token 관리, 자동 토큰 갱신 기능 구현
2. 실시간 음악 랭킹 확인
- Spotify의 ‘Hot Hits Korea’ 등 실시간 차트 정보를 가져와 인기 있는 곡을 사용자에게 표시
- 플랫폼 접속 시 차트 정보를 갱신하여 최신 순위 반영
- 인기 트랙의 앨범 이미지, 곡명, 아티스트명 등을 리스트로 표시
3. 음악 검색
- 사용자가 원하는 음악을 아티스트명, 곡명 등을 기준으로 검색할 수 있도록 지원
- 검색어 입력 시 Spotify의 검색 API와 연동하여 실시간으로 결과 제공
- 검색 결과 음악을 재생 및 플레이리스트에 추가 가능
- 관련 아티스트 클릭 시 해당 아티스트로 검색 가능
4. 음악 추천
- 사용자의 음악 취향에 맞춰 장르와 아티스트 기반의 음악 추천을 제공
- 선택된 선호도를 기반으로 한 콘텐츠 기반 필터링 알고리즘(코사인 유사도 사용)과 연동하여 맞춤 추천 제공
- 추천된 음악 재생 및 플레이리스트에 추가 가능
- 추천된 음악에 좋아요 표시
5. 음악 재생
- 사용자가 선택한 곡을 재생하고, 재생 중 Play/Pause를 제공하여 음악을 쉽게 제어
- Spotify Web Playback SDK를 활용하여 곡 재생, 일시정지 기능 제공
- 현재 재생 중인 곡의 정보(앨범 이미지, 곡명, 아티스트명 등)와 재생 상태를 UI에 반영
6. My Playlist 관리 
- 사용자 개인의 플레이리스트 생성 및 관리를 통해 음악 컬렉션을 유지
- 플레이리스트 생성/수정/삭제 기능
7. 좋아요 표시 음악 리스트
- 추천 음악 중 사용자가 선호하는 음악 좋아요 표시하면 프로필에서 따로 리스트 확인 및 재생 가능


### 기술적 특징
🎵 멜로디팔레트 – 기술 스택 및 선택 이유
1. Backend 🛠️
✅ Node.js + Express.js
- 비동기 처리가 강력하여 Spotify API와 같은 외부 API 요청을 빠르고 효율적으로 처리 가능
- 가볍고 확장성이 뛰어나며, RESTful API 구축에 최적화됨
- 다양한 미들웨어를 제공하여 데이터 검증, 로깅, 보안 처리를 쉽게 구현 가능
2. Database 🗂️
✅ MongoDB
- NoSQL 기반으로, Spotify 사용자 데이터(선호도, 플레이리스트 등)를 유연하게 저장 및 관리 가능
- JSON 형태로 데이터를 다루므로 Spotify API 응답 데이터와의 호환성이 좋음
- 확장성이 뛰어나고, 빠른 검색 및 데이터 조회 기능을 제공
3. Frontend 🎨
✅ React.js
- 컴포넌트 기반 아키텍처로 유지보수가 용이하고 UI 재사용성이 뛰어남
- Spotify API에서 받아온 데이터를 동적으로 렌더링하기에 적합
- 상태 관리를 통해 사용자 플레이리스트 및 음악 선호도를 효율적으로 관리 가능
✅ CSS
- 직관적이고 가벼운 스타일링을 위해 CSS 사용
4. API Integration 🔗
✅ Spotify Web API & Web Playback SDK
- 실시간 음악 스트리밍 및 사용자 맞춤 추천 기능 구현 가능
- OAuth 인증을 통한 Spotify 계정 연동 및 사용자 맞춤 데이터 활용
- Web Playback SDK를 이용하여 브라우저에서 직접 음악을 재생할 수 있는 기능 제공

## 🛠️ 기술 스택
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![spotify](https://img.shields.io/badge/spotify-1ED76?style=for-the-badge&logo=spotify&logoColor=white) ![express](https://img.shields.io/badge/express-00000?style=for-the-badge&logo=express&logoColor=white) ![mongodb](https://img.shields.io/badge/mongodb-47A24?style=for-the-badge&logo=mongodb&logoColor=white) 

| **Category** | **Stack** |
|:------------:|:----------:|
| **Back-end** | `Node.js` |
| **Front-end** | `React`, `JavaScript` |
| Uncategorized | `HTML5`, `CSS3`, `spotify`, `express`, `mongodb` |


## 💻 설치 방법
1. 의존성 설치
```bash
npm install
```

2. 개발 서버 실행
```bash
cd ./melodypalette/server
npm start
```

4. 빌드
```bash
cd ./melodypalette/client
npm start
```


# Melodypalette
음악 추천 플랫폼

## 🖥️프로젝트 소개
자신의 취향에 맞는 음악을 물감 팔레트처럼 찾아보는 플랫폼입니다.<br>
사용자의 취향과 관심사에 기반하여 맞춤형 음악 추천을 제공해 사용자가 쉽고 빠르게 원하는 음악을 찾을 수 있도록 도와줄 것입니다.<br><Br>

## 🕰️개발 기간
2024.05.28 ~ 2024.11.12<br><br>

## ⚙️개발 언어
- - Backend
    - Node.js, Express.js
- Frontend:
    - React, CSS
- Database
    - MongoDB (Spotify 사용자 권한코드, 사용자 데이터, 사용자 플레이리스트, 선호도)
- API Integration
    - Spotify Web API, Web Playback SDK

## 📍주요 기능
- 계정 생성 및 로그인
- 음악 검색
- 실시간 TOP 랭킹 확인
- MY PLAYLIST 관리
- 음악 추천 요청 : 사용자가 선호하는 장르 또는 아티스트를 선택하여 취향에 맞는 음악을 추천받음
- 피드백 : 추천받은 음악에 대한 피드백 제공(좋아요, 싫어요, 스킵)
- 사용자 프로필 관리
- 사용자 선호도 관리 : 음악 추천 요청 시 선택한 장르 또는 아티스트 수정
<br>

## start
```
cd ./meldoypalette/client
npm start
// 서버 오픈
cd ./melodypalette/server
npm start
```

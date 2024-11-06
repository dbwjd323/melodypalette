import React, { useEffect } from 'react';
import './LoginPopup.css';

function LoginPopup({ isOpen, onClose }) {

  const handleSpotifyLogin = () => {
    // 스포티파이 인증 페이지로 이동
    window.location.href = 'http://localhost:5000/api/spotify/auth';
  };

  useEffect(() => {
    if (isOpen) {
      // 스크롤 위치 계산
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const popup = document.querySelector('.login-popup');
      if (popup) {
        popup.style.top = `${scrollTop + window.innerHeight / 2 - popup.offsetHeight / 2}px`;
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="login-popup-overlay">
      <div className="login-popup">
        <button className="close-button" onClick={onClose}>X</button>
        <h2 className='login'>로그인</h2>
        <p>Melodypalette는 스포티파이 계정과 연동해서 사용할 수 있습니다</p>
        <img src="/images/spotify.png" alt="spotifylogo" />
        <button className="login-button" onClick={handleSpotifyLogin}>
          스포티파이로 로그인
        </button>
      </div>
    </div>
  );
}

export default LoginPopup;

import React from 'react';
// import { useNavigate } from 'react-router-dom';
import './LoginPopup.css';

function LoginPopup({ isOpen, onClose, switchToSignup }) {
  // const navigate = useNavigate();

  const handleSpotifyLogin = () => {
    // 스포티파이 인증 페이지로 이동
    window.location.href = 'http://localhost:5000/api/spotify/auth';
  };

  if (!isOpen) return null;

  return (
    <div className="login-popup-overlay">
      <div className="login-popup">
        <button className="close-button" onClick={onClose}>X</button>
        <h2 className='login'>로그인</h2>
        <button className="spotify-login-button" onClick={handleSpotifyLogin}>
          스포티파이로 로그인
        </button>
        {/* <button type="button" className="join-button" onClick={switchToSignup}>회원가입</button> */}
      </div>
    </div>
  );
}

export default LoginPopup;

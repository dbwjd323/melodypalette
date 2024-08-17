import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './LoginPopup.css';

function LoginPopup({ isOpen, onClose, switchToSignup, onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('로그인 요청:', { email, password });
    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      const { token, username } = data;
      if (response.ok) {
        localStorage.setItem('token', token); // 로그인 성공 시 토큰을 저장
        login(token); // AuthContext를 통해 로그인 상태 업데이트
        onLoginSuccess(email, username, token); 

        // 사용자에게 알람 표시 후 메인 페이지로 이동
        alert('로그인 성공! 메인 페이지로 이동합니다.');
        onClose(); // 팝업 닫기
        navigate('/'); // 메인 페이지로 이동
      } else {
        setMessage(data.message || '로그인 실패');
      }
    } catch (error) {
      console.error('로그인 오류:', error);

      setMessage('서버 오류');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="login-popup-overlay">
      <div className="login-popup">
        <button className="close-button" onClick={onClose}>X</button>
        <h2 className='login'>로그인</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">ID(Email)</label>
            <input type="text" id="login-username" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">비밀번호</label>
            <input type="password" id="login-password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="login-button">로그인</button>
          <button type="button" className="join-button" onClick={switchToSignup}>회원가입</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default LoginPopup;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css';
import Navbar from '../Navbar/Navbar';
import Rank from '../Rank/Rank';
import Search from '../Search/Search';

function Main() {
  const navigate = useNavigate();

  const handleRecommendButtonClick = () => {
    navigate('/RecommendationOptions');
  };

  return (
    <div className="Main">
      <Navbar />
      <section className="section1" id="main-section">
        <div className="intro-container">
          <div className="text-container">
            <h3>Melodypalette에서 새로운 음악을 만나보세요</h3>
            <p className="intro-text">음악 취향을 분석하여, 당신에게 딱 맞는 곡을 추천해드립니다.</p>
            <button className="recommend-button" onClick={handleRecommendButtonClick}>음악 추천받기</button>
          </div>
          <img src="/images/main.png" alt="main" />
        </div>
      </section>

      <section className="section2" id="features-section">
        <div className="features-container">
          <h2>Melodypalette의 주요 기능</h2>
          <div className="feature-list">
            <div className="feature-item">
              <h3>취향에 맞는 음악 추천</h3>
              <img src="/images/feature1.png" alt="feature1" />
              <div className='feature-box'>
                <p>선호하는 아티스트 또는 장르를 선택해,<br /> 당신만의 음악을 추천받을 수 있습니다</p>
              </div>
            </div>
            <div className="feature-item">
              <h3>나만의 플레이리스트 만들기</h3>
              <img src="/images/feature2.png" alt="feature2" />
              <div className='feature-box'>
                <p>추천받은 노래 중 맘에 드는 곡을 모아 <br /> 나만의 플레이리스트를 만들 수 있습니다</p>
              </div>
            </div>
            <div className="feature-item">
              <h3>음악 재생</h3>
              <img src="/images/feature3.png" alt="feature3" />
              <div className='feature-box'>
                <p>추천된 곡들을 바로 들어보면서<br /> 음악을 즐길 수 있습니다</p>
              </div>
            </div>
            <div className="feature-item">
              <h3>좋아요 표시하기</h3>
              <img src="/images/feature4.png" alt="feature4" />
              <div className='feature-box'>
                <p>마음에 드는 곡에 좋아요 표시를 해<br /> 나만의 컬렉션을 만들어보세요</p>
              </div>
            </div>
            <div className="feature-item">
              <h3>실시간 음악 랭킹</h3>
              <img src="/images/feature5.png" alt="feature5" />
              <div className='feature-box'>
                <p>현재 인기 있는 음악을 실시간으로 확인하고, 최신 트렌드를 파악할 수 있습니다</p>
              </div>
            </div>
            <div className="feature-item">
              <h3>음악 및 아티스트 검색</h3>
              <img src="/images/feature6.png" alt="feature6" />
              <div className='feature-box'>
                <p>원하는 음악이나 아티스트를 검색하여<br /> 쉽게 찾아 듣고, 즐길 수 있습니다</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Search />
      <Rank />
    </div>
  );
}

export default Main;

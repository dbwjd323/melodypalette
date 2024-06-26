import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './SearchResult.css';

function SearchResult() {
  const [navbarBackground, setNavbarBackground] = useState('transparent');
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get('query');

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setNavbarBackground('black');
    } else {
      setNavbarBackground('transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className='SearchResult'>
      <nav className="navbar" style={{ backgroundColor: navbarBackground }}>
      <div className="navbar-container">
          <h3 className="logo">Melodypalette</h3>
          <div className='navbar-box'>
            <ul>
              <li><a href="#section1">제목 또는 아티스트 검색</a></li>
              <li><a href="#section2">실시간 top 랭킹</a></li>
              <li><a href="#section3">Playlist</a></li>
              <li><a href="#section4">프로필</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <section className='search-container2'>
        <div className='search-container'>
            <input type="text" className="search-input" placeholder="검색어를 입력하세요" />
            <button className="search-button">검색</button>
          </div>
      </section>
      <section className='result-song-container'>
        <p><span className='search-keyword'>"{query}"</span>에 대한 검색 결과입니다.</p>
        <h2>곡 + </h2>
        <div className='result-song-list'>
          <div className='result-song-line'>
            <div className='album-img2' />
            <p>곡 명</p>
            <p>아티스트 명</p>
            <p>듣기</p>
            <p>내 리스트</p>
          </div>
          <div className='result-song-line'>
            <div className='album-img2' />
            <p>곡 명</p>
            <p>아티스트 명</p>
            <p>듣기</p>
            <p>내 리스트</p>
          </div>
          <div className='result-song-line'>
            <div className='album-img2' />
            <p>곡 명</p>
            <p>아티스트 명</p>
            <p>듣기</p>
            <p>내 리스트</p>
          </div>
          <div className='result-song-line'>
            <div className='album-img2' />
            <p>곡 명</p>
            <p>아티스트 명</p>
            <p>듣기</p>
            <p>내 리스트</p>
          </div>
          <div className='result-song-line'>
            <div className='album-img2' />
            <p>곡 명</p>
            <p>아티스트 명</p>
            <p>듣기</p>
            <p>내 리스트</p>
          </div>
        </div>
      </section>
      <section className='result-singer-container'>
        <h2>아티스트 + </h2>
        <div className='singer-img-container'>
          <div className='singer-img-box'>
            <div className='singer-img' />
            <p className='singer-name'>아티스트 명</p>
          </div>  
          <div className='singer-img-box'>
            <div className='singer-img' />
            <p className='singer-name'>아티스트 명</p>
          </div>
          <div className='singer-img-box'>
            <div className='singer-img' />
            <p className='singer-name'>아티스트 명</p>
          </div>        
        </div>
      </section>
    </div>
  );
}

export default SearchResult;

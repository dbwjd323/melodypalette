import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Player() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');
  const trackUri = queryParams.get('uri');
  const trackName = queryParams.get('name');
  const trackArtist = queryParams.get('artist');
  const trackAlbumImage = queryParams.get('albumImage');
  const [player, setPlayer] = useState(null);
  const [isPaused, setIsPaused] = useState(true); // 재생/일시정지 상태 관리

  useEffect(() => {
    // Spotify SDK 로드
    window.onSpotifyWebPlaybackSDKReady = () => {
      const newPlayer = new window.Spotify.Player({
        name: 'My Spotify Player',
        getOAuthToken: cb => { cb(token); },
        volume: 0.5,
      });

      newPlayer.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);

        if (trackUri) {
          fetch(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`, {
            method: 'PUT',
            body: JSON.stringify({ uris: [trackUri] }),
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          });
        }
      });

      // 플레이어 연결
      newPlayer.connect().then(success => {
        if (success) {
          setPlayer(newPlayer); // 플레이어가 준비되면 설정
          console.log('Player connected successfully');
        } else {
          console.log('Player connection failed');
        }
      });
    };

    if (!window.Spotify) {
      const script = document.createElement('script');
      script.src = "https://sdk.scdn.co/spotify-player.js";
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      if (player) {
        player.disconnect();
      }
    };
  }, [token, trackUri, player]);

  // 재생/일시정지 토글 함수
  const togglePlayback = () => {
    if (player) {
      player.togglePlay().then(() => {
        setIsPaused(!isPaused);
      }).catch(error => {
        console.error('Error toggling playback:', error);
      });
    } else {
      console.error('Player is not initialized');
    }
  };

  return (
    <div>
      <h2>Now Playing</h2>
      {trackUri ? (
        <div>
          <img src={trackAlbumImage} alt={trackName} style={{ width: '300px' }} />
          <h3>{trackName}</h3>
          <p>{trackArtist}</p>
        </div>
      ) : (
        <p>No track info available</p>
      )}
      <button onClick={togglePlayback}>
        {isPaused ? 'Play' : 'Pause'}
      </button>
    </div>
  );
}

export default Player;

// Spotify.js
import React from 'react';

const SPOTIFY_CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const SPOTIFY_REDIRECT_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
const SPOTIFY_SCOPES = [
  "user-read-currently-playing",
  "user-read-playback-state"
];
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${encodeURIComponent(SPOTIFY_REDIRECT_URI)}&scope=${SPOTIFY_SCOPES.join('%20')}&response_type=token&show_dialog=true`;
if (typeof SPOTIFY_REDIRECT_URI === 'undefined') {
    console.error('The SPOTIFY_REDIRECT_URI environment variable is not set.');
    // Handle the missing environment variable appropriately, perhaps by setting a default
    // or by not rendering the component that depends on it.
  } else {
    // Now you can safely use SPOTIFY_REDIRECT_URI as it's guaranteed to be a string
    const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${encodeURIComponent(SPOTIFY_REDIRECT_URI)}&scope=${SPOTIFY_SCOPES.join('%20')}&response_type=token&show_dialog=true`;
    // ... rest of your code
  }

const Spotify = () => {
  const handleLogin = () => {
    window.location.href = AUTH_URL;
  };

  return (
    <div className="spotify-auth">
      <button onClick={handleLogin} className="spotify-login-button">
        Login to Spotify
      </button>
    </div>
  );
};

export default Spotify;

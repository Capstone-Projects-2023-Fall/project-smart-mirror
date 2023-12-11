// SpotifyAuth.js (client-side)
import React, { useState, useEffect } from 'react';

const SPOTIFY_CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const SPOTIFY_REDIRECT_URI = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI;
const SPOTIFY_SCOPES = ["user-read-currently-playing"];
const SPOTIFY_AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${encodeURIComponent(SPOTIFY_REDIRECT_URI)}&scope=${SPOTIFY_SCOPES.join('%20')}&response_type=token&show_dialog=true`;

const SpotifyAuth = () => {
  const [spotifyAccessToken, setSpotifyAccessToken] = useState(null);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.substring(1));
      const accessToken = params.get('access_token');
      if (accessToken) {
        setSpotifyAccessToken(accessToken);
        window.location.hash = ''; // Clear the access token from the URL

        // Get the user's currently playing track using the access token
        getCurrentlyPlaying(accessToken);
      }
    }
  }, []);

  const getCurrentlyPlaying = (accessToken) => {
    fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      if(response.status === 204) {
        console.log("No content, nothing is currently playing.");
        return null;
      }
      return response.json();
    })
    .then(data => {
      if(data) {
        setCurrentlyPlaying(data);
        console.log(data);
      }
    })
    .catch(error => {
      console.error('Error fetching currently playing:', error);
    });
  };

  const handleAuth = () => {
    window.location.href = SPOTIFY_AUTH_URL;
  };

  return (
    <div>
      <button onClick={handleAuth} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Authorize Spotify
      </button>
      {currentlyPlaying && (
        <div>
          <h3>Currently Playing Track:</h3>
          <p>Artist: {currentlyPlaying.item.artists[0].name}</p>
          <p>Track: {currentlyPlaying.item.name}</p>
        </div>
      )}
    </div>
  );
};

export default SpotifyAuth;

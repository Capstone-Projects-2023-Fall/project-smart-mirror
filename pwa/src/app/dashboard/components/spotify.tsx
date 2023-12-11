import React, { useState, useEffect } from 'react';
import { supabase } from "@/app/utils/supabase-client";

// Constants for Spotify's configuration
const SPOTIFY_CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const SPOTIFY_REDIRECT_URI = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI;
const SPOTIFY_SCOPES = ['user-read-currently-playing'];
const SPOTIFY_AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${encodeURIComponent(SPOTIFY_REDIRECT_URI)}&scope=${SPOTIFY_SCOPES.join(' ')}&response_type=token&show_dialog=true`;

const SpotifyAuth = () => {
  const [spotifyAccessToken, setSpotifyAccessToken] = useState(localStorage.getItem('spotifyAccessToken') || null);

  useEffect(() => {
    // Check if there's an access token in the URL fragment
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const accessToken = params.get('access_token');

    if (accessToken) {
      setSpotifyAccessToken(accessToken);
      localStorage.setItem('spotifyAccessToken', accessToken);
      // Clear the URL fragment
      window.location.hash = '';
    }
  }, []);

  const handleSpotifyAuth = () => {
    // Redirect to Spotify's authorization URL
    window.location.href = SPOTIFY_AUTH_URL;
  };

  const upsertSpotifyToken = async (token) => {
    const { data: { user }, error: userError } = await supabase.auth.getUser();
  
    if (user) {
      try {
        const { data, error } = await supabase
          .from('profiles') // Replace with your table name
          .upsert({id: user.id, spotify_access_token: token }); // Replace 'id' with 'user_id' or your table's primary key column name
  
        if (error) throw error  ;
        
        // Handle success
        console.log('Token upserted successfully', data);
      } catch (error) {
        console.error('Error upserting token:', error);
      }
    } else {
      console.error('User not authenticated');
    }
  };

  useEffect(() => {
    if (spotifyAccessToken) {
      // Call upsert function when a new token is set
      upsertSpotifyToken(spotifyAccessToken);
    }
  }, [spotifyAccessToken]);

  return (
    <div>
      <button onClick={handleSpotifyAuth} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Authorize Spotify
      </button>
      {spotifyAccessToken && (
        <div>
          <h3>Your Spotify Access Token:</h3>
          <p>{spotifyAccessToken}</p>
        </div>
      )}
    </div>
  );
};

export default SpotifyAuth;

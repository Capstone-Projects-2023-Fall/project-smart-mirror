// SpotifyAuth.js (client-side)
import React, { useState, useEffect } from 'react';
import { supabase } from "@/app/utils/supabase-client";

// Constants for Spotify's configuration
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
        // Upsert the access token to the Supabase database
        upsertSpotifyAccessToken(accessToken);
        window.location.hash = ''; // Clear the access token from the URL

        // Optionally, get the user's currently playing track using the access token
        // getCurrentlyPlaying(accessToken);
      }
    }
  }, []);

  // Function to save the Spotify access token to Supabase
  const upsertSpotifyAccessToken = async (accessToken) => {
    try {
        let { data: user, error: userError } = await supabase.auth.getUser();
      
        if (userError) {
          throw userError;
        }
      
        if (!user) {
          throw new Error('No active user session found.');
        }
      
        const updates = {
          id: user.id, // Make sure this is the primary key in your table
          spotify_access_token: accessToken,
          updated_at: new Date(),
        };
  
      // Corrected upsert without the 'returning' option
      let { error } = await supabase.from('profiles').upsert(updates, {
        onConflict: 'id' // Assuming 'id' is the primary key of the 'profiles' table
      });
  
      if (error) throw error;
  
      console.log('Spotify access token upserted successfully.');
    } catch (error) {
      console.error('Error upserting the Spotify access token:', error.message);
    }
  };

  const handleAuth = () => {
    window.location.href = SPOTIFY_AUTH_URL;
  };

  return (
    <div>
      <button onClick={handleAuth} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Authorize Spotify
      </button>
      {/* 
        CurrentlyPlaying component or logic can be placed here if needed.
        Remove the following code if you plan to display the currently playing track elsewhere.
      */}
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

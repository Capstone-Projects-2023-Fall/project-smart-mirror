import React, { useState, useEffect } from 'react';
import './spotify.css';
import SpotifySVG from "./svg/spotify.svg";
import Image from 'next/image';
const Spotify = () => {
  const [currentTrack, setCurrentTrack] = useState(null);
  // Ensure this access token is valid and replace it with a new one if it has expired.
  const accessToken = 'BQAXll0rLuRzI4P4DIOCvm2ljHkdUmhwqBpzt0o9GYQCbd2qOSR6hWqjkbOcPThM_4vKTMRcscgQ-IzC9ErwJv-O_ZwH-IzcYXmNt2vHd7LU_1PhsR9MzfVUBeq0zD2QcjUTlIjQsWq-QGJOPeZJU2PJPUoLp1qgQ0M7RWH3WNPZpldVvT1eM_TyAJgDAqSc2OkAj-ku';

  useEffect(() => {
    const fetchCurrentTrack = async () => {
        try {
          const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
            headers: {
              'Authorization': `Bearer ${accessToken}`
            },
          });
      
          // Check if the response has content before parsing it as JSON
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
      
          // Spotify might return a 204 (No Content) if there is no track currently playing
          if (response.status === 204) {
            console.log('No track is currently playing.');
            setCurrentTrack(null);
            return;
          }
      
          // Now we can safely parse the JSON
          const data = await response.json();
          console.log('API Response:', data);
      
          if (data && data.is_playing) {
            setCurrentTrack(data.item);
          } else {
            setCurrentTrack(null);
          }
        } catch (error) {
          console.error('Error fetching the current track:', error);
          setCurrentTrack(null);
        }
      };
      

    if (accessToken) {
      fetchCurrentTrack();
    }
    const intervalId = setInterval(fetchCurrentTrack, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [accessToken]);

  

  return (
    <>
       <div className="spotify-logobox">
            {/* Use the imported SVG */}
            <Image 
                src={SpotifySVG.src} // Use the src from the WeatherSVG object
                alt={'title'}
                width={40} // Use the width from the WeatherSVG object
                height={75} // Use the height from the WeatherSVG object
            />  
            {/* Now Playing text */}
            <p className= "nowplaying">Now Playing</p>
            {/* Additional weather information goes here */}
        </div>
        <div className="spotify-widget"> {} 
            {currentTrack ? (
            <div>
                <h2 className="track-name">{currentTrack.name}</h2> {}
                <p className="artist-name">{currentTrack.artists.map(artist => artist.name).join(', ')}</p> {}
                {}
                {currentTrack.album && currentTrack.album.images && currentTrack.album.images.length > 0 && (
                <img className="album-cover" src={currentTrack.album.images[0].url} alt={`Album cover for ${currentTrack.name}`} />
                )}
            </div>
            ) : (
            <p>No track is currently playing.</p>
            )}
        </div>
    </>
  );
}
  
export default Spotify;
import React, { useState, useEffect } from 'react';
import './spotify.css';
import SpotifySVG from "./svg/spotify.svg";
import Image from 'next/image';

type Props = {
    id: string | null;
};

export default function Spotify( { id } : Props) {
  const [currentTrack, setCurrentTrack] = useState<any>(null);
  // Ensure this access token is valid and replace it with a new one if it has expired.
  const accessToken = 'eyJhbGciOiJIUzI1NiIsImtpZCI6IjgveGRoY0ZEY3hVME56VUwiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzAyMjU1ODAyLCJpYXQiOjE3MDIyNTIyMDIsImlzcyI6Imh0dHBzOi8vc2FxemdkaW5wc2J4amR6aGdmdWUuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6ImE2ZTJjOTM0LTU0MWMtNDkwNS04NTQxLWIwNDk2NjJmODdmMiIsImVtYWlsIjoidG9ueXRyYW40MEBnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7InVzZXJuYW1lIjoiS2luZCBFbGVwaGFudCJ9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6InBhc3N3b3JkIiwidGltZXN0YW1wIjoxNzAyMjUyMjAyfV0sInNlc3Npb25faWQiOiI5MzUxYThiYS1hZTg3LTQ1ZGUtOTFmMy0yN2Y2YTUyNjBiZWIifQ.QOegshE2fqXhGgTZ1s0XrD0SC27PE3Y-GuvwDFewczA';

  useEffect(() => {
    const fetchCurrentTrack = async () => {
        const settings = {
            headers: {'Authorization': 'Bearer ' + accessToken}
         }
        const response = await fetch('https://api.spotify.com/v1/me', settings);
        const data = await response.json()
        try {
          const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`
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
                <p className="artist-name">{currentTrack.artists.map((artist: { name: any; }) => artist.name).join(', ')}</p> {}
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
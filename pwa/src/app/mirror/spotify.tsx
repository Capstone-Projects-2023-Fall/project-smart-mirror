import React, { useState, useEffect } from 'react';
import './spotify.css';
import SpotifySVG from "./svg/spotify.svg";
import Image from 'next/image';
import { supabase } from "@/app/utils/supabase-client";

type Props = {
  id: string | null;
};

export default function Spotify( { id } : Props) {
    const [currentTrack, setCurrentTrack] = useState<any>(null);

    // Function to fetch the access token from Supabase
    const fetchAccessToken = async () => {
        // Call supabase.auth.getUser() to get the user details
        const { data: authData, error: authError } = await supabase.auth.getUser();

        // Check if there is an authenticated user
        if (authError) {
            console.error('Error fetching user:', authError);
            return null;
        }

        if (authData.user) {
            const { data, error } = await supabase
                .from('profiles')
                .select('spotify_access_token')
                .eq('id', authData.user.id)
                .single();

            if (error) {
                console.error('Error fetching access token:', error);
                return null;
            }

            // Return the Spotify access token
            return data.spotify_access_token;
        } else {
            // No user is logged in
            console.error('No user logged in');
            return null;
        }
    };

    const fetchCurrentTrack = async (accessToken: string) => {
        const settings = {
            headers: {'Authorization': 'Bearer ' + accessToken}
        };
        
        try {
            const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', settings);
            
            if (response.status === 204) {
                console.log('No track is currently playing.');
                setCurrentTrack(null);
                return;
            }

            const data = await response.json();
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

    useEffect(() => {
      let intervalId: NodeJS.Timeout;

        const init = async () => {
            const token = await fetchAccessToken();
            if (token) {
                await fetchCurrentTrack(token); // Fetch once immediately
                intervalId = setInterval(() => fetchCurrentTrack(token), 30000); // Then set up the interval
            }
        };

        init();

        // Cleanup function to clear the interval when the component unmounts
        return () => {
            clearInterval(intervalId);
        };
    }, []); // Empty dependency array indicates this effect runs once on mount

    return (
        <>
            <div className="spotify-logobox">
                <Image
                    src={SpotifySVG.src}
                    alt={'Spotify Logo'}
                    width={40}
                    height={75}
                />
                <p className="nowplaying">Now Playing</p>
            </div>
            <div className="spotify-widget">
                {currentTrack ? (
                    <div>
                        <h2 className="track-name">{currentTrack.name}</h2>
                        <p className="artist-name">{currentTrack.artists.map((artist: { name: any; }) => artist.name).join(', ')}</p>
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
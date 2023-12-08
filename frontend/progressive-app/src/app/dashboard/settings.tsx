import { Formik, Form, Field } from "formik";
import { useState } from "react";
import React from "react";
import Location from "./_components/settings/location";
import UserSettings from "./_components/settings/user";
import { User } from "@supabase/auth-helpers-nextjs";
import Mirror from "./_components/settings/mirror";
import DataPrivacy from "./_components/settings/data_privacy";
import Time from "./_components/settings/time";
import Widget from "./_components/settings/widget";
import Notifications from "./notifications";


type Props = {
  user: User | null;
};

const SPOTIFY_CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const SPOTIFY_REDIRECT_URI = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI;
const SPOTIFY_AUTH_SCOPE = 'user-read-currently-playing'; // Add other scopes as needed
const SPOTIFY_AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
export default function Settings({ user }: Props) {
  const handleSpotifyAuth = () => {
    // Redirect to Spotify's authorization page with the necessary query parameters
    window.location.href = `${SPOTIFY_AUTH_ENDPOINT}?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${encodeURIComponent(SPOTIFY_REDIRECT_URI)}&scope=${encodeURIComponent(SPOTIFY_AUTH_SCOPE)}&response_type=token&show_dialog=true`;
  };

  

  return (
    <>
      <section className="mt-8 font-medium">
        <Location />
        <Mirror />
        <Time user={user} />
        {/* Add the Spotify authorization button */}
        <button
          onClick={handleSpotifyAuth}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Authorize Spotify
        </button>
      </section>
    </>
  );
}
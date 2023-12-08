"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import MainDisplay from "./main";
import { User } from "@supabase/supabase-js";

type Props = {
  user: User | null;
};

export default function Dashboard({ user }: Props) {
  const [page, setPage] = useState<string>("Home");

  // Handle the Spotify access token on mount
  useEffect(() => {
    // Only run on the client-side
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      const params = new URLSearchParams(hash.substring(1)); // Remove the '#' and parse
      const accessToken = params.get('access_token');

      if (accessToken) {
        console.log('Spotify Access Token:', accessToken); // For development purposes only

        // You should store the access token in a secure place
        // For example, in a state management system, context, or in-memory storage

        // Optionally, clean up the URL
        window.history.replaceState(null, null, ' '); // This will remove the hash from the URL
      }
    }
  }, []);

  return (
    <main className="flex h-screen flex-col">
      <div className="flex h-full w-full flex-row">
        <Sidebar update={setPage} />
        <section className="m-12 flex h-full w-full flex-col ">
          <Navbar user={user} />
          <MainDisplay page={page} user={user} />
        </section>
      </div>
    </main>
  );
}

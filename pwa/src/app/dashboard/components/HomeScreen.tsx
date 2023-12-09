"use client";
import { getRandomGreeting } from "@/app/utils/getRandomGreeting";
import React, { useEffect, useState } from "react";
import { supabase } from "@/app/utils/supabase-client";

type Props = {};

export default function HomeScreen({}: Props) {
  const [username, setUsername] = useState<string>("");
  const [greeting, setGreeting] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUsername(session?.user.user_metadata.username);
    };

    fetchData();
    setGreeting(getRandomGreeting(username, 18));
  }, [username]);

  return (
    <div>
      <h1 className="font-bold">{greeting}</h1>
    </div>
  );
}

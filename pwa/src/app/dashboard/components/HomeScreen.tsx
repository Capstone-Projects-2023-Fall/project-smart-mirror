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
      const { data: { user }, error: userError } = await supabase.auth.getUser();
  
      if (user) {
        const { data, error } = await supabase
          .from('profiles')
          .select('username')
          .eq('id', user.id)
          .single();
  
        if (error) {
          console.error('Error fetching profile:', error);
        } else {
          setUsername(data.username);
        }
      }
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

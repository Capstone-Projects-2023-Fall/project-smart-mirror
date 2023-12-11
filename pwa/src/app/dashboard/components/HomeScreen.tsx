"use client";
import { getRandomGreeting } from "@/app/utils/getRandomGreeting";
import React, { useEffect, useRef, useState } from "react";
import { supabase } from "@/app/utils/supabase-client";
import Link from "next/link";

type Props = {};

export default function HomeScreen({}: Props) {
  const [username, setUsername] = useState<string>("");
  const [greeting, setGreeting] = useState<string>("");
  const [connected, setConnected] = useState<boolean>();

  const usernameMountRef = useRef(false);

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (user) {
        const { data, error } = await supabase
          .from("profiles")
          .select("username")
          .eq("id", user.id)
          .single();

        if (error) {
          console.error("Error fetching profile:", error);
        } else {
          setUsername(data.username);
        }
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (usernameMountRef.current) {
      console.log(username);
      setGreeting(getRandomGreeting(username, 18));
    } else {
      usernameMountRef.current = true;
    }
  }, [username]);

  useEffect(() => {
    const fetchData = async () => {
      const sub = (await supabase.auth.getUser()).data.user?.id;
      const select = await supabase
        .from("profiles")
        .select("mirrorID")
        .eq("id", sub);
      const mirrorId = select.data?.[0].mirrorID;

      if (mirrorId) {
        setConnected(true);
      } else {
        setConnected(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="md:mt-10 mt-11 font-bold">{greeting}</h1>
      <div className="mt-10 h-full font-semibold">
        <h2 className="">
          Mirror Status:{" "}
          {connected ? (
            <span className="text-green-500">Connected</span>
          ) : (
            <span className="text-red-500">Not Connected</span>
          )}
        </h2>
        {!connected && (
          <p className="text-skin-base opacity-70">
            Please scan the QR code present on a new mirror. You can learn how
            to do that{" "}
            <Link href="/setup" className="underline">
              here.
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}

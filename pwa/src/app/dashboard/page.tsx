"use client";
import React, { useEffect,useState } from "react";
import { redirect } from "next/navigation";
import { supabase } from "../utils/supabase-client";
import Sidebar from "./components/Sidebar";
import DashboardScreen from "./components/DashboardScreen";
import { useRouter,useSearchParams } from "next/navigation";

type Props = {};

export default function Dashboard({}: Props) {
  const [selected, setSelected] = useState<string | null>("home");
  const router = useRouter();
  const passedId = useSearchParams().get("mirrorID") || -1;

    useEffect(() => {
      if (passedId == -1) {
        return
      }

      const fetchData = async () => {
        const {
          data: { user },
        } = await supabase.auth.getUser();
       // const mirrorId = session?.user.user_metadata.id;
        const userId = user?.id
        console.log(`userid = ${user?.id}`)
        const { error } = await supabase
          .from('profiles') // Replace 'users' with the actual table name
          .upsert([
            {
              id: userId, // ID of the user
              mirrorID: passedId, // New mirrorID value
            },
          ]);
        if (error) {
          console.error('Error updating mirrorID:', error);
        } else {
          console.log('MirrorID updated successfully!');
        }
      };
  
      fetchData();




    });

  return (
    <section className="flex h-full w-full">
      <Sidebar state={selected} getState={setSelected} />
      <DashboardScreen page={selected}></DashboardScreen>
    </section>
  );
}

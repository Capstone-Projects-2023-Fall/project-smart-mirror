"use client";
import React, { useState } from "react";
import { redirect } from "next/navigation";
import { supabase } from "../utils/supabase-server";
import Sidebar from "./components/Sidebar";
import DashboardScreen from "./components/DashboardScreen";
import { useRouter,useSearchParams } from "next/navigation";

type Props = {};

export default function Dashboard({}: Props) {
  const [selected, setSelected] = useState<string | null>("home");
  
  const router = useRouter();
  const passedId = useSearchParams().get("mirrorID") || -1;

  if (passedId !== -1) {
   
  }

  return (
    <section className="flex h-full w-full">
      <Sidebar state={selected} getState={setSelected} />
      <DashboardScreen page={selected}></DashboardScreen>
    </section>
  );
}

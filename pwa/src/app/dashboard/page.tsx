"use client";
import React, { useState } from "react";
import { redirect } from "next/navigation";
import { supabase } from "../utils/supabase-server";
import Sidebar from "./components/Sidebar";
import DashboardScreen from "./components/DashboardScreen";

type Props = {};

export default function Dashboard({}: Props) {
  const [selected, setSelected] = useState<string | null>("home");

  return (
    <section className="flex md:flex-row flex-col h-full w-full">
      <Sidebar state={selected} getState={setSelected} />
      <DashboardScreen page={selected}></DashboardScreen>
    </section>
  );
}

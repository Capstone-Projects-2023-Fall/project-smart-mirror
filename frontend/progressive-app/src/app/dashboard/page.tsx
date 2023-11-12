"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Settings from "./settings";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import MainDisplay from "./main";
import { User } from "@supabase/supabase-js";

type Props = {
  user: User | null;
};

export default function Dashboard({ user }: Props) {
  const [page, setPage] = useState<string | null>(null);

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

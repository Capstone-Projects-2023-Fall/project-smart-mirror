"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Settings from "./settings";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import MainDisplay from "./main";

type Props = {};

export default function Dashboard({}: Props) {
  const [page, setPage] = useState<string | null>(null);

  return (
    <main className="flex h-screen flex-col">
      <div className="flex h-full w-full flex-row">
        <Sidebar update={setPage} />
        <MainDisplay page={page} />
      </div>
    </main>
  );
}

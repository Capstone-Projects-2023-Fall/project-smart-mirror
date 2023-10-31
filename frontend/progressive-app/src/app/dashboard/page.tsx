import React from "react";
import { motion } from "framer-motion";
import Sidebar from "./components/navbar/sidebar";
import Settings from "./components/settings/settings";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="flex h-screen flex-col bg-background">
      <div className="my-20 flex flex-row justify-between">
        <Sidebar></Sidebar>
        <Settings></Settings>
      </div>
    </main>
  );
}

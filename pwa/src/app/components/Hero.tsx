"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section className="w-screen h-screen flex flex-col items-center justify-center tracking-tighter space-y-3">
      <motion.div
        className="flex flex-col items-start space-y-3"
        animate={{ opacity: [0, 1], transition: { duration: 2 } }}
      >
        <h1 className="font-bold">
          Welcome to <span className="text-skin-inverted">Project Lumina</span>.
        </h1>
        <h2 className="font-bold">The Interactive Mirror</h2>
        <Link
          href="/signup"
          className="w-28 h-10 bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center rounded font-semibold"
        >
          <button>Start now</button>
        </Link>
      </motion.div>
    </section>
  );
}

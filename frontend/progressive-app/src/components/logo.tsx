"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Logo({}: Props) {
  return (
    <Link
      href="/"
      className="absolute m-4 flex flex-row items-center justify-center rounded-3xl p-2 text-4xl font-black tracking-wide text-primary"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
        animate={{
          rotate: 360,
          transition: {
            duration: 1.3,
            delay: 0.2,
            repeat: Infinity,
            type: "spring",
          },
        }}
      >
        <path
          fill="currentColor"
          d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
        />
      </motion.svg>
      <h2 className="ml-2">smart mirror</h2>
    </Link>
  );
}

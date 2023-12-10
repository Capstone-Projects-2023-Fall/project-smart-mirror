"use client";
import { ThemeProvider } from "next-themes";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence>
      <ThemeProvider>{children}</ThemeProvider>
    </AnimatePresence>
  );
}

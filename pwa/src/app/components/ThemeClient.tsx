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
      <ThemeProvider>
        <motion.div
          animate={{ opacity: [0, 1], transition: { duration: 0.5 } }}
        >
          {children}
        </motion.div>
      </ThemeProvider>
    </AnimatePresence>
  );
}

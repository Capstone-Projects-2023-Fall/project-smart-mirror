"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

export default function ThemeClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

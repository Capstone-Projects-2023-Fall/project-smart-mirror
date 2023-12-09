import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import ThemeClient from "./components/ThemeClient";
import { supabase } from "./utils/supabase-server";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Variable.woff2",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Project Lumina",
  description: "The Interactive Mirror.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={satoshi.className}>
        <ThemeClient>
          <Navbar />
          {children}
        </ThemeClient>
      </body>
    </html>
  );
}

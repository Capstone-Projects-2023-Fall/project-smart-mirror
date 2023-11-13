import "~/styles/globals.css";
import { ReactNode } from "react";
import Navbar from "~/components/navbar";
import { navDataLoggedIn, navDataLoggedOut } from "~/lib/data";
import React from "react";
import { satoshi } from "~/lib/font";
import { supabase } from "~/lib/supabase-server";

export const revalidate = 0;

export const metadata = {
  title: "Smart Mirror",
  description: "Smart Mirror",
  manifest: "manifest.webmanifest",
  icons: [{ rel: "apple-touch-icon", url: "/icon.png" }],
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html lang="en">
      <body className={satoshi.className}>
        <Navbar items={user ? navDataLoggedIn : navDataLoggedOut}></Navbar>
        {children}
      </body>
    </html>
  );
}

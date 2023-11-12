import "~/styles/globals.css";
import React, { ReactNode } from "react";
import { satoshi } from "~/lib/font";
import { supabase } from "~/lib/supabase-server";
import Dashboard from "./page";

type Props = {};

export const metadata = {
  title: "Smart Mirror",
  description: "Smart Mirror",
  manifest: "manifest.webmanifest",
  icons: [{ rel: "apple-touch-icon", url: "/icon.png" }],
};

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <html lang="en">
      <body className={`${satoshi.className}`}>
        <Dashboard user={user}></Dashboard>
      </body>
    </html>
  );
}

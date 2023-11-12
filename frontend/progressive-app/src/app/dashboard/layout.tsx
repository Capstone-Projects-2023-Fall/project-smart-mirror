import "~/styles/globals.css";
import React, { ReactNode } from "react";
import { satoshi } from "~/lib/font";

type Props = {};

export const metadata = {
  title: "Smart Mirror",
  description: "Smart Mirror",
  manifest: "manifest.webmanifest",
  icons: [{ rel: "apple-touch-icon", url: "/icon.png" }],
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${satoshi.className}`}>{children}</body>
    </html>
  );
}

import "~/styles/globals.css";
import localFont from "next/font/local";
import { ReactNode } from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const satoshi = localFont({
  src: [
    {
      path: "../../public/font/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/font/Satoshi-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/font/Satoshi-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
    {
      path: "../../public/font/Satoshi-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
});

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
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <html lang="en">
      <body className={satoshi.className}>{children}</body>
    </html>
  );
}

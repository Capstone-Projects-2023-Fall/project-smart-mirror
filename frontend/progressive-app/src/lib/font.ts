import localFont from "next/font/local";

export const satoshi = localFont({
  src: [
    {
      path: "/../../public/font/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "/../../public/font/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "/../../public/font/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "/../../public/font/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "/../../public/font/Satoshi-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "/../../public/font/Satoshi-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
    {
      path: "/../../public/font/Satoshi-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
});

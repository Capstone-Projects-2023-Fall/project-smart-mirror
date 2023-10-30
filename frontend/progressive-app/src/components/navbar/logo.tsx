import Link from "next/link";
import React from "react";

type Props = {};

export default function Logo({}: Props) {
  return (
    <Link
      href="/"
      className="absolute m-4 rounded-3xl border-4 border-text p-2 text-4xl font-black tracking-wide text-primary"
    >
      SM
    </Link>
  );
}

"use client";

import Hero from "./components/Hero";
import Overview from "./components/Overview";

export default function Home() {
  return (
    <main className="h-full w-full">
      <Hero />
      <Overview />
    </main>
  );
}

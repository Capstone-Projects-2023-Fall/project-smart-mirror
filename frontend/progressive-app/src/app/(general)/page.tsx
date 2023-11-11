import React from "react";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-text">
        Welcome to <span className="font-black text-primary">Smart Mirror</span>
      </h1>
      <h2 className="m-3 text-4xl font-bold text-text">
        Integrating <span className="text-primary">Tech</span> into{" "}
        <span className="text-primary">Daily Life</span>
      </h2>
    </main>
  );
}

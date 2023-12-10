import React from "react";

type Props = {};

export default function Overview({}: Props) {
  return (
    <section
      id="#overview"
      className="w-screen h-screen flex flex-col items-center tracking-tighter"
    >
      <div className="items-start flex flex-col">
        <h2 className="font-bold">Overview</h2>
      </div>
    </section>
  );
}

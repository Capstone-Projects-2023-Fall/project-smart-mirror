"use client";
import { User } from "@supabase/supabase-js";
import React from "react";

type Props = {
  user: User | null;
};

export default function navbar({ user }: Props) {
  return (
    <nav className="flex h-20 w-full flex-row items-center justify-between">
      <section className="w-2/5">
        <h2 className=" font-black text-black">
          Hello, {user?.user_metadata.username}!
        </h2>
        <h4 className="text-black-light font-medium">
          Welcome back, explore your dashboard
        </h4>
      </section>
      <section className="mx-12 flex h-full w-3/5 items-center justify-end">
        <div className="flex h-2/3 w-3/5 items-center rounded-full border-4 border-primary pl-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
          <input
            className="ml-2 h-full border-none bg-transparent text-base font-medium outline-none"
            placeholder="Type to search..."
          ></input>
        </div>
      </section>
    </nav>
  );
}

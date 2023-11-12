import { User } from "@supabase/supabase-js";
import React from "react";

type Props = {
  user: User | null;
};

export default function navbar({ user }: Props) {
  return (
    <nav className="h-20 w-full">
      <section className="">
        <h2 className=" font-black text-black">
          Hello, {user?.user_metadata.username}!
        </h2>
        <h4 className="text-black-light">
          Welcome back, explore your dashboard
        </h4>
      </section>
    </nav>
  );
}

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
        <h4 className="font-medium text-black-light">
          Welcome back, explore your dashboard
        </h4>
      </section>
    </nav>
  );
}

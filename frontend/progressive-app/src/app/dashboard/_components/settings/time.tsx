import { User } from "@supabase/supabase-js";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { supabase } from "~/lib/supabase-client";

type Props = { user: User | null };

const dates = ["MM-dd-yyyy", "dd-MM-yyyy", "yyyy-MM-dd"];
const times = ["12-hour-clock", "24-hour-clock"];

export default function Time({ user }: Props) {
  const [prefDate, setPrefDate] = useState<string | null>(null);
  const [prefTime, setPrefTime] = useState<string | null>(null);

  return (
    <>
      <h2 className="my-8 font-bold">Date & Time</h2>
    </>
  );
}

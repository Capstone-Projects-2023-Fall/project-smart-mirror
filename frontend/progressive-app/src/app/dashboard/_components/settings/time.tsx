import { User } from "@supabase/supabase-js";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { supabase } from "~/lib/supabase-client";

type Props = { user: User | null };

const dates = ["MM-DD-YYYY", "DD-MM-YYYY", "YYYY-MM-DD"];
const times = ["12-hour-clock", "24-hour-clock"];

export default function Time({ user }: Props) {
  const [prefDate, setPrefDate] = useState<string | null>(null);
  const [prefTime, setPrefTime] = useState<string | null>(null);

  return (
    <>
      <h2 className="my-8 font-bold">Date & Time</h2>
      <div className="mb-4 flex w-2/5 flex-row gap-5">
        {dates.map((date) => (
          <motion.div
            className={`inline-block cursor-pointer rounded-full p-4 ${
              date === prefDate
                ? "bg-primary text-background"
                : "border-4 border-primary text-black"
            }`}
            key={date}
            onClick={async () => {
              setPrefDate(date);
              const { error } = await supabase
                .from("profiles")
                .update({ preferred_date: date })
                .eq("id", user?.id);
              if (error !== null) {
                console.log(error);
              }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {date}
          </motion.div>
        ))}
      </div>
      <div className="flex w-2/5 flex-row gap-5">
        {times.map((time) => (
          <motion.div
            className={`inline-block cursor-pointer rounded-full p-4 ${
              time === prefTime
                ? "bg-primary text-background"
                : "border-4 border-primary text-black"
            }`}
            key={time}
            onClick={async () => {
              setPrefTime(time);
              const { error } = await supabase
                .from("profiles")
                .update({ preferred_time: time })
                .eq("id", user?.id);
              console.log(error);
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {time}
          </motion.div>
        ))}
      </div>
    </>
  );
}

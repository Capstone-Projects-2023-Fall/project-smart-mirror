import React, { useState, useEffect } from "react";
import { supabase } from "~/lib/supabase-client";

type Props = {};

export default function Clock({}: Props) {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [datePreference, setDatePreference] = useState({});
  const [timePreference, setTimePreference] = useState({});
  const [options, setOptions] = useState({
    datePreference: {},
    timePreference: {},
  });

  useEffect(() => {
    const intervalId = setInterval(async () => {
      setCurrentDateTime(new Date());
    }, 1000);

    const fetchOptions = async () => {
      const preferredDate = (
        await supabase
          .from("profiles")
          .select("preferred_date")
          .eq("id", (await supabase.auth.getUser()).data?.user?.id)
      ).data?.at(0)?.preferred_date;
      const preferredTime = await (
        await supabase
          .from("profiles")
          .select("preferred_date")
          .eq("id", (await supabase.auth.getUser()).data?.user?.id)
      ).data?.at(0)?.preferred_date;

      if (preferredDate === "MM-DD-YYYY") {
        setDatePreference({
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
        });
      } else if (preferredDate === "DD-MM-YYYY") {
        setDatePreference({
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        });
      } else if (preferredDate === "YYYY-MM-DD") {
        setDatePreference({
          year: "numeric",
          day: "2-digit",
          month: "2-digit",
        });
      }

      if (preferredTime === "12-hour-clock") {
        setTimePreference({
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        });
      } else {
        setTimePreference({
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });
      }
    };
    setOptions({ datePreference, timePreference });
    fetchOptions();

    return () => clearInterval(intervalId);
  }, []);

  const date = currentDateTime.toLocaleDateString(
    undefined,
    options.datePreference,
  );

  const time = currentDateTime.toLocaleTimeString(
    undefined,
    options.timePreference,
  );

  return (
    <section className="mt-8 flex w-2/5 flex-col rounded-xl border-4 border-primary p-8 font-black">
      <h2 className="">{date}</h2>
      <h1 className="">{time}</h1>
    </section>
  );
}

import * as Switch from "@radix-ui/react-switch";
import React, { useEffect, useState } from "react";
import { supabase } from "@/app/utils/supabase-client";

type Props = {};

export default function ModuleView({}: Props) {
  const [widgets, setWidgets] = useState<{
    news: boolean;
    spotify: boolean;
    weather: boolean;
    calendar: boolean;
  }>({
    news: false,
    spotify: false,
    weather: false,
    calendar: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      const id = (await supabase.auth.getUser()).data?.user?.id;
      const { data, error } = await supabase
        .from("profiles")
        .select("downloaded_modules")
        .eq("id", id);
      setWidgets(data?.[0].downloaded_modules);
    };
    fetchData();
  }, []);

  const handleSpotify = () => {
    setWidgets((prevWidgets) => ({
      ...prevWidgets,
      spotify: true,
    }));
  };
  const handleNews = () => {
    setWidgets((prevWidgets) => ({ ...prevWidgets, news: !prevWidgets.news }));
  };
  const handleWeather = () => {
    setWidgets((prevWidgets) => ({
      ...prevWidgets,
      weather: !prevWidgets.weather,
    }));
  };
  const handleCalendar = () => {
    setWidgets((prevWidgets) => ({
      ...prevWidgets,
      calendar: !prevWidgets.calendar,
    }));
  };

  return (
    <ul className="flex flex-col space-y-4">
      <li className="flex space-x-4">
        <p>Spotify</p>
        <Switch.Root
          checked={widgets.spotify}
          onCheckedChange={handleSpotify}
          className="bg-skin-button-muted relative inline-flex items-center h-6 rounded-full w-11"
        >
          <Switch.Thumb className="bg-skin-fill h-6 w-6 rounded-full shadow-md"></Switch.Thumb>
        </Switch.Root>
      </li>
      <li className="flex space-x-4">
        <p>Weather</p>
        <Switch.Root
          checked={widgets.weather}
          onCheckedChange={handleWeather}
          className="bg-skin-button-muted relative inline-flex items-center h-6 rounded-full w-11"
        >
          <Switch.Thumb className="bg-skin-fill h-6 w-6 rounded-full shadow-md"></Switch.Thumb>
        </Switch.Root>
      </li>
      <li className="flex space-x-4">
        <p>News</p>
        <Switch.Root
          checked={widgets.news}
          onCheckedChange={handleNews}
          className="bg-skin-input-field-accent relative inline-flex items-center h-6 rounded-full w-11 checked:translate-x-9"
        >
          <Switch.Thumb className="bg-skin-fill h-6 w-6 rounded-full shadow-md"></Switch.Thumb>
        </Switch.Root>
      </li>
      <li className="flex space-x-4">
        <p>Calendar</p>
        <Switch.Root
          checked={widgets.calendar}
          onCheckedChange={handleCalendar}
          className="bg-skin-button-muted relative inline-flex items-center h-6 rounded-full w-11"
        >
          <Switch.Thumb className="bg-skin-fill h-6 w-6 rounded-full shadow-md"></Switch.Thumb>
        </Switch.Root>
      </li>
    </ul>
  );
}

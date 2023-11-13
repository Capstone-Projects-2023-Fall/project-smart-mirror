import { Formik, Field, Form } from "formik";
import React, { useState } from "react";
import { supabase } from "~/lib/supabase-client";

type Props = {};

export default function Location({}: Props) {
  const [toggleLocationSharing, setToggleLocationSharing] =
    useState<boolean>(false);
  return (
    <>
      <h2 className="my-8 font-bold">Location</h2>
      <form className="max-h-full font-medium">
        {/*
                Toggle to save user's location
            */}
        <label className="">
          <input
            type="checkbox"
            name="toggleLocationSharing"
            className="peer mr-2 h-4 w-4 appearance-none rounded-sm border-2 border-primary bg-secondary checked:border-0 checked:bg-primary"
            onChange={() => {
              setToggleLocationSharing(!toggleLocationSharing);
              navigator.geolocation.getCurrentPosition(async (pos) => {
                const loc = {
                  lat: pos.coords.latitude,
                  lon: pos.coords.longitude,
                };
                const { error } = await supabase
                  .from("profiles")
                  .update({ location: loc })
                  .eq("id", (await supabase.auth.getUser()).data?.user?.id);
                if (error) console.error(error);
              });
            }}
          />
          {/*  CHECKBOX SVG DO LATER
              <svg
                className="absolute hidden h-4 w-4 text-background"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg> */}
          {toggleLocationSharing
            ? "You are currently sharing your location."
            : "You are not sharing your location."}
          <p className="text-black-light text-sm">
            Smart Mirror uses your location to provide accurate weather data.
          </p>
        </label>
      </form>
    </>
  );
}

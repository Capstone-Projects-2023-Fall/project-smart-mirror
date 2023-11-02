"use client";
import { Formik, Form, Field } from "formik";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

type Props = {};

export default function Settings({}: Props) {
  const [checked, setChecked] = useState(false);
  const supabase = createClientComponentClient();

  const handleSubmit = async (values: any) => {
    const user = await supabase.auth.getUser();
    const { error } = await supabase
      .from("profiles")
      .upsert({
        id: user.data.user?.id,
        username: values.username,
      })
      .select();
  };

  const handleCheck = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const user = await supabase.auth.getUser();
      const { error } = await supabase
        .from("profiles")
        .upsert({
          id: user.data.user?.id,
          location: JSON.stringify({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          }),
        })
        .select();
      console.log(error);
    });
  };

  return (
    <div className="bg-background-secondary mr-4 mt-4 h-full w-full rounded-xl">
      <h1 className="mb-4 p-4 text-3xl font-black text-text">Settings</h1>
      <Formik
        enableReinitialize
        initialValues={{ location: false }}
        onSubmit={handleSubmit}
      >
        {({ values, errors, setFieldValue }) => (
          <Form className="p-4 font-semibold text-text">
            <label htmlFor="location">
              Location:
              <Field
                type="checkbox"
                name="location"
                onChange={handleCheck}
              ></Field>
              <div className="pl-4 text-xs text-gray-400">
                Smart Mirror needs your location to provide you with
                weather-based updates. Don't worry, we only need it once.
              </div>
            </label>
            <label htmlFor="username">
              Username:
              <Field
                type="text"
                name="username"
                className="border-3 border-black pl-2 outline-none"
              ></Field>
              <div className="pl-4 text-xs text-gray-400">
                What do you want us to call you?
              </div>
            </label>

            <button
              type="submit"
              className="text-md m-4 rounded-full bg-primary px-4 text-background hover:scale-110"
            >
              Submit changes
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

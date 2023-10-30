"use client";
import { time } from "console";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { cookies } from "next/headers";
import {
  createClientComponentClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { createClient } from "@supabase/supabase-js";

type Props = {};

export default async function Settings({}: Props) {
  const handleSubmit = async (values: any) => {
    console.log(values);
  };

  const handleCheck = (values: any) => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const supabase = createClientComponentClient();
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
        onSubmit={handleCheck}
      >
        {({ values, errors, setFieldValue }) => (
          <Form>
            <label>
              Location:
              <Field
                type="checkbox"
                name="location"
                onChange={handleCheck}
              ></Field>
            </label>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

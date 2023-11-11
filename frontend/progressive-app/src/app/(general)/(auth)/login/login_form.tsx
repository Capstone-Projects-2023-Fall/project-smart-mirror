import React, { Fragment, useState } from "react";
import { Formik, Field, Form } from "formik";
import { LoginSchema } from "~/lib/schemas";
import { AnimatePresence, motion } from "framer-motion";
import { AuthError } from "@supabase/supabase-js";
import ErrorModal from "../components/error_modal";

type Props = {
  handleSubmit: (values: {
    email: string;
    password: string;
    confirmPassword: string;
  }) => Promise<void>;
  error: AuthError | undefined;
};

const eye = {
  visible:
    "M569.354 231.631C512.969 135.949 407.81 72 288 72 168.14 72 63.004 135.994 6.646 231.631a47.999 47.999 0 0 0 0 48.739C63.031 376.051 168.19 440 288 440c119.86 0 224.996-63.994 281.354-159.631a47.997 47.997 0 0 0 0-48.738zM288 392c-75.162 0-136-60.827-136-136 0-75.162 60.826-136 136-136 75.162 0 136 60.826 136 136 0 75.162-60.826 136-136 136zm104-136c0 57.438-46.562 104-104 104s-104-46.562-104-104c0-17.708 4.431-34.379 12.236-48.973l-.001.032c0 23.651 19.173 42.823 42.824 42.823s42.824-19.173 42.824-42.823c0-23.651-19.173-42.824-42.824-42.824l-.032.001C253.621 156.431 270.292 152 288 152c57.438 0 104 46.562 104 104z,",
  hidden:
    "M286.693 391.984l32.579 46.542A333.958 333.958 0 0 1 288 440C168.19 440 63.031 376.051 6.646 280.369a47.999 47.999 0 0 1 0-48.739c24.023-40.766 56.913-75.775 96.024-102.537l57.077 81.539C154.736 224.82 152 240.087 152 256c0 74.736 60.135 135.282 134.693 135.984zm282.661-111.615c-31.667 53.737-78.747 97.46-135.175 125.475l.011.015 41.47 59.2c7.6 10.86 4.96 25.82-5.9 33.42l-13.11 9.18c-10.86 7.6-25.82 4.96-33.42-5.9L100.34 46.94c-7.6-10.86-4.96-25.82 5.9-33.42l13.11-9.18c10.86-7.6 25.82-4.96 33.42 5.9l51.038 72.617C230.68 75.776 258.905 72 288 72c119.81 0 224.969 63.949 281.354 159.631a48.002 48.002 0 0 1 0 48.738zM424 256c0-75.174-60.838-136-136-136-17.939 0-35.056 3.473-50.729 9.772l19.299 27.058c25.869-8.171 55.044-6.163 80.4 7.41h-.03c-23.65 0-42.82 19.17-42.82 42.82 0 23.626 19.147 42.82 42.82 42.82 23.65 0 42.82-19.17 42.82-42.82v-.03c18.462 34.49 16.312 77.914-8.25 110.95v.01l19.314 27.061C411.496 321.2 424 290.074 424 256zM262.014 356.727l-77.53-110.757c-5.014 52.387 29.314 98.354 77.53 110.757z",
};

export default function LoginForm({ handleSubmit, error }: Props) {
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched }) => (
          <>
            {error !== undefined && <ErrorModal error={error} />}
            <Form className="flex w-full flex-col items-center">
              {/* EMAIL FIELD */}
              <section className="group relative mb-4 w-4/5 md:w-2/5">
                <Field
                  className="h-12 w-full rounded-xl border-4 border-text bg-background pl-4 font-medium outline-none focus-within:border-primary"
                  type="text"
                  name="email"
                />
                <div
                  className={`select-none font-bold text-error ${
                    errors.email && touched.email ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {errors.email ? errors.email : "placeholder text"}
                </div>
                <label
                  className={`pointer-events-none absolute left-4 bg-background px-3 text-base font-medium duration-300 ease-in-out group-focus-within:-top-3 group-focus-within:text-sm group-focus-within:text-primary ${
                    values.email !== "" ? "-top-3 text-sm text-text" : "top-3"
                  }`}
                >
                  <span className="border-text ease-in group-focus-within:border-b-2 ">
                    Enter an email or phone number
                  </span>
                </label>
              </section>

              {/* PASSWORD FIELD */}
              <section className="group relative mb-4 w-4/5 md:w-2/5">
                <Field
                  className="h-12 w-full rounded-xl border-4 border-text bg-background pl-4 outline-none focus-within:border-primary"
                  type="password"
                  name="password"
                  autoComplete="new-password"
                />
                <div
                  className={`select-none font-bold text-error ${
                    errors.password && touched.password
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  {errors.password ? errors.password : "placeholder text"}
                </div>
                <label
                  className={`pointer-events-none absolute left-4 bg-background px-3 text-base font-medium duration-300 ease-in-out group-focus-within:-top-3 group-focus-within:text-sm group-focus-within:text-primary ${
                    values.password !== ""
                      ? "-top-3 text-sm text-text"
                      : "top-3"
                  }`}
                >
                  <span className="border-text ease-in group-focus-within:border-b-2 ">
                    Enter a password
                  </span>
                </label>
              </section>

              {/* SUBMIT BUTTON */}
              <section className="flex w-4/5 flex-col items-center font-bold md:w-2/5 md:items-end">
                <motion.button
                  type="submit"
                  className="w-full rounded-full bg-primary p-3 text-background md:w-2/5"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Submit
                </motion.button>
              </section>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
}

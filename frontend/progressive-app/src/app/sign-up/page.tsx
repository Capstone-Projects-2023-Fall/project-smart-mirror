"use client";
import React from "react";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { motion } from "framer-motion";
import { isErrored } from "stream";

type Props = {};

const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Enter an email/username"),
  password: Yup.string().required("Enter a password"),
});

async function signUp(formData: { email: string; password: string }) {
  const supabase = createClientComponentClient();
  const { error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
    options: {
      emailRedirectTo: `${location.origin}/auth/callback`,
    },
  });

  console.log(error);
}

export default function page({}: Props) {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-4">
      <div className="flex h-full w-full flex-col items-center justify-center sm:h-2/3 sm:w-1/3">
        <h1 className="text-text mb-16 text-3xl font-black">Sign Up</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={SignUpSchema}
          onSubmit={(values) => {
            signUp(values);
          }}
        >
          {({ errors, touched, values }) => (
            <Form className="flex w-full flex-col items-center">
              <div className="username-field group relative mb-8 flex w-full flex-col">
                <label
                  htmlFor="email"
                  className={`bg-background pointer-events-none absolute left-4 px-2 font-bold duration-300 ${
                    values.email
                      ? "-top-2 text-sm"
                      : "top-3 group-focus-within:-top-2 group-focus-within:text-sm"
                  }`}
                >
                  Username/Email
                </label>
                <Field
                  name="email"
                  type="email"
                  required={true}
                  className="border-text focus:border-primary h-12 w-full rounded-xl border-4 p-4 outline-none duration-300 ease-in-out"
                />
                {errors.email && touched.email ? (
                  <div className="text-error ml-2 font-bold">
                    {errors.email}
                  </div>
                ) : null}
              </div>
              <div className="password-field group relative mb-8 flex w-full flex-col">
                <label
                  htmlFor="password"
                  className={`bg-background pointer-events-none absolute left-4 px-2 font-bold duration-300 ${
                    values.password
                      ? "-top-2 text-sm"
                      : "top-3 group-focus-within:-top-2 group-focus-within:text-sm"
                  }`}
                >
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  required={true}
                  className="border-text focus:border-primary h-12 w-full rounded-xl border-4 p-4 outline-none duration-300 ease-in-out"
                />
                {errors.password && touched.password ? (
                  <div className="text-error ml-2 font-bold">
                    {errors.password}
                  </div>
                ) : null}
              </div>
              <button
                type="submit"
                className="bg-primary text-background h-12 w-1/2 rounded-xl font-bold hover:scale-110"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </main>
  );
}

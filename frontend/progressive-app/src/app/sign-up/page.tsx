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
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Enter a password"),
});

async function signUp(formData: { email: string; password: string }) {
  const supabase = createClientComponentClient();
  const { error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
    options: {
      emailRedirectTo: `${location.origin}`,
    },
  });

  console.log(error);
}

export default function page({}: Props) {
  return (
    <div className="flex h-screen w-screen flex-col items-center">
      <div className="flex h-full w-full flex-col items-center justify-center sm:h-2/3 sm:w-1/3">
        <h1 className="mb-2 text-3xl font-black text-text">Sign Up</h1>
        <div className="mb-16 h-0.5 w-2/3 bg-primary"></div>
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
                  className={`pointer-events-none absolute left-4 bg-background px-2 font-bold duration-300 ${
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
                  className="h-12 w-full rounded-xl border-4 border-text bg-background p-4 outline-none duration-300 ease-in-out focus:border-primary"
                />
                {errors.email && touched.email ? (
                  <div className="ml-2 font-bold text-error">
                    {errors.email}
                  </div>
                ) : null}
              </div>
              <div className="password-field group relative mb-8 flex w-full flex-col">
                <label
                  htmlFor="password"
                  className={`pointer-events-none absolute left-4 bg-background px-2 font-bold duration-300 ${
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
                  className="h-12 w-full rounded-xl border-4 border-text bg-background p-4 outline-none duration-300 ease-in-out focus:border-primary"
                />
                {errors.password && touched.password ? (
                  <div className="ml-2 font-bold text-error">
                    {errors.password}
                  </div>
                ) : null}
              </div>
              <button
                type="submit"
                className="h-12 w-1/2 rounded-xl bg-primary font-bold text-background hover:scale-110"
              >
                Create account
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

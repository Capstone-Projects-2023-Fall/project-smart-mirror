"use client";
import React from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/navigation";
import { LoginSchema } from "~/lib/schemas";

type Props = {};

async function login(formData: { email: string; password: string }) {
  const supabase = createClientComponentClient();
  const { error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  });
  return error;
}

export default function page({}: Props) {
  const router = useRouter();

  return (
    <main className="flex h-screen flex-col bg-background">
      <div className="flex h-screen w-screen flex-col items-center">
        <div className="flex h-full w-full flex-col items-center justify-center sm:h-2/3 sm:w-1/3">
          <h1 className="mb-2 text-3xl font-black text-text">Sign In</h1>
          <div className="mb-16 h-0.5 w-2/3 bg-primary"></div>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              const error = login(values);
              console.log(error);
              if (error !== null) {
                router.push(`${location.origin}/dashboard`);
              }
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
                    Email
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
                  Sign in
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </main>
  );
}

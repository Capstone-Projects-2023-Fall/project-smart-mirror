import React from "react";
import { Formik, Field, Form } from "formik";
import { SignUpSchema } from "~/lib/schemas";

type Props = {
    handleSubmit
};

export default function sign_up_form({handleSubmit}: Props) {
  return (
    <>
      <Formik
        className=""
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        validationSchema={SignUpSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched }) => (
          <Form className="flex w-full flex-col items-center">
            <section className="group relative mb-8 w-2/5">
              <Field
                className="h-12 w-full rounded-xl border-4 border-text bg-background pl-4 outline-none focus-within:border-primary"
                type="text"
                name="email"
              />
              {errors.email && touched.email ? (
                <div className="font-bold text-error">
                  Please enter an email or phone number
                </div>
              ) : null}
              <label className="pointer-events-none absolute left-4 top-3 bg-background px-3 text-base font-medium duration-300 ease-in-out group-focus-within:-top-3 group-focus-within:text-sm group-focus-within:text-primary">
                <span className="border-text ease-in group-focus-within:border-b-2 ">
                  Enter an email or phone number
                </span>
              </label>
            </section>
            <section className="group relative mb-8 w-2/5">
              <Field
                className="h-12 w-full rounded-xl border-4 border-text bg-background pl-4 outline-none focus-within:border-primary"
                type="text"
                name="password"
              />
              <div
                className={`font-bold text-error ${
                  errors.password && touched.password
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              >
                {errors.password}
              </div>
              <label className="pointer-events-none absolute left-4 top-3 bg-background px-3 text-base font-medium duration-300 ease-in-out group-focus-within:-top-3 group-focus-within:text-sm group-focus-within:text-primary">
                <span className="border-text ease-in group-focus-within:border-b-2 ">
                  Enter a password
                </span>
              </label>
            </section>
          </Form>
        )}
      </Formik>
    </>
  );
}

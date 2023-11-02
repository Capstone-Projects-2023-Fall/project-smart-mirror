import React from "react";
import { Formik, Field, Form } from "formik";
import { SignUpSchema } from "~/lib/schemas";
import { motion } from "framer-motion";

type Props = {
  handleSubmit: (formData: {
    email: string;
    password: string;
  }) => Promise<void>;
};

export default function LoginForm({ handleSubmit }: Props) {
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
            {/* EMAIL FIELD */}
            <section className="group relative mb-4 w-4/5 md:w-2/5">
              <Field
                className="h-12 w-full rounded-xl border-4 border-text bg-background pl-4 outline-none focus-within:border-primary"
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
              <div>{values.email}</div>
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
                auto-complete="new-password"
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
                  values.password !== "" ? "-top-3 text-sm text-text" : "top-3"
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
                className="w-full rounded-full bg-primary p-3 text-background-secondary md:w-2/5"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Submit
              </motion.button>
            </section>
          </Form>
        )}
      </Formik>
    </>
  );
}

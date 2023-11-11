import React from "react";
import { Formik, Field, Form } from "formik";
import { SignUpSchema } from "~/lib/schemas";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  handleSubmit: (formData: {
    email: string;
    password: string;
  }) => Promise<void>;
};

export default function SignUpForm({ handleSubmit }: Props) {
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
                  values.password !== "" ? "-top-3 text-sm text-text" : "top-3"
                }`}
              >
                <span className="border-text ease-in group-focus-within:border-b-2 ">
                  Enter a password
                </span>
              </label>
            </section>

            {/* CONFIRMED PASSWORD FIELD */}

            <AnimatePresence>
              {!errors.password && values.password ? (
                <motion.section
                  className="group relative mb-4 w-4/5 md:w-2/5"
                  initial={{ opacity: 0, top: -20 }}
                  animate={{ opacity: 100, top: 0 }}
                  exit={{ opacity: 0, top: -20 }}
                >
                  <Field
                    className="h-12 w-full rounded-xl border-4 border-text bg-background pl-4 font-medium outline-none focus-within:border-primary"
                    type="password"
                    name="confirmPassword"
                    autoComplete="new-password"
                  />
                  <motion.div
                    className={`select-none font-bold text-error ${
                      errors.confirmPassword && touched.confirmPassword
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                    layout
                  >
                    {errors.confirmPassword}
                  </motion.div>
                  <label
                    className={`pointer-events-none absolute left-4 bg-background px-3 text-base font-medium duration-300 ease-in-out group-focus-within:-top-3 group-focus-within:text-sm group-focus-within:text-primary ${
                      values.confirmPassword !== ""
                        ? "-top-3 text-sm text-text"
                        : "top-3"
                    }`}
                  >
                    <span className="border-text ease-in group-focus-within:border-b-2 ">
                      Confirm your password
                    </span>
                  </label>
                </motion.section>
              ) : null}
            </AnimatePresence>

            {/* SUBMIT BUTTON */}
            <motion.section
              layout
              className="flex w-4/5 flex-col items-center font-bold md:w-2/5 md:items-end"
            >
              <motion.button
                type="submit"
                className="w-full rounded-full bg-primary p-3 text-background md:w-2/5"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Submit
              </motion.button>
            </motion.section>
          </Form>
        )}
      </Formik>
    </>
  );
}

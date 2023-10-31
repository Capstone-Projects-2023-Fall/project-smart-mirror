"use client";
import React, { useState, useEffect } from "react";
import { Field, Form, Formik } from "formik";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { motion } from "framer-motion";
import { SignUpSchema } from "~/lib/schemas";

type Props = {};

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

const variants = {
  hidden: {
    y: "-200vh",
  },
  visible: {
    y: "0vh",
    transition: {
      duration: 2,
      type: "spring",
      damping: 15,
      stiffness: 150,
    },
  },
};

const handleSubmit = () => {};

export default function page({}: Props) {
  const [selectedPassword, setSelectedPassword] = useState(false);

  return (
    <main className="flex h-screen flex-col bg-background">
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="flex h-screen w-screen flex-col items-center justify-center"
      >
        <h1 className="font-black text-text">Sign Up</h1>
        <div className="m-8 h-1 w-1/2 bg-primary" />
        <>
          <Formik
            className=""
            initialValues={{ email: "", password: "", confirmPassword: "" }}
            validationSchema={SignUpSchema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched }) => (
              <Form className="flex w-full flex-col items-center">
                <div className="input-container absolute">
                  <Field
                    className="rounded-xl border-4 border-text"
                    type="text"
                    name="email"
                  />
                  <label className="pointer-events-none relative -left-3/4 font-medium">
                    Email
                  </label>
                </div>
              </Form>
            )}
          </Formik>
        </>
      </motion.div>
    </main>
  );
}

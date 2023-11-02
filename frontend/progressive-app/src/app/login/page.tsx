"use client";
import React from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import LoginForm from "./login_form";
import { motion } from "framer-motion";

type Props = {};

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

const handleSubmit = async (formData: { email: string; password: string }) => {
  const supabase = createClientComponentClient();
  const { error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  });

  console.log(error);
};

export default function page({}: Props) {
  return (
    <main className="flex h-screen flex-col bg-background">
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="flex h-screen w-screen flex-col items-center justify-center"
      >
        <h1 className="font-black text-text">Sign In</h1>
        <div className="m-8 h-1 w-1/2 bg-primary" />
        <LoginForm handleSubmit={handleSubmit}></LoginForm>
      </motion.div>
    </main>
  );
}

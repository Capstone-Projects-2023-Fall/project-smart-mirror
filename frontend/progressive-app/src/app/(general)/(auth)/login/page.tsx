"use client";
import React, { useState } from "react";
import LoginForm from "./login_form";
import { motion } from "framer-motion";
import { supabase } from "~/lib/supabase-client";
import { useRouter } from "next/navigation";
import { AuthError } from "@supabase/supabase-js";

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

export default function Login({}: Props) {
  const router = useRouter();
  const [error, setError] = useState<AuthError>();

  const handleSubmit = async (formData: {
    email: string;
    password: string;
  }) => {
    console.log("HELLO");
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        console.error(error);
        setError(error);
      } else {
        console.log("User: ", data.user);
        console.log("Session: ", data.session);
        router.push(`${location.origin}/dashboard`);
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <main className="flex h-screen flex-col bg-background">
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="flex h-screen w-screen flex-col items-center justify-center"
      >
        <h1 className="font-black text-text">Welcome Back!</h1>
        <div className="m-8 h-1 w-1/2 bg-primary" />
        <LoginForm handleSubmit={handleSubmit} error={error}></LoginForm>
      </motion.div>
    </main>
  );
}

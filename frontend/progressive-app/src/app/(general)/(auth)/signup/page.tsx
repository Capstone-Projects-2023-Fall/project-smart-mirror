"use client";
import React from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { motion } from "framer-motion";
import SignUpForm from "./sign_up_form";
import { useRouter } from "next/navigation";

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

export default function SignUp({}: Props) {
  const router = useRouter();

  const handleSubmit = async (formData: {
    email: string;
    password: string;
  }) => {
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.refresh();
    console.log(error);
  };

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
        <SignUpForm handleSubmit={handleSubmit}></SignUpForm>
      </motion.div>
    </main>
  );
}

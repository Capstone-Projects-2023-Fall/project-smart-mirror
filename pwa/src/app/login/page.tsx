"use client";
import React, { useEffect, useState } from "react";
import * as Form from "@radix-ui/react-form";
import { supabase } from "../utils/supabase-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useRouter,useSearchParams } from "next/navigation";

type Props = {};

export default function Login({}: Props) {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string | null | undefined>(undefined);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    const authData = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });

    if (authData.error !== null) {
      console.log(authData.error);
      setError(authData.error.message);
    } else {
      setError(null);
    }
  };
  const router = useRouter();
  const passedId = useSearchParams().get("mirrorID") || -1
  const handleLoginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `https://projectlumina.app/dashboard?mirrorID=${passedId}`,
      },
    });
  };

  useEffect(() => {
    if (error === null) {
      console.log(`Moving domains: ID PASSED ${passedId}`)
      router.push(`/dashboard?mirrorID=${passedId}`);
      router.refresh();
    }
  }, [error, router]);
  return (
    <>
      <section className="w-full h-full flex flex-col items-center jusify-center text-base space-y-3">
        <h1 className="font-bold m-16">Login</h1>
        <Form.Root
          className="flex flex-col w-72 space-y-6"
          onSubmit={(event) => {
            event.preventDefault();
            handleLogin();
          }}
        >
          <Form.Field name="email" className="grid">
            <div className="flex flex-col items-baseline justify-between space-y-2">
              <Form.Label className="font-semibold">Enter an Email</Form.Label>
              <Form.Message match="valueMissing">
                Please enter an email
              </Form.Message>
              <Form.Message match="typeMismatch">
                Please enter a valid email
              </Form.Message>
              <Form.Control asChild className="">
                <input
                  type="email"
                  autoComplete="email"
                  className="rounded outline-none text-background px-4 py-1 w-full h-9 bg-skin-input-field-accent"
                  required
                  onChange={onChange}
                  value={values.email}
                />
              </Form.Control>
            </div>
          </Form.Field>
          <Form.Field name="password" className="grid">
            <div className="flex flex-col items-baseline justify-between space-y-2">
              <Form.Label className="font-semibold">
                Enter your password
              </Form.Label>
              <Form.Message match="valueMissing">
                Please provide your password
              </Form.Message>
              <Form.Control asChild className="">
                <input
                  type="password"
                  autoComplete="new-password"
                  className="rounded outline-none text-skin-base px-4 py-1 w-full h-9 bg-skin-input-field-accent"
                  required
                  value={values.password}
                  onChange={onChange}
                />
              </Form.Control>
            </div>
          </Form.Field>
          <Form.Submit asChild>
            <button className="py-2 rounded bg-skin-button-accent hover:bg-skin-button-accent-hover text-white">
              Login
            </button>
          </Form.Submit>
        </Form.Root>
        <Link className="underline" href="/signup">
          Or create an account here.
        </Link>
        {error && <p>{error}</p>}
        <div className="relative flex py-5 items-center w-60">
          <div className="flex-grow border-t border-skin-base opacity-70" />
          <span className="flex-shrink mx-4 text-sm">OR</span>
          <div className="flex-grow border-t border-skin-base opacity-70" />
        </div>
        <button
          className="flex flex-row max-w-full h-10 bg-skin-fill rounded items-center justify-center text-skin-inverted hover:opacity-90"
          onClick={handleLoginWithGoogle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
            height="1.5em"
            className="pl-4"
          >
            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
          </svg>
          <span className="px-3">Sign in with Google</span>
        </button>
      </section>
    </>
  );
}

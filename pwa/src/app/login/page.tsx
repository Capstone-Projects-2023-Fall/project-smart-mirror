"use client";
import React, { useEffect, useState } from "react";
import * as Form from "@radix-ui/react-form";
import { supabase } from "../utils/supabase-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

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

  useEffect(() => {
    if (error === null) {
      router.push("/dashboard");
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
      </section>
    </>
  );
}

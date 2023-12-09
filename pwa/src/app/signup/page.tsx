"use client";
import React, { useContext, useState } from "react";
import * as Form from "@radix-ui/react-form";
import { supabase } from "../utils/supabase-client";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import { getRandomUsername } from "../utils/getRandomUsername";

type Props = {};

export default function SignUp({}: Props) {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [existingUser, setExistingUser] = useState(false);
  const [error, setError] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSignUp = async () => {
    const authData = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        emailRedirectTo: `https://localhost:3000/auth/callback`,
        data: {
          username: getRandomUsername(),
        },
      },
    });

    if (authData.data.user) {
      setExistingUser(true);
    } else {
      setSubmitted(true);
    }

    if (authData.error) {
      setError(authData.error.message);
    }
  };

  return (
    <>
      <section className="w-full h-full flex flex-col items-center jusify-center text-base space-y-3">
        <h1 className="font-bold m-16">Sign Up</h1>
        <Form.Root
          className="flex flex-col w-72 space-y-6"
          onSubmit={(event) => {
            handleSignUp();
            event.preventDefault();
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
                Enter a password
              </Form.Label>
              <Form.Message match="valueMissing">
                Please provide a password
              </Form.Message>
              <Form.Message match="patternMismatch">
                Please provide a valid password{" "}
                {
                  "(passwords must be minimum eight characters, at least one letter and one number)"
                }
              </Form.Message>
              <Form.Control asChild className="">
                <input
                  type="password"
                  autoComplete="new-password"
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$"
                  className="rounded outline-none text-skin-base px-4 py-1 w-full h-9 bg-skin-input-field-accent"
                  required
                  value={values.password}
                  onChange={onChange}
                />
              </Form.Control>
            </div>
          </Form.Field>
          <Form.Field name="password" className="grid">
            <div className="flex flex-col items-baseline justify-between space-y-2">
              <Form.Label className="font-semibold">
                Please re-enter your password
              </Form.Label>
              <Form.Message match="patternMismatch">
                Passwords do not match
              </Form.Message>
              <Form.Control asChild className="">
                <input
                  type="password"
                  autoComplete="new-password"
                  className="rounded outline-none text-skin-base px-4 py-1 w-full h-9 bg-skin-input-field-accent"
                  required
                  onChange={onChange}
                />
              </Form.Control>
            </div>
          </Form.Field>
          <Form.Submit asChild>
            <button className="py-2 rounded bg-skin-button-accent hover:bg-skin-button-accent-hover text-white">
              Sign up
            </button>
          </Form.Submit>
        </Form.Root>
        <Link className="underline" href="/login">
          Already have an account? Login here.
        </Link>
        {submitted && <p>Confirmation email sent!</p>}
        {existingUser && <p>User already exists.</p>}
        {error && <p>{error}</p>}
      </section>
    </>
  );
}

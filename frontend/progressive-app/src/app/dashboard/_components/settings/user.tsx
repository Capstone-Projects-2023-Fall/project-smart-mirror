import React from "react";
import { Formik, Form, Field } from "formik";
import { User } from "@supabase/auth-helpers-nextjs";

type Props = {
  user: User | null;
};

export default function UserSettings({ user }: Props) {
  return (
    <>
      <h2 className="my-8 font-bold">User</h2>
      <Formik
        initialValues={{
          username: user?.user_metadata.username,
          birthdate: "",
        }}
        onSubmit={() => console.log("working")}
      >
        {({ values, errors }) => (
          <Form className="max-h-full font-medium">
            {/*
            Toggle to save user's location
        */}
            <label className="">
              {"Change your username"}
              <Field
                type="text"
                name="username"
                className="ml-2 appearance-none rounded-md border-2 border-primary bg-background outline-none"
              />
              <p className="text-black-light text-sm">
                Smart Mirror chooses a random name for you when you create your
                account. We'll use this name to address you. You can change it
                anytime here.
              </p>
            </label>
          </Form>
        )}
      </Formik>
    </>
  );
}

import { Formik, Form, Field } from "formik";
import { useState } from "react";
import React from "react";
import Location from "./_components/settings/location";
import UserSettings from "./_components/settings/user";
import { User } from "@supabase/auth-helpers-nextjs";

type Props = {
  user: User | null;
};

export default function Settings({ user }: Props) {
  return (
    <>
      <section className="mt-8">
        <Location />
        <UserSettings user={user} />
      </section>
    </>
  );
}

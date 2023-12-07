import { Formik, Form, Field } from "formik";
import { useState } from "react";
import React from "react";
import Location from "./_components/settings/location";
import UserSettings from "./_components/settings/user";
import { User } from "@supabase/auth-helpers-nextjs";
import Mirror from "./_components/settings/mirror";
import DataPrivacy from "./_components/settings/data_privacy";
import Time from "./_components/settings/time";
import Widget from "./_components/settings/widget";
import Notifications from "./notifications";
import Fitbit from "./_components/settings/fitbit";

type Props = {
  user: User | null;
};

export default function Settings({ user }: Props) {
  return (
    <>
      <section className="mt-8 font-medium">
        <Location />
        <Mirror />
        <Time user={user} />
        <Fitbit user={user}/>
      </section>
    </>
  );
}

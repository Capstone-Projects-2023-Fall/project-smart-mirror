import React from "react";
import Dashboard from "./dashboard";
import { getUser } from "~/utils/getUser";

type Props = {};

export default async function Page({}: Props) {
  const {
    data: { user },
  } = await getUser();

  return <Dashboard user={user} />;
}

import React from "react";
import Dashboard from "./dashboard";
import { getUser } from "~/utils/getUser";

export default async function Page() {
  const {
    data: { user },
  } = await getUser();

  return <Dashboard user={user} />;
}

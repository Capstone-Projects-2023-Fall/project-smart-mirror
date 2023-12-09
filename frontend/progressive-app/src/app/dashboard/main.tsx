import React, { useEffect, useState } from "react";
import Home from "./home";
import ModuleView from "./module_view";
import Analytics from "./analytics";
import Notifications from "./notifications";
import Settings from "./settings";
import { User } from "@supabase/supabase-js";

type Props = {
  page: string | null;
  user: User | null;
};

export default function MainDisplay({ page, user }: Props) {
  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home user={user} />;
      case "moduleView":
        return <ModuleView />;
      case "analytics":
        return <Analytics />;
      case "notifications":
        return <Notifications />;
      case "settings":
        return <Settings user={user} />;
      default:
        return <Home user={user} />;
    }
  };

  return <div className="h-full w-full">{renderPage()}</div>;
}

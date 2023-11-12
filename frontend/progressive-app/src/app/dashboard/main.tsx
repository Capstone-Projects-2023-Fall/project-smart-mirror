import React, { useState } from "react";
import Home from "./home";
import ModuleView from "./module_view";
import Analytics from "./analytics";
import Notifications from "./notifications";
import Settings from "./settings";

type Props = {
  page: string | null;
};

export default function MainDisplay({ page }: Props) {
  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home />;
      case "moduleView":
        return <ModuleView />;
      case "analytics":
        return <Analytics />;
      case "notifications":
        return <Notifications />;
      case "settings":
        return <Settings />;
      default:
        return null;
    }
  };
  return (
    <div className="h-full w-full">
      <nav></nav>
      {renderPage()}
    </div>
  );
}

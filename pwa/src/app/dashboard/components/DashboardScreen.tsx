import React from "react";
import HomeScreen from "./HomeScreen";
import SettingPage from "./SettingPage";  

type Props = {
  page: string | null;
};

export default function DashboardScreen({ page }: Props) {
  return (
    <section className="mx-4">
      {(() => {
        switch (page) {
          case "home":
            return <HomeScreen />;
          case "moduleView":
            return <p>module view</p>;
          case "notifications":
            return <p>notifications </p>;
          case "settings":
            return <SettingPage />;
          default:
            return <p>home</p>;
        }
      })()}
    </section>
  );
}

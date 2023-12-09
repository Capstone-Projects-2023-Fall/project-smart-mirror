"use client";
import React, { useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { motion } from "framer-motion";

type Props = {
  state: string | null;
  getState: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function Sidebar({ state, getState }: Props) {
  const routes = [
    { name: "home", state: "home" },
    { name: "module view", state: "moduleView" },
    { name: "notifications", state: "notifications" },
    { name: "settings", state: "settings" },
  ];

  const [hovered, setHovered] = useState<string | null>();

  return (
    <>
      <section className="md:w-1/5 md:h-full w-screen h-1/6 border-[1px] border-white bg-skin-button-accent-secondary rounded mx-2 border-opacity-10">
        <NavigationMenu.Root
          className="h-full w-full flex flex-col items-center space-x-3 mt-6"
          orientation="vertical"
        >
          <NavigationMenu.List className="w-full h-full bg-skin-accent">
            {routes.map((item) => (
              <NavigationMenu.Item
                key={item.state}
                className="rounded-md w-[20vw] h-12 flex justify-center items-center cursor-pointer relative"
                onMouseEnter={() => setHovered(item.state)}
                onClick={() => getState(item.state)}
              >
                <motion.span className="font-bold capitalize relative z-[1]">
                  {item.name}
                </motion.span>
                {hovered === item.state && (
                  <motion.div
                    className="accent bg-skin-button-accent-secondary-hover absolute w-full h-10"
                    layoutId="accent"
                    animate={{
                      transition: {
                        type: "spring",
                        bounce: 0.1,
                        duration: 0.01,
                      },
                    }}
                  />
                )}
                {state === item.state && (
                  <motion.div
                    className="selected absolute w-full h-10 border-r-2 border-skin-base z-[2]"
                    layoutId="selected"
                    animate={{
                      transition: {
                        type: "spring",
                        bounce: 0.1,
                        duration: 0.01,
                      },
                    }}
                  />
                )}
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </section>
    </>
  );
}

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
    { name: "Settings", state: "settings" },
  ];

  const [hovered, setHovered] = useState<string | null>();

  return (
    <>
      <section className="px-2 md:px-0 sticky top-0 md:w-1/5 md:h-full w-full h-1/8 border-[1px] border-white bg-skin-button-accent-secondary rounded mx-2 border-opacity-10">
        <NavigationMenu.Root
          className="h-full w-full flex md:flex-col flex-row items-center space-x-3 md:mt-6"
          orientation="vertical"
        >
          <NavigationMenu.List className="w-full h-full bg-skin-accent flex md:block">
            {routes.map((item) => (
              <NavigationMenu.Item
                key={item.state}
                className="rounded-md md:w-[20vw] w-32 h-12 flex justify-center items-center cursor-pointer relative"
                onMouseEnter={() => setHovered(item.state)}
                onClick={() => getState(item.state)}
              >
                <motion.span className="font-bold capitalize relative z-[1]">
                  {item.name}
                </motion.span>
                {hovered === item.state && (
                  <motion.div
                    className="rounded accent bg-skin-button-accent-secondary-hover absolute w-full h-10"
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
                    className="selected absolute w-full h-10 md:border-r-2 md:border-b-0 border-b-2 border-skin-base z-[2]"
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

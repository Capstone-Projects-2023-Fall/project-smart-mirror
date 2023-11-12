import React, { useState } from "react";
import Logo from "~/components/logo";
import { sidebarData } from "~/lib/data";
import { motion } from "framer-motion";

type Props = {
  update: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function Sidebar({ update }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="mr-5 flex h-full w-1/5 flex-col items-center bg-secondary">
      <Logo />
      <ul className="mt-48 flex w-full flex-col items-center justify-center">
        {sidebarData.map((item) => (
          <li
            key={item.state}
            className={`flex h-20 w-1/2 cursor-pointer flex-row items-center duration-500 ease-in-out ${
              item.state === selected ? "text-primary" : "text-text"
            }`}
            onMouseEnter={() => setSelected(item.state)}
            onClick={() => update(item.state)}
          >
            <motion.span className="font-bold capitalize">
              {item.label}
            </motion.span>
            {selected === item.state && (
              <motion.div
                layoutId="accent"
                animate={{
                  transition: { type: "spring", bounce: 0.25, duration: 0.5 },
                }}
                className="accent absolute left-12 h-12 w-2 rounded-full bg-primary"
              ></motion.div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

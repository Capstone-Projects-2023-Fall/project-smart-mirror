import React from "react";
import Searchbar from "./searchbar";
import { sidebarData } from "~/lib/data";

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <div className="flex max-h-screen w-72 flex-col bg-background p-4">
      <Searchbar></Searchbar>
      <div className="bg-background-secondary mt-4 h-full max-w-full rounded-xl p-4">
        <ul className="font-bold text-text">
          {Object.entries(sidebarData).map(([key, value]) => (
            <li
              key={key}
              className="group flex cursor-pointer select-none flex-row pt-4 capitalize duration-300 ease-in-out hover:text-primary"
            >
              <svg
                className="pr-4"
                aria-hidden="false"
                xmlns="https://www.w3.org/2000/svg"
                data-icon={value.dataIcon}
                viewBox={value.viewBox}
                height="1.5em"
              >
                <path fill="currentColor" d={value.icon} />
              </svg>
              {value.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

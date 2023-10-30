"use client";
import React, { useState } from "react";
import Logo from "./logo";
import { mobileNav, navData, dashboardButton } from "~/lib/data";
import Link from "next/link";
import type { User } from "@supabase/supabase-js";

type Props = {
  user: User | null;
};

export default function Navbar({ user }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  console.log("user: ", user);

  return (
    <nav
      className={`absolute left-0 right-0 top-0 z-10 w-full select-none bg-background shadow-md duration-300 ease-in-out md:h-20 ${
        isOpen ? "max-h-96" : "h-20"
      }`}
    >
      <div className="flex h-full w-full flex-col justify-center md:flex-row md:justify-between">
        <div className="flex h-20 flex-row items-center">
          <Logo></Logo>
          <div
            className={`ml-auto mr-4 md:hidden`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                className=""
                aria-hidden="false"
                xmlns="https://www.w3.org/2000/svg"
                data-icon={mobileNav.close.dataIcon}
                viewBox={mobileNav.close.viewBox}
                height="1.5em"
              >
                <path fill="currentColor" d={mobileNav.close.icon} />
              </svg>
            ) : (
              <svg
                className=""
                aria-hidden="false"
                xmlns="https://www.w3.org/2000/svg"
                data-icon={mobileNav.open.dataIcon}
                viewBox={mobileNav.open.viewBox}
                height="1.5em"
              >
                <path fill="currentColor" d={mobileNav.open.icon} />
              </svg>
            )}
          </div>
        </div>
        <ul
          className={`w-full ${
            isOpen
              ? ""
              : "hidden md:mr-8 md:flex md:w-1/2 md:flex-row md:items-center md:justify-end"
          }`}
        >
          {!user
            ? Object.entries(navData).map(([key, value]) => (
                <li
                  className="hover:bg-gray group flex w-full flex-row border-b-2 border-text px-8 py-4 md:justify-center md:border-none md:px-2"
                  key={key}
                >
                  <Link
                    href={value.route}
                    className="flex flex-row font-bold text-text group-hover:text-primary"
                  >
                    <svg
                      className="mr-2 hover:text-primary"
                      aria-hidden="false"
                      xmlns="https://www.w3.org/2000/svg"
                      data-icon={value.dataIcon}
                      viewBox={value.viewBox}
                      height="1.5em"
                    >
                      <path fill="currentColor" d={value.icon} />
                    </svg>
                    {value.name}
                  </Link>
                </li>
              ))
            : Object.entries(dashboardButton).map(([key, value]) => (
                <li
                  className="hover:bg-gray group flex max-w-full flex-row border-b-2 border-text px-8 py-4 md:justify-center md:border-none md:px-2"
                  key={key}
                >
                  <Link
                    href={value.route}
                    className="flex flex-row font-bold text-text group-hover:text-primary"
                  >
                    <svg
                      className="mr-2 hover:text-primary"
                      aria-hidden="false"
                      xmlns="https://www.w3.org/2000/svg"
                      data-icon={value.dataIcon}
                      viewBox={value.viewBox}
                      height="1.5em"
                    >
                      <path fill="currentColor" d={value.icon} />
                    </svg>
                    {value.name}
                  </Link>
                </li>
              ))}
        </ul>
      </div>
    </nav>
  );
}

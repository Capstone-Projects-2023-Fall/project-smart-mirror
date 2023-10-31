"use client";
import React, { useState } from "react";
import Logo from "./logo";
import { mobileNav } from "~/lib/data";
import Link from "next/link";
import type { NavItem } from "~/lib/data";

type Props = {
  items: NavItem[];
};

export default function Navbar({ items }: Props) {
  const [isOpen, setIsOpen] = useState(false);

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
            onClick={() => {
              setIsOpen(!isOpen);
            }}
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
              : "hidden md:mr-8 md:flex md:max-w-xl md:flex-row md:items-center md:justify-end"
          }`}
        >
          {items.map((item, index) => (
            <li
              className="hover:bg-gray flex w-full flex-row border-b-2 border-text px-8 py-4 md:justify-end md:border-none md:px-2"
              key={index}
            >
              <Link
                href={item.route}
                className="group flex flex-row font-bold text-text duration-300 ease-in-out hover:text-primary"
              >
                <svg
                  className="mr-2 hover:text-primary"
                  aria-hidden="false"
                  xmlns="https://www.w3.org/2000/svg"
                  viewBox={item.viewBox}
                  height="1.5em"
                >
                  <path fill="currentColor" d={item.svg} />
                </svg>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

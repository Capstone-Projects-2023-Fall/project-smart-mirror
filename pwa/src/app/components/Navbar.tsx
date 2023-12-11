"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { useTheme } from "next-themes";
import { supabase } from "../utils/supabase-client";
import { usePathname } from 'next/navigation';

type Props = {};

export default function Navbar({}: Props) {
  const [dark, setDark] = useState<boolean>();
  const { theme, setTheme } = useTheme();
  const [userFound, setUserFound] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (user) {
        setUserFound(true);
      }
      console.log(user);

      if (error) console.log(error);
    };
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    setDark(prefersDark.matches);
    fetchData();

    console.log(userFound);
  }, [userFound]);

  useLayoutEffect(() => {
    dark ? setTheme("dark") : setTheme("light");
  }, [dark, setTheme]);
<<<<<<< HEAD
  if (pathname !== "/mirror") {
    return (
      <NavigationMenu.Root className="w-full font-semibold text-lg p-8 flex flex-row justify-between items-center capitalize text-skin-base">
        <NavigationMenu.List className="flex flex-row text-primary space-x-4">
          <NavigationMenu.Item className="">
            <svg viewBox="0 0 512 512" height="1.5em" className="text-skin-base">
              <path
                className="fill-skin-base"
                d="M332.3 426.4c-93.13 17.75-178.5-53.63-178.5-147.6c0-54.25 29-104 76-130.9c7.375-4.125 5.45-15.12-2.8-16.62C108.7 109.4 0 200 0 320c0 106 85.76 192 191.8 192c59.25 0 113.2-26.79 148.9-71.04C346.1 434.5 340.3 424.8 332.3 426.4z"
                id="path1"
              />
              <path
                className="fa-secondary"
                d="M288 63.1l12.42 29.78c.6094 1.225 2.211 2.219 3.578 2.219s2.967-.9941 3.576-2.219l12.42-29.78l29.79-12.42C351 50.97 352 49.36 352 47.1c0-1.365-.9922-2.967-2.211-3.576l-29.79-12.42l-12.42-29.79c-.6094-1.227-2.209-2.217-3.576-2.217s-2.969 .9902-3.578 2.217l-12.42 29.79L258.2 44.42c-1.217 .6094-2.209 2.211-2.209 3.576c0 1.359 .9922 2.971 2.209 3.58L288 63.1zM507.6 216.9L448 192l-24.88-59.63C421.8 129.8 419 127.1 416 127.1s-5.75 1.75-7.125 4.375L384 192l-59.63 24.88C321.8 218.3 320 221 320 224s1.75 5.75 4.375 7.125L384 256l24.88 59.63C410.3 318.3 413 320 416 320s5.75-1.75 7.125-4.375L448 256l59.63-24.88C510.3 229.8 512 227 512 224S510.3 218.3 507.6 216.9z"
                id="path2"
                fill="currentColor"
              />
            </svg>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="select-none">
            lumina
          </NavigationMenu.Item>
        </NavigationMenu.List>
        <NavigationMenu.List className="flex flex-row">
          <NavigationMenu.Item className="px-4 cursor-pointer hover:text-secondary duration-300 ease-in-out">
            <Link href="/">home</Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="px-4 cursor-pointer hover:text-secondary duration-300 ease-in-out">
            <Link href="/#overview">overview</Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="px-4 cursor-pointer hover:text-secondary duration-300 ease-in-out">
            <Link href="/#about">about us</Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
        <NavigationMenu.List className="flex flex-row">
          {!userFound && (
            <>
              <NavigationMenu.Item className="px-4 cursor-pointer hover:text-secondary duration-300 ease-in-out">
                <Link href={`/signup`}>sign up</Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item className="px-4 py-1 rounded-md bg-skin-button-accent cursor-pointer text-white">
                <Link href={`/login`}>login</Link>
              </NavigationMenu.Item>
            </>
          )}
          <NavigationMenu.Item
            className="px-4 cursor-pointer"
            onClick={() => {
              setDark(!dark);
            }}
          >
            <div className="w-14 h-4">
              {dark ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  height="1.5em"
                  className="text-white"
                >
                  <path
                    fill="currentColor"
                    d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  className="text-skin-base"
                  height="1.5em"
                >
                  <path
                    fill="currentColor"
                    d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
                  />
                </svg>
              )}
            </div>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    );
  };
=======

  return (
    <NavigationMenu.Root className="w-full font-semibold text-lg p-8 flex flex-row justify-between items-center capitalize text-skin-base">
      <NavigationMenu.List className="flex flex-row text-primary space-x-4">
        <NavigationMenu.Item className="">
          <svg viewBox="0 0 512 512" height="1.5em" className="text-skin-base">
            <path
              className="fill-skin-base"
              d="M332.3 426.4c-93.13 17.75-178.5-53.63-178.5-147.6c0-54.25 29-104 76-130.9c7.375-4.125 5.45-15.12-2.8-16.62C108.7 109.4 0 200 0 320c0 106 85.76 192 191.8 192c59.25 0 113.2-26.79 148.9-71.04C346.1 434.5 340.3 424.8 332.3 426.4z"
              id="path1"
            />
            <path
              className="fa-secondary"
              d="M288 63.1l12.42 29.78c.6094 1.225 2.211 2.219 3.578 2.219s2.967-.9941 3.576-2.219l12.42-29.78l29.79-12.42C351 50.97 352 49.36 352 47.1c0-1.365-.9922-2.967-2.211-3.576l-29.79-12.42l-12.42-29.79c-.6094-1.227-2.209-2.217-3.576-2.217s-2.969 .9902-3.578 2.217l-12.42 29.79L258.2 44.42c-1.217 .6094-2.209 2.211-2.209 3.576c0 1.359 .9922 2.971 2.209 3.58L288 63.1zM507.6 216.9L448 192l-24.88-59.63C421.8 129.8 419 127.1 416 127.1s-5.75 1.75-7.125 4.375L384 192l-59.63 24.88C321.8 218.3 320 221 320 224s1.75 5.75 4.375 7.125L384 256l24.88 59.63C410.3 318.3 413 320 416 320s5.75-1.75 7.125-4.375L448 256l59.63-24.88C510.3 229.8 512 227 512 224S510.3 218.3 507.6 216.9z"
              id="path2"
              fill="currentColor"
            />
          </svg>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="select-none">
          lumina
        </NavigationMenu.Item>
      </NavigationMenu.List>
      <NavigationMenu.List className="flex flex-col space-y-4 md:space-y-0 md:flex-row">
        <NavigationMenu.Item className="px-4 cursor-pointer hover:text-secondary duration-300 ease-in-out">
          <Link href="/">home</Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="px-4 cursor-pointer hover:text-secondary duration-300 ease-in-out">
          <Link href="/#overview">overview</Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="px-4 cursor-pointer hover:text-secondary duration-300 ease-in-out">
          <Link href="/#about">about us</Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
      <NavigationMenu.List className="flex flex-row md:flex-row">
        {!userFound ? (
          <>
            <NavigationMenu.Item className="px-4 cursor-pointer hover:text-secondary duration-300 ease-in-out">
              <Link href={`/signup`}>sign up</Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item className="px-4 py-1 rounded-md bg-skin-button-accent cursor-pointer text-white">
              <Link href={`/login`}>login</Link>
            </NavigationMenu.Item>
          </>
        ) : (
          <>
            <NavigationMenu.Item className="px-4 py-1 rounded-md bg-skin-button-accent cursor-pointer text-white">
              <Link href={`/dashboard`}>Visit Dashboard</Link>
            </NavigationMenu.Item>
          </>
        )}
        <NavigationMenu.Item
          className="px-4 cursor-pointer"
          onClick={() => {
            setDark(!dark);
          }}
        >
          <div className="w-14 h-4">
            {dark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                height="1.5em"
                className="text-white"
              >
                <path
                  fill="currentColor"
                  d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="text-skin-base"
                height="1.5em"
              >
                <path
                  fill="currentColor"
                  d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
                />
              </svg>
            )}
          </div>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
>>>>>>> 7da25c375e108b6b3484a602f754fffc2b8662a7
}

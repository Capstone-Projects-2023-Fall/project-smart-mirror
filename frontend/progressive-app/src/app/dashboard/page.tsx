"use client";
import React from "react";
import { motion } from "framer-motion";
import Sidebar from "./components/navbar/sidebar";
import Searchbar from "./components/navbar/searchbar";

type Props = {};

export default function page({}: Props) {
  return <Sidebar></Sidebar>;
}

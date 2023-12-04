import { AuthError } from "@supabase/supabase-js";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  error: AuthError;
};

export default function ErrorModal({ error }: Props) {
  return (
    <motion.section
      layout
      className="mb-7 w-full rounded-xl border-4 border-error p-4 font-bold text-black md:w-2/5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex flex-row">
        <h3 className="mb-2">Sign in unsuccessful</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
          className="ml-auto text-error"
        >
          <path
            fill="currentColor"
            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
          />
        </svg>
      </div>
      {error.message}
    </motion.section>
  );
}

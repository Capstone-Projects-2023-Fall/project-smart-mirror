import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default function createClient() {
  createServerComponentClient({
    cookies,
  });
}

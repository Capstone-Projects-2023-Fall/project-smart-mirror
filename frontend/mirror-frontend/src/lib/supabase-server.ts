import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const supabase = createServerComponentClient({
  cookies,
});

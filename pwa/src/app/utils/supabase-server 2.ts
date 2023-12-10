import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { cache } from "react";

const cookieStore = cookies();

export const supabase = createServerComponentClient({
  cookies: () => cookieStore,
});

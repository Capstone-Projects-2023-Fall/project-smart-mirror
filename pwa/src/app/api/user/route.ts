import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

export async function GET(request: NextRequest) {
  const cookieStore = cookies();

  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
  const { data, error } = await supabase.auth.getUser();
  if (error) console.log(error);

  return new Response(JSON.stringify({ user: data.user }));
}

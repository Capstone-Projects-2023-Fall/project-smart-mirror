import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
  console.log("hi");
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (code) {
    const supabase = createRouteHandlerClient({ cookies });
    const res = await supabase.auth.exchangeCodeForSession(code);
    console.log(res);
  }

  return NextResponse.redirect(`${requestUrl.origin}/dashboard`);
}

import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const pathname = req.nextUrl.pathname;

  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log(session);

  const protectedRoutes = pathname === "/dashboard" || pathname === "/mirror";

  console.log(pathname);

  if (!session && protectedRoutes) {
    NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  /*
   * Match all request paths except for the ones starting with:
   * - api (API routes)
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico (favicon file)
   */
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|manifest.webmanifest|png).*)",
  ],
};

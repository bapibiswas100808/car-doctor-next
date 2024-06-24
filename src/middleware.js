import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const middleware = async (request) => {
  const token = cookies(request).get("next-auth.session-token");
  const pathname = request.nextUrl.pathname;
  if (pathname.includes("api")) {
    return NextResponse.next();
  }
  if (!token) {
    return NextResponse.redirect(
      new URL(`/login?redirect=${pathname}`, request.url)
    );
  }
  return NextResponse.next();
};

export const config = {
  matcher: ["/my-bookings/:path*", "/services/:path*"],
};

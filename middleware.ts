import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
const isPublicRoute = createRouteMatcher(["/landing"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  if (!isPublicRoute(req)) {
    if (!userId) {
      const redirectUrl = encodeURIComponent(
        req.nextUrl.pathname + req.nextUrl.search
      );
      return NextResponse.redirect(
        new URL(`/landing?redirect=${redirectUrl}`, req.url)
      );
    }
  }
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

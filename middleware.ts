// import { NextRequest, NextResponse } from "next/server";

// export function middleware(request: NextResponse) {
//   console.log("middleware:" + request.url);

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/about/:path*", "/dashboard/:path*"],
// };

import { createNextAuthMiddleware } from "nextjs-basic-auth-middleware";

export const middleware = createNextAuthMiddleware();

export const condig = {
  matcher: ["/(.*)"],
}
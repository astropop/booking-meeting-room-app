import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  // console.log("middlewaretai", req.nextUrl.pathname);
  // const res = NextResponse.next();
  // res.headers.append("Access-Control-Allow-Credentials", "true");
  // res.headers.append("Access-Control-Allow-Origin", "*");
  // res.headers.append(
  //   "Access-Control-Allow-Methods",
  //   "GET,DELETE,PATCH,POST,PUT,OPTIONS"
  // );
  // res.headers.append(
  //   "Access-Control-Allow-Headers",
  //   "X-CSRF-Token, X-Requested-With, Authorisation, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  // );
  // return res;
  // return NextResponse.redirect(new URL("/meeting/", req.url));
}
// export const OPTIONS = async (request: NextRequest) => {
//   return new NextResponse("", {
//     status: 200,
//   });
// };

// export const config = {
//   /*
//    * Match all request paths except for the ones starting with:
//    * - api (API routes)
//    * - _next/static (static files)
//    * - _next/image (image optimization files)
//    * - favicon.ico, sitemap.xml, robots.txt (metadata files)
//    */
//   matcher: "/((?!_next/static|_next/image|favicon.ico|login|setup).*)",
// };

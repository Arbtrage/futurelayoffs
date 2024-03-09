import { NextRequest, NextResponse } from "next/server";

export const config = {
    matcher: [
        "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
    ],
};

export default async function middleware(req: NextRequest) {
    const url = req.nextUrl;

    const searchParams = req.nextUrl.searchParams.toString();
    const path = `${url.pathname}${searchParams.length > 0 ? `?${searchParams}` : ""
        }`;

    const session = req.cookies.get("FL")?.value;
    if (!session && path !== "/") {
        return NextResponse.redirect(new URL("/", req.url));
    } else if (session && path == "/") {
        return NextResponse.redirect(new URL("/home", req.url));
    }

}
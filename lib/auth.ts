import GithubProvider from "next-auth/providers/github"
import { NextAuthOptions } from "next-auth";

const authOptions: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_ID as string,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET as string,
        }),
    ],
    pages: {
        signIn: "/",
    },
    cookies: {
        sessionToken: {
            name: "FL",
            options: {
                httpOnly: true,
                sameSite: "lax",
                path: "/",
            },
        },
    },
    callbacks: {
        async session({ token, session }) {
            if (token.user) {
                console.log("Token",token);
                session.user = token.user;
            }
            return session;
        },
    },
};

export default authOptions;
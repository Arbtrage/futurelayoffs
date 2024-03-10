import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import axios from 'axios';

async function createUser(username: string) {
    const { data: user } = await axios.get(`https://api.github.com/users/${username}`);
   
    if (!user) throw new Error("User not found !!")
    try {
        console.log("Try catch")
        const data=await prisma.user.create({
            data: {
                name: user.name,
                username: user.login,
                email: user.email,
                bio: user.bio,
                company: user.company,
                site: user.blog,
                location: user.location,
                public_repos: user.public_repos,
                followers: user.followers,
                following: user.following,
                profilePicUrl: user.avatar_url,
            }
        })
        console.log(data);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }

}


export const POST = async (request: NextRequest) => {
    try {
        const data = await request.json();
        console.log(data.username)
        const user = await createUser(data.username);
        return NextResponse.json({ status: 201, message: "User Created", user });
    } catch (error: any) {
        console.error("Error handling request:", error);
        return NextResponse.json({ status: 500, message: error.message });
    }
}



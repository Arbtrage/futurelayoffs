import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import axios from 'axios';

async function createUser(username: string) {

    try {
        const { data: user } = await axios.get(`https://api.github.com/users/${username}`);

        if (!user) throw new Error("User not found !!")
        
        await prisma.user.create({
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
        return true;
    } catch (error) {
        console.log(error);
        return false
    }

}


export const POST = async (request: NextRequest) => {

    const data = await request.json();
    const res = await createUser(data.username);
    if (res) return NextResponse.json({ status: 201, message: "User Created" });
    return NextResponse.json({ status: 500, message:"Unable to locate the username !!!"});

}



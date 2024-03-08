import { NextRequest, NextResponse } from "next/server";


async function addIssue(issueData: any) {
    return "Hello";
}

export const POST = async (request: NextRequest) => {
    const data = await request.json();
    console.log("data : ",data);
    const issue = await addIssue(data);

    return NextResponse.json("Issue Created")
}
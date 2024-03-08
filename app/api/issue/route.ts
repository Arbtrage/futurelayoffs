import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

async function addIssue(issueData: any) {
    const issue = await prisma.issue.create({
        data: {
            name: issueData.name,
            description: issueData.description,
            tags: issueData.tags,
            status: issueData.status
        }
    });
    return issue;
}

export const POST = async (request: NextRequest) => {
    const data = await request.json();
    const issue = await addIssue(data);

    return NextResponse.json({ message: "Issue Created", issue });

}
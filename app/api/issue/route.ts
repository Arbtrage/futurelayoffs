import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { IssueData } from "@/types/issue-type";

async function getAllIssues() {
    try {
        const issues = await prisma.issue.findMany();
        return issues;
    } catch (error) {
        console.error("Error fetching issues:", error);
        throw new Error("Could not fetch issues");
    }
}


async function addIssue(issueData: IssueData) {
    try {
        const issue = await prisma.issue.create({
            data: {
                name: issueData.name,
                description: issueData.description,
                tags:issueData.tags ,
                status: issueData.status,
                repository_url: issueData.repository_url,
                repository_name: issueData.repository_name,
                repository_description: issueData.repository_description,
                bounty:issueData.bounty,
                license: issueData.license,
                assignee: issueData.assignee,
                assignees: issueData.assignees 
            }
        });
        return issue;
    } catch (error) {
        console.error("Error creating issue:", error);
        throw new Error("Could not create issue");
    }
}

export const POST = async (request: NextRequest) => {
    try {
        const data: IssueData = await request.json();
        const issue = await addIssue(data);

        return NextResponse.json({ status: 201, message: "Issue Created", issue });
    } catch (error:any) {
        console.error("Error handling request:", error);
        return NextResponse.json({ status: 500, message: error.message});
    }
};

export const GET = async () => {
    const issues = await getAllIssues();
    return NextResponse.json(issues);
}
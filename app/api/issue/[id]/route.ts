import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

async function getIssue(id: string) {

  const issue = await prisma.issue.findFirst({
    where: {
      id
    },
    select: {
      name: true,
      repository_description: true,
      repository_name: true,
      repository_url: true,
      description: true,
      tags: true,
      status: true,
      bounty: true,
      license: true,
      assignee: true,
      assignees: true
    }
  })

  return issue;
}

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const issue = await getIssue(params.id);

  return NextResponse.json(issue);
};

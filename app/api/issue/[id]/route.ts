import { NextResponse, NextRequest } from "next/server";

async function getIssue(id: string) {
  console.log(id);
  return "Hello World";
}

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const issue = await getIssue(params.id);

  return NextResponse.json("Hello");
};

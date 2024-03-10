"use server";
import prisma from "./prisma";

export async function getIssues() {
  const issues = await prisma.issue.findMany();
  return issues;
}

export async function checkUser({ email }: any) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (!user) return false;
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

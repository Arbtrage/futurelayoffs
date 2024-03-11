"use server";
import prisma from "./prisma";
import axios from "axios";
import { BackendURL } from "./constants";

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



export async function processRepository(githubLink: string) {
  try {
    console.log("Function", githubLink);
    const response = await axios.post(BackendURL + 'process_repository', {
      github_url: githubLink
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log("reponse");
    console.log("Response", response);
    console.log(response.data)
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error with HTTP request:', error.message);
      throw new Error(`Failed to process repository: ${error.message}`);
    } else {
      console.error('Unexpected error:', error);
      throw error;
    }
  }
}

export async function askQuestion(question: string) {
  try {
    const response = await axios.post(BackendURL + 'ask_question', {
      user_input: question
    }, {
      headers: {
        'Content-Type': 'application/json'

      }
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error with HTTP request:', error.message);
      throw new Error(`Failed to ask question: ${error.message}`);
    } else {
      console.error('Unexpected error:', error);
      throw error;
    }
  }
}
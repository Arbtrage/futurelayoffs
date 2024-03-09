"use client";

import React, { useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Input } from "@/components/ui/input";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";
import { fetcher } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import useSWR from "swr";
import { ChatLLM } from "./chat";

const loadingStates = [
  { text: "Searching for the repo" },
  { text: "Stealing the repo 😏" },
  { text: "I got it 🙂 !!" },
  { text: " I like it 😁 " },
  { text: " This seems cool 🤩!!" },
  { text: "I can work around it .. I think 😅" },
  { text: "I can do it !" },
  { text: "Welcome to .... this cool repo 🤔" },
];

export function Chat() {
  const [repoUrl, setRepoUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [toChat, setToChat] = useState(false);

  const handleRepoUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepoUrl(event.target.value);
  };

  // const { data, error, isLoading } = useSWR("/api/issue", fetcher);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("clicked");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setToChat(true);
    }, 16000);
  };

  return (
    <>
      {!toChat ? (
        <div className="h-[50rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
          <Loader
            loadingStates={loadingStates}
            loading={loading}
            duration={2000}
          />
          <div className="max-w-2xl mx-auto p-4">
            <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
              Get started with FL AI
            </h1>
            <p></p>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
              Repo too hard to read ? Don&apos;t worry, I got you covered !!!
              Enter the github repo url and I will answer any question regarding
              it
            </p>
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                value={repoUrl}
                placeholder="https://github.com/somerepo"
                onChange={handleRepoUrlChange}
                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
              />
            </form>
            {loading && (
              <button
                className="fixed top-4 right-4 text-black dark:text-white z-[120]"
                onClick={() => setLoading(false)}
              >
                <IconSquareRoundedX className="h-10 w-10" />
              </button>
            )}
          </div>
          <BackgroundBeams />
        </div>
      ) : (
        <ChatLLM />
      )}
    </>
  );
}

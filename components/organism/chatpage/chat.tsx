"use client";

import React, { useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Input } from "@/components/ui/input";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";
import { fetcher } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import useSWR from "swr";
import { askQuestion } from "@/lib/actions";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const loadingStates = [
  { text: "Searching the repo" },
  { text: "That's some question 🤔" },
  { text: "I can work around it .. I think 😅" },
  { text: "I got it 🙂 !!" },
  { text: " I like it 😁 " },
  { text: " This seems cool 🤩!!" },
  { text: "Okay here it goes !" },
];

// const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
// `;

export function ChatLLM() {
  const [question, setQuestion] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState(false);
  const [words, setWords] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  };

  // const { data, error, isLoading } = useSWR("/api/issue", fetcher);

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("clicked");
    setLoading(true);
    const data = await askQuestion(question);
    setWords(data.answer);
    setAnswer(true);
    setLoading(false);
    // setTimeout(() => {
    //   setLoading(false);
    //   setAnswer(true);
    // }, 16000);
  };

  return (
    <>
      <div className="h-[50rem] w-full rounded-md bg-neutral-950 relative flex flex-col justify-center antialiased">
        
        <Loader
          loadingStates={loadingStates}
          loading={loading}
          duration={2000}
        />
        <div className="max-w-2xl mx-auto p-4">
          {!answer ? (
            <>
              <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                Repo is Processed
              </h1>
              <p></p>
              <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                Go on ... Ask whatever you want !!
              </p>
              <form onSubmit={handleSubmit}>
                <Input
                  type="text"
                  value={question}
                  onChange={handleChange}
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
            </>
          ) : (
              <div className="mx-auto h-[700px] overflow-y-auto">
                { words}
                {/* <TextGenerateEffect words={words} /> */}
              </div>
          )}
        </div>
        <BackgroundBeams />
      </div>
    </>
  );
}

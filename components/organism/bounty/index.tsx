"use client";

import React from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import BountyCard from "@/components/molecule/bounty-card";

const Bounties = () => {
  const { data, error, isLoading } = useSWR("/api/issue", fetcher);
  if (isLoading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  console.log(data);
  return (
    <div className="flex flex-col">
      <div className="text-2xl font-bold mb-10">Bounties</div>
      <div className="flex flex-col gap-5">
        {data.map((bounty: any, index: any) => {
          return (
            <div key={index}>
              <BountyCard bounty={bounty} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bounties;

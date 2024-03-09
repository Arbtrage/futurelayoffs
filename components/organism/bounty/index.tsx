"use client";

import React from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import BountyCard from "@/components/molecule/bounty-card";

const Bounties = () => {
  const { data, error, isLoading } = useSWR("/api/issue", fetcher);

  return (
    <div className="flex flex-col text-black">
      <div className="flex flex-col gap-5 rounded-xl">
        {isLoading && <div>Loading</div>}
        {error && <div>Error</div>}
        {!isLoading && !error && <BountyCard bounties={data} />}
      </div>
    </div>
  );
};

export default Bounties;

"use client";

import React from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { Bounty } from "@/components/molecule/dashboard"; // Adjust if Bounty is not the default export
import { SquareKanban } from "lucide-react";
import { motion } from "framer-motion";

const New_Bounties = () => {
  const { data, error } = useSWR("/api/issue", fetcher);

  if (error) return <div>Error</div>;
  if (!data) return <div>Loading...</div>;


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="flex flex-col mx-2">
      <h1 className="text-2xl text-bold text-start mb-5 flex flex-row gap-2 items-center">
        <SquareKanban size={30} />
        New Bounties
      </h1>
      <motion.div
        className="flex flex-col gap-4 overflow-y-auto h-[60vh] p-4 custom-scrollbar-hide"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {data.map((bounty: any, index:any) => (
          <motion.div key={bounty.id} variants={itemVariants}>
            <Bounty bounty={bounty} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default New_Bounties;

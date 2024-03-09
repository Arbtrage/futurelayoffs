"use client";

import React from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import Link from "next/link";

const page = ({ params }: { params: { id: string } }) => {
  const { data, error } = useSWR(`/api/issue/${params.id}`, fetcher);

  if (error)
    return (
      <div className="text-red-500 text-center font-bold p-5">
        Failed to load
      </div>
    );
  if (!data)
    return (
      <div className="text-gray-500 text-center font-bold p-5">Loading...</div>
    );

  return (
    <div className="max-w-xl mx-auto p-5 bg-white text-black rounded-lg shadow-md mt-10">
      <h1 className="text-3xl font-bold border-b pb-2 mb-4 ">{data.name}</h1>
      <Link href={data.repository_url}>
        <h2 className="text-lg text-gray-700 mb-3">{data.repository_name}</h2>
      </Link>
      <p className="text-gray-600">{data.description}</p>
      <div>
        <p className="text-green-600">Bounty: $ {data.bounty}</p>
        <p className="text-gray-600">Status: {data.status}</p>
      </div>
    </div>
  );
};

export default page;

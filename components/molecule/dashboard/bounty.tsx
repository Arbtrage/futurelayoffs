import React from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Bounty = ({ bounty }: any) => {
  return (
    <Link href={bounty.repository_url}>
      <Card className="h-fit flex flex-col gap-2 justify-start p-4 text-start cursor-pointer transform transition duration-800 hover:scale-105">
        <div className="flex flex-row gap-3 text-sm items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-row w-full justify-between">
            <CardTitle className="text-sm flex flex-col">
              <span className="font-bold">{bounty.repository_url}</span>
              <span className="text-gray-500 text-xs">{bounty.name}</span>
            </CardTitle>
            <span className="text-green-400 text-lg">
              {bounty.bounty || "$0"}
            </span>
          </div>
        </div>
        <CardDescription className="flex justify-start">
          {bounty.description ||
            `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, magni
        fugiat vitae quod debitis non nobis sunt laboriosam recusandae sequi
        maxime? Aut magni, ipsum recusandae maiores voluptatibus aliquid
        voluptatem facilis?`}
        </CardDescription>
        {bounty.tags && (
          <div className="flex flex-row gap-2">
            {bounty.tags.map((tag: string, index: number) => (
              <Badge key={index} variant={"secondary"}>
                {tag}
              </Badge>
            ))}
          </div>
        )}
        <div></div>
      </Card>
    </Link>
  );
};

export default Bounty;

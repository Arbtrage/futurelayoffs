import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";


const BountyCard = ({ bounty }: any) => {
  return (
    <Card className="w-full bg-gray-950 text-white flex flex-col border-none cursor-pointer">
      <div className="flex justify-between items-center px-9">
        <CardHeader className="w-[20%] text-sm flex justify-start">
          <CardTitle className="text-green-700">$ {bounty.bounty}</CardTitle>
        </CardHeader>
        <Badge variant="open" className="text-white">
          {bounty.status}
        </Badge>
      </div>
      <CardContent className="flex flex-col ">
        <span className="text-sm flex justify-start ">{bounty.name}</span>
        <CardDescription className="flex justify-start ">{bounty.description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default BountyCard;

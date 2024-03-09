import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const thumbnail = [
  "/landing/pic1.jpeg",
  "/landing/pic2.jpeg",
  "/landing/pic3.jpeg",
  "/landing/pic4.jpeg",
];

const Skeleton = ({ index }: any) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Image
      src={thumbnail[index % 4]}
      alt="thumbnail"
      className="rounded-xl"
      width={500}
      height={500}
    />
  </div>
);

const Icon = ({ bounty }: any) => {
  return <div className="text-green-500">$ {bounty}</div>;
};
const BountyCard = ({ bounties }: any) => {
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto h-[800px] overflow-y-auto">
      <BentoGrid>
        {bounties.map((item: any, i: any) => (
          // <div
          //   className="cursor-pointer"
          //   onClick={() => router.push(`/bounty/${item.id}`)}
          // >
          <BentoGridItem
            key={i}
            id={item.id}
            title={item.repository_name}
            description={item.description}
            bounty={item.bounty}
            header={<Skeleton index={i} />}
            icon={<Icon bounty={item.bounty} />}
          />
          // </div>
        ))}
      </BentoGrid>
    </div>
  );
};

export default BountyCard;

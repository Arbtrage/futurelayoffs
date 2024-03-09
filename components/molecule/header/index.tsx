"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

const Welcome = ({ name }: { name: string }) => {
  return (
    <div className="text-5xl text-black">
      Welcome <span className="text-blue-800">{name}</span>
    </div>
  );
};

const Heading = ({ path }: { path: string }) => {
  let heading = path.replace("/", "");
  heading = heading[0].toUpperCase() + heading.substring(1);
  if (heading === "Flai") heading = "Future Layoffs AI"
  if(heading.includes("Bounties/")) heading="Bounty"
  return <div className="text-5xl text-black font-bold">{heading}</div>;
};

const Header = ({ name }: { name: string }) => {
  const path = usePathname();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="p-5 h-[120px] gap-2 flex flex-row  items-center bg-slate-200	 relative"
    >
      {path === "/home" ? <Welcome name={name} /> : <Heading path={path} />}
    </motion.div>
  );
};

export default Header;

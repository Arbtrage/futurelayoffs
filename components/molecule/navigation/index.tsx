"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Bolt,
  Home,
  ReceiptText,
  UserRound,
  LogOut,
  HandCoins,
  BotIcon
} from "lucide-react";
import { signOut } from "next-auth/react";

interface Tabs {
  href?: any;
  title: any;
  icon: any;
}

const Tabs = ({ href, title, icon }: Tabs) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 justify-start p-3 rounded-full text-white text relative ${
        path === href ? "bg-gray-900" : ""
      }`}
    >
      {icon}
      {title}
    </Link>
  );
};

const Navbar = ({ profile }: any) => {
  
  return (
    <div className="bg-slate-200	 w-[20%]">
      <div className=" text-white h-[97%] p-5 bg-black flex flex-col m-4 mr-0 rounded-xl">
        <Link className="flex items-center  justify-center" href="#">
          <Image src={profile} alt="Future Layoffs" width={100} height={100} className="rounded-full"/>
        </Link>
        <div className=" mt-20 flex flex-col gap-2">
          <Tabs href="/home" title="Home" icon=<Home size={30} /> />
          <Tabs
            href="/invoices"
            title="Contributions"
            icon=<ReceiptText size={20} />
          />
          <Tabs
            href="/bounties"
            title="Bounties"
            icon=<HandCoins size={20} />
          />
          <Tabs
            href="/flai"
            title="FLAI"
            icon=<BotIcon size={20} />
          />
          <Tabs
            href="/my-profile"
            title="Profile"
            icon=<UserRound size={20} />
          />
          <Tabs href="/settings" title="Settings" icon=<Bolt size={20} /> />
        </div>

        <div className="absolute bottom-4">
          <div className="flex items-center cursor-pointer gap-2 justify-start p-3 rounded-full text-white text relative">
            <LogOut
              size={20}
              onClick={() => {
                signOut({ callbackUrl: "/" });
              }}
            />
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

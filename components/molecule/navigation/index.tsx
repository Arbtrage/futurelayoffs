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
} from "lucide-react";
import { signOut } from "next-auth/react";
interface Tabs {
  href: any;
  title: any;
  icon: any;
}

const Tabs = ({ href, title, icon }: Tabs) => {
  const path = usePathname();
  console.log();
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

const Navbar = () => {
  const router = useRouter();

  const logout = async() => {
    await signOut({ redirect: true });
    // router.push("/");
  };

  return (
    <div className="w-[20%] text-white p-5 bg-black flex flex-col">
      <Link className="flex items-center gap-2 justify-center" href="#">
        <Suspense>
          <Image src="/fl.png" alt="Future Layoffs" width={100} height={100} />
        </Suspense>
      </Link>
      <div className=" mt-20 flex flex-col gap-2">
        <Tabs href="/home" title="Home" icon=<Home size={30} /> />
        <Tabs
          href="/invoices"
          title="Contributions"
          icon=<ReceiptText size={30} />
        />
        <Tabs href="/bounties" title="Bounties" icon=<HandCoins size={30} /> />
        <Tabs href="/my-profile" title="Profile" icon=<UserRound size={30} /> />
        <Tabs href="/settings" title="Settings" icon=<Bolt size={30} /> />
      </div>

      <div className="absolute bottom-2">
        <Tabs
          href="/"
          title="Logout"
          icon=<LogOut size={20} onClick={()=>logout()} />
        />
      </div>
    </div>
  );
};

export default Navbar;

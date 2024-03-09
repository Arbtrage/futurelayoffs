import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Landing from "@/components/organism/landing";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-tr from-black via-black to-blue-900">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center gap-2 justify-center" href="#">
          <Suspense>
            <Avatar>
              <AvatarImage src="/fl.png" />
              <AvatarFallback>FL</AvatarFallback>
            </Avatar>
          </Suspense>
          <span className="text-white">Future Layoffs</span>
        </Link>
      </header>
      <Landing />
      <span className="absolute bottom-0 left-0 text-white opacity-40 text-xs md:text-sm">
        Beta Version 1.0.0
      </span>
      <span className="hidden md:block absolute bottom-0 right-0 text-white opacity-40 text-sm">
        &copy; {new Date().getFullYear()} Future Layoffs. All Rights Reserved.
      </span>
    </div>
  );
}

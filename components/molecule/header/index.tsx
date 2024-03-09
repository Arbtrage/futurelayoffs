import { Suspense } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";
import { Bell, Mail } from "lucide-react";

const Header = async () => {
  const session = await getServerSession(authOptions);
  const userData = session?.user;
  return (
    <div className="p-5 h-[65px] gap-2 border-r-2 border-gray-900 flex flex-row justify-end text-white items-center bg-black relative">
      <div className="flex flex-row justify-end items-center">
        <div className="flex flex-row mx-5 gap-3">
          <Mail />
          <Bell />
        </div>
        <Suspense>
          <Avatar className="cursor-pointer">
            <AvatarImage src={userData?.image as string} />
            <AvatarFallback>user</AvatarFallback>
          </Avatar>
        </Suspense>
        <div className="flex ml-1 flex-col cursor-pointer">
          <span className="flex justify-start font-bold text-sm">{userData?.name}</span>
          <span className="text-xs opacity-70">{userData?.email}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;

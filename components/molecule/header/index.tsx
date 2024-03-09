import { Suspense } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Bell, Mail } from "lucide-react";

const Header = () => {
  return (
    <div className="p-5 h-[65px] gap-2 border-r-2 border-gray-900 flex flex-row justify-end text-white items-center bg-gray-950 relative">
      <div className="flex flex-row justify-end items-center">
        <div className="flex flex-row mx-5 gap-3">
          <Mail />
          <Bell />
        </div>
        <Suspense>
          <Avatar className="cursor-pointer">
            <AvatarImage src="/profile.jpeg" />
            <AvatarFallback>user</AvatarFallback>
          </Avatar>
        </Suspense>
        <div className="flex ml-1 flex-col cursor-pointer">
          <span className="flex justify-start font-bold text-sm">Sayantan</span>
          <span className="text-xs opacity-70">sayantann2002@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Header;

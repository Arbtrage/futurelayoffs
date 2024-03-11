"use client";

import React, { useEffect } from "react";
import { useUserModal } from "@/components/molecule/user-modal/user.modal";
import { User_Data,New_Bounties } from "@/components/organism/dashboard-section";

const Dashboard = ({ user }: any) => {
  const { UserModal, setShowUserModal } = useUserModal();
  useEffect(() => {
    if (!user) setShowUserModal(true);
  }, [user]);
  return (
    <div className="w-full h-full flex flex-col">
      <UserModal />
      <div className="flex flex-row gap-5 mx-5 text-black">
        <div className="flex flex-col gap-5 md:w-[60%]">
          <div className="h-[15vh] rounded-lg flex bg-blue-200 justify-center items-center text-xl">
            Bounty Platform data
          </div>
          <div className="mt-8">
            <New_Bounties/>
          </div>
        </div>
        <div className="w-[40%]">
          <User_Data/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

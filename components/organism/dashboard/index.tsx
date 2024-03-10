"use client";

import React, { useEffect } from "react";
import { useUserModal } from "@/components/molecule/user-modal/user.modal";

const Dashboard = ({ user }: any) => {
    const { UserModal, setShowUserModal } = useUserModal();
    useEffect(() => {
        if (!user) setShowUserModal(true);
    }, [user]);
  return (
    <div className="w-full h-full flex flex-col">
      <UserModal />
    </div>
  );
};

export default Dashboard;

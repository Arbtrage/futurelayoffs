"use client";
import Modal from "./modal.layout";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import { Input } from "@/components/ui/input";
import useSWR from "swr";
import Image from "next/image";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { fetcher } from "@/lib/utils";

const loadingStates = [
  { text: "Creating your profile" },
  { text: "You have a nice Github account 🤩" },
  { text: "Would you like to be paid for contributions ? 😅" },
  { text: "I mean it's cool 🙂 !!" },
  { text: " I'm sure you will like it here 😁 " },
  { text: "Okay here it goes !" },
];

const UserModal = ({
  showUserModal,
  setShowUserModal,
}: {
  showUserModal: boolean;
  setShowUserModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userName,
      }),
    });
    setTimeout(() => {
      setLoading(false);
      setShowUserModal(false);
    }, 12000);
  };

  return (
    <Modal showModal={showUserModal} setShowModal={setShowUserModal}>
      <div className="w-full h-min">
        <Loader
          loadingStates={loadingStates}
          loading={loading}
          duration={2000}
        />
        <div className="p-5 flex flex-col justify-center items-center gap-2">
          <h1 className="text-xl font-extrabold">
            Looks like you are new here
          </h1>
          <p className="text-gray-600 mb-2">
            Please enter your github username so that we can get to know you
            better
          </p>
          <form onSubmit={handleSubmit}>
            <Input type="text" value={userName} onChange={handleChange} />
          </form>
        </div>
      </div>
    </Modal>
  );
};

export function useUserModal() {
  const [showUserModal, setShowUserModal] = useState(false);

  const UserCallback = useCallback(() => {
    return (
      <UserModal
        showUserModal={showUserModal}
        setShowUserModal={setShowUserModal}
      />
    );
  }, [showUserModal, setShowUserModal]);

  return useMemo(
    () => ({ setShowUserModal, UserModal: UserCallback }),
    [setShowUserModal, UserCallback]
  );
}

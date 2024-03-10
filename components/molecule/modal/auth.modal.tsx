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
import { Meteors } from "@/components/ui/meteors";
import { Github, PlaneTakeoff } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const SignInModal = ({
  showSignInModal,
  setShowSignInModal,
}: {
  showSignInModal: boolean;
  setShowSignInModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const [signInClicked, setSignInClicked] = useState(false);
  const login = async () => {
    setSignInClicked(true);
    await signIn("github", { callbackUrl: "/home" });
  };

  return (
    <Modal showModal={showSignInModal} setShowModal={setShowSignInModal}>
      <div className="w-full h-full">
        <div className=" w-full relative">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col">
            <div className="flex items-center gap-5 justify-center mb-10 ">
              <Image
                src="/icon.jpeg"
                alt="Logo"
                width={300}
                height={150}
                className="rounded-md"
              />
            </div>

            <p className="font-normal flex justify-center items-center text-base text-slate-500 mb-4 relative z-50">
              <p className="text-sm text-gray-200 flex flex-col">
                Explore bounties - Solve them - Get paid
                <span className="text-gray-100 text-bold flex justify-center items-center gap-2">
                  Book tickets for Europe <PlaneTakeoff />
                </span>
              </p>
            </p>
            <Button
              disabled={signInClicked}
              className={`${
                signInClicked
                  ? "cursor-not-allowed border-white bg-gray-700"
                  : "border border-black text-white bg-gray-900 hover:bg-black"
              } flex h-10 items-center justify-center space-x-3 bg-gray-700 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none mx-auto`}
              onClick={() => login()}
            >
              {signInClicked ? (
                <>Loading...</>
              ) : (
                <>
                  <Github className="h-5 w-5" />
                  <p>Sign In with Github</p>
                </>
              )}
            </Button>

            <Meteors number={20} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export function useSignInModal() {
  const [showSignInModal, setShowSignInModal] = useState(false);

  const SignInModalCallback = useCallback(() => {
    return (
      <SignInModal
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal}
      />
    );
  }, [showSignInModal, setShowSignInModal]);

  return useMemo(
    () => ({ setShowSignInModal, SignInModal: SignInModalCallback }),
    [setShowSignInModal, SignInModalCallback]
  );
}

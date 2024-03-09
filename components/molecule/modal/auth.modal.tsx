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
// import { LoadingDots, Google } from "@/components/shared/icons";
import { Github, PlaneTakeoff } from "lucide-react";
import Image from "next/image";

const SignInModal = ({
  showSignInModal,
  setShowSignInModal,
}: {
  showSignInModal: boolean;
  setShowSignInModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const [signInClicked, setSignInClicked] = useState(false);

  return (
    <Modal showModal={showSignInModal} setShowModal={setShowSignInModal}>
      <div className="w-full overflow-hidden shadow-xl md:max-w-md md:rounded-2xl md:border md:border-black">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-black bg-black text-white px-4 py-6 pt-8 text-center md:px-16">
          <Image
            src="/fl.png"
            alt="Logo"
            className="h-10 w-10 rounded-full"
            width={20}
            height={20}
          />

          <h3 className="font-display text-2xl font-bold">Sign In</h3>
          <p className="text-sm text-gray-200 flex flex-col">
            Explore bounties - Solve them - Get paid
            <span className="text-gray-100 text-bold flex justify-center items-center gap-2">
              Book tickets for Europe <PlaneTakeoff />
            </span>
          </p>
        </div>

        <div className="flex flex-col space-y-4 bg-black px-4 py-8 md:px-16">
          <Button
            disabled={signInClicked}
            className={`${
              signInClicked
                ? "cursor-not-allowed border-black bg-black"
                : "border border-black text-white bg-gray-900 hover:bg-black"
            } flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
            onClick={async() => {
              setSignInClicked(true);
              await signIn("github",{ callbackUrl: "/home" });
            }}
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

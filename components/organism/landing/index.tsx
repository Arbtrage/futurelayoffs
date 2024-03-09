"use client";
import { Montserrat } from "next/font/google";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useSignInModal } from "@/components/molecule/modal/auth.modal";

const montserrat = Montserrat({ subsets: ["latin"] });

const Landing = () => {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, y: -100, x: 0 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 1.5, delay: 0.1 }}
    >
    <main className="flex items-center pt-40 md:p-0">
      <SignInModal />
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 content-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 flex flex-col gap-3 items-center">
              {" "}
              <h1 className="text-3xl font-bold tracking-tighter p-6 sm:text-4xl md:text-7xl lg:text-9xl/none bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                <span className={montserrat.className}>Future Layoffs</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                Got laid off ? Don&apos;t worry you can still cover those expensive
                trips !!
              </p>
            </div>
            <div className="w-full pt-5 max-w-sm space-y-2">
              <Button
                size={"lg"}
                variant={"secondary"}
                className="hover:scale-105 border-none opacity-80"
                onClick={() => setShowSignInModal(true)}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
    </motion.div>
  );
};

export default Landing;

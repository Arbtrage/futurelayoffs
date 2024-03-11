import { Inter } from "next/font/google";
import "../globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/molecule/navigation";
import Header from "@/components/molecule/header";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "/fl.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  if (!session?.user?.email) redirect("/");
  const name = session?.user?.name;
  const photo = session?.user?.image;

  console.log(session);
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-row bg-slate-200 text-white ">
          <Navbar profile={photo} />
          <div className="flex flex-col w-full">
            <Header name={name as string} />
            <div className="overflow-auto text-center flex-1">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

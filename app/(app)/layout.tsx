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
        <div className="min-h-screen flex flex-row">
          <Navbar profile={photo} />
          <div className="items-center bg-slate-200	 text-white text-center w-full">
            <Header name={name as string} />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

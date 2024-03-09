import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/molecule/navigation";
import Header from "@/components/molecule/header";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";
import { redirect } from "next/navigation";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) redirect("/");
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-row">
          <Navbar />
          <div className="items-center bg-gray-950 text-white text-center w-full">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/molecule/navigation";
import Header from "@/components/molecule/header";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-row">
          <Navbar />
          <div className="items-center bg-black text-white text-center w-full">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

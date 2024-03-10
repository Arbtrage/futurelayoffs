import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";
import { checkUser } from "@/lib/actions";
import Dashboard from "@/components/organism/dashboard";

const Page = async () => {
  const session = await getServerSession(authOptions);
  const user = await checkUser(session?.user?.email);

  return <Dashboard user={user} />;
};

export async function generateMetadata() {
  return {
    title: "Home",
    description: "Future Layoffs",
    icons: {
      icon: "/icon.jpg",
    },
  };
}
export default Page;

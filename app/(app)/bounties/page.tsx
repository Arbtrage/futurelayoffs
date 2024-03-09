import Bounties from "@/components/organism/bounty";
const Page = () => {
  return (
    <div className="p-2">
      <Bounties />
    </div>
  );
};

export async function generateMetadata() {
  return {
    title: "Bounties",
    description: "Future Layoffs",
    icons: {
      icon: "/icon.jpg",
    },
  };
}
export default Page;

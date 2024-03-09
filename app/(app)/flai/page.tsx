
import { Chat } from "@/components/organism/chatpage";
const Page = () => {
  return (
    <div className="p-2">
      <Chat />
    </div>
  );
};

export async function generateMetadata() {
  return {
    title: "FL AI",
    description: "Future Layoffs",
    icons: {
      icon: "/icon.jpg",
    },
  };
}
export default Page;

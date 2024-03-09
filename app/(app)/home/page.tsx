
const Page = () => {
  return (
    <div className="p-5">
      Hello
    </div>
  );
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

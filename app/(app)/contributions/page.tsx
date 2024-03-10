import React from "react";
import Image from "next/image";

const Contributions = () => {
  return (
    <div className="flex justify-center items-center">
      <Image src={"/coming.jpg"} alt={"Coming Soon"} width={500} height={500} />
    </div>
  );
};

export default Contributions;

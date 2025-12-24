"use client";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import React, { useState } from "react";

const Page = () => {
  const [result, setResult] = useState(null);
  return (
    <div className="max-md:h-full
    bg-[#b5cbd6] w-full h-screen flex items-center justify-center">
      <div className="max-lg:full max-md:flex max-md:flex-col
      w-full bg-white flex *:w-1/2 max-w-220 h-fit rounded-lg">
        <LeftSide setResult={setResult} />
        <RightSide result={result} />
      </div>
    </div>
  );
};

export default Page;

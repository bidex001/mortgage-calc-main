import React from "react";
import Image from "next/image";

function RightSide({ result }) {
  return (
    <div
      className="max-md:w-full max-md:rounded-none
    bg-[#1d3d4d] p-10 rounded-bl-[100px]"
    >
      {result ? (
        <div className="">
          <h1 className="text-white mb-5 font-bold">Your results</h1>
          <p className="text-gray-300 leading-5 mb-5">
            Your results are shown below on the information you provided. To
            adjust the results, edit the form and Click "calculate repayments"
            again.
          </p>

          <div className="bg-[#122f3f] flex flex-col items-start p-5 border-t-3 border-amber-300 rounded">
            <p className="text-gray-300">Your monthly repayments</p>
            <h1 className="text-[#d7da2f] text-4xl">{result}</h1>
            <div className="mt-5 mb-3 w-full h-0.5 bg-gray-500"></div>
            <p className="text-gray-300 text-sm">
              Total you'll repay over the term
            </p>
            <h1 className="text-white">{result}</h1>
          </div>
        </div>
      ) : (
        <div className=" w-full h-full flex flex-col justify-center items-center p-2 text-lg">
          <Image
            src="./assets/images/illustration-empty.svg"
            alt="Right Side Illustration"
            width={100}
            height={100}
            className="w-30 h-30 max-w-sm mx-auto"
          />
          <h3 className="text-white font-medium mt-3">Results shown here</h3>
          <p className="text-gray-400 text-sm mt-1 leading-4">
            Complete the form and click "calculate repayments" to see what your
            monthly repayments could be.
          </p>
        </div>
      )}
    </div>
  );
}

export default RightSide;

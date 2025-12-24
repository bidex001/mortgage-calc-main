"use client";

import { useState } from "react";

const LeftSide = ({ setResult }) => {
  const [data, setData] = useState({
    amount: 0,
    term: 0,
    interestRate: 0,
  });
  const [calcType, setCalcType] = useState(null);

  function calcRepayment() {
    const { amount, term, interestRate } = data;
    const interest = (amount * interestRate * term) / 100;
    const repayment = amount + interest;
    setResult(repayment);
  }
  function calcInterest() {
    const { amount, term, interestRate } = data;
    const interest = (amount * interestRate * term) / 100;
    setResult(interest);
  }

  function clearForm() {
    setData({
      amount: 0,
      term: 0,
      interestRate: 0,
    });
    setCalcType(null);
    setResult(null);
  }

  // function repayOverTerm() {
  //   const {repayment,term} = data;
  //   return (repayment / (interestRate * 12)) *25;
  //   setResult(repayOverTerm);
  // }

  return (
    <form
      className="max-md:w-full
      p-5 flex flex-col gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        if (calcType == "repayment") {
          calcRepayment();
        } else {
          calcInterest();
        }
      }}
    >
      <div className="flex items-center-safe justify-between">
        <h1 className="text-lg font-bold">Mortgage Calculator</h1>
        <button
          onClick={clearForm}
          type="reset"
          className="text-sm underline cursor-pointer text-gray-500"
        >
          Clear All
        </button>
      </div>
      
      <div className="">
        <label className="text-sm font-medium text-gray-500">
        Mortgage Amount
      </label>
      <div className="flex border items-center rounded overflow-hidden mt-1">
        <span className="w-13 h-10 flex items-center justify-center bg-blue-100">$</span>
        <input
        required
        type="number"
        className="w-full p-2 rounded-lg outline-none"
        placeholder="mortgage amount"
        value={data.amount || ""}
        onChange={(e) => {
          setData({ ...data, amount: Number(e.target.value) });
        }}
      />
      </div>
      </div>

      <div className="max-md:flex-col max-md:mt-2 max-md:mb-2
      flex gap-2">
        <div className=" max-md:w-full max-md:m-0 
        flex flex-col gap-1 w-1/2 mb-4">
          <label className="text-sm font-medium text-gray-500">Mortgage Term</label>
          <div className="flex items-center border rounded overflow-hidden">
            <input
              required
              type="number"
              className="w-full p-2 rounded-lg outline-none"
              placeholder="mortgage Term"
              value={data.term || ""}
              onChange={(e) => {
                setData({ ...data, term: Number(e.target.value) });
              }}
            />
            <span className="bg-blue-100 w-20 items-center justify-center flex h-full">
              years
            </span>
          </div>
        </div>

        <div className="max-md:w-full flex flex-col gap-1 w-1/2">
          <label className="text-sm font-medium text-gray-500">Interest Rate</label>
          <div className="flex items-center border rounded overflow-hidden">
            <input
              required
              type="number"
              className="w-full p-2 outline-none"
              placeholder="Interest Rate"
              value={data.interestRate || ""}
              onChange={(e) => {
                setData({ ...data, interestRate: Number(e.target.value) });
              }}
            />
            <span className="max-md:h-full w-10 h-full items-center justify-center flex bg-blue-100">
              %
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <h2 className="text-sm font-medium text-gray-500 mb-1">Mortage Type</h2>
        <div
          className="flex gap-2 border p-3 rounded-lg"
          onClick={() => {
            setCalcType("repayment");
          }}
        >
          <input
            required
            type="radio"
            name="mortgage type"
            id=""
            className="w-8"
            defaultChecked={calcType == "repayment"}
          />
          <p>Repayment</p>
        </div>
        <div
          className="flex gap-2 border p-3 rounded-lg mt-2"
          onClick={() => {
            setCalcType("interest");
          }}
        >
          <input
            required
            type="radio"
            name="mortgage type"
            id=""
            defaultChecked={calcType == "interest"}
            className="w-8"
          />
          <p>Interest only</p>
        </div>
      </div>
      <button className="max-md:w-full max-md:mt-4
       text-sm w-70 bg-[#d7da2f] text-[#122f3f] font-semibold p-2 rounded-full mt-3">
        Calculate repayments
      </button>
    </form>
  );
};

export default LeftSide;

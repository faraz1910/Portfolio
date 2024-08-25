import React from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

const DetailAccordian = ({ title, comp: Component, focus, setFocus }) => {
  return (
    <>
      <div className="">
        <div
          className={`w-full ${
            focus ? "bg-black text-white" : "bg-white"
          } text-lg font-bold flex justify-between items-center p-4 rounded-lg`}
          onClick={setFocus}
        >
          <h1>{title}</h1>
          {focus ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
        </div>
        <div
          className={`p-4 overflow-hidden transition-all duration-500 ease-in-out ${
            focus ? "max-h-fit opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className={`mt-4 max-h-[600px] overflow-auto no-scrollbar`}>
            {focus && <Component />}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailAccordian;

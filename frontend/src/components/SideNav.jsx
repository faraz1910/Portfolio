import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

const SideNav = ({open, setOpen}) => {

  return (
    <>
      <div
        className={`font-dm-sans h-screen fixed w-full sm:w-96 bg-black ${
          open ? "right-0" : "-right-full"
        } pt-44 `}
      >
        {open && (<div className="text-center py-2 flex flex-col px-4 font-grey-qo mb-8">
            <span className="font-bold text-4xl text-white">Faraz Khalid</span>
          </div>)}
        <div className="w-full px-6 gap-4 flex flex-col">
          <button className="text-xl font-thin text-white w-full text-left py-3 border-b-[0.5px] flex justify-between items-center">Home <GoArrowUpRight /></button>
          <button className="text-xl font-thin text-white w-full text-left py-3 border-b-[0.5px] flex justify-between items-center">About <GoArrowUpRight /></button>
          <button className="text-xl font-thin text-white w-full text-left py-3 border-b-[0.5px] flex justify-between items-center">Project <GoArrowUpRight /></button>
          <button className="text-xl font-thin text-white w-full text-left py-3 border-b-[0.5px] flex justify-between items-center">Contact <GoArrowUpRight /></button>
        </div>
      </div>
    </>
  );
};

export default SideNav;

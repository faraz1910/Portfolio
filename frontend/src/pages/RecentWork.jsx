import React from "react";
import RecentWorkCard from "../components/cards/RecentWorkCard";
import { GoArrowUpRight } from "react-icons/go";

const RecentWork = () => {
  return (
    <>
      <div className="h-fit sm:h-screen bg-[#FFE9D9] w-[100%] font-dm-sans flex justify-center items-center px-6">
        <div className="h-fit w-full sm:w-[80%] flex flex-col justify-center items-center gap-8 mt-10">
          {/* Title Section */}
          <div className="flex flex-col justify-center items-center">
            <span className="text-[#FF9330] font-bold">Portfolio</span>
            <span className="text-6xl font-semibold text-center">My recent work</span>
          </div>

          {/* Recent Work Cards */}
          <div className="flex flex-wrap justify-between items-center gap-4 w-full flex-col sm:flex-row">
            <RecentWorkCard title="FeastHUB" tags = {["Full stack"]} imgUrl={"feasthub.png"} />
            <RecentWorkCard title={"IUOS"} tags={["Linux", "Front-end", "OS"]} imgUrl={"iuos.png"} />
          </div>

          {/* Button Section */}
          <div className="w-full mt-10">
            <button className="flex gap-2  justify-center items-center w-full text-white font-bold bg-black py-3 rounded-lg">
              View All Projects
              <GoArrowUpRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentWork;

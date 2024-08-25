import React from "react";

const EducationCards = ({duration, institute, course}) => {
  return (
    <div className="w-full bg-[#ECECEC] flex p-6 font-dm-sans mt-6 rounded-xl">
      <div className="">
        <span className="text-sm">{duration}</span>
      </div>
      <div className="pl-10">
        <div className="flex items-center gap-2">
          <div className="w-[7px] h-[7px] bg-[#FFB646] rounded-full" />
          <h1 className="font-medium">{institute}</h1>
        </div>
        <h1 className="text-2xl font-bold">{course}</h1>
      </div>
    </div>
  );
};

export default EducationCards;

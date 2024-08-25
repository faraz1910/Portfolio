import React from "react";

const SkillCard = ({ skill, logo, proficiency }) => {
  return (
    <div className="w-fit min-w-56 bg-[#ECECEC] flex p-6 font-dm-sans mt-6 rounded-xl  items-center gap-3">
      <div className="text-4xl">{logo}</div>

      <div className="flex flex-col">
        <h1 className="font-bold text-xl">{skill}</h1>
        <span className="text-sm "></span>
      </div>
    </div>
  );
};

export default SkillCard;

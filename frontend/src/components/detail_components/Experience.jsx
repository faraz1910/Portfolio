import React from "react";
import EducationCards from "../cards/EducationCards";
import ExperienceCards from "../cards/ExperienceCards";

const Experience = () => {
  return (
    <div className="w-full font-dm-sans">
      <h1 className="mb-6 text-4xl font-bold">Exeperience</h1>
      <hr />
      <div className="flex flex-wrap gap-4">
        <ExperienceCards duration={'08/2024 - Present'} company={'EasyReach Solutions'} role={'Software Developer'} />
        <ExperienceCards duration={'02/2022 - 07/2023'} company={'Integral University'} role={'Graphic Designer'} />
      </div>
    </div>
  );
};

export default Experience;

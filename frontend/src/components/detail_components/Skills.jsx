import React from "react";
import SkillCard from "../cards/SkillCard";
import { IoLogoAngular, IoLogoReact } from "react-icons/io5";
import { PiFileCpp, PiFileSqlDuotone } from "react-icons/pi";
import { FaJava, FaPython, FaGithub } from "react-icons/fa6";
import { AiOutlineJavaScript } from "react-icons/ai";
import { SiTailwindcss, SiNodedotjs, SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <div className="w-full h-full font-dm-sans">
      <h1 className="mb-6 text-4xl font-bold">Skills</h1>
      <hr />
      <div className="flex flex-wrap gap-6">
        <SkillCard skill="C++" logo={<PiFileCpp />} proficiency={"(90%)"} />
        <SkillCard skill="Java" logo={<FaJava />} proficiency={"(90%)"} />
        <SkillCard skill="JavaScript" logo={<AiOutlineJavaScript />} proficiency={"(90%)"} />
        <SkillCard skill="Python" logo={<FaPython />} proficiency={"(90%)"} />
        <SkillCard skill="ReactJS" logo={<IoLogoReact />} proficiency={"(90%)"} />
        <SkillCard skill="Angular" logo={<IoLogoAngular />} proficiency={"(90%)"} />
        <SkillCard skill="Tailwind CSS" logo={<SiTailwindcss />} proficiency={"(90%)"} />
        <SkillCard skill="NodeJS" logo={<SiNodedotjs />} proficiency={"(90%)"} />
        <SkillCard skill="MongoDB" logo={<SiMongodb />} proficiency={"(90%)"} />
        <SkillCard skill="SQL" logo={<PiFileSqlDuotone />} proficiency={"(90%)"} />
        <SkillCard skill="Github" logo={<FaGithub />} proficiency={"(90%)"} />
      </div>
    </div>
  );
};

export default Skills;

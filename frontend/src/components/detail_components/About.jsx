import React from "react";

const About = () => {
  return (
    <div className="w-full font-dm-sans">
      <h1 className="mb-6 text-4xl font-bold">Software Developer</h1>
      <hr />
      <div className="mt-6">
        <span className="text-slate-500 tracking-wide flex text-justify">
          I'm Faraz Khalid, a dedicated software developer currently pursuing my
          Master's in Computer Applications at VIT Bhopal. With expertise in
          C++, Java, Python, and full-stack development, I've worked on projects
          like FeastHUB and IUOS. I enjoy solving complex problems and creating
          user-friendly applications with ReactJS and NodeJS. Outside of coding,
          I'm active in chess and graphic design.
        </span>

        <div className="w-full flex items-center justify-center mt-12 ">
          <table className="w-full">
            <tbody className="">
              <tr className="">
                <td className="text-[12px] sm:text-base">Name</td>
                <td className="text-[14px] sm:text-xl font-bold sm:p-2">Faraz Khalid</td>
              </tr>
              <tr>
                <td className="text-[12px] sm:text-base">Nationality</td>
                <td className="text-[14px] sm:text-xl font-bold sm:p-2">Indian</td>
              </tr>
              <tr>
                <td className="text-[12px] sm:text-base">Phone</td>
                <td className="text-[14px] sm:text-xl font-bold sm:p-2">+91 7355278290</td>
              </tr>
              <tr>
                <td className="text-[12px] sm:text-base">Email</td>
                <td className="text-[14px] sm:text-xl font-bold sm:p-2">farazkhalid191@gmail.com</td>
              </tr>
              <tr>
                <td className="text-[12px] sm:text-base">Experience</td>
                <td className="text-[14px] sm:text-xl font-bold sm:p-2">Fresher</td>
              </tr>
              <tr>
                <td className="text-[12px] sm:text-base">Language</td>
                <td className="text-[14px] sm:text-xl font-bold sm:p-2">English, Hindi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default About;

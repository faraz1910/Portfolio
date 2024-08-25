import { GrLinkedinOption } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const SocialCorner = () => {
  return (
    <>
      <div className="fixed flex h-screen flex-col-reverse p-4 gap-6 items-center py-8 z-50">
        <GrLinkedinOption size={25} />
        <RiInstagramFill size={30} />
        <FaGithub size={25} />
      </div>
    </>
  );
};

export default SocialCorner;

import { useState } from "react";
import { LiaDownloadSolid } from "react-icons/lia";
import { VscThreeBars } from "react-icons/vsc";
import { RxCross1 } from "react-icons/rx";
import SideNav from "./SideNav";

const TopNav = () => {

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative">
        <div className="flex justify-between shadow-md overflow-hidden fixed w-full z-50">
          <div className="text-center py-2 flex flex-col px-4 font-grey-qo">
            <span className="font-bold text-4xl">Faraz Khalid</span>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-4">
              <button className="flex items-center ">Portfolio</button>
              <button className="flex items-center ">
                Resume <LiaDownloadSolid size={20} />
              </button>
            </div>
            <div className="w-[80px] h-auto bg-black flex items-center text-white justify-center text-2xl text-center"
            onClick={() => setOpen(!open)}>
              {open ? <RxCross1 /> : <VscThreeBars />}
            </div>
          </div>
        </div>

        <div className="absolute z-40">
          <SideNav open={open} setOpen={setOpen} />
        </div>
      </div>
    </>
  );
};

export default TopNav;

import { GoArrowUpRight } from "react-icons/go";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen bg-[#FFE9D9] flex justify-center items-center">
        {/* Left Side */}
        <div className="w-full sm:px-[200px] flex flex-col font-dm-sans relative px-4">
          <div className="z-10">
            <div className="flex items-center gap-2 text-xl">
              <div className="bg-black h-[2px] w-[70px]"></div>
              <div className=" text-2xl font-bold">
                <h1>Hello I'm✌</h1>
              </div>
            </div>
            <div className=" text-9xl font-bold">
              <h1>Faraz</h1>
              <h1>Khalid</h1>
            </div>
            <div>
              <span className="text-2xl text-[#393532]">
                Software Developer | Front-end Developer
              </span>
            </div>
            <div className="mt-6 flex gap-6 ">
              <button className="flex items-center gap-2 bg-[#141313] text-white py-3 px-8 rounded-lg">
                My Projects <GoArrowUpRight />
              </button>
              <button className="flex items-center gap-2 px-8 py-3 border border-[#141313] rounded-lg">
                My Resume <GoArrowUpRight />
              </button>
            </div>
          </div>

          <div className="w-[120px] h-[120px] bg-[#FFB646] rounded-full absolute top-10"></div>
        </div>

        {/* Right Side */}
        <div className="w-full overflow-hidden h-screen hidden sm:block">
          <div className="w-[1200px] h-[600px] bg-[#FFB646] rounded-[100px] -rotate-45 -translate-y-10 overflow-hidden relative">
            <div className="w-[70%] bg-[#D7D7D7] h-[800px] rotate-45 absolute -left-64 -top-40"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

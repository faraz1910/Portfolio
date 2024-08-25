import { useEffect, useState } from "react";
import BigDetailButton from "../components/BigDetailButton";
import { useNavigate, Outlet } from "react-router-dom";
import DetailAccordian from "../components/DetailAccordian";
import About from "../components/detail_components/About";
import Education from "../components/detail_components/Education";
import Experience from "../components/detail_components/Experience";
import Skills from "../components/detail_components/Skills";

const Details = () => {
  const [focusedIndex, setFocusedIndex] = useState(null);
  const [smFocusedIndex, setSmFocusedIndex] = useState(null);

  const navigate = useNavigate();

  const buttonText = ["About me", "Education", "Experience", "Skills"];
  const detailRoutes = ["about", "education", "experience", "skills"];

  const detailComponents = [About, Education, Experience, Skills];

  const handleButtonClick = (index) => {
    if(index == smFocusedIndex) {
      setSmFocusedIndex(null);
      return;
    }
    setFocusedIndex(index);
    navigate(detailRoutes[index]);
  };

  const handleSmallScreenButtonClick = (index) => {
    setFocusedIndex(index === focusedIndex ? null : index);
  };

  useEffect(() => {
    setFocusedIndex(0);
    setSmFocusedIndex(0);
    navigate("about");
  }, []);

  return (
    <>
      {/* Large Screen View */}

      <div className="hidden lg:block font-dm-sans bg-[#F5F5F5]">
        <div className="w-[100%] h-screen flex items-center justify-center">
          <div className="w-[80%] my-auto  h-[70%] flex gap-44">
            {/* Left side */}

            <div className="min-w-[35%]">
              <h1 className="text-[#FF9330] font-bold text-xl">Resume</h1>
              <span className="text-8xl font-bold">
                All over my <br /> details find <br /> here...
              </span>
              <div className="w-full mt-6">
                {buttonText.map((text, index) => (
                  <BigDetailButton
                    key={index}
                    focus={focusedIndex === index}
                    setFocus={() => handleButtonClick(index)}
                    title={text}
                  />
                ))}
              </div>
            </div>

            {/* Right side */}
            <div className="w-full">
              <div className="w-full h-full overflow-auto no-scrollbar">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Small Screen View */}

      <div className="lg:hidden block font-dm-sans bg-[#F5F5F5] pt-6">
        <div className="w-[100%] h-fit flex items-center justify-center">
          <div className="w-[80%] my-auto  h-[70%] flex gap-44">
            {/* Left side */}

            <div className="w-full">
              <h1 className="text-[#FF9330] font-bold text-xl">Resume</h1>
              <span className="text-8xl font-bold ">
                All over my <br /> details find <br /> here...
              </span>
              <div className="w-full mt-4">
                {buttonText.map((text, index) => (
                  <DetailAccordian
                    key={index}
                    focus={focusedIndex === index}
                    setFocus={() => handleSmallScreenButtonClick(index)}
                    title={text}
                    comp={detailComponents[index]}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;

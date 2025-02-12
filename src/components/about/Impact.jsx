import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import HowIcon01 from "../../assets/howIcon01.png";
import HowIcon02 from "../../assets/howIcon02.png";
import HowIcon03 from "../../assets/howIcon03.png";

const Impact = () => {
  return (
    <div className="msme w-full h-fit flex flex-col gap-6 items-center justify-center bg-black text-white lg:pb-20 py-16">
      <h1 className="w-[90%] mx-auto md:text-[32px] text-[25px] text-center font-bold">
        Support Us in Making an Impact
      </h1>
      <div className="w-[90%] mt-4 flex flex-wrap gap-4 items-center justify-center">
        <div className="flex gap-2 max-lg:border-l-[1px] border-[#FFFFFF66] lg:px-10 px-4 md:pb-2 pb-1">
          <img
            src={HowIcon01}
            className="bg-[#BFD4FA] rounded-full p-1 md:w-[30px] md:h-[30px] w-[20px] h-[20px]"
            alt="Impact_Icon"
          />
          <div>
            <h4 className="md:text-[20px] text-[10px]">10,000+ MSMEs</h4>
            <p className="md:text-[10px] text-[8px]">
              Supported by Digital Aba
            </p>
          </div>
        </div>
        <div className="flex gap-2 border-l-[1px] border-[#FFFFFF66] lg:px-10 px-4 md:pb-2 pb-1">
          <img
            src={HowIcon01}
            className="bg-[#BFD4FA] rounded-full p-1 md:w-[30px] md:h-[30px] w-[20px] h-[20px]"
            alt="Impact_Icon"
          />
          <div>
            <h4 className="md:text-[20px] text-[10px]">
              1,000+ Digital Talents
            </h4>
            <p className="md:text-[10px] text-[8px]">
              Deployed to Support MSMEs
            </p>
          </div>
        </div>

        <div className="flex gap-2 border-l-[1px] border-[#FFFFFF66] lg:px-10 px-4 md:pb-2 pb-1">
          <img
            src={HowIcon01}
            className="bg-[#BFD4FA] rounded-full p-1 md:w-[30px] md:h-[30px] w-[20px] h-[20px]"
            alt="Impact_Icon"
          />
          <div>
            <h4 className="md:text-[20px] text-[10px]">
              100+ Digital Solutions
            </h4>
            <p className="md:text-[10px] text-[8px]">
              Developed via Hackathons
            </p>
          </div>
        </div>
        <div className="flex gap-2 border-l-[1px] border-[#FFFFFF66] lg:px-10 px-4 md:pb-2 pb-1">
          <img
            src={HowIcon01}
            className="bg-[#BFD4FA] rounded-full p-1 md:w-[30px] md:h-[30px] w-[20px] h-[20px]"
            alt="Impact_Icon"
          />
          <div>
            <h4 className="md:text-[20px] text-[10px]">5,000+ New Jobs</h4>
            <p className="md:text-[10px] text-[8px]">
              Created in Aba, Abia State
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;

import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import HowIcon01 from "../../assets/howIcon01.png";
import HowIcon02 from "../../assets/howIcon02.png";
import HowIcon03 from "../../assets/howIcon03.png";

const Impact = () => {
  return (
    <div className="msme w-full h-fit flex flex-col gap-10 items-center justify-center bg-black text-white py-16">
      <h1 className="text-[32px] font-bold">Our Impact So Far</h1>
      <div className="w-[90%] flex flex-wrap gap-4 items-center justify-center lg:justify-between">
        <div className="flex gap-2 border-l-[1px] border-[#FFFFFF66] px-4 md:pb-2 pb-1">
          <img
            src={HowIcon01}
            className="bg-[#BFD4FA] rounded-full p-1 md:w-[30px] md:h-[30px] w-[20px] h-[20px]"
            alt="Impact_Icon"
          />
          <div>
            <h4 className="md:text-[20px] text-[10px]">10,000 + MSMEs</h4>
            <p className="md:text-[10px] text-[8px]">Supported by Dec 2025</p>
          </div>
        </div>
        <div className="flex gap-2 border-l-[1px] border-[#FFFFFF66] px-4 md:pb-2 pb-1">
          <img
            src={HowIcon01}
            className="bg-[#BFD4FA] rounded-full p-1 md:w-[30px] md:h-[30px] w-[20px] h-[20px]"
            alt="Impact_Icon"
          />
          <div>
            <h4 className="md:text-[20px] text-[10px]">25+ Tech Talents</h4>
            <p className="md:text-[10px] text-[8px]">
              Deployed to support MSMEs
            </p>
          </div>
        </div>

        <div className="flex gap-2 border-l-[1px] border-[#FFFFFF66] px-4 md:pb-2 pb-1">
          <img
            src={HowIcon01}
            className="bg-[#BFD4FA] rounded-full p-1 md:w-[30px] md:h-[30px] w-[20px] h-[20px]"
            alt="Impact_Icon"
          />
          <div>
            <h4 className="md:text-[20px] text-[10px]">4 Hackathons</h4>
            <p className="md:text-[10px] text-[8px]">Successful Hackathons</p>
          </div>
        </div>
        <div className="flex gap-2 border-l-[1px] border-[#FFFFFF66] px-4 md:pb-2 pb-1">
          <img
            src={HowIcon01}
            className="bg-[#BFD4FA] rounded-full p-1 md:w-[30px] md:h-[30px] w-[20px] h-[20px]"
            alt="Impact_Icon"
          />
          <div>
            <h4 className="md:text-[20px] text-[10px]">100+ Digital Tools</h4>
            <p className="md:text-[10px] text-[8px]">
              Available to MSMEs in Aba
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;

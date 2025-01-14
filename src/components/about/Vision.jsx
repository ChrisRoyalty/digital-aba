import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import VisionImg from "../../assets/vision.png";
const Vision = () => {
  return (
    <div className="msme w-full h-fit flex items-center justify-center bg-black text-white py-16">
      <div className="w-[90%] grid lg:grid-cols-2 max-lg:gap-8">
        <div className="">
          <img src={VisionImg} alt="Vision_Img" />
        </div>
        <div className="w-full h-fit md:px-8 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="md:text-[32px] text-[20px] font-bold">
              Vision & Mission
            </h2>
            <p className="md:text-[20px] text-[14px] text-[#D1D1D6]">
              <strong>Vision Statement</strong>
              <br />
              "Empowering MSMEs in Aba to thrive in the digital economy."
            </p>
            <p className="md:text-[20px] text-[14px] text-[#D1D1D6]">
              <strong>Mission Statement</strong>
              <br />
              "To connect MSMEs with digital tools, training, and support for
              their digital transformation journey."
            </p>
          </div>
          <a
            href="https://wa.link/9q5477"
            className="h-[31px] border border-[#BFD4FA] text-[#BFD4FA] rounded-[14px] shadow-lg flex justify-center items-center mt-4 text-[14px] gap-8 py-4 px-2 w-fit"
          >
            Contact Us
            <BiSolidRightArrow />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Vision;

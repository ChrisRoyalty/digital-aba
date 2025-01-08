import React from "react";
import MarketImg from "../../assets/Market01.png";
import MarketImg02 from "../../assets/Market02.png";

const Description01 = ({ title, description, buttonText, buttonLink }) => {
  return (
    <div className="w-[90%] md:w-[70%] grid lg:grid-cols-2 h-fit max-lg:justify-center">
      <div className="text-center w-[85%] m-auto">
        <h2 className="md:text-[24px] text-[20px]">{title}</h2>
        <p className="text-[#D1D1D6] md:text-[20px] text-[14px]">
          {description}
        </p>
        <a
          href={buttonLink}
          className="h-[42px] bg-[#BFD4FA] w-fit px-4 rounded-[14px] shadow-lg flex justify-center items-center text-black mx-auto mt-8 md:text-[20px] text-[14px] hover:bg-[#BFD4FA]/75"
        >
          {buttonText}
        </a>
      </div>
      <div className="mt-16 flex">
        <div className="flex flex-col justify-end items-center gap-20">
          <div className="circle w-[18px] h-[18px] bg-[#BFD4FA] rounded-full ml-8"></div>
          <img
            src={MarketImg}
            alt="Market Photo"
            className="md:w-[101px] w-[54px]"
          />
        </div>
        <div className="main relative pb-8">
          <img src={MarketImg02} alt="Market Photo" />
          <img
            src={MarketImg}
            alt="Market Photo"
            className="md:w-[120px] w-[87px] absolute top-0 right-0"
          />
          <div className="circle w-[18px] h-[18px] bg-[#163F9E] rounded-full absolute bottom-0 right-0 mb-8 "></div>
        </div>
      </div>
    </div>
  );
};

export default Description01;

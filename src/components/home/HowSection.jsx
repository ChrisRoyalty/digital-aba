import React, { useState } from "react";
import MarketImg from "../../assets/Market01.png";
import MarketImg02 from "../../assets/Market02.png";
import howIcon01 from "../../assets/howIcon01.png";
import howIcon02 from "../../assets/howIcon02.png";
import howIcon03 from "../../assets/howIcon03.png";

const HowSection = () => {
  // Set the default active section to "Hackathons"
  const [activeSection, setActiveSection] = useState(
    "Ongoing Digital Hackathons"
  );

  const renderContent = (section) => {
    const sectionData = {
      "Ongoing Digital Hackathons": {
        title: "Join Ongoing Hackathons",
        description:
          "Collaborate with our community of innovators and builders to create digital solutions that solve real problems for MSMEs in Aba.",
        buttonText: "Sign Up",
        bgColor: "#BFD4FA",
      },
      "Ongoing Digital Workshops": {
        title: "Ongoing Digital Skills Training",
        description:
          "Empower communities with skills to thrive in a digital world.",
        buttonText: "Explore Training",
        bgColor: "#FADB5F",
      },
      "MSMEs Stories": {
        title: "Impact Stories",
        description:
          "Discover inspiring stories of transformation and success.",
        buttonText: "Read Stories",
        bgColor: "#A8DF65",
      },
    };

    const { title, description, buttonText, bgColor } =
      sectionData[section] || {};

    return (
      <div className="description01 w-full flex justify-center items-center mt-4">
        <div className="w-[90%] md:w-[70%] grid lg:grid-cols-2 h-fit max-lg:justify-center">
          {/* Image container */}
          <div className="mt-16 flex order-none lg:order-1">
            <div className="flex flex-col justify-end items-center gap-20">
              <div
                className="circle w-[18px] h-[18px] rounded-full ml-8"
                style={{ backgroundColor: bgColor }}
              ></div>
              <img
                src={MarketImg}
                alt="Market Photo"
                className="md:w-[101px] w-[54px]"
              />
            </div>
            <div className="main relative pb-8">
              <img
                src={MarketImg02}
                alt="Market Photo lg:w-[420px] w-[171px]"
              />
              <img
                src={MarketImg}
                alt="Market Photo"
                className="md:w-[120px] w-[87px] absolute top-0 right-0"
              />
              <div
                className="circle w-[18px] h-[18px] rounded-full absolute bottom-0 right-0 mb-8"
                style={{ backgroundColor: "#163F9E" }}
              ></div>
            </div>
          </div>

          {/* Text content */}
          <div className="text-center w-[85%] m-auto order-none lg:order-none max-lg:mt-8">
            <h2 className="md:text-[24px] text-[20px]">{title}</h2>
            <p className="text-[#D1D1D6] md:text-[20px] text-[14px]">
              {description}
            </p>
            <a
              href="#"
              className={`h-[42px] w-fit px-4 rounded-[14px] shadow-lg flex justify-center items-center text-black mx-auto mt-8 md:text-[20px] text-[14px] hover:bg-[${bgColor}]/75`}
              style={{ backgroundColor: bgColor }}
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="how mt-4 text-center w-full h-fit flex flex-col justify-center items-center">
      <h2 className="md:text-[32px] text-[20px]">How We’re Making It Happen</h2>
      <div className="grid lg:grid-cols-3 text-center mt-8 md:w-[70%] w-[90%]">
        {[
          "Ongoing Digital Hackathons",
          "Ongoing Digital Workshops",
          "MSMEs Stories",
        ].map((section, index) => (
          <div key={index} className="w-full">
            <button
              className={`hover:bg-[#BFD4FA1A] h-[80px] flex justify-center items-center border-b-2 w-full ${
                activeSection === section
                  ? "border-[#BFD4FA] bg-[#BFD4FA1A]"
                  : "border-[#FFFFFF33] hover:bg-[#BFD4FA1A]"
              }`}
              onClick={() =>
                setActiveSection(activeSection === section ? "" : section)
              }
            >
              {section}
            </button>
            {/* Display content directly below the button on mobile */}
            {activeSection === section && (
              <div className="block lg:hidden">{renderContent(section)}</div>
            )}
          </div>
        ))}
      </div>

      {/* Display content normally for larger screens */}
      <div className="hidden lg:block w-full">
        {activeSection && renderContent(activeSection)}
      </div>

      <div className="h-fit w-full mt-20 flex justify-center items-center">
        <div className="w-[90%] lg:w-[70%] h-fit flex max-xl:flex-col max-xl:gap-16 justify-between">
          <div className="border-l-[1px] border-[#FFFFFF66] flex gap-6 px-6">
            <img
              src={howIcon01}
              alt="Icon"
              className="bg-[#BFD4FA] rounded-full h-[40px] w-[40px] p-2"
            />
            <div className="details flex flex-col justify-start items-start">
              <h4 className="lg:text-[24px] text-[16px]">10,000 + MSMEs</h4>
              <p className="lg:text-[12px] text-[10px]">
                Supported by Dec 2025
              </p>
            </div>
          </div>
          <div className="border-l-[1px] border-[#FFFFFF66] flex gap-6 px-6">
            <img
              src={howIcon02}
              alt="Icon"
              className="bg-[#BFD4FA] rounded-full h-[40px] w-[40px] p-2"
            />
            <div className="details flex flex-col justify-start items-start">
              <h4 className="lg:text-[24px] text-[16px]">250 + Experts</h4>
              <p className="lg:text-[12px] text-[10px]">
                Deployed to support MSMEs
              </p>
            </div>
          </div>
          <div className="border-l-[1px] border-[#FFFFFF66] flex gap-6 px-6">
            <img
              src={howIcon03}
              alt="Icon"
              className="bg-[#BFD4FA] rounded-full h-[40px] w-[40px] p-2"
            />
            <div className="details flex flex-col justify-start items-start">
              <h4 className="lg:text-[24px] text-[16px]">4 Hackathons</h4>
              <p className="lg:text-[12px] text-[10px]">
                Available to MSMEs in Aba{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowSection;

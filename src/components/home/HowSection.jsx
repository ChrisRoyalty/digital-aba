import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import MarketImg from "../../assets/Market01.png";
import MarketImg02 from "../../assets/Market02.png";

const HowSection = () => {
  const [activeSection, setActiveSection] = useState("Digital Hackathons");

  const renderContent = (section) => {
    const sectionData = {
      "Digital Hackathons": {
        title: "Sponsor Hackathons",
        description:
          "Invest in the Digital Aba Innovation Fund to help develop new digital products and solutions for fashion entrepreneurs.",
        buttonText: "Sponsor Now",
        bgColor: "#BFD4FA",
        link: "http://bit.ly/3ZaCNyQ",
      },
      "Digital Skill Training": {
        title: "Partner in Digital Skill ",
        description:
          "Training Join forces with Digital Aba to empower fashion entrepreneurs with tailored digital skills training, helping them enhance their businesses and succeed in the digital economy.",
        buttonText: "Partner Now",
        bgColor: "#FADB5F",
        link: "https://bit.ly/BIZD",
      },
      "Digital Vouchers": {
        title: "Sponsor Digital Vouchers",
        description:
          "Support MSMEs by funding Digital Aba’s technology vouchers, enabling fashion entrepreneurs to access digital tools, products, and services at little to no cost. Help empower the fashion industry to thrive in the digital age.",
        buttonText: "Sponsor Now",
        bgColor: "#A8DF65",
        link: "https://medium.com/@digitalabacenter",
      },
    };

    const { title, description, buttonText, bgColor, link } =
      sectionData[section] || {};

    return (
      <div className="description01 w-full flex justify-center items-center mt-4">
        <div className="w-[90%] md:w-[70%] grid lg:grid-cols-2 h-fit max-lg:justify-center">
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
                alt="Market Photo"
                className="lg:w-[420px] w-[171px]"
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

          <div className="text-center w-[85%] m-auto order-none lg:order-none max-lg:mt-8">
            <h2 className="md:text-[24px] text-[20px]">{title}</h2>
            <p className="text-[#D1D1D6] md:text-[20px] text-[14px]">
              {description}
            </p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
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
      <h2 className="md:text-[32px] text-[20px]">Support Our Mission</h2>
      <div className="grid lg:grid-cols-3 text-center mt-8 md:w-[70%] w-[90%]">
        {[
          "Digital Hackathons",
          "Digital Skill Training",
          "Digital Vouchers",
        ].map((section, index) => (
          <div key={index} className="w-full">
            <button
              className={`hover:bg-[#BFD4FA1A] h-[80px] max-sm:border-t-2 flex justify-center items-center border-b-2 w-full ${
                activeSection === section
                  ? "border-[#BFD4FA] bg-[#BFD4FA1A]"
                  : "border-[#FFFFFF33] hover:bg-[#BFD4FA1A]"
              }`}
              onClick={() =>
                setActiveSection(activeSection === section ? "" : section)
              }
            >
              {section}
              <span className="ml-2">
                {activeSection === section ? (
                  <FaChevronUp className="inline-block lg:hidden" />
                ) : (
                  <FaChevronDown className="inline-block lg:hidden" />
                )}
              </span>
            </button>
            {activeSection === section && (
              <div className="block lg:hidden my-8">
                {renderContent(section)}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="hidden lg:block w-full">
        {activeSection && renderContent(activeSection)}
      </div>
    </div>
  );
};

export default HowSection;

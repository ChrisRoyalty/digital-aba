import React from "react";
import HackathonIcon from "../../assets/hackathonIcon.png";
import DigitalCenterIcon from "../../assets/digitalCenterIcon.png";
import SupportIcon from "../../assets/supportIcon.png";
import ToolIcon from "../../assets/toolIcons.png";
import { MdArrowRight } from "react-icons/md";
import EllipseIcon from "../../assets/Ellipse.png";
import PolygonIcon from "../../assets/Polygon.png";
import MarketImg from "../../assets/Market01.png";
import MarketImg02 from "../../assets/Market02.png";
import HowSection from "./HowSection";

const AboutDA = () => {
  return (
    <div className="bg-[url('/rectangleBg.png')] bg-cover bg-center h-fit flex flex-col items-center justify-center text-white relative pt-12 lg:pt-16">
      <div className="lg:w-[60%] w-[90%] h-[90%] mt-4">
        <div className="intro text-center">
          <h1 className="md:text-[32px] text-[20px]">About Digital Aba</h1>
          <p className="md:text-[20px] text-[14px] mt-2 text-[#D1D1D6]">
            We accelerate the digital growth of Aba Fashion MSMEs through our
            digital grants and credit program. Businesses can use their credits
            to access dedicated digital tools and experts, receiving hands-on
            support to transform operations, drive growth, and expand market
            reach.
          </p>
        </div>
        <div className="grid md:grid-cols-2 mt-12 gap-8">
          <div className="flex flex-col gap-8 items-center justify-center ">
            <div className="flex flex-col items-center justify-center px-6 py-12 gap-[30px] rounded-[23px] shadow-lg bg-[#D9D9D91A]">
              <div>
                <img src={ToolIcon} alt="ToolsIcon" />
              </div>

              <div className="details text-center flex flex-col gap-2">
                <h2 className="text-[20px] font-bold">
                  Innovation Grants & Vouchers{" "}
                </h2>
                <p className="text-[16px] text-[#D1D1D6]">
                  Digital Aba provides entrepreneurs and MSMEs in the fashion
                  industry with technology vouchers to subsidize the cost of
                  digital tools and solutions, giving them the opportunity to
                  adopt digitalization easily without affecting their working
                  capital.
                </p>
                <a
                  href="https://wa.link/9q5477"
                  className="sm:hidden h-[31px] bg-[#BFD4FA] w-[125px] rounded-[14px] shadow-lg flex justify-center items-center text-black mx-auto mt-4 text-[14px]"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="max-lg:order-1 flex max-lg:flex-col items-center justify-center px-6 py-12 gap-[30px] rounded-[23px] shadow-lg bg-[#D9D9D91A] max-lg:text-center">
              <div>
                <img
                  src={DigitalCenterIcon}
                  alt="HackathonIcon"
                  className="lg:w-[350px] lg:h-[104px]"
                />
              </div>
              <div className="details flex flex-col gap-2">
                <h2 className="text-[20px] font-bold">
                  Digital Support Centers
                </h2>
                <p className="text-[16px] text-[#D1D1D6]">
                  The Digital Aba support centers offer in-person digital
                  support to fashion entrepreneurs in Aba. We provide one-on-one
                  guidance, access to digital tools, and MSME-tailored solutions
                  to help the fashion industry thrive in the digital economy.
                </p>
                <a
                  href="https://wa.link/3xqy2h"
                  className="sm:hidden h-[31px] bg-[#BFD4FA] w-[125px] rounded-[14px] shadow-lg flex justify-center items-center text-black mx-auto mt-4 text-[14px]"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 items-center justify-center ">
            <div className="flex max-lg:flex-col items-center justify-center px-6 py-12 gap-[30px] rounded-[23px] shadow-lg bg-[#D9D9D91A] max-lg:text-center">
              <div>
                <img
                  src={SupportIcon}
                  alt="SupportIcon"
                  className="lg:w-[350px] lg:h-[104px]"
                />
              </div>
              <div className="details flex flex-col gap-2">
                <h2 className="text-[20px] font-bold">
                  Digital MSME Employees
                </h2>
                <p className="text-[16px] text-[#D1D1D6]">
                  Digital Aba supplies fashion MSMEs in Aba with skilled digital
                  talent as employees to drive their digital transformation.
                  They help optimize operations, enhance engagement, and foster
                  sustainable long-term growth.
                </p>
                <a
                  href="https://wa.link/4o1jy5"
                  className="sm:hidden h-[31px] bg-[#BFD4FA] w-[125px] rounded-[14px] shadow-lg flex justify-center items-center text-black mx-auto mt-4 text-[14px]"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="max-lg:order-2 flex flex-col items-center justify-center px-6 py-12 gap-[30px] rounded-[23px] shadow-lg bg-[#D9D9D91A]">
              <div>
                <img src={HackathonIcon} alt="HackathonIcon" />
              </div>
              <div className="details text-center flex flex-col gap-2">
                <h2 className="text-[20px] font-bold">
                  Digital Innovation Funds{" "}
                </h2>
                <p className="text-[16px] text-[#D1D1D6]">
                  Digital Aba offers innovation funds designed to support
                  innovators and entrepreneurs in creating digital solutions
                  that address the real challenges faced by fashion
                  entrepreneurs and MSMEs in Aba.
                </p>
                <a
                  href="https://wa.link/yzcgt7"
                  className="sm:hidden h-[31px] bg-[#BFD4FA] w-[125px] rounded-[14px] shadow-lg flex justify-center items-center text-black mx-auto mt-4 text-[14px]"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="icons1">
        <img
          src={EllipseIcon}
          alt="Ellipse Icon"
          className="absolute right-0 top-[110px] w-[95px]"
        />
        <img
          src={EllipseIcon}
          alt="Ellipse Icon"
          className="absolute right-0 top-32 w-[95px]"
        />
        <img
          src={PolygonIcon}
          alt="Ellipse Icon"
          className="absolute left-0 bottom-[700px] w-[95px]"
        />
      </div>
      <div className="bg-[url('/gridbg.png')] bg-cover bg-center w-full h-fit flex flex-col items-center justify-center text-white py-16">
        {/* <a
          href="#"
          className="h-[42px] border-[1px] border-[#BFD4FA] w-[125px] rounded-[25px] shadow-lg flex justify-center items-center text-[#BFD4FA] mx-auto text-[14px]"
        >
          Learn More
          <MdArrowRight />
        </a> */}

        <HowSection />
      </div>
    </div>
  );
};

export default AboutDA;

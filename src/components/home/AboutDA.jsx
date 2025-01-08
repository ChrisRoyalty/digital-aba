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
    <div className="bg-[url('/rectangleBg.png')] bg-cover bg-center h-fit flex flex-col items-center justify-center text-white py-16 relative">
      <div className="lg:w-[70%] w-[90%] h-[90%] mt-4">
        <div className="intro text-center">
          <h1 className="md:text-[32px] text-[20px]">What Is Digital Aba?</h1>
          <p className="md:text-[20px] text-[14px] mt-2 text-[#D1D1D6]">
            Digital Aba is a transformative movement empowering MSMEs in Aba to
            thrive in the global digital economy. By equipping them with tools,
            skills, and digital platforms, we aim to ensure no business is left
            behind in the era of innovation.
          </p>
        </div>
        <div className="grid md:grid-cols-2 mt-12 gap-8">
          <div className="flex flex-col gap-8 items-center justify-center ">
            <div className="max-lg:order-2 flex flex-col items-center justify-center px-6 py-12 gap-[30px] rounded-[23px] shadow-lg bg-[#D9D9D91A]">
              <div>
                <img src={HackathonIcon} alt="HackathonIcon" />
              </div>
              <div className="details text-center flex flex-col gap-2">
                <h2 className="text-[24px]">
                  Quarterly Hackathons for Innovation
                </h2>
                <p className="text-[16px] text-[#D1D1D6]">
                  Dynamic events bringing innovators together to solve
                  real-world challenges faced by MSMEs, fostering impactful and
                  scalable solutions.
                </p>
                <a
                  href="#"
                  className="sm:hidden h-[31px] bg-[#BFD4FA] w-[125px] rounded-[14px] shadow-lg flex justify-center items-center text-black mx-auto mt-4 text-[14px]"
                >
                  View More
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
                <h2 className="text-[24px]">Dedicated Digital Centers </h2>
                <p className="text-[16px] text-[#D1D1D6]">
                  Physical hubs equipped to provide MSMEs with training,
                  resources, and mentorship tailored to their unique business
                  needs.
                </p>
                <a
                  href="#"
                  className="sm:hidden h-[31px] bg-[#BFD4FA] w-[125px] rounded-[14px] shadow-lg flex justify-center items-center text-black mx-auto mt-4 text-[14px]"
                >
                  View More
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
                <h2 className="text-[24px]">Supportive Mentorship Programs </h2>
                <p className="text-[16px] text-[#D1D1D6]">
                  A network of experienced professionals dedicated to guiding
                  MSMEs on their digital journey.
                </p>
                <a
                  href="#"
                  className="sm:hidden h-[31px] bg-[#BFD4FA] w-[125px] rounded-[14px] shadow-lg flex justify-center items-center text-black mx-auto mt-4 text-[14px]"
                >
                  View More
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center px-6 py-12 gap-[30px] rounded-[23px] shadow-lg bg-[#D9D9D91A]">
              <div>
                <img src={ToolIcon} alt="ToolsIcon" />
              </div>
              <div className="details text-center flex flex-col gap-2">
                <h2 className="text-[24px]">
                  Tailored Digital Tools and Resources{" "}
                </h2>
                <p className="text-[16px] text-[#D1D1D6]">
                  A curated library of tools, templates, and guides to help
                  MSMEs modernize their operations and expand their reach.
                </p>
                <a
                  href="#"
                  className="sm:hidden h-[31px] bg-[#BFD4FA] w-[125px] rounded-[14px] shadow-lg flex justify-center items-center text-black mx-auto mt-4 text-[14px]"
                >
                  View More
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
        <a
          href="#"
          className="h-[42px] border-[1px] border-[#BFD4FA] w-[125px] rounded-[25px] shadow-lg flex justify-center items-center text-[#BFD4FA] mx-auto text-[14px]"
        >
          Learn More
          <MdArrowRight />
        </a>

        <HowSection />
      </div>
    </div>
  );
};

export default AboutDA;

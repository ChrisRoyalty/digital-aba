import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Slider01 from "../../assets/brandImg002.jpg";
import Slider02 from "../../assets/brandImg003.jpg";
import Slider03 from "../../assets/brandImg06.jpg";
import Slider04 from "../../assets/carousel01.webp";
import Slider05 from "../../assets/brandImg08.jpg";

import AccessIcon from "../../assets/accessIcon.png";
import CounselIcon from "../../assets/counselIcon.png";
import JoinIcon from "../../assets/joinIcon.png";
import ToolsIcon from "../../assets/toolsIcon.png";
import BookIcon from "../../assets/bookIcon.png";
import { Pagination, Autoplay } from "swiper/modules";
import { FaWhatsapp } from "react-icons/fa";
import { FaDigitalOcean } from "react-icons/fa";

const HeroSection = () => {
  const images = [Slider01, Slider02, Slider03, Slider04, Slider05];
  const textArray = [
    "Future",
    "Innovation",
    "Excellence",
    "Growth",
    "Transformation",
  ];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting && charIndex < textArray[index].length) {
          setCurrentText((prev) => prev + textArray[index][charIndex]);
          setCharIndex((prev) => prev + 1);
        } else if (isDeleting && charIndex > 0) {
          setCurrentText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else if (!isDeleting && charIndex === textArray[index].length) {
          setIsDeleting(true);
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % textArray.length);
        }
      },
      isDeleting ? 300 : 200
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, textArray]);

  return (
    <div className="relative w-full h-[109vh]">
      {/* Absolute overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-between bg-gradient-to-r from-black via-black/75 to-transparent text-white px-4 lg:px-8 pt-[20vh] lg:pt-[25vh] pb-[10vh]">
        <div className="w-full mt-16 lg:w-[60%] text-center lg:text-left">
          <h1 className="text-[28px] md:text-[44px] lg:text-[56px] font-bold leading-tight">
            Start Your Business's <br className="hidden lg:block" />
            <strong>Digital </strong>
            <span className="text-blue-300">{currentText}</span>
          </h1>
          <p className="mt-4 text-[16px] lg:text-[20px] lg:w-[90%] text-[#C7C7CC]">
            Digital Aba is a one-stop digital support center for non-tech
            businesses in Aba. We help connect you with the right digital tools,
            training, and skilled workers to help your business grow and succeed
            in today’s digital world.
          </p>
          <div className="mt-6">
            <a
              href="https://wa.link/uq3khh"
              className="inline-flex items-center gap-2 bg-[#BFD4FA] text-[#163F9E] px-6 py-3 rounded-[17px] shadow-lg hover:bg-[#BFD4FA]/90 transition"
            >
              <FaWhatsapp className="text-[24px]" />
              Connect on WhatsApp
            </a>
          </div>
        </div>

        {/* Scrolling Services Section */}
        <div className="services relative w-full overflow-x-hidden mt-8">
          <div
            className="flex gap-4 animate-scroll-seamless"
            style={{
              animation: "scroll 10s linear infinite",
            }}
          >
            {[...Array(2)].flatMap(() =>
              [
                {
                  text: "Access Digital Tools",
                  icon: (
                    <img
                      src={ToolsIcon}
                      className="rounded-full bg-gray-500 p-2 text-[40px]"
                    />
                  ),
                  link: "https://wa.link/6ubp44",
                },
                {
                  text: "Join Digital Workshops",
                  icon: (
                    <img
                      src={JoinIcon}
                      className="rounded-full bg-gray-500 p-2"
                    />
                  ),
                  link: "https://bit.ly/BIZD",
                },
                {
                  text: "Discover Digital Talents",
                  icon: (
                    <FaDigitalOcean className="rounded-full bg-gray-500 p-2 text-[38px]" />
                  ),
                  link: "https://wa.link/4xze56",
                },
                {
                  text: "Book Digital Counselling",
                  icon: (
                    <img
                      src={CounselIcon}
                      className="rounded-full bg-gray-500 p-2"
                    />
                  ),
                  link: "wa.link/0w169o",
                },
                {
                  text: "Access Digital Voucher",
                  icon: (
                    <img
                      src={AccessIcon}
                      className="rounded-full bg-gray-500 p-2"
                    />
                  ),
                  link: "https://wa.link/q11lnj",
                },
                {
                  text: "Read Digital Stories",
                  icon: (
                    <img
                      src={BookIcon}
                      className="rounded-full bg-gray-500 p-2 text-[40px]"
                    />
                  ),
                  link: "https://medium.com/@digitalabacenter",
                },
              ].map((item, idx) => (
                <a
                  key={`item-${idx}`}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center border border-gray-300 rounded-[17px] shadow-lg text-white h-[63px] gap-2 px-4 shrink-0 hover:bg-gray-700"
                  style={{ minWidth: "150px" }}
                >
                  <div className="text-2xl">{item.icon}</div>
                  <h3>{item.text}</h3>
                </a>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="absolute inset-0 w-full h-[109vh]"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="mt-[11vh] w-full h-fit lg:h-[109vh] relative">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[100vh] bg-black absolute top-0 left-0"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default HeroSection;

import React, { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import Slider01 from "../../assets/slider01.png";
import Slider02 from "../../assets/Slider02.png";
import Slider03 from "../../assets/Slider03.png";
import Slider04 from "../../assets/Slider04.png";
import Slider05 from "../../assets/Slider05.png";

import AccessIcon from "../../assets/accessIcon.png";
import CounselIcon from "../../assets/counselIcon.png";
import JoinIcon from "../../assets/joinIcon.png";
import ToolsIcon from "../../assets/toolsIcon.png";
import BookIcon from "../../assets/bookIcon.png";
import { Swiper, SwiperSlide } from "swiper/react";
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
    ); // Typing and deleting speed
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, textArray]);

  return (
    <div className="w-full h-fit relative ">
      {/* Absolute container */}
      <div className="h-[120vh] lg:h-[130vh] absolute top-0 inset-0 z-10 flex pt-[25vh] bg-gradient-to-r from-black via-black to-black/30 px-[2%] w-full flex-col">
        <div className="w-fit sm:w-[70%] lg:w-[60%] md:w-[60%] text-white p-8 max-sm:text-center pt-16">
          <h1 className="font-bold mb-4 md:text-[44px] lg:text-[56px] max-md:text-[30px] w-full lg:leading-[80px] sm:leading-[60px] leading-[50px]">
            Start Your Business's <br className="max-lg:hidden block" />{" "}
            <strong>Digital </strong>
            <span className="text-blue-300">{currentText}</span>
          </h1>

          <p className="mb-6 lg:text-[25px] text-[16px] lg:w-[90%] text-[#C7C7CC]">
            Digital Aba is a one-stop digital support center for non-tech
            businesses in Aba. We help connect you with the right digital tools,
            training, and skilled workers to help your business grow and succeed
            in today’s digital world.
          </p>
          <div className="rounded-[17px] w-full shadow-lg border-[#BFD4FA] my-8 flex sm:justify-start justify-center">
            <a
              href="https://wa.link/p1cysh"
              className="bg-[#BFD4FA] text-[#163F9E] rounded-[17px] h-[55px] w-fit hover:bg-[#BFD4FA]/95 flex items-center justify-between gap-2 px-[10px]"
            >
              <FaWhatsapp className="text-[25px]" />
              Connect on WhatsApp
            </a>
          </div>
        </div>
        <div className="services w-full lg:h-[14vh] h-fit z-10 overflow-hidden sm:mt-[50px] md:mt-[100px]">
          <div className="flex items-center gap-8 w-full animate-scroll-seamless">
            {[
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
                    className="rounded-full bg-gray-500 p-2"
                    src={JoinIcon}
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
                    className="rounded-full bg-gray-500 p-2"
                    src={CounselIcon}
                  />
                ),
                link: "wa.link/0w169o",
              },
              {
                text: "Access Digital Voucher",
                icon: (
                  <img
                    className="rounded-full bg-gray-500 p-2"
                    src={AccessIcon}
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
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border border-gray-300 rounded-[17px] shadow-lg text-white h-[63px] gap-4 px-4 shrink-0 hover:bg-gray-700"
              >
                <div className="text-2xl">{item.icon}</div>
                <h3>{item.text}</h3>
              </a>
            ))}

            {/* Duplicate for seamless scrolling */}
            {[
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
                    className="rounded-full bg-gray-500 p-2"
                    src={JoinIcon}
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
                    className="rounded-full bg-gray-500 p-2"
                    src={CounselIcon}
                  />
                ),
                link: "wa.link/0w169o",
              },
              {
                text: "Access Digital Voucher",
                icon: (
                  <img
                    className="rounded-full bg-gray-500 p-2"
                    src={AccessIcon}
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
                key={`duplicate-${idx}`}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border border-gray-300 rounded-[17px] shadow-lg text-white h-[63px] gap-2 px-4 shrink-0 hover:bg-gray-700"
              >
                <div className="text-2xl">{item.icon}</div>
                <h3>{item.text}</h3>
              </a>
            ))}
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
        className="shadow-md"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[110vh] lg:h-[130vh] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;

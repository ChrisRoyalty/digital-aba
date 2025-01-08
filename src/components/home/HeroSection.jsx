import React, { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import Slider01 from "../../assets/slider01.png";
import Slider02 from "../../assets/Slider02.png";
import Slider03 from "../../assets/Slider03.png";
import Slider04 from "../../assets/Slider04.png";
import Slider05 from "../../assets/Slider05.png";
import Sponsor01 from "../../assets/sponsors01.png";
import Sponsor02 from "../../assets/sponsors02.png";
import Sponsor03 from "../../assets/sponsors03.png";
import AccessIcon from "../../assets/accessIcon.png";
import CounselIcon from "../../assets/counselIcon.png";
import JoinIcon from "../../assets/joinIcon.png";
import StarIcon from "../../assets/starIcon.png";

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
      isDeleting ? 50 : 100
    ); // Typing and deleting speed
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, textArray]);

  return (
    <div className="w-full h-fit relative ">
      {/* Absolute container */}
      <div className="h-[110vh] absolute top-0 inset-0 z-10 flex pt-[25vh] bg-gradient-to-r from-black via-black to-black/30 px-[2%]">
        <div className="w-fit sm:w-[70%] lg:w-[60%] md:w-[60%] text-white p-8 max-sm:text-center">
          <h1 className="font-bold mb-4 md:text-[44px] lg:text-[56px] max-md:text-[30px] w-full lg:leading-[80px] sm:leading-[60px] leading-[50px]">
            Start Your Business's Digital{" "}
            <span className="text-blue-300">{currentText}</span>
          </h1>

          <p className="mb-6 lg:text-[25px] text-[16px] lg:w-[90%] text-[#C7C7CC]">
            Digital Aba is a one-stop support center for non-tech businesses in
            Aba. We help connect you with the right digital tools, training, and
            skilled workers to help your business grow and succeed in today’s
            digital world.
          </p>
          <div className="rounded-[17px] w-full shadow-lg border-[#BFD4FA] my-8 flex sm:justify-start justify-center">
            <button className="bg-[#BFD4FA] text-[#163F9E] rounded-[17px] h-[55px] w-fit hover:bg-[#BFD4FA]/95 flex items-center justify-between gap-6 px-2">
              <FaWhatsapp className="text-[28px]" />
              Connect on WhatsApp
            </button>
          </div>
        </div>
      </div>
      <div className="sponsors w-full h-[14vh] absolute bottom-0 z-10 overflow-hidden">
        <div className="flex items-center gap-8 w-full animate-scroll-seamless">
          {[
            { text: "Access Digital Tools", icon: <FaDigitalOcean /> },
            { text: "Join Digital Workshops", icon: <img src={JoinIcon} /> },
            { text: "Discover Digital Talents", icon: <img src={StarIcon} /> },
            {
              text: "Book Digital Counselling",
              icon: <img src={CounselIcon} />,
            },
            { text: "Access Digital Voucher", icon: <img src={AccessIcon} /> },
            { text: "Read Digital Stories", icon: <FaDigitalOcean /> },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center border border-gray-300 rounded-[17px] shadow-lg text-white h-[63px] gap-8 px-4 shrink-0"
            >
              <div className="text-2xl">{item.icon}</div>
              <h3>{item.text}</h3>
            </div>
          ))}

          {/* Duplicate for seamless scrolling */}
          {[
            { text: "Access Digital Tools", icon: <FaDigitalOcean /> },
            { text: "Join Digital Workshops", icon: <img src={JoinIcon} /> },
            { text: "Discover Digital Talents", icon: <img src={StarIcon} /> },
            {
              text: "Book Digital Counselling",
              icon: <img src={CounselIcon} />,
            },
            { text: "Access Digital Voucher", icon: <img src={AccessIcon} /> },
            { text: "Read Digital Stories", icon: <img src={StarIcon} /> },
          ].map((item, idx) => (
            <div
              key={`duplicate-${idx}`}
              className="flex items-center justify-center border border-gray-300 rounded-[17px] shadow-lg text-white h-[63px] gap-2 px-4 shrink-0"
            >
              <div className="text-2xl">{item.icon}</div>
              <h3>{item.text}</h3>
            </div>
          ))}
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
              className="w-full h-[110vh] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;

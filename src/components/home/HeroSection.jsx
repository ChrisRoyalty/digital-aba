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

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

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
      <div className="h-[110vh] absolute top-0 inset-0 z-10 flex pt-[20vh] bg-gradient-to-r from-black via-black to-black/30 px-[2%]">
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
          <div className="rounded-[17px] sm:w-[60%] border-[1px] border-[#BFD4FA] max-md:my-8">
            <input
              type="email"
              placeholder="Enter WhatsApp Number "
              className="px-4 bg-transparent rounded-[17px] border-none focus:ring-0 outline-none h-[43px] w-full xl:w-[60%]"
            />
            <button className="bg-[#BFD4FA] text-[#163F9E] rounded-[17px] h-[43px] w-full xl:w-[40%] hover:bg-[#BFD4FA]/95">
              Connect on WhatsApp
            </button>
          </div>
        </div>
      </div>
      <div
        className="sponsors w-full h-[14vh] absolute bottom-0 z-10 overflow-hidden flex items-center 
  bg-gradient-to-b from-[#FFFFFFB2] via-[#1543ACB2] to-[#000000B2]"
      >
        {/* Scrolling Content */}
        <div className="flex w-[200%] animate-scroll">
          <div className="flex">
            <img src={Sponsor01} alt="Sponsor" className="mx-4" />
            <img src={Sponsor02} alt="Sponsor" className="mx-4" />
            <img src={Sponsor03} alt="Sponsor" className="mx-4" />
          </div>
          {/* Duplicate Content */}
          <div className="flex">
            <img src={Sponsor01} alt="Sponsor" className="mx-4" />
            <img src={Sponsor02} alt="Sponsor" className="mx-4" />
            <img src={Sponsor03} alt="Sponsor" className="mx-4" />
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
              className="w-full h-[110vh] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;

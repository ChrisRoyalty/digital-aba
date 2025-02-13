import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Slider01 from "../../assets/sme16.jpg";
import Slider02 from "../../assets/brandImg003.jpg";
import Slider03 from "../../assets/sme07.jpg";
import Slider04 from "../../assets/sme15.jpg";
import Slider05 from "../../assets/sme05.jpg";

import MobileImage from "../../assets/sme02.jpg"; // Add your mobile image here

import AccessIcon from "../../assets/accessIcon.png";
import CounselIcon from "../../assets/counselIcon.png";
import JoinIcon from "../../assets/joinIcon.png";
import ToolsIcon from "../../assets/toolsIcon.png";
import BookIcon from "../../assets/bookIcon.png";
import { Pagination, Autoplay } from "swiper/modules";
import { FaWhatsapp } from "react-icons/fa";
import { MdCancelPresentation } from "react-icons/md";

const HeroSection = () => {
  const images = [Slider01, Slider02, Slider03, Slider04, Slider05];
  const textArray = ["MSMEs", "Entrepreneurs", "Brands"];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [modalData, setModalData] = useState(null); // State for selected modal data
  const [showModal, setShowModal] = useState(false); // State to toggle modal visibility

  const services = [
    {
      title: "Digital Skills Academy",
      subServices: ["Online Courses", "Certification Programs", "Workshops"],
      link: "https://wa.link/6ubp44",
      icon: <img src={AccessIcon} alt="Digital Skills Academy" />, // Added icon property
    },
    {
      title: "Digital Business Tools",
      subServices: [
        "CRM Software",
        "Automation Tools",
        "E-commerce Integration",
      ],
      link: "https://bit.ly/BIZD",
      icon: <img src={ToolsIcon} alt="Digital Business Tools" />, // Added icon property
    },
    {
      title: "Digital Marketing Services",
      subServices: [
        "SEO Services",
        "Social Media Marketing",
        "Email Campaigns",
      ],
      link: "https://wa.link/4xze56",
      icon: <img src={CounselIcon} alt="Digital Marketing Services" />, // Added icon property
    },
    {
      title: "E-Commerce Solutions",
      subServices: [
        "Website Development",
        "Payment Gateway Integration",
        "Product Listings",
      ],
      link: "wa.link/0w169o",
      icon: <img src={JoinIcon} alt="E-Commerce Solutions" />, // Added icon property
    },
    {
      title: "Digital Expert Support",
      subServices: ["Consultation", "Strategy Development", "24/7 Support"],
      link: "https://wa.link/q11lnj",
      icon: <img src={BookIcon} alt="Digital Expert Support" />, // Added icon property
    },
    {
      title: "Digital Innovation Access",
      subServices: ["Tech Innovation", "AI Solutions", "Cloud Services"],
      link: "https://medium.com/@digitalabacenter",
      icon: <img src={AccessIcon} alt="Digital Innovation Access" />, // Added icon property
    },
    {
      title: "Digital Talent Connection",
      subServices: ["Job Boards", "Freelancer Connections", "Talent Pool"],
      link: "https://medium.com/@digitalabacenter",
      icon: <img src={ToolsIcon} alt="Digital Talent Connection" />, // Added icon property
    },
  ];

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

  // Function to handle service click
  const handleServiceClick = (service) => {
    setModalData(service); // Set selected service data
    setShowModal(true); // Show the modal
  };

  // Function to close modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative w-full h-[100vh] bg-center bg-black">
      {/* Absolute overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-between bg-center bg-gradient-to-r from-black/75 via-black/30 md:from-black md:via-black/75 to-transparent text-white px-4 lg:px-[5%] sm:pt-[15vh] pt-[12vh] lg:pt-[28vh] max-sm:bg-black/50">
        <div className="w-full max-sm:mt-24 lg:w-[60%] text-center lg:text-left">
          <h1 className="text-[28px] lg:text-[40px] font-bold leading-tight">
            Digital Grants for Abia{" "}
            <strong className="text-blue-300">MSMEs</strong>
            {/* <br className="hidden lg:block max-sm:block" />
              Fashion */}
            {/* <span className="text-blue-300 pl-2">
                <span
                  style={{
                    whiteSpace: "nowrap",
                    display: "inline-block", // Ensure the text stays in one line
                    minWidth: `${textArray[index].length + 1}ch`, // Add a little space to make sure the next text doesn't overflow
                  }}
                >
                  {currentText}
                </span>
              </span> */}
          </h1>
          <p className="lg:mt-4 text-[16px] lg:text-[18px] lg:w-[90%] text-gray-300 lg:text-[#C7C7CC]">
            Digital Aba offers technology credits to Abia MSMEs, providing
            access to expert digital support and powerful tools to help grow
            their businesses.
          </p>

          <div className="mt-8 flex gap-4 max-lg:justify-center max-lg:text-center">
            <a
              href="https://wa.link/uq3khh"
              className="inline-flex items-center gap-2 hover:bg-[#BFD4FA] hover:text-[#163F9E] border-[1px] border-[#BFD4FA] px-6 py-3 rounded-[17px] shadow-lg  transition"
            >
              {/* <FaWhatsapp className="text-[24px]" /> */}
              Fund a Grant
            </a>
            <a
              href="https://wa.link/uq3khh"
              className="inline-flex items-center gap-2 hover:bg-[#BFD4FA] hover:text-[#163F9E] border-[1px] border-[#BFD4FA] px-6 py-3 rounded-[17px] shadow-lg transition"
            >
              {/* <FaWhatsapp className="text-[24px]" /> */}
              Access Grant
            </a>
          </div>
        </div>

        {/* Scrolling Services Section */}
        <div>
          <h2 className="lg:text-start lg:text-[22px] text-[18px] text-center text-white w-full">
            Digital Supports for MSMEs
          </h2>
          <div className="services relative w-full md:overflow-x-hidden overflow-auto  mb-14 flex flex-col gap-4 max-sm:mb-[5vh] max-sm:gap-2 mt-2">
            <div
              className="flex gap-4 animate-scroll-seamless"
              style={{
                animation: "scroll 8s linear infinite",
              }}
            >
              {[...Array(2)].flatMap((_, outerIdx) =>
                services.map((item, idx) => (
                  <a
                    key={`item-${outerIdx}-${idx}`} // Make keys unique by including outerIdx
                    href="#!"
                    onClick={() => handleServiceClick(item)}
                    className="flex items-center justify-center border border-gray-300 rounded-[17px] shadow-lg text-white h-[63px] gap-2 px-4 shrink-0 hover:bg-gray-700"
                    style={{ minWidth: "150px" }}
                  >
                    <div className="text-2xl">{item.icon}</div>
                    <h3>{item.title}</h3>
                  </a>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Swiper Carousel for larger screens */}
      <div className="md:block hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="absolute inset-0 w-full h-[100vh] lg:h-[100vh] bg-black"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="mt-[11vh] w-full h-[100%] lg:h-[100vh] relative">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full bg-cover bg-black absolute top-0 left-0 lg:object-cover overflow-hidden object-center"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Static image for mobile */}
      <div className="md:hidden block pt-[11vh] h-[100vh]">
        <img
          src={MobileImage} // Use your separate mobile image here
          alt="Mobile View"
          className="w-full h-full object-center"
        />
      </div>

      {/* Modal for displaying service details */}
      {showModal && modalData && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-20">
          <div className="bg-white p-8 rounded-lg max-w-lg w-full relative">
            <h2 className="text-2xl font-bold mb-4">{modalData.title}</h2>
            <ul className="mb-4 list-disc pl-5">
              {modalData.title === "Digital Skills Academy" && (
                <>
                  <li className="text-lg mb-2">
                    Business digitalization basics
                  </li>
                  <li className="text-lg mb-2">
                    Digital tools and software training
                  </li>
                  <li className="text-lg mb-2">Online selling fundamentals</li>
                  <li className="text-lg mb-2">Digital financial management</li>
                </>
              )}

              {modalData.title === "Digital Business Tools" && (
                <>
                  <li className="text-lg mb-2">Inventory management systems</li>
                  <li className="text-lg mb-2">Digital payment solutions</li>
                  <li className="text-lg mb-2">Order tracking software</li>
                  <li className="text-lg mb-2">Business analytics tools</li>
                </>
              )}

              {modalData.title === "Digital Marketing Services" && (
                <>
                  <li className="text-lg mb-2">Social media strategy</li>
                  <li className="text-lg mb-2">Content creation support</li>
                  <li className="text-lg mb-2">Online brand development</li>
                  <li className="text-lg mb-2">Digital advertising guidance</li>
                </>
              )}

              {modalData.title === "E-Commerce Solutions" && (
                <>
                  <li className="text-lg mb-2">Online store setup</li>
                  <li className="text-lg mb-2">Product photography</li>
                  <li className="text-lg mb-2">Digital catalog creation</li>
                  <li className="text-lg mb-2">Marketplace integration</li>
                </>
              )}

              {modalData.title === "Digital Expert Support" && (
                <>
                  <li className="text-lg mb-2">One-on-one consultations</li>
                  <li className="text-lg mb-2">
                    Personalized digital strategies
                  </li>
                  <li className="text-lg mb-2">Implementation assistance</li>
                  <li className="text-lg mb-2">Progress monitoring</li>
                </>
              )}

              {modalData.title === "Digital Innovation Access" && (
                <>
                  <li className="text-lg mb-2">Technology vouchers</li>
                  <li className="text-lg mb-2">Digital tool subsidies</li>
                  <li className="text-lg mb-2">Innovation grants</li>
                  <li className="text-lg mb-2">
                    Tech partnership opportunities
                  </li>
                </>
              )}

              {modalData.title === "Digital Talent Connection" && (
                <>
                  <li className="text-lg mb-2">Digital skills assessment</li>
                  <li className="text-lg mb-2">Talent matching</li>
                  <li className="text-lg mb-2">Tech recruitment support</li>
                  <li className="text-lg mb-2">Digital team training</li>
                </>
              )}
            </ul>
            <div className="flex justify-end mb-4">
              {modalData.title === "Digital Skills Academy" && (
                <a
                  href={modalData.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#BFD4FA] text-gray-700 w-full text-center shadow-lg py-3 rounded-lg"
                >
                  Start Learning Today
                </a>
              )}

              {modalData.title === "Digital Business Tools" && (
                <a
                  href={modalData.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#BFD4FA] text-gray-700 w-full text-center shadow-lg py-3 rounded-lg"
                >
                  Get Digital Tools
                </a>
              )}

              {modalData.title === "Digital Marketing Services" && (
                <a
                  href={modalData.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#BFD4FA] text-gray-700 w-full text-center shadow-lg py-3 rounded-lg"
                >
                  Boost Your Marketing
                </a>
              )}

              {modalData.title === "E-Commerce Solutions" && (
                <a
                  href={modalData.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#BFD4FA] text-gray-700 w-full text-center shadow-lg py-3 rounded-lg"
                >
                  Start Selling Online
                </a>
              )}

              {modalData.title === "Digital Expert Support" && (
                <a
                  href={modalData.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#BFD4FA] text-gray-700 w-full text-center shadow-lg py-3 rounded-lg"
                >
                  Connect with an Expert
                </a>
              )}

              {modalData.title === "Digital Innovation Access" && (
                <a
                  href={modalData.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#BFD4FA] text-gray-700 w-full text-center shadow-lg py-3 rounded-lg"
                >
                  Access Innovation Support
                </a>
              )}

              {modalData.title === "Digital Talent Connection" && (
                <a
                  href={modalData.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-[#BFD4FA] text-gray-700 w-full py-3 rounded-lg"
                >
                  Find Digital Talent
                </a>
              )}
            </div>
            <div className="absolute top-2 right-6">
              <p
                className="text-gray-500 text-[20px] cursor-pointer hover:text-[21px]"
                onClick={closeModal}
              >
                x
              </p>
            </div>
          </div>
        </div>
      )}

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

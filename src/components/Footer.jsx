import React from "react";
import DigitalAbaLogo from "../assets/digitalAbaWhiteLogo.png";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa";
import Action from "./home/Action";

const Footer = ({
  bgColor = "bg-transparent",
  textColor = "text-white",
  useBackgroundImage = false,
}) => {
  return (
    <div
      className={`w-full h-fit pt-16 flex flex-col justify-center items-center ${
        useBackgroundImage
          ? "bg-[url('/gridbg.png')] bg-cover bg-center bg-black text-white"
          : bgColor
      } z-10`}
    >
      <div className="w-full flex flex-col justify-center items-center ">
        <Action />
        <div className="w-full flex justify-center items-center border-y border-[#AEAEB2BD] mt-32">
          <div className="w-[90%] py-8 flex max-md:flex-col max-md:justify-center justify-between items-center ">
            <div className="flex flex-col gap-6 items-center justify-center">
              <NavLink to="/">
                <img
                  src={DigitalAbaLogo}
                  alt="Digital Aba Logo"
                  className="w-[128px] h-[20px]"
                />
              </NavLink>
              {/* <nav className="flex gap-4">
                <NavLink
                  className={`text-[14px] hover:border-b hover:pb-2 ${textColor}`}
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  className={`text-[14px] hover:border-b hover:pb-2 ${textColor}`}
                  to="/hackathon"
                >
                  Hackathon
                </NavLink>
                <NavLink
                  className={`text-[14px] hover:border-b hover:pb-2 ${textColor}`}
                  to="/impact"
                >
                  Impact
                </NavLink>
                <NavLink
                  className={`text-[14px] hover:border-b hover:pb-2 ${textColor}`}
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </nav> */}
            </div>
            <div className="flex flex-col gap-6 max-md:text-center max-md:mt-8">
              <h2 className={`text-[16px] font-bold ${textColor}`}>
                Stay updated
              </h2>
              <div className="rounded-[17px] w-fit border-[1px] border-[#BFD4FA] mx-auto">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="px-4 bg-transparent rounded-[17px] border-none focus:ring-0 outline-none h-[43px] w-[60%]"
                />
                <button className="bg-[#BFD4FA] text-[#163F9E] rounded-[17px] h-[43px] w-[40%] hover:bg-[#BFD4FA]/95">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] py-16 flex max-md:flex-col max-md:text-center max-md:gap-8 justify-between items-center">
        <p
          className={`lg:text-[14px] text-[10px] hover:text-[#BFD4FA] ${textColor}`}
        >
          © 2025 Digital Aba. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=61568611337006&mibextid=ZbWKwL"
            className=""
          >
            <FaFacebookF className="hover:text-[#BFD4FA] border-2 hover:border-[#BFD4FA] rounded-full text-[40px] p-2" />
          </a>
          <a href="#" className="">
            <FaInstagram className="hover:text-[#BFD4FA] border-2 hover:border-[#BFD4FA] rounded-full text-[40px] p-2" />
          </a>
          <a
            href="https://www.tiktok.com/@digital.aba.movem?_t=8rjviP3GTB9&_r=1"
            className=""
          >
            <FaTiktok className="hover:text-[#BFD4FA] border-2 hover:border-[#BFD4FA] rounded-full text-[40px] p-2" />
          </a>
          <a href="#" className="">
            <FaTwitter className="hover:text-[#BFD4FA] border-2 hover:border-[#BFD4FA] rounded-full text-[40px] p-2" />
          </a>
          <a href="#" className="">
            <FaLinkedinIn className="hover:text-[#BFD4FA] border-2 hover:border-[#BFD4FA] rounded-full text-[40px] p-2" />
          </a>
        </div>
        <nav className="flex gap-4">
          <NavLink
            className={`lg:text-[14px] text-[10px] hover:text-[#BFD4FA] ${textColor}`}
            to="/privacy-policy"
          >
            Privacy Policy
          </NavLink>
          <NavLink
            className={`lg:text-[14px] text-[10px] hover:text-[#BFD4FA] ${textColor}`}
            to="/terms-of-service"
          >
            Terms of Service
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Footer;

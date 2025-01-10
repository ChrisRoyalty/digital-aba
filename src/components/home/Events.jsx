import React from "react";
import PolygonIcon from "../../assets/Polygon02.png";
import EllipseIcon from "../../assets/Ellipse02.png";

import { MdArrowRight } from "react-icons/md";
const Events = () => {
  return (
    <div className="w-full h-fit flex justify-center items-center py-16 bg-black ">
      <div className="bg-[url('/UnionBg.png')] bg-cover bg-center w-[90%] h-fit flex flex-col items-center justify-center text-white py-16 rounded-xl shadow-lg p-8 relative">
        <div className="bg-[url('/Union.png')] bg-cover bg-center h-fit flex flex-col items-center justify-center text-white py-16 rounded border-y-[1px] p-8 w-full text-center gap-4">
          <h2 className="lg:text-[32px] text-[16px] font-bold">
            Get Exclusive MSME Opportunities <br className="max-sm:hidden" />{" "}
            Delivered to You
          </h2>
          <p className="lg:text-[16px] text-[10px] text-[#D1D1D6]">
            Join the MSMEs Thriving in the Digital Economy
          </p>
          <a
            href="https://wa.link/p1cysh"
            className="h-[42px] border-[1px] border-[#BFD4FA] rounded-[25px] shadow-lg flex justify-center items-center text-[#BFD4FA] mx-auto text-[14px] mt-8 w-fit px-4 mb-8"
          >
            Join WhatsApp Channel
            <MdArrowRight className="text-[28px]" />
          </a>
        </div>
        <div className="polygon">
          <img
            src={PolygonIcon}
            alt=""
            className="absolute top-[40%] md:left-[200px] left-[100px] max-sm:left-[10px] w-[10px] md:w-[15px]"
          />
          <img
            src={PolygonIcon}
            alt=""
            className="absolute bottom-[20%] md:right-[300px] right-[100px] max-sm:right-[10px] w-[20px] md:w-[30px]"
          />
        </div>
        <div className="ellipse">
          <img
            src={EllipseIcon}
            alt=""
            className="absolute bottom-[20%] md:bottom-[28%] left-[20px] md:left-[80px] w-[20px] md:w-[44px]"
          />
          <img
            src={EllipseIcon}
            alt=""
            className="absolute bottom-[21%] md:bottom-[29%] left-[24px] md:left-[90px] w-[20px] md:w-[44px]"
          />
        </div>

        <div className="ellipse">
          <img
            src={EllipseIcon}
            alt=""
            className="absolute top-[29%] right-[25px] md:right-[150px] w-[20px] md:w-[44px]"
          />
          <img
            src={EllipseIcon}
            alt=""
            className="absolute top-[28%] right-[20px] md:right-[140px] w-[20px] md:w-[44px]"
          />
          <p className="absolute top-[52%] right-[20px] md:right-[70px] md:text-[32px] text-[24px] transform rotate-[160deg] text-gray-400">
            x
          </p>
        </div>
      </div>
    </div>
  );
};

export default Events;

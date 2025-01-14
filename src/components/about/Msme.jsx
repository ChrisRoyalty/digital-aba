import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";

const Msme = () => {
  return (
    <div className="msme w-full h-fit flex items-center justify-center bg-black text-white py-16">
      <div className="w-[90%] grid lg:grid-cols-2 max-lg:gap-8">
        <div className="mt-4 flex flex-col gap-8">
          <h3 className="md:text-[32px] text-[20px] font-bold">
            Moving MSMEs Forward
          </h3>
          <a
            href="https://wa.link/9q5477"
            className="h-[31px] border border-[#BFD4FA] text-[#BFD4FA] rounded-[14px] shadow-lg flex justify-center items-center mt-4 text-[14px] gap-8 py-4 px-2 w-fit max-lg:hidden"
          >
            Contact Us
            <BiSolidRightArrow />
          </a>
        </div>
        <div className="w-full h-fit">
          <p className="md:text-[20px] text-[14px]">
            Digital Aba is a movement focused on transforming the business
            landscape for MSMEs in Aba. We provide access to a dedicated Digital
            Center for physical support, deploy skilled digital employees and
            interns to help businesses in their digital transformation journey,
            and partner with tech companies to offer vouchers, making essential
            digital tools affordable. By equipping MSMEs with the resources,
            skills, and support they need, we help them thrive in today’s
            digital economy.
          </p>
          <a
            href="https://wa.link/9q5477"
            className="h-[31px] border border-[#BFD4FA] text-[#BFD4FA] rounded-[14px] shadow-lg flex justify-center items-center mt-4 text-[14px] gap-8 py-4 px-2 w-fit lg:hidden"
          >
            Contact Us
            <BiSolidRightArrow />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Msme;

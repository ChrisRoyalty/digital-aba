import React from "react";
import Footer from "../Footer";

const Action = () => {
  return (
    <div className="bg-[url('/gridbg.png')] bg-cover bg-center w-full h-fit flex flex-col items-center justify-center text-white pt-16 bg-black">
      <div className="w-[90%] h-fit text-center flex flex-col gap-8">
        <h2 className="lg:text-[32px] text-[20px] font-bold">
          Take Action Today!
        </h2>
        <p className="w-[90%] sm:w-[80%] lg:w-[65%] m-auto lg:text-[24px] text-[17px]">
          Join the Digital Aba Movement and help shape the digital future of
          MSMEs in Aba. Whether you're an MSME, tech company, innovator,
          sponsor, or partner, your contribution is vital.
        </p>
        <div className="rounded-[17px] sm:w-[60%] border-[1px] border-[#BFD4FA] mx-auto">
          <input
            type="email"
            placeholder="Enter Email "
            className="px-4 bg-transparent rounded-[17px] border-none focus:ring-0 outline-none h-[43px] w-[60%]"
          />
          <button className="bg-[#BFD4FA] text-[#163F9E] rounded-[17px] h-[43px] w-[40%] hover:bg-[#BFD4FA]/95">
            Join Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Action;

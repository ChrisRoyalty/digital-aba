import React from "react";
import StudentsImg from "../../assets/students.png";
const Intro = () => {
  return (
    <div className="py-8 bg-black">
      <div className="bg-[url('/Tunnel.png')] bg-black bg-cover bg-center w-full h-fit flex flex-col items-center justify-center text-white pt-[12vh]">
        <div className="lg:w-[40%] md:w-[60%] w-[90%] text-center flex flex-col items-center justify-center lg:my-16 my-10">
          <h1 className="md:text-[60px] text-[28px] text-center font-bold">
            Who we are
          </h1>
          <p className="md:text-[20px] text-[14px] text-center">
            We connect non-tech MSMEs in Aba with the right digital tools,
            skills, and support, enabling them to thrive in today’s rapidly
            evolving digital economy.
          </p>
        </div>
        <div className="w-[90%] lg:mt-8">
          <img src={StudentsImg} alt="Group photo digital aba" />
        </div>
      </div>
    </div>
  );
};

export default Intro;

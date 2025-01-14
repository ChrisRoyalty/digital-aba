import React from "react";

const Initiators = () => {
  return (
    <div className="w-full h-fit flex justify-center items-center bg-black py-8">
      <div
        className="w-[90%] h-[578px] bg-cover bg-center flex flex-col items-center justify-center text-white pt-[12vh]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url('/Team.jpeg')`,
        }}
      >
        <div className="lg:w-[60%] text-center">
          <h1 className="lg:text-[32px] text-[20px] font-bold">
            The Minds Behind Digital Aba
          </h1>
          <p className="lg:text-[20px] text-[16px] text-[#D1D1D6]">
            We dream it, we do it. Our actions speak louder than our words,
            together we build a brighter future for our community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Initiators;

import React from "react";

const About = () => {
  return (
    <div className="bg-[url('/Tunnel.png')] bg-black bg-cover bg-center w-full h-screen flex flex-col items-center justify-center text-white py-16">
      <h1 className="md:text-[60px] text-[28px] text-center">Who we are</h1>
      <p className="md:text-[20px] text-[14px] text-center w-[60%]">
        We connect non-tech MSMEs in Aba with the right digital tools, skills,
        and support, enabling them to thrive in today’s rapidly evolving digital
        economy.
      </p>
    </div>
  );
};

export default About;

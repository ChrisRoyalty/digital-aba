import React from "react";
import HackathonImg from "../../assets/hackathonIcon.png";
const Leadership = () => {
  return (
    <div className="bg-[url('/Tunnel.png')] bg-black bg-cover bg-center h-fit flex flex-col items-center justify-center text-white py-16 text-center">
      <div className="w-[90%]">
        <h1 className="md:text-[32px] text-[20px] font-bold">
          Our Leadership Principles
        </h1>
        <div className="w-full flex flex-col gap-12 mt-16">
          <div className="flex max-lg:flex-col justify-between gap-16">
            <div className="lg:w-[45%] bg-[#D9D9D91A] rounded-[23px] shadow-lg lg:py-10 py-8 lg:px-20 px-4 text-center flex flex-col justify-center items-center gap-4">
              <img src={HackathonImg} alt="" />
              <h3 className="md:text-[24px] text-[20px]">
                Empathy-Driven Leadership
              </h3>
              <p className="md:text-[16px] text-[14px] text-[#D1D1D6]">
                Prioritizing the needs and challenges of the MSMEs we serve to
                provide impactful solutions.
              </p>
            </div>
            <div className="lg:w-[55%] bg-[#D9D9D91A] rounded-[23px] shadow-lg lg:py-10 py-8 lg:px-20 px-4  text-center flex flex-col justify-center items-center gap-4">
              <img src={HackathonImg} alt="" />
              <h3 className="md:text-[24px] text-[20px]">
                Innovation and Adaptability{" "}
              </h3>
              <p className="md:text-[16px] text-[14px] text-[#D1D1D6]">
                Constantly evolving to embrace modern tools and methodologies
                for better outcomes.
              </p>
            </div>
          </div>
          <div className="flex max-lg:flex-col justify-between gap-16">
            <div className="lg:w-[55%] bg-[#D9D9D91A] rounded-[23px] shadow-lg lg:py-10 py-8 lg:px-20 px-4 text-center flex flex-col justify-center items-center gap-4">
              <img src={HackathonImg} alt="" />
              <h3 className="md:text-[24px] text-[20px]">
                Collaboration and Inclusion{" "}
              </h3>
              <p className="md:text-[16px] text-[14px] text-[#D1D1D6]">
                Building a community of diverse individuals and partners to
                foster creativity and shared growth.
              </p>
            </div>
            <div className="lg:w-[45%] bg-[#D9D9D91A] rounded-[23px] shadow-lg lg:py-10 py-8 lg:px-20 px-4  text-center flex flex-col justify-center items-center gap-4">
              <img src={HackathonImg} alt="" />
              <h3 className="md:text-[24px] text-[20px]">
                Integrity and Accountability{" "}
              </h3>
              <p className="md:text-[16px] text-[14px] text-[#D1D1D6]">
                Ensuring transparency in actions and delivering on promises to
                stakeholders.
              </p>
            </div>
          </div>
          <div className="flex max-lg:flex-col justify-between gap-16">
            <div className="lg:w-[45%] bg-[#D9D9D91A] rounded-[23px] shadow-lg lg:py-10 py-8 lg:px-20 px-4 text-center flex flex-col justify-center items-center gap-4">
              <img src={HackathonImg} alt="" />
              <h3 className="md:text-[24px] text-[20px]">
                Sustainability and Impact{" "}
              </h3>
              <p className="md:text-[16px] text-[14px] text-[#D1D1D6]">
                Driving long-term, meaningful change for MSMEs while protecting
                future resources.
              </p>
            </div>
            <div className="lg:w-[55%] bg-[#D9D9D91A] rounded-[23px] shadow-lg lg:py-10 py-8 lg:px-20 px-4  text-center flex flex-col justify-center items-center gap-4">
              <img src={HackathonImg} alt="" />
              <h3 className="md:text-[24px] text-[20px]">
                Excellence in Execution{" "}
              </h3>
              <p className="md:text-[16px] text-[14px]">
                Setting high standards and consistently delivering quality
                programs and services.
              </p>
            </div>
          </div>
          {/* <div className="w-full bg-[#D9D9D91A] rounded-[23px] shadow-lg p-8 text-center flex flex-col justify-center items-center gap-4">
            <img src={HackathonImg} alt="" />
            <h3 className="md:text-[24px] text-[20px]">
              Empathy-Driven Leadership
            </h3>
            <p className="md:text-[16px] text-[14px]">
              Prioritizing the needs and challenges of the MSMEs we serve to
              provide impactful solutions.
            </p>
          </div>
          <div className="w-[80%] bg-[#D9D9D91A] rounded-[23px] shadow-lg p-8 text-center flex flex-col justify-center items-center gap-4">
            <img src={HackathonImg} alt="" />
            <h3 className="md:text-[24px] text-[20px]">
              Empathy-Driven Leadership
            </h3>
            <p className="md:text-[16px] text-[14px]">
              Prioritizing the needs and challenges of the MSMEs we serve to
              provide impactful solutions.
            </p>
          </div>
          <div className="w-[40%] bg-[#D9D9D91A] rounded-[23px] shadow-lg p-8 text-center flex flex-col justify-center items-center gap-4">
            <img src={HackathonImg} alt="" />
            <h3 className="md:text-[24px] text-[20px]">
              Empathy-Driven Leadership
            </h3>
            <p className="md:text-[16px] text-[14px]">
              Prioritizing the needs and challenges of the MSMEs we serve to
              provide impactful solutions.
            </p>
          </div>
          <div className="w-[60%] bg-[#D9D9D91A] rounded-[23px] shadow-lg p-8 text-center flex flex-col justify-center items-center gap-4">
            <img src={HackathonImg} alt="" />
            <h3 className="md:text-[24px] text-[20px]">
              Empathy-Driven Leadership
            </h3>
            <p className="md:text-[16px] text-[14px]">
              Prioritizing the needs and challenges of the MSMEs we serve to
              provide impactful solutions.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Leadership;

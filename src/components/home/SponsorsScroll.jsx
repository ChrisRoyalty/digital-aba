import React from "react";
import Sponsor05 from "../../assets/german-corporation.png";
import Sponsor04 from "../../assets/eu.png";
import Sponsor02 from "../../assets/giz.png";
import Sponsor03 from "../../assets/digitalT.png";
import Sponsor01 from "../../assets/rad5hub.png"; // Replace with actual sponsor image paths
import SponsorsMain from "../../assets/sponsors.jpg";

const SponsorsScroll = () => {
  const sponsors = [
    { image: Sponsor01, name: "Sponsor 1", width: "100%", height: "94px" },
    { image: Sponsor02, name: "Sponsor 2", width: "100%", height: "126px" },
    { image: Sponsor03, name: "Sponsor 3", width: "100%", height: "67px" },
    { image: Sponsor04, name: "Sponsor 4", width: "100%", height: "124px" },
    { image: Sponsor05, name: "Sponsor 5", width: "100%", height: "99px" },
  ];

  // Calculate total width for the animation
  const totalWidth = sponsors.reduce(
    (total, sponsor) => total + parseInt(sponsor.width) + 32, // Add gap (32px)
    0
  );

  return (
    <div className="flex flex-col bg-black text-white gap-6">
      <div className="w-[90%] md:w-[70%] mx-auto text-center flex flex-col gap-2 py-4">
        <h1 className="text-[32px] font-bold">Our Partners</h1>
        <p className="lg:text-[20px] text-[16px] text-[#D1D1D6]">
          We collaborate with industry leaders, technology innovators, and
          community-focused organizations to empower MSMEs in Aba. Together, we
          drive digital transformation, providing resources, tools, and
          opportunities that enable sustainable growth and success.
        </p>
      </div>
      <div
        className="sponsors w-full bg-gradient-to-b from-[#1543ACCC] 
      via-gray-300 to-[#ffff] relative overflow-x-hidden"
      >
        {/* Animated scrolling section */}
        <div
          className="flex items-center gap-8 py-8"
          style={{
            animation: `scroll ${totalWidth / 100}s linear infinite`, // Adjust duration based on total width
          }}
        >
          {/* Original sponsors */}
          {sponsors.map((sponsor, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center  
            text-white h-[100px] px-4 shrink-0"
            >
              <img
                src={sponsor.image}
                alt={sponsor.name}
                style={{
                  width: sponsor.width,
                  height: sponsor.height,
                }}
                className="object-contain"
              />
            </div>
          ))}

          {/* Duplicate sponsors for seamless scrolling */}
          {sponsors.map((sponsor, idx) => (
            <div
              key={`duplicate-${idx}`}
              className="flex items-center justify-center  
            text-white h-[100px] px-4 shrink-0"
            >
              <img
                src={sponsor.image}
                alt={sponsor.name}
                style={{
                  width: sponsor.width,
                  height: sponsor.height,
                }}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Add manual scrolling styles */}
        <style>
          {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${totalWidth}px);
            }
          }
        `}
        </style>
      </div>
    </div>
  );
};

export default SponsorsScroll;

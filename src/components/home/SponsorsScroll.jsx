import React from "react";
import Sponsor01 from "../../assets/rad5hub.png"; // Replace with actual sponsor image paths
import Sponsor02 from "../../assets/giz.png";
import Sponsor03 from "../../assets/digitalT.png";
import Sponsor04 from "../../assets/eu.png";
import Sponsor05 from "../../assets/german-corporation.png";

const SponsorsScroll = () => {
  const sponsors = [
    { image: Sponsor01, name: "Sponsor 1" },
    { image: Sponsor02, name: "Sponsor 2" },
    { image: Sponsor03, name: "Sponsor 3" },
    { image: Sponsor04, name: "Sponsor 4" },
    { image: Sponsor05, name: "Sponsor 5" },
  ];

  return (
    <div
      className="sponsors w-full bg-gradient-to-b from-[#FFFFFFB2] 
      via-[#1543ACCC] to-[#1543ACCC] relative overflow-x-auto"
    >
      {/* Animated scrolling section */}
      <div
        className="flex items-center gap-8 py-8 animate-scroll-seamless"
        style={{
          animation: "scroll 15s linear infinite",
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
              className="w-full object-contain h-full"
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
              className="w-full object-contain h-full"
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
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default SponsorsScroll;

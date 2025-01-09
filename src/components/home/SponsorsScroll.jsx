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
      className="sponsors w-full overflow-hidden flex items-center 
    bg-gradient-to-b from-[#FFFFFFB2] via-[#1543ACCC] to-[#1543ACCC]"
    >
      <div className="flex items-center gap-8 w-full animate-scroll-seamless py-8">
        {sponsors.map((sponsor, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center border border-gray-300 text-white h-[100px] px-4 shrink-0"
          >
            <img
              src={sponsor.image}
              alt={sponsor.name}
              className="w-full object-contain h-full"
            />
          </div>
        ))}

        {/* Duplicate for seamless scrolling */}
        {sponsors.map((sponsor, idx) => (
          <div
            key={`duplicate-${idx}`}
            className="flex items-center justify-center border border-gray-300 text-white h-[100px] px-4 shrink-0"
          >
            <img
              src={sponsor.image}
              alt={sponsor.name}
              className="w-full object-contain h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorsScroll;

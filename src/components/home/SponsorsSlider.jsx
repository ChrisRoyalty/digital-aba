import React from "react";
import Sponsor01 from "../../assets/sponsors01.png";
import Sponsor02 from "../../assets/sponsors02.png";
import Sponsor03 from "../../assets/sponsors03.png";

const SponsorsSlider = ({ sponsors }) => {
  return (
    <div
      className="sponsors w-full h-[14vh] overflow-hidden flex items-center 
    bg-gradient-to-b from-[#FFFFFFB2] via-[#1543ACB2] to-[#000000B2]"
    >
      {/* Scrolling Content */}
      <div className="flex w-[200%] animate-scroll">
        <div className="flex">
          {sponsors.map((sponsor, index) => (
            <img
              src={sponsor}
              alt={`Sponsor ${index + 1}`}
              className="mx-4"
              key={index}
            />
          ))}
        </div>
        {/* Duplicate Content */}
        <div className="flex">
          {sponsors.map((sponsor, index) => (
            <img
              src={sponsor}
              alt={`Sponsor ${index + 1}`}
              className="mx-4"
              key={`dup-${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

SponsorsSlider.defaultProps = {
  sponsors: [Sponsor01, Sponsor02, Sponsor03],
};

export default SponsorsSlider;

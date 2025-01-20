import React, { useState, useEffect } from "react";
import Sponsor05 from "../../assets/german-corporation.png";
import Sponsor04 from "../../assets/eu.png";
import Sponsor02 from "../../assets/giz.png";
import Sponsor03 from "../../assets/digitalT.png";
import Sponsor01 from "../../assets/rad5hub.png"; // Replace with actual sponsor image paths

const SponsorsScroll = () => {
  const sponsors = [
    { image: Sponsor01, name: "Sponsor 1", width: 190, height: 94 },
    { image: Sponsor02, name: "Sponsor 2", width: 190, height: 126 },
    { image: Sponsor03, name: "Sponsor 3", width: 190, height: 67 },
    { image: Sponsor04, name: "Sponsor 4", width: 190, height: 124 },
    { image: Sponsor05, name: "Sponsor 5", width: 190, height: 99 },
  ];

  const [loopAnimation, setLoopAnimation] = useState(false);

  // Calculate total scroll width
  const totalWidth =
    sponsors.reduce((total, sponsor) => total + sponsor.width + 32, 0) + 32;

  useEffect(() => {
    const timer = setTimeout(
      () => setLoopAnimation(true),
      (totalWidth / 100) * 1000
    ); // Complete first scroll before looping
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [totalWidth]);

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
      <div className="sponsors w-full bg-gradient-to-b from-[#1542ac54] via-gray-300 to-[#ffff] relative overflow-x-hidden">
        {/* Scrolling container */}
        <div
          className={`flex items-center gap-8 py-8 ${
            loopAnimation ? "animate-loop" : "animate-once"
          }`}
          style={{
            "--scroll-width": `${totalWidth}px`,
          }}
        >
          {/* Sponsors */}
          {sponsors.map((sponsor, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center h-[100px] px-4 shrink-0"
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

          {/* Duplicated sponsors for seamless looping (conditionally rendered) */}
          {loopAnimation &&
            sponsors.map((sponsor, idx) => (
              <div
                key={`duplicate-${idx}`}
                className="flex items-center justify-center h-[100px] px-4 shrink-0"
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
        {/* Keyframes */}
        <style>
          {`
            @keyframes scroll-once {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-1 * var(--scroll-width)));
              }
            }

            @keyframes scroll-loop {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-1 * var(--scroll-width)));
              }
            }

            .animate-once {
              animation: scroll-once ${(totalWidth / 100) * 2}s linear;
            }

            .animate-loop {
              animation: scroll-loop ${totalWidth / 100}s linear infinite;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default SponsorsScroll;

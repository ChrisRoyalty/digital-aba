import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import Sponsor05 from "../../assets/german-corporation.png";
import Sponsor04 from "../../assets/eu.png";
import Sponsor02 from "../../assets/giz.png";
import Sponsor03 from "../../assets/digitalT.png";
import Sponsor01 from "../../assets/rad5hub.png"; // Replace with actual sponsor image paths
import PartnerModal from "./PartnerModal"; // Import modal component

const SponsorsScroll = () => {
  const sponsors = [
    { image: Sponsor01, name: "Sponsor 1", width: 190, height: 94 },
    { image: Sponsor02, name: "Sponsor 2", width: 190, height: 126 },
    { image: Sponsor03, name: "Sponsor 3", width: 190, height: 67 },
    { image: Sponsor04, name: "Sponsor 4", width: 190, height: 124 },
    { image: Sponsor05, name: "Sponsor 5", width: 190, height: 99 },
  ];

  const [loopAnimation, setLoopAnimation] = useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);

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
        <h1 className="text-[32px] font-bold"> Meet Our Partners </h1>
        <p className="lg:text-[20px] text-[16px] text-[#D1D1D6]">
          Discover some of the funders, partners, and collaborators who are
          supporting our mission at Digital Aba. With their invaluable support,
          we aim to reach and empower thousands of fashion entrepreneurs and
          MSMEs in Aba, Nigeria, by 2030.
        </p>
      </div>
      <div className="sponsors w-full bg-gradient-to-b from-[#1542ac54] via-gray-300 to-[#ffff] relative overflow-x-hidden max-sm:overflow-auto">
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
      <div className="text-center mt-8">
        {/* Motion button with animations using whileInView */}
        {/* <motion.button
          // href="https://wa.link/k1urvf"
          className="bg-[#BFD4FA] text-[#163F9E] rounded-lg px-8 py-4 lg:text-[15px] text-[18px] font-bold shadow-lg"
          initial={{ opacity: 0, scale: 0.6 }} // Initial state: button is invisible and small
          whileInView={{
            opacity: 1,
            scale: 1.1, // Slight scale-up effect
            y: [30, 0], // Bounce effect when it enters the view (moves from below)
            transition: {
              delay: 0.3, // Delay before starting animation
              duration: 1.2, // Duration of the animation
              ease: "easeOut",
            },
          }}
          viewport={{ once: false }} // Ensure it animates repeatedly as long as it's in view
          whileHover={{
            scale: 1.1,
            textShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: { type: "spring", stiffness: 300, damping: 15 },
          }}
          onClick={() => setIsPartnerModalOpen(true)}
        >
          Become a Partner
        </motion.button> */}
        {/* Use the modal */}
        <PartnerModal
          isOpen={isPartnerModalOpen}
          onClose={() => setIsPartnerModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default SponsorsScroll;

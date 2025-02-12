import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoMenuSharp } from "react-icons/io5";
import DigitalAbaLogo from "../assets/digitalAbaWhiteLogo.png";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false); // Mobile menu state
  const [activeDropdown, setActiveDropdown] = useState(null); // Active dropdown index

  // Toggle the mobile menu
  const handleMenuToggle = () => {
    setToggleMenu((prev) => !prev);
    setActiveDropdown(null); // Reset dropdown when toggling menu
  };

  // Handle dropdown toggling
  const handleDropdownClick = (index) => {
    setActiveDropdown((prevIndex) => (prevIndex === index ? null : index));
  };

  // Close menu and navigate
  const closeMenuAndNavigate = () => {
    setToggleMenu(false);
    setActiveDropdown(null);
  };

  const links = [
    { path: "/", label: "Home" },
    {
      path: "/about",
      label: "About Us",
      dropdown: ["Our Team", "Our Vision", "Our Mission"],
    },
    {
      path: "/msme",
      label: "MSME Hub",
      dropdown: ["Programs", "Resources", "Support"],
    },
    { path: "/hackathon", label: "Hackathons" },
    {
      path: "/career",
      label: "Career",
      dropdown: ["Opportunities", "Internships", "Volunteering"],
    },
    { path: "/impact", label: "Impact" },
    {
      path: "/event",
      label: "Event",
      dropdown: ["Programs", "Resources", "Support"],
    },
  ];

  return (
    <header className="bg-black text-white fixed w-full z-50 shadow-md flex flex-col justify-center ">
      <div className="container mx-auto flex justify-between items-center w-[90%] h-[11vh]">
        {/* Logo */}
        <NavLink to="/" className="logo">
          <img
            src={DigitalAbaLogo}
            alt="Digital Aba Logo"
            className="w-[150px] h-[25px]"
          />
        </NavLink>

        {/* Desktop Navigation */}
        {/* <nav className="hidden lg:flex space-x-6 ">
          {links.map((link, index) => (
            <div
              key={index}
              className="relative group"
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div
                className="flex items-center cursor-pointer"
                onClick={() => handleDropdownClick(index)}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#BFD4FA] border-b-2 border-[#BFD4FA] pb-1 text-[8px] xl:text-[15px]"
                      : "hover:text-[#BFD4FA] text-[8px] xl:text-[15px]"
                  }
                >
                  {link.label}
                </NavLink>
                {link.dropdown && (
                  <MdOutlineArrowDropDown className="ml-2 text-xl group-hover:text-[#BFD4FA] transition-transform duration-300" />
                )}
              </div>
              {link.dropdown && (
                <ul
                  className={`absolute left-0 top-full mt-2 bg-white text-black rounded shadow-lg z-50 w-40 transition-all duration-300 ease-in-out transform ${
                    activeDropdown === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  {link.dropdown.map((item, i) => (
                    <li
                      key={i}
                      className="px-4 py-2 hover:bg-gray-200"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav> */}

        {/* Action Buttons */}
        <div className="flex items-center lg:gap-6 gap-2">
          <a
            href="https://wa.link/vdt3og"
            to="/join"
            className="border border-[#BFD4FA] text-[#BFD4FA] rounded-lg p-2 shadow-lg"
            onClick={closeMenuAndNavigate}
          >
            Join <span className="max-[370px]:hidden">the Program</span>
          </a>
          <a
            href="https://wa.link/k1urvf"
            className="bg-[#BFD4FA] text-[#163F9E] rounded-lg p-2 lg:text-[15px] text-[15px] shadow-lg max-sm:hidden"
            onClick={closeMenuAndNavigate}
          >
            Support the Project
          </a>
          {/* <button className="lg:hidden" onClick={handleMenuToggle}>
            <IoMenuSharp className="text-2xl" />
          </button> */}
        </div>
      </div>

      {/* Mobile Navigation */}
      {toggleMenu && (
        <nav className="lg:hidden bg-black text-white px-4 py-4 flex flex-col gap-4">
          {links.map((link, index) => (
            <div key={index} className="relative">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => handleDropdownClick(index)}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#BFD4FA] border-b-2 border-[#BFD4FA] pb-1"
                      : "hover:text-[#BFD4FA]"
                  }
                  onClick={closeMenuAndNavigate}
                >
                  {link.label}
                </NavLink>
                {link.dropdown && (
                  <MdOutlineArrowDropDown className="ml-2 text-xl" />
                )}
              </div>
              {link.dropdown && activeDropdown === index && (
                <ul className="mt-2 bg-white text-black rounded shadow-lg w-full">
                  {link.dropdown.map((item, i) => (
                    <li
                      key={i}
                      className="px-4 py-2 hover:bg-gray-200"
                      onClick={closeMenuAndNavigate}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;

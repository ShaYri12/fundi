import React, { useState } from "react";
import FundiLogo from "../assets/fundi8-sm-kit.jpg";
import AustFlag from "../assets/aust-flag.svg";
import { Link } from "react-router-dom";
import { HiBars2 } from "react-icons/hi2"; // Ensure correct import path for icons
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <header className="bg-white fixed w-full left-0 top-0 transition-all duration-300 px-4 z-50">
      <div className="flex items-center justify-between gap-2 sm:gap-10 max-w-[1440px] w-full mx-auto min-h-[72.5px] md:py-[20px] lg:py-3.5 z-50">
        <Link to="/" className="relative z-[60]">
          <img src={FundiLogo} alt="FundiLogo" className="h-10" />
        </Link>

        <ul className="hidden lg:flex items-center flex-1">
          <li>
            <Link
              to="#"
              className="inter-f text-[15px] text-night-black block py-4 lg:py-2.5 lg:pl-3 px-4 lg:px-3 underline-offset-2 hover:underline transition-all duration-300"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="inter-f text-[15px] text-night-black block py-4 lg:py-2.5 lg:pl-3 px-4 lg:px-3 underline-offset-2 hover:underline transition-all duration-300"
            >
              Pricing
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <img
            src={AustFlag}
            alt="AustFlag"
            className="w-8 cursor-pointer mr-4 hidden lg:block"
          />
          <Link
            to="#"
            className="text-night-black text-[15px] inter-f hidden lg:block"
          >
            Login
          </Link>
          <button className="bg-[#ff5a65] border border-[#ff5a65] text-white rounded-[80px] text-xs md:text-[15px] font-medium cursor-pointer py-2 md:py-[.625rem] px-3 md:px-[1.5rem] transition-colors duration-300 inter-f hover:bg-[#db4550]">
            Book a demo
          </button>

          <button className="flex lg:hidden" onClick={toggleDrawer}>
            <HiBars2 className="text-3xl cursor-pointer text-night-black" />
          </button>
          <div
            className={`absolute top-5 right-5 z-50 ${
              isDrawerOpen ? "" : "hidden"
            }`}
          >
            {/* Close button */}
            <button onClick={toggleDrawer} className="text-3xl">
              <IoMdClose className="text-black" />
            </button>
          </div>
        </div>
      </div>

      {/* Drawer that opens from top to bottom */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-40 transition-all duration-300 transform ${
          isDrawerOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <Link
            to="#"
            className="text-lg text-night-black"
            onClick={toggleDrawer}
          >
            Features
          </Link>
          <Link
            to="#"
            className="text-lg text-night-black"
            onClick={toggleDrawer}
          >
            Pricing
          </Link>
          <Link
            to="#"
            className="text-lg text-night-black"
            onClick={toggleDrawer}
          >
            Login
          </Link>
          <button className="bg-[#ff5a65] border border-[#ff5a65] text-white rounded-[80px] text-xs md:text-[15px] font-medium cursor-pointer py-2 md:py-[.625rem] px-3 md:px-[1.5rem] transition-colors duration-300 inter-f hover:bg-[#db4550]">
            Book a demo
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

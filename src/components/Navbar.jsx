import React from "react";
import logo2 from "../assets/logo 2.png";
import HomeIcon from "@mui/icons-material/Home";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SearchIcon from "@mui/icons-material/Search";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

const Navbar = () => {
  return (
    <div className="shadow-lg mb-[100px] h-[60px]">
      <nav className="flex bg-white w-[100vw]">
        <div className="pl-[100px] text-center h-[60px] flex justify-center items-center w-[20vw]">
          <img src={logo2} className="h-[50px]" alt="" />
          <p className="text-[25px] font-semibold">BRILLIANT</p>
        </div>

        <div className="flex items-center pl-[50px] w-[80vw] pr-[120px]">
          {/* Home, Course, Today */}
          <div className="flex pr-[40px]">
            <ul className="flex space-x-9 text-[17px]">
              <li className="relative">
                <p className="text-black after:content-[''] after:absolute after:left-0 after:bottom-[-59%] after:h-[3px] after:w-full after:bg-black">
                  <HomeIcon /> Home
                </p>
              </li>
              <li>
                <p className=" text-[#5f5f5f]">
                  <LibraryBooksIcon /> {" "}
                  Courses
                </p>
              </li>
              <li>
                <p className=" text-[#5f5f5f]">
                  <CalendarMonthIcon /> {" "}
                  Today
                </p>
              </li>
            </ul>
          </div>

          {/* Search Box */}
          <div className="flex items-center">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                <SearchIcon className="" />
              </div>
              <input
                type="text"
                className="pr-5 px-4 py-1  w-[400px] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-[#f5f5f5] pl-10"
              />
            </div>
          </div>

          {/* Start Trial Button */}
          <div className="ml-[20px]">
            <button className="border-[1.5px] tracking-widest h-[34px] font-bold text-[#459b81] border-[#459b81] pl-10 pr-10 pt-1 pb-1 text-[11px] rounded-md">
              START TRIAL
            </button>
          </div>

          {/* Last 2 icons */}
          <div className="flex space-x-5 ml-[20px]">
            <p className="font-bold text-[20px]">
              2<FlashOnIcon className="text-[#FFD700]" />
            </p>
            <p>
              <DensityMediumIcon />
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
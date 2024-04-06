import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SearchIcon from '@mui/icons-material/Search';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='mb-[60px]'>
      <nav className={`bg-white flex justify-between items-center p-4 ${isMenuOpen ? '' : 'shadow-lg'}`}>
        <div className="text-2xl font-bold">BRILLIANT</div>
        <MenuIcon onClick={toggleMenu} />
      </nav>
      {isMenuOpen && (
        <div className={`${isMenuOpen ? 'shadow-lg' : ''} p-4`}>
          <div className="flex justify-around mb-4">
            <div className="text-center">
              <HomeIcon />
              <p>Home</p>
            </div>
            <div className="text-center">
              <LibraryBooksIcon />
              <p>Courses</p>
            </div>
            <div className="text-center">
              <CalendarMonthIcon />
              <p>Today</p>
            </div>
          </div>
          <div className="relative">
            <input
              type="text"
              className="w-[80vw] pr-5 px-4 py-1 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-[#f5f5f5] pl-10"
              placeholder=""
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
              <SearchIcon className="text-gray-400" />
            </div>
          </div>
          <button className="border text-[#459b81] border-[#459b81] px-4 py-2 font-semibold text-sm rounded-md mt-4">
            START TRIAL
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;

'use client';
import React, { useState } from 'react';
import MenuItem from './MenuItem';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import DarkModeButton from './DarkModeButton';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleisMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center p-2 max-w-6xl mx-auto my-5 select-none">
      {isMenuOpen ? (
        <AiOutlineClose
          className="text-2xl mx-2 font-black cursor-pointer sm:hidden"
          onClick={toggleisMenuOpen}
        />
      ) : (
        <GiHamburgerMenu
          className="text-2xl mx-2 cursor-pointer sm:hidden"
          onClick={toggleisMenuOpen}
        />
      )}
      <div
        className={`absolute transform transition duration-300 ease-in-out ${
          !isMenuOpen && '-translate-x-full'
        } flex w-screen flex-col items-center p-5 top-20 left-0 bg-gray-50 dark:bg-gray-700 space-y-3 sm:translate-x-0 sm:bg-transparent sm:dark:bg-transparent sm:flex-row sm:static sm:space-y-0`}
      >
        <MenuItem title="Home" address="/" />
        <MenuItem title="About" address="/about" />
      </div>
      <div className="mx-3 flex items-center">
        <DarkModeButton/>
        <span className="text-2xl sm:mx-4 font-bold bg-orange-400 text-white px-2 py-1 rounded-md">
          IMDB
        </span>
      </div>
    </div>
  );
}

export default Navbar;

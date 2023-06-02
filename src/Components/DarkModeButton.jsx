'use client';
import React, { useEffect, useState } from 'react';
import { BsFillSunFill } from 'react-icons/bs';
import { BsFillMoonFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';

function DarkModeButton() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    systemTheme === 'dark' ? setIsDarkMode(true) : setIsDarkMode(false);
  }, []);

  console.log(isDarkMode);
  if(isDarkMode) {
    setTheme('dark');
  }
  else {
      setTheme('light');
    }

  return (
    <div className='text-2xl mx-4'>
      {isDarkMode ? (
        <BsFillSunFill className='cursor-pointer' onClick={() => setIsDarkMode(false)} />
      ) : (
        <BsFillMoonFill className='cursor-pointer' onClick={() => setIsDarkMode(true)} />
      )}
    </div>
  );
}

export default DarkModeButton;

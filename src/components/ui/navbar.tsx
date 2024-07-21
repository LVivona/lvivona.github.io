'use client'
import { useState, useEffect } from 'react'
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { Github } from '../icons/github';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useTheme } from '@/context/themeContext';

export default function Navbar() {
  const {isDarkMode, toggleTheme} = useTheme();
  const [visible, setVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHoveredOn, setIsHoveredOn] = useState(false);

  useEffect(() =>{
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1200); 

    return () => clearTimeout(timer);
  })

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY === 0) {
        setVisible(true);
      } else if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav className={`  z-20 fixed top-0 left-0 right-0 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div 
        className={cn("relative  transition-all duration-300", isHoveredOn ? "backdrop-blur-md" : "")}
      >
        <div className="dark:bg-black bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo placeholder */}
            {/* <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full mr-8"></div> */}
            <div className='w-6' onClick={toggleTheme}>{!isDarkMode ? <SunIcon className='fill-black dark:fill-white' width={28} height={28}/> : <MoonIcon className='fill-black dark:fill-white'  width={28} height={28}/>}</div>
            {/* Navigation items */}
            <div className="flex items-center justify-center flex-grow space-x-8">
              {/* header links */}

              <a href='#about'><div onMouseEnter={() => {setIsHoveredOn(true)}} className=' text-black dark:text-gray-300  text-sm relative group'>About</div></a>
              <Link href='/blogs'><div onMouseEnter={() => {setIsHoveredOn(true)}} className='text-black dark:text-gray-300 text-sm relative group'>Blog</div></Link>

            </div>
            {/* Search icon placeholder */}
            <Link href={"https://github.com/LVivona"}><Github/></Link>
            
          </div>
        </div>
        {/* Gradient overlay */}
        {/* <div 
          onMouseLeave={() => setIsHoveredOn(false)} 
          className={cn(!isHoveredOn ? "opacity-0" : "opacity-100", "fixed top-full left-0 right-0 h-[100px] bg-gradient-to-b from-black to-transparent transition-opacity duration-300 z-20")}
        ></div>
        <div className={cn(isHoveredOn ? "backdrop-blur-md fixed w-screen h-screen transition-all duration-300 z-0" : "-z-10")}></div> */}
      </div>
    </nav>
  );
}

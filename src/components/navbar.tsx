'use client'
import { useState, useEffect } from 'react'
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { Github } from './icons/github';
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useTheme } from '@/context/themeContext';

export default function Navbar({className = "", visibleDelay = 500} : {className?: string, visibleDelay?: number}) {
  const {isDarkMode, toggleTheme} = useTheme();
  const [visible, setVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHoveredOn, setIsHoveredOn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, visibleDelay);
    return () => clearTimeout(timer);
  }, [visibleDelay]);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`z-20 fixed top-0 left-0 right-0 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div
        className={cn("relative transition-all duration-300", isHoveredOn ? "backdrop-blur-md" : "")}
      >
        <div className={`dark:bg-black ${className} bg-white max-w-full mx-auto px-4 sm:px-6 lg:px-8`}>
          <div className="flex items-center justify-between h-16">
            <div className='w-6' onClick={toggleTheme}>
              {!isDarkMode ? <SunIcon className='fill-black dark:fill-white' width={28} height={28}/> : <MoonIcon className='fill-black dark:fill-white' width={28} height={28}/>}
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-grow space-x-8">
              <Link href='/'><div onMouseEnter={() => {setIsHoveredOn(true)}} className='text-black dark:text-gray-300 hover:opacity-40 duration-300 text-sm relative group hover:underline'>Home</div></Link>
              <Link href='/blog'><div onMouseEnter={() => {setIsHoveredOn(true)}} className='text-black dark:text-gray-300 hover:opacity-40 duration-300 text-sm relative group hover:underline'>Blog</div></Link>
              <Link href='/projects'><div onMouseEnter={() => {setIsHoveredOn(true)}} className='text-black dark:text-gray-300 hover:opacity-40 duration-300 text-sm relative group hover:underline'>Projects</div></Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-black dark:text-white">
                {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
              </button>
            </div>

            <Link href={"https://github.com/LVivona"} className="hidden md:block"><Github/></Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-black">
              <Link href='/'><div className='block text-black dark:text-gray-300 hover:opacity-40 duration-300 text-sm relative group hover:underline px-3 py-2'>Home</div></Link>
              <Link href='/blog'><div className='block text-black dark:text-gray-300 hover:opacity-40 duration-300 text-sm relative group hover:underline px-3 py-2'>Blog</div></Link>
              <Link href='/projects'><div className='block text-black dark:text-gray-300 hover:opacity-40 duration-300 text-sm relative group hover:underline px-3 py-2'>Projects</div></Link>
              <Link href={"https://github.com/LVivona"} className="block px-3 py-2"><Github/></Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
'use client';
import { BsSunFill } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';

const ThemeToggler = () => {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark')
        }
        else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode])


    return (
        <div className='flex items-center gap-1'>
            <BsSunFill className='ml-auto text-yellow-400' size={18} />
            <div onClick={() => setDarkMode(!darkMode)} className='relative flex items-center  w-12 h-6 dark:bg-[#02162B] bg-gray-200 cursor-pointer rounded-full'>
                <div className="absolute bg-white dark:bg-[#02162B] w-5 h-5 border-[3px] border-[#007bff] rounded-full shadow-md transform transition-transform duration-300" style={darkMode ? { right: '1px' } : { left: '3px' }} />
            </div>
            <FaMoon className='ml-auto text-gray-800 dark:text-white' size={15} />
        </div>
    );
};

export default ThemeToggler;

'use client'
import Link from 'next/link';
import React from 'react';
import Button from './Button';
import { usePathname } from 'next/navigation';
import ThemeToggler from './ThemeToggler';

const Navbar = () => {
    const pathName = usePathname();
    console.log(pathName);
    const links = <div className='font-semibold text-xl flex gap-8 dark:text-dark-text'>
        <Link href={`/`} className={`hover:text-blue-500   ${pathName === '/' && 'text-blue-500 dark:text-blue-500'}`}>Home</Link>
        <Link href={`/rooms`} className={`hover:text-blue-500   ${pathName === '/rooms' && 'text-blue-500'}`}>Rooms</Link>
        <Link href={`/`} className={`hover:text-blue-500   ${pathName === '/about-us' && 'text-blue-500'}`}>About us</Link>
        <Link href={`/`} className={`hover:text-blue-500   ${pathName === '/contact' && 'text-blue-500'}`}>Contact</Link>
    </div>

    const hideNavbar = pathName === '/dashboard';
    return (
        <nav>
            {!hideNavbar && <div className='fixed bg-light-background dark:bg-dark-background  bg-opacity-75 w-full z-50'>
                <div className='max-w-screen-2xl mx-auto flex justify-between items-center h-16 p-5 lg:p-0'>
                    <div className="">
                        <Link href={`/`} className='text-black font-semibold text-4xl'> <cite className='text-light-text dark:text-dark-text'>Roomi</cite><cite className='text-blue-400'>Fy</cite></Link>
                    </div>
                    <div className="">
                        {links}
                    </div>
                    <div className="flex gap-5 items-center">
                        <ThemeToggler />
                        <Link href={`/login`}>
                            <Button className={`bg-blue-500 hover:bg-blue-600`} text={`Sign In`} />
                        </Link>

                    </div>
                </div>
            </div>}
        </nav>
    );
};

export default Navbar;
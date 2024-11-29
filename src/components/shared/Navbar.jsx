'use client'
import Link from 'next/link';
import React from 'react';
import Button from './Button';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathName = usePathname();
    const links = <div className='font-semibold text-xl flex gap-8'>
        <Link href={`/`} className={`hover:text-blue-600 ${pathName === '/' && 'text-blue-500'}`}>Home</Link>
        <Link href={`/`} className={`hover:text-blue-600 ${pathName === '/rooms' && 'text-blue-500'}`}>Rooms</Link>
        <Link href={`/`} className={`hover:text-blue-600 ${pathName === '/about-us' && 'text-blue-500'}`}>About us</Link>
        <Link href={`/`} className={`hover:text-blue-600 ${pathName === '/contact' && 'text-blue-500'}`}>Contact</Link>

    </div>
    return (
        <nav className='fixed bg-base-300 bg-opacity-75 w-full z-50'>
            <div className='max-w-screen-2xl mx-auto flex justify-between items-center h-16 p-5 lg:p-0'>
                <div className="">
                    <Link href={`/`} className='text-black font-semibold text-4xl'> <cite>Roomi</cite><cite className='text-blue-400'>Fy</cite></Link>
                </div>
                <div className="">
                    {links}
                </div>
                <div className="">
                    <Link href={`/login`}>
                        <Button className={`bg-blue-400 hover:bg-blue-500`} text={`Sign In`} />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
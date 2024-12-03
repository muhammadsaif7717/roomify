'use client'
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Button from './Button';
import { usePathname } from 'next/navigation';

const Footer = () => {
    const pathName = usePathname()

    const hideFooter = pathName === '/dashboard';
    return (
        <footer>
            {!hideFooter && <div className='w-full bg-gray-800 text-white'>
                <div className='max-w-screen-2xl mx-auto flex flex-col md:flex-row  justify-between gap-8 p-5 lg:px-0 lg:py-5'>
                    <div className="space-y-5">
                        <Link href={`/`} className='text-white font-semibold text-4xl'> <cite>Roomi</cite><cite className='text-blue-400'>Fy</cite></Link>
                        <p className='w-4/5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                    </div>
                    <div className="flex flex-col gap5
                ">
                        <h1 className='font-semibold text-lg'>Services</h1>
                        <ul>
                            <li className='text-white'>Room</li>
                            <li className='text-white'>Room</li>
                            <li className='text-white'>Room</li>
                        </ul>
                    </div>
                    <div className="space-y-5">
                        <div className="flex gap-8">
                            <FaFacebook className='text-3xl' />
                            <FaLinkedin className='text-3xl' />
                            <FaGithub className='text-3xl' />
                        </div>
                        <div className='relative  w-72 lg:w-96'>
                            <input type="text" className="input input-bordered bg-gray-400 placeholder:text-white w-full" placeholder='Enter your email' />
                            <Button text={`Submit`} className={`absolute right-0`} />
                        </div>
                    </div>
                </div>
            </div>}
        </footer>
    );
};

export default Footer;
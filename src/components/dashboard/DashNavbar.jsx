'use client'
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import DashSidebar from './DashSidebar';
import Link from 'next/link';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <nav className="bg-gray-800 text-white ">
            <div className="container mx-auto flex justify-between items-center py-4">
                {/* Logo */}
                <Link href={'/'} >
                    <cite className='text-3xl font-bold'>Roomi<cite className='text-blue-400'>Fy</cite></cite>
                </Link>

                {/*  Links */}
                <div className="hidden md:flex gap-8 text-sm">
                    Admin: Muhammad Saif
                </div>

                {/* Menu Icon */}
                <button
                    onClick={toggleSidebar}
                    className="text-2xl md:hidden focus:outline-none"
                >
                    {isSidebarOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Sidebar */}
            {isSidebarOpen && <DashSidebar toggleSidebar={toggleSidebar} />}
        </nav>
    );
};

export default Navbar;

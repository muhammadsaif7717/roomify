import Link from 'next/link';
import React from 'react';

const DashSidebar = ({ toggleSidebar }) => {
    return (
        <div className="fixed top-0 left-0 w-48 h-full bg-gray-700 text-white shadow-lg z-50">
            <div className="p-4 text-lg font-bold border-b border-gray-600">
            <Link href={'/'} >
                    <cite className='text-3xl font-bold'>Roomi<cite className='text-blue-400'>Fy</cite></cite>
                </Link>
            </div>
            <div className="mt-4 flex flex-col gap-4 px-4">
                link
            </div>
        </div>
    );
};

export default DashSidebar;

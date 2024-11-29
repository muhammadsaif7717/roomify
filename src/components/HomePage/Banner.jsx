import React from 'react';

const Banner = () => {
    const banner = {
        title: 'Banner title',
        subtitle: 'Banner title'
    }
    return (
        <div
            className="relative h-[80vh] bg-fixed bg-center bg-cover flex items-center justify-center"
            style={{ backgroundImage: `url(${`/banner.jpg`})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 text-center text-white">
                <h1 className="text-4xl font-bold md:text-5xl">{banner.title}</h1>
                <p className="mt-2 text-lg md:text-xl">{banner.subtitle}</p>
            </div>
        </div>
    );
};

export default Banner;
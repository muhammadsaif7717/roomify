import React from 'react';

const loading = () => {
    return (
        <div className='min-h-[calc(100vh-165px)] flex items-center justify-center'>
            <span className="loading loading-spinner text-info text-9xl"></span>
        </div>
    );
};

export default loading;
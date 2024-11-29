import React from 'react';

const Button = ({text,onClick,className}) => {
    return (
        <button onClick={onClick} className={`btn btn-primary text-white border-none rounded-lg ${className}`}>
            {text}
        </button>
    );
};

export default Button;
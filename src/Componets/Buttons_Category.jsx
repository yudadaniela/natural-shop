import React from 'react';

const Buttons_Category = ({ label, onClick, type = "button",  }) => {
    return (
        <button type={type} className="bg-background-secondary text-primary-700 px-4 py-2 hover:bg-accent hover:text-white rounded" onClick={onClick}>
        <svg
  xmlns="http://www.w3.org/2000/svg"
  width="64"
  height="64"
  viewBox="0 0 64 64"
  fill="none"
  stroke="#004400"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M32 36 C30 28, 30 20, 32 12 C34 20, 34 28, 32 36 Z" fill="none"/>
  
  <path d="M28 38 C20 32, 16 24, 20 16 C24 22, 28 30, 28 38 Z" fill="none"/>
  
  <path d="M36 38 C44 32, 48 24, 44 16 C40 22, 36 30, 36 38 Z" fill="none"/>
</svg>
        
            {label}
        </button>
    );
};

export default Buttons_Category;



import React from "react";

const Category_Button = ({ label, onClick, type = "button", image }) => {
  return (
    <button
      type={type}
      class="flex flex-col items-center justify-center w-60 h-30 bg-background-secondary text-primary-700 px-4 py-2 hover:bg-accent hover:text-white rounded-xl"
      onClick={onClick}
    >
      
      {image}
      <span class="text-xl font-medium text-[color:var(--color-primary)] font-semibold ">{label}</span>
    
    </button>
  );
};

export default Category_Button;

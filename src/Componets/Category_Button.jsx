import React from "react";

const Category_Button = ({ label, onClick, type = "button", image }) => {
  return (
    <button
      type={type}
      class="bg-background-secondary text-primary-700 px-4 py-2 hover:bg-accent hover:text-white rounded"
      onClick={onClick}
    >
      {image}
      {label}
    </button>
  );
};

export default Category_Button;

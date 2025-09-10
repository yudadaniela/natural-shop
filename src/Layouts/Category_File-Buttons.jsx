import React from "react";
import Category_Button from "../Componets/Category_Button";
import { categories } from "../mock/categories";

const Category_File_Buttons = () => (
 <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 p-4 max-w-7xl mx-auto ">
    {categories.map((category) => (
      <Category_Button
        key={category.id}
        type="button"
        image={<img src={category.icon} alt={category.name} className="w-20 h-20 text-center mr-2" />}
        label={category.name}
        />
      ))}
 </div>
);

export default Category_File_Buttons;
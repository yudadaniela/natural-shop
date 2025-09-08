import React from "react";
import Category_Button from "../Componets/Category_Button";
import { categories } from "../mock/categories";

const Category_File_Buttons = () => (
 <div>
    {categories.map((category) => (
      <Category_Button
        key={category.id}
        type="button"
        image={<img src={category.icon} alt={category.name} className="w-12 h-12 text-center mr-2" />}
        label={category.name}
        />
      ))}
 </div>
);

export default Category_File_Buttons;
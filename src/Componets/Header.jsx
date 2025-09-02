import React from "react";
import Search from "./Search";

const Header = () => (
  <header className="bg-background-secondary grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6  h-20 items-center">
    <h1>Natural Shop</h1>
    <div> 
    <Search />
    </div>
    <div>
      <button className="bg-background-secondary text-primary-700 px-4 py-2 hover:bg-accent hover:text-white rounded">
        Inicio
      </button>
      <button className="bg-background-secondary text-primary-500 px-4 py-2 hover:bg-accent hover:text-white rounded">
        Compra
      </button>
      <button className="bg-background-secondary text-primary-500 px-4 py-2 hover:bg-accent hover:text-white rounded">
        Nosotros
      </button>
      <button className="bg-background-secondary text-primary-500 px-4 py-2 hover:bg-accent hover:text-white rounded">
        Contactanos
      </button>
    </div>
    
  </header>
);

export default Header;

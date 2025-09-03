import React from "react";
import Search from "./Search";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  function GoToprincipalPag() {
    navigate('/');
  }
    function GoToShop() {
    navigate('/shop');
  }
    function GoToAbout() {
    navigate('/about');
  }

  return (
    <header className="bg-background-secondary grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6  h-20 items-center">
      <h1>Natural Shop</h1>
      <div>
        <Search />
      </div>
      <div>
        <button onClick={GoToprincipalPag} className="bg-background-secondary text-primary-700 px-4 py-2 hover:bg-accent hover:text-white rounded">
          Inicio
        </button>
        <button onClick={GoToShop} className="bg-background-secondary text-primary-500 px-4 py-2 hover:bg-accent hover:text-white rounded">
          Comprar
        </button>
        <button onClick={GoToAbout} className="bg-background-secondary text-primary-500 px-4 py-2 hover:bg-accent hover:text-white rounded">
          Acerca de nosotros
        </button>
        <button className="bg-background-secondary text-primary-500 px-4 py-2 hover:bg-accent hover:text-white rounded">
          Contactanos
        </button>
      </div>
    </header>
  );
};

export default Header;

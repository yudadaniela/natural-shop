import React from "react";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import userImg from "../assets/icons/User.svg";
import cartImg from "../assets/icons/cartImg.svg";
import burguerImg from "../assets/icons/burguer.svg";

const Header = () => {
  const navigate = useNavigate();

  function GoToprincipalPag() {
    navigate("/");
  }
  function GoToShop() {
    navigate("/shop");
  }
  function GoToAbout() {
    navigate("/about");
  }

  return (
    <header className="bg-background-secondary grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 p-6  auto  lg:h-20  items-center">
      <h1>Natural Shop</h1>
      <div>
        <Search />
      </div>
      <div className="hidden md:hidden lg:flex justify-center gap-4">
        <button
          onClick={GoToprincipalPag}
          className="bg-background-secondary text-primary-700 px-4 py-2 hover:bg-accent hover:text-white rounded"
        >
          Inicio
        </button>
        <button
          onClick={GoToShop}
          className="bg-background-secondary text-primary-500 px-4 py-2 hover:bg-accent hover:text-white rounded"
        >
          Comprar
        </button>
        <button
          onClick={GoToAbout}
          className="bg-background-secondary text-primary-500 px-4 py-2 hover:bg-accent hover:text-white rounded"
        >
          Acerca de nosotros
        </button>
        <button className="bg-background-secondary text-primary-500 px-4 py-2 hover:bg-accent hover:text-white rounded">
          Contactanos
        </button>
      </div>

      <div>
        <button className=" lg:hidden flex justify-end">
          <img
            src={burguerImg}
            alt="Buscar"
            style={{ width: "18px", height: "18px" }}
          />
        </button>

        <button className="bg-background-secondary text-primary-500 px-4 py-2 hover:bg-accent hover:text-white rounded">
          <img
            src={userImg}
            alt="user"
            style={{ width: "18px", height: "18px" }}
          />
        </button>
        <button className="bg-background-secondary text-primary-500 px-4 py-2 hover:bg-accent hover:text-white rounded">
          <img
            src={cartImg}
            alt="cart"
            style={{ width: "18px", height: "18px" }}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;

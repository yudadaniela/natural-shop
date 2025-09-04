import React from "react";
import { useNavigate } from "react-router-dom";

const Home_screen = () => {
  const navigate = useNavigate();
  function GoToShop() {
    navigate("/shop");
  }
  return (
    <div
      className="bg-cover bg-no-repeat h-100  bg-center grid grid-cols-2 gap-4 "
      style={{ backgroundImage: "url('/src/assets/background_leaves.png')" }}

    >
      <div class="col-span-1 flex items-center justify-center">
        <h3 className="text-7xl font-serif ">Saludable y Natural</h3>
      </div>
      <div className="col-span-1 flex flex-col items-center justify-center">
        <h5 class="text-4xl mb-4 italic font-semibold font-serif text-center">
          Descubre nuestra colección de productos naturales
        </h5>
        <button
          onClick={GoToShop}
          class="bg-background-secondary text-primary-500 px-4 py-2 hover:bg-accent hover:text-white rounded"
        >
          Compra aquí
        </button>
      </div>
    </div>
  );
};
export default Home_screen;

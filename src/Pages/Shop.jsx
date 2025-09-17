import React from "react";
import Header from "../Componets/header";
import Footer from "../Componets/Footer";
import { products } from "../mock/Products";

function Shop() {
  return (
    <div class="flex flex-col min-h-screen ">
      <Header />
      <main class="flex-grow  bg-[color:var(--color-background)]">
        <div className="p-4 m-4 srounded grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
          {products.map((product) => (
            <div key={product.id} className="p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
              <img
                src={product.image}
                alt={product.name}
                className="w-[300px] h-[300px] object-cover "
              />
              <h2>{product.name}</h2>
              <h3>$ {product.price}</h3>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Shop;

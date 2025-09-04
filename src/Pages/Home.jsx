import React from "react";
import Header from "../Componets/header";
import Home_screen from "../Layouts/Home_screen";
import Footer from "../Componets/Footer";

function Home() {
  return (
    <div class="flex flex-col min-h-screen">
      <Header />
      <main class="flex-grow">
        <Home_screen />
      </main>

      <Footer />
    </div>
  );
}

export default Home;

import React from "react";
import Header from "../Componets/header";
import Home_screen from "../Layouts/Home_screen";
import Footer from "../Componets/Footer";
import Category_File_Buttons from "../Layouts/Category_File-Buttons";

function Home() {
  return (
    <div class="flex flex-col min-h-screen">
      <Header />
      <main class="flex-grow">
        <Home_screen />
        <Category_File_Buttons/>
      </main>

      <Footer />
    </div>
  );
}

export default Home;

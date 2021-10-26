import React from "react";
import "../../App.css";
import Cards from "../Cards";
import ComoFunciona from "../ComoFunciona";
import Graficas from "../Graficas";
import HeroSection from "../HeroSection";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Graficas />
      <ComoFunciona />
    </>
  );
}

export default Home;

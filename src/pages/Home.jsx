import React from "react";
import HeroSection from '../componentes/HeroSection';
import NosServices from '../componentes/Nosservices';
import Visite from '../componentes/Visite';
import CarteSection from "../componentes/CarteSection";

function Home() {
  return (
    <div>
      <HeroSection />
      <CarteSection />
      <NosServices />
      <Visite />
    </div>
  );
}

export default Home;

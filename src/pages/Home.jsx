import React from "react";
import HeroSecton from '../componentes/HeroSection';
import NosServices from '../componentes/Nosservices';
import Visite from '../componentes/Visite';
import CarteSection from "../componentes/CarteSection";

function Home() {
    return (
        <div>
            <HeroSecton />
            <CarteSection />
            <NosServices />
            <Visite />
        </div>
    );
}

export default Home;

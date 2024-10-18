import React from "react";
import HeroSecton from '../componentes/HeroSection';
import NosServices from '../componentes/Nosservices';
import Visite from '../componentes/Visite';

function Home() {
    return (
        <div>
            <HeroSecton />
            <NosServices />
            <Visite />
        </div>
    );
}

export default Home;

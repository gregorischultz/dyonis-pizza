import React from "react";
import imgPizza from '../assets/DIONY-S-PIZZ-pizza-1.png';

function HeroSecton() {
    return (
        <div className="h-[calc(100vh-5rem)] w-full relative bg-creme flex flex-col justify-center items-center">
            {/* Seção de texto, ajustando para duas linhas */}
            <div className="w-full text-center mb-8 px-4">
                <h1 className="text-footer-color text-6xl md:text-8xl font-bold font-alegreyaSans leading-tight max-w-4xl mx-auto">
                    Il est important de vivre <br /> le moment présent
                </h1>
            </div>

            {/* Seção da imagem, fixada na parte de baixo */}
            <div className="w-full absolute bottom-0 flex justify-center">
                <img 
                    src={imgPizza} 
                    className="w-auto h-auto max-w-full max-h-[50vh]" 
                    alt="Pizza"
                />
            </div>
        </div>
    );
}

export default HeroSecton;



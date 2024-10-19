/*Componente da page Home.jsx*/

import React from "react";
import imgPizza from '../assets/ImagePizza.png';

function HeroSecton() {
    return (
        <div className="w-full h-full relative bg-creme flex justify-center items-center">
          <div className="text-center flex flex-col items-center mt-16">
            <h1 className="absolute text-center text-footer-color text-7xl font-alegreyaSans font-bold">Il est important de vivre<br/>le moment présent.</h1>
            <div className="relative">
              <img src={imgPizza} alt="PizzaHeroSection" className="w-full h-auto mt-36" />
            </div>
          </div>
        </div>
      );
}

export default HeroSecton;



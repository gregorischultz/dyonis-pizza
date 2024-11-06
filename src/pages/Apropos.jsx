import React from 'react';
import imgPizza from '../assets/Imagempizza2.png';


const Apropos = () => {
  return (
    <div className='w-full h-full flex flex-col justify-start items-start'>
      <div className="w-full h-full relative bg-creme flex justify-center items-center">
        <div className="text-center flex flex-col items-center mt-16">
          <h1 className="absolute text-center text-footer-color text-7xl font-alegreyaSans font-bold">Découvrez nos offres et services</h1>
          <div className="relative">
            <img src={imgPizza} alt="Pizza" className="w-full h-auto mt-36" />
          </div>
        </div>
      </div>
      <div className='w-full h-full pt-10 pb-20 px-20 flex flex-col justify-start items-start gap-[72px]'>
        <h1 className='text-[#2D1312] text-[64px] font-alegreyaSans font-bold leading-[64px] break-words'>Notre spécialité</h1>
        <div>
          <div>
            <h2>Pizza DUO</h2>
            <p>Vous hésitez entre deux pizzas ? <br />Pas de soucis, choisissez votre pizza DUO et profitez de deux pizzas au même temps.</p>
          </div>
          <div>
            <h2>Carte de fidélité</h2>
            <p>Commandez votre carte de fidélité et profitez d’une pizza Senior offerte au bout de 10 pizzas achetés !</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Apropos;
import React from 'react';
import imgPizza from '../assets/Imagempizza2.png';


const Apropos = () => {
  return (
    <div className='w-full h-full flex flex-col justify-start items-start'>
      <div className="w-full h-full relative bg-creme flex justify-center items-center">
        <div className="text-center flex flex-col items-center mt-16">
          <h1 className="absolute text-center text-footer-color text-7xl font-alegreyaSans font-bold">Découvrez nos offres<br /> et services</h1>
          <div className="relative">
            <img src={imgPizza} alt="Pizza" className="w-full h-auto mt-36" />
          </div>
        </div>
      </div>
      <div className='w-full h-full pt-10 pb-20 px-20 flex flex-col justify-start items-start gap-[72px]'>
        <h1 className='text-black text-[64px] font-alegreyaSans font-bold leading-[64px] break-words'>Notre spécialité</h1>
        <div className='self-stretch py-4 flex justify-start items-start gap-[120px]'>
          <div className='flex-grow flex-shrink basis-0 flex flex-col justify-start items-start gap-3'>
            <h2 className='h2Aprops'>Pizza DUO</h2>
            <p className='pApropos'>Vous hésitez entre deux pizzas ? <br />Pas de soucis, choisissez votre pizza DUO et profitez de<br /> deux pizzas au même temps.</p>
          </div>
          <div className='flex-grow flex-shrink basis-0 self-stretch flex flex-col justify-start items-start gap-3 ml-40'>
            <h2 className='h2Aprops'>Carte de fidélité</h2>
            <p className='pApropos'>Commandez votre carte de fidélité et profitez d’une<br /> pizza Senior offerte au bout de 10 pizzas achetés !</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Apropos;
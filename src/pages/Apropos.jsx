import React from 'react';


import imgPizza from '../assets/Imagempizza2.png';
import emporter from '../assets/emporte.png';
import evenements from '../assets/evenements.png';
import terrasse from '../assets/terrasse.png';
import map from '../assets/map.png';
import message from '../assets/message.png';
import location from '../assets/location.png';
import call from '../assets/call.png';

import Carousel from '../componentes/Carousel.jsx';



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
      <div className="w-full h-full pt-10 pb-20 pl-20 pr-20 flex flex-col justify-start items-start gap-18">
        <h1 className="text-black text-6xl font-alegreyaSans font-bold leading-[64px] break-words">Nos services</h1>
        <div className="w-full px-[120px] py-4 flex justify-between items-start mt-[72px]">
          <div className="div-cart-NosServices">
            <img src={emporter} alt="A emporter" />
            <div className="div-text">
              <h3 className="h3">À emporter</h3>
              <p className="p">Commandez par téléphone et <br /> rendez vous sur place pour <br /> récupérer votre commande.</p>
            </div>
          </div>
          <div className="div-cart-NosServices">
            <img src={evenements} alt="Événements privés" />
            <div className="div-text">
              <h3 className="h3">Événements privés</h3>
              <p className="p">Réservez pour un événement privé! <br /> Pour plus d’informations prenez <br /> contact avec nous.</p>
            </div>
          </div>
          <div className="div-cart-NosServices">
            <img src={terrasse} alt="Terrasse" />
            <div className="div-text">
              <h3 className="h3">Terrasse</h3>
              <p className="p">Profitez de votre repas sur <br /> place en intérieur climatisé, ou <br /> en terrasse !</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-full pt-10 pb-20 px-20 flex flex-col justify-start items-start gap-[72px]'>
        <h1 className='text-black text-[64px] font-alegreyaSans font-bold leading-[64px] break-words'>Ce que nos clients pensent de nous</h1>
        <div className='w-full h-full px-20 py-4 flex justify-center items-center gap-8'>
          <Carousel />
        </div>
      </div>
      <div className="w-full h-full pt-10 pb-20 px-20 flex flex-col justify-start items-start gap-[72px]">
            <h1 className="text-black self-stretch text-6xl  font-alegreyaSans font-bold leading-[64px] break-words">Rendez nous visite</h1>
            <div className="self-stretch flex justify-start items-start gap-24">
                <div className="flex justify-end items-center">
                    <img src={map} alt="Carte" />
                </div>
                <div className="w-[539px] py-4 flex flex-col justify-start items-start gap-10">
                    <div className="self-stretch h-44 flex flex-col justify-start items-start gap-1">
                        <h2 className="self-stretch text-black text-4xl font-alegreyaSans font-bold leading-[48px] break-words">Horaires d'ouverture</h2>
                        <div className="self-stretch flex justify-start items-center gap-4">
                            <p className="p1">Lundi : <br />Mar-Jeu :<br />Ven-Sam :<br />Dimanche :</p>
                            <p className="p1">Fermé<br />11:30 - 14:00 / 18:00 - 22:00<br />11:30 - 14:00 / 18:00 - 23:00<br />18:00 - 22:00</p>
                        </div>
                    </div>
                    <div className="self-stretch h-32 flex flex-col justify-start items-start gap-4">
                        <div className="div-icons">
                            <div>
                                <img src={location} alt="Localization" />
                            </div>
                            <p className="p2">130 RUE DE MELLAY, 45560 SAINT DENIS EN VAL</p>
                        </div>
                        <div className="div-icons">
                            <div>
                                <img src={call} alt="Telephone" />
                            </div>
                            <p className="p2">02 46 91 07 42</p>
                        </div>
                        <div className="div-icons">
                            <div>
                                <img src={message} alt="E-mail" />
                            </div>
                            <p className="p2">dionyspizz@gmail.com</p>
                        </div>
                        <div className="self-stretch px-10 py-4 bg-black rounded-xl border flex justify-center items-center">
                            <button className="text-[#D6DCE2] text-2xl font-alegreyaSans font-bold leading-7 break-words">Contactez nous !</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
};

export default Apropos;
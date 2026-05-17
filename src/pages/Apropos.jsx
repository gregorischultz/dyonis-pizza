import React from 'react';


import imgPizza from '../assets/ImagemPizza2.png';
import emporter from '../assets/emporte.png';
import evenements from '../assets/evenements.png';
import terrasse from '../assets/terrasse.png';
import map from '../assets/map.png';
import message from '../assets/message.png';
import location from '../assets/location.png';
import call from '../assets/call.png';

import Carousel from '../componentes/Carousel.jsx';
import NosServices from '../componentes/Nosservices.jsx';
import Visite from '../componentes/Visite.jsx';

function Apropos() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero */}
      <div className="w-full bg-creme section-padding">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <p className="text-footer-color font-montserrat font-semibold text-sm uppercase tracking-widest mb-3">
              À propos
            </p>
            <h1 className="section-title text-musgo mb-4">
              Découvrez nos offres et services
            </h1>
            <p className="text-musgo/60 font-montserrat text-base leading-relaxed max-w-md">
              Chez Diony's Pizz, chaque pizza est préparée avec amour, des ingrédients frais et cuite à la commande.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={imgPizza} alt="Pizza" className="w-full max-w-sm md:max-w-none h-auto object-contain" />
          </div>
        </div>
      </div>

      {/* Notre spécialité */}
      <section className="section-padding bg-white">
        <h2 className="section-title text-musgo mb-10">Notre spécialité</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="service-card items-start text-left">
            <div>
              <h3 className="text-2xl font-alegreyaSans font-bold text-musgo mb-3">Pizza DUO</h3>
              <p className="text-musgo/60 font-montserrat text-sm leading-relaxed">
                Vous hésitez entre deux pizzas ? Pas de soucis — choisissez votre pizza DUO et profitez de deux pizzas en même temps.
              </p>
            </div>
          </div>
          <div className="service-card items-start text-left">
            <div>
              <h3 className="text-2xl font-alegreyaSans font-bold text-musgo mb-3">Carte de fidélité</h3>
              <p className="text-musgo/60 font-montserrat text-sm leading-relaxed">
                Commandez votre carte de fidélité et profitez d'une pizza Senior offerte au bout de 10 pizzas achetées !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <NosServices />

      {/* Avis clients */}
      <section className="section-padding bg-white">
        <h2 className="section-title text-musgo mb-10">Ce que nos clients pensent de nous</h2>
        <Carousel />
      </section>

      {/* Rendez-nous visite */}
      <Visite />
    </div>
  );
}

export default Apropos;

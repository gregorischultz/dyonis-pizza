import React from "react";
import { Link } from "react-router-dom";
import imgPizza from '../assets/ImagePizza.png';

function HeroSection() {
  return (
    <section className="w-full bg-creme">
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 pt-28 pb-0 flex flex-col-reverse md:flex-row items-center gap-8">

        {/* Texto */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 pb-10 md:pb-16 animate-fade-in">
          <p className="text-footer-color font-montserrat font-semibold text-sm uppercase tracking-widest">
            Pizzeria artisanale · Saint-Denis-en-Val
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-alegreyaSans font-bold text-musgo leading-tight">
            Il est important de vivre<br className="hidden sm:block" /> le moment présent.
          </h1>
          <p className="text-musgo/60 font-montserrat text-base leading-relaxed max-w-md">
            Découvrez nos pizzas artisanales, préparées avec des ingrédients frais et cuits au four à chaque commande.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/Carte" className="btn-accent text-center">
              Voir la carte
            </Link>
            <Link to="/Apropos" className="btn-outline text-center">
              En savoir plus
            </Link>
          </div>
        </div>

        {/* Imagem */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={imgPizza}
            alt="Pizza artisanale Diony's Pizz"
            className="w-full max-w-sm md:max-w-none md:w-[90%] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

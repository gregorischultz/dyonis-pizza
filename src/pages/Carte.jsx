import React, { useState } from 'react';
import NavCarte from '../componentes/NavCarte';
import CardProduct from '../componentes/CardProduct';
import { products } from '../data/products';

function Carte() {
  const [category, setCategory] = useState('pizzas');

  const renderPizzas = () => (
    <div className="flex flex-col gap-12">
      <div>
        <h2 className="text-2xl font-alegreyaSans font-bold text-musgo mb-6 pb-2 border-b-2 border-creme-dark">
          Base Tomate
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.pizzas.sauceTomate.map((p) => (
            <CardProduct key={p.id} image={p.image} name={p.name} prices={p.prices} description={p.description} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-alegreyaSans font-bold text-musgo mb-6 pb-2 border-b-2 border-creme-dark">
          Base Crème
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.pizzas.sauceCreme.map((p) => (
            <CardProduct key={p.id} image={p.image} name={p.name} prices={p.prices} description={p.description} />
          ))}
        </div>
      </div>
    </div>
  );

  const renderOthers = () => (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {products[category].map((p) => (
        <CardProduct key={p.id} image={p.image} name={p.name} prices={p.prices} description={p.description} />
      ))}
    </div>
  );

  return (
    <div>
      {/* Hero */}
      <div className="w-full bg-creme section-padding">
        <div className="max-w-2xl">
          <p className="text-footer-color font-montserrat font-semibold text-sm uppercase tracking-widest mb-3">
            Notre carte
          </p>
          <h1 className="section-title text-footer-color mb-4">
            Découvrez nos pizzas
          </h1>
          <p className="text-musgo/60 font-montserrat text-base leading-relaxed">
            Base crème ou sauce tomate, toutes nos pizzas sont préparées avec des ingrédients frais.
          </p>
        </div>
      </div>

      {/* Produits */}
      <div className="section-padding bg-white">
        <div className="flex justify-center mb-10">
          <NavCarte onChangeCategory={setCategory} current={category} />
        </div>
        {category === 'pizzas' ? renderPizzas() : renderOthers()}
      </div>
    </div>
  );
}

export default Carte;

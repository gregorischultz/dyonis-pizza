import React, { useState } from "react";
import { Link } from "react-router-dom";
import CardProduct from './CardProduct';
import NavCarte from "./NavCarte";
import { products, previewPizzas } from '../data/products';

function CarteSection() {
  const [category, setCategory] = useState('pizzas');

  const items = category === 'pizzas' ? previewPizzas : products[category];

  return (
    <section className="section-padding bg-white">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <h2 className="section-title text-musgo">Carte</h2>
          <p className="text-musgo/50 font-montserrat text-base mt-2">
            Pizzas base crème ou sauce tomate, paninis et plus.
          </p>
        </div>
        <Link to="/Carte" className="btn-outline self-start sm:self-auto shrink-0">
          Voir tout →
        </Link>
      </div>

      <NavCarte onChangeCategory={setCategory} current={category} />

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((p) => (
          <CardProduct
            key={p.id}
            image={p.image}
            name={p.name}
            prices={p.prices}
            description={p.description}
          />
        ))}
      </div>
    </section>
  );
}

export default CarteSection;
